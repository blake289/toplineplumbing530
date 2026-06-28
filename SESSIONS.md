# Session Status — 2026-06-26

## Latest pass — site-wide claim sweep (response-time + jobs count) + homepage 28yr canon (LIVE)
- **"30-60 min response" GUARANTEE removed site-wide** (23 pages, ~50 instances → "same-day during business hours"). 5 parallel subagents grouped by page-type. The real liability. Faucet JOB-DURATION "30-60 minutes" (fixture-installs:87) correctly LEFT (it's how long the task takes, not an arrival promise) — that was the landmine.
- **"3,000+ jobs" KEPT** (Blake decision: plausible ~2/week×28yr, + it's the homepage hero stat + animated counters). Agents had softened it to "Thousands/1000s" → reverted all 27 stat blocks + prose back to "3,000+" via git-diff-guided perl (only reverted the jobs-number; pre-existing "thousands in water damage / homeowners" untouched).
- **Homepage years 27→28** (Hero pill "28+ Years Serving Redding", StatsSection StatCard target 27→28, About counter cap 27→28) — earlier 1998-canon sweep had missed these homepage spots.
- **"2,800+ water heaters" → "1,000+"** (earlier this pass; implausible vs 3,000+ total jobs).
- Build passed, deployed, verified live. STILL UNVERIFIED (Blake's call, untouched): "3,000+ jobs" (kept), CSLB #596557 (low risk, confirm on CA license board). "5.0 rating" = VERIFIED (Places 5.0/52).

## Earlier pass — 4-page SEO optimization + Clarity API daily pull (LIVE)
- **4 striking-distance pages optimized + deployed** (parallel subagents, 1 file each, real GSC keywords, claim-clean, no 24/7, no fabrication): /drain-cleaning-redding (was pos 15.6, 563 impr), /water-heater-replacement-redding (15.8, 535), /emergency-plumber-redding (18.1, 465 — "emergency plumber" already pos 4.4), /blog/clogged-sink-drain-redding (pos 10, 132 impr — page-1 push). Each got tighter title/meta, snippet intro, content depth, 2-3 FAQs, internal links. Build passed, verified live.
- **Decision: NO net-new blogs + NO Jumper yet.** GSC shows a ranking problem not a content gap (pages exist, stuck pos 15-56). Local-rank proxy (Places API): Topline NOT in top 15-17 for any of the 4 money terms (field has 270-2,631 reviews vs Topline's 52) — so by Blake's "~rank 10 then push to top 3" rule, Jumper is premature. Real call-driver = LSA + Search ads. Reviews already auto-firing.
- **Claim fix:** "2,800+ water heaters replaced" (implausible vs 3,000+ total jobs) → "1,000+ water heaters" per Blake (pick-sensible-number authorized). Live.
- **STILL-OPEN unverified pre-existing claims (Blake's call):** "30-60 min response" on ~32 pages (response-time guarantee = liability risk), "3,000+ jobs since 1998" on 7 pages. "5.0 rating" (34 pages) = VERIFIED true (Places 5.0/52). Emergency page 24/7 mentions = all honest "we are NOT 24/7" framing (verified, not fabrication).
- **Microsoft Clarity API LIVE for all 3 businesses.** Tokens in lpass (microsoft.com entries: "topline/omnipresent/mindful clarity api"), cached to ~/.claude/scripts/.clarity.env (600) for daemon. Pull script ~/.claude/scripts/clarity-daily-pull.py. **DAILY** launchd job com.blake.clarity-daily (7:30am) — daily forced because Clarity only retains last 1-3 days (weekly would gap). Appends per-day jsonl (summary+raw) to ~/.claude/clarity-data/<biz>.jsonl. Tested: Topline 3 / Omni 5 / Mindful 0 sessions last 24h. API: GET clarity.ms/export-data/api/v1/project-live-insights?numOfDays=1, Bearer token, 10 req/proj/day, no recordings/heatmaps (dashboard-only).

## Earlier pass — GA4/GSC/Clarity analysis + GBP audit + 1998 canon (LIVE)
- **Analysis (GA4 prop 533184222 + GSC + Clarity):** Bottleneck = TRAFFIC, not the site. ~9-15 real Redding sessions/28d; site converts fine (mobile 17%, 8/48). GA4 28d: 109 sessions / 12 conv (test-contaminated). GSC 28d: 34 clicks / 7,750 impr / pos 20.7 — impressions tripled but position worsened (new area/service pages stuck pos 24-56). Striking distance (pos 8-13, 0 clicks): emergency plumber 154 impr, drain cleaning near me 133, emergency plumbing near me 116. Do NOT chase 24/7 (not 24/7). Clarity live since 6/23 (~3d data, no API token = dashboard-only).
- **Fixed Google token:** GSC verify script had clobbered the shared token to GSC-only scope, 403'ing GA4. Restored all 3 scopes (analytics.readonly + webmasters.readonly + business.manage) at ~/.claude/scripts/google-report-token.json. Pull script: scratchpad/pull-analytics.py (run with /usr/bin/python3, force-refreshes token).
- **GBP audit (Places API + dashboard screenshot):** Profile set up correctly. 5.0★/52 reviews, phone (530) 704-6989, website linked, categories (Plumber + Gasfitter/Drainage/Gas installation/Hot water system supplier), Mon-Fri 8-4:30, SAB. Mgmt API quota = 0 (can't read/write GBP via API; dashboard only).
- **1998 canon (deployed + verified live):** site had stray "30+/27+ years" + GBP opening date was 1990. Standardized to "since 1998 / 28 years" — 7 perl edits (areas/shasta-lake, areas/palo-cedro, areas/page, about, Footer, faq, wh-repair-shasta-lake). Lifespan strings (20+ tankless, 40+ pipes, 8-12 tank) correctly left alone. Blake set GBP opening date→1998 + saved new description.
- **GBP description (Blake saved it):** 680 chars, no em dash, every claim source-verified. CUT "Moen Flo certified installer" (ZERO site evidence — unverifiable). Kept Navien+Rinnai certified install (verified literal on site). OPEN: confirm with Joe if Moen Flo certified → re-add if yes.
- Asana: comment on 1216072789033660 (record) + forward task 1216078248484208 (map-pack push). Reviews already firing automatically (Blake confirmed) — that lever is live.
- **NEXT MOVE:** GBP rank-grid baseline (Jumper) for emergency plumber / drain cleaning near me / water heater replacement / plumber redding ca; emergency-category check in picker; decide on LSA + Search ads for instant flow.

## Earlier this session — Topline: GSC fixes + blog + homepage photos/UX + lead email fallback (ALL LIVE)

**State:** Multiple shipped passes, all deployed + verified on toplineplumbingco.com.

### 1. GSC report corrected + on-page SEO + blog (earlier today)
Real 28d totals = 30 clicks / 7,962 impr / pos 21.0 / 0.4% CTR (a draft had 13/452 wrong). Bottleneck = ranking depth + traffic, not CTR. 7 on-page fixes (emergency/drain/water-heater titles, anderson/bella-vista local content) + `/blog` route with 2 posts live. Detail: `.planning/gsc-corrected-report-2026-06-26.md`, `.planning/blog/`. Asana 1216072789033660.

### 2. Homepage photos + UX + form (this pass) — DEPLOYED
- **Service section:** 6 photoreal photos via locked OpenAI gpt-5.5 image pipeline (client-showcase skill, documentary brief, no text/logos). 3 redone face-free. Icon badges removed. PNG->WebP (14MB->900KB). Generator: scratchpad/gen-photos.mjs (key: lpass openai.com).
- **Hero:** trust title centered + dropped lower + padding; 3 trust items on one line (left col widened to 1.35fr); removed "By submitting…" line. `components/sections/Hero.tsx`.
- **Form:** ZIP removed; form = name + phone + service only. `components/forms/HeroEstimateForm.tsx`.

### 3. Lead email fallback + form verification — DEPLOYED
- `app/api/contact/route.ts`: emails every lead (name/phone/service) to blake@omnipresent.app via Resend; fires even if GHL fails; only shows fields with values. Env: RESEND_API_KEY + LEAD_NOTIFY_EMAIL in .env.local + Vercel prod. Tested, Blake confirmed receipt.
- **Form CONFIRMED working:** live /api/contact 200; phone-only submission VERIFIED in GHL (read via GHL_PIT_TOKEN = has read scope; GHL_API_KEY = write-only). Blake's "roger test" merged into existing contact by phone dedup (dateUpdated today) = why no new row showed.
- Asana 1216076696648574.

## Key facts learned (don't re-derive)
- **GHL tokens:** GHL_API_KEY = write-only (upserts, 201). GHL_PIT_TOKEN = HAS read scope (search/get contacts). Topline loc = bCInnDJhp63zU6NLvQ8m. Form contacts: tag `website-lead` + `service:*`, source "Website Form".
- **GHL upsert dedupes by phone** → resubmits UPDATE existing contact (no new row). Sort Contacts by Date Added desc to see leads.
- **Resend:** onboarding@resend.dev only delivers to account-owner email (blake@). To notify Joe/others, verify a domain (toplineplumbingco.com) in Resend. omnipresent.app = "failed" verify, mindfulmushroomstore.com = verified (wrong brand).
- Image pipeline (locked): gpt-5.5 + Responses API + image_generation, effort high, medium quality. Photo brief variant = no text/logos, landscape 3:2, "no faces" works.

## Next / open
1. Optional: verify a Resend domain so lead emails can also go to Joe.
2. SMS-consent checkbox kept on form = required for A2P if texting leads. Don't remove.
3. Blog: Joe can add ballpark prices to the 2 posts (left number-free, honest).
4. Git: all DEPLOYED but UNCOMMITTED (commit when Blake asks).

## Carried-over open (untouched)
- **530 domain:** monitor `com.blake.topline-530-transfer` polls 2x/day, Telegrams on flip GoDaddy->Namecheap. Still pendingTransfer as of 6/25; 5-day mark = 6/28.
- **Served-customer SMS:** 136 Wave-1 prepped, PAUSED at GHL re-login + Blake/Joe gate.
- Clarity LIVE (xbov6hngd8). Whitespark citations ~7/30.

## Shipped this session (live on toplineplumbingco.com)
- Hero/form/Services components + 6 WebP photos + `/blog` + 2 posts + 7 on-page SEO fixes + lead email fallback
- `.planning/gsc-corrected-report-2026-06-26.md`, `.planning/blog/`, scratchpad/gen-photos.mjs
- Asana 1216072789033660 + 1216076696648574
