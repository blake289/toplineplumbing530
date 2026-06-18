import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/drain-cleaning-bella-vista#service',
  name: 'Drain Cleaning in Bella Vista, CA',
  serviceType: 'Drain Cleaning',
  description:
    'Professional drain cleaning in Bella Vista, CA: septic-safe mechanical power augering for kitchen, bathroom, and main lines, sewer camera inspection, and same-day clog removal during business hours. Licensed plumber CSLB #596557, serving the Redding area since 1998. Upfront pricing, no surprise charges.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/drain-cleaning-bella-vista',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Bella Vista' },
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
          name: 'Mechanical Power Auger Drain Cleaning',
          serviceType: 'Drain Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Septic-Safe Main Line Clearing',
          serviceType: 'Sewer Line Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer Camera Inspection',
          serviceType: 'Sewer Inspection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kitchen, Bathroom & Shower Drain Clearing',
          serviceType: 'Drain Cleaning',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/drain-cleaning-bella-vista#webpage',
  url: 'https://toplineplumbingco.com/drain-cleaning-bella-vista',
  name: 'Drain Cleaning in Bella Vista, CA — Septic-Safe & Same-Day',
  description:
    'Septic-safe drain cleaning in Bella Vista, CA. Power augering, sewer camera inspection, and same-day clog removal. Licensed since 1998. Call (530) 704-6989.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/drain-cleaning-bella-vista#service' },
};

export const metadata: Metadata = {
  title: 'Drain Cleaning Bella Vista, CA | Topline Plumbing',
  description:
    'Septic-safe drain cleaning in Bella Vista, CA. Power augering, sewer camera inspection, and same-day clog removal. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/drain-cleaning-bella-vista',
  },
  openGraph: {
    title: 'Drain Cleaning Bella Vista, CA | Topline Plumbing',
    description:
      'Septic-safe drain cleaning in Bella Vista, CA. Mechanical power augering, sewer camera inspection, and same-day clog removal during business hours. Licensed since 1998.',
    url: 'https://toplineplumbingco.com/drain-cleaning-bella-vista',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Drain Cleaning in Bella Vista, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const drainFAQs = [
  {
    question: 'How much does drain cleaning cost in Bella Vista, CA?',
    answer:
      'Drain cleaning cost varies by job — a single fixture clog is different from a main line clog or one that needs a camera inspection. We always quote the price upfront before any work starts, with no surprise charges. Call (530) 704-6989 for a free estimate with any service.',
  },
  {
    question: 'Is your drain cleaning safe for my septic system?',
    answer:
      'Yes. Many Bella Vista homes run on septic, so we clear drains with mechanical power augering rather than harsh chemical drain cleaners. Chemicals can damage the bacterial balance a septic system depends on — and they only mask the clog anyway. Augering physically removes the blockage and protects your tank and leach field.',
  },
  {
    question: 'How fast can you clear a drain in Bella Vista?',
    answer:
      'We offer same-day drain cleaning in Bella Vista during business hours (Mon–Fri 8a–4:30p). It sits about 15 miles northeast of Redding and we serve it daily, so typical arrival is 30–60 minutes. Call (530) 704-6989 to check availability.',
  },
  {
    question: 'How do I know if I have a main sewer line clog?',
    answer:
      'Signs of a main line clog include multiple drains backing up at once, gurgling toilets when you run the sink, water rising in the shower when you flush, or sewage smells from floor drains. On a septic property this can also mean the tank or line to the tank needs attention. Call (530) 704-6989 — we can camera the line to find the exact cause before clearing it.',
  },
  {
    question: 'Can you inspect the drain line with a camera?',
    answer:
      'Yes. We run sewer camera inspections to locate the exact position and cause of a blockage — root intrusion, a collapsed section, grease, or a pipe-material transition. This is especially useful on older Bella Vista properties where original 1970s–1980s plumbing meets newer remodel work. Call (530) 704-6989 to schedule.',
  },
  {
    question: 'What causes recurring clogs in rural Bella Vista homes?',
    answer:
      'Out here the usual culprits are root intrusion on long buried lines, grease and food buildup in kitchen drains, and rough spots where old galvanized pipe transitions to newer PEX or ABS and catches debris. Chemical cleaners only mask these — a camera inspection plus mechanical augering finds and removes the real cause.',
  },
  {
    question: 'Do you handle outbuildings, shops, and guest houses?',
    answer:
      'Yes. Bella Vista properties often have outbuildings, shops, and second dwellings with their own drain runs back to the septic system. We clear those lines the same way we do the main house — mechanical augering, septic-safe, with the price quoted upfront.',
  },
  {
    question: 'Is Topline Plumbing licensed and insured?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We are family owned and operated, with a 5.0 perfect rating on Google.',
  },
];

export default function DrainCleaningBellaVistaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Drain Cleaning Bella Vista',
            url: 'https://toplineplumbingco.com/drain-cleaning-bella-vista',
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
              Bella Vista &amp; Rural Shasta County · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Drain Cleaning in Bella Vista, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) drain cleaning service serving Bella Vista,
              CA. We clear clogs with septic-safe mechanical augering — not harsh chemicals — and offer
              same-day service during business hours (Mon–Fri 8a–4:30p) with upfront pricing. Call
              (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Septic-safe &amp; same-day →</span> typically in
              Bella Vista within 30–60 minutes
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
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Same-day service in Bella Vista within 30–60 minutes
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
              <div className="text-sm md:text-base text-gray-600 mt-1">Owned &amp; Operated</div>
            </div>
          </div>
        </div>
      </section>

      {/* How we clear drains */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              How We Clear Drains in Bella Vista
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just push the clog further down the line — we remove it. And because many homes
              out here are on septic, every method we use is septic-safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Septic-Safe Power Augering
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mechanical augering for stubborn clogs</li>
                <li>• Kitchen, bathroom, and shower drains</li>
                <li>• Main line and septic-feed line clearing</li>
                <li>• No harsh chemicals that harm your septic system</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Sewer Camera Inspection
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Camera inspection to locate the blockage</li>
                <li>• Identify root intrusion or pipe damage</li>
                <li>• Spot old-to-new pipe-material transitions</li>
                <li>• Detailed video so you see the real cause</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Same-Day Service
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fast response for urgent clogs</li>
                <li>• Same-day scheduling during business hours</li>
                <li>• Upfront pricing before we start</li>
                <li>• Clears for the main house and outbuildings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Bella Vista Homes Call Topline for Drain Cleaning
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Bella Vista is rural Shasta County — large parcels, ranchettes, and homes spread across
              the foothills east of Redding. Wells, septic, and outbuildings are the norm rather than
              the exception — much of the area gets its supply from the Bella Vista Water District,
              which pulls from Sacramento River surface water plus local wells, while some outlying
              properties draw from private wells of their own. Whatever feeds the tap, the drain side
              still runs to septic out here, and that changes how drains should be cleared. The chemical drain cleaner
              under your sink is the wrong tool out here: it only masks the clog, and it can throw off
              the bacterial balance a septic system needs to work. We clear drains mechanically, which
              physically removes the blockage and protects your tank and leach field.
            </p>
            <p>
              Recurring clogs on Bella Vista properties usually trace back to one of a few causes. Long
              buried lines invite root intrusion. Kitchen drains build up grease and food. And many
              homes run a mix of original 1970s–1980s plumbing alongside additions and remodels — so
              debris snags at the rough spot where old galvanized pipe meets newer PEX or ABS. A camera
              inspection finds the exact problem, and mechanical augering removes it, instead of you
              calling back about the same drain every few months.
            </p>
            <p>
              We also clear the lines most in-town plumbers don't think about: outbuildings, shops, and
              guest houses that run their own drains back to the septic system. Whatever the fixture, we
              quote the price upfront before we start, we leave the work clean, and we tell you straight
              whether you've got a one-time clog or a line that's going to keep failing until it's
              repaired. That's the honest read from a licensed plumber who has worked these foothills
              since 1998.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services/drain-cleaning"
              className="text-primary font-semibold hover:underline"
            >
              See all drain cleaning services →
            </Link>
            <Link
              href="/areas/bella-vista"
              className="text-primary font-semibold hover:underline"
            >
              Plumbing in Bella Vista →
            </Link>
            <Link
              href="/emergency-plumber-bella-vista"
              className="text-primary font-semibold hover:underline"
            >
              Emergency plumber in Bella Vista →
            </Link>
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
              Local, licensed, and comfortable on rural well-and-septic properties — not a corporate
              dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Septic-Safe Methods',
                body: 'Mechanical augering removes the clog without the harsh chemicals that damage a septic system. The right approach for Bella Vista properties.',
              },
              {
                title: 'We Remove the Clog',
                body: "We don't just push the blockage further down the line. We auger it out completely and, when it keeps coming back, camera the line to find why.",
              },
              {
                title: 'Same-Day During Business Hours',
                body: 'Call during business hours (Mon–Fri 8a–4:30p) and we schedule Bella Vista drain work same-day, typically arriving within 30–60 minutes.',
              },
              {
                title: 'Camera Diagnostics',
                body: 'For recurring clogs we run a sewer camera to find root intrusion, pipe damage, or material transitions — so you fix the cause, not the symptom.',
              },
              {
                title: 'Upfront Quote Before Work',
                body: "You see the full price before we start. No surprise charges, and an honest read on whether it's a one-time clog or a line that needs repair.",
              },
              {
                title: 'Licensed Since 1998',
                body: 'CSLB #596557, licensed, bonded, and insured, family owned and operated, with a 5.0 perfect rating on Google and 3,000+ jobs since 1998.',
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
          <div className="text-center mb-10">
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
              Trusted by Shasta County Homeowners
            </h2>
            <p className="text-lg text-gray-600">5.0 perfect rating on Google · Every review counts</p>
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

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Drain Cleaning Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day service during business hours across Redding and the surrounding foothill
            communities. Need the same service nearby?{' '}
            <Link href="/drain-cleaning-redding" className="text-primary font-semibold hover:underline">
              Drain cleaning in Redding
            </Link>{' '}
            or{' '}
            <Link href="/drain-cleaning-palo-cedro" className="text-primary font-semibold hover:underline">
              Palo Cedro
            </Link>
            .
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
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
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
        title="Drain Cleaning FAQ — Bella Vista, CA"
        background="gray"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Clogged Drain in Bella Vista?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Septic-safe, licensed, and same-day during business hours. Call now and we will clear it
            right — no chemicals, no surprise charges.
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
