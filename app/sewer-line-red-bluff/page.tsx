import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/sewer-line-red-bluff#service',
  name: 'Sewer Line Repair & Replacement in Red Bluff, CA',
  serviceType: 'Sewer Line Repair',
  description:
    'Sewer line repair, replacement, and camera inspection in Red Bluff, CA. Cast iron drain replacement, root removal, spot repairs, and full line replacement for historic downtown homes and ranch properties in Tehama County. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/sewer-line-red-bluff',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Red Bluff', sameAs: 'https://en.wikipedia.org/wiki/Red_Bluff,_California' },
    { '@type': 'AdministrativeArea', name: 'Tehama County, CA' },
  ],
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sewer Line Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer Camera Inspection',
          serviceType: 'Sewer Camera Inspection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cast Iron Drain Replacement',
          serviceType: 'Sewer Line Replacement',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer Line Spot Repair',
          serviceType: 'Sewer Line Repair',
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
          name: 'Septic-vs-Sewer Diagnosis',
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
  '@id': 'https://toplineplumbingco.com/sewer-line-red-bluff#webpage',
  url: 'https://toplineplumbingco.com/sewer-line-red-bluff',
  name: 'Sewer Line Repair Red Bluff, CA | Topline Plumbing',
  description:
    'Sewer line repair and replacement in Red Bluff, CA. Camera inspection, cast iron drain replacement, root removal, and historic-home sewer work. Licensed since 1998. Call (530) 704-6989.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/sewer-line-red-bluff#service' },
};

export const metadata: Metadata = {
  title: 'Sewer Line Repair Red Bluff, CA | Topline Plumbing',
  description:
    'Sewer line repair and replacement in Red Bluff, CA. Camera inspection, cast iron drain replacement, root removal, and historic-home sewer work. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/sewer-line-red-bluff',
  },
  openGraph: {
    title: 'Sewer Line Repair Red Bluff, CA | Topline Plumbing',
    description:
      "Red Bluff's sewer line specialists. Camera inspection, cast iron drain replacement, root removal, and full replacement for historic Tehama County homes — licensed since 1998.",
    url: 'https://toplineplumbingco.com/sewer-line-red-bluff',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Sewer Line Repair & Replacement in Red Bluff, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const sewerFAQs = [
  {
    question: 'How fast can a plumber get to Red Bluff for a sewer problem?',
    answer:
      "During business hours (Mon–Fri 8:00a–4:30p), typical on-site response for Red Bluff is 45–75 minutes. Red Bluff is 30 miles south of Redding on I-5, so typical arrival is around an hour. For sewer work that needs a camera inspection and quote, we usually offer same-day or next-business-day appointments. Call (530) 704-6989 for current availability.",
  },
  {
    question: 'How much does sewer line repair cost in Red Bluff, CA?',
    answer:
      "Every sewer job is quoted upfront after a camera inspection — no surprise charges. Cost depends on location, depth, and how much of the line is damaged: a spot repair is far less than a full replacement, and historic-home cast iron work can vary with what's behind the wall. We give you a free estimate with any service, show you the camera footage, and explain your options before any work starts.",
  },
  {
    question: 'Do you replace old cast iron sewer drains in historic Red Bluff homes?',
    answer:
      "Yes — it's one of the most common sewer jobs we do in Red Bluff. The historic downtown dates to the 1850s, and pre-1920 homes frequently have original cast iron drains that have corroded, scaled, or cracked over a century of use. We camera the line to see the actual condition, then replace the failed cast iron sections with modern pipe — accounting for the galvanized supply, partial copper retrofits, and modern fixtures often layered into the same house.",
  },
  {
    question: 'Am I on city sewer or septic in Red Bluff?',
    answer:
      "It depends where you are. Homes inside Red Bluff city limits are typically on the municipal sewer system, while ranch properties west of town and out on the valley floor are often on private septic with longer service lines. A camera inspection settles it for sure — we trace the line, confirm whether it ties into a city main or a septic tank, and tell you exactly what you're dealing with before quoting any repair.",
  },
  {
    question: 'Do you do camera inspections before digging?',
    answer:
      "Always — and in a layered historic home it's essential. We run a high-definition camera through the line first to find the exact location, depth, and cause of the problem: root intrusion, a cracked cast iron section, a collapse, or a clog. You see the footage yourself. That inspection tells us whether a spot repair will do or the line needs full replacement, so you only pay to fix what's actually wrong.",
  },
  {
    question: 'Can you handle tree-root intrusion in older Red Bluff sewer lines?',
    answer:
      "Yes. Root intrusion is a frequent problem in Red Bluff's older neighborhoods — roots find the moisture in aging cast iron joints, work in, and crack the pipe. We cut and clear the roots, camera the line to assess the damage, and tell you honestly whether mechanical clearing buys you time or the section needs to be repaired or replaced.",
  },
  {
    question: 'Are you open 24/7 for sewer emergencies in Red Bluff?',
    answer:
      "We are not a 24/7 company. We offer same-day service during business hours (Mon–Fri 8:00a–4:30p). If your sewer backs up after hours, text (530) 704-6989 and we'll respond first thing the next business day. For a true safety emergency — major flooding or a gas issue — call 911 and shut off your main water valve.",
  },
  {
    question: 'Is Topline Plumbing licensed to do sewer work in Red Bluff and Tehama County?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We work throughout Red Bluff and Tehama County, pull permits on full sewer line replacements, schedule the inspection, and stand behind our work.',
  },
];

export default function SewerLineRedBluffPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Sewer Line Repair Red Bluff',
            url: 'https://toplineplumbingco.com/sewer-line-red-bluff',
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
              Red Bluff's Sewer Line Specialists · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Sewer Line Repair &amp; Replacement in Red Bluff, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) sewer line repair company serving Red Bluff and
              Tehama County. From century-old cast iron drains downtown to ranch-property lines west of town,
              we camera before we dig, tell you straight what's failing, and quote every job upfront.
              Same-day service during business hours (Mon–Fri 8a–4:30p). Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Camera inspection first →</span> exact diagnosis, then an
              upfront quote — no digging blind
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
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Typical Red Bluff response 45–75 minutes
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
              Sewer Line Services in Red Bluff
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a quick camera diagnosis to a full cast iron drain replacement — we find the real problem,
              show you the footage, and quote it upfront before any work starts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Sewer Camera Inspection
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We run a high-definition camera through your line to pinpoint the exact problem before
                we ever dig — critical in layered historic homes where pipe materials change behind the wall.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Identify root intrusion, cracks, or scaling</li>
                <li>• Assess aging cast iron condition</li>
                <li>• Exact location and depth of the damage</li>
                <li>• Video report so you can see the problem yourself</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Cast Iron Drain Replacement
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pre-1920 Red Bluff homes often have original cast iron drains that have corroded and scaled
                shut. We replace the failed sections with modern pipe that performs for decades.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Replace corroded, scaled, or cracked cast iron</li>
                <li>• Handle galvanized-to-modern transitions</li>
                <li>• Work around layered historic plumbing</li>
                <li>• Proper slope and alignment on the new line</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Sewer Line Repair &amp; Root Removal
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When the damage is localized, a spot repair fixes it without replacing the whole line.
                Root intrusion into aging joints is a common cause in older Red Bluff neighborhoods.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Spot repairs for localized damage</li>
                <li>• Tree-root cutting and removal</li>
                <li>• Pipe patching and joint repair</li>
                <li>• Trenchless options when conditions allow</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Septic-vs-Sewer Guidance
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In-town Red Bluff homes are usually on city sewer, but ranch properties west of town and on
                the valley floor are often on septic with longer service lines. We figure out which you have.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Camera trace to confirm sewer vs. septic</li>
                <li>• Septic-safe mechanical augering, no caustics</li>
                <li>• Longer ranch-property service runs handled</li>
                <li>• Honest read on what your system actually needs</li>
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
            Why Red Bluff Homes Call Topline for Sewer Line Work
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Red Bluff is the Tehama County seat, about 30 miles south of Redding on I-5. The historic
              downtown dates to the 1850s, which means some of the oldest housing stock we service anywhere.
              Outside the historic core, you've got a mix of mid-century residential and ranches stretching
              west toward the coast range and east onto the Sacramento Valley floor. Sewer work here is rarely
              straightforward, and the camera goes in the line before anything else.
            </p>
            <p>
              The signature Red Bluff job is the layered historic home. Pre-1920 houses frequently carry a
              century of plumbing history all at once: original cast iron drains, galvanized supply, partial
              copper retrofits, and modern fixtures, all in the same structure. Every repair has to account
              for what's actually behind the wall, and a camera inspection is the only way to know before we
              cut. On the supply side, the City of Red Bluff Water Department serves the town entirely from
              deep municipal groundwater wells — 100% groundwater, no surface source — so while the water is
              consistent, the waste lines under these old homes are exactly where the age shows.
            </p>
            <p>
              Beyond downtown, the picture shifts. Ranch properties west of town run on wells and septic with
              longer service lines and more outdoor exposure, so a backup out there might be a cracked line or
              might be a septic-system issue entirely — we camera to find out before quoting. And Red Bluff
              summers are some of the hottest in California, which is hard on outdoor PVC and venting but tends
              to push problems toward the supply and venting side rather than the buried sewer. Wherever the
              trouble is, we diagnose it first and tell you honestly whether a spot repair or a full
              replacement is the right call.
            </p>
          </div>

          <div className="mt-10 p-6 bg-navy-900 text-white rounded-xl">
            <h3 className="text-xl font-heading font-bold mb-2">Old cast iron or city main? We'll tell you for sure.</h3>
            <p className="text-gray-200 mb-4">
              Before any repair quote, we camera the line and show you exactly what's failing and where.
              No guessing, no digging blind, no surprise charges.
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
              Why Red Bluff Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and straight with you about what your sewer line actually needs — not a
              corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Historic-Home Specialists',
                body: "Pre-1920 Red Bluff homes layer cast iron, galvanized, copper, and modern fixtures. We work around that history and replace failed cast iron drains the right way.",
              },
              {
                title: 'Camera-First Diagnosis',
                body: "We don't dig on a guess — especially in an old home. A camera finds the exact problem and location first, so you only pay to fix what's actually wrong.",
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "After the inspection you see the full quote — no surprise charges. Spot repair, root removal, or full replacement, you choose with the price in front of you.",
              },
              {
                title: 'Sewer & Septic Both',
                body: "In-town homes are usually on city sewer; ranch properties west of town are often on septic with longer runs. We handle the line either way and tell you which you have.",
              },
              {
                title: 'Permits & Code Handled',
                body: 'On full line replacements we pull the permit, schedule the inspection, and make sure the new line meets slope and alignment code — you don\'t deal with the building department.',
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
              Trusted by Red Bluff-Area Homeowners
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
              More Plumbing Help in Red Bluff
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sewer line trouble often shows up alongside other drain and plumbing issues. Here's where
              to go next.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/drain-cleaning-red-bluff"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Drain Cleaning in Red Bluff</h3>
              <p className="text-gray-600 text-sm">Slow drains and backups before they reach the main line.</p>
            </Link>
            <Link
              href="/emergency-plumber-red-bluff"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Emergency Plumber in Red Bluff</h3>
              <p className="text-gray-600 text-sm">Same-day response during business hours when it can't wait.</p>
            </Link>
            <Link
              href="/sewer-line-anderson"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Sewer Line Repair in Anderson</h3>
              <p className="text-gray-600 text-sm">Same sewer expertise, between Red Bluff and Redding on I-5.</p>
            </Link>
          </div>
          <p className="text-center text-gray-600 mt-8">
            See the full{' '}
            <Link href="/services/sewer-line" className="text-primary font-semibold hover:underline">
              sewer line repair &amp; replacement service
            </Link>{' '}
            or your local{' '}
            <Link href="/areas/red-bluff" className="text-primary font-semibold hover:underline">
              Red Bluff plumber page
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
            Sewer Line Service Across Shasta &amp; Tehama County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            We dispatch from Redding and serve the surrounding cities — Red Bluff in 45–75 minutes during
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
        title="Sewer Line Repair FAQ — Red Bluff, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Sewer Backing Up in Red Bluff?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and camera-first. Call now for same-day availability during business hours —
            we'll diagnose it before we dig and quote it upfront, historic cast iron and all.
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
