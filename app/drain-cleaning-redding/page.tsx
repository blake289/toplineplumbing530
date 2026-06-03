import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/drain-cleaning-redding#service',
  name: 'Drain Cleaning in Redding, CA',
  serviceType: 'Drain Cleaning',
  description:
    'Professional drain cleaning in Redding, CA — kitchen, bathroom, and main sewer line clogs cleared with mechanical power augers, not chemicals. Sewer camera inspection for recurring clogs and root intrusion. Same-day service during business hours (Mon–Fri 8a–4:30p) with upfront pricing. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/drain-cleaning-redding',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Redding', sameAs: 'https://en.wikipedia.org/wiki/Redding,_California' },
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
    name: 'Drain Cleaning Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kitchen & Bathroom Drain Clearing',
          serviceType: 'Drain Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Main Sewer Line Cleaning',
          serviceType: 'Sewer Line Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Power Auger / Mechanical Snaking',
          serviceType: 'Drain Snaking',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer Camera Inspection',
          serviceType: 'Sewer Camera Inspection',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/drain-cleaning-redding#webpage',
  url: 'https://toplineplumbingco.com/drain-cleaning-redding',
  name: 'Drain Cleaning Redding, CA | Topline Plumbing',
  description:
    'Drain cleaning in Redding, CA. Power-auger clog removal and sewer camera inspection with upfront pricing. Licensed local plumber since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/drain-cleaning-redding#service' },
};

export const metadata: Metadata = {
  title: 'Drain Cleaning Redding, CA | Topline Plumbing',
  description:
    'Drain cleaning in Redding, CA. Power-auger clog removal and sewer camera inspection, same-day service. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/drain-cleaning-redding',
  },
  openGraph: {
    title: 'Drain Cleaning Redding, CA | Topline Plumbing',
    description:
      'Drain cleaning in Redding, CA. Power-auger clog removal and sewer camera inspection, same-day service. Licensed since 1998. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/drain-cleaning-redding',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Drain Cleaning in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const drainFAQs = [
  {
    question: 'How much does drain cleaning cost in Redding, CA?',
    answer:
      'Drain cleaning cost varies by the job — a single fixture clog is different from a main sewer line clog or one that needs camera inspection. Whatever it is, we quote the price upfront before any work starts, so you know the cost before we begin. Call (530) 704-6989 for a free estimate with any service — no surprise charges.',
  },
  {
    question: 'Do you offer same-day drain cleaning in Redding?',
    answer:
      'Yes. Topline offers same-day drain cleaning in Redding during business hours (Mon–Fri 8:00a–4:30p), with a typical 30–60 minute on-site response inside the city limits — Redding is our home base. We keep fully stocked service trucks so most clogs get cleared on the first visit. Call (530) 704-6989 to check today’s availability.',
  },
  {
    question: 'How do I know if I have a main sewer line clog?',
    answer:
      'The signs of a main line clog are multiple drains backing up at once, gurgling from the toilet when you run the sink, water rising in the shower when you flush, or a sewage smell from a floor drain. If you see these in your Redding home, call (530) 704-6989 — a main line backup can become an emergency fast, and chemical cleaners will not touch it.',
  },
  {
    question: 'Why are clogged drains so common in older Redding homes?',
    answer:
      'A lot of it comes down to Redding’s mixed, aging housing stock. Older mid-century homes in Enterprise, East Redding, Mary Lake, and the Garden Tract were built with galvanized supply and older drain lines that have narrowed with decades of scale and grease, so they clog easier and recur faster. We see kitchen and main-line backups as one of our most common Redding calls, and a power auger plus a camera look tells us whether it is a simple grease clog or a deeper line problem.',
  },
  {
    question: 'Can you run a camera inspection to find the cause of a recurring clog?',
    answer:
      'Yes. We use a sewer camera to locate the exact position and cause of a blockage — root intrusion, a collapsed or bellied section, grease buildup, or scale in an old galvanized line. It is the right call for recurring clogs and any main sewer line issue, because it lets us fix the actual problem instead of just clearing it again next month. Call (530) 704-6989 to schedule.',
  },
  {
    question: 'Do you use chemicals, or will it harm my pipes or septic system?',
    answer:
      'We use mechanical power augers, not caustic chemical drain cleaners. Chemicals only mask the clog, can damage older pipes, and harm septic systems. Many properties on the rural edges of the Redding area — out toward Palo Cedro and Bella Vista — run on septic, so mechanical augering is the septic-safe way to actually remove the clog rather than push it down the line.',
  },
  {
    question: 'Are you a licensed plumber for drain and sewer work in Redding?',
    answer:
      'Yes. Topline Plumbing is a fully licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998, family owned and operated. We carry a 5.0 perfect rating on Google.',
  },
];

const services = [
  {
    title: 'Power Auger Drain Cleaning',
    body: 'Mechanical augering that removes the clog completely instead of pushing it further down the line — for kitchen sinks, bathroom drains, toilets, and main sewer lines.',
    items: [
      'Stubborn kitchen grease and food clogs',
      'Hair and soap scum in bathroom lines',
      'Main sewer line clearing',
      'No caustic chemicals — septic-safe',
    ],
  },
  {
    title: 'Sewer Camera Inspection',
    body: 'A camera down the line shows us exactly what is causing a recurring clog — root intrusion, a bellied or collapsed section, or scale inside aging galvanized drains.',
    items: [
      'Pinpoints the blockage location and cause',
      'Identifies root intrusion or pipe damage',
      'Smart for recurring or main-line clogs',
      'Detailed look before any larger repair',
    ],
  },
  {
    title: 'Same-Day Service',
    body: 'Redding is home base, so urgent clogs get a fast, fully stocked truck during business hours — with the price quoted before we start.',
    items: [
      'Typical 30–60 minute Redding response',
      'Same-day scheduling during business hours',
      'Upfront pricing before we start',
      'Most clogs cleared on the first visit',
    ],
  },
];

export default function DrainCleaningReddingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Drain Cleaning Redding',
            url: 'https://toplineplumbingco.com/drain-cleaning-redding',
          },
        ]}
      />
      <FAQSchema faqs={drainFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Redding's Drain &amp; Sewer Specialists · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Drain Cleaning in Redding, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) drain cleaning service serving Redding, CA.
              We clear tough clogs and backed-up sewer lines with mechanical power augers — not
              chemicals — and offer same-day service during business hours (Mon–Fri 8a–4:30p) with
              upfront pricing. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Same-day clog removal</span> during business hours
              · Mon–Fri 8a–4:30p
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
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Typical Redding response 30–60 minutes during
              business hours
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

      {/* Don't reach for chemicals */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-3">
            Slow drain? Backed-up sink? Sewage smell?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Don’t reach for the chemical drain cleaner — it only masks the problem and can damage older
            pipes. We use professional mechanical power augers to clear the clog at the source. We
            don’t just push it further down the line; we remove it completely.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              How We Clear Drains in Redding
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a single slow fixture to a fully backed-up main line, we diagnose it, quote it
              upfront, and clear it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-8 flex flex-col"
              >
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">{svc.title}</h3>
                <p className="text-gray-700 mb-5 leading-relaxed">{svc.body}</p>
                <ul className="space-y-2 text-gray-700 mt-auto">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Redding Homes Call Topline for Drain Cleaning
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Redding is home base, and after 25-plus years we have cleared drains in nearly every
              neighborhood — Enterprise, East Redding, Mary Lake, the Garden Tract, Quartz Hill, and
              out toward Shasta Dam. Kitchen and main-line drain cleaning is one of our most common
              Redding calls, and a big part of that is the age and mix of the housing stock. Post-war
              mid-century homes here were built with galvanized supply and older drain lines that
              narrow over the decades as scale, grease, and debris build up — so they clog more easily
              and the clogs come back faster than in a newer PEX build out by Stillwater. The
              moderately hard supply delivered by the City of Redding Water Utility, blended roughly
              77% from the Sacramento River and Whiskeytown surface water and the rest from
              groundwater, leaves mineral scale that only adds to that buildup over the years.
            </p>
            <p>
              That is exactly why we use mechanical power augers instead of chemical cleaners. A
              caustic cleaner might open a pinhole through a grease plug for a day, but it does nothing
              for root intrusion or a line that has scaled half-closed — and it can eat at an old pipe
              that is already thin. Augering removes the blockage at the source. When a clog keeps
              coming back, we drop a sewer camera down the line to see whether it is roots, a bellied
              section, or just decades of buildup, so we fix the real problem instead of clearing it
              again next month.
            </p>
            <p>
              Not every Redding-area address is on city sewer, either. Out toward Palo Cedro and Bella
              Vista, many properties run on septic, where harsh chemical cleaners can damage the
              system. Mechanical augering is the septic-safe way to clear those lines. Wherever you
              are in the Redding area, we respond same-day during business hours and quote the job
              upfront before we start.
            </p>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Redding Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and family-run — not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Serving Redding Since 1998',
                body: 'Family owned and operated, with 3,000+ jobs across Shasta County. We know which Redding lines clog and why.',
              },
              {
                title: 'Augers, Not Chemicals',
                body: 'Mechanical power augering removes the clog at the source — septic-safe and pipe-safe, unlike caustic chemical cleaners.',
              },
              {
                title: 'Upfront Quote Before Work',
                body: "You see the full price before we start. No diagnostic surprises, no add-ons after the fact.",
              },
              {
                title: 'Camera Diagnosis Available',
                body: 'For recurring or main-line clogs, a sewer camera shows the real cause so we fix the problem instead of the symptom.',
              },
              {
                title: 'Same-Day During Business Hours',
                body: 'Redding is home base — typical on-site response is 30–60 minutes inside the city limits, Mon–Fri 8a–4:30p.',
              },
              {
                title: 'Licensed, Bonded & Insured',
                body: 'CSLB License #596557, with a 5.0 perfect rating on Google and workmanship that stands behind every job.',
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
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
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
            Trusted by Redding-Area Homeowners
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            5.0 perfect rating on Google · A real local family business
          </p>
          <a
            href="https://g.page/r/CTUWBxm42-YEEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Read all Google reviews →
          </a>
        </div>
      </section>

      {/* Related services + internal links */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Related Plumbing Services
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            A backed-up main line can become an emergency fast. Here is the rest of our Redding-area
            plumbing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/drain-cleaning"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">
                Drain Cleaning Service
              </h3>
              <p className="text-gray-700">Our full drain and sewer service overview and process.</p>
            </Link>
            <Link
              href="/emergency-plumber-redding"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">
                Emergency Plumber in Redding
              </h3>
              <p className="text-gray-700">
                Burst pipes, sewage backups, and floods — same-day response during business hours.
              </p>
            </Link>
            <Link
              href="/areas/redding"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">
                Redding Plumbing Hub
              </h3>
              <p className="text-gray-700">
                Everything we do across Redding — neighborhoods, services, and local FAQs.
              </p>
            </Link>
          </div>

          <p className="text-center text-gray-600 mt-10 mb-4">
            Need drain cleaning in a nearby town?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/drain-cleaning-anderson"
              className="bg-white border border-gray-200 rounded-lg px-5 py-3 text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Drain Cleaning in Anderson →
            </Link>
            <Link
              href="/drain-cleaning-shasta-lake"
              className="bg-white border border-gray-200 rounded-lg px-5 py-3 text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Drain Cleaning in Shasta Lake →
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Drain &amp; Sewer Service Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day service in the Redding city limits during business hours. We cover the
            surrounding towns daily.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-3xl mx-auto">
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
        faqs={drainFAQs}
        title="Drain Cleaning FAQ — Redding, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Clogged Drain in Redding? Let's Clear It Today.
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Call during business hours for same-day drain cleaning, typically on-site in 30–60 minutes
            in the Redding city limits. Power augers, camera diagnosis, and upfront pricing.
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
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Licensed, bonded, insured · Upfront pricing, no
            surprise charges
          </p>
        </div>
      </section>
    </>
  );
}
