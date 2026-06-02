#!/usr/bin/env python3
"""
GSC keyword opportunity pull for Topline combo-page planning.
Reuses the OAuth token from topline-report.py (webmasters.readonly).
Pulls last 90 days of query-level data and flags city+service opportunities.
Output: JSON to stdout + human table to stderr.
"""
import os, json, sys, datetime
from urllib.parse import quote
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request, AuthorizedSession

HOME = os.path.expanduser("~")
TOKEN_PATH = f"{HOME}/.claude/scripts/google-report-token.json"
SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly",
]

def auth():
    creds = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)
    if creds.expired and creds.refresh_token:
        creds.refresh(Request())
        with open(TOKEN_PATH, "w") as f:
            f.write(creds.to_json())
    return AuthorizedSession(creds)

TODAY = datetime.date.today()
START = (TODAY - datetime.timedelta(days=90)).isoformat()
END = TODAY.isoformat()

CITIES = ["redding", "anderson", "shasta lake", "palo cedro", "bella vista",
          "red bluff", "cottonwood", "chico", "happy valley", "millville"]
SERVICES = ["emergency", "drain", "clog", "sewer", "water heater", "tankless",
            "leak", "repipe", "gas line", "plumber", "plumbing", "faucet",
            "toilet", "garbage disposal", "hydro", "trenchless"]

def gsc(s, site, dims, limit=2000):
    url = (f"https://searchconsole.googleapis.com/webmasters/v3/sites/"
           f"{quote(site, safe='')}/searchAnalytics/query")
    body = {"startDate": START, "endDate": END, "dimensions": dims,
            "rowLimit": limit, "dataState": "all"}
    r = s.post(url, json=body)
    if r.status_code != 200:
        sys.stderr.write(f"ERROR {r.status_code}: {r.text}\n")
        sys.exit(1)
    return r.json().get("rows", [])

def main():
    s = auth()
    sites = s.get("https://searchconsole.googleapis.com/webmasters/v3/sites").json()
    entries = [x["siteUrl"] for x in sites.get("siteEntry", [])]
    site = next((x for x in entries if "toplineplumbingco.com" in x), entries[0] if entries else None)
    sys.stderr.write(f"Sites available: {entries}\nUsing: {site}\n90d window: {START} -> {END}\n\n")

    qrows = gsc(s, site, ["query"])
    queries = [{"query": r["keys"][0], "clicks": r["clicks"], "impr": r["impressions"],
                "ctr": round(r["ctr"]*100, 1), "pos": round(r["position"], 1)} for r in qrows]

    def has_city(q): return any(c in q for c in CITIES)
    def has_svc(q): return any(sv in q for sv in SERVICES)

    combo = [q for q in queries if has_city(q["query"]) and has_svc(q["query"])]
    svc_only = [q for q in queries if has_svc(q["query"]) and not has_city(q["query"])]
    # opportunity = decent impressions, not yet page 1 (pos > 5), low CTR
    opp = sorted([q for q in queries if q["impr"] >= 5 and q["pos"] >= 4],
                 key=lambda x: -x["impr"])

    pqrows = gsc(s, site, ["page", "query"])
    page_q = [{"page": r["keys"][0], "query": r["keys"][1], "impr": r["impressions"],
               "clicks": r["clicks"], "pos": round(r["position"], 1)} for r in pqrows]

    out = {
        "window": {"start": START, "end": END}, "site": site,
        "total_queries": len(queries),
        "combo_city_service": sorted(combo, key=lambda x: -x["impr"]),
        "service_no_city": sorted(svc_only, key=lambda x: -x["impr"])[:40],
        "top_opportunities_pos4plus": opp[:50],
        "page_query_pairs": sorted(page_q, key=lambda x: -x["impr"])[:120],
    }
    print(json.dumps(out, indent=2))

    def table(title, rows):
        sys.stderr.write(f"\n=== {title} ===\n")
        sys.stderr.write(f"{'query':45} {'impr':>6} {'clk':>4} {'ctr%':>6} {'pos':>5}\n")
        for q in rows[:40]:
            sys.stderr.write(f"{q['query'][:45]:45} {q['impr']:>6} {q['clicks']:>4} {q['ctr']:>6} {q['pos']:>5}\n")
    table("CITY+SERVICE COMBO QUERIES (the money queries)", out["combo_city_service"])
    table("SERVICE QUERIES, NO CITY", out["service_no_city"])
    table("TOP OPPORTUNITIES (impr>=5, pos>=4)", out["top_opportunities_pos4plus"])

if __name__ == "__main__":
    main()
