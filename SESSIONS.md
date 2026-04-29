# Session Status — 2026-04-29

## What Was Done
- **NEW: /water-heater-replacement-redding landing page** — conversion-focused LSA target page. Built from 7-competitor research (Earl's, Royal, Wallner, Custom, Roto-Rooter, Carlson's, Alpha & Omega).
- **Sitewide pricing audit + scrub** — removed all unverified $ amounts (40 files, 2079 deletions). Only homepage Pricing.tsx cards retain $127/$130/Variable theme baseline.
- **Deleted `/cost/*` (6 pages)** — pricing pages with unverified ranges from Apr 11 SEO push.
- **Deleted `/financing` page** — Topline does NOT offer financing (Blake confirmed).
- **Removed all "in writing" / "written quote" claims** — unverified vs Topline's actual quote practice.
- **Removed "hybrid heat pump WH" service bullet** — unverified service.
- **301 redirects added** in next.config.ts: `/cost/*` → service pages, `/financing` → `/contact`. Preserves SEO equity.
- **Insurance proof submitted to LSA** — license + insurance both in, awaiting Google verification email.
- **Merged to main + deployed to production** — commits `475532a` (main merge) + `98f7107` (heat pump cleanup). All routes verified live, all 7 redirects 308 working.

## Verified This Session (don't doubt)
- "3,000+ jobs" claim — Topline GHL has 3,300 contacts (Blake confirmed). Site shows conservative "3,000+".
- Hybrid heat pump water heaters NOT a service — bullet removed.
- Topline does NOT do financing.

## Blake's Open Items (still pending from prior session)
- iOS Silence Unknown Callers — Blake ON (safe, LC routes via VoIP), Joe OFF (would block forwarded leads — install carrier scam filter instead).

## Blockers
- 🟡 LSA — both proofs submitted, awaiting Google verification email.

## GBP Categories — Verified Setup (Blake mid-update on 2026-04-29)
**IMPORTANT — verified taxonomy correction**: "Water Heater Installation" / "Water Heater Repair Service" do NOT exist in GBP. Categories that DO exist:
- Primary: **Plumber** (keep)
- Secondary 1: **Drain cleaning service** (must select from autocomplete dropdown)
- Secondary 2: **Hot water system supplier** ← actual WH category
- Secondary 3: **Gas installation service**
- Secondary 4: **Gasfitter** (optional)
Skip "Drainage service" (Blake hit autocomplete error). Source: daltonluka.com canonical 2026 list.

## Next Priority
1. **Finish GBP categories** — Blake mid-update. Remove broken "Drainage service" → add "Drain cleaning service" via autocomplete dropdown.
2. **Add Services on GBP** — once categories save, "Services" tab autosuggests. Add custom services: "Water Heater Replacement", "Tankless Installation", "Annual Water Heater Flush", etc.
3. **Wait for LSA verification email** — Google emails Joe directly when ready.
4. **Mark `phone_call` as conversion** in GA4 Admin → Events (pending from prior session).
5. **Review-request copy** — biggest local rank lever now: get customers to mention "water heater" in reviews. Blake can ask for help drafting.
6. **DO NOT bother Joe with pricing/3000-jobs/heat-pump questions** — site converts on phone calls fine. Wait until LSA produces booked jobs, then leverage to ask for real pricing + pitch upsell sprint.

## Asana Logged
- Task `1214408219963328` — Sitewide pricing scrub + water heater LSA landing page
