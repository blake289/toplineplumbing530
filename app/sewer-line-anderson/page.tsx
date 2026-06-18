import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/sewer-line-anderson#service',
  name: 'Sewer Line Repair & Replacement in Anderson, CA',
  serviceType: 'Sewer Line Repair',
  description:
    'Sewer line repair, replacement, and camera inspection in Anderson, CA. Root removal, spot repairs, full line replacement, and septic-vs-sewer diagnosis for older downtown homes, Riverside Ave subdivisions, and manufactured-home communities. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/sewer-line-anderson',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Anderson', sameAs: 'https://en.wikipedia.org/wiki/Anderson,_California' },
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
  '@id': 'https://toplineplumbingco.com/sewer-line-anderson#webpage',
  url: 'https://toplineplumbingco.com/sewer-line-anderson',
  name: 'Sewer Line Repair Anderson, CA | Topline Plumbing',
  description:
    "Sewer line repair and replacement in Anderson, CA. Camera inspection, root removal, spot repair, and septic guidance. Licensed since 1998. Call (530) 704-6989.",
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/sewer-line-anderson#service' },
};

export const metadata: Metadata = {
  title: 'Sewer Line Repair Anderson, CA | Topline Plumbing',
  description:
    "Sewer line repair and replacement in Anderson, CA. Camera inspection, root removal, spot repair, and septic guidance. Licensed since 1998. Call (530) 704-6989.",
  alternates: {
    canonical: 'https://toplineplumbingco.com/sewer-line-anderson',
  },
  openGraph: {
    title: 'Sewer Line Repair Anderson, CA | Topline Plumbing',
    description:
      "Anderson's sewer line specialists. Camera inspection, root removal, spot repair, and full replacement — plus honest septic-vs-sewer guidance — from a licensed local plumber since 1998.",
    url: 'https://toplineplumbingco.com/sewer-line-anderson',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Sewer Line Repair & Replacement in Anderson, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const sewerFAQs = [
  {
    question: 'How fast can a plumber get to Anderson for a sewer problem?',
    answer:
      "During business hours (Mon–Fri 8:00a–4:30p), typical on-site response for Anderson is 30–60 minutes. Anderson is 10 miles south of Redding on I-5, so we typically arrive within an hour. For sewer line work that needs a camera inspection and quote, we usually offer same-day or next-business-day appointments. Call (530) 704-6989 for current availability.",
  },
  {
    question: 'How much does sewer line repair cost in Anderson, CA?',
    answer:
      "Every sewer job is quoted upfront after a camera inspection — no surprises. Cost depends on location, depth, and how much of the line is damaged: a spot repair is far less than a full replacement. We give you a free assessment, show you the camera footage, and explain your options before any work starts. Call (530) 704-6989 for an upfront quote.",
  },
  {
    question: 'Am I on city sewer or septic in Anderson?',
    answer:
      "It depends where in Anderson you live. Homes inside the older downtown core and the Riverside Ave subdivisions are usually on city sewer, while many properties out toward Cottonwood Creek, Happy Valley, and rural Anderson are on private septic. A camera inspection settles it for sure — we trace the line, confirm whether it ties into a city main or a septic tank, and tell you exactly what you're dealing with before quoting any repair.",
  },
  {
    question: 'What are the signs my sewer line is broken or backing up?',
    answer:
      "Watch for multiple drains backing up at once, sewage odors in the yard or home, soggy or unusually green patches in the lawn over the line, gurgling toilets, and slow drains throughout the house. In older Anderson homes with aging mains, these often point to root intrusion or a collapsed section. Call (530) 704-6989 — sewer issues get worse fast.",
  },
  {
    question: 'Do you do camera inspections before digging?',
    answer:
      "Always. We run a high-definition camera through the line first to find the exact location, depth, and cause of the problem — root intrusion, a crack, a collapse, or a clog. You see the footage yourself. That inspection is also what tells us whether you're on sewer or septic, and whether a spot repair will do or the line needs full replacement. No guessing, no digging blind.",
  },
  {
    question: 'Can you handle tree-root intrusion in older Anderson sewer lines?',
    answer:
      "Yes. Root intrusion is one of the most common sewer problems we see in older Anderson neighborhoods — roots seek out the moisture in the line, work into the joints, and crack the pipe. We cut and clear the roots, camera the line to assess the damage, and tell you honestly whether mechanical clearing buys you time or the section needs to be repaired or replaced.",
  },
  {
    question: 'Do you service manufactured and mobile homes in Anderson?',
    answer:
      "Yes. Anderson has several manufactured-home communities, and their drain and sewer connections have their own standards. We handle the line from the home to the city tie-in or septic tank, diagnose backups and slow drains, and use the right materials for the job. Call (530) 704-6989.",
  },
  {
    question: 'Is Topline Plumbing licensed to do sewer work in Anderson?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We pull city permits on full sewer line replacements, schedule the inspection, and stand behind our work.',
  },
];

export default function SewerLineAndersonPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Sewer Line Repair Anderson',
            url: 'https://toplineplumbingco.com/sewer-line-anderson',
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
              Anderson's Sewer Line Specialists · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Sewer Line Repair &amp; Replacement in Anderson, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) sewer line repair company serving Anderson, CA.
              We diagnose with a camera before we dig, tell you straight whether you're on sewer or septic,
              and quote every job upfront — same-day service during business hours (Mon–Fri 8a–4:30p).
              Call (530) 704-6989.
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
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Typical Anderson response 30–60 minutes
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
              Sewer Line Services in Anderson
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a quick camera diagnosis to a full line replacement — we find the real problem,
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
                we ever dig — and to confirm whether you're on city sewer or septic.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Identify root intrusion, cracks, or blockages</li>
                <li>• Exact location and depth of the damage</li>
                <li>• Sewer-vs-septic confirmation</li>
                <li>• Video report so you can see the problem yourself</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Sewer Line Repair &amp; Root Removal
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When the damage is localized, a spot repair fixes it without replacing the whole line.
                Root intrusion is the most common cause we see in older Anderson neighborhoods.
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
                Full Sewer Line Replacement
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When an aging main has failed or collapsed, we replace it properly — with the correct
                slope and alignment so it performs for the long haul.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Complete replacement of failed sewer lines</li>
                <li>• Cast iron, clay, and ABS pipe specialists</li>
                <li>• Proper slope and alignment for long-term performance</li>
                <li>• City permit pulled and inspected</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Septic-vs-Sewer Guidance
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Many Anderson homes near Cottonwood Creek and out toward Happy Valley are on septic,
                not city sewer. We figure out which you have and handle the line accordingly.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Camera trace to confirm sewer vs. septic</li>
                <li>• Septic-connected line and transition issues</li>
                <li>• Mechanical augering — not harsh chemicals on septic</li>
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
            Why Anderson Homes Call Topline for Sewer Line Work
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Anderson sits just south of Redding on I-5 — a 10-minute drive from our base. The town has
              a wide mix: older single-family homes near downtown, newer subdivisions off Riverside Ave,
              manufactured-home communities, and rural parcels stretching out toward Happy Valley and
              Cottonwood. That mix is exactly why sewer work here is rarely one-size-fits-all — and why
              the first thing we do is put a camera in the line.
            </p>
            <p>
              A big part of the job in Anderson is figuring out whether a property is even on city sewer
              at all. In-town homes that take their water from the City of Anderson water utility are
              typically tied into the municipal sewer, while many homes closer to Cottonwood Creek and
              rural Anderson are on private septic instead — so a backup that looks like a clogged main
              might actually be a septic transition issue. Guessing wrong here costs homeowners real money. Our camera inspection
              traces the line, confirms whether it ties into a city main or a septic tank, and tells you
              exactly what you're dealing with before we quote a single repair.
            </p>
            <p>
              The other recurring theme is age. Older downtown Anderson homes often have aging mains —
              clay or cast iron pipe that's decades past its prime — and those lines are magnets for tree
              roots. Roots work into the joints, crack the pipe, and back up the whole house. We've cleared
              and repaired these lines across Anderson, Happy Valley, and Cottonwood, and we'll tell you
              honestly whether a root cut buys you time or the section needs to be replaced. Manufactured
              and mobile-home communities add their own wrinkle, with drain and sewer connections that
              follow their own standards — we handle those too.
            </p>
          </div>

          <div className="mt-10 p-6 bg-navy-900 text-white rounded-xl">
            <h3 className="text-xl font-heading font-bold mb-2">Sewer or septic? We'll tell you for sure.</h3>
            <p className="text-gray-200 mb-4">
              Before any repair quote, we camera the line and confirm what you're actually connected to.
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
              Why Anderson Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and straight with you about what your sewer line actually needs — not a
              corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Camera-First Diagnosis',
                body: "We don't dig on a guess. A high-definition camera finds the exact problem and location first — and confirms sewer vs. septic — so you only pay to fix what's actually wrong.",
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "After the inspection you see the full quote — no surprise charges. Spot repair, root removal, or full replacement, you choose with the price in front of you.",
              },
              {
                title: 'Local & Fast to Anderson',
                body: 'Anderson is 10 miles south of our Redding base on I-5. Typical on-site response during business hours is 30–60 minutes — usually within the hour.',
              },
              {
                title: 'Sewer & Septic Both',
                body: "Many Anderson properties near Cottonwood Creek are on septic, not city sewer. We handle the line either way and tell you honestly which system you have.",
              },
              {
                title: 'Permits & Code Handled',
                body: 'On full line replacements we pull the city permit, schedule the inspection, and make sure the new line meets slope and alignment code — you don\'t deal with the building department.',
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
              Trusted by Anderson-Area Homeowners
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
              More Plumbing Help in Anderson
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sewer line trouble often shows up alongside other drain and plumbing issues. Here's where
              to go next.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/drain-cleaning-anderson"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Drain Cleaning in Anderson</h3>
              <p className="text-gray-600 text-sm">Slow drains and backups before they reach the main line.</p>
            </Link>
            <Link
              href="/emergency-plumber-anderson"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Emergency Plumber in Anderson</h3>
              <p className="text-gray-600 text-sm">Same-day response during business hours when it can't wait.</p>
            </Link>
            <Link
              href="/sewer-line-shasta-lake"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Sewer Line Repair in Shasta Lake</h3>
              <p className="text-gray-600 text-sm">Same sewer expertise, just north of Redding on I-5.</p>
            </Link>
          </div>
          <p className="text-center text-gray-600 mt-8">
            See the full{' '}
            <Link href="/services/sewer-line" className="text-primary font-semibold hover:underline">
              sewer line repair &amp; replacement service
            </Link>{' '}
            or your local{' '}
            <Link href="/areas/anderson" className="text-primary font-semibold hover:underline">
              Anderson plumber page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Sewer Line Service Across Shasta County &amp; Beyond
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            We dispatch from Redding and serve the surrounding cities — Anderson in 30–60 minutes during
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
        title="Sewer Line Repair FAQ — Anderson, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Sewer Backing Up in Anderson?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and camera-first. Call now for same-day availability during business hours —
            we'll diagnose it before we dig and quote it upfront.
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
