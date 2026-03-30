---
created: 2026-03-30T02:28:26.511Z
title: Add CNAME www record in Namecheap and validate SC fix
area: general
files: []
---

## Problem

`www.toplineplumbingco.com` is not configured in DNS — it times out instead of redirecting to the non-www. Google Search Console flagged "Page with redirect" errors. The 308 redirect has been set up in Vercel (www → toplineplumbingco.com), but the CNAME record still needs to be added in Namecheap to complete the fix.

Wait until Josiah is awake to coordinate — he may have DNS access or be managing the domain.

Also: get GBP (Google Business Profile) login from Josiah so Blake can be added as manager and retrieve Joe's Google review link (needed for Phase 04 review generation).

Also: determine deal/offer structure to present to Joe.

## Solution

1. Log into Namecheap → Advanced DNS for toplineplumbingco.com
2. Add record: Type=CNAME, Name=www, Value=f21f4aa01cb89792.vercel-dns-017.com
3. Save and wait for DNS propagation (usually a few minutes)
4. Verify: `curl -sI https://www.toplineplumbingco.com` should return 308 redirect to https://toplineplumbingco.com
5. Go to Search Console → Indexing → "Page with redirect" → click Validate Fix

While coordinating with Josiah — also get GBP login/manager access for Topline Plumbing so the Google review link (Place ID) can be retrieved for Phase 04.
