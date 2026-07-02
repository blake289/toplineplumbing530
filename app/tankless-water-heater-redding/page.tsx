import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/tankless-water-heater-redding#service',
  name: 'Tankless Water Heater Repair & Installation in Redding, CA',
  serviceType: 'Tankless Water Heater Repair',
  description:
    'Tankless water heater repair and installation in Redding, CA. We repair high-efficiency tankless systems, perform descaling flushes, and install Navien, Rinnai, Noritz, and Rheem units — gas line sizing, venting, and old tank removal handled in-house with upfront pricing. Licensed plumber CSLB #596557, serving Redding since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/tankless-water-heater-redding',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Redding', sameAs: 'https://en.wikipedia.org/wiki/Redding,_California' },
    { '@type': 'City', name: 'Shasta Lake', sameAs: 'https://en.wikipedia.org/wiki/Shasta_Lake,_California' },
    { '@type': 'City', name: 'Anderson', sameAs: 'https://en.wikipedia.org/wiki/Anderson,_California' },
    { '@type': 'City', name: 'Palo Cedro' },
    { '@type': 'City', name: 'Bella Vista' },
    { '@type': 'City', name: 'Red Bluff', sameAs: 'https://en.wikipedia.org/wiki/Red_Bluff,_California' },
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
    name: 'Tankless Water Heater Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tankless Water Heater Repair',
          serviceType: 'Tankless Water Heater Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Descaling Flush & Maintenance',
          serviceType: 'Tankless Water Heater Maintenance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tankless Water Heater Installation',
          serviceType: 'Tankless Water Heater Installation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gas Line Upgrade for Tankless',
          serviceType: 'Gas Line Installation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Old Tank Removal & Disposal',
          serviceType: 'Water Heater Removal',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
  brand: [
    { '@type': 'Brand', name: 'Navien' },
    { '@type': 'Brand', name: 'Rinnai' },
    { '@type': 'Brand', name: 'Noritz' },
    { '@type': 'Brand', name: 'Rheem' },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/tankless-water-heater-redding#webpage',
  url: 'https://toplineplumbingco.com/tankless-water-heater-redding',
  name: 'Tankless Water Heater Redding: Repair & Install | 5.0 Stars',
  description:
    'Tankless water heater repair and installation in Redding, CA. Navien and Rinnai certified service with upfront pricing. Licensed since 1998. Call (530) 704-6989.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/tankless-water-heater-redding#service' },
};

export const metadata: Metadata = {
  title: 'Tankless Water Heater Redding: Repair & Install | 5.0 Stars',
  description:
    'Tankless water heater repair and installation in Redding, CA. Navien & Rinnai certified, upfront pricing. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/tankless-water-heater-redding',
  },
  openGraph: {
    title: 'Tankless Water Heater Redding: Repair & Install | 5.0 Stars',
    description:
      'Tankless water heater repair and installation in Redding, CA. Navien and Rinnai certified installer, descaling flushes, and honest upfront pricing since 1998.',
    url: 'https://toplineplumbingco.com/tankless-water-heater-redding',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Tankless Water Heater Repair & Installation in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const tanklessReddingFAQs = [
  {
    question: 'Do you do tankless water heater repair near me in Redding?',
    answer:
      "Yes. Topline is a local, family-owned plumber serving greater Redding and Shasta County — so when you search tankless repair near me, you're getting a real local crew, not a call center. We repair and replace high-efficiency tankless systems as well as traditional tanks. Call (530) 704-6989 during business hours (Mon–Fri 8a–4:30p) and we'll tell you straight whether we can be there today.",
  },
  {
    question: 'What tankless water heater brands do you repair and install?',
    answer:
      'We install all major brands including Navien, Rinnai, Noritz, and Rheem, and Topline is a Navien and Rinnai certified installer. We service major water heater brands as well, and we recommend the right brand and model for your household size and water usage rather than pushing one line.',
  },
  {
    question: 'Why is my tankless water heater losing performance?',
    answer:
      "Mineral scale is hard on any water heater, and tankless units are no exception — scale builds up on the heat exchanger over time, and homes on harder well water see it faster. A periodic descaling flush keeps a tankless unit running efficiently for its full 20-plus-year life. We'll diagnose what's actually going on, quote the fix upfront, and tell you honestly whether it's a flush, a repair, or something bigger.",
  },
  {
    question: 'How much does tankless water heater repair cost in Redding, CA?',
    answer:
      "Every job is quoted upfront before any work starts — no surprise charges. Repair cost depends on what we find when we diagnose the unit, and a descaling flush costs far less than a replacement. Call (530) 704-6989 for a free estimate with any service.",
  },
  {
    question: 'How much does tankless installation cost in Redding?',
    answer:
      'Tankless installation cost varies by job — the unit, gas line requirements, and venting setup all factor in. Many older Redding homes were plumbed with a gas line sized for a standard tank, and tankless burners draw considerably more gas at peak, so the supply line often needs to be upsized. We assess all of that during the free consultation and include any required upgrades in your upfront quote.',
  },
  {
    question: 'Is tankless worth it compared to a traditional tank?',
    answer:
      "Tankless makes sense if you have high hot water demand, want to free up garage or closet space, or plan to stay in the home 7+ years to recoup the higher upfront cost. Tankless units last 20+ years (vs 8–12 for tank), produce endless hot water, and cut energy use 20–30%. If a standard tank is the smarter call for your home, we'll tell you that too — see our water heater replacement guide.",
  },
  {
    question: 'Is Topline Plumbing licensed for tankless water heater work?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We handle the gas line sizing, venting, and condensate work in-house, and every job is properly permitted where required.',
  },
  {
    question: 'Are you available 24/7 for tankless emergencies in Redding?',
    answer:
      "We're not a 24/7 shop — we run real local business hours, Mon–Fri 8a–4:30p, with same-day response during those hours when possible. After hours, text (530) 704-6989 and we respond first thing the next business day. For a safety issue like a gas leak, call 911 and shut off your gas right away.",
  },
];

export default function TanklessWaterHeaterReddingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Tankless Water Heater Redding',
            url: 'https://toplineplumbingco.com/tankless-water-heater-redding',
          },
        ]}
      />
      <FAQSchema faqs={tanklessReddingFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Redding&apos;s Tankless Specialists · Navien &amp; Rinnai Certified · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Tankless Water Heater Repair &amp; Installation in Redding, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Searching for tankless repair near me in Redding? Topline is a local, family-run
              plumber — not a corporate dispatch center. We repair and replace high-efficiency
              tankless systems, perform descaling flushes, and install Navien, Rinnai, Noritz, and
              Rheem units with honest upfront pricing. CSLB #596557.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Navien &amp; Rinnai certified installer →</span>{' '}
              gas line, venting, and condensate handled in-house
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
              8:00a–4:30p · CSLB #596557
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

      {/* Brands we install */}
      <section className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="uppercase tracking-widest text-xs md:text-sm text-gray-500 font-semibold mb-4">
            Tankless Brands We Install &amp; Service
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg md:text-xl font-heading font-bold text-navy-900">
            <span>Navien</span>
            <span className="text-gray-300">·</span>
            <span>Rinnai</span>
            <span className="text-gray-300">·</span>
            <span>Noritz</span>
            <span className="text-gray-300">·</span>
            <span>Rheem</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Topline is a Navien and Rinnai certified installer — we match the brand and model to
            your home instead of pushing one line.
          </p>
        </div>
      </section>

      {/* Repair vs Install vs Maintain */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Three Ways We Keep Redding&apos;s Tankless Systems Running
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether your existing tankless unit is underperforming or you&apos;re converting from a
              tank, we diagnose first, quote upfront, and let you choose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Repair */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Option 1
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">Tankless Repair</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We repair and replace high-efficiency tankless systems as well as traditional
                tanks. We diagnose the exact fault, quote the repair upfront before any work
                starts, and stand behind our repair workmanship.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Diagnosis first, firm price before any work</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gas supply and venting issues handled in-house</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Honest repair-vs-replace guidance</span>
                </li>
              </ul>
              <Link
                href="/water-heater-repair-redding"
                className="text-primary font-semibold hover:underline"
              >
                Water heater repair in Redding →
              </Link>
            </div>

            {/* Descaling - featured */}
            <div className="bg-navy-900 text-white rounded-xl shadow-lg border-2 border-primary p-8 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Most Overlooked
              </div>
              <div className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-2">
                Option 2
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">Descaling Flush</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Mineral scale builds up on the heat exchanger over time — and homes on harder well
                water see it faster. A periodic descaling flush keeps a tankless unit running
                efficiently for its full 20-plus-year life.
              </p>
              <ul className="space-y-2 text-gray-200 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Restores efficiency lost to scale buildup</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Costs far less than replacing the unit</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quoted upfront before any work starts</span>
                </li>
              </ul>
              <a href="tel:5307046989" className="text-primary-light font-semibold hover:underline">
                Schedule by phone: (530) 704-6989 →
              </a>
            </div>

            {/* Install */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Option 3
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">New Installation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Endless hot water, 20–30% energy savings, and a 20+ year lifespan. We install
                Navien, Rinnai, Noritz, and Rheem units sized to your household&apos;s real
                hot-water demand — quoted in full before we start.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Navien, Rinnai certified install</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gas line upsizing and venting included in the quote</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Old tank hauled away and disposed of</span>
                </li>
              </ul>
              <Link href="/services/tankless" className="text-primary font-semibold hover:underline">
                Full tankless installation guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What an install involves */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                What a Tankless Install in Redding Actually Involves
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Swapping a tank for a tankless unit is more involved than a like-for-like tank
                replacement, and an honest plumber will walk you through all of it up front:
              </p>
              <ul className="text-gray-700 space-y-2 leading-relaxed">
                <li>• Many older Redding homes have a gas line sized for a standard tank — tankless burners draw considerably more gas at peak, so the supply line often needs upsizing</li>
                <li>• Tankless units vent differently — we install the correct concentric or dedicated venting for your model</li>
                <li>• We pull the old tank, dispose of it, mount the new unit, and make the gas, water, and venting connections</li>
                <li>• Every connection is pressure-tested before we leave, and every job is properly permitted where required</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Sized to Your Home, Not the Biggest Model on the Truck
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tankless is not automatically the right answer for every home, and we&apos;ll tell
                you so before you spend a dollar. Units are sized by flow rate (gallons per minute)
                and by the incoming groundwater temperature — and Redding winters bring colder inlet
                water than the summer does.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If your household regularly runs multiple high-demand fixtures at the same time, a
                single small unit can struggle. During the free consultation we measure your real
                hot-water demand and recommend a unit that keeps up year-round. And if a standard
                tank is the smarter spend for your situation, we&apos;ll say so — see our{' '}
                <Link
                  href="/water-heater-replacement-redding"
                  className="text-primary font-semibold hover:underline"
                >
                  water heater replacement guide for Redding
                </Link>
                .
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Already have a tankless unit acting up? Call{' '}
            <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
              (530) 704-6989
            </a>{' '}
            — we diagnose first, then give you an honest recommendation before quoting. Existing
            tank failing instead? Start with{' '}
            <Link href="/water-heater-repair-redding" className="text-primary font-semibold hover:underline">
              water heater repair in Redding
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Tankless in Redding: What Local Water Means for Your Unit
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              The City of Redding classifies its treated water as soft — it draws about 77% from
              surface sources like the Sacramento River and Whiskeytown, with the remaining 23%
              from groundwater that tests moderately harder. That&apos;s good news for a tankless
              heat exchanger, but it doesn&apos;t make scale a non-issue: minerals still build up
              on the heat exchanger over time, and rural homes on private wells see it faster.
              That&apos;s why we explain the periodic descaling flush with every install — and we
              repair and service tankless systems whether or not we installed them.
            </p>
            <p>
              The payoff side of the equation is real, too. A tankless unit heats water only when
              you turn on a tap, instead of keeping 40 to 50 gallons hot all day the way a
              traditional tank does. For a Redding household that runs back-to-back showers in the
              morning or fills a deep tub, that means hot water that doesn&apos;t run out partway
              through — plus 20–30% off water heating costs and a unit that lasts 20+ years instead
              of the 8–12 a tank typically gives you.
            </p>
            <p>
              We&apos;ve served the Redding area since 1998 — family owned, licensed under CSLB
              #596557, bonded, and insured. Whether it&apos;s a repair on a unit someone else
              installed, a flush, or a full conversion from tank to tankless, you get an upfront
              quote before any work starts.
            </p>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Redding Homeowners Call Topline for Tankless Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and certified on the two biggest tankless brands — not a corporate
              dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Navien & Rinnai Certified',
                body: 'The install matters as much as the unit. Topline is a Navien and Rinnai certified installer, so the system runs the way the manufacturer intends.',
              },
              {
                title: 'Gas, Venting & Condensate In-House',
                body: 'We handle the gas line sizing, venting, and condensate work ourselves instead of subbing it out — one crew, one quote, one team accountable for the whole job.',
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "You see the full quote — unit, labor, gas line, venting, permit — before we lift a wrench. The price you approve is the price you pay.",
              },
              {
                title: 'Repair First When It Makes Sense',
                body: "If a descaling flush or a repair keeps your existing unit running, that's what we'll recommend. We won't sell you a new unit when yours has good years left.",
              },
              {
                title: 'Real Local Business Hours',
                body: 'Mon–Fri 8a–4:30p — straightforward hours from a real local family business. No after-hours markup pricing, no overnight dispatch surcharges.',
              },
              {
                title: 'Honest Sizing, Every Time',
                body: "We size by your real flow-rate demand and Redding's seasonal inlet temperatures — not by whatever model is on the truck. If tankless isn't right for your home, we'll say so.",
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
              Trusted by Redding-Area Homeowners
            </h2>
            <p className="text-lg text-gray-600">5.0 perfect rating on Google · Every review counts</p>
          </div>

          <figure className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-navy-900 leading-relaxed font-heading mb-6">
              &ldquo;Installed our new tankless water heater effortlessly. They explained everything
              clearly and left the garage cleaner than they found it.&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                TP
              </div>
              <div>
                <div className="font-semibold text-navy-900">Tina P.</div>
                <div className="text-sm text-gray-600">Anderson, CA · Tankless Install</div>
              </div>
            </figcaption>
          </figure>

          <div className="text-center mt-8">
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
            Tankless Water Heater Service Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Based in Redding, serving homeowners across the surrounding area during business hours.
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
          <p className="text-center text-gray-600 mt-8">
            In Anderson?{' '}
            <Link href="/tankless-water-heater-anderson" className="text-primary font-semibold hover:underline">
              Tankless water heater installation in Anderson
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={tanklessReddingFAQs}
        title="Tankless Water Heater FAQ — Redding, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Tankless Trouble — or Ready to Go Tankless?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Navien and Rinnai certified, licensed, and local. Call now for repair, flush, or
            installation availability during business hours.
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
