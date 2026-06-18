import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-bella-vista#service',
  name: 'Emergency Plumber in Bella Vista, CA',
  serviceType: 'Emergency Plumbing',
  description:
    'Same-day emergency plumbing in Bella Vista, CA during business hours (Mon–Fri 8a–4:30p): burst pipes, underground well-to-house service-line leaks, frozen pump houses, sewage backups, and water heater floods. Licensed plumber CSLB #596557, serving the Redding area since 1998. Upfront pricing, no surprise charges.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/emergency-plumber-bella-vista',
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
          name: 'Underground Service-Line Leak Detection',
          serviceType: 'Leak Detection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Frozen & Burst Pump-House Pipe Repair',
          serviceType: 'Frozen Pipe Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewage Backup & Septic Line Clearing',
          serviceType: 'Sewage Cleanup',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Heater Flood Response',
          serviceType: 'Water Heater Repair',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-bella-vista#webpage',
  url: 'https://toplineplumbingco.com/emergency-plumber-bella-vista',
  name: 'Emergency Plumber in Bella Vista, CA — Same-Day Response During Business Hours',
  description:
    'Same-day emergency plumber for Bella Vista, CA during business hours (Mon–Fri 8a–4:30p). Burst pipes, well-line leaks, frozen pump houses, and sewage backups. Licensed since 1998. Call (530) 704-6989.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/emergency-plumber-bella-vista#service' },
};

export const metadata: Metadata = {
  title: 'Emergency Plumber Bella Vista, CA | Topline Plumbing',
  description:
    'Emergency plumber in Bella Vista, CA. Same-day response for burst pipes, well-line leaks, and sewage backups. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/emergency-plumber-bella-vista',
  },
  openGraph: {
    title: 'Emergency Plumber Bella Vista, CA | Topline Plumbing',
    description:
      'Emergency plumber in Bella Vista, CA. Same-day response for burst pipes, well-line leaks, and sewage backups. Licensed since 1998. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/emergency-plumber-bella-vista',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Emergency Plumber in Bella Vista, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const emergencyFAQs = [
  {
    question: 'How fast can a plumber get to Bella Vista in an emergency?',
    answer:
      'During business hours (Mon–Fri 8a–4:30p) we typically reach Bella Vista in 30–60 minutes — it sits about 15 minutes northeast of Redding and we serve it daily. Call (530) 704-6989 and we will tell you straight whether we can be there today and give you an arrival window before we head out.',
  },
  {
    question: 'When does Topline Plumbing handle emergencies in Bella Vista?',
    answer:
      'Topline handles emergency plumbing during business hours: Monday through Friday, 8:00a to 4:30p, with same-day response across Bella Vista. For after-hours issues, text (530) 704-6989 and we respond first thing the next business day. For an active safety emergency outside our hours — a gas leak or major flood — call 911 and shut off your main water valve until we open. We are not a 24/7 service, and we will not pretend to be.',
  },
  {
    question: 'How much does an emergency plumbing call cost in Bella Vista, CA?',
    answer:
      'Every emergency call is quoted upfront before any work starts — no surprise charges and no after-hours markup during our business hours. Because Bella Vista jobs often involve longer well-to-house service lines and harder-to-reach leaks, we diagnose first, then give you a clear price before we lift a wrench. Call (530) 704-6989 for a free estimate with any service.',
  },
  {
    question: 'Can you find an underground leak between my well and my house?',
    answer:
      'Yes. Long well-to-house service runs are common in Bella Vista, and a leak can sit 50+ feet from the house with no obvious wet spot. We use proper leak-detection methods to pinpoint the break before we dig, so we open the ground in the right place once instead of trenching the whole run. Call (530) 704-6989.',
  },
  {
    question: 'My pump house froze and a pipe burst — can you help?',
    answer:
      'Yes. Foothill cold snaps hit Bella Vista harder than in town, and exposed pipes, hose bibs, and pump-house plumbing are the first to freeze and split. Shut off your main valve, flip the well pump breaker, and call (530) 704-6989 during business hours for same-day repair. We will also advise on freeze protection so it does not happen again next winter.',
  },
  {
    question: 'Do you service homes on private wells and septic in Bella Vista?',
    answer:
      'Yes. Many Bella Vista homes are on wells and septic, and we handle pressure-tank issues, well-line repairs, and full plumbing service for well-fed homes. We coordinate with well/pump techs when a problem crosses into the pump itself, and we clear septic-fed drain lines with mechanical augering rather than harsh chemicals.',
  },
  {
    question: 'What should I do while waiting for the plumber?',
    answer:
      'Shut off your main water valve to stop active flooding. On a well system, flip the well pump breaker so the pump stops forcing water through the break. For a water heater leak, close the cold-water inlet valve at the top of the tank. If you smell gas, leave the building immediately, call your gas company, then call us.',
  },
  {
    question: 'Is Topline Plumbing licensed and insured?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We are family owned and operated, with a 5.0 perfect rating on Google.',
  },
];

export default function EmergencyPlumberBellaVistaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Emergency Plumber Bella Vista',
            url: 'https://toplineplumbingco.com/emergency-plumber-bella-vista',
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
              Bella Vista &amp; Rural Shasta County · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Emergency Plumber in Bella Vista, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) emergency plumber serving Bella Vista, CA.
              We offer same-day service during business hours (Mon–Fri 8a–4:30p) with upfront pricing —
              burst pipes, underground well-line leaks, frozen pump houses, and sewage backups. Call
              (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Same-day during business hours →</span> typically
              in Bella Vista within 30–60 minutes
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
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Same-day response in Bella Vista within 30–60 minutes
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

      {/* Emergency response promise */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Our Emergency Response Promise to Bella Vista
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are not a 24/7 call center. We are a real local family business that answers the phone
              and shows up — same day, during business hours, with the price agreed before we start.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Business Hours, Real Dispatch',
                body: 'Mon–Fri 8:00a–4:30p with live, same-day scheduling for Bella Vista emergencies. After hours, text (530) 704-6989 and we respond first thing the next business day.',
              },
              {
                title: 'Fast Rural Response',
                body: 'Bella Vista is about 15 minutes northeast of Redding and we serve it daily — typical arrival is 30–60 minutes during business hours.',
              },
              {
                title: 'Upfront Pricing',
                body: 'Even in an emergency you will know the cost before we start. No surprise charges, no after-hours markup during our business hours.',
              },
              {
                title: 'Fully Stocked Trucks',
                body: 'We carry parts for most repairs and well-line fittings, so we can often fix burst pipes and leaks on the spot instead of a return trip.',
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

      {/* What to do before we arrive */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              What to Do Before We Arrive
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A few minutes of the right moves can save you thousands in water damage. On a well
              system, the well pump breaker matters as much as the main valve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Burst Pipe or Well-Line Leak
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>1. Shut off the main water supply (often at the pressure tank on a well system).</li>
                <li>2. Flip the well pump breaker so the pump stops forcing water through the break.</li>
                <li>3. Open faucets to drain remaining water from the lines.</li>
                <li>4. Move valuables away from the affected area and call (530) 704-6989.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Sewage or Septic Backup
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>1. Stop using all water in the house immediately.</li>
                <li>2. Keep people and pets away from the affected area.</li>
                <li>3. Do not attempt DIY chemical fixes — they can damage a septic system.</li>
                <li>4. Call (530) 704-6989 so we can clear the line mechanically and safely.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-navy-900 text-white rounded-xl max-w-4xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-2">After Hours or a Safety Emergency?</h3>
            <p className="text-gray-200">
              Topline is closed evenings and weekends. For an active emergency outside business hours:
              shut off your main water valve, kill the well pump breaker, and call 911 if it is a safety
              issue (gas leak, major flood, sewage in living areas). Then text (530) 704-6989 and we
              respond first thing the next business day.
            </p>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Bella Vista Homes Call Topline for Emergencies
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Bella Vista is rural Shasta County — large parcels, ranchettes, and homes spread across
              the foothills east of Redding. Out here, wells, septic, and outbuildings are the norm
              rather than the exception — though many homes are served by the Bella Vista Water District,
              which delivers a blend of Sacramento River surface water and local wells, while some
              outlying properties still rely on their own private wells. Either way, when a plumbing
              emergency hits, it usually involves longer
              service lines, more outdoor exposure, and well-system components most in-town plumbers
              don't touch as often. That is exactly the work we do daily.
            </p>
            <p>
              The most common emergencies we get called for in Bella Vista are underground service-line
              leaks, frozen pump houses in winter, well-system pressure problems, and burst sections
              where old galvanized pipe meets a newer PEX remodel. A leak on a long well-to-house run
              can sit 50+ feet from the house with no obvious wet spot — so it takes more than a
              stethoscope to the slab. We pinpoint the break before we dig, which means we open the
              ground once, in the right place, instead of trenching the whole line.
            </p>
            <p>
              Foothill cold snaps also hit Bella Vista harder than in town. Exposed pipes, hose bibs,
              and pump-house plumbing are the first things to freeze and split, and many properties run
              a mix of original 1970s–1980s plumbing alongside additions and remodels — so a failure in
              one spot often exposes a material-transition problem somewhere else. We repair the
              emergency fast, then tell you straight what else is at risk before next winter. No upsell
              theater — just the honest read from a licensed plumber who has worked these foothills since
              1998.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services/emergency"
              className="text-primary font-semibold hover:underline"
            >
              See all emergency plumbing services →
            </Link>
            <Link
              href="/areas/bella-vista"
              className="text-primary font-semibold hover:underline"
            >
              Plumbing in Bella Vista →
            </Link>
            <Link
              href="/drain-cleaning-bella-vista"
              className="text-primary font-semibold hover:underline"
            >
              Drain cleaning in Bella Vista →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-gray-50">
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
                title: 'Same-Day During Business Hours',
                body: 'Call during business hours (Mon–Fri 8a–4:30p) and we schedule Bella Vista emergencies same-day, typically arriving within 30–60 minutes.',
              },
              {
                title: 'Well & Septic Comfortable',
                body: 'Many Bella Vista homes run on wells and septic. We handle pressure-tank issues, well-line repairs, and septic-safe drain clearing, and coordinate with pump techs when needed.',
              },
              {
                title: 'Real Leak Detection',
                body: 'A leak on a 50+ foot well-to-house line needs proper detection, not guesswork. We pinpoint the break before we dig so you pay for one repair, not a trenched-up yard.',
              },
              {
                title: 'Upfront Quote Before Work',
                body: "We don't surprise you with the price after the damage is done. You see the full quote before we start — no after-hours markup during business hours.",
              },
              {
                title: 'Honest About Hours',
                body: 'We are not a 24/7 service and we will not pretend to be. We tell you exactly when we can be there, and what to do until then if it is after hours.',
              },
              {
                title: 'Licensed Since 1998',
                body: 'CSLB #596557, licensed, bonded, and insured, family owned and operated, with a 5.0 perfect rating on Google and 3,000+ jobs since 1998.',
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
      <section className="py-16 md:py-20 bg-white">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Emergency Plumbing Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day response during business hours across Redding and the surrounding foothill
            communities. Need the same service nearby?{' '}
            <Link href="/emergency-plumber-redding" className="text-primary font-semibold hover:underline">
              Emergency plumber in Redding
            </Link>{' '}
            or{' '}
            <Link href="/emergency-plumber-palo-cedro" className="text-primary font-semibold hover:underline">
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
        title="Emergency Plumber FAQ — Bella Vista, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Plumbing Emergency in Bella Vista?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and same-day during business hours. Call now and we will tell you straight
            when we can be there.
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
