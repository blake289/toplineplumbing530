import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/water-heater-repair-bella-vista#service',
  name: 'Water Heater Repair in Bella Vista, CA',
  serviceType: 'Water Heater Repair',
  description:
    'Water heater repair in Bella Vista, CA — gas, propane, and electric, including well-fed and rural foothill homes. We diagnose and repair thermostats, heating elements, thermocouples, gas control valves, pilot/ignition faults, and leaking T&P relief valves, with honest repair-vs-replace guidance and upfront pricing. Licensed plumber CSLB #596557, serving the Bella Vista and Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/water-heater-repair-bella-vista',
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
    name: 'Water Heater Repair Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Thermostat Replacement',
          serviceType: 'Water Heater Thermostat Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Heating Element Replacement (Electric)',
          serviceType: 'Water Heater Heating Element Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Thermocouple & Pilot / Ignition Repair (Gas & Propane)',
          serviceType: 'Gas Water Heater Pilot Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gas Control Valve Replacement',
          serviceType: 'Gas Water Heater Valve Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Leaking T&P (Temperature & Pressure) Relief Valve Repair',
          serviceType: 'Water Heater Relief Valve Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sediment Flush & Well-Water Diagnostic',
          serviceType: 'Water Heater Maintenance',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/water-heater-repair-bella-vista#webpage',
  url: 'https://toplineplumbingco.com/water-heater-repair-bella-vista',
  name: 'Water Heater Repair Bella Vista, CA | Topline Plumbing',
  description:
    "Water heater repair in Bella Vista, CA, gas and electric — rural foothill and well-water homes welcome. Same-day diagnostic and honest repair-vs-replace advice. Licensed since 1998. Call (530) 704-6989.",
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/water-heater-repair-bella-vista#service' },
};

export const metadata: Metadata = {
  title: 'Water Heater Repair Bella Vista, CA | Topline Plumbing',
  description:
    "Water heater repair in Bella Vista, CA, gas and electric — rural foothill and well-water homes welcome. Same-day diagnostic and honest repair-vs-replace advice. Licensed since 1998. Call (530) 704-6989.",
  alternates: {
    canonical: 'https://toplineplumbingco.com/water-heater-repair-bella-vista',
  },
  openGraph: {
    title: 'Water Heater Repair Bella Vista, CA | Topline Plumbing',
    description:
      "Bella Vista's water heater repair specialists. Same-day diagnostic during business hours, gas and electric, rural foothill and well-water properties — honest repair-vs-replace guidance from a licensed local plumber since 1998.",
    url: 'https://toplineplumbingco.com/water-heater-repair-bella-vista',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Water Heater Repair in Bella Vista, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const waterHeaterRepairFAQs = [
  {
    question: 'How fast can a plumber get to Bella Vista for water heater repair?',
    answer:
      "Bella Vista is about 15 minutes northeast of Redding, so we typically reach Bella Vista the same day during business hours (Mon–Fri 8a–4:30p), and we serve the area daily. If you call before noon, we can usually diagnose and repair the same day. Call (530) 704-6989 for current availability — we'll tell you straight whether we can be there today.",
  },
  {
    question: 'How much does water heater repair cost in Bella Vista, CA?',
    answer:
      "Every repair is quoted upfront before any work starts — no surprise charges. Common repairs like a thermostat, heating element, thermocouple, or T&P relief valve cost far less than a full replacement. We diagnose the exact fault first, then give you a firm price and an honest read on whether repair or replacement is the smarter spend. Call (530) 704-6989 for a free estimate with any service.",
  },
  {
    question: 'Do you repair both gas and electric water heaters in Bella Vista?',
    answer:
      "Yes — we repair both, including the propane and well-fed units common on Bella Vista's rural parcels. On gas and propane units we handle thermocouples, pilot and ignition faults, and gas control valves. On electric units we handle upper and lower heating elements and thermostats. Both types share repairs like leaking T&P relief valves and sediment-related issues. We carry common parts on the truck so most repairs are done in one visit.",
  },
  {
    question: 'Does Bella Vista Water District water cause sediment in my water heater?',
    answer:
      "It can. The Bella Vista Water District supplies most of the area from Sacramento River surface water and local wells, and some outlying homes are on their own private wells. Surface and well sources both carry mineral and sediment load that settles in the bottom of the tank, insulates the burner or element, and shortens its life — rumbling tanks, tripped elements, and worn thermostats are the giveaways. When we repair a unit here, we check whether a flush, an anode rod, or a softener/filter would keep the same failure from coming back.",
  },
  {
    question: 'Should I repair or replace my water heater?',
    answer:
      "If your tank is under about 8 years old and the failure is a single component — thermostat, element, thermocouple, gas valve, or T&P valve — repair is usually the right call. If it's 10+ years old, rusting, rumbling loudly, or leaking from the tank body itself, replacement is almost always more cost-effective. We give you an honest recommendation, not a sales pitch. If replacement is the smarter move, see our Redding replacement guide.",
  },
  {
    question: 'My Bella Vista home is on a well — can you still repair the water heater?',
    answer:
      "Yes. Some outlying Bella Vista homes sit on private wells rather than the water district, and those systems run off a pressure tank. A swing in well pressure can stress the water heater's T&P relief valve and fittings, sometimes looking like a tank fault when it's really the supply side. We check the well system and pressure tank, not just the failed part, so we don't fix something the well will keep killing. Call (530) 704-6989 and let us know you're on a well.",
  },
  {
    question: 'Is Topline Plumbing licensed to repair water heaters?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Bella Vista and Redding area since 1998. We stand behind our repair workmanship.',
  },
  {
    question: 'Are you available 24/7 for water heater emergencies in Bella Vista?',
    answer:
      "We're not a 24/7 shop — we run real local business hours, Mon–Fri 8a–4:30p, with same-day emergency response during those hours. After hours, text (530) 704-6989 and we respond first thing the next business day. For a safety issue like a gas leak or major flood, call 911 and shut off your main water valve (and gas, if you smell gas) immediately.",
  },
];

export default function WaterHeaterRepairBellaVistaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Water Heater Repair Bella Vista',
            url: 'https://toplineplumbingco.com/water-heater-repair-bella-vista',
          },
        ]}
      />
      <FAQSchema faqs={waterHeaterRepairFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Bella Vista&apos;s Water Heater Repair Specialists · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Water Heater Repair in Bella Vista, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) water heater repair service for Bella
              Vista, CA. We repair gas, propane, and electric units — thermostats, heating elements,
              thermocouples, gas valves, pilots, and leaking relief valves — including the well-fed
              and rural foothill systems out here, with same-day service during business hours
              (Mon–Fri 8a–4:30p) and upfront pricing. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">15 minutes northeast →</span> typically same-day
              during business hours
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
              Free estimate with any service · Upfront quote before any work starts · Mon–Fri
              8:00a–4:30p · CSLB #596557 · Same-day response during business hours
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
              <div className="text-sm md:text-base text-gray-600 mt-1">of Jobs Since 1998</div>
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

      {/* What we repair */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Water Heater Repairs We Handle in Bella Vista
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most water heater failures come down to a single part. We diagnose the exact fault,
              quote it upfront, and fix what can be saved — gas, propane, or electric.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Electric Units</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Upper &amp; lower heating element replacement</li>
                <li>• Thermostat replacement</li>
                <li>• Reset / high-limit switch faults</li>
                <li>• No-hot-water &amp; lukewarm-water diagnosis</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Gas &amp; Propane Units
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Thermocouple replacement</li>
                <li>• Pilot light &amp; ignition troubleshooting</li>
                <li>• Gas control valve replacement</li>
                <li>• Burner &amp; flame-sensor issues</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Both Types</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Leaking T&amp;P (relief) valve repair</li>
                <li>• Sediment flush &amp; rumbling-tank diagnosis</li>
                <li>• Anode rod &amp; well-water sediment check</li>
                <li>• Honest repair-vs-replace assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Repair or Replace? We&apos;ll Tell You Straight
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A repair is often the right, cheaper call — but not always. Here&apos;s the honest
              framework we use before quoting you anything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border-2 border-primary p-8 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                Repair usually makes sense when…
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your unit is under about 8 years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>The failure is a single part (thermostat, element, thermocouple, gas valve, T&amp;P valve)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No corrosion or leaking from the tank body itself</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>The repair cost is well under half a replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                Replacement is the smarter spend when…
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">—</span>
                  <span>Your unit is 10+ years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">—</span>
                  <span>You&apos;re seeing rusty water or a leak from the tank body</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">—</span>
                  <span>It rumbles loudly from heavy sediment buildup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">—</span>
                  <span>You&apos;re facing repeat repairs or climbing energy bills</span>
                </li>
              </ul>
              <Link
                href="/water-heater-replacement-redding"
                className="inline-block mt-5 text-primary font-semibold hover:underline"
              >
                See our Redding replacement guide →
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Not sure which way to go? Call{' '}
            <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
              (530) 704-6989
            </a>{' '}
            — we diagnose first, then give you an honest recommendation before quoting.
          </p>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
              Why Bella Vista Homes Call Topline for Water Heater Repair
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Bella Vista is rural Shasta County — large parcels, ranchettes, and homes spread out
                across the foothills northeast of Redding, about 15 minutes from our base. We serve
                the area daily, so a water heater that quit overnight usually gets us out the same day
                during business hours. Out here, wells, septic, and outbuildings are
                the norm rather than the exception, and the spread-out parcels mean longer service
                runs and more outdoor exposure than an in-town Redding job — all of which shapes how
                a water heater is fed, drained, and how it fails.
              </p>
              <p>
                Most Bella Vista homes get their water from the Bella Vista Water District, which
                blends Sacramento River surface water with local wells, while some outlying homes
                draw from their own private wells. Either way, the mineral and sediment load in that
                water settles in the bottom of the tank over the years, insulating the burner or
                element and pushing the unit toward early failure — rumbling tanks, tripped elements,
                and tired thermostats. On the well-fed properties, the whole system also rides on a
                pressure tank, so a pressure swing can stress the T&amp;P relief valve and look like a
                tank fault when the real issue is the supply side.
              </p>
              <p>
                The foothills also bite harder in winter than town does — exposed pipes, hose bibs,
                and pump houses can freeze, and a water heater in an unconditioned space or
                outbuilding takes the brunt of a cold snap. When we repair a unit in Bella Vista, we
                look at the whole picture: the pressure tank, the sediment load, freeze exposure, and
                whether a flush, an anode rod, or a softener would stop the same failure from coming
                back. That&apos;s the honest fix, not just the fast one, and it&apos;s why rural Bella
                Vista homeowners keep our number handy.
              </p>
            </div>
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
              Local, licensed, and specialized in water heaters — not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Same-Day to Bella Vista',
                body: "Bella Vista is about 15 minutes northeast of Redding, so we typically reach Bella Vista the same day during business hours and serve the area daily. Call before noon and we can usually diagnose and repair the same day.",
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "We diagnose the exact fault, then show you the price before we touch a wrench. No teardown-then-surprise-bill, no hourly meter running while you wait.",
              },
              {
                title: 'Gas, Propane & Electric',
                body: 'Thermostats, heating elements, thermocouples, and relief valves ride on the truck, so most water heater repairs — including the propane units common out here — are finished in a single visit.',
              },
              {
                title: 'Well & Foothill Ready',
                body: "Bella Vista runs on the water district and private wells. We check the pressure tank, sediment load, and freeze exposure, not just the part that failed, so the same rural issue doesn't take the unit out again.",
              },
              {
                title: 'Honest Repair-vs-Replace Calls',
                body: "If a repair keeps your existing tank running, that's what we'll recommend. If it's smarter to replace, we'll tell you that too — no pushy upsell.",
              },
              {
                title: 'Licensed Local Family Business',
                body: 'CSLB #596557, serving the Bella Vista and Redding area since 1998. Real local business hours, Mon–Fri 8a–4:30p — no after-hours surcharge games.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

      {/* Related services in Bella Vista */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
            More Plumbing Help in Bella Vista
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/water-heater-repair"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Water Heater Repair Service
              </h3>
              <p className="text-gray-600 text-sm">
                Full details on our water heater diagnostic, repair, and maintenance service.
              </p>
            </Link>
            <Link
              href="/emergency-plumber-bella-vista"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Emergency Plumber in Bella Vista
              </h3>
              <p className="text-gray-600 text-sm">
                Same-day emergency plumbing response during business hours.
              </p>
            </Link>
            <Link
              href="/drain-cleaning-bella-vista"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Drain Cleaning in Bella Vista
              </h3>
              <p className="text-gray-600 text-sm">
                Septic-safe mechanical augering and camera inspection across Bella Vista.
              </p>
            </Link>
            <Link
              href="/water-heater-repair-anderson"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Water Heater Repair in Anderson
              </h3>
              <p className="text-gray-600 text-sm">
                Same service, just south of Redding on I-5 in Anderson.
              </p>
            </Link>
            <Link
              href="/water-heater-replacement-redding"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Water Heater Replacement
              </h3>
              <p className="text-gray-600 text-sm">
                When repair isn&apos;t the right call — same-day tank and tankless replacement.
              </p>
            </Link>
            <Link
              href="/areas/bella-vista"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                All Plumbing in Bella Vista
              </h3>
              <p className="text-gray-600 text-sm">
                Everything we do across Bella Vista&apos;s foothill ranches and large parcels.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Water Heater Repair Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day diagnostic in city limits during business hours. Rural and foothill calls
            typically scheduled within the day.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
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
        faqs={waterHeaterRepairFAQs}
        title="Water Heater Repair FAQ — Bella Vista, CA"
        background="gray"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Lost Hot Water in Bella Vista? Let&apos;s Diagnose It.
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and specialized in water heaters — rural foothill and well-water homes
            welcome. Call now for same-day repair availability during business hours — we&apos;re 15
            minutes northeast.
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
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Licensed, bonded, insured · Same-day response during business hours
          </p>
        </div>
      </section>
    </>
  );
}
