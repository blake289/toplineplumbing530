# Service×City Combo Page Build Spec — Topline Plumbing

You are building high-converting, schema-rich local SEO landing pages that rank on Google
AND get cited in AI search (AI Overviews / ChatGPT / Perplexity). Follow this spec EXACTLY.

## The 12 pages (flat slugs, matching the proven `/water-heater-replacement-redding`)
- `app/emergency-plumber-{city}/page.tsx`  → H1 "Emergency Plumber in {City}, CA"
- `app/drain-cleaning-{city}/page.tsx`      → H1 "Drain Cleaning in {City}, CA"
Cities: `redding, anderson, shasta-lake, palo-cedro, bella-vista, red-bluff`

## REFERENCE FILES — read before writing
- **Structure template (clone its sections, schema pattern, Tailwind classes):**
  `app/water-heater-replacement-redding/page.tsx`
- **Emergency source content + HowTo schema + honest hours framing:** `app/services/emergency/page.tsx`
- **Drain source content:** `app/services/drain-cleaning/page.tsx`
- **City data (intro, localRealities, commonCalls):** `lib/cityProfiles.ts` → `getCityProfile('{city}')`
- **City response time + zip/unique facts:** `lib/cityFaqs.ts` → `CITY_META['{city}']`
- **Components:** `@/components/layout/BreadcrumbSchema`, `@/components/layout/FAQSchema`,
  `@/components/layout/FAQSection` (props: faqs[], title?, subtitle?, background?: 'white'|'gray')

## VERIFIED FACTS — use these verbatim, NEVER invent alternatives
- Phone: **(530) 704-6989** (tel link: `tel:5307046989`)
- License: **CSLB #596557**, licensed/bonded/insured CA plumbing contractor
- **Serving the Redding area since 1998**, family owned & operated
- Trust-strip numbers (reuse exactly): **3,000+ Jobs Since 1998**, **5.0★ Perfect Google Rating**, **CSLB License #596557**, **Family Owned & Operated**
- Google review link: `https://g.page/r/CTUWBxm42-YEEAI/review`
- Hours: **Mon–Fri 8:00a–4:30p**
- Per-city dispatch time: pull `responseTime` from `CITY_META` for that city (e.g. Redding "30–60 minutes"). Do not invent.

## HONESTY RULES — violating these burns the client. NON-NEGOTIABLE.
1. **Topline is NOT 24/7.** Emergency framing = "same-day emergency response **during business hours** (Mon–Fri 8a–4:30p)." After-hours: "text (530) 704-6989 and we respond first thing the next business day; for a safety issue (gas leak, major flood) call 911 and shut off your main water valve." NEVER claim 24/7, round-the-clock, or overnight service.
2. **No invented prices.** Use "upfront quote before any work starts / free estimate with any service / no surprise charges." No dollar figures, no hourly rates.
3. **No invented review counts.** Say "5.0 perfect rating on Google" only (no count). Link the review URL.
4. **No invented testimonials with fake names** beyond the established style. If you include a quote, keep it generic/unattributed OR omit — do not fabricate a named customer + city.
5. Everything city-specific must come from `cityProfiles.ts` / `cityFaqs.ts`. Do not invent neighborhoods, water districts, or local facts.

## REQUIRED PAGE STRUCTURE (clone the water-heater combo page section-by-section)
1. `BreadcrumbSchema` (Home → {Service} {City})
2. `FAQSchema` with the page's FAQs
3. Inline `<script type="application/ld+json">` **Service** schema: `@id` `#service`, `serviceType`, `description` (mention city + CSLB #596557 + since 1998), `provider: {'@id':'https://toplineplumbingco.com/#business'}`, `areaServed` = the city (City type) + its county (AdministrativeArea), `hoursAvailable` Mon–Fri 08:00–16:30, `hasOfferCatalog` of the relevant sub-services, `audience` Homeowners.
4. Inline `<script>` **WebPage** schema (`@id` `#webpage`, url, name, description, isPartOf #website, about #service).
5. **For emergency pages only:** also include the `HowTo` schema from `app/services/emergency/page.tsx` (what to do before the plumber arrives).
6. **Hero** (navy-900 bg, NO `<Image>` to avoid broken refs — text hero like the section in the template): eyebrow line, H1 (exact-match keyword), a 1–2 sentence **AEO direct-answer** paragraph (see below), the availability pill, Call + Get-a-Quote buttons, fine-print line (hours · CSLB · response time).
7. **Trust strip** (the 4 stats, verbatim).
8. **2–3 service-specific sections** adapted from the source service page (emergency: response promise + what-to-do-before-we-arrive for burst pipe & sewage; drain: power auger / camera inspection / same-day, septic-safe note where the city profile mentions septic).
9. **Local context section** — headline like "Why {City} Homes Call Topline for {Service}", 2–3 paragraphs weaving the city's `intro` + `localRealities` + `commonCalls` into THIS service. This is the anti-doorway differentiator — must be genuinely city-specific.
10. **Why Topline** grid (6 cards, adapt from template).
11. **Social proof** (5.0 stars, review link). No fake named testimonial.
12. **Service-area links** grid linking to the 6 core `/areas/{city}` pages.
13. `FAQSection` (visible) + matching `FAQSchema` — **6–8 FAQs**, unique per page: adapt the source service FAQs, localize to the city, include cost ("upfront quote"), hours/24-7-honesty, response time (city-specific), licensing, and 1 city-specific Q (e.g. septic for Palo Cedro, vacation rentals for Shasta Lake, historic cast-iron for Red Bluff).
14. **Final CTA** (navy, phone + quote, fine-print hours/CSLB).

## AEO (AI search) requirements
- The hero's opening paragraph must be a **direct answer**: "Topline Plumbing is a licensed ({CSLB #596557}) {emergency plumber / drain cleaning service} serving {City}, CA. We offer same-day service during business hours (Mon–Fri 8a–4:30p) with upfront pricing. Call (530) 704-6989." — one clean extractable block.
- FAQs phrased as the exact questions people ask ("How fast can a plumber get to {City}?", "How much does {service} cost in {City}, CA?"). Answers lead with the answer, then detail.
- Keep answers factual and self-contained (AI engines lift them verbatim).

## INTERNAL LINKING (every page must include)
- Link to parent service page (`/services/emergency` or `/services/drain-cleaning`).
- Link to the parent city page (`/areas/{city}`).
- Link to the **sibling combo** (the other service in the same city, e.g. emergency-plumber-redding ↔ drain-cleaning-redding).
- Link to **2 sibling-city combos of the same service** (e.g. emergency-plumber-redding links to emergency-plumber-anderson + emergency-plumber-shasta-lake).
- The service-area grid (#12) links to the 6 `/areas/{city}` pages.

## STYLE
- Match the template's Tailwind tokens exactly: `bg-navy-900`, `text-primary`, `text-primary-light`, `bg-primary`, `hover:bg-primary-dark`, `font-heading`, `max-w-7xl mx-auto px-6 md:px-12 lg:px-20`.
- 1,200–1,800 words of real content. Unique title, meta description, canonical per page.
- Component name PascalCase, e.g. `EmergencyPlumberReddingPage`.
- No images required. If you want one hero/section image, the only safe existing files are
  `/images/truck.webp`, `/images/team-work.png`, `/images/water-heater.webp` — using any other path will 404.

## DONE = the 2 files written and self-consistent. Do NOT edit shared files (Navbar, Footer, sitemap, llms.txt) — the orchestrator handles linking-in afterward.
