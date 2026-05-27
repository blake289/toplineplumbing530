# Session Status — 2026-05-18

## STATUS: gaps-from-research branch (2 commits, NOT pushed) — gaps work + full mobile audit + fixes. Awaiting Blake approval to push/merge.

## Done This Session
- **Research audit → 5 gap fixes** (commit 0674ecc, 31 files):
  15 differentiated area pages (cityProfiles.ts + LocalContext.tsx), proof-of-work galleries on 9 service pages (ServiceGallery.tsx), Joe & Paulette owner trust unit in hero, AfterHoursCapture module on homepage + emergency, removed stale "2am" claims from 12 area pages.
- **Full mobile audit** — Playwright iPhone-12 viewport screenshots of all 32 pages (`.planning/mobile-audit-2026-05-13/`). Reusable scripts at `scripts/mobile-audit.mjs` + `scripts/analyze-audit.mjs`.
- **Mobile fixes shipped** (commit 8f5ecf7, 21 files):
  Close menu 40→48px, footer social 40→44px, footer service nav links (24→47px tap area), area sidebar service lists (150 links @ block py-2), FAQ TOC pills (40→44px+ min-h), footer Contact column (phone/email/review @ py-2.5), city pills (29→39px), Hero 11px → 12px on all body text. Re-audit clean: 0 overflow, 0 console errors, 32/32 pages 200.
- **Workspace email decision**: sided with Joe (no $7/mo Workspace yet) BUT flagged that citation NAP+ requires permanent domain email. Recommended Cloudflare Email Routing ($0) forwarding `contact@toplineplumbingco.com` → existing gmail — BEFORE citation batch ships.
- **QA/GSC monitoring routine** discussed (daily 2-min phone_call check, weekly 15-min traffic + GSC, monthly 30-min CTR/position analysis). Worth saving to memory as reference.

## Active Blockers
- 🟡 Blake mobile review of `gaps-from-research` branch (restart: `PORT=3001 npx next start`, was on prod build)
- 🟡 Joe sanity-check on local-content copy (Truckee/Paradise/Marysville geography — public facts but worth eyeballing)
- 🔴 Phone number canonical (704-6989 vs 768-9446) — carried from prior, blocks citations
- 🔴 530.com domain fate decision — carried from prior
- 🟡 Cloudflare Email Routing setup — BEFORE citation batch (10 min, $0/mo)
- 🟡 `phone_call` event still not marked as Key Event in GA4 Admin → Events (carried from prior)

## Next Steps (Exact Order)
1. Blake mobile eyeball + Joe sanity-check on local copy
2. Push `gaps-from-research` to remote → Vercel preview → final eyeball
3. Merge to main (Blake's call only)
4. Set up Cloudflare Email Routing: `contact@toplineplumbingco.com`
5. Run citation batch (Whitespark/Yelp/BBB/Angi/etc.) with branded email
6. Mark `phone_call` as Key Event in GA4 Admin
7. Pricing-expectation block on service pages (needs Joe's dispatch/diagnostic policy first)

## Locked Decisions
- Cloudflare Email Routing > Google Workspace for now ($0 vs $7/mo, same brand outcome for citations)
- Mobile baseline: all body text ≥12px, all primary CTAs ≥44px tap area, 11px reserved for stylized micro-labels only (Pricing/Testimonials platform sub-labels)
- Audit infrastructure (Playwright scripts) lives in `scripts/` — rerun anytime with `node scripts/mobile-audit.mjs && node scripts/analyze-audit.mjs`
- Carry forward prior locked decisions (perf 90, hero review unit, owner naming, no 24/7, no Master Plumber in copy, etc.)

## Shipped this session
- toplineplumbing530 commit 0674ecc → branch `gaps-from-research` (gaps work, 31 files, +764)
- toplineplumbing530 commit 8f5ecf7 → branch `gaps-from-research` (mobile fixes, 21 files, +578/-323)
- 32 mobile screenshots → `.planning/mobile-audit-2026-05-13/*.png`
- `scripts/mobile-audit.mjs` + `scripts/analyze-audit.mjs` (reusable audit tooling)
- NOT pushed to remote. NOT merged to main.
