# Session Status — 2026-07-02

## Latest pass — 2026-07-02 — 4-source deep audit + full on-site fix batch SHIPPED (live, revertable)
- **4 parallel audits (website crawl+code, fresh GSC, fresh GA4, Clarity).** Verdict reconfirmed: site converts, traffic is the bottleneck. GSC 28d: impressions 4x'd (2,283→9,397), clicks flat (33→32), 62 striking-distance queries at pos 4-15. GA4 28d: real local = 12 sessions (~0.4/day), 3 real local phone clicks, 0 real form leads (generate_lead was 7/8 an India form-spam bot; generate_lead still NOT marked key event). Clarity: 0 JS errors / 0 rage clicks, dataset too small to read (~4-6 plausible local sessions/6d); localhost-gate fix verified working since Jun 28.
- **SHIPPED (7 commits, each independently revertable, deployed prebuilt, live-verified):**
  - `cf72d2c` baseline: committed the 5 live-but-untracked area pages (they were deployed 6/30 without committing = silent-deletion risk killed)
  - `4b400df` claims: removed unverified BBB A+ / Yelp 5-star hero badges + "clog removal guarantee" + "no surprise service-call fees" + "leading Redding plumber"; hero photo AI van → REAL photo of Joe installing a water heater (`truck.webp` is real, misnamed)
  - `dbe76a5` cannibalization + links: 6 /services pages de-localized into education hubs w/ cross-links to city twins; nav/drawer/pricing repointed to city money pages; footer+nav areas 6→11 towns; AreaPageTemplate slice(0,6) orphan bug fixed (rotation) + service links feed nearest-money-city (cottonwood→anderson, millville→palo-cedro, happy-valley→anderson, igo→redding, lake-california→red-bluff); Redding hub finally links /water-heater-repair-redding
  - `de3156a` CTR titles/metas (+OG sync): homepage "Redding Plumber, Same-Day, 5.0 Stars | Topline Plumbing" + drain/WH-replacement/emergency Redding pages; verbatim FAQ "Who should I call for a clogged sink or drain in Redding?" (141 impr @9.5) on drain page; sewer camera section + FAQ on sewer page
  - `f466d5f` 4 NEW pages (all claims grep-verified vs existing copy, honest no-24/7): /tankless-water-heater-redding, /tankless-water-heater-anderson, /leak-detection-redding, /commercial-plumbing-shasta-lake + sitemap/footer wiring
  - `4314ada` honeypot spam gate (client+server) on lead form — kills the Lucknow bot poisoning GA4
  - `d6bd7?` sweep: BBB/Yelp badges ALSO in Testimonials (audit missed) → replaced with Family Owned badge; grep = 0 sitewide, live-verified 0
- **OPEN / Blake's manual UI:** (1) GSC Request Indexing: 5 area pages ("unknown to Google" per URL Inspection) + the 4 new pages + retitled pages; (2) GA4: mark generate_lead key event + demote form_start (safe now, honeypot live) + internal-IP filter for SD; (3) ask Joe/Josiah: septic? (88 impr waiting) BBB A+ real? no-service-call-fee real? (if true it's the Earl's counterpunch, goes back in titles); (4) DECIDE: honest 24-hour/after-hours resource page (1,442 impr cluster, 0 clicks); (5) header email still legacy gmail (pro = Office@toplineplumbingco.com) — Joe's inbox choice, not changed.

**Shipped this session:**
- 4 new pages → https://toplineplumbingco.com/{tankless-water-heater-redding,tankless-water-heater-anderson,leak-detection-redding,commercial-plumbing-shasta-lake} (all 200)
- Homepage title/hero/badges + money-page titles + /services de-localization + link architecture → https://toplineplumbingco.com (deploy dpl via `vercel deploy --prebuilt --prod`, 2 deploys ~0 build min)
- Audit data: GSC/GA4 raw pulls in session scratchpad; Clarity cache `~/.claude/clarity-data/topline.jsonl`

## Earlier pass — 2026-07-01 — GHL tag created + RealWork Labs / geotag add-on strategy call
- **DONE — created GHL tag `alert list difficult client`** in Topline sub-account (loc `bCInnDJhp63zU6NLvQ8m`). Tag ID `cnHUHZhOXsrUfZEltf4u`, confirmed live in tag list (34 tags total). Client asked for an "Alert List Difficult Client" flag; GHL forces tag names lowercase (normal). Blocker cleared first: PIT token (`GHL_PIT_TOKEN` in `.env.local`) lacked Tags scope — Blake added View/Edit Tags to the "Omnipresent Reporting" Private Integration, same token now writes tags. v1 API key is dead ("switch to new token"). Flagged: a tag alone doesn't *alert* anyone — offered a GHL notification automation on top, not yet built.
- **Answered 2 client curiosity Qs (verified, not guessed):** (1) "Dispatch me" = dispatch.me FSM app — NO native GHL integration (their list: Salesforce/HubSpot/Dynamics/Oracle/QuickBooks/Zapier); bridge via Zapier or their API. (2) RealWork Labs (product "Crux") = home-services geotag proof: field app captures job photos+video+review+GPS, publishes a neighborhood job map + local SEO pages. Client says too pricey, "just curious."
- **STRATEGY LOCKED (advisor pass) — geotag add-on = entertain, but LIGHT version only, and money isn't the reason.** Verdict: build worth doing ONLY if 3 lines hold — (a) build the light version not SaaS (Topline low job volume = thin capture form + semi-manual publish, days not weeks; multi-tenant SaaS = weeks, speculative for a 1-client base), (b) get their per-job usage commitment IN WRITING first (adoption by techs is the coin-flip; ~30-60 sec/job), (c) get RealWork's quote as the undercut anchor. Real payoff = Topline retention (flagship case-study client) + a reusable acquisition weapon for plumber #2 ("RealWork thing, bundled, cheaper"), NOT the ~$200-300/mo itself.
- **LSA sequencing decision:** Do NOT hold LSA hostage to land geotag first (extract-sequencing = trust risk + fights cash-flow-first; LSA is faster cash + less to build/maintain). Send the geotag qualifying text alone, let them talk to RealWork, then have ONE honest "where should your money go" convo when they circle back — LSA first if calls-now is the goal. LSA pitch already written: `.planning/lsa-search-ads-pitch.md`.
- **Tech stack if built:** GHL = spine (CRM + review workflow + tech nudge loop), NOT the whole thing. Capture = custom mobile web form on Next.js (navigator.geolocation for real GPS / EXIF fallback — GHL forms can't grab precise GPS). Store = Vercel Postgres + Blob. Publish = Next.js map (Mapbox/Google) + programmatic neighborhood pages + schema. Honest flags: Google penalizes thin programmatic/doorway pages (needs real page substance); MMS strips EXIF (live web form is the reliable capture); trust/conversion widget is the safer promise than the SEO ranking lift.
- **NEXT (Blake's move):** send the geotag qualifying SMS (drafted this session — confirms he can beat RealWork's price, asks for per-job usage commitment + RealWork's quote). Do NOT mention LSA in it. Then chase plumber #2 in parallel (ads paused = acquisition is the real bottleneck, not ARPU on 1 client).

**Shipped this session:**
- GHL tag `alert list difficult client` (ID `cnHUHZhOXsrUfZEltf4u`) → live in Topline GHL sub-account
- Strategy + drafts (geotag qualifying SMS, LSA framing) → this note + vault session note

## Latest pass — 2026-06-30 — GA4 "drop" debunk + service-area expansion LIVE + LSA/citation deliverables
- **The "45% traffic drop" was a comparison artifact, not real.** GA4 Home "Last 7d" (Jun 23-29) compared against a prior week that happened to catch a one-day spike (Jun 17 = 13 users). Baseline is flat ~1-5 users/day all month, users every day incl Jun 29 = 5. No decline, no tracking break. Verified via 28d daily pull + channel split (`scripts/ga4-drop-diagnose.py`, `ga4-channel-source.py`, run with `.ga4venv`).
- **Diagnosis reconfirmed: authority is the bottleneck; the site is technically done.** GSC 90d: every city money query ranks page 2+ (plumbers redding ca pos 20.6, plumber redding ca 25.2, drain cleaning redding 19.2, sewer line replacement redding ca 56.4); even homepage pos 11. Channel ~even organic/direct, ~73 users/28d. URL Inspection: flat geo pages indexed+serving; `/services/*` "unknown to Google" = crawl-budget/authority symptom, NOT a config bug (robots allow-all, sitemap submitted 6/03 + downloaded 6/27 0-errors, self-canonical, internally linked). No code fix exists — every remaining lever is off-page or paid.
- **Phone landmine RESOLVED (verified):** canonical = (530) 704-6989 (GBP system-of-record + whole site/GHL/blog agree). Yelp live-shows WRONG 768-9446 (confirmed via firecrawl scrape). 768-9446 = Joe's legacy line. Fix requires claiming Yelp/BuildZoom = Blake's hands (no API path).
- **SHIPPED — 5 new service-area pages LIVE** (website now matches GBP service area = 11 towns): Millville, Cottonwood, Lake California, Igo, Happy Valley. Built off a NEW shared `components/templates/AreaPageTemplate.tsx` (existing 6 area pages untouched). Honest local content added to `lib/cityProfiles.ts` + `lib/cityFaqs.ts` (kept water-provider/specifics general where unverifiable; no fabrication). Wired into `/areas` index (6→11 cards) + `app/sitemap.ts`. Typecheck + prod build clean; deployed `vercel --prod` (dpl_A4zUTvkyEMSrSs6SU6D1jWMnLUZ7); all 5 verified live HTTP 200 on toplineplumbingco.com.
- **Deliverables saved:** `.planning/lsa-search-ads-pitch.md` (client pitch — real GSC positions, no fabricated ROI) + `.planning/citation-submission-pack.md` (canonical NAP locked, 15-directory checklist, top 3 = Yelp/Bing/Apple).
- **OPEN / Blake's manual UI:** (1) SAVE the GBP pending service areas (Igo / Red Bluff / Happy Valley); (2) claim Yelp → change phone 768-9446 → 704-6989; (3) LSA + Search ads is the only fast lever for booked calls (needs client ad-budget conversation — pitch is written). **530 HTTPS redirect = PARKED** (retired domain, HTTP 301 already works, below the line).

**Shipped this session:**
- `app/areas/{millville,cottonwood,lake-california,igo,happy-valley}/page.tsx` + `components/templates/AreaPageTemplate.tsx` → https://toplineplumbingco.com/areas/<slug>
- `lib/cityProfiles.ts` + `lib/cityFaqs.ts` (+5 towns), `app/areas/page.tsx` (index 6→11), `app/sitemap.ts` (+5 routes)
- `.planning/lsa-search-ads-pitch.md`, `.planning/citation-submission-pack.md`
- `scripts/ga4-drop-diagnose.py`, `scripts/ga4-channel-source.py`, `scripts/gsc-index-status.py`

## Latest pass — GSC access fix + GSC/GA4/Clarity audit + brand-drop fix + 530 duplicate kill
- **GSC access restored.** `blake@omnipresent.app` had dropped to `siteUnverifiedUser` on domain property `sc-domain:toplineplumbingco.com` (old DNS TXT verification token was removed; `_rAs1vb7…` in DNS belongs to another account). Re-verified by adding Blake's token `google-site-verification=RJUkC0M1sxhXrZAM2vRGiIEitJpVxGRS1HcqLtG4qgg` as a TXT @ on Namecheap. Owner again. API pulls (google-report-token.json) work again. NEVER delete that TXT record.
- **3-source audit (all live API).** GSC 28d: 29 clicks / 8,497 impr / pos 21.1 — impressions ~4x'd but clicks fell; ranks for nearly every Redding money term at pos 7-15 (not top 3). 33 striking-distance queries at 0 clicks. GA4 28d: 113 sessions but ~71% noise (29% Blake's SD testing + ~40% bots); REAL Redding ≈ 9 sessions → 2 leads. Clarity: too small + contaminated to read, 0 JS errors / 0 rage. **Verdict: site converts, TRAFFIC is the bottleneck. Lever = GBP + LSA + Search ads, not site edits.**
- **Brand-drop root cause (verified via git):** homepage `<title>` changed 3x in-window (Jun 3 demoted brand to end → Jun 17 restored brand-first, current). That depressed "topline plumbing" 3.9→8.9. Already fixed; needs re-index. "local plumbing services near me" (was pos 1.0/144 impr → 0) lived on the HOMEPAGE (still live + healthy) — it's a Local Pack/GBP query loss, not a site issue. NOT the f04042e prune.
- **530.com duplicate KILLED (https pending).** `toplineplumbing530.com` (transfer to Blake's Namecheap completed 6/29) was a live 2nd site with the WRONG phone (768-9446). Switched NS Cloudflare→Namecheap BasicDNS, added 301 URL Redirect (@ + www) → `https://toplineplumbingco.com`. DNS resolves to NC redirect IP 162.255.119.35. **HTTP (port 80) 301 confirmed LIVE → .co. HTTPS (443) still timing out at ~16-24h** = Namecheap free redirect SSL not provisioned (full connection timeout, not a cert error — yellow flag). Auto-recheck trigger set for 2026-06-30 21:45 UTC (`trig_01EbBwgnbtrbtVdr8E2E8dqU`, Telegrams Blake the verdict). **FALLBACK if https still dead at 24h:** put 530 back on Cloudflare NS (jerry/aron.ns.cloudflare.com) + Cloudflare Redirect Rule (instant https+SSL) instead of Namecheap forwarding.
- **Code shipped this pass (build-verified):** Clarity + GA4 gated to `NODE_ENV==='production'` (stops localhost dev leak into both datasets); homepage H1 now leads with "Topline Plumbing,". → see commit below.
- **OPEN / Blake's manual UI:** GSC Request Indexing on homepage; GA4 mark `generate_lead` key event + demote `form_start` + internal-IP filter for SD. **Next lever = GBP investigation** (the "near me" loss + traffic problem both point there) + LSA/Search ads.

## Earlier (2026-06-27) — pre-commit claim audit + SEO cleanup + FULL COMMIT/PUSH/DEPLOY (LIVE)
- **Two parallel adversarial subagents** (claim audit + technical SEO audit). Both flagged real issues; I verified each against source before acting (caught 2 FALSE-ABSENCE claims from the SEO agent — see below).
- **CLAIM FIXES (all source-verified, deployed):**
  - Review count **50 → 52** (Hero, Testimonials, LocalBusiness schema). Verified LIVE via Places API: rating 5.0, **userRatingCount 52**. The hardcoded 50 (comment "verified 6/17") was STALE — reviews grew. Live schema now shows reviewCount 52. ✅
  - Two stray **"27+ years" → "28+"** (areas/page card, water-softener-redding stat, llms-full.txt) — contradicted "since 1998 / 28 years" canon. Final grep: zero "27 near year" left.
  - Removed unverified **"30-60 minute response inside Redding city limits"** ARRIVAL claim (drain-cleaning service page). Job-duration "30-60 min" on fixture-installs correctly LEFT.
- **SEO FIXES (deployed):**
  - **Killed the /water-heater-repair-redding 301 redirect** (Blake decision: keep page, kill redirect). Page was fully built (own title/H1, 7 internal links incl. footer "Redding (Repair)") but redirected to nowhere. Now LIVE, returns 200, targets distinct "water heater repair redding" query.
  - **Differentiated the replacement page** (title/desc/H1 now lead with "Replacement & Installation," dropped "Repair") to avoid cannibalizing the now-live repair page + fixed its over-length title/desc.
  - **Deleted dead app/robots.ts** (public/robots.txt shadows it in App Router — was a maintenance footgun, both allowed-all so no live harm).
- **TWO FALSE ABSENCES caught (no-unverified-absence rule):** SEO agent claimed (a) /faq has no FAQPage schema and (b) money pages lack FAQPage schema. BOTH WRONG — verified `FAQSchema` (emits FAQPage JSON-LD) renders on ~50 pages incl. /faq, homepage, every city/area/service page. Zero gaps. Did NOT add duplicate schema.
- **COMMITTED + PUSHED + DEPLOYED:** 67 files in one clean commit `a10c04e` (no junk staged — excluded screenshots/PDFs/logs/caches/scratch scripts; added blog source + 6 service webp). Pushed to origin/main. Deployed to prod, live-verified (repair page 200, schema 52).
- **STILL OPEN (Blake's call, NOT fixed):** CSLB #596557 UNVERIFIED (couldn't read CA board via API/WebFetch — appears 243× site-wide, verify on cslb.ca.gov); "most trusted" / "Top-rated on Google" superlatives (about:102, Footer:87, llms*.txt); "family owned" 78× (confirm true once); "bonded" claim (confirm bond is real). "3,000+ jobs" + "1,000+ water heaters" = owner-asserted, kept by prior decision.

## Earlier pass — site-wide claim sweep (response-time + jobs count) + homepage 28yr canon (LIVE)
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
