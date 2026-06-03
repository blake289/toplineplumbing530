#!/usr/bin/env python3
"""
Topline Plumbing — weekly SEO pulse to Telegram.
Tracks the high-intent "money" keywords from the June 2026 GSC diagnosis,
compares the trailing 7 days vs the prior 7 days (GSC lags ~3 days, so the
window ends 3 days back), and pings Blake the deltas on Telegram.

Read-only (analytics.readonly + webmasters.readonly). Reuses the cached token
at ~/.claude/scripts/google-report-token.json.

Run by scripts/weekly-seo-pulse.sh via crontab, Mondays. Run manually anytime:
    python3 scripts/weekly-seo-pulse.py          # send to Telegram
    python3 scripts/weekly-seo-pulse.py --dry     # print, do not send
"""
import os, sys, json, datetime, warnings
from urllib.parse import quote
warnings.filterwarnings("ignore")

from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request, AuthorizedSession

HOME = os.path.expanduser("~")
TOKEN_PATH = f"{HOME}/.claude/scripts/google-report-token.json"
SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly",
]
GA4_PROPERTY = "533184222"
SITE = "sc-domain:toplineplumbingco.com"
KEY_EVENT = "phone_call"
TG_CHAT_ID = "1347553439"
DRY = "--dry" in sys.argv

# The money keywords the optimization targets. Edit this list to re-aim the pulse.
MONEY_KW = [
    "plumber", "emergency plumber", "emergency plumbing",
    "emergency plumbing services", "emergency plumbing near me",
    "emergency drain service", "same day plumber", "drain cleaning near me",
    "sewer line cleaning near me", "24 7 plumber near me",
    "plumbing repair near me", "plumbing services", "plumbing company",
    "water heater installation", "local plumbers",
]
BRAND_KW = "topline plumbing"


def auth():
    c = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)
    if c.expired and c.refresh_token:
        c.refresh(Request())
        open(TOKEN_PATH, "w").write(c.to_json())
    return AuthorizedSession(c)


# trailing 7d ending 3 days back (GSC freshness), prior 7d before that
TODAY = datetime.date.today()
ds = lambda d: d.isoformat()
CUR_END = TODAY - datetime.timedelta(days=3)
CUR_START = CUR_END - datetime.timedelta(days=6)
PRV_END = CUR_START - datetime.timedelta(days=1)
PRV_START = PRV_END - datetime.timedelta(days=6)


def gsc_queries(s, start, end):
    url = (f"https://searchconsole.googleapis.com/webmasters/v3/sites/"
           f"{quote(SITE, safe='')}/searchAnalytics/query")
    r = s.post(url, json={"startDate": ds(start), "endDate": ds(end),
                          "dimensions": ["query"], "rowLimit": 1000})
    r.raise_for_status()
    return {row["keys"][0].lower(): row for row in r.json().get("rows", [])}


def ga_metric(s, metric, start, end, event=None):
    body = {"dateRanges": [{"startDate": ds(start), "endDate": ds(end)}],
            "metrics": [{"name": metric}]}
    if event:
        body["dimensions"] = [{"name": "eventName"}]
        body["dimensionFilter"] = {"filter": {"fieldName": "eventName",
                                   "stringFilter": {"value": event}}}
    r = s.post(f"https://analyticsdata.googleapis.com/v1beta/properties/"
               f"{GA4_PROPERTY}:runReport", json=body)
    r.raise_for_status()
    rows = r.json().get("rows", [])
    return float(rows[0]["metricValues"][0]["value"]) if rows else 0.0


def arrow(delta, good_up=True):
    if abs(delta) < 0.05:
        return "→"
    up = delta > 0
    return "▲" if (up == good_up) else "▼"


def fmt_pos(cur, prv):
    """Position: lower is better. Show current + movement."""
    if cur is None:
        return "—"
    if prv is None:
        return f"{cur:.0f} (new)"
    rd = round(prv - cur)  # positive = improved (moved up)
    if rd == 0:
        return f"{cur:.0f} →"
    return f"{cur:.0f} {'▲' if rd > 0 else '▼'}{abs(rd)}"


def build():
    s = auth()
    cur = gsc_queries(s, CUR_START, CUR_END)
    prv = gsc_queries(s, PRV_START, PRV_END)

    # GA4 week-over-week
    ga_sess_c = ga_metric(s, "sessions", CUR_START, CUR_END)
    ga_sess_p = ga_metric(s, "sessions", PRV_START, PRV_END)
    ga_call_c = ga_metric(s, "eventCount", CUR_START, CUR_END, KEY_EVENT)
    ga_call_p = ga_metric(s, "eventCount", PRV_START, PRV_END, KEY_EVENT)

    # money-keyword totals
    mc = sum(cur[k]["clicks"] for k in MONEY_KW if k in cur)
    mp = sum(prv[k]["clicks"] for k in MONEY_KW if k in prv)
    mic = sum(cur[k]["impressions"] for k in MONEY_KW if k in cur)
    mip = sum(prv[k]["impressions"] for k in MONEY_KW if k in prv)

    L = []
    L.append("*Topline — Weekly SEO Pulse*")
    L.append(f"_{ds(CUR_START)} to {ds(CUR_END)} vs prior 7d_\n")

    L.append(f"*Traffic:* {ga_sess_c:.0f} sessions {arrow(ga_sess_c-ga_sess_p)} "
             f"(was {ga_sess_p:.0f})")
    L.append(f"*Phone calls:* {ga_call_c:.0f} {arrow(ga_call_c-ga_call_p)} "
             f"(was {ga_call_p:.0f})")
    L.append(f"*Money-kw clicks:* {mc:.0f} {arrow(mc-mp)} (was {mp:.0f}) "
             f"· impressions {mic:.0f} {arrow(mic-mip)}\n")

    # per-keyword movement, sorted by current impressions
    L.append("*Money keywords (pos · clicks):*")
    rows = []
    for k in MONEY_KW:
        c, p = cur.get(k), prv.get(k)
        if not c and not p:
            continue
        ci = c["impressions"] if c else 0
        pos = fmt_pos(c["position"] if c else None, p["position"] if p else None)
        clk = c["clicks"] if c else 0
        rows.append((ci, k, pos, clk))
    for ci, k, pos, clk in sorted(rows, reverse=True)[:12]:
        L.append(f"• {k}: pos {pos} · {clk:.0f} clk ({ci:.0f} imp)")

    bc = cur.get(BRAND_KW)
    if bc:
        L.append(f"\n_brand '{BRAND_KW}': pos {bc['position']:.0f}, "
                 f"{bc['clicks']:.0f} clicks_")

    return "\n".join(L)


def send(text):
    import urllib.request
    token = os.environ.get("TELEGRAM_BOT_TOKEN")
    if not token:
        sys.stderr.write("No TELEGRAM_BOT_TOKEN in env; not sending.\n")
        return False
    data = json.dumps({"chat_id": TG_CHAT_ID, "text": text,
                       "parse_mode": "Markdown",
                       "disable_web_page_preview": True}).encode()
    req = urllib.request.Request(f"https://api.telegram.org/bot{token}/sendMessage",
                                 data=data, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.status == 200


if __name__ == "__main__":
    msg = build()
    if DRY:
        print(msg)
    else:
        ok = send(msg)
        print("sent" if ok else "send failed")
        sys.exit(0 if ok else 1)
