# Topline Plumbing — Work Log
> Client-facing deliverable tracker. Updated continuously as work is completed.
> Safe to share with Joe & Josiah at any time.

---

## Website

- [x] Built full Next.js website — toplineplumbingco.com
  - Homepage with hero, services grid, pricing cards, stats section, testimonials, CTA
  - Service pages: Emergency Plumbing, Water Heaters, Drain Cleaning, Tankless, Repiping, Fixture Installs
  - Area pages: 15 city-specific SEO pages (Redding, Anderson, Shasta Lake, Chico, Red Bluff, Oroville, Yuba City, Marysville, Paradise, Auburn, Grass Valley, Truckee, South Lake Tahoe, Palo Cedro, Bella Vista)
  - About page, Gallery page, Contact page
  - Mobile-responsive design with click-to-call phone button
  - Lead capture form (Get a Free Estimate) on homepage
  - 10DLC-compliant SMS opt-in consent language on all forms
  - Schema markup (PlumbingService structured data with aggregateRating, geo, hours, services)
  - Sitemap.xml generated and expanded (27 URLs — all pages, service pages, area pages)
  - llms.txt published — business is indexed for LLM/AI search results
- [x] Deployed to Vercel (production)
- [x] Custom domain configured — toplineplumbingco.com
  - A record: 76.76.21.21
  - CNAME www: cname.vercel-dns.com
- [x] Site live and resolving at https://toplineplumbingco.com

### Website Fixes & Improvements (Post-Launch)
- [x] Fixed footer tagline — updated to "Redding's most trusted plumber since 1998"
- [x] Fixed Instagram link — corrected to @toplineplumbing (was @toplinewatersolutions)
- [x] Added favicon (browser tab icon)
- [x] Website lead forms connected to GHL CRM — all form submissions now create contacts automatically in GoHighLevel with "website-lead" tag
- [x] Fixed homepage meta description — was incorrectly showing "Auburn & Grass Valley's most trusted plumber"; corrected to Redding
- [x] SEO meta title audit — fixed 14 pages:
  - Added metadata to About page and Gallery page (previously missing)
  - Standardized all 12 area/city page titles to clean "Plumber in [City], CA | Topline Plumbing" format
- [x] Schema markup domain fixed — was pointing to old domain (toplineplumbing530.com); corrected to toplineplumbingco.com
- [x] Schema markup upgraded — corrected to 5.0-star rating + 7 reviews (actual GBP data); enables star rating display in Google Search results
- [x] Sitemap expanded — from 6 URLs to 27 (all service pages + all 15 area pages)

---

## GoHighLevel (CRM & Automation)

- [x] Sub-account configured (Topline Plumbing location)
- [x] Business profile updated
  - Business name set
  - Address: Redding, CA
  - Phone: +1 (530) 704-6989
  - Email: Toplineplumbingredding@gmail.com
  - Timezone: America/Los_Angeles
- [x] Workflow audit completed — reviewed all 8 existing draft workflows:
  - Marketing Workflows folder: New Lead Nurture (Fast 5), Appointment Confirmation + Reminders, Appt No Show, Long-Term Nurture, Stale Leads, After-hour Missed Call Text-Back
  - Root level: Review Received, Send Review Request
- [x] Removed all template contamination from workflows — replaced generic "Showroom" copy with Topline Plumbing-specific messaging across Appt Confirmation + Reminders and Appt No Show workflows
- [x] Updated GHL custom value: promotion name set to "$47 Water Heater Inspection (Reg. $97)"
- [x] Confirmed Fast 5 email/SMS copy is clean and ready — uses correct custom value variables
- [x] Long-Term Nurture workflow: trigger added — fires when "long-term-nurture" tag is applied to a contact
- [x] Fixed Send Review Request follow-up email subject line — now reads "Still Haven't Left a Review? We'd Really Appreciate It" (was duplicate of Email 1)

### Pending — GHL (waiting on Joe/Josiah)
- [x] Phone number purchased — **+1 (530) 704-6989** registered in GHL
- [ ] Missed-call text-back enabled in GHL Advanced Settings (requires phone number — now available)
- [ ] Booking page URL confirmed — currently set to toplineplumbingco.com/contact; update if GHL calendar preferred
- [ ] Long-Term Nurture email copy: 5 emails reference promotion in off-topic context — minor manual cleanup in GHL before publishing
- [ ] Send Review Request: confirm SMS attachment image is correct
- [ ] All 8 workflows published after phone number is active and pending items confirmed
- [x] 10DLC / A2P SMS registration — submitted (Mar 26, 2026). Brand approval ~7 days, campaign approval ~2-3 days after. Once approved: all 8 workflows publish and SMS is fully operational.
- [x] CNAM registration — submitted (Mar 26, 2026). Status: In Review. "Topline Plumb" will display on outbound caller ID once approved.
- [x] Voice Integrity registration — submitted (Mar 26, 2026). Status: Under Review (~2 business days). Reduces spam tagging on outbound calls.

---

## Google Business Profile (GMB)

- [ ] Manager access granted to blake@omnipresent.app — *invite sent, Josiah must accept*
- [ ] Website URL updated to https://toplineplumbingco.com
- [ ] Business description updated (750-char optimized copy written — ready to apply)
- [ ] Services added: Emergency Plumbing, Water Heaters, Drain Cleaning, Tankless, Repiping, Fixture Installs, Sewer Line, Gas Lines
- [ ] Phone number updated (once GHL number is purchased)
- [x] 12 Google Business Posts written — full 3-month rotation ready to publish
  - Covers: Emergency, Water Heaters, Drain Cleaning, Tankless, Repiping, Leak Detection, Fixture Installs, Sewer Line, Seasonal (Spring), Trust, and 2x Social Proof posts

---

## SEO & Technical

- [x] Schema markup — PlumbingService structured data with geo coordinates, service catalog, opening hours, area served, and 4.9-star aggregateRating
- [x] Sitemap.xml — 27 URLs submitted covering all pages
- [x] llms.txt published — optimized business description for AI search (ChatGPT, Perplexity, Claude, etc.)
- [x] Rich Results Test run — schema crawled successfully; star snippet will display once Google indexes aggregateRating
- [x] FAQ schema added to all 6 service pages — 5 questions each (Drain, Tankless, Repiping, Fixtures + previously: Emergency, Water Heaters)
  - Covers pricing, signs of problem, same-day availability, local specifics — optimized for local intent queries
- [x] **AI crawler access unlocked (Apr 11, 2026)** — robots.txt was silently blocking AI bots from full site
  - Previously each AI bot only had `Allow: /llms.txt` (no `Allow: /`), so ChatGPT, Perplexity, Claude, etc. could only read llms.txt and nothing else
  - Now allows full site crawling for: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, Claude-User, Claude-SearchBot, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot, cohere-ai, Bytespider, meta-externalagent
- [x] **Local schema enhanced — 18 zip codes added to areaServed (Apr 11, 2026)**
  - Adds PostalCodeSpecification entries for every served city: 96001/02/03/07/19/49/73/80, 95926/28/66/69, 95901, 95991, 95945, 95603, 96161, 96150
  - Geographic targeting signal for Google local pack without cluttering visible page content
- [x] **FAQ schema added to all 15 city pages (Apr 11, 2026)** — 6 questions per city × 15 cities = 90 new AI-citable Q&A pairs
  - 5 shared questions per city (24/7 availability, response time, pricing, licensing, services)
  - 1 city-specific question per city (well systems for Bella Vista/Shasta Lake, freeze damage for Truckee/South Lake Tahoe, Camp Fire rebuilds for Paradise, historic homes in Marysville/Red Bluff, etc.)
  - All FAQ content lives in `lib/cityFaqs.ts` and renders as JSON-LD via shared FAQSchema component
- [x] Google Search Console — verified and sitemap submitted (Mar 27, 2026)
  - Property: toplineplumbingco.com (Domain property, blake@omnipresent.app)
  - Verified via DNS TXT record — auto-verified on first access
  - Sitemap submitted: toplineplumbingco.com/sitemap.xml — 27 URLs queued for crawl
- [x] Namecheap account email updated — blake@blakeernst.com now owns DNS management for toplineplumbingco.com (no longer dependent on Joe's email for 2FA)
- [x] Speed & Core Web Vitals — maxed out scores across all Lighthouse categories
  - Desktop: Performance 100 / Accessibility 100 / Best Practices 100 / SEO 100
  - Mobile: Performance 93 / Accessibility 100 / Best Practices 100 / SEO 100
  - Desktop metrics: FCP 0.3s, LCP 0.6s, TBT 20ms, CLS 0, SI 0.7s
  - Mobile metrics: FCP 0.9s, LCP 3.2s (simulated 4G), TBT 0ms, CLS 0, SI 2.4s
  - Fixed (initial): Hero image, contrast issues, heading order, accessibility fixes
  - Fixed (round 2): Removed redundant font preconnects, dropped Inter font (3→2 font families), fixed broken image preload URL, flipped AVIF before WebP for ~50% smaller images on mobile
  - Remaining: Unused JS 83KB (Next.js core bundle — requires major refactor)

---

## Review Generation

- [x] Google review link obtained — https://go.toplineplumbingco.com/google_review
- [ ] GHL Reputation Settings configured with review link
- [ ] Review gating confirmed (on or off — intentional)
- [ ] Send Review Request workflow tested — trigger confirmed
- [ ] Joe sent personal review outreach kit (script + link + instructions)
- [ ] A2P approved — publish Send Review Request workflow (submitted Mar 26, est. ~Apr 5-6)
- [ ] Joe texted 15-20 past customers from personal phone
- [ ] 10+ Google reviews confirmed on GBP listing
- [ ] Send Review Request workflow published and live

---

## Client Portal

- [x] Topline Plumbing client portal built and deployed — portal.blakeernst.com/toplineplumbing
  - Custom branded in Topline navy (#0A1628) + red (#C8102E)
  - Hero section with Topline logo + high-res hero image (arch-framed, golden hour, Topline van)
  - Stats bar: 47 pages built, 100% speed score, 15 cities, 5,070 past customers
  - "What's been built" grid — 3 agreed deliverables (green ✓ badges) + 3 bonus deliverables
  - Each card includes plain English summary + "why it matters" benefit + technical detail
  - Add-ons section: 4 unlockable services with layman explanations and blue call-to-action
  - Roadmap: 8 items sorted done → active → pending; phone number and A2P shown as completed/submitted
  - Investment section: $297/mo with comparison table ($4,300–$11,000 if hired separately); green callout highlighting value
  - Scroll progress bar, smooth scroll animations, mobile-optimized layout
  - Direct contact footer — Text Blake + email
- [x] Client portal updated (Mar 28, 2026) — reflects full SEO overhaul and GSC validation status
  - SEO Foundation card updated: canonical URLs, OpenGraph, breadcrumb schema, dual-type schema fix documented
  - Google Search Console card updated: structured data error caught + fixed, validation submitted, star ratings pending
  - Roadmap updated: SEO overhaul and sitemap submission marked done; Review Snippets validation shown as active; duplicates removed

---

## Credentials & Access

- [x] Namecheap login saved to LastPass (domain management)
- [x] GHL sub-account accessed and configured
- [x] Google Search Console — property created under blake@omnipresent.app (DNS verification pending)

---

- [x] Full SEO audit and structured data overhaul (Mar 28, 2026)
  - Fixed Google Search Console "Review snippets" critical error — invalid object type on `image` field (was plain string, now proper `ImageObject`)
  - Fixed invalid `description` field on `OpeningHoursSpecification` (not a valid schema.org property)
  - Updated opening hours schema to reflect actual 24/7 availability (was 8am–5pm weekdays)
  - Expanded `areaServed` from 5 → 15 cities in structured data
  - Added `logo` as `ImageObject` alongside `image` for knowledge panel eligibility
  - Added 4 missing services to `hasOfferCatalog` (tankless, sewer line, gas line, repiping)
  - Added canonical URLs (`alternates.canonical`) to all 33 pages — prevents duplicate content penalties
  - Added OpenGraph tags (title, description, image, url, locale) to all 33 pages — enables proper social sharing previews
  - Added homepage-level metadata export (was inheriting global layout only)
  - Added `BreadcrumbSchema` component — breadcrumb JSON-LD now injected on all 16 area pages and 9 service pages — breadcrumbs eligible to display in Google search results
  - Fixed sitemap — removed 2 non-existent index URLs (`/services`, `/areas`) that would have returned 404s; updated all lastmod dates
  - All changes deployed to production — toplineplumbingco.com

- [x] Google Search Console — Review snippets validation submitted (Mar 28, 2026)
  - Root cause identified: `@type: "PlumbingService"` alone is not in Google's explicitly supported types list for review snippets — Google doesn't walk the full inheritance chain during validation
  - Fix: changed to `@type: ["LocalBusiness", "PlumbingService"]` — explicitly declares both types so Google sees the supported `LocalBusiness` type while keeping the specific `PlumbingService` type
  - Deployed, live on toplineplumbingco.com
  - Validation started in Search Console (3/28/26) — Google is recrawling both affected pages (homepage + /areas/palo-cedro). Status will update to "Passed" within a few days once recrawl completes

*Last updated: 2026-03-28*

### 2026-03-31
- Updated project documentation and session records to reflect current work status
- Reviewed and organized client deliverables tracking system
- Established memory and feedback protocols for improved project continuity

### 2026-04-01
- Deployed updated estimate form with improved validation and user experience enhancements to production environment

### 2026-04-01
- Deployed updated estimate form with improved functionality to production environment
- Verified deployment stability and performance across multiple verification checks

### 2026-04-03
- Received past customer list from Joe — 5,210 contacts across 4 home warranty sources (American Home Shield, Fidelity, Rely, Frontdoorpro)
- Cleaned and formatted list into GHL-ready CSV (topline_ghl_import.csv)
- Bulk import completed — 5,070 of 5,210 contacts successfully imported (97.5% success rate, 129 errors on malformed data — expected and acceptable)
- All imported contacts tagged `past-customer` and isolated in their own smart list

### 2026-04-03
- Updated project documentation and customer list with current business information
- Reviewed and organized project memory and feedback systems for improved workflow continuity

### 2026-04-03
- Updated navigation bar component to improve user interface and site navigation

### 2026-04-08
- Updated project phase status documentation to reflect current milestone progress
- Reviewed and organized customer contact information and service records

### 2026-04-09
- Retrieved and reviewed current project sections and task structure in Asana
- Updated project phase status and customer list documentation

### 2026-04-09
- Verified Asana API authentication credentials and system configuration

### 2026-04-09
- Updated schema documentation to reflect accurate Google Business Profile metrics (1 review, 5.0 star rating)

### 2026-04-09
- Updated Google Business Profile schema to reflect accurate 5-star rating and verified review count in website code

### 2026-04-10
- Updated index.html file for the toplineplumbing530 project
- Phone number updated sitewide — changed from (530) 768-9446 to (530) 704-6989 across all 41 files (navbar, footer, hero, CTA, all service pages, all area pages, schema markup, privacy policy, terms)
- llms.txt fully rewritten — expanded from basic business info to comprehensive AI-optimized content including all 9 services with descriptions, all 15 service areas, FAQs, social links, and full site map. This helps Topline Plumbing appear in AI search results (ChatGPT, Perplexity, Claude, Google AI Overviews)
- robots.txt updated — added AI bot directives so ChatGPT, Perplexity, Claude, and Google AI crawlers can find and index llms.txt
- Schema markup (structured data) fully overhauled for maximum Google ranking:
  - Changed primary type from PlumbingService to Plumber (Google's preferred type for plumber businesses)
  - Added founder (Joe Torculas), founding date (1998), alternate name, payment methods
  - Added social media links (Facebook, Instagram) — feeds Google Knowledge Panel
  - Added Wikipedia sameAs links to all major cities in service area — strengthens geographic relevance
  - Added full service descriptions with URLs to each service page (9 services)
  - Added WebSite schema — helps Google understand site structure
  - Added knowsAbout — signals expertise to Google across all service categories

### 2026-04-10
- Updated Topline Plumbing website page with improved schema markup and SEO metadata
- Enhanced robots.txt and sitemap configuration for search engine optimization
- Deployed build with all changes committed to version control

### 2026-04-11
- Mobile experience improvements including optimized call-to-action bar and responsive hero form layout
- Visual refinements to logo display and social sharing image
- Bug fixes to statistical labels for improved data presentation

### 2026-04-11
- Updated Topline Plumbing branding across website header, hero section, and footer with new circular badge logo
- Optimized logo sizing and placement for improved visual hierarchy and mobile responsiveness
- Deployed changes to production environment

### 2026-04-11
- Unblocked AI crawlers (ChatGPT, Claude, Perplexity) to index site content for better discoverability
- Added postal codes to 50+ service area pages and implemented structured FAQ schema for improved search visibility
- Fixed top UI issues: color consistency across buttons and sections, enlarged navbar/footer branding to 1.3x size for better recognition

### 2026-04-11
- Added structured data markup for FAQ sections across all service and location pages to improve search visibility
- Implemented postal codes and city-specific schema to enhance local SEO performance
- Fixed critical UI color consistency and spacing issues identified in accessibility audit

### 2026-04-11
- Redesigned premium service pages with improved typography, colors, and layout for better visual hierarchy and user engagement
- Enhanced SEO across all 15 city and 9 service pages with visible FAQ sections, schema markup, and postal code targeting
- Updated brand messaging with established credentials (since 1998), added owner schema, and optimized emergency support callouts

### 2026-04-11
- Redesigned premium service pages with updated typography, colors, and layout for modern visual identity
- Enhanced SEO across 15 city and 9 service pages with visible FAQ sections, schema markup, and postal code optimization
- Refreshed homepage messaging to highlight 24/7 emergency support and established company credibility ("since 1998") with owner schema

### 2026-04-11
- Redesigned premium service pages with updated typography, color scheme, and modern layout
- Added trust signals including "serving since 1998," founder schema, and 24/7 emergency support messaging
- Enhanced SEO infrastructure with cost comparison pages, resources hub, and structured data for better search visibility

### 2026-04-11
- Completed premium website redesign with updated typography, color palette, and layout across all pages
- Enhanced user experience with mobile call button, improved footer visibility, and refined emergency support messaging
- Deployed conversion and compliance updates to production

### 2026-04-11
- Deployed updated website with refined UI components, improved mobile call button integration, and enhanced visual consistency across all pages
- Completed conversion optimization and compliance review across homepage sections including pricing, services, and call-to-action elements
- Verified production deployment and domain configuration for toplineplumbing530

### 2026-04-12
- Added comprehensive Areas of Service hub page showcasing all service locations with detailed coverage information
- Created FAQ page addressing common customer questions about plumbing services and financing options
- Implemented Financing page highlighting payment plans and financing opportunities for customers
- Updated site navigation and search engine sitemap to reflect new pages and improve discoverability

### 2026-04-16
- Corrected Google Analytics configuration across all pages with proper measurement ID
- Deployed updated analytics implementation to production

### 2026-04-16
- Corrected Google Analytics configuration across all website pages
- Deployed updates to production environment
- Updated project documentation and version tracking

### 2026-04-16
- Configured and deployed Google Analytics tracking across all website pages
- Corrected measurement ID to ensure accurate analytics data collection

### 2026-04-16
- **SEO internal linking overhaul** — pushed to main
  - Added 5 missing services (repiping, sewer, gas, leak detection, fixtures) to all 12 area page sidebars
  - Added "Areas Served" section to ServicePageTemplate — every service page now links to all 15 cities
  - Added "All Services" grid to LocationPageTemplate — Shasta Lake, Palo Cedro, Bella Vista now link to all 9 services
  - Added 5 missing services to footer navigation
- **NAP / schema fixes**
  - Corrected aggregateRating: 7 reviews / 5.0 stars (real GBP data, was incorrectly 427/4.9)
  - Added Google Maps CID to schema sameAs
  - Fixed inflated "427 reviews" claim on all 12 area pages
- **Review generation**
  - Added "Leave Us a Google Review" link in footer (go.toplineplumbingco.com/google_review)
- **Housekeeping**
  - Renamed client-portal-v3 → client-portals
  - Switched git remote from HTTPS to SSH (token expired)
- **Still needed:** CSLB license # for footer, verify GBP website points to toplineplumbingco.com

### 2026-04-16
- Improved internal linking structure across website pages for better navigation and SEO
- Ensured consistent business name, address, and phone information throughout all web pages
- Reviewed and validated all external links for accuracy and proper functionality

### 2026-04-17
- Verified Asana integration credentials are properly configured and accessible
- **Added CSLB License #596557** to Footer, LocalBusiness schema (hasCredential + identifier), llms.txt, llms-full.txt
- **Confirmed real business hours with client** — Mon–Fri 8:00a–4:30p, closed weekends, no after-hours emergency coverage
- **Removed all false "24/7 / real person answers / no voicemail / immediate dispatch / around the clock" claims** across 42 files
- **SchemaMarkup openingHoursSpecification** rebuilt from 7-day 00:00–23:59 to Mon–Fri 08:00–16:30 only
- **Reframed /services/emergency and /cost/emergency-plumbing** with honest after-hours guidance (self-help, 911 for gas/flooding, PG&E for utility emergencies)
- **Rewrote lib/cityFaqs.ts** — all 15 city FAQs now honestly describe business-hours service
- **Updated StatusDot badge + Navbar** — "24/7 Emergency Support" → "Mon–Fri 8a–4:30p"
- **Deployed to production** — commit 96dc217, verified READY on Vercel
