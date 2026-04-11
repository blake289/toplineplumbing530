# UI Review — TopLine Plumbing

**Audited:** 2026-04-11
**Baseline:** Abstract 6-pillar standards (no UI-SPEC.md)
**Screenshots:** Not captured (code-only audit)

**Overall: 18/24**

| Pillar | Score | Summary |
|--------|-------|---------|
| Copywriting | 3/4 | Strong hero and FAQs; stat labels vague; no CSLB license number shown |
| Visuals | 3/4 | Good hero + offset image cards; form hidden on mobile; no real photo gallery |
| Color | 3/4 | Solid navy/red system; gray classes leak into semantic token areas; pricing icon color hardcoded |
| Typography | 4/4 | Clean two-font system, consistent scale, good hierarchy |
| Spacing | 3/4 | `section-padding` used consistently; 3 arbitrary `text-[42px]` instances; footer padding excessive |
| Experience Design | 2/4 | No sticky mobile phone CTA; hero form desktop-only; stat "5 Min." copy misleading; no scroll-to-form |

---

## Pillar 1: Copywriting — 3/4

**Strengths**
- Hero headline is specific and local: "Redding's Go-To Plumber for 24/7 Emergencies & Same-Day Repairs" — solid (Hero.tsx:39)
- Phone number appears 5x across the page in correct tel: format — good
- Pricing section has concrete starting prices ($127, $130) — strong trust signal
- FAQ answers are detailed and geo-specific (page.tsx:29–53)
- Emergency page copy is urgent and direct (app/services/emergency/page.tsx:55–58)

**Issues**
- **StatsSection.tsx:152** — `target={5}` with label "Min. Avg. Response Time" is ambiguous. "5 minutes" average response time is not credible for an on-site plumber. This reads as 5-minute phone pickup, but visitors will interpret it as arrival time. Either clarify ("5 min. avg. answer time") or swap for "60 min. avg. on-site" to match the FAQ copy (page.tsx:32).
- **StatsSection.tsx:150** — "2487 Water Heaters" has no unit. Label should read "Water Heaters Serviced" for clarity.
- **IntroSection.tsx:38** — "since 1998" appears in body copy but no CSLB license number is displayed anywhere on the homepage. For a licensed trade in California, displaying the license number is a strong conversion trust signal.
- **Testimonials.tsx** — Only 3 reviews, all hardcoded, all 5 stars. No Google badge or link to "See all 53 reviews on Google." Leaving 53 actual Google reviews off the page is a missed trust signal.
- **Services.tsx:113** — "Learn More" is a generic link label. It should be "Learn More About [Service Name]" for accessibility and scannability — though visually the card context helps.
- **CTASection.tsx:13** — "Ready to Fix Your Plumbing Problem?" is fine but passive. For emergency service, "Plumbing Emergency? Call Now." would outperform.

---

## Pillar 2: Visuals — 3/4

**Strengths**
- Hero background image (`water-heater.webp`) with `priority` and `fetchPriority="high"` — LCP optimized (Hero.tsx:10–11)
- Offset accent-box image treatment in IntroSection (red box behind truck photo) and ProfessionalWork (navy box behind joe-cindy.png) adds visual depth — distinctive
- Curved SVG bottom transition on hero is a nice polish touch (Hero.tsx:100–111)
- Service cards use consistent icon+title+description+CTA structure
- Hover states with `-translate-y-1` and `shadow-xl` give tactile feedback

**Issues**
- **Hero.tsx:88** — The estimate form is `hidden lg:block`. On mobile (likely 60–70% of traffic for a plumbing emergency site), the right-side form is completely absent. The only conversion path is the phone button and "Book Your Service" nav to /contact. Adding even a compact form below the headline on mobile would capture non-phone converters.
- **Pricing.tsx:7,26,45** — SVG icons use hardcoded `stroke="#E8A020"` which is a close but non-identical match to `accent-yellow: '#F59E0B'`. Visual inconsistency with the yellow checkmarks in the feature list.
- **ProfessionalWork.tsx:43** — `joe-cindy.png` (not webp) — the only non-webp image in the site. PNG at 600×800 is likely 2–5x larger than a webp equivalent for no quality gain.
- No trust badge imagery anywhere on the homepage — no BBB, no CSLB badge, no Google rating widget. Text-only trust claims are weaker than visual badges for a local trades site.
- The testimonials section uses initial-based avatar circles (JM, TP, DR) instead of any real photos or even a Google logo. Visitors can't verify these reviews link to real Google profiles.

---

## Pillar 3: Color — 3/4

**Strengths**
- Brand system is well-defined: navy-900 for authority backgrounds, `primary` (#dd1515) red for CTAs, white for content sections — clean 60/30/10 cadence
- Accent green pulsing dot in navbar is used once, appropriately (Navbar.tsx:130)
- Focus-visible ring uses `ring-primary` consistently (globals.css:80)
- Shadow system uses brand color: `shadow-brand` and `shadow-brand-lg` defined in tailwind.config.ts

**Issues**
- **Mixed gray systems:** Multiple sections use Tailwind's default `text-gray-600`, `text-gray-900`, `bg-gray-50` alongside the custom `text-text`, `text-text-light`, `text-text-dark` tokens. StatsSection.tsx, IntroSection.tsx, and ProfessionalWork.tsx all use raw `gray-*` instead of the semantic `text-*` tokens defined in the config. This creates silent color drift if the design token ever changes.
  - StatsSection.tsx:88 — `text-gray-900` (should be `text-text-dark`)
  - IntroSection.tsx:37,43 — `text-gray-600` (should be `text-text-light`)
  - ProfessionalWork.tsx:14 — `text-gray-600` (should be `text-text-light`)
- **Pricing.tsx:7,26,45** — `stroke="#E8A020"` hardcoded. The token `accent.yellow` is `#F59E0B`. These are close but not identical — replace with `className="text-accent-yellow"` and `stroke="currentColor"`.
- **Footer.tsx:82,93** — Facebook and Instagram brand color gradients use hardcoded hex values (`#1877F2`, `#E4405F`, etc.). This is acceptable for platform brand compliance but worth noting.
- The `secondary` blue (`#51acfb`) appears defined in the config but is not used visibly on the homepage at all. Either use it or remove it to avoid token sprawl.

---

## Pillar 4: Typography — 4/4

**Strengths**
- Two-font system is clean and intentional: Montserrat (headings, weight 600/700/800) + Poppins (body, weight 400/500/600) — good contrast of character styles
- `font-btn` for buttons (Inter) adds a third micro-distinction appropriate for CTAs
- Type scale in globals.css is fully responsive: h1 goes 4xl → 5xl → 6xl, h2 goes 3xl → 4xl → 5xl
- Base 16px font size enforced in globals.css:9 — accessibility compliant
- `letter-spacing: -0.02em` on headings adds professional polish
- `line-height: 1.7` on body text is excellent for readability (globals.css:55)
- `.no-orphans` utility using `text-wrap: pretty` applied to headline-heavy elements
- `prefers-reduced-motion` respected in globals.css:199

**Minor notes**
- Three sections use `text-[42px]` as an arbitrary value (IntroSection.tsx:33, StatsSection.tsx:88, ProfessionalWork.tsx:11). This sits between `text-4xl` (36px) and `text-5xl` (48px) in the config. Not a problem visually but it breaks out of the defined scale — use `text-4xl` consistently or add `4.25xl` to the config.
- `font-heading` on the `h2` inside the hero form card (Hero.tsx:90) is set to `text-xl` directly rather than inheriting from globals.css `h2` rule — intentional override but worth keeping consistent.

---

## Pillar 5: Spacing — 3/4

**Strengths**
- `.section-padding` utility (`py-16 md:py-24 lg:py-32`) is used consistently across most sections
- `.container-padding` (`px-4 sm:px-6 lg:px-8`) applied to most section wrappers
- Card padding is uniform at `p-6 md:p-8` across Services, Pricing, and Testimonials
- 4px base spacing scale with named tokens in tailwind.config.ts (`section`, `section-lg`, `container`)

**Issues**
- **Footer.tsx:60** — `py-16 md:py-24 lg:py-32` on the main footer content pushes it very deep. A footer doesn't need section-level vertical rhythm — `py-12 md:py-16` would tighten it without losing breathing room.
- **ProfessionalWork.tsx:7** — Uses `py-16 md:py-24 lg:py-32` as inline classes instead of the `.section-padding` utility, which is fine functionally but breaks the pattern.
- Arbitrary `text-[42px]` instances (3 files, noted above) break the spacing/sizing scale.
- **Hero.tsx:25** — `max-w-[1600px]` for the hero container is wider than the site's defined `max-w-container` (1280px) in tailwind.config.ts. This is intentional for full-bleed hero treatment but could cause the form column to stretch awkwardly on ultrawide screens.
- **HeroEstimateForm.tsx:48** — Form uses `space-y-2` (8px gap) between all fields. On a compact hero card, this works, but it's tight for the consent checkbox text at `text-xs`. Consider `space-y-3` for the fields and keeping `space-y-2` only within the grid.

---

## Pillar 6: Experience Design — 2/4

**Strengths**
- MobileDrawer has `aria-modal`, `aria-label`, Escape key handler, body scroll lock — solid accessibility (MobileDrawer.tsx:16–33)
- Button component has `isLoading` state with spinner and disabled handling (Button.tsx:47–53)
- Form has success and error states with clear messaging (HeroEstimateForm.tsx:116–127)
- Zod schema validation on the form (HeroEstimateForm.tsx:21)
- Touch targets enforced with `.touch-target` (min 44×44px) on all interactive elements
- Sticky navbar with `z-50` on dark navy background — visible at all scroll positions
- `focus-visible` ring defined for keyboard navigation
- `prefers-reduced-motion` media query in globals.css

**Critical Gaps**
- **No sticky mobile phone CTA.** This is the #1 conversion issue for a local plumbing emergency site. On mobile, the only always-visible path to call is the navbar phone number. A fixed bottom bar on mobile (`fixed bottom-0 left-0 w-full bg-primary`) with "Call Now — (530) 704-6989" would directly increase inbound calls. This is the highest ROI fix on the site.
- **Hero form is desktop-only (Hero.tsx:88).** Mobile visitors see no form in the hero — just two buttons. The "Book Your Service" button goes to /contact, adding a page load and navigation step before a visitor can submit a form. On mobile, form abandonment increases with each friction point. Minimum fix: show a collapsed "Get a Free Estimate" accordion in the hero on mobile.
- **StatsSection.tsx:149** — "30 Years Exp." — Since 1998 is 28 years, not 30. If this is being animated from 0 to 30, it reads as a specific claim. It should match "since 1998" copy in Footer.tsx:73.
- **No visible scroll-to-form anchor.** The hero "Book Your Service" button links to /contact (full page nav) rather than scrolling to a contact section on the homepage. Many users won't convert if they have to leave the page they landed on.
- **Testimonials section has no Google attribution.** With 53 real Google reviews available (per schema markup in SchemaMarkup.tsx:63), showing a Google logo + "53 reviews on Google" link is a straightforward trust upgrade. Currently visitors have no way to verify the testimonials are real.
- **ProfessionalWork.tsx image is PNG, not WebP** (joe-cindy.png line 43). On slow mobile connections this could be a meaningful LCP penalty for users who scroll quickly.
- **No contact page form visible inline** on the homepage outside the hero (desktop only). Users who don't call must navigate to /contact — there's no fallback form lower on the page.

---

## Top 10 Priority Fixes

1. **Add sticky mobile phone CTA bar** — `components/layout/` new component, `fixed bottom-0 lg:hidden` — highest-impact conversion fix for emergency plumbing traffic; every mobile visitor has a one-tap call path
2. **Show estimate form on mobile** — `Hero.tsx:88`, change `hidden lg:block` to block on mobile or add a collapsible trigger — captures non-phone converters on mobile (likely 60%+ of traffic)
3. **Fix StatsSection "5 Min. Response" label** — `StatsSection.tsx:152`, clarify as "5 min. avg. answer time" or replace with "60 min." on-site claim to match FAQ — avoids credibility damage from an implausible stat
4. **Add Google review badge/link to Testimonials** — `Testimonials.tsx`, add "53 Reviews on Google" with star count and link — leverages existing social proof that's being left off the page
5. **Convert joe-cindy.png to WebP** — `ProfessionalWork.tsx:43` and the `/images/` directory — reduces page weight, improves LCP on mobile; 5-minute fix with `squoosh` or `cwebp`
6. **Display CSLB license number** — Add to Footer contact column and/or hero trust bar — direct credibility signal for California homeowners; text-only "licensed & insured" is weaker than showing the actual number
7. **Replace hardcoded SVG stroke colors in Pricing** — `Pricing.tsx:7,26,45`, change `stroke="#E8A020"` to `stroke="currentColor"` with `className="text-accent-yellow"` — eliminates color drift and one-off hex in production code
8. **Standardize gray tokens in StatsSection, IntroSection, ProfessionalWork** — Replace `text-gray-600/900` with `text-text-light/dark` throughout these 3 files — prevents silent color drift if the design token palette changes
9. **Fix "30 Years Exp." stat to match "since 1998" copy** — `StatsSection.tsx:149`, change `target={30}` to `target={28}` or update footer copy — prevents the internal copy conflict from surfacing to attentive visitors
10. **Add inline contact form section on homepage** — a basic name/phone/message form section above the footer — captures leads from users who scroll the full page but don't call and don't want to navigate away

---

## Quick Wins (under 30 min each)

- Convert `joe-cindy.png` to WebP — drag-drop on squoosh.app, update image path in ProfessionalWork.tsx:43
- Fix "30 Years Exp." → 28 years in StatsSection.tsx:149
- Update stat label: StatsSection.tsx:152 — `label="5 min. avg. answer time"` (add a footnote or tooltip)
- Update stat label: StatsSection.tsx:150 — `label="Water Heaters Serviced"`
- Replace `stroke="#E8A020"` in all 3 Pricing.tsx icons with `stroke="currentColor"` + `className="text-accent-yellow"`
- Swap `text-gray-600` → `text-text-light` and `text-gray-900` → `text-text-dark` in IntroSection.tsx, StatsSection.tsx, ProfessionalWork.tsx (find-replace, ~10 instances total)
- Replace `text-[42px]` with `text-4xl` in all 3 section headings for scale consistency
- Add Google review count to Testimonials section header: append `— 53 Reviews on Google ★★★★★` with a link to the GMB listing

## Bigger Lifts (1–2 hours each)

- **Sticky mobile phone CTA bar:** New `components/layout/MobileCTA.tsx` — fixed bottom bar, lg:hidden, primary red background, phone icon + number, possibly also a "Book" button linking /contact. Add to layout.tsx alongside Navbar.
- **Mobile hero form:** Refactor Hero.tsx to show a collapsed/expandable form on mobile. Could be as simple as a "Get a Free Estimate" button that reveals the form inline rather than navigating to /contact.
- **Google Reviews integration:** Add a Testimonials variant that shows real Google review data (static JSON from API or manually updated) with Google logo, star rating, and "See all reviews" link — requires pulling and formatting 3–5 real reviews from the GMB listing.
- **Add CSLB license number + trust badge strip:** A narrow strip below the hero (or within it) showing CSLB #, BBB logo (if applicable), and "Licensed • Bonded • Insured" with the actual license number — proven conversion element for licensed trades.

---

## Files Audited

- `/app/page.tsx`
- `/app/layout.tsx`
- `/app/globals.css`
- `/tailwind.config.ts`
- `/app/services/emergency/page.tsx`
- `/components/sections/Hero.tsx`
- `/components/sections/IntroSection.tsx`
- `/components/sections/Services.tsx`
- `/components/sections/Pricing.tsx`
- `/components/sections/ProfessionalWork.tsx`
- `/components/sections/StatsSection.tsx`
- `/components/sections/Testimonials.tsx`
- `/components/sections/CTASection.tsx`
- `/components/layout/Navbar.tsx`
- `/components/layout/MobileDrawer.tsx`
- `/components/layout/Footer.tsx`
- `/components/forms/HeroEstimateForm.tsx`
- `/components/ui/Button.tsx`
- `/components/ui/Input.tsx`
- `/components/ui/Textarea.tsx`
- `/components/ui/Card.tsx`
