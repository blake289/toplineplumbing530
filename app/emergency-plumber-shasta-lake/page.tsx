import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-shasta-lake#service',
  name: 'Emergency Plumber in Shasta Lake, CA',
  serviceType: 'Emergency Plumbing',
  description:
    'Same-day emergency plumbing in Shasta Lake, CA during business hours (Mon–Fri 8a–4:30p). Burst pipes, water heater floods, frozen hose bibs, slab leaks, and sewage backups — including unoccupied vacation rentals and lake-side cabins where a leak nobody catches can compound for days. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/emergency-plumber-shasta-lake',
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
          name: 'Water Heater Flood / Leak Response',
          serviceType: 'Water Heater Emergency Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Frozen & Burst Hose Bib Repair',
          serviceType: 'Frozen Pipe Repair',
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
          name: 'Sewage Backup Clearing',
          serviceType: 'Sewer Backup Repair',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-shasta-lake#webpage',
  url: 'https://toplineplumbingco.com/emergency-plumber-shasta-lake',
  name: 'Emergency Plumber in Shasta Lake, CA — Same-Day Response',
  description:
    'Emergency plumber in Shasta Lake, CA. Same-day response for burst pipes, water heater floods, and frozen hose bibs during business hours from a licensed local plumber since 1998.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/emergency-plumber-shasta-lake#service' },
};

const emergencyHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'What to Do in a Plumbing Emergency Before the Plumber Arrives',
  description:
    'Step-by-step emergency response to limit damage from a burst pipe, water heater failure, or active leak in your Shasta Lake home before the plumber arrives.',
  totalTime: 'PT10M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
  tool: [
    { '@type': 'HowToTool', name: 'Main water shut-off valve' },
    { '@type': 'HowToTool', name: 'Towels or wet/dry vacuum' },
    { '@type': 'HowToTool', name: 'Phone to call emergency plumber' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Shut off the main water valve',
      text: 'Go to your main water shut-off valve (usually in the garage, near the hose bib, or in the crawlspace) and turn it off immediately. This stops the water flow and limits further damage.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Turn off the water heater',
      text: 'For gas water heaters, turn the control knob to the pilot position. For electric, flip the water heater breaker. This prevents the tank from running dry and damaging the heating element.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Open faucets to drain the lines',
      text: 'Open all faucets (hot and cold) to drain any remaining water from the supply lines. This minimizes how much water can leak from the burst or failure point.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Call Topline Plumbing',
      text: 'Call (530) 704-6989 for emergency plumbing in Shasta Lake during business hours (Mon–Fri 8:00a–4:30p). Same-day response. Upfront pricing.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Protect valuables and document damage',
      text: 'Move furniture, electronics, and valuables out of the affected area. Start soaking up water with towels or a wet/dry vacuum. Take photos of all damage for your insurance claim.',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Emergency Plumber in Shasta Lake, CA — Same-Day Response | Topline Plumbing',
  description:
    'Emergency plumber in Shasta Lake, CA. Same-day response for burst pipes, water heater floods, and frozen hose bibs during business hours (Mon–Fri 8a–4:30p). Licensed since 1998. CSLB #596557. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/emergency-plumber-shasta-lake',
  },
  openGraph: {
    title: 'Emergency Plumber in Shasta Lake, CA — Same-Day Response | Topline Plumbing',
    description:
      'Emergency plumber in Shasta Lake, CA. Same-day response for burst pipes, water heater floods, and frozen hose bibs during business hours from a licensed local plumber since 1998.',
    url: 'https://toplineplumbingco.com/emergency-plumber-shasta-lake',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Emergency Plumber in Shasta Lake, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const emergencyFAQs = [
  {
    question: 'How fast can an emergency plumber get to Shasta Lake?',
    answer:
      "Shasta Lake is just 10 miles north of our Redding base on I-5, so during business hours (Mon–Fri 8a–4:30p) we typically reach Shasta Lake addresses in 30–60 minutes. Call (530) 704-6989 and we'll tell you straight whether we can be there today.",
  },
  {
    question: 'Is Topline Plumbing a 24/7 emergency plumber in Shasta Lake?',
    answer:
      "No — and we won't pretend to be. Topline handles emergency plumbing during business hours: Monday through Friday, 8:00a to 4:30p. For after-hours problems, text (530) 704-6989 and we respond first thing the next business day. If it's a safety issue (gas leak, major flood), call 911 and shut off your main water valve until we open.",
  },
  {
    question: 'How much does an emergency plumber cost in Shasta Lake, CA?',
    answer:
      "Every emergency call is quoted upfront before any work starts — no surprise charges and no after-hours markup, because we work standard business hours. Call (530) 704-6989 and we'll give you a clear quote over the phone before we dispatch. A free estimate comes with any service.",
  },
  {
    question: 'My Shasta Lake vacation rental or cabin has a leak — what should I do?',
    answer:
      "Lake-side cabins and rentals often sit unoccupied, so a small leak can compound into major damage before anyone notices. The moment you find it: shut off the main water valve, turn off the water heater, and call (530) 704-6989. We respond same-day during business hours and can coordinate access if you're managing the property remotely.",
  },
  {
    question: 'What should I do about a frozen or burst hose bib in winter?',
    answer:
      "Winter cold snaps freeze and burst exterior hose bibs on Shasta Lake homes, especially on properties left unoccupied. Shut off the main water valve to stop flooding, open the affected faucet to relieve pressure, and call (530) 704-6989. We repair and replace burst hose bibs and can add freeze protection to prevent a repeat.",
  },
  {
    question: 'What counts as a plumbing emergency?',
    answer:
      'Common plumbing emergencies include burst pipes, major leaks causing water damage, complete loss of water, sewage backups, water heater flooding, frozen burst hose bibs, and any situation where water is actively damaging your home or property. When in doubt, shut off your main water valve and call (530) 704-6989.',
  },
  {
    question: 'Is Topline Plumbing licensed and insured?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — family owned and operated, serving the Redding area including Shasta Lake since 1998.',
  },
];

export default function EmergencyPlumberShastaLakePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Emergency Plumber Shasta Lake',
            url: 'https://toplineplumbingco.com/emergency-plumber-shasta-lake',
          },
        ]}
      />
      <FAQSchema faqs={emergencyFAQs} />
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyHowToSchema) }}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Shasta Lake, CA · Licensed Local Plumber Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Emergency Plumber in Shasta Lake, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) emergency plumber serving Shasta Lake,
              CA. We offer same-day service during business hours (Mon–Fri 8a–4:30p) with upfront
              pricing. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Same-day response →</span> typically on-site in
              30–60 minutes during business hours
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

      {/* Response promise */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Our Shasta Lake Emergency Response Promise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Honest hours, fast dispatch, and a clear price before we touch a wrench — even in an
              emergency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Business Hours, Done Right',
                body: 'Live dispatch Mon–Fri 8:00a–4:30p. We are not a 24/7 call center, so you talk to a real local plumber — not an overnight answering service that marks up the price.',
              },
              {
                title: 'Fast, Same-Day Response',
                body: "Shasta Lake is 10 minutes north of our Redding base on I-5. During business hours we typically reach Shasta Lake addresses in 30–60 minutes for same-day emergency scheduling.",
              },
              {
                title: 'Upfront Pricing — No Surprises',
                body: 'Even in an emergency you will know the cost before we start. No after-hours markup, no surprise charges, and a free estimate with any service.',
              },
              {
                title: 'Fully Stocked Trucks',
                body: 'We carry parts for most common emergency repairs, so in many cases we can fix burst pipes, leaking water heaters, and broken hose bibs on the spot.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-navy-900 text-white rounded-xl">
            <h3 className="text-xl font-heading font-bold mb-2">After-Hours or Weekend Emergency?</h3>
            <p className="text-gray-200">
              Topline is closed evenings and weekends. For an active emergency outside business
              hours: <strong>shut off your main water valve</strong> to stop the flooding, call{' '}
              <strong>911</strong> if it is a safety issue (gas leak, major flood, sewage backing up
              into living areas), then text <strong>(530) 704-6989</strong> and we respond first
              thing the next business day.
            </p>
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
              A few minutes of the right action can save thousands in water damage — especially in a
              home nobody is watching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Burst Pipe or Water Heater Flood
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Shut off the main water supply</li>
                <li>• Turn off the water heater (pilot for gas, breaker for electric)</li>
                <li>• Open faucets to drain remaining water from the lines</li>
                <li>• Move valuables away from the affected area, then call (530) 704-6989</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">Sewage Backup</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Stop using all water in the house</li>
                <li>• Keep people and pets away from the affected area</li>
                <li>• Do not attempt DIY repairs or chemical drain cleaners</li>
                <li>• Call us immediately at (530) 704-6989</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Shasta Lake Homes Call Topline in an Emergency
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Shasta Lake — the city just north of Redding, anchored by Shasta Dam and the lake
              recreation economy — has two distinct kinds of homes, and both create their own kind
              of emergency. There are longtime residential properties for the dam and powerhouse
              workforce, and seasonal cabins and rentals on the lake side. Each has different
              plumbing needs and a very different level of urgency when something fails.
            </p>
            <p>
              The lake-side properties are where emergencies hurt the most. They often sit
              unoccupied for stretches, so when a water heater starts leaking, a slab leak opens up,
              or a hose bib freezes and bursts in winter, the damage compounds for days before
              anyone notices. By the time a property manager or owner walks in, what would have been
              a quick repair has become flooring, drywall, and a mold problem. That is exactly why
              we prioritize same-day response for vacation-rental and unoccupied-home calls — and
              why we can coordinate access when you are managing the property remotely.
            </p>
            <p>
              On the residential side, the older housing near the original townsite — Project City
              and Central Valley — has aging supply lines and water heaters that are due for
              replacement, and those failures tend to arrive without warning. Some rural properties
              on Lakehead-adjacent land run on wells, so a pressure-system or pump issue can leave a
              home with no water at all. We have cleared drain backups in seasonal cabins, chased
              down slab leaks in 1970s and 1980s homes, and replaced burst winter hose bibs across
              Shasta Lake. Whatever yours is, call{' '}
              <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
                (530) 704-6989
              </a>{' '}
              and we will tell you straight whether we can be there today.
            </p>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Shasta Lake Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and straight with you — not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fast From Redding',
                body: 'We are based 10 minutes south in Redding. During business hours we typically reach Shasta Lake addresses in 30–60 minutes for same-day emergency scheduling.',
              },
              {
                title: 'Honest About Our Hours',
                body: 'We are open Mon–Fri 8a–4:30p and we say so. No fake 24/7 promises, no overnight surcharges — just a real local plumber who picks up during business hours.',
              },
              {
                title: 'Upfront Quote, Always',
                body: "We don't show up, start tearing things apart, then surprise you with the price. You see the cost before any work begins — even in an emergency.",
              },
              {
                title: 'Rental & Cabin Experience',
                body: 'We handle unoccupied lake-side cabins and vacation-rental failures all the time, and can coordinate access when you are managing the property from out of town.',
              },
              {
                title: 'Licensed, Bonded, Insured',
                body: 'CSLB License #596557. Family owned and operated, serving the Redding area including Shasta Lake since 1998 — over 3,000 jobs and a 5.0 perfect Google rating.',
              },
              {
                title: 'Stocked for the Job',
                body: 'Our trucks carry parts for most common emergencies, so burst pipes, leaking water heaters, and frozen hose bibs often get fixed on the first visit.',
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
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/emergency"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Emergency Plumbing →
              </h3>
              <p className="text-gray-600 text-sm">
                How our same-day emergency response works across the Redding area.
              </p>
            </Link>
            <Link
              href="/drain-cleaning-shasta-lake"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Drain Cleaning in Shasta Lake →
              </h3>
              <p className="text-gray-600 text-sm">
                Clearing drain backups in seasonal cabins and Shasta Lake homes.
              </p>
            </Link>
            <Link
              href="/areas/shasta-lake"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
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
            <span className="font-semibold text-navy-900">Emergency plumber in a nearby city:</span>{' '}
            <Link href="/emergency-plumber-redding" className="text-primary font-semibold hover:underline">
              Redding
            </Link>{' '}
            ·{' '}
            <Link href="/emergency-plumber-anderson" className="text-primary font-semibold hover:underline">
              Anderson
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Emergency Plumbing Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day response in city limits during business hours. We serve Shasta Lake and the
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
        faqs={emergencyFAQs}
        title="Emergency Plumber FAQ — Shasta Lake, CA"
        background="gray"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Plumbing Emergency in Shasta Lake?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and fast from Redding. Call now for same-day response during business
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
