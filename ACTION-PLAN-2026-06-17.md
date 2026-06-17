# Topline Plumbing — Ranking & Results Action Plan
**Generated 2026-06-17 from a 5-track parallel audit (form/conversion, technical SEO, GBP/map-pack, citations/NAP, GSC opportunity).**

## TL;DR — where the leads actually come from
- **Phone is the channel, not the form.** GA4: 7 `phone_call` events / 28d. GHL: only 1 real organic website-form lead ever (Jennifer O'Brien, 6/17) — the rest were test/reactivation seeds. The "form leak" was a tracking artifact, now hardened.
- **The site is on-page strong.** Real gains are OFF-PAGE: kill the poison domain, fix NAP, optimize GBP, grow reviews. Plus a few CTR/title fixes (shipped).

---

## ✅ SHIPPED THIS SESSION (commit cf15f7e → Vercel auto-deploy)
1. **Homepage title** → `Topline Plumbing | Licensed Plumber in Redding, CA`. Was `Emergency Plumber Redding CA | Topline Plumbing`, which (a) cannibalized the dedicated `/emergency-plumber-redding` page and (b) buried the brand — "topline plumbing" ranked only **pos 4.0** for its own name.
2. **`AggregateRating` schema** added (5.0 / 50, verified live via Places API). Note: Google does NOT render self-serve star snippets for LocalBusiness, so don't expect SERP stars — it's valid entity markup, kept in sync with the Hero.
3. **Form hardening** — ZIP now optional (was a required blocker); GA `gtag` loads `afterInteractive` so `generate_lead` fires reliably (was a `lazyOnload` race that silently dropped the conversion event).

---

## 🔴 P0 — DO FIRST (off-page, needs Joe / external access)

### 1. Kill or redirect the old domain `toplineplumbing530.com`
- It is **LIVE** on Cloudflare + `sites.ludicrous.cloud` (NOT your Vercel — a prior build on another platform).
- It broadcasts the **WRONG phone (530) 768-9446** and **false 24/7 / "round-the-clock" claims**.
- That wrong number has propagated to **BuildZoom, Yelp, and Google snippets** → NAP conflict = direct map-pack ranking suppression, plus real callers may hit a dead/old number.
- **Action:** Ask Joe who controls that domain/site. Either take it down or 301-redirect it to toplineplumbingco.com, and scrub the 24/7 language.

### 2. Fix the wrong phone everywhere it appears
- Correct **(530) 768-9446 → (530) 704-6989** on: the old domain, **BuildZoom** (buildzoom.com/contractor/topline-plumbing-co), **Yelp** (yelp.com/biz/topline-plumbing-redding), and verify **Google Business Profile** shows the right number.
- Standardize the name to exactly **"Topline Plumbing"** (BuildZoom shows "Topline Plumbing Co").

### 3. Confirm 3 facts with Joe (do NOT assume — needed before more citation/schema work)
- **Street address:** "2977 Pawnee Ct, Redding, CA 96001" appears on BuildZoom/Yelp but is unverified. Confirm the correct public business address, then add `streetAddress` to schema + use it consistently across citations. *(Left out of schema this session on purpose — no guessing addresses.)*
- **CSLB license #596557 / owner "Emil Jose Torculas"** (BuildZoom) — confirm correct. (Schema currently lists founder "Joe Torculas" + license 596557.)
- **Two Instagram handles** (`@toplineplumbing` vs `@topline_plumbing`) — which is real / is one a duplicate?

---

## 🟠 P1 — GBP optimization (paste-ready assets below; needs Joe's dashboard)
GBP is the #1 lever for a local plumber. Current profile: 5.0★ / 50 reviews, primary category "Plumber", **zero secondary categories, no Services list, no description surfacing.** Competitors sit at 270–2,600 reviews. The 5.0 rating is the weapon; review volume + profile completeness is the gap.

**See the paste-ready GBP Asset Pack at the bottom of this file.**

---

## 🟡 P2 — Reviews (the sustained map-pack mover)
- Topline already has a review drip deployed in GHL — **verify it's firing** (triggers on job/invoice completion → SMS + email with a one-tap Google review link). Don't rebuild; confirm it's live and add a 3-day follow-up if missing.
- **Branch the request by service type** so reviews naturally mention "water heater," "drain," "repipe" + "Redding" — current reviews are generic ("great guys"), which wastes relevance signal.
- White-hat only: no gating, no incentives. The 5.0 is clean — keep it clean.
- Realistic pace with good automation: 8–15 reviews/month → clears the 250+ tier (where the 3-pack incumbents sit) well inside 18 months.

---

## 🟢 P3 — Content/SEO (needs Blake approval; not auto-built — fabrication risk on new money pages)
From GSC striking-distance + competitor gap analysis:
- **Build `/water-heater-repair-redding`** — structural gap: you have `water-heater-replacement-redding` + `water-heater-repair-{other cities}` but no repair page for your PRIMARY city. `hot water heater repair near me` (pos 10.8) is scattered with no home.
- **Hydro jetting page** — distinct higher-ticket term; competitors (Earl's, Wallner) have dedicated pages, you fold it into drain cleaning.
- **Water softener / hard-water page** — Redding hard-water angle; Earl's & Royal both rank with treatment pages, you have none.
- **"Cost of a plumber in Redding" guide** — no competitor publishes figures; open lane, strong CTR/AEO play.
- **Combo-page title CTR hooks** — titles are keyword-correct but have no hook; add "Upfront Pricing" / "Same-Day" (daytime-safe) to highest-impression cities. Low effort if approved.

---

# 📋 GBP ASSET PACK (paste-ready — all factual, daytime-safe, no 24/7)

### Secondary categories to add (pick closest match in GBP dropdown)
Keep primary = **Plumber**. Add (only those Joe actually does):
- Drainage service / Drain cleaning service
- Hot water system supplier (water heaters)
- Gas installation service / Gasfitter
- *(Optional if offered:)* Repair service
**Do NOT add** "Emergency plumber service" or any 24-hour attribute — off-positioning for daytime-only.

### Business description (≤750 chars)
> Topline Plumbing is a licensed, bonded, and insured plumber serving Redding, CA and the surrounding 530 — Anderson, Shasta Lake, Palo Cedro, Bella Vista, and Red Bluff. Family-owned since 1998 by Joe Torculas, we handle water heater repair and replacement, tankless installs, drain cleaning and hydro jetting, sewer line repair with camera inspection, leak detection, whole-home repiping, gas lines, and fixture installs. We give upfront pricing before any work begins and offer same-day service during business hours (Mon–Fri 8:00a–4:30p). Call (530) 704-6989 for a free estimate.

### Services list (add each with a short description)
- **Water Heater Repair & Replacement** — All makes/models, same-day available. Upfront pricing.
- **Tankless Water Heater Installation** — Rinnai, Navien, Noritz. Energy-efficient endless hot water.
- **Drain Cleaning & Hydro Jetting** — Power auger, hydro jetting, camera inspection.
- **Sewer Line Repair & Replacement** — Camera inspection, trenchless options.
- **Leak Detection & Repair** — Electronic + slab leak detection.
- **Whole-Home Repiping** — PEX and copper; replace galvanized/polybutylene.
- **Gas Line Repair & Installation** — Licensed gas work, leak detection.
- **Fixture Installation** — Sinks, toilets, faucets, showers, disposals.

### Q&A seeds (post as owner, keyword-rich, honest on hours)
1. **Q:** Do you repair tankless water heaters in Redding? **A:** Yes — we repair and install all major tankless brands (Rinnai, Navien, Noritz) across Redding and the 530. Call (530) 704-6989 for a free estimate.
2. **Q:** What are your hours? **A:** We're a scheduled daytime plumbing service, Monday–Friday 8:00a–4:30p. Call or text (530) 704-6989 and we'll get you on the schedule.
3. **Q:** Do you offer same-day service? **A:** Yes, same-day service is available for most repairs during business hours in Redding and surrounding areas.
4. **Q:** Are you licensed and insured? **A:** Yes — licensed, bonded, and insured in California (CSLB #596557), family-owned since 1998.
5. **Q:** Do you do drain cleaning and hydro jetting? **A:** Yes — power auger, hydro jetting, and camera inspection for clogs and recurring drain issues.
6. **Q:** Can you find a hidden leak? **A:** Yes — we use electronic and slab leak detection to locate and fix hidden leaks without tearing up your home.
7. **Q:** Do you replace old pipes? **A:** Yes — whole-home repiping in PEX or copper, replacing aging galvanized or polybutylene.
8. **Q:** What areas do you serve? **A:** Redding, Anderson, Shasta Lake, Palo Cedro, Bella Vista, Red Bluff, and surrounding Shasta/Tehama County communities.

### Review reply templates (respond to ALL reviews; work in service + city)
- **5-star, water heater:** "Thank you, [Name]! Glad we got your water heater sorted in [city]. We appreciate you trusting a local Redding shop — call us anytime at (530) 704-6989."
- **5-star, general:** "Thanks so much, [Name]! It means a lot to a family-owned Redding plumber. We're here whenever you need us."
- **Service-prompt SMS (for the GHL drip), branch by job:** "Thanks for letting Topline handle your [water heater / drain / repipe] today! If we earned it, a quick Google review (mention the work + Redding if you can) really helps a small local shop: [direct review link]"

### Citations to BUILD (correct NAP, no 24/7), ranked
1. Google Business Profile (verify/correct) → 2. Apple Business Connect → 3. Bing Places → 4. Foursquare → 5. Data Axle → 6. BBB + Redding Chamber → 7. Angi / HomeAdvisor / Thumbtack / Yellow Pages.
