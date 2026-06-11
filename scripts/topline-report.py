#!/usr/bin/env python3
"""
Topline Plumbing — monthly progress report.
Pulls GA4 (Analytics Data API) + Google Search Console via API and writes a
markdown report to .planning/monthly-report-<date>.md.

First run opens a browser for one-time OAuth consent (analytics.readonly +
webmasters.readonly). Token cached at ~/.claude/scripts/google-report-token.json.

Usage:  python3 scripts/topline-report.py
"""
import os, sys, json, datetime, warnings, subprocess, shutil, tempfile
warnings.filterwarnings("ignore")

from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request, AuthorizedSession
from google_auth_oauthlib.flow import InstalledAppFlow

HOME = os.path.expanduser("~")
CLIENT_SECRETS = f"{HOME}/.claude/scripts/google-credentials.json"
TOKEN_PATH = f"{HOME}/.claude/scripts/google-report-token.json"
SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly",
]
GA4_PROPERTY = "533184222"  # property ID (NOT 391501776 — that's the account ID)
SITE_DOMAIN = "toplineplumbingco.com"
KEY_EVENT = "phone_call"

# Per-month state so the report can show month-over-month deltas (calls, new
# reviews) without re-scanning prior months. Keyed by "YYYY-MM".
STATE_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                          ".planning", "report-state.json")


def _project_env():
    """Read the project's .env.local into a dict (GHL token, Places key, etc.)."""
    env = {}
    p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     ".env.local")
    if os.path.exists(p):
        with open(p) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env[k.strip()] = v.strip()
    return env


def load_state():
    if os.path.exists(STATE_PATH):
        try:
            with open(STATE_PATH) as f:
                return json.load(f)
        except (json.JSONDecodeError, OSError):
            return {}
    return {}


def save_state(state):
    try:
        with open(STATE_PATH, "w") as f:
            json.dump(state, f, indent=2)
    except OSError as e:
        print(f">>> state save skipped: {e}")


def gbp_reviews():
    """Live rating + review count from the Places API (New). Returns dict or None."""
    env = _project_env()
    key = env.get("GOOGLE_PLACES_API_KEY")
    place_id = env.get("GBP_PLACE_ID")
    if not key or not place_id:
        return None
    import urllib.request
    url = f"https://places.googleapis.com/v1/places/{place_id}"
    req = urllib.request.Request(url, headers={
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,businessStatus",
    })
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            d = json.load(r)
        return {"rating": d.get("rating"), "count": d.get("userRatingCount"),
                "status": d.get("businessStatus")}
    except Exception:
        return None


def auth():
    creds = None
    if os.path.exists(TOKEN_PATH):
        creds = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS, SCOPES)
            print(">>> Opening browser. PICK blake@omnipresent.app "
                  "(Analytics + Search Console, read-only)...")
            creds = flow.run_local_server(
                port=0,
                login_hint="blake@omnipresent.app",
                prompt="select_account consent",
            )
        with open(TOKEN_PATH, "w") as f:
            f.write(creds.to_json())
    return AuthorizedSession(creds)


# ---------- date windows: previous full calendar month vs the month before ----------
# Designed to run on the 1st: reports the month that just ended.
TODAY = datetime.date.today()
_first_this_month = TODAY.replace(day=1)
CUR_END = _first_this_month - datetime.timedelta(days=1)   # last day of previous month
CUR_START = CUR_END.replace(day=1)                         # first day of previous month
PRV_END = CUR_START - datetime.timedelta(days=1)           # last day of month before
PRV_START = PRV_END.replace(day=1)                         # first day of month before
# GA4 and GSC use the same calendar-month ranges. (GSC lags ~2 days, so the final
# day or two of the month may still be settling if run on the 1st — see launchd note.)
GA_CUR_START, GA_CUR_END = CUR_START, CUR_END
GA_PRV_START, GA_PRV_END = PRV_START, PRV_END
GSC_START, GSC_END = CUR_START, CUR_END
GSC_PRV_START, GSC_PRV_END = PRV_START, PRV_END
ds = lambda d: d.isoformat()


# ---------- GA4 ----------
GA_URL = f"https://analyticsdata.googleapis.com/v1beta/properties/{GA4_PROPERTY}:runReport"


def ga_report(s, body):
    r = s.post(GA_URL, json=body)
    if r.status_code != 200:
        raise RuntimeError(f"GA4 {r.status_code}: {r.text[:300]}")
    return r.json()


def ga4_section(s):
    out = {}
    # A. totals current vs prior
    body = {
        "dateRanges": [
            {"startDate": ds(GA_CUR_START), "endDate": ds(GA_CUR_END), "name": "cur"},
            {"startDate": ds(GA_PRV_START), "endDate": ds(GA_PRV_END), "name": "prv"},
        ],
        "metrics": [{"name": "sessions"}, {"name": "totalUsers"},
                    {"name": "screenPageViews"}, {"name": "engagementRate"}],
    }
    rows = ga_report(s, body).get("rows", [])
    tot = {"cur": {}, "prv": {}}
    for row in rows:
        rng = row["dimensionValues"][0]["value"]
        vals = [m["value"] for m in row["metricValues"]]
        tot[rng] = {"sessions": vals[0], "users": vals[1],
                    "views": vals[2], "engRate": vals[3]}
    out["totals"] = tot

    # B. phone_call key event cur vs prior
    body = {
        "dateRanges": [
            {"startDate": ds(GA_CUR_START), "endDate": ds(GA_CUR_END), "name": "cur"},
            {"startDate": ds(GA_PRV_START), "endDate": ds(GA_PRV_END), "name": "prv"},
        ],
        "dimensions": [{"name": "eventName"}],
        "metrics": [{"name": "eventCount"}],
        "dimensionFilter": {"filter": {"fieldName": "eventName",
                            "stringFilter": {"value": KEY_EVENT}}},
    }
    calls = {"cur": "0", "prv": "0"}
    for row in ga_report(s, body).get("rows", []):
        rng = row["dimensionValues"][1]["value"] if len(row["dimensionValues"]) > 1 else "cur"
        calls[rng] = row["metricValues"][0]["value"]
    out["calls"] = calls

    # C. channel split (current)
    body = {
        "dateRanges": [{"startDate": ds(GA_CUR_START), "endDate": ds(GA_CUR_END)}],
        "dimensions": [{"name": "sessionDefaultChannelGroup"}],
        "metrics": [{"name": "sessions"}],
        "orderBys": [{"metric": {"metricName": "sessions"}, "desc": True}],
    }
    out["channels"] = [(r["dimensionValues"][0]["value"], r["metricValues"][0]["value"])
                       for r in ga_report(s, body).get("rows", [])]

    # D. top pages (current)
    body = {
        "dateRanges": [{"startDate": ds(GA_CUR_START), "endDate": ds(GA_CUR_END)}],
        "dimensions": [{"name": "pagePath"}],
        "metrics": [{"name": "screenPageViews"}],
        "orderBys": [{"metric": {"metricName": "screenPageViews"}, "desc": True}],
        "limit": 10,
    }
    out["top_pages"] = [(r["dimensionValues"][0]["value"], r["metricValues"][0]["value"])
                        for r in ga_report(s, body).get("rows", [])]
    return out


# ---------- GSC ----------
def gsc_site_url(s):
    r = s.get("https://searchconsole.googleapis.com/webmasters/v3/sites")
    r.raise_for_status()
    sites = [x["siteUrl"] for x in r.json().get("siteEntry", [])]
    for cand in (f"sc-domain:{SITE_DOMAIN}", f"https://{SITE_DOMAIN}/",
                 f"https://www.{SITE_DOMAIN}/"):
        if cand in sites:
            return cand
    for x in sites:
        if SITE_DOMAIN in x:
            return x
    raise RuntimeError(f"No GSC property for {SITE_DOMAIN}. Found: {sites}")


def gsc_query(s, site, start, end, dims=None, limit=25):
    from urllib.parse import quote
    url = (f"https://searchconsole.googleapis.com/webmasters/v3/sites/"
           f"{quote(site, safe='')}/searchAnalytics/query")
    body = {"startDate": ds(start), "endDate": ds(end), "rowLimit": limit}
    if dims:
        body["dimensions"] = dims
    r = s.post(url, json=body)
    if r.status_code != 200:
        raise RuntimeError(f"GSC {r.status_code}: {r.text[:300]}")
    return r.json().get("rows", [])


def gsc_section(s):
    out = {}
    site = gsc_site_url(s)
    out["site"] = site

    def totals(start, end):
        rows = gsc_query(s, site, start, end, dims=None, limit=1)
        if not rows:
            return {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}
        r = rows[0]
        return {"clicks": r["clicks"], "impressions": r["impressions"],
                "ctr": r["ctr"], "position": r["position"]}

    out["cur"] = totals(GSC_START, GSC_END)
    out["prv"] = totals(GSC_PRV_START, GSC_PRV_END)

    q = gsc_query(s, site, GSC_START, GSC_END, dims=["query"], limit=100)
    out["top_queries"] = [(r["keys"][0], r["clicks"], r["impressions"],
                           r["ctr"], r["position"]) for r in q[:10]]
    out["opportunities"] = sorted(
        [(r["keys"][0], r["impressions"], r["position"], r["ctr"]) for r in q
         if 8 <= r["position"] <= 20 and r["impressions"] >= 10],
        key=lambda x: -x[1])[:10]

    p = gsc_query(s, site, GSC_START, GSC_END, dims=["page"], limit=10)
    out["top_pages"] = [(r["keys"][0], r["clicks"], r["impressions"],
                         r["ctr"], r["position"]) for r in p]
    return out


# ---------- render ----------
def delta(cur, prv):
    try:
        cur, prv = float(cur), float(prv)
    except (TypeError, ValueError):
        return ""
    if prv == 0:
        return "n/a" if cur == 0 else "new"
    pct = (cur - prv) / prv * 100
    arrow = "▲" if pct > 0 else ("▼" if pct < 0 else "•")
    return f"{arrow} {pct:+.0f}%"


MONTH = CUR_START.strftime("%B %Y")        # the month being reported (previous month)


def work_done_notes():
    """Client-facing 'what we did' bullets for the reported month.

    Read from .planning/report-notes/<YYYY-MM>.md so the list is always real
    work, hand-curated, never auto-guessed. Returns the markdown body or None.
    """
    fn = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                      ".planning", "report-notes", CUR_START.strftime("%Y-%m") + ".md")
    if os.path.exists(fn):
        with open(fn) as f:
            body = f.read().strip()
        return body or None
    return None


def plain_delta(cur, prv, lower_better=False):
    """Human phrase for a change, or None when there's no real prior baseline."""
    try:
        cur, prv = float(cur), float(prv)
    except (TypeError, ValueError):
        return None
    if prv < 2:  # no meaningful prior month
        return None
    pct = (cur - prv) / prv * 100
    if abs(pct) < 3:
        return "about the same as last month"
    up = pct > 0
    good = (up and not lower_better) or (not up and lower_better)
    word = "up" if up else "down"
    return f"{word} {abs(pct):.0f}% vs last month ({'good' if good else 'watch'})"


def render_client(ga, gsc, gbp, ghl=None, reviews=None, deltas=None):
    deltas = deltas or {}
    L = []
    # (Report title + month live in the branded PDF header band — see md_to_pdf.)

    # ---- Executive summary ----
    L.append("### The Short Version")
    bullets = []
    if ghl and ghl.get("inbound"):
        bullets.append(f"**{ghl['inbound']} phone calls** came in from customers "
                       f"this month ({ghl['answered']} answered, {ghl['missed']} "
                       f"missed).")
    elif ga:
        calls = ga["calls"]["cur"]
        bullets.append(f"**{calls} phone call{'s' if calls != '1' else ''}** came "
                       f"in directly from your website this month.")
    if gsc:
        cu, pv = gsc["cur"], gsc["prv"]
        moved = pv["position"] - cu["position"]
        if moved > 0.5:
            bullets.append(f"Your Google ranking **improved**. You moved up about "
                           f"{moved:.0f} spots (from position {pv['position']:.0f} to "
                           f"{cu['position']:.0f}), climbing from page 2 toward page 1.")
        impr_word = ("up from" if cu["impressions"] > pv["impressions"]
                     else "compared to" if cu["impressions"] == pv["impressions"]
                     else "down from")
        bullets.append(f"**{int(cu['impressions']):,} times** your business showed up "
                       f"in Google search results, {impr_word} "
                       f"{int(pv['impressions']):,} last month.")
    bullets.append("Next month we're focused on the searches where you're sitting "
                   "*just* below page 1 (like “emergency plumber”). Getting "
                   "those onto page 1 is where the next jump in calls comes from.")
    for b in bullets:
        L.append(f"- {b}")
    L.append("")

    # ---- Leads (the hero) ----
    L.append("### Your Leads This Month")
    if ghl and ghl.get("inbound"):
        L.append("")
        L.append('<div class="stats">'
                 f'<div class="stat"><div class="stat-num">{ghl["inbound"]}</div>'
                 '<div class="stat-label">Phone Calls In</div></div>'
                 f'<div class="stat"><div class="stat-num">{ghl["answered"]}</div>'
                 '<div class="stat-label">Answered</div></div>'
                 f'<div class="stat stat-warn"><div class="stat-num">{ghl["missed"]}</div>'
                 '<div class="stat-label">Missed</div></div>'
                 '</div>')
        L.append("")
        # Month-over-month on the call volume, when we have a prior snapshot.
        mom = ""
        cp = deltas.get("calls_prev")
        if cp and int(cp) >= 2:
            d = ghl["inbound"] - int(cp)
            if d > 0:
                mom = f" That is {d} more than last month ({cp})."
            elif d < 0:
                mom = f" That is {abs(d)} fewer than last month ({cp})."
            else:
                mom = f" About the same as last month ({cp})."
        L.append(f"*Real inbound calls to your business line this month.{mom} "
                 f"Every missed call is a job that may have gone to a competitor, "
                 f"so it is the biggest opportunity we help you capture.*")
        # Missed-call text-back: turn the "missed" number into proof the system works.
        mctb = ghl.get("mctb_saves")
        if mctb:
            L.append("")
            L.append(f"> **{mctb} of those {ghl['missed']} missed calls got an "
                     f"instant automated text back** within seconds, reopening the "
                     f"conversation so the lead is not lost to the next plumber. "
                     f"That is the missed-call text-back system working for you "
                     f"around the clock.")
    elif ga:
        calls = ga["calls"]["cur"]
        L.append("")
        L.append('<div class="stats">'
                 f'<div class="stat"><div class="stat-num">{calls}</div>'
                 '<div class="stat-label">Calls from Your Website</div></div>'
                 '</div>')
        L.append("")
        L.append("*This counts people who tapped your phone number on the site.*")
    else:
        L.append("> Call tracking data unavailable this run.")
    L.append("")

    # ---- Where you show up on Google ----
    L.append("### Where You Show Up on Google")
    if gsc:
        cu, pv = gsc["cur"], gsc["prv"]
        L.append("| | This Month | Last Month |")
        L.append("|---|---|---|")
        L.append(f"| Times you appeared in search | {int(cu['impressions']):,} | "
                 f"{int(pv['impressions']):,} |")
        L.append(f"| People who clicked to your site | {int(cu['clicks'])} | "
                 f"{int(pv['clicks'])} |")
        L.append(f"| Your average ranking position | {cu['position']:.1f} | "
                 f"{pv['position']:.1f} |")
        L.append("")
        moved = pv["position"] - cu["position"]
        if moved > 0.5:
            climb = (f"up about {moved:.0f} spots from {pv['position']:.0f} last "
                     f"month, real movement toward page 1")
        elif moved < -0.5:
            climb = (f"down about {abs(moved):.0f} spots from "
                     f"{pv['position']:.0f} last month. Normal fluctuation as "
                     f"Google evaluates the new pages; we're watching it")
        else:
            climb = "holding steady"
        # brand rank, pulled live from the query data
        brand = next((po for q, cl, im, ct, po in gsc["top_queries"]
                      if q.strip().lower() == "topline plumbing"), None)
        brand_line = (f" And when someone searches your name, "
                      f"**“topline plumbing,” you rank #{brand:.0f}**, strong "
                      f"brand visibility." if brand else "")
        L.append(f"**What this means:** “Average position” is roughly where "
                 f"you land in Google's results, and **lower is better** (position 1 is "
                 f"the top of the page). You're at **{cu['position']:.1f}**, {climb}."
                 + brand_line + "\n")
    # GBP / Maps
    L.append("#### Your Google Maps Listing")
    if gbp:
        L.append("| Metric | This Month |")
        L.append("|---|---|")
        for label, key in [("Calls from your listing", "calls"),
                           ("Direction requests", "directions"),
                           ("Website clicks", "website"),
                           ("Times shown in Maps/Search", "searches")]:
            if key in gbp:
                L.append(f"| {label} | {gbp[key]} |")
        L.append("")
    else:
        L.append("> *Coming next month:* calls, direction requests, and website "
                 "clicks from your Google Maps listing. For a local business this is "
                 "usually the **biggest** source of calls, so it's the key addition "
                 "to this report.\n")

    # ---- Website traffic ----
    if ga:
        t = ga["totals"]; cur = t["cur"]
        L.append("### Website Traffic")
        users = cur.get("users", "-")
        sess = cur.get("sessions", "-")
        eng = cur.get("engRate")
        L.append(f"- **{users} people** visited your site ({sess} total visits).")
        if eng:
            L.append(f"- **{float(eng)*100:.0f}%** of visits were engaged (they "
                     "actually read or interacted, not a quick bounce).")
        ch = {n: int(v) for n, v in ga["channels"]}
        org = ch.get("Organic Search", 0); direct = ch.get("Direct", 0)
        soc = ch.get("Organic Social", 0)
        L.append(f"- Where they came from: **{org} from Google search**, "
                 f"**{direct} typed you in directly**, {soc} from social.")
        L.append("\n*What this means: search and direct are split roughly evenly. "
                 "People are both finding you fresh on Google and coming back to you "
                 "by name, which is exactly the healthy mix you want.*\n")

    # ---- Reviews ----
    L.append("### Your Google Reviews")
    if reviews and reviews.get("rating") is not None:
        rating = reviews["rating"]
        count = reviews.get("count")
        cards = (f'<div class="stat"><div class="stat-num">{rating:.1f}★</div>'
                 '<div class="stat-label">Star Rating</div></div>'
                 f'<div class="stat"><div class="stat-num">{count}</div>'
                 '<div class="stat-label">Total Reviews</div></div>')
        nr = deltas.get("new_reviews")
        if nr is not None:
            cards += (f'<div class="stat"><div class="stat-num">+{nr}</div>'
                      '<div class="stat-label">New This Month</div></div>')
        L.append("")
        L.append(f'<div class="stats">{cards}</div>')
        L.append("")
        if nr is not None:
            nr_line = (f"You added **{nr} new review{'s' if nr != 1 else ''}** this "
                       f"month, " if nr else "")
            L.append(f"*{nr_line}holding a perfect {rating:.1f}-star rating across "
                     f"{count} reviews. The review-request campaign keeps asking "
                     f"happy past customers, and every new 5-star review lifts how "
                     f"high you show up in the Map Pack.*")
        else:
            L.append(f"*A perfect {rating:.1f}-star rating across {count} Google "
                     f"reviews. We are now tracking your review count each month, so "
                     f"next month's report shows exactly how many new ones came in.*")
    else:
        L.append("> Review data unavailable this run.")
    L.append("")

    # ---- What we did (the value justification) ----
    notes = work_done_notes()
    if notes:
        L.append("### What We Did This Month")
        L.append(notes)
        L.append("")

    # ---- What's next ----
    L.append("### What We're Working On Next")
    L.append("- **Push the “near-miss” searches onto page 1.** You're "
             "ranking just below the top results for high-intent searches like "
             "“emergency plumber,” “drain cleaning near me,” and "
             "“plumbing company.” These are people ready to call, and moving "
             "up a spot or two turns them into phone calls.")
    L.append("- **Bring your Google Maps numbers into this report** so every lead "
             "source is in one place.")
    L.append("")

    L.append(f"\n---\n*Report for {MONTH} · prepared by Omnipresent · "
             f"data from Google Analytics & Google Search Console*")
    return "\n".join(L)


def render_appendix(ga, gsc):
    """Blake-only analyst detail."""
    L = []
    L.append("# Internal Appendix (Blake Only)")
    L.append(f"*Topline Plumbing · {MONTH} · do not send to client*\n")

    if ga:
        t = ga["totals"]; cur, prv = t["cur"], t["prv"]
        L.append("## GA4 raw (30d vs prior 30d)")
        L.append(f"*{GA_CUR_START} → {GA_CUR_END} · property 533184222*\n")
        L.append("| Metric | Current | Prior | Δ |")
        L.append("|---|---|---|---|")
        for label, key in [("Sessions", "sessions"), ("Users", "users"),
                           ("Pageviews", "views")]:
            L.append(f"| {label} | {cur.get(key,'-')} | {prv.get(key,'-')} | "
                     f"{delta(cur.get(key), prv.get(key))} |")
        er_c = cur.get("engRate")
        if er_c:
            L.append(f"| Engagement rate | {float(er_c)*100:.0f}% | "
                     f"{float(prv.get('engRate',0))*100:.0f}% | "
                     f"{delta(er_c, prv.get('engRate'))} |")
        L.append(f"| Phone calls | {ga['calls']['cur']} | {ga['calls']['prv']} | "
                 f"{delta(ga['calls']['cur'], ga['calls']['prv'])} |")
        L.append("\n> Note: GA4 prior period ~0 (tracking started this period). "
                 "MoM deltas are baseline artifacts until next month.\n")
        L.append("### Top pages by views")
        for path, v in ga["top_pages"]:
            L.append(f"- `{path}` — {v}")
        L.append("")

    if gsc:
        L.append("## GSC detail (28d)")
        L.append("### Top queries")
        L.append("| Query | Clicks | Impr | CTR | Pos |")
        L.append("|---|---|---|---|---|")
        for k, cl, im, ct, po in gsc["top_queries"]:
            L.append(f"| {k} | {int(cl)} | {int(im)} | {ct*100:.1f}% | {po:.1f} |")
        L.append("")
        L.append("### Optimization opportunities (pos 8–20, real impressions)")
        L.append("| Query | Impr | Pos | CTR |")
        L.append("|---|---|---|---|")
        for k, im, po, ct in gsc["opportunities"]:
            L.append(f"| {k} | {int(im)} | {po:.1f} | {ct*100:.1f}% |")
        L.append("")
        L.append("### Top landing pages (organic)")
        L.append("| Page | Clicks | Impr | CTR | Pos |")
        L.append("|---|---|---|---|---|")
        for k, cl, im, ct, po in gsc["top_pages"]:
            L.append(f"| {k} | {int(cl)} | {int(im)} | {ct*100:.1f}% | {po:.1f} |")
        L.append("")
    return "\n".join(L)


# Brand tokens pulled from the site's tailwind.config.ts
NAVY = "#001E38"      # navy-900 — headers/navigation
NAVY_MID = "#1C3959"  # navy-700
RED = "#dd1515"       # primary — CTAs/accents
CREAM = "#f5f1e8"     # logo wordmark cream

HTML_HEAD = f"""<!doctype html><html><head><meta charset="utf-8"><style>
* {{ box-sizing: border-box; }}
body {{ font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
  color:#1f2733; font-size:12px; line-height:1.55; margin:0; }}

/* ---- branded header card ---- */
.band {{ background:{NAVY}; color:{CREAM}; padding:22px 28px;
  display:flex; align-items:center; gap:20px; border-radius:14px;
  border-bottom:4px solid {RED}; }}
.band img {{ width:74px; height:74px; }}
.band .b-name {{ font-size:24px; font-weight:800; letter-spacing:.04em;
  color:#fff; margin:0; }}
.band .b-sub {{ font-size:12.5px; letter-spacing:.22em; text-transform:uppercase;
  color:#9fb3c8; margin-top:5px; }}
.band .b-month {{ margin-left:auto; text-align:right; }}
.band .b-month .m1 {{ font-size:11px; letter-spacing:.18em; text-transform:uppercase;
  color:#9fb3c8; }}
.band .b-month .m2 {{ font-size:19px; font-weight:700; color:#fff; margin-top:3px; }}

.content {{ padding: 4px 2px 0; }}

h1 {{ color:{NAVY}; font-size:21px; margin:26px 0 4px;
  border-bottom:3px solid {RED}; padding-bottom:8px; }}
h2 {{ color:{NAVY}; font-size:16px; margin:24px 0 8px;
  border-bottom:1px solid #d8dee6; padding-bottom:5px; }}
h3 {{ color:{NAVY}; font-size:13.5px; margin:24px 0 8px; text-transform:uppercase;
  letter-spacing:.08em; }}
h3::before {{ content:""; display:inline-block; width:18px; height:3px;
  background:{RED}; margin-right:8px; vertical-align:3px; }}
h4 {{ color:{NAVY_MID}; font-size:12.5px; margin:16px 0 6px; }}

/* ---- hero stat cards ---- */
.stats {{ display:flex; gap:12px; margin:12px 0 4px; }}
.stat {{ flex:1; background:#f2f5f9; border:1px solid #dfe6ee; border-radius:10px;
  padding:16px 12px 13px; text-align:center; }}
.stat-num {{ font-size:34px; font-weight:800; color:{NAVY}; line-height:1; }}
.stat-label {{ font-size:10.5px; text-transform:uppercase; letter-spacing:.12em;
  color:#5a6b7e; margin-top:7px; }}
.stat-warn .stat-num {{ color:{RED}; }}

table {{ border-collapse:collapse; width:100%; margin:8px 0 14px; font-size:11.5px; }}
th {{ background:{NAVY}; color:#fff; text-align:left; padding:8px 11px;
  font-size:10.5px; text-transform:uppercase; letter-spacing:.07em; }}
td {{ border-bottom:1px solid #e3e8ee; padding:7px 11px; }}
tr:nth-child(even) td {{ background:#f6f8fa; }}

blockquote {{ background:#f2f5f9; border-left:4px solid {NAVY_MID}; margin:10px 0;
  padding:9px 14px; color:#3d4f63; font-size:11px; border-radius:0 8px 8px 0; }}
blockquote p {{ margin:0; }}
code {{ background:#eef1f4; padding:1px 4px; border-radius:3px; font-size:10.5px; }}
em {{ color:#5a6b7e; }} strong {{ color:{NAVY}; }} hr {{ border:none; }}
li {{ margin-bottom:4px; }}
</style></head><body>
"""


def md_to_pdf(md_text, pdf_path):
    """Render markdown text to a branded PDF. Returns path or None."""
    pandoc = shutil.which("pandoc")
    converter = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                             "html-to-pdf.mjs")
    if not pandoc:
        print(">>> PDF skipped (pandoc not found)")
        return None
    body = subprocess.run([pandoc, "-f", "gfm", "-t", "html"],
                          input=md_text, capture_output=True, text=True).stdout

    # Embed the real logo so the PDF renders identically anywhere.
    import base64
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    logo_b64 = ""
    logo_file = os.path.join(repo, "public", "images", "logo.png")
    if os.path.exists(logo_file):
        with open(logo_file, "rb") as f:
            logo_b64 = base64.b64encode(f.read()).decode()
    logo_tag = (f'<img src="data:image/png;base64,{logo_b64}" alt="Topline Plumbing">'
                if logo_b64 else "")
    band = (f'<div class="band">{logo_tag}'
            '<div><div class="b-name">TOPLINE PLUMBING</div>'
            '<div class="b-sub">Monthly Performance Report</div></div>'
            f'<div class="b-month"><div class="m1">Reporting Period</div>'
            f'<div class="m2">{MONTH}</div></div></div>')

    html_path = pdf_path.replace(".pdf", ".html")
    with open(html_path, "w") as f:
        f.write(HTML_HEAD + band + '<div class="content">' + body
                + "</div></body></html>")
    try:
        r = subprocess.run(["node", converter, html_path, pdf_path],
                           capture_output=True, text=True, timeout=60, cwd=repo)
        if r.returncode != 0:
            print(">>> PDF render failed:", r.stderr[:300])
            return None
    except subprocess.TimeoutExpired:
        print(">>> PDF render timed out")
        return None
    return pdf_path if os.path.exists(pdf_path) else None


def main():
    s = auth()
    ga = gsc = gbp = None
    errors = []
    try:
        ga = ga4_section(s)
    except Exception as e:
        errors.append(f"GA4 failed: {e}")
    try:
        gsc = gsc_section(s)
    except Exception as e:
        errors.append(f"GSC failed: {e}")

    ghl = None
    try:
        import ghl_calls
        ghl = ghl_calls.count_calls(CUR_START, CUR_END)
    except Exception as e:
        errors.append(f"GHL calls failed: {e}")

    reviews = gbp_reviews()
    if reviews is None:
        errors.append("GBP reviews pull failed (Places API)")

    # ---- month-over-month deltas via the state file ----
    state = load_state()
    cur_key = CUR_START.strftime("%Y-%m")
    prv_key = PRV_START.strftime("%Y-%m")
    prev = state.get(prv_key, {})
    deltas = {
        "calls_prev": prev.get("calls"),
        "reviews_prev": prev.get("reviews"),
    }
    if reviews and reviews.get("count") is not None and deltas["reviews_prev"]:
        deltas["new_reviews"] = max(0, reviews["count"] - deltas["reviews_prev"])
    # Record this month's snapshot for next month's report.
    state[cur_key] = {
        "calls": (ghl or {}).get("inbound"),
        "reviews": (reviews or {}).get("count"),
        "rating": (reviews or {}).get("rating"),
    }
    save_state(state)

    client_md = render_client(ga, gsc, gbp, ghl, reviews, deltas)
    internal_md = client_md + "\n\n<div style='page-break-before:always'></div>\n\n" \
        + render_appendix(ga, gsc)

    here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    plan = os.path.join(here, ".planning")
    desk = os.path.expanduser("~/Desktop")
    stamp = CUR_START.strftime("%Y-%m")    # filenames tagged by reported month

    # Write everything to .planning first — always works, no TCC restriction.
    with open(os.path.join(plan, f"client-report-{stamp}.md"), "w") as f:
        f.write(client_md)
    client_pdf = md_to_pdf(
        client_md, os.path.join(plan, f"Topline-Plumbing-Report-{stamp}.pdf"))
    internal_pdf = md_to_pdf(
        internal_md, os.path.join(plan, f"Topline-Plumbing-Report-{stamp}-internal.pdf"))

    # Best-effort copy of the client PDF to Desktop. Under launchd this can be
    # TCC-blocked, so a failure must not lose the .planning copies above.
    desk_pdf = os.path.join(desk, f"Topline-Plumbing-Report-{stamp}.pdf")
    try:
        shutil.copyfile(client_pdf, desk_pdf)
    except OSError as e:
        desk_pdf = None
        errors.append(f"Desktop copy skipped (likely TCC): {e}")

    print(f">>> Client PDF:   {client_pdf}")
    if desk_pdf:
        print(f">>> Desktop copy: {desk_pdf}")
    print(f">>> Internal PDF: {internal_pdf}")
    for e in errors:
        print(f"   (note) {e}", file=sys.stderr)


if __name__ == "__main__":
    main()
