import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-palo-cedro#service',
  name: 'Emergency Plumber in Palo Cedro, CA',
  serviceType: 'Emergency Plumbing',
  description:
    'Same-day emergency plumbing in Palo Cedro, CA during business hours (Mon–Fri 8a–4:30p). Burst pipes, well-pump and pressure-tank "no water" failures, septic-connected backups, water heater flooding, and yard hydrant or barn line breaks. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/emergency-plumber-palo-cedro',
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
          name: 'Well Pump & Pressure Tank "No Water" Response',
          serviceType: 'Well System Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Septic-Connected Backup & Drain Emergency',
          serviceType: 'Drain Cleaning',
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
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Yard Hydrant & Outbuilding Line Break Repair',
          serviceType: 'Outdoor Plumbing Repair',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-palo-cedro#webpage',
  url: 'https://toplineplumbingco.com/emergency-plumber-palo-cedro',
  name: 'Emergency Plumber in Palo Cedro, CA — Same-Day Response',
  description:
    'Emergency plumber serving Palo Cedro, CA. Same-day response during business hours for burst pipes, well-pump "no water" failures, and septic backups. Licensed since 1998.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/emergency-plumber-palo-cedro#service' },
};

const emergencyHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'What to Do in a Plumbing Emergency Before the Plumber Arrives',
  description:
    'Step-by-step emergency response to limit damage from a burst pipe, well-system failure, or active leak on a Palo Cedro property before the plumber arrives.',
  totalTime: 'PT10M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
  tool: [
    { '@type': 'HowToTool', name: 'Main water shut-off valve' },
    { '@type': 'HowToTool', name: 'Well pump / pressure tank breaker' },
    { '@type': 'HowToTool', name: 'Towels or wet/dry vacuum' },
    { '@type': 'HowToTool', name: 'Phone to call emergency plumber' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Shut off the water at the main or the pressure tank',
      text: 'On a well system, shut off the main supply valve at the pressure tank or where the line enters the house. This stops the flow and keeps the well pump from cycling against a leak.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Cut power to the well pump if water is still flowing',
      text: 'If the leak continues, flip the breaker for the well pump so it stops pulling water from the well into the broken line.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Turn off the water heater',
      text: 'For gas water heaters, turn the control knob to the pilot position. For electric, flip the water heater breaker so the tank does not run dry.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Call Topline Plumbing',
      text: 'Call (530) 704-6989 for emergency plumbing in Palo Cedro during business hours (Mon–Fri 8:00a–4:30p). Same-day response. Upfront pricing.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Protect valuables and document damage',
      text: 'Move furniture, electronics, and valuables out of the affected area, soak up standing water, and take photos of the damage for your insurance claim.',
    },
  ],
};

export const metadata: Metadata = {
  title: 'Emergency Plumber in Palo Cedro, CA — Same-Day Response | Topline Plumbing',
  description:
    'Emergency plumber serving Palo Cedro, CA. Same-day response during business hours (Mon–Fri 8a–4:30p) for burst pipes, well-pump "no water" failures, and septic backups. CSLB #596557. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/emergency-plumber-palo-cedro',
  },
  openGraph: {
    title: 'Emergency Plumber in Palo Cedro, CA — Same-Day Response | Topline Plumbing',
    description:
      'Emergency plumber serving Palo Cedro, CA. Same-day response during business hours for burst pipes, well-pump "no water" failures, and septic backups. Licensed local plumber since 1998.',
    url: 'https://toplineplumbingco.com/emergency-plumber-palo-cedro',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Emergency Plumber in Palo Cedro, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const emergencyFAQs = [
  {
    question: 'How fast can a plumber get to Palo Cedro?',
    answer:
      "During business hours (Mon–Fri 8:00a–4:30p), Topline can typically reach most Palo Cedro properties in 30–60 minutes — it's about 15 minutes east of our Redding base on Highway 44, and we cover it daily. Call (530) 704-6989 and we'll tell you straight whether we can be there today.",
  },
  {
    question: 'Does Topline Plumbing offer 24/7 emergency service in Palo Cedro?',
    answer:
      "No — and we won't pretend otherwise. Topline handles emergency plumbing during business hours: Monday through Friday, 8:00a to 4:30p. For after-hours issues, text (530) 704-6989 and we respond first thing the next business day. If it's a safety emergency outside our hours (gas leak, major flood), call 911 and shut off your water at the main valve or pressure tank until we open.",
  },
  {
    question: 'My well stopped giving water — is that a plumbing emergency?',
    answer:
      "It can be. On Palo Cedro's well systems, a sudden 'no water' or 'low pressure' problem usually traces to the pressure tank, pressure switch, or the well pump itself rather than the house plumbing. We diagnose the system, isolate whether it's a pressure-tank or pump failure, and coordinate with a pump specialist when the pump itself needs replacement. Call (530) 704-6989 during business hours for same-day diagnosis.",
  },
  {
    question: 'How much does an emergency plumber cost in Palo Cedro, CA?',
    answer:
      "Every emergency is quoted upfront before any work starts — no surprise charges and no after-hours upcharge, because we work standard business hours. Call (530) 704-6989 and we'll give you a clear quote before we dispatch. You get a free estimate with any service.",
  },
  {
    question: 'My septic system is backing up — what should I do?',
    answer:
      "Stop running all water in the house immediately so you don't add to the backup, keep people and pets away from the affected area, and don't pour chemical drain cleaners down the line — they can damage a septic system. Then call (530) 704-6989. We clear septic-connected lines with mechanical augering, never caustics. If it's after hours and sewage is entering living space, that's a 911-level safety call.",
  },
  {
    question: 'What should I do while waiting for the emergency plumber?',
    answer:
      'Shut off your main water supply at the pressure tank or where the line enters the house to stop active flooding. If water keeps flowing, flip the well-pump breaker so the pump stops cycling. For a water heater leak, turn off the cold-water inlet valve at the top of the tank. For a gas smell, leave the building immediately and call your gas company before calling a plumber.',
  },
  {
    question: 'Is Topline Plumbing licensed for emergency work in Palo Cedro?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We are family owned and operated and have completed 3,000+ jobs across Shasta County, including rural well-and-septic properties throughout Palo Cedro.',
  },
];

export default function EmergencyPlumberPaloCedroPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Emergency Plumber Palo Cedro',
            url: 'https://toplineplumbingco.com/emergency-plumber-palo-cedro',
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center lg:text-left">
          <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
            Serving Palo Cedro · Licensed Since 1998
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
            Emergency Plumber in Palo Cedro, CA
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-3xl">
            Topline Plumbing is a licensed (CSLB #596557) emergency plumber serving Palo Cedro, CA.
            We offer same-day emergency response during business hours (Mon–Fri 8a–4:30p) with
            upfront pricing — for burst pipes, well-pump &ldquo;no water&rdquo; failures, septic
            backups, and water heater floods. Call (530) 704-6989.
          </p>

          <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
            <span className="text-primary-light">Same-day response Mon–Fri 8a–4:30p →</span> roughly
            30–60 minutes to Palo Cedro
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

      {/* Response promise */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Our Emergency Response Promise in Palo Cedro
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Palo Cedro is about 15 minutes east of our Redding base on Highway 44. Call during
              business hours and we&apos;ll dispatch a stocked truck the same day, typically within
              30–60 minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Business Hours',
                body: 'Mon–Fri 8:00a–4:30p for live dispatch. No after-hours upcharge, because we work straightforward local hours.',
              },
              {
                title: 'Same-Day Response',
                body: 'Same-day scheduling for Palo Cedro emergencies, roughly 30–60 minutes from our Redding shop.',
              },
              {
                title: 'Upfront Pricing',
                body: 'Even in an emergency, you know the cost before we start. Free estimate with any service, no surprise charges.',
              },
              {
                title: 'Stocked Trucks',
                body: 'We carry parts for most repairs — including well-system and outdoor-line fittings — so we can fix it on the spot.',
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
              A few quick steps can save you thousands in water damage — especially on a well system
              where the pump will keep cycling against a leak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                Burst Pipe or Active Leak
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>1. Shut off the main supply at the pressure tank or where the line enters the house.</li>
                <li>2. If water keeps flowing, flip the well-pump breaker so the pump stops cycling.</li>
                <li>3. Turn off the water heater (gas to pilot, electric breaker off).</li>
                <li>4. Open faucets to drain remaining water and move valuables clear.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                Septic Backup or Sewage
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>1. Stop using all water in the house immediately.</li>
                <li>2. Keep people and pets away from the affected area.</li>
                <li>3. Do not pour chemical drain cleaner down the line — it can damage your septic system.</li>
                <li>4. Call us right away — we clear septic-connected lines with mechanical augering, not caustics.</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-navy-900 text-white rounded-xl max-w-4xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-2">After Hours or Weekend?</h3>
            <p className="text-gray-200">
              Topline is closed evenings and weekends. For an active emergency outside business
              hours: shut off your main water valve to stop the flooding, call 911 if it&apos;s a
              safety issue (gas leak, major flood, sewage in living areas), then text{' '}
              <a href="tel:5307046989" className="text-primary-light font-semibold hover:underline">
                (530) 704-6989
              </a>{' '}
              and we&apos;ll respond first thing the next business day.
            </p>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Palo Cedro Homes Call Topline in an Emergency
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Palo Cedro is the unincorporated community just east of Redding — large-lot
              residential, horse properties, and small ranches. Most homes here are on private wells
              and septic systems rather than city utilities, which changes the plumbing landscape
              completely. We treat these jobs differently than in-town work, and that matters most
              when something fails on a weekday and water is moving where it shouldn&apos;t.
            </p>
            <p>
              On a well system, the calls that come in as &ldquo;no water&rdquo; or &ldquo;low
              pressure&rdquo; almost always trace back to a pressure tank, pressure switch, or
              well-pump issue — not the house plumbing. The danger in a leak is that the pump keeps
              cycling, pulling water from the well straight into the break. We isolate the system
              fast, stop the cycling, and coordinate with a pump specialist when the pump itself
              needs replacement.
            </p>
            <p>
              Septic-connected homes need careful handling in a backup: harsh chemical cleaners and
              grease can damage the system, so we clear lines with mechanical augering, never
              caustics. And because Palo Cedro properties add outdoor plumbing — yard hydrants,
              barns, livestock waterers, irrigation — an emergency out here often isn&apos;t in the
              house at all. We carry the well-system and outdoor-line parts most in-town plumbers
              don&apos;t keep on the truck.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/services/emergency" className="text-primary font-semibold hover:underline">
              See our full emergency plumbing service →
            </Link>
            <Link href="/areas/palo-cedro" className="text-primary font-semibold hover:underline">
              About our Palo Cedro service area →
            </Link>
            <Link
              href="/drain-cleaning-palo-cedro"
              className="text-primary font-semibold hover:underline"
            >
              Drain cleaning in Palo Cedro →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Palo Cedro Homeowners Call Topline First
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
                body: 'Call Mon–Fri 8a–4:30p and we dispatch a stocked truck the same day, roughly 30–60 minutes out to Palo Cedro.',
              },
              {
                title: 'Well & Septic Experience',
                body: "We work on rural systems daily — pressure tanks, well lines, and septic-connected drains — so we don't guess our way through a Palo Cedro emergency.",
              },
              {
                title: 'Upfront Quote, No Upcharge',
                body: "You see the price before we start, and there's no after-hours surcharge because we work standard local hours.",
              },
              {
                title: 'Septic-Safe Methods',
                body: 'We clear backups with mechanical augering, never caustic chemicals that damage septic systems.',
              },
              {
                title: 'Licensed Since 1998',
                body: 'CSLB #596557, family owned and operated, 3,000+ jobs across Shasta County — including rural Palo Cedro properties.',
              },
              {
                title: 'Honest About Our Hours',
                body: "We're not 24/7 and we won't pretend to be. For after-hours issues, text us and we respond first thing the next business day.",
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Emergency Plumbing Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day response during business hours across Redding and the surrounding communities.
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

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-3">More emergency plumber pages nearby:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/emergency-plumber-redding"
                className="text-primary font-semibold hover:underline"
              >
                Emergency Plumber Redding →
              </Link>
              <Link
                href="/emergency-plumber-bella-vista"
                className="text-primary font-semibold hover:underline"
              >
                Emergency Plumber Bella Vista →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={emergencyFAQs}
        title="Emergency Plumber FAQ — Palo Cedro, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Plumbing Emergency in Palo Cedro?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and same-day during business hours. Call now for current availability.
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
