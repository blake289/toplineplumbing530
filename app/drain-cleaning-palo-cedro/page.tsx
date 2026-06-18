import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/drain-cleaning-palo-cedro#service',
  name: 'Drain Cleaning in Palo Cedro, CA',
  serviceType: 'Drain Cleaning',
  description:
    'Septic-safe drain cleaning in Palo Cedro, CA. Mechanical power augering (never caustic chemicals that harm septic systems), sewer camera inspection, and same-day clog removal during business hours (Mon–Fri 8a–4:30p). Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/drain-cleaning-palo-cedro',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Palo Cedro' },
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
          name: 'Septic-Safe Mechanical Power Augering',
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
          name: 'Sewer Camera Inspection',
          serviceType: 'Sewer Camera Inspection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kitchen, Bath & Fixture Drain Clearing',
          serviceType: 'Drain Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Outbuilding & Yard Line Drain Clearing',
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
  '@id': 'https://toplineplumbingco.com/drain-cleaning-palo-cedro#webpage',
  url: 'https://toplineplumbingco.com/drain-cleaning-palo-cedro',
  name: 'Drain Cleaning in Palo Cedro, CA — Septic-Safe Augering',
  description:
    'Septic-safe drain cleaning in Palo Cedro, CA. Mechanical power augering, sewer camera inspection, and same-day service from a licensed local plumber since 1998.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/drain-cleaning-palo-cedro#service' },
};

export const metadata: Metadata = {
  title: 'Drain Cleaning Palo Cedro, CA | Topline Plumbing',
  description:
    'Septic-safe drain cleaning in Palo Cedro, CA. Power augering, sewer camera inspection, and same-day service. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/drain-cleaning-palo-cedro',
  },
  openGraph: {
    title: 'Drain Cleaning Palo Cedro, CA | Topline Plumbing',
    description:
      'Septic-safe drain cleaning in Palo Cedro, CA. Power augering, sewer camera inspection, and same-day service. Licensed since 1998. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/drain-cleaning-palo-cedro',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Drain Cleaning in Palo Cedro, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const drainFAQs = [
  {
    question: 'Is your drain cleaning safe for septic systems in Palo Cedro?',
    answer:
      "Yes — and it's the whole reason rural Palo Cedro homes call us. Most properties here are on septic, not city sewer, and harsh chemical drain cleaners can damage the bacterial balance a septic system depends on. We clear clogs with mechanical power augering, never caustics. The auger physically removes the blockage instead of dumping chemicals into your tank and leach field.",
  },
  {
    question: 'How much does drain cleaning cost in Palo Cedro, CA?',
    answer:
      "Cost varies by the job — a single fixture clog is different from a main line clog or one that needs a camera inspection. We always quote the price upfront before starting work, with no surprise charges. Call (530) 704-6989 for a free estimate with any service.",
  },
  {
    question: 'How fast can you get to Palo Cedro for a clogged drain?',
    answer:
      "During business hours (Mon–Fri 8:00a–4:30p), Topline can typically reach most Palo Cedro properties in 30–60 minutes — it's about 15 minutes east of our Redding base on Highway 44, and we cover it daily. Call (530) 704-6989 to check same-day availability.",
  },
  {
    question: 'Why shouldn’t I use chemical drain cleaner on a septic system?',
    answer:
      "Chemical drain cleaners only mask the problem — they don't remove the clog completely — and on a septic system they're actively harmful. The caustic chemicals kill the bacteria your septic tank needs to break down waste, which can lead to backups and expensive system damage down the line. Professional mechanical augering removes the clog entirely without putting anything corrosive into your tank.",
  },
  {
    question: 'How do I know if I have a main sewer or septic line clog?',
    answer:
      'Warning signs include multiple drains backing up at once, gurgling toilets when you run a sink, water rising in the shower when you flush, or sewage smell from floor drains. On a septic property, those same symptoms can also point to a full or failing tank. We run a sewer camera inspection to find exactly where and what the blockage is before we touch it. Call (530) 704-6989.',
  },
  {
    question: 'Can you inspect the line with a camera?',
    answer:
      'Yes. We offer sewer camera inspections to locate the exact position and cause of a blockage — root intrusion, pipe damage, grease buildup, or where a line ties into the septic system. It’s especially useful on rural Palo Cedro properties with longer outdoor runs and for recurring clogs. Call (530) 704-6989 to schedule.',
  },
  {
    question: 'Do you offer same-day drain cleaning in Palo Cedro?',
    answer:
      'Yes. Topline offers same-day drain cleaning in Palo Cedro during business hours (Mon–Fri 8:00a–4:30p). We keep fully stocked service trucks and can respond quickly to urgent clogs. Call (530) 704-6989 to check availability.',
  },
  {
    question: 'Is Topline Plumbing licensed for drain work in Palo Cedro?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We are family owned and operated and have completed 3,000+ jobs across Shasta County, including septic-connected properties throughout Palo Cedro.',
  },
];

export default function DrainCleaningPaloCedroPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Drain Cleaning Palo Cedro',
            url: 'https://toplineplumbingco.com/drain-cleaning-palo-cedro',
          },
        ]}
      />
      <FAQSchema faqs={drainFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center lg:text-left">
          <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
            Serving Palo Cedro · Septic-Safe · Licensed Since 1998
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
            Drain Cleaning in Palo Cedro, CA
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-3xl">
            Topline Plumbing is a licensed (CSLB #596557) drain cleaning service serving Palo Cedro,
            CA. We use septic-safe mechanical power augering — never caustic chemicals — with
            same-day service during business hours (Mon–Fri 8a–4:30p) and upfront pricing. Call
            (530) 704-6989.
          </p>

          <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
            <span className="text-primary-light">Septic-safe mechanical augering →</span> we remove
            the clog, not just mask it
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
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Typical Palo Cedro response 30–60 minutes
          </p>
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

      {/* Septic-safe callout */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-white rounded-2xl border-2 border-primary p-8 shadow-sm">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Built for Septic Properties
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-3">
              Septic-Safe Drain Cleaning — No Caustic Chemicals
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Most Palo Cedro homes run on septic, not city sewer. Chemical drain cleaners kill the
              bacteria a septic system needs and can lead to backups and costly system damage. We
              clear every clog with mechanical power augering that physically removes the blockage —
              nothing corrosive goes into your tank or leach field.
            </p>
          </div>
        </div>
      </section>

      {/* Service-specific sections */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              How We Clear Drains in Palo Cedro
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don&apos;t just push the clog further down the line — we remove it completely, then
              show you what caused it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Septic-Safe Power Augering
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mechanical augering for stubborn clogs</li>
                <li>• Sinks, toilets, and shower drains</li>
                <li>• Main and septic-connected lines</li>
                <li>• No caustic chemicals — septic-safe</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Sewer Camera Inspection
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Locate the exact blockage</li>
                <li>• Identify root intrusion or pipe damage</li>
                <li>• Check longer rural outdoor runs</li>
                <li>• Detailed video report</li>
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
                <li>• Yard hydrant and outbuilding lines too</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Palo Cedro Homes Call Topline for Drain Cleaning
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Palo Cedro is the unincorporated community just east of Redding — large-lot
              residential, horse properties, and small ranches. There&apos;s no one water utility out
              here: depending on the property, your incoming water is either delivered by the Bella
              Vista Water District or drawn from a private well — and well water in particular often
              runs harder, leaving more mineral scale inside drain lines for grease and debris to grab
              onto — and it&apos;s the kind of water where a{' '}
              <Link href="/water-softener-redding" className="text-primary font-semibold hover:underline">
                water softener
              </Link>{' '}
              can be worth it. Most homes also run on septic rather than city sewer, and that single fact changes
              how drains should be cleaned. We treat these jobs differently than in-town work, and
              septic is the biggest reason.
            </p>
            <p>
              Septic-connected homes need careful drain handling: the harsh chemical cleaners sold at
              the hardware store, and the grease that builds up in kitchen lines, can both damage the
              system. That&apos;s why we use mechanical augering, not caustics — the auger removes the
              clog physically and leaves the bacterial balance in your tank intact. It&apos;s the
              difference between fixing the problem and quietly creating a much more expensive one.
            </p>
            <p>
              Rural Palo Cedro properties also add complexity suburban Redding jobs don&apos;t have —
              outbuildings, barns, livestock waterers, irrigation, and yard hydrants, often connected
              by longer runs than an in-town home. When a clog is recurring or buried in a long
              outdoor line, we run a sewer camera to find exactly where and what it is before we
              touch it, so you&apos;re not paying for guesswork.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services/drain-cleaning"
              className="text-primary font-semibold hover:underline"
            >
              See our full drain cleaning service →
            </Link>
            <Link href="/areas/palo-cedro" className="text-primary font-semibold hover:underline">
              About our Palo Cedro service area →
            </Link>
            <Link
              href="/emergency-plumber-palo-cedro"
              className="text-primary font-semibold hover:underline"
            >
              Emergency plumber in Palo Cedro →
            </Link>
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
              Local, licensed, and built for rural well-and-septic properties — not a corporate
              dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Septic-Safe Methods',
                body: 'We clear clogs with mechanical augering, never caustic chemicals that damage your septic tank and leach field.',
              },
              {
                title: 'We Remove the Clog',
                body: "We don't push the blockage further down the line — the auger pulls it out completely so it doesn't come right back.",
              },
              {
                title: 'Camera-Backed Diagnosis',
                body: 'For recurring clogs and long rural runs, a sewer camera shows the exact cause before we start — no guesswork.',
              },
              {
                title: 'Upfront Pricing',
                body: 'You see the quote before we start. Free estimate with any service, no surprise charges.',
              },
              {
                title: 'Same-Day, Mon–Fri',
                body: 'Roughly 30–60 minutes out to Palo Cedro from our Redding shop during business hours.',
              },
              {
                title: 'Licensed Since 1998',
                body: 'CSLB #596557, family owned and operated, 3,000+ jobs across Shasta County — including septic-connected Palo Cedro homes.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
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
            Trusted by Palo Cedro-Area Homeowners
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            5.0 perfect rating on Google · Every review counts
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

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Drain Cleaning Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Septic-safe drain cleaning across Redding and the surrounding communities.
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
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-3">More drain cleaning pages nearby:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/drain-cleaning-redding"
                className="text-primary font-semibold hover:underline"
              >
                Drain Cleaning Redding →
              </Link>
              <Link
                href="/drain-cleaning-bella-vista"
                className="text-primary font-semibold hover:underline"
              >
                Drain Cleaning Bella Vista →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={drainFAQs}
        title="Drain Cleaning FAQ — Palo Cedro, CA"
        background="gray"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Clogged Drain in Palo Cedro?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Septic-safe, licensed, and same-day during business hours. Call now for current
            availability.
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
