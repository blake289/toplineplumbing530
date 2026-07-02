import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/tankless-water-heater-anderson#service',
  name: 'Tankless Water Heater Installation in Anderson, CA',
  serviceType: 'Tankless Water Heater Installation',
  description:
    'Tankless water heater installation in Anderson, CA. Navien, Rinnai, Noritz, and Rheem units sized to your household, with gas line upsizing, venting, old tank removal, and upfront pricing. We also repair and service existing tankless systems. Licensed plumber CSLB #596557, serving the Anderson area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/tankless-water-heater-anderson',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Anderson', sameAs: 'https://en.wikipedia.org/wiki/Anderson,_California' },
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
          name: 'Venting Installation',
          serviceType: 'Water Heater Venting',
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
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tankless Water Heater Repair & Descaling Flush',
          serviceType: 'Tankless Water Heater Repair',
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
  '@id': 'https://toplineplumbingco.com/tankless-water-heater-anderson#webpage',
  url: 'https://toplineplumbingco.com/tankless-water-heater-anderson',
  name: 'Tankless Water Heater Installation Anderson, CA | 5.0 Stars',
  description:
    'Tankless water heater installation in Anderson, CA. Gas line, venting, and old tank removal handled. Licensed since 1998. Call (530) 704-6989.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/tankless-water-heater-anderson#service' },
};

export const metadata: Metadata = {
  title: 'Tankless Water Heater Installation Anderson, CA | 5.0 Stars',
  description:
    'Tankless water heater installation in Anderson, CA. Gas line, venting, and old tank removal handled. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/tankless-water-heater-anderson',
  },
  openGraph: {
    title: 'Tankless Water Heater Installation Anderson, CA | 5.0 Stars',
    description:
      'Tankless water heater installation in Anderson, CA. Navien, Rinnai, Noritz, and Rheem units sized to your household, with gas line and venting handled by a licensed local plumber since 1998.',
    url: 'https://toplineplumbingco.com/tankless-water-heater-anderson',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Tankless Water Heater Installation in Anderson, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const tanklessAndersonFAQs = [
  {
    question: 'How fast can you get to Anderson for a tankless water heater install?',
    answer:
      "Anderson is 10 miles south of Redding on I-5, so we typically reach Anderson the same day during business hours (Mon–Fri 8a–4:30p) for diagnostics and consultations. Installation itself is scheduled after the free consultation, once we've sized the unit and quoted the full job. Call (530) 704-6989 for current availability.",
  },
  {
    question: 'How much does tankless water heater installation cost in Anderson, CA?',
    answer:
      "Tankless installation cost varies by job — the unit, gas line requirements, and venting setup all factor in. Tankless burners draw considerably more gas at peak than a standard tank, so older homes may need a gas line upgrade, and we include any required upgrades in your upfront quote. Every job is quoted in full before any work starts. Call (530) 704-6989 for a free consultation.",
  },
  {
    question: 'What tankless brands do you install in Anderson?',
    answer:
      "We install all major brands including Navien, Rinnai, Noritz, and Rheem — and Topline is a Navien and Rinnai certified installer. We recommend the right brand and model for your household size and water usage instead of pushing one line.",
  },
  {
    question: 'Is tankless worth it for an Anderson home?',
    answer:
      "Tankless makes sense if you have high hot water demand, want to free up garage or closet space, or plan to stay in the home 7+ years to recoup the higher upfront cost. Tankless units last 20+ years (vs 8–12 for a tank), produce endless hot water, and cut energy use 20–30%. If a standard tank is the smarter spend for your home, we'll tell you that before you commit.",
  },
  {
    question: "Will Anderson's water affect a tankless water heater?",
    answer:
      "It's a factor we plan for. In-town Anderson homes draw municipal water from the City of Anderson water utility, which pumps 100% groundwater from local wells in the Anderson Subbasin, and rural homes toward Cottonwood Creek often run private wells with heavy sediment and mineral load. Mineral scale builds up on a tankless heat exchanger over time — homes on harder well water see it faster — so we explain the periodic descaling flush that keeps the unit running efficiently for its full 20-plus-year life.",
  },
  {
    question: 'Do you also repair existing tankless water heaters in Anderson?',
    answer:
      "Yes. We repair and replace high-efficiency tankless systems as well as traditional tanks, including descaling flushes for units losing performance to scale. If your existing tank unit is the problem instead, see our water heater repair page for Anderson.",
  },
  {
    question: 'Is Topline Plumbing licensed for tankless installation?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Anderson and Redding area since 1998. We handle the gas line sizing, venting, and condensate work in-house, and every job is properly permitted where required.',
  },
  {
    question: 'Are you available 24/7 in Anderson?',
    answer:
      "We're not a 24/7 shop — we run real local business hours, Mon–Fri 8a–4:30p, with same-day response during those hours when possible. After hours, text (530) 704-6989 and we respond first thing the next business day. For a safety issue like a gas leak, call 911 and shut off your gas right away.",
  },
];

export default function TanklessWaterHeaterAndersonPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Tankless Water Heater Anderson',
            url: 'https://toplineplumbingco.com/tankless-water-heater-anderson',
          },
        ]}
      />
      <FAQSchema faqs={tanklessAndersonFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Serving Anderson · Navien &amp; Rinnai Certified · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Tankless Water Heater Installation in Anderson, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) plumber installing tankless water
              heaters for Anderson, CA homes. We size the unit to your household, handle the gas
              line and venting, haul away the old tank, and quote everything upfront before any
              work starts. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">10 miles south on I-5 →</span> free tankless
              consultation, upfront quote
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

      {/* Why tankless */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Why Anderson Homeowners Go Tankless
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A tankless unit heats water only when you turn on a tap, instead of keeping 40 to 50
              gallons hot all day the way a traditional tank does.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div className="text-2xl font-heading font-bold text-navy-900 mb-2">
                Endless Hot Water
              </div>
              <p className="text-gray-700 leading-relaxed">
                Back-to-back showers, a deep tub, laundry running at the same time — tankless heats
                on demand, so the hot water doesn&apos;t run out partway through.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div className="text-2xl font-heading font-bold text-navy-900 mb-2">
                20–30% Energy Savings
              </div>
              <p className="text-gray-700 leading-relaxed">
                You stop paying to reheat a full tank all day while everyone is at work or school.
                Most homeowners save 20–30% on water heating costs after switching.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div className="text-2xl font-heading font-bold text-navy-900 mb-2">
                20+ Year Lifespan
              </div>
              <p className="text-gray-700 leading-relaxed">
                Tankless units last 20+ years — nearly double the 8–12 years of a traditional tank —
                and free up garage or closet floor space in the process.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Sticking with a tank instead? See our{' '}
            <Link
              href="/water-heater-replacement-redding"
              className="text-primary font-semibold hover:underline"
            >
              water heater replacement guide
            </Link>{' '}
            — we&apos;ll give you an honest read on which way the math points for your home.
          </p>
        </div>
      </section>

      {/* What the install involves */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              What a Tankless Install in Anderson Actually Involves
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Converting from a tank is more involved than a like-for-like swap — and an honest
              plumber walks you through all of it before you commit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Gas Line, Venting &amp; Removal — Handled In-House
              </h3>
              <ul className="text-gray-700 space-y-2 leading-relaxed">
                <li>• Tankless burners draw considerably more gas at peak than a standard tank, so older homes often need the supply line upsized — we assess it at the free consultation</li>
                <li>• Tankless units vent differently; we install the correct concentric or dedicated venting for your model</li>
                <li>• We pull the old tank, dispose of it, mount the new unit, and make the gas, water, and venting connections</li>
                <li>• Every connection is pressure-tested before we leave, and every job is properly permitted where required</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Sized to Your Household&apos;s Real Demand
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tankless units are sized by flow rate (gallons per minute) and by the incoming
                groundwater temperature — and winters here bring colder inlet water than summer
                does. If your household regularly runs multiple high-demand fixtures at once, a
                single small unit can struggle.
              </p>
              <p className="text-gray-700 leading-relaxed">
                During the free consultation we measure your real hot-water demand and recommend a
                unit that keeps up year-round, rather than selling you the biggest model on the
                truck. Tankless isn&apos;t automatically right for every home — and we&apos;ll tell
                you so before you spend a dollar.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Want the full technical rundown? See our{' '}
            <Link href="/services/tankless" className="text-primary font-semibold hover:underline">
              complete tankless installation guide
            </Link>{' '}
            or call{' '}
            <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
              (530) 704-6989
            </a>
            .
          </p>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Tankless in Anderson: What Local Water Means for Your Unit
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Anderson sits just 10 minutes south of Redding on I-5 — a quick run from our base,
              which means we typically reach Anderson the same day during business hours for
              diagnostics and consultations. And Anderson&apos;s water is worth understanding
              before you go tankless.
            </p>
            <p>
              In-town homes draw municipal water from the City of Anderson water utility, which
              pumps 100% groundwater from local wells in the Anderson Subbasin — mineral content
              that, over years, is exactly what builds scale on a tankless heat exchanger. Out
              toward Cottonwood Creek and rural Anderson, many homes run on private wells that tend
              to be heavy with sediment and minerals, and those homes see scale faster still. None
              of that rules out tankless — it just means the unit should be sized and installed
              with local water in mind, and maintained with the periodic descaling flush that keeps
              it running efficiently for its full 20-plus-year life.
            </p>
            <p>
              We install Navien, Rinnai, Noritz, and Rheem systems, and Topline is a Navien and
              Rinnai certified installer. Family owned and operated since 1998, licensed under
              CSLB #596557, bonded, and insured — the same shop that quotes your job is the one
              that shows up to do it. If your existing water heater is failing and you&apos;re
              weighing repair against an upgrade, start with{' '}
              <Link
                href="/water-heater-repair-anderson"
                className="text-primary font-semibold hover:underline"
              >
                water heater repair in Anderson
              </Link>{' '}
              — we&apos;ll tell you straight which way the math points.
            </p>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Anderson Homeowners Call Topline First
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
                title: 'Quick Run Down I-5',
                body: 'Anderson is 10 miles south of Redding, so consultations and diagnostics typically happen the same day during business hours.',
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: 'You see the full quote — unit, labor, gas line, venting, permit — before we lift a wrench. The price you approve is the price you pay.',
              },
              {
                title: 'Honest Sizing, Every Time',
                body: "We size by your real flow-rate demand and seasonal inlet temperatures, not by whatever model is on the truck. If tankless isn't right for your home, we'll say so.",
              },
              {
                title: 'Well-Water Aware',
                body: "Anderson's groundwater and rural wells build scale on heat exchangers faster. We install and maintain with that in mind, including the periodic descaling flush.",
              },
              {
                title: 'Licensed Local Family Business',
                body: 'CSLB #596557, serving the Anderson and Redding area since 1998. Real local business hours, Mon–Fri 8a–4:30p — no after-hours surcharge games.',
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
              Trusted by Anderson-Area Homeowners
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

      {/* Related services in Anderson */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
            More Plumbing Help in Anderson
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/water-heater-repair-anderson"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Water Heater Repair in Anderson
              </h3>
              <p className="text-gray-600 text-sm">
                Gas and electric repairs with honest repair-vs-replace guidance.
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
                Standard tank replacement when tankless isn&apos;t the right call.
              </p>
            </Link>
            <Link
              href="/services/tankless"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Tankless Service Overview
              </h3>
              <p className="text-gray-600 text-sm">
                The full tankless guide — brands, savings, and how installs work.
              </p>
            </Link>
            <Link
              href="/emergency-plumber-anderson"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Emergency Plumber in Anderson
              </h3>
              <p className="text-gray-600 text-sm">
                Same-day emergency plumbing response during business hours.
              </p>
            </Link>
            <Link
              href="/drain-cleaning-anderson"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Drain Cleaning in Anderson
              </h3>
              <p className="text-gray-600 text-sm">
                Power augering, camera inspection, and clog clearing across Anderson.
              </p>
            </Link>
            <Link
              href="/areas/anderson"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                All Plumbing in Anderson
              </h3>
              <p className="text-gray-600 text-sm">
                Everything we do across Anderson, Happy Valley, and Cottonwood.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Tankless Water Heater Service Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Based in Redding, serving homeowners across the surrounding area during business hours.
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
        faqs={tanklessAndersonFAQs}
        title="Tankless Water Heater FAQ — Anderson, CA"
        background="gray"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready for Endless Hot Water in Anderson?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Navien and Rinnai certified, licensed, and 10 minutes down I-5. Call for a free
            tankless consultation during business hours.
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
