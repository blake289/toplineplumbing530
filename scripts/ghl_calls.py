#!/usr/bin/env python3
"""
GHL call counter for Topline Plumbing reporting.
Counts INBOUND phone calls (and answered vs missed) in a date range by paging
conversations active since the start date and scanning their TYPE_CALL messages.

Reads GHL_PIT_TOKEN + GHL_LOCATION_ID from the project .env.local.
Used by topline-report.py; also runnable standalone:
    python3 scripts/ghl_calls.py 2026-05-01 2026-05-31
"""
import os, sys, json, time, datetime
import urllib.request, urllib.parse

BASE = "https://services.leadconnectorhq.com"
VER = "2021-07-28"
DELAY = 0.12  # ~8 req/s, under GHL's 100/10s burst cap


def _env():
    env = {}
    p = os.path.join(os.path.dirname(__file__), "..", ".env.local")
    with open(p) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip()
    return env["GHL_PIT_TOKEN"], env["GHL_LOCATION_ID"]


def _get(url, token, soft=False):
    req = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {token}", "Version": VER,
        "User-Agent": "curl/8.4.0", "Accept": "application/json"})
    for attempt in range(5):
        try:
            time.sleep(DELAY)
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code in (403, 429) and attempt < 4:
                time.sleep(2 ** attempt)  # 1,2,4,8s backoff on rate limit
                continue
            if soft:
                return {}  # skip an individual unreadable conversation
            raise
        except (urllib.error.URLError, TimeoutError, OSError):
            if attempt < 4:
                time.sleep(2 ** attempt)  # retry transient network timeouts
                continue
            if soft:
                return {}
            raise
    return {}


def _iso_in_range(iso, start, end):
    d = datetime.datetime.fromisoformat(iso.replace("Z", "+00:00")).date()
    return start <= d <= end


def _iso_ms(iso):
    return int(datetime.datetime.fromisoformat(
        iso.replace("Z", "+00:00")).timestamp() * 1000)


def count_calls(start, end, token=None, loc=None):
    """start/end are datetime.date. Returns dict with inbound totals."""
    if token is None:
        token, loc = _env()
    start_ms = int(datetime.datetime(start.year, start.month, start.day,
                   tzinfo=datetime.timezone.utc).timestamp() * 1000)

    res = {"inbound": 0, "answered": 0, "missed": 0,
           "convs_scanned": 0, "outbound": 0, "mctb_saves": 0}
    cursor = None
    pages = 0
    while pages < 60:  # guard: 60 * 100 = 6000 convs
        pages += 1
        q = {"locationId": loc, "limit": 100}
        if cursor:
            q["startAfterDate"] = cursor
        data = _get(f"{BASE}/conversations/search?" + urllib.parse.urlencode(q), token)
        convs = data.get("conversations", [])
        if not convs:
            break
        stop = False
        for c in convs:
            lmd = c.get("lastMessageDate", 0)
            if lmd and lmd < start_ms:
                stop = True  # nothing older can contain in-range calls
                break
            res["convs_scanned"] += 1
            if res["convs_scanned"] % 50 == 0:
                sys.stderr.write(f"  scanned {res['convs_scanned']} convs, "
                                 f"{res['inbound']} inbound calls so far\n")
            msgs = _get(f"{BASE}/conversations/{c['id']}/messages", token, soft=True)
            mlist = msgs.get("messages", {})
            mlist = mlist.get("messages", mlist) if isinstance(mlist, dict) else mlist
            missed_times = []      # epoch-ms of in-range missed inbound calls
            out_sms_times = []     # epoch-ms of outbound SMS (any time, this conv)
            for m in (mlist or []):
                mt = m.get("messageType")
                da = m.get("dateAdded")
                if mt == "TYPE_SMS" and m.get("direction") == "outbound" and da:
                    out_sms_times.append(_iso_ms(da))
                if mt != "TYPE_CALL":
                    continue
                if not da or not _iso_in_range(da, start, end):
                    continue
                if m.get("direction") == "inbound":
                    res["inbound"] += 1
                    dur = (m.get("meta", {}).get("call", {}) or {}).get("duration") or 0
                    status = m.get("status", "")
                    if dur and dur > 0 and status in ("completed", "answered"):
                        res["answered"] += 1
                    else:
                        res["missed"] += 1
                        missed_times.append(_iso_ms(da))
                else:
                    res["outbound"] += 1
            # Missed-call text-back: a missed inbound call followed by an
            # outbound SMS within 5 minutes = the auto text-back fired (a "save").
            for mt_ms in missed_times:
                if any(0 <= (st - mt_ms) <= 5 * 60 * 1000 for st in out_sms_times):
                    res["mctb_saves"] += 1
        cursor = convs[-1].get("lastMessageDate")
        if stop or len(convs) < 100:
            break
    return res


if __name__ == "__main__":
    s = datetime.date.fromisoformat(sys.argv[1])
    e = datetime.date.fromisoformat(sys.argv[2])
    print(json.dumps(count_calls(s, e), indent=2))
