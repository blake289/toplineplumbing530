import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

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

      {/* Hero */}
      <section className="py-20 md:py-28 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
            Redding's Water Heater Specialists · Licensed Since 1998
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white leading-tight">
            Water Heater Replacement in Redding, CA
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed">
            Local family-run plumbers — not a corporate dispatch center. Same-day tank replacement,
            tankless conversions, and honest upfront pricing. CSLB #596557.
          </p>

          {/* Same-day note (matches existing /cost page language) */}
          <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-10 text-base md:text-lg text-white font-semibold">
            <span className="text-primary-light">Call before noon Mon–Fri →</span> usually back to hot
            water the same day
          </div>

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
              Get a Free Estimate
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            Free estimate before work starts · Permit, disposal, and seismic strapping
            included · Mon–Fri 8:00a–4:30p
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
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
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

          <div className="mt-10 p-6 bg-navy-900 text-white rounded-xl">
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
