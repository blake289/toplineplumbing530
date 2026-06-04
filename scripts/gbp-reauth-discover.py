#!/usr/bin/env python3
"""
One-time: re-consent the Google OAuth token to ADD the Business Profile scope
(keeps the existing Analytics + Search Console scopes), then list the GBP
accounts + locations so we can identify Topline's listing resource name.

Opens a browser for consent — pick blake@omnipresent.app (the account that
manages Topline's GBP). Overwrites ~/.claude/scripts/google-report-token.json
with a token that covers all three scopes.
"""
import os, json, warnings
warnings.filterwarnings("ignore")
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import AuthorizedSession
from google_auth_oauthlib.flow import InstalledAppFlow

HOME = os.path.expanduser("~")
CLIENT_SECRETS = f"{HOME}/.claude/scripts/google-credentials.json"
TOKEN_PATH = f"{HOME}/.claude/scripts/google-report-token.json"
SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/business.manage",
]

flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRETS, SCOPES)
print(">>> Browser opening — pick blake@omnipresent.app and approve all.")
creds = flow.run_local_server(port=0, login_hint="blake@omnipresent.app",
                              prompt="select_account consent")
open(TOKEN_PATH, "w").write(creds.to_json())
print("Token saved with scopes:", creds.scopes)

s = AuthorizedSession(creds)
print("\n=== GBP accounts ===")
r = s.get("https://mybusinessaccountmanagement.googleapis.com/v1/accounts")
accts = r.json().get("accounts", []) if r.ok else []
if not r.ok:
    print("accounts error", r.status_code, r.text[:300])
for a in accts:
    print(f"  {a.get('name')}  |  {a.get('accountName')}  |  {a.get('type')}")

print("\n=== locations per account ===")
for a in accts:
    acct = a.get("name")
    url = (f"https://mybusinessbusinessinformation.googleapis.com/v1/"
           f"{acct}/locations?readMask=name,title,storefrontAddress,phoneNumbers"
           f"&pageSize=100")
    r = s.get(url)
    if not r.ok:
        print(f"  [{acct}] locations error", r.status_code, r.text[:200]); continue
    for loc in r.json().get("locations", []):
        addr = loc.get("storefrontAddress", {})
        city = (addr.get("locality") or "") + ", " + (addr.get("administrativeArea") or "")
        print(f"  {loc.get('name')}  |  {loc.get('title')}  |  {city}")
