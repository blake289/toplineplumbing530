import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/water-heater-repair-shasta-lake#service',
  name: 'Water Heater Repair in Shasta Lake, CA',
  serviceType: 'Water Heater Repair',
  description:
    'Same-day water heater repair in Shasta Lake, CA during business hours. We diagnose and fix gas and electric water heaters — thermostats, heating elements, thermocouples, gas valves, pilot lights, and leaking valves — with an upfront quote before any work starts. Licensed plumber CSLB #596557, serving the Shasta Lake area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/water-heater-repair-shasta-lake',
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
    name: 'Water Heater Repair Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Heater Diagnostic',
          serviceType: 'Water Heater Diagnostic',
        },
      },
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
          serviceType: 'Electric Water Heater Element Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Thermocouple & Pilot Light Repair (Gas)',
          serviceType: 'Gas Water Heater Pilot Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gas Control Valve Replacement',
          serviceType: 'Gas Valve Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Leaking Valve & Fitting Repair',
          serviceType: 'Water Heater Leak Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sediment Flush & Tune-Up',
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
  '@id': 'https://toplineplumbingco.com/water-heater-repair-shasta-lake#webpage',
  url: 'https://toplineplumbingco.com/water-heater-repair-shasta-lake',
  name: 'Water Heater Repair in Shasta Lake, CA — Same-Day Diagnostic',
  description:
    'Gas and electric water heater repair in Shasta Lake, CA. Same-day diagnosis during business hours, honest repair-vs-replace guidance, and upfront pricing from a licensed local plumber since 1998.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/water-heater-repair-shasta-lake#service' },
};

export const metadata: Metadata = {
  title: 'Water Heater Repair Shasta Lake, CA | Topline Plumbing',
  description:
    'Gas and electric water heater repair in Shasta Lake, CA. Same-day diagnosis and honest repair-vs-replace advice. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/water-heater-repair-shasta-lake',
  },
  openGraph: {
    title: 'Water Heater Repair Shasta Lake, CA | Topline Plumbing',
    description:
      'Gas and electric water heater repair in Shasta Lake, CA. Same-day diagnosis and honest repair-vs-replace advice. Licensed since 1998. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/water-heater-repair-shasta-lake',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Water Heater Repair in Shasta Lake, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const waterHeaterRepairFAQs = [
  {
    question: 'How fast can a plumber get to Shasta Lake for a water heater repair?',
    answer:
      "Shasta Lake is just 10 miles north of our Redding base, so dispatch is fast — typically 30–60 minutes during business hours (Mon–Fri 8a–4:30p). If you call before noon, we can usually diagnose your water heater and complete most common repairs the same day. Call (530) 704-6989 for current availability.",
  },
  {
    question: 'How much does water heater repair cost in Shasta Lake, CA?',
    answer:
      "Every repair is quoted upfront before any work starts — no surprise charges. The cost depends on the failed part: a thermostat, heating element, thermocouple, or gas valve repair is far less than a full replacement. We diagnose the problem first, then give you a firm quote and an honest read on whether repair or replacement is the smarter spend. Call (530) 704-6989 for a free estimate with any service.",
  },
  {
    question: 'Do you repair both gas and electric water heaters?',
    answer:
      'Yes. On gas units we troubleshoot pilot lights, thermocouples, gas control valves, and burner issues. On electric units we test and replace heating elements, thermostats, and reset/high-limit components. We carry the common parts on our trucks so most gas and electric repairs are handled in a single visit.',
  },
  {
    question: 'Should I repair or replace my water heater?',
    answer:
      "Repair is usually the right call when the tank is under 8 years old and the failure is a single component — a bad thermostat, heating element, thermocouple, or gas valve. Replace when the tank itself is leaking, the unit is 10+ years old, or repairs are stacking up. We give you an honest recommendation either way. If replacement is smarter, see our Redding water heater replacement guide.",
  },
  {
    question: 'My vacation rental water heater failed — can you help even if no one is on site?',
    answer:
      "Yes. Lake-side and seasonal properties in Shasta Lake often sit empty for stretches, so a failed or leaking water heater can run undetected and cause real damage. We coordinate access with you or your property manager, diagnose the unit, shut off and contain any leak, and quote the repair before proceeding. Call (530) 704-6989 to schedule.",
  },
  {
    question: 'Why do Shasta Lake water heaters fail early?',
    answer:
      "Two big reasons. Older homes near the original townsite (Project City and Central Valley) often have aging tanks already past their service life, and the mineral-heavy water in this region drives sediment buildup that insulates the burner or element and forces the unit to overheat. On well-fed homes near Lakehead, untreated water can accelerate sediment and corrosion even faster. Annual flushing slows it, but a sediment-choked tank is on borrowed time.",
  },
  {
    question: 'Is Topline Plumbing licensed to repair water heaters?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Shasta Lake and Redding area since 1998. Family owned and operated, with a 5.0 perfect rating on Google.',
  },
  {
    question: 'Is Topline available 24/7 for water heater emergencies?',
    answer:
      "We are not a 24/7 company — our hours are Mon–Fri 8a–4:30p, and we offer same-day service during those hours. If your water heater fails after hours, text (530) 704-6989 and we'll respond first thing the next business day. For an active emergency like a gas leak or major flood, call 911 and shut off your water heater's gas/power and the cold-water supply valve at the top of the tank.",
  },
];

export default function WaterHeaterRepairShastaLakePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Water Heater Repair Shasta Lake',
            url: 'https://toplineplumbingco.com/water-heater-repair-shasta-lake',
          },
        ]}
      />
      <FAQSchema faqs={waterHeaterRepairFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-center lg:text-left">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Shasta Lake&apos;s Water Heater Repair Team · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Water Heater Repair in Shasta Lake, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) water heater repair service serving Shasta
              Lake, CA. We diagnose and fix gas and electric water heaters — thermostats, heating
              elements, thermocouples, gas valves, pilot lights, and leaking valves — with same-day
              service during business hours (Mon–Fri 8a–4:30p) and upfront pricing. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Same-day repair during business hours →</span>{' '}
              typically on site in 30–60 minutes
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
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Typically on site in 30–60 minutes
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

      {/* What we fix */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Gas &amp; Electric Water Heater Repairs We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most water heater problems come down to a single failed part. We diagnose it on the
              spot, quote it upfront, and carry the common components on our trucks for same-day fixes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                No Hot Water
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most common Shasta Lake repair call. On gas units it&apos;s usually a pilot light,
                thermocouple, or gas control valve. On electric units it&apos;s typically a tripped
                high-limit, a failed thermostat, or a burned-out heating element.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pilot light &amp; thermocouple (gas)</li>
                <li>• Gas control valve</li>
                <li>• Heating element &amp; thermostat (electric)</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Not Enough / Lukewarm Hot Water
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Water that runs out fast or never gets fully hot usually points to a failing
                thermostat, one dead element of two (electric), or heavy sediment insulating the
                burner. We test each component and pinpoint the cause.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Upper/lower element testing</li>
                <li>• Thermostat calibration &amp; replacement</li>
                <li>• Sediment flush &amp; tune-up</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Leaks, Noise &amp; Smells
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A drip at the temperature-pressure relief valve or a fitting is often repairable. A
                leak from the tank body itself is not — that&apos;s a replacement, and we&apos;ll tell
                you straight. Rumbling and popping mean sediment; rotten-egg smell means the anode rod.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• T&amp;P relief valve &amp; fitting repair</li>
                <li>• Sediment-driven noise diagnosis</li>
                <li>• Anode rod &amp; odor troubleshooting</li>
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
              Repair or Replace? Our Honest Rule of Thumb
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We fix what&apos;s worth fixing. We won&apos;t sell you a new tank when a part swap gets
              you back to hot water — and we won&apos;t pour money into a tank that&apos;s done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border-2 border-green-600 p-8 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Repair Usually Makes Sense When…
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>The tank is under 8 years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>The failure is a single component (thermostat, element, thermocouple, gas valve)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>There&apos;s no corrosion or leak from the tank body itself</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                  <span>The repair costs less than about half of a replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border-2 border-gray-300 p-8 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Replacement Is the Smarter Call When…
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">→</span>
                  <span>The tank is 10+ years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">→</span>
                  <span>The tank body is leaking or rusting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">→</span>
                  <span>You&apos;re seeing rusty water or repeat failures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">→</span>
                  <span>You want to move to a tankless unit</span>
                </li>
              </ul>
              <Link
                href="/water-heater-replacement-redding"
                className="inline-block mt-5 text-primary font-semibold hover:underline"
              >
                If repair isn&apos;t worth it, see our replacement guide →
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Either way, we diagnose first and quote upfront. Call{' '}
            <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
              (530) 704-6989
            </a>{' '}
            and we&apos;ll give you a straight answer.
          </p>
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
              Local, licensed, and fast to Shasta Lake — not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fast to Shasta Lake',
                body: 'We&apos;re based 10 miles south in Redding, so dispatch to Shasta Lake is typically 30–60 minutes during business hours. Call before noon and most repairs are done the same day.',
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: 'We diagnose the failed part first, then quote the repair before we touch a wrench. No surprise charges, no guessing — you approve the price before we begin.',
              },
              {
                title: 'Gas & Electric Both Covered',
                body: 'Thermocouples, gas valves, and pilots on gas units; elements, thermostats, and high-limits on electric. We carry the common parts on our trucks for one-visit fixes.',
              },
              {
                title: 'Honest Repair-vs-Replace',
                body: "If a part swap gets you running, that's what we recommend. If the tank is leaking or past its life, we'll say so rather than charge for a repair that won't last.",
              },
              {
                title: 'Built for Lake-Side & Rental Homes',
                body: 'We coordinate access for vacation rentals and seasonal cabins, contain leaks fast, and check the whole unit so a failure doesn&apos;t quietly cause damage while the place sits empty.',
              },
              {
                title: 'Real Local Business Hours',
                body: 'Mon–Fri 8a–4:30p from a real local family business serving the area since 1998. No after-hours markup pricing, no overnight dispatch surcharges.',
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
                <p
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
              Why Shasta Lake Homes Call Topline for Water Heater Repair
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Shasta Lake sits just north of Redding, anchored by Shasta Dam and the lake recreation
                economy. We see two distinct kinds of homes here: longtime residential properties for
                the dam and powerhouse workforce, and seasonal cabins and rentals on the lake side.
                Each has different water heater needs — and very different urgency when something
                fails.
              </p>
              <p>
                Lake-side and vacation-rental properties often sit unoccupied for stretches, so a
                water heater that quits or starts leaking can go unnoticed for days. A pilot that
                blows out leaves guests with cold water; a slow drip at a valve can soak a closet or
                garage before anyone walks in. We coordinate access with owners and property managers,
                diagnose the unit, contain any leak, and quote the repair upfront — so a small failure
                doesn&apos;t turn into a flooded rental.
              </p>
              <p>
                On the residential side, the older housing near the original townsite — Project City
                and Central Valley — tends to have aging supply lines and tanks that are already past
                their service life. Combine that with the mineral-heavy water delivered by the City of
                Shasta Lake&apos;s municipal water system and you get sediment buildup that insulates
                the burner or element, forces the unit to overheat, and triggers the rumbling,
                popping, and early failures we&apos;re called out for. On
                well-fed homes near Lakehead, untreated water can drive sediment and corrosion even
                faster.
              </p>
              <p>
                We&apos;ve handled these calls across Shasta Lake, Redding, Anderson, and the
                surrounding Shasta County communities for over 25 years. If your unit is rumbling,
                producing rusty or lukewarm water, or simply not heating, we&apos;ll find out why and
                tell you honestly whether a repair makes sense or it&apos;s time to replace.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-navy-900 text-white rounded-xl max-w-4xl">
            <h3 className="text-xl font-heading font-bold mb-2">Sediment Flush &amp; Tune-Up</h3>
            <p className="text-gray-200 mb-4">
              The single best thing you can do to extend a water heater&apos;s life in the Shasta Lake
              area. We flush sediment, test the pressure-relief valve, check the anode rod, and inspect
              for early leaks — ideal before a rental season or after a tank&apos;s sat idle.
            </p>
            <a
              href="tel:5307046989"
              className="inline-flex items-center gap-2 text-primary-light font-semibold hover:underline"
            >
              Schedule by phone: (530) 704-6989 →
            </a>
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
              Trusted by Shasta Lake-Area Homeowners
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

      {/* Other services in Shasta Lake */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-6 text-center">
            More Plumbing Help in Shasta Lake
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link
              href="/emergency-plumber-shasta-lake"
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Emergency Plumber</div>
              <div className="text-sm text-gray-600">Same-day urgent response during business hours.</div>
            </Link>
            <Link
              href="/drain-cleaning-shasta-lake"
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Drain Cleaning</div>
              <div className="text-sm text-gray-600">Backups, slow drains, and seasonal-cabin clogs.</div>
            </Link>
            <Link
              href="/water-heater-repair-anderson"
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Water Heater Repair — Anderson</div>
              <div className="text-sm text-gray-600">Same service, just south of Redding on I-5.</div>
            </Link>
          </div>
          <p className="text-center text-gray-600 mt-6">
            See everything we do on our{' '}
            <Link href="/services/water-heater-repair" className="text-primary font-semibold hover:underline">
              water heater repair service page
            </Link>{' '}
            or your{' '}
            <Link href="/areas/shasta-lake" className="text-primary font-semibold hover:underline">
              Shasta Lake service area page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Water Heater Repair Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day repair in city limits during business hours. Foothill and lake-area calls
            typically scheduled within 24–48 hours.
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
        faqs={waterHeaterRepairFAQs}
        title="Water Heater Repair FAQ — Shasta Lake, CA"
        background="gray"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Lost Hot Water in Shasta Lake?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and fast to the lake. Call now for same-day water heater repair during
            business hours.
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
