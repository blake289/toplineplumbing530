import { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';
import GoogleReviews from '@/components/sections/GoogleReviews';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/water-heater-replacement-redding#service',
  name: 'Water Heater Replacement in Redding, CA',
  serviceType: 'Water Heater Replacement',
  description:
    'Same-day water heater replacement in Redding, CA. Tank-to-tank installation (40, 50, 75-gallon gas or electric), tankless conversions, permit pulling, seismic strapping, and old unit disposal — all included in upfront pricing. Licensed plumber CSLB #596557, serving Redding since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/water-heater-replacement-redding',
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
    name: 'Water Heater Replacement Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Standard Tank Water Heater Replacement (40 / 50 / 75-gallon)',
          serviceType: 'Tank Water Heater Installation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gas Water Heater Installation',
          serviceType: 'Gas Water Heater Installation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electric Water Heater Installation',
          serviceType: 'Electric Water Heater Installation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tankless Water Heater Conversion',
          serviceType: 'Tankless Water Heater Installation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Annual Water Heater Flush & Maintenance',
          serviceType: 'Water Heater Maintenance',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
  brand: [
    { '@type': 'Brand', name: 'Bradford White' },
    { '@type': 'Brand', name: 'Rheem' },
    { '@type': 'Brand', name: 'AO Smith' },
    { '@type': 'Brand', name: 'Navien' },
    { '@type': 'Brand', name: 'Rinnai' },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/water-heater-replacement-redding#webpage',
  url: 'https://toplineplumbingco.com/water-heater-replacement-redding',
  name: 'Water Heater Replacement in Redding, CA — Same-Day Service',
  description:
    "Redding's water heater specialists. Same-day replacement, tankless conversions, and honest pricing from a licensed local plumber since 1998.",
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/water-heater-replacement-redding#service' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://toplineplumbingco.com/images/water-heater.webp',
  },
};

export const metadata: Metadata = {
  title: 'Water Heater Replacement in Redding, CA — Same-Day Service | Topline Plumbing',
  description:
    "Redding's water heater specialists. Same-day replacement, tankless conversions, and honest pricing from a licensed local plumber since 1998. CSLB #596557. Call (530) 704-6989.",
  alternates: {
    canonical: 'https://toplineplumbingco.com/water-heater-replacement-redding',
  },
  openGraph: {
    title: 'Water Heater Replacement in Redding, CA — Same-Day Service | Topline Plumbing',
    description:
      "Redding's water heater specialists. Same-day replacement, tankless conversions, and honest pricing from a licensed local plumber since 1998.",
    url: 'https://toplineplumbingco.com/water-heater-replacement-redding',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Water Heater Replacement in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const waterHeaterFAQs = [
  {
    question: 'How fast can you replace my water heater in Redding?',
    answer:
      "If you call before noon during business hours (Mon–Fri 8a–4:30p), we can usually have hot water back the same day. We keep standard 40 and 50-gallon gas and electric tanks stocked on our service trucks. Call (530) 704-6989 for current availability — we'll tell you straight whether we can be there today.",
  },
  {
    question: 'How much does water heater replacement cost in Redding, CA?',
    answer:
      "Every replacement is quoted upfront before any work starts. The total includes the new unit, labor, permit, disposal, and seismic strapping. Tankless conversions are higher because of the additional gas line and venting work. Call (530) 704-6989 for a free estimate — no surprise charges.",
  },
  {
    question: 'Why do water heaters fail so fast in Redding?',
    answer:
      "Redding's hard, mineral-heavy water is the main reason. Sediment settles to the bottom of the tank, insulates the burner or element, and causes overheating that cracks the tank. Most Redding-area water heaters fail at 8–10 years instead of the 12–15 you'd see in soft-water regions. Annual flushing helps, but tanks past 10 years are on borrowed time.",
  },
  {
    question: 'Should I switch to a tankless water heater?',
    answer:
      "Tankless makes sense if you have high hot water demand (4+ people), want to free up garage or closet space, or plan to stay in the home 7+ years to recoup the higher upfront cost. They last 20+ years (vs 8–12 for tank), produce endless hot water, and cut energy use 20–30%. We'll give you an honest read on whether tankless is the right call for your home.",
  },
  {
    question: 'Is Topline Plumbing a licensed water heater installer?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We pull permits on every water heater install, schedule the inspection, and stand behind our installation labor.',
  },
  {
    question: 'Do you handle the permit and inspection?',
    answer:
      "Yes — California requires a plumbing permit for water heater replacement, and Topline pulls the permit, schedules the inspection, and handles all the code paperwork. The permit fee is included in your quoted price. You don't deal with the City of Redding building department — we do.",
  },
];

export default function WaterHeaterReplacementReddingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Water Heater Replacement Redding',
            url: 'https://toplineplumbingco.com/water-heater-replacement-redding',
          },
        ]}
      />
      <FAQSchema faqs={waterHeaterFAQs} />
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

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: copy */}
            <div className="text-center lg:text-left">
              <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
                Redding's Water Heater Specialists · Licensed Since 1998
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
                Water Heater Replacement in Redding, CA
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                Local family-run plumbers — not a corporate dispatch center. Same-day tank replacement,
                tankless conversions, and honest upfront pricing. CSLB #596557.
              </p>

              <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
                <span className="text-primary-light">Call before noon Mon–Fri →</span> usually back to hot
                water the same day
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
                Free estimate before work starts · Permit, disposal, and seismic strapping
                included · Mon–Fri 8:00a–4:30p
              </p>
            </div>

            {/* Right: image */}
            <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/wh-replacement-hero.webp"
                alt="Topline Plumbing technician installing a new A.O. Smith ProLine water heater in a Redding, CA home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
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

      {/* Brands we install */}
      <section className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="uppercase tracking-widest text-xs md:text-sm text-gray-500 font-semibold mb-4">
            Brands We Install
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg md:text-xl font-heading font-bold text-navy-900">
            <span>Bradford White</span>
            <span className="text-gray-300">·</span>
            <span>Rheem</span>
            <span className="text-gray-300">·</span>
            <span>AO Smith</span>
            <span className="text-gray-300">·</span>
            <span>Navien</span>
            <span className="text-gray-300">·</span>
            <span>Rinnai</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Standard 40 &amp; 50-gallon gas and electric tanks stocked on our service trucks.
          </p>
        </div>
      </section>

      {/* Tank Sizes We Install */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Water Heater Sizes We Install in Redding
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We size every water heater to match your household — undersized units short-cycle and
              fail early; oversized units waste energy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div className="text-2xl font-heading font-bold text-navy-900 mb-2">
                40-Gallon Water Heater
              </div>
              <p className="text-gray-700 leading-relaxed">
                Best fit for households of 1–3 people. Most common size we replace in Redding —
                stocked on our trucks for same-day install. Available in gas and electric.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div className="text-2xl font-heading font-bold text-navy-900 mb-2">
                50-Gallon Water Heater
              </div>
              <p className="text-gray-700 leading-relaxed">
                Best fit for households of 3–5 people. Standard for Redding-area homes with multiple
                bathrooms. Stocked on our trucks. Available in gas and electric.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <div className="text-2xl font-heading font-bold text-navy-900 mb-2">
                75-Gallon Water Heater
              </div>
              <p className="text-gray-700 leading-relaxed">
                Best fit for larger households (5+ people), homes with soaking tubs, or properties
                with high simultaneous hot water demand. Available by special order, typically
                installed within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Type Comparison */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Gas vs. Electric vs. Tankless — Which Is Right for Your Redding Home?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The right fuel type depends on what's already in your home, your hot water demand, and
              how long you plan to stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Gas Water Heater
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Heats faster than electric, recovers quicker, and runs cheaper to operate in Redding
                where natural gas is widely available. Best replacement choice for homes already
                plumbed for gas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lower per-month operating cost</li>
                <li>• Fast recovery rate (good for big families)</li>
                <li>• Works during power outages (with standing pilot)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Electric Water Heater
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Best fit for homes without natural gas service or installs where venting a gas unit
                is impractical. Lower install cost than gas, but higher monthly operating cost.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lower upfront install cost</li>
                <li>• No venting or combustion air required</li>
                <li>• Safer in tight closet installations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border-2 border-primary p-6 shadow-md relative">
              <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Best Long-Term
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Tankless Water Heater
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Endless hot water, 20+ year lifespan, and 20–30% energy savings. Higher upfront cost
                but pays back over time, especially for households staying 7+ years.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Endless hot water on demand</li>
                <li>• 20+ year lifespan (vs 8–12 for tank)</li>
                <li>• Frees up garage / closet floor space</li>
              </ul>
              <Link
                href="/services/tankless"
                className="inline-block mt-4 text-primary font-semibold hover:underline text-sm"
              >
                See full tankless guide →
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Not sure which is right? Call <a href="tel:5307046989" className="text-primary font-semibold hover:underline">(530) 704-6989</a> — we'll
            assess your existing setup and give you an honest recommendation before quoting.
          </p>
        </div>
      </section>

      {/* Three options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Three Ways We Get Your Hot Water Back
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'll diagnose the problem, quote it upfront, and let you choose — repair,
              standard replacement, or tankless upgrade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Repair */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Option 1
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">Repair</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Best when the tank is under 8 years old and the failure is a single component —
                thermostat, heating element, thermocouple, or gas valve. We'll quote the repair
                upfront before any work starts.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
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
                  <span>Same-day diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
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
                  <span>Honest assessment — we'll tell you if replacement is smarter</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
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
                  <span>Workmanship warranty</span>
                </li>
              </ul>
              <Link
                href="/services/water-heater-repair"
                className="text-primary font-semibold hover:underline"
              >
                Learn more →
              </Link>
            </div>

            {/* Replace - featured */}
            <div className="bg-navy-900 text-white rounded-xl shadow-lg border-2 border-primary p-8 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Most Common
              </div>
              <div className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-2">
                Option 2
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">Standard Replacement</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Tank-to-tank replacement with a new 40, 50, or 75-gallon gas or electric unit.
                Same-day install in most cases. Includes tank, labor, permit, disposal, seismic
                strapping, and inspection scheduling.
              </p>
              <ul className="space-y-2 text-gray-200 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5"
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
                  <span>Bradford White, Rheem, AO Smith — your choice</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5"
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
                  <span>Permit, inspection, and seismic strapping included</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5"
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
                  <span>Old tank hauled away — no junk left behind</span>
                </li>
              </ul>
              <a
                href="tel:5307046989"
                className="text-primary-light font-semibold hover:underline"
              >
                Get a free quote: (530) 704-6989 →
              </a>
            </div>

            {/* Tankless */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 flex flex-col">
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Option 3
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3">Tankless Conversion</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Endless hot water, 20–30% energy savings, and 20+ year lifespan. Best for large
                households or homeowners staying 7+ years. We'll quote it upfront before any work
                starts.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
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
                  <span>Navien, Rinnai certified install</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
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
                  <span>Gas line and venting handled in-house</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
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
                  <span>Frees up garage / closet floor space</span>
                </li>
              </ul>
              <Link href="/services/tankless" className="text-primary font-semibold hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Redding Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and specialized in water heaters — not a corporate dispatch
              operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Same-Day When Possible',
                body: 'Standard 40 and 50-gallon tanks stay stocked on our trucks. Call before noon during business hours, get hot water back the same day in most cases.',
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "We don't show up, pull the old tank, then surprise you with the price. You see the full quote — tank, labor, permit, disposal — before we lift a wrench.",
              },
              {
                title: 'Permits & Code Handled',
                body: 'California law requires a permit for water heater replacement. Topline pulls it, schedules the inspection, and handles seismic strapping, expansion tank, and venting code automatically.',
              },
              {
                title: 'Specialists, Not Generalists',
                body: "We've replaced 2,800+ water heaters in Northern California. We know which brands handle Redding's hard water, which installs fail inspection, and how to spot the hidden issues cheaper plumbers miss.",
              },
              {
                title: 'Real Local Business Hours',
                body: 'Mon–Fri 8a–4:30p — straightforward hours from a real local family business. No after-hours markup pricing, no overnight dispatch surcharges, no hidden weekend rates.',
              },
              {
                title: 'No Pushy Upsells',
                body: "If a repair keeps your existing tank running, that's what we'll recommend. We won't sell you a new tank when you don't need one — and we'll tell you when replacement is the smarter call.",
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

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: copy */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
                Why Redding Water Heaters Fail Faster
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Redding sits in a region with hard, mineral-heavy water — high in calcium, magnesium,
                  and sediment. That mineral load is the main reason water heaters here fail at 8–10
                  years instead of the 12–15 you'd see in soft-water markets.
                </p>
                <p>
                  Sediment settles to the bottom of the tank, insulates the burner or heating element,
                  and forces the unit to run hotter and longer to heat the water above it. Eventually
                  the metal fatigues, the tank cracks, and it floods the garage.
                </p>
                <p>
                  We've seen this pattern thousands of times across Redding, Shasta Lake, Anderson, Palo
                  Cedro, and Bella Vista. If your unit is rumbling, popping, producing rusty water, or
                  past 8 years old, plan the replacement before it fails on you — it's cheaper than the
                  flood damage cleanup.
                </p>
              </div>
            </div>

            {/* Right: image */}
            <figure className="lg:sticky lg:top-24">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
                <Image
                  src="/images/wh-redding-sediment-failure.webp"
                  alt="Failed Redding water heater tank cut open showing thick mineral sediment buildup — the result of hard-water-driven corrosion that causes early failure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-3 italic">
                Real Redding-area water heater pulled from service — sediment crust like this is why
                Redding tanks fail at 8–10 years.
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 p-6 bg-navy-900 text-white rounded-xl max-w-4xl">
            <h3 className="text-xl font-heading font-bold mb-2">
              Annual Flush Service
            </h3>
            <p className="text-gray-200 mb-4">
              The single best thing you can do to extend your water heater's life in Redding.
              Flushes sediment, tests the pressure relief valve, checks the anode rod, and inspects
              for early leaks.
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

      {/* Live Google Reviews — auto-pulled weekly via Places API */}
      <GoogleReviews
        title="Trusted by Redding-Area Homeowners"
        subtitle="5.0 perfect rating on Google — auto-updated from real customer reviews."
      />


      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Water Heater Service Across Shasta County & Beyond
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day service in city limits. Foothill and Tahoe-area installs typically scheduled
            24–48 hours out.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              ['redding', 'Redding'],
              ['anderson', 'Anderson'],
              ['shasta-lake', 'Shasta Lake'],
              ['palo-cedro', 'Palo Cedro'],
              ['bella-vista', 'Bella Vista'],
              ['red-bluff', 'Red Bluff'],
              ['chico', 'Chico'],
              ['paradise', 'Paradise'],
              ['oroville', 'Oroville'],
              ['yuba-city', 'Yuba City'],
              ['marysville', 'Marysville'],
              ['grass-valley', 'Grass Valley'],
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
        faqs={waterHeaterFAQs}
        title="Water Heater Replacement FAQ — Redding, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready for Hot Water Today?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and specialized in water heaters. Call now for same-day availability
            during business hours.
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
