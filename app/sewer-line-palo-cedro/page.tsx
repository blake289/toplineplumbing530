import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/sewer-line-palo-cedro#service',
  name: 'Sewer & Septic Line Repair in Palo Cedro, CA',
  serviceType: 'Sewer Line Repair',
  description:
    'Sewer and septic line repair, replacement, and camera inspection in Palo Cedro, CA. Septic-safe drain handling, root removal, spot repairs, and full line replacement for large-lot homes, horse properties, and ranches on private wells and septic. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/sewer-line-palo-cedro',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Palo Cedro', sameAs: 'https://en.wikipedia.org/wiki/Palo_Cedro,_California' },
    { '@type': 'AdministrativeArea', name: 'Shasta County, CA' },
  ],
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sewer & Septic Line Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer & Septic Camera Inspection',
          serviceType: 'Sewer Camera Inspection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Septic-Safe Line Repair',
          serviceType: 'Sewer Line Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Waste Line Replacement',
          serviceType: 'Sewer Line Replacement',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Root Intrusion Removal',
          serviceType: 'Sewer Root Removal',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Septic-to-House Line Diagnosis',
          serviceType: 'Sewer Line Diagnosis',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/sewer-line-palo-cedro#webpage',
  url: 'https://toplineplumbingco.com/sewer-line-palo-cedro',
  name: 'Sewer Line Repair Palo Cedro, CA | Topline Plumbing',
  description:
    'Sewer and septic line repair in Palo Cedro, CA. Camera inspection, septic-safe clearing, root removal, and line replacement for rural homes. Licensed since 1998. Call (530) 704-6989.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/sewer-line-palo-cedro#service' },
};

export const metadata: Metadata = {
  title: 'Sewer Line Repair Palo Cedro, CA | Topline Plumbing',
  description:
    'Sewer and septic line repair in Palo Cedro, CA. Camera inspection, septic-safe clearing, root removal, and line replacement for rural homes. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/sewer-line-palo-cedro',
  },
  openGraph: {
    title: 'Sewer Line Repair Palo Cedro, CA | Topline Plumbing',
    description:
      "Palo Cedro's sewer and septic line specialists. Camera inspection, septic-safe clearing, root removal, and line replacement for rural and horse-property homes — licensed since 1998.",
    url: 'https://toplineplumbingco.com/sewer-line-palo-cedro',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Sewer & Septic Line Repair in Palo Cedro, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const sewerFAQs = [
  {
    question: 'How fast can a plumber get to Palo Cedro for a sewer problem?',
    answer:
      "During business hours (Mon–Fri 8:00a–4:30p), we typically reach Palo Cedro the same day. Palo Cedro is roughly 15 minutes east of Redding on Highway 44, so we cover it daily. For waste-line work that needs a camera inspection and quote, we usually offer same-day or next-business-day appointments. Call (530) 704-6989 for current availability.",
  },
  {
    question: 'Most Palo Cedro homes are on septic — do you handle that?',
    answer:
      "Yes, and it's a big part of what we do out here. Palo Cedro is unincorporated, so many properties run on private septic rather than a city sewer main. We camera the line from the house to the septic tank, diagnose backups and slow drains, and use mechanical augering instead of caustic chemicals that can damage a septic system. We handle the line and the house-to-tank connection; when the tank itself needs pumping or a leach-field repair, we'll tell you straight and coordinate the right specialist.",
  },
  {
    question: 'How much does sewer or septic line repair cost in Palo Cedro, CA?',
    answer:
      "Every job is quoted upfront after a camera inspection — no surprise charges. Cost depends on the length of the run, depth, and how much of the line is damaged: a spot repair is far less than a full replacement, and rural Palo Cedro runs are often longer than in-town lines. We give you a free estimate with any service, show you the footage, and explain your options before any work starts. Call (530) 704-6989.",
  },
  {
    question: 'Am I on city sewer or septic in Palo Cedro?',
    answer:
      "Usually septic. Palo Cedro is unincorporated and most homes here are not on a city sewer main — they run to a private septic tank instead. Water is just as variable: depending on your location, it comes from the Bella Vista Water District or a private well. A camera inspection settles the waste side for sure — we trace the line, confirm it ties into a septic tank, and tell you exactly what you're dealing with before quoting any repair.",
  },
  {
    question: 'Do you do camera inspections before digging on rural property?',
    answer:
      "Always — and it matters even more on large lots. We run a high-definition camera through the line first to find the exact location, depth, and cause of the problem before we dig anything up on a rural parcel. You see the footage yourself. On a long septic run that inspection can save a lot of unnecessary excavation by pinpointing the exact failure point. No guessing, no digging blind.",
  },
  {
    question: 'Can you handle tree-root intrusion in Palo Cedro waste lines?',
    answer:
      "Yes. On large Palo Cedro lots with mature trees, roots work into the line between the house and the septic tank, crack the pipe, and back up the drains. We cut and clear the roots, camera the line to assess the damage, and tell you honestly whether mechanical clearing buys you time or the section needs to be repaired or replaced — using septic-safe methods throughout.",
  },
  {
    question: 'Are you open 24/7 for sewer emergencies in Palo Cedro?',
    answer:
      "We are not a 24/7 company. We offer same-day service during business hours (Mon–Fri 8:00a–4:30p). If a line backs up after hours, text (530) 704-6989 and we'll respond first thing the next business day. For a true safety emergency — major flooding or a gas issue — call 911 and shut off your main water valve.",
  },
  {
    question: 'Is Topline Plumbing licensed to do sewer and septic line work in Palo Cedro?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We handle the sewer and septic lines and house connections, pull permits where required on full replacements, and stand behind our work.',
  },
];

export default function SewerLinePaloCedroPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Sewer Line Repair Palo Cedro',
            url: 'https://toplineplumbingco.com/sewer-line-palo-cedro',
          },
        ]}
      />
      <FAQSchema faqs={sewerFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Palo Cedro's Sewer &amp; Septic Specialists · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Sewer Line Repair &amp; Replacement in Palo Cedro, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) sewer and septic line repair company serving
              Palo Cedro, CA. Most homes out here are on septic, not city sewer — so we camera the line
              first, use septic-safe methods, and quote every job upfront. Same-day service during business
              hours (Mon–Fri 8a–4:30p). Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Septic-safe &amp; camera-first →</span> exact diagnosis,
              then an upfront quote — no digging blind
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <a
                href="tel:5307046989"
                className="h-14 px-8 bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="whitespace-nowrap">Call: (530) 704-6989</span>
              </a>
              <Link
                href="/contact"
                className="h-14 px-8 bg-white text-navy-900 font-semibold rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg"
              >
                Get a Free Estimate
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Same-day response during business hours
            </p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">3,000+</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Jobs Since 1998</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">5.0★</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Perfect Google Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">CSLB</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">License #596557</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">Family</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Owned & Operated</div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Sewer &amp; Septic Line Services in Palo Cedro
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a quick camera diagnosis to a full line replacement — we find the real problem,
              show you the footage, and quote it upfront, with septic-safe methods on every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Sewer &amp; Septic Camera Inspection
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We run a high-definition camera through your line to pinpoint the exact problem before
                we dig — and to trace how the line runs from the house to your septic tank.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Identify root intrusion, cracks, or blockages</li>
                <li>• Exact location and depth on long rural runs</li>
                <li>• Trace the house-to-septic-tank connection</li>
                <li>• Video report so you can see the problem yourself</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Septic-Safe Line Repair &amp; Root Removal
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When the damage is localized, a spot repair fixes it without replacing the whole run.
                We clear roots and blockages with mechanical augering — not chemicals that harm septic.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Spot repairs for localized damage</li>
                <li>• Mechanical augering, septic-safe — no caustics</li>
                <li>• Tree-root cutting and removal</li>
                <li>• Pipe patching and joint repair</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Full Waste Line Replacement
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When a long house-to-tank run has failed or collapsed, we replace it properly — with the
                correct slope and alignment so it performs for the long haul.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Complete replacement of failed waste lines</li>
                <li>• Built for long rural runs and large lots</li>
                <li>• Proper slope and alignment for long-term performance</li>
                <li>• Permits pulled where required and inspected</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Septic-to-House Diagnosis
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A backup that looks like a clogged line can actually be a full tank or a leach-field issue.
                We diagnose where the real problem is before anyone starts digging or quoting.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Pinpoint line failure vs. tank/leach-field issue</li>
                <li>• Honest read on what your system actually needs</li>
                <li>• Coordinate tank pumping / leach-field specialists</li>
                <li>• No selling you work that doesn't fix the problem</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
            Not sure where to start? Call{' '}
            <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
              (530) 704-6989
            </a>{' '}
            and we'll run a camera inspection first, then quote it upfront. See our full{' '}
            <Link href="/services/sewer-line" className="text-primary font-semibold hover:underline">
              sewer line service overview
            </Link>{' '}
            for how we work.
          </p>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Palo Cedro Homes Call Topline for Sewer &amp; Septic Work
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Palo Cedro is the unincorporated community just east of Redding — large-lot residential,
              horse properties, and small ranches, about 15 minutes out on Highway 44. Many homes here are
              on private wells and septic systems rather than city utilities, and that changes the waste-line
              landscape completely. We treat these jobs differently than in-town work, because the line
              you're dealing with usually runs to a septic tank on your own property, not a city main down
              the street.
            </p>
            <p>
              The utility picture out here is genuinely split, and we don't pretend otherwise: depending on
              location, a Palo Cedro home's water comes from the Bella Vista Water District or a private
              well — and on the waste side, most properties out here are on septic rather than a city sewer
              main. That distinction drives everything. We use mechanical augering instead of harsh chemical
              cleaners, because caustics can damage a septic system, and we camera the line to confirm whether
              a backup is a cracked pipe, a root intrusion, or actually a full tank or leach-field problem
              before we quote a dime of repair.
            </p>
            <p>
              The other reality of Palo Cedro is distance and exposure. Large parcels mean long house-to-tank
              runs — a leak or break can be 50-plus feet from the house — and mature trees on these lots send
              roots into the joints. Outdoor plumbing for barns, livestock waterers, and irrigation adds
              complexity that suburban Redding jobs simply don't have. We've worked these properties for
              years, and the camera-first approach is what keeps a rural sewer job from turning into a yard
              full of unnecessary trenches.
            </p>
          </div>

          <div className="mt-10 p-6 bg-navy-900 text-white rounded-xl">
            <h3 className="text-xl font-heading font-bold mb-2">Sewer or septic? We'll tell you for sure.</h3>
            <p className="text-gray-200 mb-4">
              Before any repair quote, we camera the line and confirm whether it's a pipe problem or a
              septic-system problem. No guessing, no digging blind, no surprise charges.
            </p>
            <a
              href="tel:5307046989"
              className="inline-flex items-center gap-2 text-primary-light font-semibold hover:underline"
            >
              Book a camera inspection: (530) 704-6989 →
            </a>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Palo Cedro Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and straight with you about what your sewer or septic line actually needs —
              not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Septic-Safe Methods',
                body: "Most Palo Cedro homes are on septic. We use mechanical augering, not caustic chemicals that can wreck a septic system, and we handle the line accordingly.",
              },
              {
                title: 'Camera-First Diagnosis',
                body: "We don't dig on a guess — and on a long rural run that matters more. A camera finds the exact failure point so we don't trench your whole yard.",
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "After the inspection you see the full quote — no surprise charges. Spot repair, root removal, or full replacement, you choose with the price in front of you.",
              },
              {
                title: 'Built for Rural Runs',
                body: 'Large lots mean long house-to-tank lines and outbuilding plumbing. We come equipped for the distance and exposure rural Palo Cedro jobs involve.',
              },
              {
                title: 'Honest Line-vs-Tank Read',
                body: "If your backup is a full tank or leach-field issue and not a broken pipe, we'll tell you straight and point you to the right specialist instead of selling line work.",
              },
              {
                title: 'No Pushy Upsells',
                body: "If a root cut and spot repair keeps your line running, that's what we'll recommend. We won't sell you a full replacement you don't need.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-2">
              Trusted by Palo Cedro-Area Homeowners
            </h2>
            <p className="text-lg text-gray-600">5.0 perfect rating on Google</p>
          </div>
          <div className="text-center">
            <a
              href="https://g.page/r/CTUWBxm42-YEEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Read all Google reviews →
            </a>
          </div>
        </div>
      </section>

      {/* Related services + sibling links */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              More Plumbing Help in Palo Cedro
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sewer and septic trouble often shows up alongside other drain and plumbing issues. Here's
              where to go next.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/drain-cleaning-palo-cedro"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Drain Cleaning in Palo Cedro</h3>
              <p className="text-gray-600 text-sm">Septic-safe clearing of slow drains before they reach the line.</p>
            </Link>
            <Link
              href="/emergency-plumber-palo-cedro"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Emergency Plumber in Palo Cedro</h3>
              <p className="text-gray-600 text-sm">Same-day response during business hours when it can't wait.</p>
            </Link>
            <Link
              href="/sewer-line-anderson"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Sewer Line Repair in Anderson</h3>
              <p className="text-gray-600 text-sm">Same sewer-and-septic expertise, south of Redding on I-5.</p>
            </Link>
          </div>
          <p className="text-center text-gray-600 mt-8">
            See the full{' '}
            <Link href="/services/sewer-line" className="text-primary font-semibold hover:underline">
              sewer line repair &amp; replacement service
            </Link>{' '}
            or your local{' '}
            <Link href="/areas/palo-cedro" className="text-primary font-semibold hover:underline">
              Palo Cedro plumber page
            </Link>
            . Sewer work north of Redding? See{' '}
            <Link href="/sewer-line-shasta-lake" className="text-primary font-semibold hover:underline">
              sewer line repair in Shasta Lake
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Sewer &amp; Septic Service Across Shasta County &amp; Beyond
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            We dispatch from Redding and serve the surrounding cities — Palo Cedro the same day during
            business hours.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              ['redding', 'Redding'],
              ['anderson', 'Anderson'],
              ['shasta-lake', 'Shasta Lake'],
              ['palo-cedro', 'Palo Cedro'],
              ['bella-vista', 'Bella Vista'],
              ['red-bluff', 'Red Bluff'],
            ].map(([slug, label]) => (
              <Link
                key={slug}
                href={`/areas/${slug}`}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={sewerFAQs}
        title="Sewer &amp; Septic Line Repair FAQ — Palo Cedro, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Sewer or Septic Backing Up in Palo Cedro?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and camera-first. Call now for same-day availability during business hours —
            we'll diagnose it before we dig, use septic-safe methods, and quote it upfront.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:5307046989"
              className="h-14 px-8 bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="whitespace-nowrap">Call: (530) 704-6989</span>
            </a>
            <Link
              href="/contact"
              className="h-14 px-8 bg-white text-navy-900 font-semibold rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              Get a Quote
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Licensed, bonded, insured
          </p>
        </div>
      </section>
    </>
  );
}
