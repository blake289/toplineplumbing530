import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-redding#service',
  name: 'Emergency Plumber in Redding, CA',
  serviceType: 'Emergency Plumbing',
  description:
    'Same-day emergency plumbing in Redding, CA during business hours (Mon–Fri 8a–4:30p) — burst pipes, slab leaks, sewage backups, water heater floods, and gas-line problems. Typical on-site response 30–60 minutes in the Redding city limits. Licensed plumber CSLB #596557, serving the Redding area since 1998. Upfront pricing, no urgency upcharge.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/emergency-plumber-redding',
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
    name: 'Emergency Plumbing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Burst Pipe Repair',
          serviceType: 'Burst Pipe Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Slab Leak Detection & Repair',
          serviceType: 'Slab Leak Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewage Backup & Main Line Clearing',
          serviceType: 'Sewer Backup Cleanup',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Heater Flood Response',
          serviceType: 'Water Heater Emergency',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gas Line Leak Diagnosis',
          serviceType: 'Gas Line Service',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-redding#webpage',
  url: 'https://toplineplumbingco.com/emergency-plumber-redding',
  name: 'Emergency Plumber Redding, CA | Topline Plumbing',
  description:
    'Emergency plumber in Redding, CA. Same-day response for burst pipes, slab leaks, sewage backups, and floods during business hours. Licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/emergency-plumber-redding#service' },
};

export const metadata: Metadata = {
  title: 'Same-Day Emergency Plumber in Redding, CA | Topline',
  description:
    'Emergency plumber in Redding, CA. Same-day response for burst pipes, slab leaks, and sewage backups. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/emergency-plumber-redding',
  },
  openGraph: {
    title: 'Same-Day Emergency Plumber in Redding, CA | Topline',
    description:
      'Emergency plumber in Redding, CA. Same-day response for burst pipes, slab leaks, and sewage backups. Licensed since 1998. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/emergency-plumber-redding',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Emergency Plumber in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const emergencyFAQs = [
  {
    question: 'How fast can an emergency plumber get to my Redding home?',
    answer:
      'During business hours (Mon–Fri 8:00a–4:30p), typical on-site response for a Redding emergency is 30–60 minutes. Redding is our home base — we serve the entire city directly from our Redding location, from Enterprise and East Redding to Mary Lake, the Garden Tract, and Quartz Hill. Call (530) 704-6989 and we will tell you straight whether we can be there within the hour.',
  },
  {
    question: 'Is Topline Plumbing available 24/7 for emergencies in Redding?',
    answer:
      'No — and we will be honest about that. Topline handles emergency plumbing during business hours: Monday through Friday, 8:00a to 4:30p. For after-hours problems, text (530) 704-6989 and we respond first thing the next business day. For an active safety emergency outside our hours — a gas leak or a major flood — call 911 and shut off your main water valve until we open. We would rather tell you the truth than promise a midnight truck that is not coming.',
  },
  {
    question: 'How much does an emergency plumber cost in Redding, CA?',
    answer:
      'Every emergency call is quoted upfront before any work starts, and emergency work during our business hours is billed at our standard rate — no urgency upcharge. You will know the full cost before we lift a wrench. Call (530) 704-6989 for a free estimate with any service — no surprise charges.',
  },
  {
    question: 'What counts as a plumbing emergency?',
    answer:
      'Common Redding plumbing emergencies include burst or pinhole-leaking pipes (especially in older galvanized-supply homes), slab leaks in 1960s–1970s Enterprise and East Redding tract homes, complete loss of water, sewage backing up through floor drains, water heater tanks flooding the garage, and any gas-line problem. If water is actively damaging your home, treat it as an emergency and shut off the main valve.',
  },
  {
    question: 'What should I do while waiting for the plumber to arrive?',
    answer:
      'Shut off your main water valve to stop active flooding (it is usually in the garage, near a hose bib, or in the crawlspace). Turn off the water heater. Open faucets to drain the remaining water in the lines. Move valuables clear of the affected area and start soaking up water. If you smell gas, leave the building immediately and call your gas company before calling a plumber.',
  },
  {
    question: 'Why do older Redding homes have so many burst-pipe and slab-leak emergencies?',
    answer:
      'Many pre-1980 Redding homes still have galvanized steel supply pipes that are reaching end of life — corrosion, pinhole leaks, and pressure loss are the warning signs before a full burst. We also see frequent slab leaks in the older Enterprise and East Redding tract homes built over concrete slabs. Add Redding summers that push past 110°F and stress outdoor PVC supply lines, and emergencies cluster in the oldest housing stock. If your pipes are original, an upfront repipe estimate now is cheaper than the flood later.',
  },
  {
    question: 'Are you a licensed emergency plumber in Redding?',
    answer:
      'Yes. Topline Plumbing is a fully licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998, family owned and operated. We carry a 5.0 perfect rating on Google.',
  },
];

const beforeWeArrive = [
  {
    title: 'Burst Pipe or Active Leak',
    steps: [
      'Shut off your main water supply valve immediately',
      'Turn off the water heater (gas to pilot, or flip the breaker)',
      'Open faucets to drain the remaining water from the lines',
      'Move furniture, electronics, and valuables clear of the water',
    ],
  },
  {
    title: 'Sewage Backup',
    steps: [
      'Stop using all water in the house — every drain, every toilet',
      'Keep people and pets away from the affected area',
      'Call (530) 704-6989 right away during business hours',
      'Do not attempt DIY repairs or pour chemicals down the line',
    ],
  },
];

export default function EmergencyPlumberReddingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Emergency Plumber Redding',
            url: 'https://toplineplumbingco.com/emergency-plumber-redding',
          },
        ]}
      />
      <FAQSchema faqs={emergencyFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Redding's Emergency Plumbers · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Emergency Plumber in Redding, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) emergency plumber serving Redding, CA. We
              offer same-day service during business hours (Mon–Fri 8a–4:30p) with upfront pricing and
              a typical 30–60 minute on-site response in the Redding city limits. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Same-day response</span> during business hours ·
              Mon–Fri 8a–4:30p
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

      {/* Response promise */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Our Emergency Response Promise in Redding
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When a pipe bursts or a line backs up, you need a straight answer fast — not a corporate
              dispatch center. Here is exactly what you get from a local family plumber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Business-Hours Dispatch',
                body: 'Mon–Fri 8:00a–4:30p, a real person answers and dispatches. No phone tree, no overseas call center.',
              },
              {
                title: '30–60 Minute Response',
                body: 'Redding is home base. Typical on-site arrival is 30–60 minutes inside the city limits during business hours.',
              },
              {
                title: 'Upfront Pricing',
                body: 'Even in an emergency, you get the price before we start — and no urgency upcharge over our standard rate.',
              },
              {
                title: 'Fully Stocked Trucks',
                body: 'We carry parts for most repairs, so we can stop the leak and fix it on the spot instead of leaving you to wait on a part.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After-hours honesty box */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-navy-900 text-white rounded-xl p-8">
            <h2 className="text-2xl font-heading font-bold mb-3">
              After Hours or on the Weekend in Redding?
            </h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Topline is closed evenings and weekends — we will not pretend otherwise. If something
              fails outside our hours: shut off your main water valve to stop the flooding, and call
              911 if it is a safety issue (gas leak, major flood, or sewage backing up into living
              areas). Then text (530) 704-6989 and we will respond first thing the next business day.
            </p>
            <a
              href="tel:5307046989"
              className="inline-flex items-center gap-2 text-primary-light font-semibold hover:underline"
            >
              Text or call: (530) 704-6989 →
            </a>
          </div>
        </div>
      </section>

      {/* What to do before we arrive */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              What to Do Before We Arrive
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The first few minutes decide how much damage your home takes. Follow these steps while
              we are en route.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeWeArrive.map((block) => (
              <div
                key={block.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-8"
              >
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-5">{block.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {block.steps.map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-1"
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
                      <span className="leading-relaxed">{step}</span>
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
            Why Redding Homes Call Topline for Plumbing Emergencies
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Redding is home base, and after 25-plus years we have worked on plumbing systems in
              nearly every neighborhood — Enterprise, East Redding, Mary Lake, the Garden Tract,
              Quartz Hill, and out toward Shasta Dam. The housing stock is mixed: post-war mid-century
              homes with galvanized supply lines, ’80s and ’90s tract homes with copper, and newer PEX
              builds out by Stillwater. Each one fails in its own way, and we know the pattern before
              we pull up.
            </p>
            <p>
              Most of the true emergencies we run are in the older stock. Pre-1980 Redding homes often
              have galvanized steel supply pipes that are reaching end of life — corrosion, pinhole
              leaks, and pressure loss are the warning signs, and a full burst is the emergency that
              follows. In the older Enterprise and East Redding tract homes built over concrete slabs,
              slab leaks are a recurring call: the first sign is often a warm spot on the floor or a
              water bill that jumped for no reason. Redding summers that stretch past 110°F add their
              own load, drying out and cracking outdoor PVC supply lines and backflow assemblies right
              when irrigation demand peaks.
            </p>
            <p>
              Whether it is a kitchen or main-line backup, a water heater that finally let go from
              years of sediment buildup — the City of Redding draws roughly 77% of its supply from
              surface sources like the Sacramento River and Whiskeytown and about 23% from
              groundwater, and even soft-to-moderate water leaves sediment that settles in tanks over
              time — or a
              galvanized line that pinholed behind a wall, we
              respond same-day during business hours and quote it upfront before any work starts. If
              the smarter long-term answer is a repipe estimate for a 1960s–1970s galvanized home, we
              will tell you that too — no pressure, no urgency markup.
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
                body: 'Family owned and operated, with 3,000+ jobs across Shasta County. We know Redding plumbing because we have worked on it for a quarter century.',
              },
              {
                title: 'Honest About Our Hours',
                body: 'We are a business-hours plumber (Mon–Fri 8a–4:30p), and we say so. No fake 24/7 promise, no overnight dispatch surcharge — just a straight answer when you call.',
              },
              {
                title: 'Upfront Quote Before Work',
                body: "We don't stop the leak and then surprise you with the price. You see the full quote before we start, even on an emergency call.",
              },
              {
                title: 'Fully Stocked Service Trucks',
                body: 'We carry parts for most common repairs, so a burst pipe or failed valve gets fixed on the spot instead of waiting on a supply run.',
              },
              {
                title: 'Licensed, Bonded & Insured',
                body: 'CSLB License #596557. Permits pulled where required, code handled correctly, and our workmanship stands behind every repair.',
              },
              {
                title: 'No Pushy Upsells',
                body: "If the fix is a simple repair, that's what we recommend. We will tell you when a repipe is the smarter call — and when it can wait.",
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
            Need something other than an emergency? Explore the rest of our Redding-area plumbing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/emergency"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">
                Emergency Plumbing
              </h3>
              <p className="text-gray-700">Our full emergency service overview and response process.</p>
            </Link>
            <Link
              href="/drain-cleaning-redding"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">
                Drain Cleaning in Redding
              </h3>
              <p className="text-gray-700">
                Backed-up drains and main lines cleared with power augers and camera inspection.
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
            Need an emergency plumber in a nearby town?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/emergency-plumber-anderson"
              className="bg-white border border-gray-200 rounded-lg px-5 py-3 text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Emergency Plumber in Anderson →
            </Link>
            <Link
              href="/emergency-plumber-shasta-lake"
              className="bg-white border border-gray-200 rounded-lg px-5 py-3 text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
            >
              Emergency Plumber in Shasta Lake →
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Emergency Plumbing Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day response in the Redding city limits during business hours. We cover the
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
        faqs={emergencyFAQs}
        title="Emergency Plumber FAQ — Redding, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Plumbing Emergency in Redding Right Now?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Call during business hours for same-day response, typically on-site in 30–60 minutes in
            the Redding city limits. Upfront pricing, no urgency upcharge.
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
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Licensed, bonded, insured · After hours: text
            (530) 704-6989, we respond the next business day
          </p>
        </div>
      </section>
    </>
  );
}
