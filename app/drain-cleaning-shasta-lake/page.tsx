import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/drain-cleaning-shasta-lake#service',
  name: 'Drain Cleaning in Shasta Lake, CA',
  serviceType: 'Drain Cleaning',
  description:
    'Professional drain cleaning in Shasta Lake, CA. Mechanical power augering, sewer camera inspection, and main line clearing with upfront pricing — including drain backups in seasonal cabins and lake-side rentals. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/drain-cleaning-shasta-lake',
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
    name: 'Drain Cleaning Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Power Auger Drain Cleaning',
          serviceType: 'Drain Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Main Sewer Line Clearing',
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
          name: 'Kitchen & Bathroom Drain Clearing',
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
  '@id': 'https://toplineplumbingco.com/drain-cleaning-shasta-lake#webpage',
  url: 'https://toplineplumbingco.com/drain-cleaning-shasta-lake',
  name: 'Drain Cleaning in Shasta Lake, CA — Same-Day Service',
  description:
    'Drain cleaning in Shasta Lake, CA. Power augering, sewer camera inspection, and main line clearing. Licensed since 1998. Call (530) 704-6989.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/drain-cleaning-shasta-lake#service' },
};

export const metadata: Metadata = {
  title: 'Same-Day Drain Cleaning in Shasta Lake, CA | Topline',
  description:
    'Drain cleaning in Shasta Lake, CA. Power augering, sewer camera inspection, and main line clearing. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/drain-cleaning-shasta-lake',
  },
  openGraph: {
    title: 'Same-Day Drain Cleaning in Shasta Lake, CA | Topline',
    description:
      'Drain cleaning in Shasta Lake, CA. Power augering, sewer camera inspection, and main line clearing with upfront pricing from a licensed local plumber since 1998.',
    url: 'https://toplineplumbingco.com/drain-cleaning-shasta-lake',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Drain Cleaning in Shasta Lake, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const drainFAQs = [
  {
    question: 'How much does drain cleaning cost in Shasta Lake, CA?',
    answer:
      'Drain cleaning cost varies by job — a single fixture clog is different from a main line clog or one that needs a camera inspection. We always quote the price upfront before starting work, with no surprise charges. Call (530) 704-6989 for a free estimate with any service.',
  },
  {
    question: 'How fast can you get to Shasta Lake for a clogged drain?',
    answer:
      'Shasta Lake is just 10 miles north of our Redding base on I-5, so during business hours (Mon–Fri 8a–4:30p) we typically reach Shasta Lake addresses in 30–60 minutes. We offer same-day drain cleaning when our schedule allows — call (530) 704-6989 to check availability.',
  },
  {
    question: 'What causes slow or clogged drains?',
    answer:
      'The most common causes are grease and food buildup in kitchen drains, hair and soap scum in bathroom drains, and root intrusion or debris in main sewer lines. Chemical drain cleaners only mask the problem and can damage pipes — professional mechanical augering removes the clog completely.',
  },
  {
    question: 'How do I know if I have a main sewer line clog?',
    answer:
      'Signs of a main sewer line clog include multiple drains backing up at once, gurgling toilets when you run the sink, water rising in the shower when you flush, or sewage smells from floor drains. Call (530) 704-6989 — this is an urgent issue, especially in an occupied home.',
  },
  {
    question: 'My Shasta Lake cabin or rental has a drain backup — can you help?',
    answer:
      'Yes. Drain backups in seasonal cabins and lake-side rentals are one of our most common Shasta Lake calls. Because these homes often sit unoccupied, a slow drain can become a full backup before anyone notices. We clear it with mechanical augering and can coordinate access if you are managing the property remotely. Call (530) 704-6989.',
  },
  {
    question: 'Can you inspect the drain with a sewer camera?',
    answer:
      'Yes. We run sewer camera inspections to locate the exact position and cause of a blockage — root intrusion, pipe damage, or grease buildup. This is especially useful for recurring clogs and for older homes near the original townsite (Project City, Central Valley) with aging lines. Call (530) 704-6989 to schedule.',
  },
  {
    question: 'Is Topline Plumbing licensed and insured?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — family owned and operated, serving the Redding area including Shasta Lake since 1998.',
  },
];

export default function DrainCleaningShastaLakePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Drain Cleaning Shasta Lake',
            url: 'https://toplineplumbingco.com/drain-cleaning-shasta-lake',
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
              Shasta Lake, CA · Licensed Local Plumber Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Drain Cleaning in Shasta Lake, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) drain cleaning service serving Shasta
              Lake, CA. We offer same-day service during business hours (Mon–Fri 8a–4:30p) with
              upfront pricing. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">We remove the clog →</span> we don't just push it
              further down the line
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

      {/* How we clear drains */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              How We Clear Drains in Shasta Lake
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't reach for the chemical drain cleaner — it only masks the problem. We remove the
              clog completely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Power Auger Cleaning
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mechanical augering for stubborn clogs</li>
                <li>• Sinks, toilets, and shower drains</li>
                <li>• Main sewer line cleaning</li>
                <li>• Clog removal guarantee</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Sewer Camera Inspection
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Camera inspection to locate blockages</li>
                <li>• Identify root intrusion or pipe damage</li>
                <li>• Best for recurring clogs and older lines</li>
                <li>• Detailed video report</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Same-Day Service</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fast response for urgent clogs</li>
                <li>• Same-day scheduling during business hours</li>
                <li>• Upfront pricing before we start</li>
                <li>• Satisfaction guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Shasta Lake Homes Call Topline for Drain Cleaning
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Shasta Lake — the city just north of Redding, anchored by Shasta Dam and the lake
              recreation economy — has two distinct kinds of homes, and they clog for different
              reasons. There are longtime residential properties for the dam and powerhouse
              workforce, and seasonal cabins and rentals on the lake side. We have cleared drains in
              both, and we treat them differently.
            </p>
            <p>
              Drain backups in seasonal cabins are one of our most common Shasta Lake calls. These
              homes often sit unoccupied for stretches, so a slow drain that nobody is using quietly
              builds up grease, scale, and debris until it becomes a full backup the next time
              guests arrive. We clear it the right way — with mechanical power augering that removes
              the clog completely instead of chemical cleaners that just push the problem downstream
              and eat at the pipe. If you manage a rental remotely, we can coordinate access so the
              line is clear before your next booking.
            </p>
            <p>
              On the residential side, the older housing near the original townsite — Project City
              and Central Valley — has aging supply and drain lines that are prone to root intrusion
              and buildup. These homes draw from the City of Shasta Lake&apos;s municipal water
              system, whose mineral content gradually scales the inside of drain and waste lines and
              gives buildup something to cling to. For recurring clogs in these homes, a sewer camera
              inspection tells us exactly what is happening underground so we fix the cause, not just
              the symptom.
              Whatever your drain is doing, call{' '}
              <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
                (530) 704-6989
              </a>{' '}
              for an upfront quote before any work starts.
            </p>
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
              Local, licensed, and thorough — we remove the clog, we don't just rinse past it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'We Remove the Clog',
                body: 'Mechanical power augering takes the clog out completely. No caustic chemicals that mask the problem and corrode your pipes from the inside.',
              },
              {
                title: 'Fast From Redding',
                body: 'We are based 10 minutes south in Redding. During business hours we typically reach Shasta Lake addresses in 30–60 minutes, with same-day scheduling when available.',
              },
              {
                title: 'Upfront Quote, Always',
                body: 'You see the price before we start — a single fixture clog, a main line clear, or a camera inspection. No surprise charges, and a free estimate with any service.',
              },
              {
                title: 'Camera-Backed Diagnosis',
                body: 'For recurring clogs and older lines, we run a sewer camera to find root intrusion or pipe damage, so we fix the cause instead of clearing the same drain twice.',
              },
              {
                title: 'Rental & Cabin Experience',
                body: 'We clear drain backups in unoccupied lake-side cabins and vacation rentals all the time, and can coordinate access when you manage the property from out of town.',
              },
              {
                title: 'Licensed, Bonded, Insured',
                body: 'CSLB License #596557. Family owned and operated, serving the Redding area including Shasta Lake since 1998 — over 3,000 jobs and a 5.0 perfect Google rating.',
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

      {/* Related services */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/drain-cleaning"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Drain Cleaning →
              </h3>
              <p className="text-gray-600 text-sm">
                How our power augering and camera inspection work across the Redding area.
              </p>
            </Link>
            <Link
              href="/emergency-plumber-shasta-lake"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Emergency Plumber in Shasta Lake →
              </h3>
              <p className="text-gray-600 text-sm">
                Same-day response for burst pipes, floods, and sewage backups.
              </p>
            </Link>
            <Link
              href="/areas/shasta-lake"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Plumber in Shasta Lake →
              </h3>
              <p className="text-gray-600 text-sm">
                All of our plumbing services for the Shasta Lake area.
              </p>
            </Link>
          </div>
          <div className="mt-6 text-center text-gray-600">
            <span className="font-semibold text-navy-900">Drain cleaning in a nearby city:</span>{' '}
            <Link href="/drain-cleaning-redding" className="text-primary font-semibold hover:underline">
              Redding
            </Link>{' '}
            ·{' '}
            <Link href="/drain-cleaning-anderson" className="text-primary font-semibold hover:underline">
              Anderson
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Drain Cleaning Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day service in city limits during business hours. We serve Shasta Lake and the
            surrounding communities.
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
        title="Drain Cleaning FAQ — Shasta Lake, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Clogged Drain in Shasta Lake?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and thorough. Call now for same-day drain cleaning during business
            hours.
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
