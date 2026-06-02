import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/drain-cleaning-red-bluff#service',
  name: 'Drain Cleaning in Red Bluff, CA',
  serviceType: 'Drain Cleaning',
  description:
    'Professional drain cleaning in Red Bluff, CA with upfront pricing. Mechanical power augering, sewer camera inspection, and main line clearing — including the cast iron and galvanized drains common in Red Bluff historic homes. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/drain-cleaning-red-bluff',
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
          name: 'Cast Iron & Galvanized Drain Service',
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
  '@id': 'https://toplineplumbingco.com/drain-cleaning-red-bluff#webpage',
  url: 'https://toplineplumbingco.com/drain-cleaning-red-bluff',
  name: 'Drain Cleaning in Red Bluff, CA — Same-Day Service',
  description:
    "Red Bluff drain cleaning with upfront pricing. Power augering, camera inspection, and main sewer line clearing — built for Red Bluff's older cast iron and galvanized drains. Licensed CSLB #596557, serving the area since 1998.",
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/drain-cleaning-red-bluff#service' },
};

export const metadata: Metadata = {
  title: 'Drain Cleaning Red Bluff, CA | Topline Plumbing',
  description:
    "Drain cleaning in Red Bluff, CA. Power augering, sewer camera inspection, and main line clearing with upfront pricing. Call (530) 704-6989.",
  alternates: {
    canonical: 'https://toplineplumbingco.com/drain-cleaning-red-bluff',
  },
  openGraph: {
    title: 'Drain Cleaning Red Bluff, CA | Topline Plumbing',
    description:
      "Drain cleaning in Red Bluff, CA. Power augering, sewer camera inspection, and main line clearing with upfront pricing. Call (530) 704-6989.",
    url: 'https://toplineplumbingco.com/drain-cleaning-red-bluff',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Drain Cleaning in Red Bluff, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const drainFAQs = [
  {
    question: 'How much does drain cleaning cost in Red Bluff, CA?',
    answer:
      'Drain cleaning cost varies by the job — a single fixture clog is different from a main sewer line clog or one that needs a camera inspection. We always quote the price upfront before starting work, with no surprise charges. Call (530) 704-6989 for a free estimate with any service.',
  },
  {
    question: 'How fast can you get to Red Bluff for a drain or sewer backup?',
    answer:
      'During business hours (Mon–Fri 8a–4:30p), typical arrival in Red Bluff is 45–75 minutes — usually under an hour. Red Bluff is 30 miles south of Redding on I-5 and we dispatch from the Redding area. Call (530) 704-6989 to check same-day availability.',
  },
  {
    question: 'How do I know if I have a main sewer line clog?',
    answer:
      'Signs of a main sewer line clog include multiple drains backing up at once, gurgling from toilets when you run a sink, water rising in the shower when you flush, or sewage smells from floor drains. Call (530) 704-6989 — this can become an emergency fast. We can run a camera to locate the exact blockage.',
  },
  {
    question: 'Do you clean cast iron and galvanized drains in older Red Bluff homes?',
    answer:
      "Yes — this is core work for us in Red Bluff. The 1850s historic downtown has some of the oldest housing stock we service, with original cast iron drains, galvanized supply, and partial copper retrofits often layered in one house. Old cast iron scales and corrodes internally, which catches debris and causes recurring clogs. We clear it mechanically and can camera-inspect to tell you whether the line needs cleaning or replacement.",
  },
  {
    question: 'Why do drains in older Red Bluff homes clog repeatedly?',
    answer:
      'In pre-1920 homes, the cast iron drain line itself is usually the problem. Decades of internal corrosion and scale build a rough surface that grabs grease, hair, and debris, so the clog comes back no matter how many times you snake it. A power auger clears the current blockage; a camera inspection shows whether the pipe interior has degraded enough to warrant replacing a section.',
  },
  {
    question: 'Can you clean drains with a camera inspection?',
    answer:
      'Yes. We offer sewer camera inspections to locate the exact position and cause of a blockage — root intrusion, pipe damage, scale buildup, or a collapse. This is especially useful for recurring clogs and for the older mains common in Red Bluff and Tehama County. Call (530) 704-6989 to schedule.',
  },
  {
    question: 'Do you handle drains on ranch properties with septic west of Red Bluff?',
    answer:
      'Yes. Ranch properties west of town run on wells and septic with longer service lines. We clear drains and clogs on these properties and take care around septic systems — we will not push a clog into a septic line or use harsh chemical cleaners that disrupt a septic tank. Mechanical augering removes the clog without harming the system.',
  },
  {
    question: 'Is Topline Plumbing licensed to work in Red Bluff and Tehama County?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area and Tehama County since 1998. Family owned and operated, with a 5.0 perfect rating on Google.',
  },
];

export default function DrainCleaningRedBluffPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Drain Cleaning Red Bluff',
            url: 'https://toplineplumbingco.com/drain-cleaning-red-bluff',
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
              Serving Red Bluff &amp; Tehama County · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Drain Cleaning in Red Bluff, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) drain cleaning service serving Red Bluff,
              CA. We offer same-day service during business hours (Mon–Fri 8a–4:30p) with upfront
              pricing — power augering, main sewer line clearing, and camera inspection. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Mon–Fri 8a–4:30p →</span> same-day drain service
              in Red Bluff when you call early
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
              Free estimate with any service · Upfront pricing · Mon–Fri 8:00a–4:30p · CSLB #596557
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

      {/* Service sections */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              How We Clear Red Bluff Drains
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t reach for the chemical drain cleaner — it only masks the problem. We remove
              the clog completely and tell you what caused it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-900 text-white rounded-xl border-2 border-primary p-6 shadow-md">
              <h3 className="text-xl font-heading font-bold text-white mb-4">Power Auger Cleaning</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Mechanical augering for stubborn clogs</li>
                <li>• Sinks, toilets, and shower drains</li>
                <li>• Main sewer line cleaning</li>
                <li>• Clog removed completely, not pushed down</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Sewer Camera Inspection
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Camera inspection to locate blockages</li>
                <li>• Identify root intrusion or pipe damage</li>
                <li>• Spot corroded cast iron in older homes</li>
                <li>• Detailed video report</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">Same-Day Service</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fast response for urgent clogs</li>
                <li>• Same-day scheduling during business hours</li>
                <li>• Upfront pricing before we start</li>
                <li>• Septic-safe — no harsh chemical cleaners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
              Why Red Bluff Homes Call Topline for Drain Cleaning
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Red Bluff is the Tehama County seat, about 30 miles south of Redding on I-5, and its
                historic downtown dates to the 1850s — some of the oldest housing stock we service
                anywhere. That history shows up directly in the drains. Pre-1920 homes frequently
                layer original cast iron drains, galvanized supply, partial copper retrofits, and
                modern fixtures all in the same house. The cast iron is usually the culprit behind
                recurring clogs: decades of internal corrosion and scale leave a rough, narrowed pipe
                wall that grabs grease, hair, and debris no matter how many times the line gets
                snaked.
              </p>
              <p>
                That is why we do more than push the clog down and leave. We clear it mechanically
                with a power auger, then offer a camera inspection to show you what is actually
                happening inside the line — whether it just needed cleaning, or whether a corroded
                cast iron section is degraded enough to warrant replacing. Cast iron drain
                replacements and galvanized-to-copper repipe sections are among the most common calls
                we get from Red Bluff for exactly this reason.
              </p>
              <p>
                In town, the City of Red Bluff Water Department supplies homes entirely from deep
                municipal groundwater wells, and that well-sourced supply carries a mineral content
                worth noting for fixtures and water heaters on the lines we clear. Outside the
                historic core, ranch properties west of town run on wells and septic with longer
                service lines. On those homes we keep it septic-safe: mechanical augering only,
                never harsh chemical drain cleaners that disrupt a septic tank. We have served this
                region since 1998 — typical Red Bluff arrival is 45–75 minutes during business hours,
                usually under the hour, with the price quoted upfront before any work starts.
              </p>
            </div>
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
              Local, licensed, and built for the older drain lines that define Red Bluff homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'We Remove the Clog, Not Just Move It',
                body: 'Mechanical power augering clears the blockage completely instead of pushing it further down the line, where it backs up again a week later.',
              },
              {
                title: 'Built for Old Cast Iron Drains',
                body: "Red Bluff's historic homes are full of corroded cast iron and galvanized lines. We know how these pipes clog and when a clean fixes it versus when a section needs replacing.",
              },
              {
                title: 'Camera Inspection Available',
                body: 'For recurring clogs and older mains, we run a sewer camera to locate the exact cause — root intrusion, scale, or pipe damage — and give you a clear video report.',
              },
              {
                title: 'Septic-Safe on Ranch Properties',
                body: 'On well-and-septic ranch homes west of town, we clear drains mechanically and avoid harsh chemical cleaners that disrupt a septic system.',
              },
              {
                title: 'Upfront Pricing, No Surprises',
                body: 'You see the quote before we start. A single fixture clog and a main sewer line are priced differently, but you always know the number first.',
              },
              {
                title: 'Licensed, Bonded & Insured',
                body: 'CSLB License #596557, serving the Redding area and Tehama County since 1998. Family owned and operated with a 5.0 perfect Google rating.',
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
            Trusted by Northern California Homeowners
          </h2>
          <p className="text-lg text-gray-600 mb-6">5.0 perfect rating on Google</p>
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
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-6 text-center">
            Related Plumbing Help in Red Bluff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link
              href="/services/drain-cleaning"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Drain Cleaning</div>
              <div className="text-sm text-gray-600">Our full drain & sewer service overview</div>
            </Link>
            <Link
              href="/emergency-plumber-red-bluff"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Emergency Plumber Red Bluff</div>
              <div className="text-sm text-gray-600">Same-day response for backups & floods</div>
            </Link>
            <Link
              href="/areas/red-bluff"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Red Bluff Plumbing</div>
              <div className="text-sm text-gray-600">All services for Red Bluff & Tehama County</div>
            </Link>
            <Link
              href="/drain-cleaning-redding"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Drain Cleaning Redding</div>
              <div className="text-sm text-gray-600">Drain & sewer cleaning in Redding</div>
            </Link>
            <Link
              href="/drain-cleaning-anderson"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Drain Cleaning Anderson</div>
              <div className="text-sm text-gray-600">Drain & sewer cleaning in Anderson</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Drain Cleaning Across Our Service Area
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day service in city limits during business hours. Red Bluff and outlying addresses
            typically arrive within 45–75 minutes.
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
        title="Drain Cleaning FAQ — Red Bluff, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Clogged Drain in Red Bluff?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Call now for same-day drain cleaning during business hours. Licensed, local, and upfront
            about pricing — we remove the clog, not just move it.
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
