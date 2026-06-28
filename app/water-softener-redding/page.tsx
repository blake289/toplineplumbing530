import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/water-softener-redding#service',
  name: 'Water Softener Installation in Redding, CA',
  serviceType: 'Water Softener Installation',
  description:
    "Water softener installation in Redding, CA — with an honest assessment first. The City of Redding classifies its treated water as soft, so many homes don't need a softener; we tell you straight whether yours would benefit, then install the right unit if it does. Best fit is homes on private wells or harder groundwater. Licensed plumber CSLB #596557, serving Redding since 1998.",
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/water-softener-redding',
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
    name: 'Water Softener Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Softener Installation',
          serviceType: 'Water Softener Installation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Softener Replacement',
          serviceType: 'Water Softener Replacement',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Well-Water Softener Systems',
          serviceType: 'Well Water Softener Installation',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/water-softener-redding#webpage',
  url: 'https://toplineplumbingco.com/water-softener-redding',
  name: 'Water Softener Installation Redding, CA | Topline Plumbing',
  description:
    "Water softener installation in Redding, CA — with an honest assessment first. Most city water here is soft, so we tell you whether you actually need one. Call (530) 704-6989.",
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/water-softener-redding#service' },
};

export const metadata: Metadata = {
  title: 'Water Softener Installation Redding, CA | Topline Plumbing',
  description:
    "Water softener installation in Redding, CA — with an honest assessment first. Most city water here is soft, so we tell you whether you actually need one. Licensed since 1998. Call (530) 704-6989.",
  alternates: {
    canonical: 'https://toplineplumbingco.com/water-softener-redding',
  },
  openGraph: {
    title: 'Water Softener Installation Redding, CA | Topline Plumbing',
    description:
      "An honest take on water softeners in Redding. The city classifies its water as soft, so a lot of homes don't need one — we'll tell you straight, and install the right unit if you're on a well or harder water. Licensed local plumber since 1998.",
    url: 'https://toplineplumbingco.com/water-softener-redding',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Water Softener Installation in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const softenerFAQs = [
  {
    question: 'Does Redding have hard water — do I need a softener?',
    answer:
      "Probably less than you'd think. The City of Redding classifies its treated water as soft in its annual water quality report. About 77% of the city's supply comes from surface sources (the Sacramento River and Whiskeytown), which test soft, and roughly 23% comes from groundwater, which tests moderately hard. So most homes on city water are not dealing with the kind of hardness that demands a softener. Where it changes is private wells — a lot of rural homes around Palo Cedro, Bella Vista, and the foothills draw untreated well water that can run harder. The honest answer is that it depends on your specific water, and we'll tell you straight rather than sell you a unit you don't need.",
  },
  {
    question: 'How do I know if my home would actually benefit from a softener?',
    answer:
      "The everyday signs are white crusty scale building up on faucets and showerheads, spotting or film on glasses and dishes, soap and shampoo that won't lather well, and scale inside kettles or the water heater. If you're on a private well, or you're seeing several of those at once, a softener may be worth it. If you're on city surface water and not seeing any of that, you very likely don't need one. We can take a look at what your water is actually doing in the home before you spend a dollar on equipment.",
  },
  {
    question: 'What does a water softener actually do?',
    answer:
      "A whole-house softener treats the water as it enters your home, exchanging the calcium and magnesium minerals that cause hardness for sodium (or potassium). That's what stops new scale from forming on fixtures, in pipes, and inside the water heater, and it's why softened water lathers more easily. It does not disinfect water or remove most other contaminants — it specifically targets hardness. If your goal is broader whole-house water treatment beyond softening, that's a more specialized system, and we'll point you in the right direction.",
  },
  {
    question: 'Will a softener help my water heater last longer?',
    answer:
      "It can, on harder water. Hardness minerals are part of what settles out as sediment in a tank water heater, and that sediment is the main thing that wears a heater out early. On a home with genuinely hard well water, cutting the hardness reduces that buildup. On soft city water, the bigger lever is simply flushing the tank once a year — which is cheaper than a softener. We look at your situation and recommend whichever actually fits, not whichever costs more.",
  },
  {
    question: 'How much does a water softener cost to install in Redding?',
    answer:
      "It depends on the system and the plumbing at your home — where the main line enters, whether a drain and outlet are nearby, and whether it's a new install or a swap of an existing unit. Every job is quoted upfront before any work starts, with no surprise charges. Call (530) 704-6989 for a free estimate with any service.",
  },
  {
    question: 'Do you install softeners for homes on a private well?',
    answer:
      "Yes — well homes around Palo Cedro, Bella Vista, and the foothills are where softeners most often make sense, because untreated well water can run harder than treated city water. We'll look at what your well water is doing in the home and install a system sized for it. For broader well-water treatment beyond softening, we'll let you know if a more specialized setup is the better route.",
  },
  {
    question: 'Are you available 24/7 to install a softener?',
    answer:
      "We run real local business hours, Mon–Fri 8a–4:30p — softener installs are scheduled work, not an after-hours emergency, so we book them during the day. If you have an active plumbing emergency, text (530) 704-6989 and we respond first thing the next business day, and call 911 for any genuine safety hazard.",
  },
];

export default function WaterSoftenerReddingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Water Softener Redding',
            url: 'https://toplineplumbingco.com/water-softener-redding',
          },
        ]}
      />
      <FAQSchema faqs={softenerFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Redding Water Softener Installation · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Water Softener Installation in Redding, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Here&apos;s the honest part most plumbers won&apos;t lead with: the City of Redding
              classifies its water as soft, so a lot of homes here don&apos;t actually need a softener.
              Topline Plumbing (CSLB #596557) will tell you straight whether yours would benefit — and
              if you&apos;re on a private well or harder water and it&apos;s worth it, we install the
              right system and quote it upfront. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">We won&apos;t sell you a softener</span> you
              don&apos;t need
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
              Free estimate with any service · Honest needs assessment first · Mon–Fri 8:00a–4:30p ·
              CSLB #596557 · Based in Redding
            </p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">28+</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Years in Redding</div>
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

      {/* Do you actually need one? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
              Do You Actually Need a Softener in Redding?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Most plumbers would rather just sell you the unit. We&apos;d rather you spend the money
                only if it does something. So here are the real numbers: the City of Redding
                classifies its treated water as soft in its annual water quality report. Roughly 77% of
                the city&apos;s supply comes from surface sources — the Sacramento River and
                Whiskeytown — which test soft. The remaining 23% comes from groundwater, which tests
                moderately hard. For most homes on city water, that&apos;s simply not the kind of
                hardness that justifies a softener.
              </p>
              <p>
                Where it genuinely changes is private wells. A lot of homes out in Palo Cedro, Bella
                Vista, and the foothills draw untreated well water that can run noticeably harder than
                treated city water — and that&apos;s where a softener earns its keep. If you&apos;re on
                a well, or you&apos;re seeing the signs below in town, it&apos;s worth a real look.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-white rounded-xl border-2 border-primary p-8 shadow-sm">
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                  A softener may be worth it if…
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'You’re on a private well rather than city water',
                    'White, crusty scale keeps building on faucets and showerheads',
                    'Glasses and dishes come out spotted or filmy',
                    'Soap and shampoo barely lather',
                    'You’re finding scale in the kettle or water heater',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                  You probably don&apos;t need one if…
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    'You’re on Redding city surface water',
                    'You’re not seeing scale, spotting, or lather problems',
                    'Your only real concern is the water heater (annual flushing is cheaper)',
                    'You want general filtration, not hardness removal (different system)',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold flex-shrink-0">—</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-gray-600 mt-8 max-w-2xl">
              Not sure which side you&apos;re on? Call{' '}
              <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
                (530) 704-6989
              </a>{' '}
              — we&apos;ll look at what your water is actually doing in the home before you spend
              anything on equipment.
            </p>
          </div>
        </div>
      </section>

      {/* What a softener does */}
      <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              What a Water Softener Does (and What It Doesn&apos;t)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Straight talk on what you&apos;re actually buying, so the decision is an easy one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">What it does</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Removes the calcium &amp; magnesium that cause hardness</li>
                <li>• Stops new scale forming on fixtures and in pipes</li>
                <li>• Cuts scale buildup inside the water heater</li>
                <li>• Lets soap and shampoo lather more easily</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">What it doesn&apos;t</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• It doesn&apos;t disinfect your water</li>
                <li>• It doesn&apos;t remove most other contaminants</li>
                <li>• It isn&apos;t a whole-house filtration system</li>
                <li>• It won&apos;t fix water that was already soft</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">How we install it</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Point-of-entry, where the main line enters the home</li>
                <li>• Sized to your household and water</li>
                <li>• Proper drain, bypass, and outlet connections</li>
                <li>• Quoted upfront, installed to code</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Looking for broader whole-house treatment beyond softening? That&apos;s a more specialized
            system — tell us your goal and we&apos;ll point you the right way.
          </p>
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
              Local, licensed, and straight with you about whether you even need the equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Honest Needs Assessment',
                body: "We start by telling you whether a softener will actually do anything at your home. If your water's already soft, we'll say so — no equipment sale.",
              },
              {
                title: 'Based Right Here in Redding',
                body: "Redding is our home turf, and we know the difference between city-water homes in town and well homes out in Palo Cedro, Bella Vista, and the foothills.",
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: 'We assess your water and plumbing, then show you the price before any work begins. No surprise charges, no meter running while you wait.',
              },
              {
                title: 'Sized and Installed to Code',
                body: 'We install at the point of entry with proper drain, bypass, and outlet connections — sized to your household so it actually keeps up.',
              },
              {
                title: 'Well-Water Experience',
                body: "Untreated well water is where softeners earn their keep, and rural Shasta County is full of wells. We size systems for the harder water those homes pull.",
              },
              {
                title: 'Licensed Local Family Business',
                body: 'CSLB #596557, serving Redding since 1998. Real local business hours, Mon–Fri 8a–4:30p — no after-hours surcharge games.',
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
      <section className="py-16 md:py-20 bg-gray-50">
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

      {/* Related services */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
            More Plumbing Help in Redding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/water-heater-repair-redding"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Water Heater Repair in Redding
              </h3>
              <p className="text-gray-600 text-sm">
                Sediment is what wears tanks out early — gas and electric repair, plus the flush that
                slows it.
              </p>
            </Link>
            <Link
              href="/water-heater-replacement-redding"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Water Heater Replacement
              </h3>
              <p className="text-gray-600 text-sm">
                When a tank is past saving — upfront-priced replacement, permit and code handled.
              </p>
            </Link>
            <Link
              href="/services/repiping-services"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Repiping &amp; Water Lines
              </h3>
              <p className="text-gray-600 text-sm">
                Aging galvanized supply lines and repipes for older Redding-area homes.
              </p>
            </Link>
            <Link
              href="/areas/redding"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                All Plumbing in Redding
              </h3>
              <p className="text-gray-600 text-sm">
                Everything we do across Redding and Shasta County.
              </p>
            </Link>
            <Link
              href="/areas/palo-cedro"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Plumbing in Palo Cedro
              </h3>
              <p className="text-gray-600 text-sm">
                Well-water country — where softeners most often make sense.
              </p>
            </Link>
            <Link
              href="/contact"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Get a Free Estimate
              </h3>
              <p className="text-gray-600 text-sm">
                Tell us what your water is doing and we&apos;ll give you a straight answer.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Water Softener Installation Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Installs are scheduled work, booked during business hours. Well-water communities in the
            foothills are exactly where these systems tend to pay off.
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
        faqs={softenerFAQs}
        title="Water Softener FAQ — Redding, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Wondering If You Even Need a Softener? Let&apos;s Find Out.
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            We&apos;ll tell you honestly whether your Redding water calls for one — and install the
            right system if it does. Licensed, local, upfront pricing.
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
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Licensed, bonded, insured · Based in Redding
          </p>
        </div>
      </section>
    </>
  );
}
