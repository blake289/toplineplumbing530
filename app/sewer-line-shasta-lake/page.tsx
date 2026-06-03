import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/sewer-line-shasta-lake#service',
  name: 'Sewer Line Repair & Replacement in Shasta Lake, CA',
  serviceType: 'Sewer Line Repair',
  description:
    'Sewer line repair and replacement in Shasta Lake, CA. Sewer camera inspection to locate the problem, spot repair, full line replacement, root intrusion removal, and trenchless options where conditions allow — all quoted upfront before any digging starts. Licensed plumber CSLB #596557, serving the Shasta Lake area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/sewer-line-shasta-lake',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Shasta Lake', sameAs: 'https://en.wikipedia.org/wiki/Shasta_Lake,_California' },
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
          name: 'Sewer Line Spot Repair',
          serviceType: 'Sewer Line Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Sewer Line Replacement',
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
          name: 'Trenchless Sewer Repair',
          serviceType: 'Trenchless Sewer Line Repair',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/sewer-line-shasta-lake#webpage',
  url: 'https://toplineplumbingco.com/sewer-line-shasta-lake',
  name: 'Sewer Line Repair Shasta Lake, CA | Topline Plumbing',
  description:
    "Sewer line repair and replacement in Shasta Lake, CA. Camera inspection, root removal, and trenchless options. Licensed since 1998. Call (530) 704-6989.",
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/sewer-line-shasta-lake#service' },
};

export const metadata: Metadata = {
  title: 'Sewer Line Repair Shasta Lake, CA | Topline Plumbing',
  description:
    'Sewer line repair and replacement in Shasta Lake, CA. Camera inspection, root removal, and trenchless options. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/sewer-line-shasta-lake',
  },
  openGraph: {
    title: 'Sewer Line Repair Shasta Lake, CA | Topline Plumbing',
    description:
      'Sewer line repair and replacement in Shasta Lake, CA. Camera inspection, root removal, spot repair, full replacement, and trenchless options from a licensed local plumber since 1998.',
    url: 'https://toplineplumbingco.com/sewer-line-shasta-lake',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Sewer Line Repair & Replacement in Shasta Lake, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const sewerFAQs = [
  {
    question: 'How fast can a plumber get to Shasta Lake for a sewer problem?',
    answer:
      "Shasta Lake is just 10 miles north of our Redding base, so we typically reach Shasta Lake addresses in 30–60 minutes during business hours (Mon–Fri 8a–4:30p). For an active sewage backup, call (530) 704-6989 and we'll give you a same-day arrival window. If it's after hours, text (530) 704-6989 and we respond first thing the next business day — for a major flood, shut off your main water valve first.",
  },
  {
    question: 'How much does sewer line repair cost in Shasta Lake, CA?',
    answer:
      "Sewer line repair cost depends on the location, depth, and extent of the damage — a spot repair on a single cracked section costs far less than a full line replacement, and trenchless methods are priced differently than dig-and-replace. We run a camera inspection first to see exactly what's wrong, then give you an upfront quote before any digging starts. No surprise charges. Call (530) 704-6989 for a free assessment.",
  },
  {
    question: 'How do I know if my Shasta Lake home has a broken sewer line?',
    answer:
      "Warning signs include multiple drains backing up at once, sewage odors in the yard or home, soggy or sunken patches in the lawn over the sewer line, gurgling toilets, and unusually green or lush grass above the pipe. In Project City and Central Valley townsite homes with aging sewer mains, these signs often point to a deteriorating clay or cast iron line. Call (530) 704-6989 and we'll camera the line to confirm.",
  },
  {
    question: 'Do you offer trenchless sewer line repair in Shasta Lake?',
    answer:
      "Yes, when conditions allow. Trenchless repair avoids tearing up your yard, driveway, or landscaping. During the camera inspection we assess whether the line is a candidate for trenchless — pipe condition, material, and accessibility all factor in — and we explain every viable option with upfront pricing before you decide.",
  },
  {
    question: 'My Shasta Lake cabin or rental sat empty and now the sewer is backing up — can you help?',
    answer:
      "Yes — this is one of the most common calls we get from the lake side. When a cabin or vacation rental sits unoccupied, slow leaks, root intrusion, and partial blockages compound quietly until the next guest arrives to a backup. We camera the line to find the real cause rather than just snaking it and leaving, so the problem doesn't resurface between bookings.",
  },
  {
    question: 'Is my Shasta Lake property on sewer or septic — and does it matter?',
    answer:
      "It matters a lot. Homes connected to the municipal sewer have a buried lateral line running to the main, while many rural Lakehead-adjacent and large-lot properties run on septic systems. A backup on a sewer line is usually a cracked, root-clogged, or collapsed lateral; a backup on septic can be a full tank, a failed drain field, or a clogged inlet. We confirm which system you have before recommending any work — and we never pour caustic chemicals into a septic-connected line.",
  },
  {
    question: 'What causes sewer line damage around Shasta Lake?',
    answer:
      "The most common causes here are tree root intrusion (roots seek out water and crack joints), aging clay and cast iron pipe in the older Project City and Central Valley townsite homes, ground shifting from Northern California heat cycles, and grease or debris buildup. A camera inspection pinpoints the exact cause and location so the fix targets the real problem.",
  },
  {
    question: 'Is Topline Plumbing licensed to do sewer work in Shasta Lake?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding and Shasta Lake area since 1998. We pull city permits on full line replacements, schedule the required inspection, and stand behind our workmanship.',
  },
];

export default function SewerLineShastaLakePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Sewer Line Repair Shasta Lake',
            url: 'https://toplineplumbingco.com/sewer-line-shasta-lake',
          },
        ]}
      />
      <FAQSchema faqs={sewerFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Shasta Lake Sewer Specialists · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Sewer Line Repair &amp; Replacement in Shasta Lake, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) sewer line repair service serving Shasta
              Lake, CA. We camera the line to locate the exact problem, then handle spot repair, root
              removal, full replacement, or trenchless repair where it&apos;s possible — with upfront
              pricing before any digging starts. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Same-day service during business hours →</span>{' '}
              typically on-site in 30–60 minutes
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Typically on-site in Shasta Lake within 30–60
              minutes
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

      {/* Camera-first approach */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              We Find the Problem Before We Dig
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No guessing, no tearing up your yard on a hunch. Every sewer call in Shasta Lake starts
              with a camera inspection so you see the real problem — and so the fix targets the right
              spot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div className="text-xl font-heading font-bold text-navy-900 mb-2">
                Sewer Camera Inspection
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                A high-definition camera runs the length of your sewer line to find the exact issue —
                root intrusion, cracks, bellies, or a collapsed section.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pinpoints the exact location and depth of the damage</li>
                <li>• Identifies root intrusion, cracks, and blockages</li>
                <li>• Video so you can see the problem yourself before approving any work</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div className="text-xl font-heading font-bold text-navy-900 mb-2">
                Honest, Upfront Diagnosis
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Once we know what&apos;s wrong, we quote it upfront and walk you through every option —
                from a quick spot repair to a full replacement — before any work begins.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Upfront quote before any digging starts</li>
                <li>• Free estimate with any service — no surprise charges</li>
                <li>• Trenchless option assessed when the line qualifies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three options */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              How We Fix Shasta Lake Sewer Lines
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              After the camera inspection, we match the fix to the problem — not the other way around.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Spot repair */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Option 1
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">Spot Repair</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Best when the camera shows a single cracked section, an offset joint, or one bad spot
                rather than a failing line. We dig only where the problem is and repair the section
                with proper slope and alignment.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Targeted dig — minimal yard disruption</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pipe patching and joint repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quoted upfront after the camera inspection</span>
                </li>
              </ul>
              <Link href="/services/sewer-line" className="text-primary font-semibold hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Full replacement - featured */}
            <div className="bg-navy-900 text-white rounded-xl shadow-lg border-2 border-primary p-8 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                For Failing Lines
              </div>
              <div className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-2">
                Option 2
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">Full Replacement</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                When the line is collapsed, root-choked end to end, or an aging clay or cast iron main
                that&apos;s past saving — common in older Project City and Central Valley townsite
                homes — we replace it completely with proper slope and a city permit.
              </p>
              <ul className="space-y-2 text-gray-200 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cast iron, clay, and ABS pipe specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>City permit pulled and inspected</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proper slope and alignment for long-term performance</span>
                </li>
              </ul>
              <a href="tel:5307046989" className="text-primary-light font-semibold hover:underline">
                Get a free quote: (530) 704-6989 →
              </a>
            </div>

            {/* Root removal / trenchless */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Option 3
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Root Removal &amp; Trenchless
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Roots are the #1 cause of sewer trouble around Shasta Lake. We mechanically cut and
                clear root intrusion, then — where the pipe qualifies — repair it trenchless so your
                yard, driveway, and landscaping stay intact.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mechanical root cutting and removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trenchless repair when conditions allow</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No unnecessary digging across your property</span>
                </li>
              </ul>
              <Link href="/drain-cleaning-shasta-lake" className="text-primary font-semibold hover:underline">
                Just a clog? See drain cleaning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Shasta Lake Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and 10 minutes up I-5 — not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Camera-First, Always',
                body: "We never dig on a guess. A high-definition camera finds the exact problem and location so you only pay to fix what's actually broken.",
              },
              {
                title: 'Upfront Quote Before We Dig',
                body: "You see the full quote after the inspection — before any excavation starts. Free estimate with any service, no surprise charges.",
              },
              {
                title: 'Fast Dispatch to Shasta Lake',
                body: "Shasta Lake is just 10 miles north of our Redding base, so we typically arrive in 30–60 minutes during business hours.",
              },
              {
                title: 'Sewer & Septic Aware',
                body: "Many lake-area and rural properties run on wells and septic. We confirm which system you have before recommending work — and never pour caustics into a septic-connected line.",
              },
              {
                title: 'Built for Cabins & Rentals',
                body: "Vacation rentals and seasonal cabins that sit empty hide problems until the next guest arrives. We find the root cause so backups don't resurface between bookings.",
              },
              {
                title: 'Permits & Code Handled',
                body: "On full line replacements we pull the city permit, schedule the inspection, and set proper slope and alignment so the line lasts.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
              Why Shasta Lake Homes Call Topline for Sewer Work
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Shasta Lake sits just north of Redding, anchored by Shasta Dam and the lake recreation
                economy. We see two distinct kinds of property here — longtime residential homes built
                for the dam and powerhouse workforce, and seasonal cabins or vacation rentals on the
                lake side. Each has different sewer needs, and a very different sense of urgency when a
                line fails.
              </p>
              <p>
                The older housing near the original townsite — Project City and Central Valley — was
                built decades ago, and a lot of it still runs on aging clay or cast iron sewer mains.
                These are the homes served by the City of Shasta Lake&apos;s municipal water system,
                and decades of mineral-laden flow through their waste lines only accelerate the scaling
                and corrosion that aging sewer pipe is already prone to. Those materials don&apos;t fail
                gracefully: roots find the joints, the pipe cracks or bellies, and a slow problem
                becomes a backup. A camera inspection tells us instantly
                whether you&apos;re looking at a single bad section or a line that&apos;s reached the
                end of its life.
              </p>
              <p>
                The lake side brings its own pattern. Cabins and rentals that sit unoccupied for
                stretches let small problems compound quietly — a partial root blockage or a hairline
                crack keeps working away until the next guest arrives to a sewage backup. We see these
                calls constantly, which is exactly why we camera the line and fix the root cause
                instead of just snaking it and leaving. And because many Lakehead-adjacent and
                large-lot properties run on wells and septic rather than city sewer, we confirm which
                system you&apos;re on before recommending any work — a septic backup is a different
                animal than a cracked sewer lateral, and the two get handled completely differently.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-navy-900 text-white rounded-xl max-w-4xl">
            <h3 className="text-xl font-heading font-bold mb-2">Not Sure What You&apos;re Dealing With?</h3>
            <p className="text-gray-200 mb-4">
              If you&apos;ve got slow drains, sewage smell, or a backup at a Shasta Lake home, cabin,
              or rental, start with a camera inspection. We&apos;ll show you the real problem and quote
              the fix upfront.
            </p>
            <a
              href="tel:5307046989"
              className="inline-flex items-center gap-2 text-primary-light font-semibold hover:underline"
            >
              Call now: (530) 704-6989 →
            </a>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-500 fill-current" viewBox="0 0 20 20" aria-hidden>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-2">
              Trusted by Shasta Lake-Area Homeowners
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
              Read our Google reviews →
            </a>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Sewer Line Service Across Shasta County &amp; Beyond
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Based in Redding, serving Shasta Lake and the surrounding communities. Related:{' '}
            <Link href="/services/sewer-line" className="text-primary font-semibold hover:underline">
              our sewer line service
            </Link>
            ,{' '}
            <Link href="/areas/shasta-lake" className="text-primary font-semibold hover:underline">
              the Shasta Lake service area
            </Link>
            ,{' '}
            <Link href="/sewer-line-anderson" className="text-primary font-semibold hover:underline">
              sewer line repair in Anderson
            </Link>
            , and{' '}
            <Link href="/emergency-plumber-shasta-lake" className="text-primary font-semibold hover:underline">
              emergency plumbing in Shasta Lake
            </Link>
            .
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
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
        title="Sewer Line Repair FAQ — Shasta Lake, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Sewer Trouble in Shasta Lake? Start With a Camera.
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and camera-first. Call now for same-day service during business hours —
            we&apos;ll find the real problem and quote the fix upfront.
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
