import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/sewer-line-bella-vista#service',
  name: 'Sewer & Septic Line Repair in Bella Vista, CA',
  serviceType: 'Sewer Line Repair',
  description:
    'Sewer and septic line repair, replacement, and camera inspection in Bella Vista, CA. Long-run service-line leak detection, septic-safe clearing, root removal, and full line replacement for foothill ranchettes and large rural parcels. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/sewer-line-bella-vista',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Bella Vista', sameAs: 'https://en.wikipedia.org/wiki/Bella_Vista,_California' },
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
          name: 'Underground Line Leak Detection',
          serviceType: 'Leak Detection',
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
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/sewer-line-bella-vista#webpage',
  url: 'https://toplineplumbingco.com/sewer-line-bella-vista',
  name: 'Sewer Line Repair Bella Vista, CA | Topline Plumbing',
  description:
    'Sewer and septic line repair in Bella Vista, CA. Camera inspection, long-run leak detection, septic-safe clearing, and line replacement for rural foothill homes. Licensed since 1998. Call (530) 704-6989.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/sewer-line-bella-vista#service' },
};

export const metadata: Metadata = {
  title: 'Sewer Line Repair Bella Vista, CA | Topline Plumbing',
  description:
    'Sewer and septic line repair in Bella Vista, CA. Camera inspection, long-run leak detection, septic-safe clearing, and line replacement for rural foothill homes. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/sewer-line-bella-vista',
  },
  openGraph: {
    title: 'Sewer Line Repair Bella Vista, CA | Topline Plumbing',
    description:
      "Bella Vista's sewer and septic line specialists. Camera inspection, long-run leak detection, septic-safe clearing, and line replacement for foothill ranchettes — licensed since 1998.",
    url: 'https://toplineplumbingco.com/sewer-line-bella-vista',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Sewer & Septic Line Repair in Bella Vista, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const sewerFAQs = [
  {
    question: 'How fast can a plumber get to Bella Vista for a sewer problem?',
    answer:
      "During business hours (Mon–Fri 8:00a–4:30p), we typically reach Bella Vista the same day. Bella Vista is about 15 minutes northeast of Redding, and we serve it daily. For waste-line work that needs a camera inspection and quote, we usually offer same-day or next-business-day appointments. Call (530) 704-6989 for current availability.",
  },
  {
    question: 'My waste line runs a long way from the house — can you find the break?',
    answer:
      "Yes. That's a Bella Vista signature problem. On large foothill parcels, a service or waste line can run 50-plus feet from the house, so a leak or break isn't something you find with a stethoscope to the slab. We use camera inspection to trace the line and pinpoint the exact failure location underground, so we dig in one spot instead of trenching the whole run. Call (530) 704-6989.",
  },
  {
    question: 'How much does sewer or septic line repair cost in Bella Vista, CA?',
    answer:
      "Every job is quoted upfront after a camera inspection — no surprise charges. Cost depends on the length of the run, depth, and how much of the line is damaged: a spot repair is far less than a full replacement, and rural Bella Vista runs are often longer than in-town lines. We give you a free estimate with any service, show you the footage, and explain your options before any work starts.",
  },
  {
    question: 'Am I on city sewer or septic in Bella Vista?',
    answer:
      "Most likely septic. Bella Vista is rural Shasta County — large parcels and ranchettes where septic systems are the norm rather than the exception. Water for the area is served by the Bella Vista Water District, drawing on Sacramento River surface supply and local wells, though many outlying homes run on their own private wells and septic instead. A camera inspection confirms the waste side for sure — we trace the line and tell you exactly what you're connected to before quoting any repair.",
  },
  {
    question: 'Do you do camera inspections before digging on rural property?',
    answer:
      "Always — and on Bella Vista's big lots it saves real money. We run a high-definition camera through the line first to find the exact location, depth, and cause of the problem before we dig anything up. You see the footage yourself. On a long underground run that inspection lets us excavate one spot rather than the whole line. No guessing, no digging blind.",
  },
  {
    question: 'Can you handle frozen or cracked lines after a foothill cold snap?',
    answer:
      "Yes. Cold snaps in the Bella Vista foothills hit harder than in town, and exposed pipes, pump houses, and shallow runs can crack. We camera the line to find the damaged section, repair or replace it, and can advise on freeze protection so it doesn't happen again. For an active flood or safety issue after hours, call 911 and shut off your main water valve.",
  },
  {
    question: 'Are you open 24/7 for sewer emergencies in Bella Vista?',
    answer:
      "We are not a 24/7 company. We offer same-day service during business hours (Mon–Fri 8:00a–4:30p). If a line backs up after hours, text (530) 704-6989 and we'll respond first thing the next business day. For a true safety emergency — major flooding or a gas issue — call 911 and shut off your main water valve.",
  },
  {
    question: 'Is Topline Plumbing licensed to do sewer and septic line work in Bella Vista?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We handle the sewer and septic lines and house connections, pull permits where required on full replacements, and stand behind our work.',
  },
];

export default function SewerLineBellaVistaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Sewer Line Repair Bella Vista',
            url: 'https://toplineplumbingco.com/sewer-line-bella-vista',
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
              Bella Vista's Sewer &amp; Septic Specialists · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Sewer Line Repair &amp; Replacement in Bella Vista, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) sewer and septic line repair company serving
              Bella Vista, CA. Out here the lines run long and many homes are on septic — so we camera the
              line, pinpoint the break underground, and quote every job upfront. Same-day service during
              business hours (Mon–Fri 8a–4:30p). Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Camera-first leak location →</span> dig one spot, not the
              whole run — then an upfront quote
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
              Sewer &amp; Septic Line Services in Bella Vista
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From locating a break on a long underground run to a full line replacement — we find the real
              problem, show you the footage, and quote it upfront before any digging starts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Underground Leak Detection
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                On Bella Vista's long service runs, a break can be 50-plus feet from the house. We locate
                the exact failure point underground so you dig one spot instead of the whole line.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Camera tracing of long underground runs</li>
                <li>• Pinpoint the exact break or leak location</li>
                <li>• Minimize excavation on large parcels</li>
                <li>• Built for foothill service-line distances</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Septic-Safe Line Repair &amp; Root Removal
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When the damage is localized, a spot repair fixes it without replacing the whole run.
                For septic-connected homes we use mechanical augering — not caustic chemicals.
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
                When a long run has failed or collapsed, we replace it properly — with the correct slope
                and alignment so it performs for the long haul out on rural ground.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Complete replacement of failed waste lines</li>
                <li>• Built for long rural runs and large lots</li>
                <li>• Mixed-material (galvanized to PEX/ABS) transitions</li>
                <li>• Permits pulled where required and inspected</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">
                Camera Inspection &amp; Diagnosis
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A high-definition camera tells us whether you're dealing with a cracked line, root intrusion,
                or a septic-system issue — and exactly where — before anyone digs or quotes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Identify root intrusion, cracks, or blockages</li>
                <li>• Trace the house-to-septic-tank connection</li>
                <li>• Honest read on what your system actually needs</li>
                <li>• Video report so you can see the problem yourself</li>
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
            Why Bella Vista Homes Call Topline for Sewer &amp; Septic Work
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Bella Vista is rural Shasta County — large parcels, ranchettes, and homes spread out across the
              foothills northeast of Redding, about 15 minutes from our base. Wells, septic, and outbuildings
              are the norm rather than the exception. Waste-line problems out here almost always involve
              longer service runs, more outdoor exposure, and components most in-town plumbers don't deal
              with as often. That's exactly the kind of work we're built for.
            </p>
            <p>
              The first thing to sort out on any Bella Vista job is what you're actually connected to. On the
              supply side, the area's water comes from the Bella Vista Water District — a blend of Sacramento
              River surface water and local wells — though plenty of outlying homes run on their own private
              wells and septic instead. On the waste side, septic is the rule. We don't guess at it: a camera
              inspection traces your line, confirms whether it ties into a septic tank, and tells you what
              you're dealing with before we quote a repair, using septic-safe mechanical clearing throughout.
            </p>
            <p>
              The defining challenge here is distance. A long well-to-house or house-to-tank service run means
              a leak can be 50-plus feet from the house, so detection takes more than a stethoscope to the
              slab — it takes a camera in the pipe. Foothill cold snaps hit harder than in town, cracking
              exposed pipes and pump-house lines, and many properties mix decades-old original plumbing with
              later additions, creating pipe-material transitions that have to be handled correctly. We
              camera, pinpoint, and dig one spot — not the whole yard.
            </p>
          </div>

          <div className="mt-10 p-6 bg-navy-900 text-white rounded-xl">
            <h3 className="text-xl font-heading font-bold mb-2">Find the break before you dig the yard.</h3>
            <p className="text-gray-200 mb-4">
              Before any repair quote, we camera the line and pinpoint the exact failure location.
              No guessing, no trenching blind, no surprise charges.
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
              Why Bella Vista Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and straight with you about what your sewer or septic line actually needs —
              not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Long-Run Leak Location',
                body: "On a 50-plus-foot service line, finding the break is the whole job. We camera and pinpoint the exact spot so you dig once, not all over the property.",
              },
              {
                title: 'Septic-Safe Methods',
                body: "Many Bella Vista homes are on septic. We use mechanical augering, not caustic chemicals that can wreck a septic system, and handle the line accordingly.",
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "After the inspection you see the full quote — no surprise charges. Spot repair, root removal, or full replacement, you choose with the price in front of you.",
              },
              {
                title: 'Built for Rural Foothills',
                body: 'Big lots, outbuildings, freeze-prone pump houses, mixed pipe materials — we come equipped for the conditions rural Bella Vista jobs actually involve.',
              },
              {
                title: 'Honest Line-vs-System Read',
                body: "If your backup is a septic-tank or leach-field issue and not a broken pipe, we'll tell you straight and point you to the right specialist instead of selling line work.",
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
              Trusted by Bella Vista-Area Homeowners
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
              More Plumbing Help in Bella Vista
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sewer and septic trouble often shows up alongside other drain and plumbing issues. Here's
              where to go next.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/drain-cleaning-bella-vista"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Drain Cleaning in Bella Vista</h3>
              <p className="text-gray-600 text-sm">Septic-safe clearing of slow drains before they reach the line.</p>
            </Link>
            <Link
              href="/emergency-plumber-bella-vista"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Emergency Plumber in Bella Vista</h3>
              <p className="text-gray-600 text-sm">Same-day response during business hours when it can't wait.</p>
            </Link>
            <Link
              href="/sewer-line-shasta-lake"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-1">Sewer Line Repair in Shasta Lake</h3>
              <p className="text-gray-600 text-sm">Same sewer-and-septic expertise, north of Redding on I-5.</p>
            </Link>
          </div>
          <p className="text-center text-gray-600 mt-8">
            See the full{' '}
            <Link href="/services/sewer-line" className="text-primary font-semibold hover:underline">
              sewer line repair &amp; replacement service
            </Link>{' '}
            or your local{' '}
            <Link href="/areas/bella-vista" className="text-primary font-semibold hover:underline">
              Bella Vista plumber page
            </Link>
            . Sewer work in Anderson? See{' '}
            <Link href="/sewer-line-anderson" className="text-primary font-semibold hover:underline">
              sewer line repair in Anderson
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
            We dispatch from Redding and serve the surrounding cities — Bella Vista the same day during
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
        title="Sewer &amp; Septic Line Repair FAQ — Bella Vista, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Sewer or Septic Backing Up in Bella Vista?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and camera-first. Call now for same-day availability during business hours —
            we'll pinpoint the break before we dig, use septic-safe methods, and quote it upfront.
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
