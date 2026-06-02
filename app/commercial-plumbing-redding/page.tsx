import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/commercial-plumbing-redding#service',
  name: 'Commercial Plumbing in Redding, CA',
  serviceType: 'Commercial Plumbing',
  description:
    'Commercial plumbing for Redding, CA businesses from a licensed local contractor. Backflow testing and repair, commercial water heaters, drain and sewer service, fixture and supply repairs, leak detection, and scheduled preventive maintenance for restaurants, offices, retail, and small multi-unit properties. Licensed plumber CSLB #596557, serving Redding since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/commercial-plumbing-redding',
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
    name: 'Commercial Plumbing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Backflow Testing & Repair',
          serviceType: 'Backflow Prevention Testing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Water Heater Service & Replacement',
          serviceType: 'Commercial Water Heater Installation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Drain & Sewer Cleaning',
          serviceType: 'Commercial Drain Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Fixture & Supply Line Repairs',
          serviceType: 'Commercial Fixture Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Leak Detection',
          serviceType: 'Leak Detection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Scheduled Preventive Plumbing Maintenance',
          serviceType: 'Preventive Plumbing Maintenance',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Business' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/commercial-plumbing-redding#webpage',
  url: 'https://toplineplumbingco.com/commercial-plumbing-redding',
  name: 'Commercial Plumbing in Redding, CA — Licensed Local Contractor',
  description:
    "Commercial plumbing for Redding businesses — backflow testing, water heaters, drains, leak detection, and preventive maintenance from a licensed local plumber since 1998.",
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/commercial-plumbing-redding#service' },
};

export const metadata: Metadata = {
  title: 'Commercial Plumbing in Redding, CA — Licensed Local Contractor | Topline Plumbing',
  description:
    "Commercial plumbing for Redding businesses — backflow testing, water heaters, drains, leak detection, and preventive maintenance from a licensed local plumber since 1998. CSLB #596557. Call (530) 704-6989.",
  alternates: {
    canonical: 'https://toplineplumbingco.com/commercial-plumbing-redding',
  },
  openGraph: {
    title: 'Commercial Plumbing in Redding, CA — Licensed Local Contractor | Topline Plumbing',
    description:
      "Commercial plumbing for Redding businesses — backflow testing, water heaters, drains, leak detection, and preventive maintenance from a licensed local plumber since 1998.",
    url: 'https://toplineplumbingco.com/commercial-plumbing-redding',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Commercial Plumbing in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const commercialFAQs = [
  {
    question: 'How fast can a commercial plumber get to my Redding business?',
    answer:
      "During business hours (Mon–Fri 8:00a–4:30p), our typical on-site response for Redding is 30–60 minutes. Redding is our home base, so dispatch is fast. When a plumbing problem is shutting down your operation — a backed-up kitchen line, a failed water heater, a leak over the sales floor — call (530) 704-6989 and we'll tell you straight whether we can be there today.",
  },
  {
    question: 'Do you offer after-hours or 24/7 commercial plumbing in Redding?',
    answer:
      "We are a local family-run shop with set hours: Monday through Friday, 8:00a to 4:30p. We do not run a 24/7 overnight crew. If something fails after hours, text (530) 704-6989 and we'll respond first thing the next business day. For an active safety issue — a gas leak or a major flood — call 911 and shut off your main water valve right away.",
  },
  {
    question: 'Do you handle backflow testing for businesses?',
    answer:
      "Yes. Many Redding commercial properties — restaurants, properties with irrigation, and buildings on the city water system — are required to have their backflow assemblies tested and certified annually. As a licensed California plumbing contractor (CSLB #596557), we test and repair backflow prevention assemblies and coordinate the annual certification so you stay compliant.",
  },
  {
    question: 'Do you service restaurants, offices, and retail in Redding?',
    answer:
      "Yes. We work with Redding restaurants, offices, retail shops, and small multi-unit and property-managed buildings — the kind of light commercial work a licensed local shop handles well. That includes commercial water heaters, grease-prone kitchen and main drain lines, fixture and supply repairs, leak detection, and scheduled maintenance. We do not take on large-scale industrial work or new commercial construction.",
  },
  {
    question: 'How much does commercial plumbing cost in Redding, CA?',
    answer:
      "Every commercial job is quoted upfront before any work starts — you'll know the full cost before we lift a wrench, with no surprise charges. Pricing depends on the scope: a backflow test is straightforward, while a commercial water heater or sewer line is quoted after we assess it on-site. Call (530) 704-6989 for a free estimate.",
  },
  {
    question: 'Can you work around our business hours to minimize downtime?',
    answer:
      "Yes — that's the whole point. We schedule commercial work to hit your slow periods where we can, move quickly once we're on-site, and keep the disruption to your customers and staff to a minimum. For recurring issues, scheduled preventive maintenance keeps small problems from becoming the kind that close your doors during a rush.",
  },
  {
    question: 'Are you licensed and insured for commercial plumbing work?',
    answer:
      "Yes. Topline Plumbing is a fully licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We're authorized to perform commercial plumbing work throughout Redding and Shasta County, and we can provide written invoices and documentation for your records or property manager.",
  },
  {
    question: 'Do you offer scheduled preventive maintenance for commercial properties?',
    answer:
      "Yes. For Redding businesses and property managers, scheduled maintenance — drain cleaning before lines clog, water heater checks, backflow testing, and fixture inspections — is far cheaper than an emergency mid-service. We'll build a simple maintenance schedule around your property and your operating hours.",
  },
];

export default function CommercialPlumbingReddingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Commercial Plumbing Redding',
            url: 'https://toplineplumbingco.com/commercial-plumbing-redding',
          },
        ]}
      />
      <FAQSchema faqs={commercialFAQs} />
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
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Redding Commercial Plumbing · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Commercial Plumbing in Redding, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) commercial plumbing contractor serving
              Redding, CA businesses. We offer same-day service during business hours (Mon–Fri
              8a–4:30p) with upfront pricing — backflow testing, commercial water heaters,
              drains, leak detection, and preventive maintenance. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">One licensed local team →</span> work around your
              business hours to minimize downtime
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
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Typical Redding response 30–60 minutes during
              business hours
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

      {/* Commercial services */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Commercial Plumbing Services for Redding Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The light-commercial work a licensed local shop does best — for restaurants, offices,
              retail, and small multi-unit and property-managed buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Backflow Testing & Repair',
                body: 'Annual testing and repair of backflow prevention assemblies — required for many Redding restaurants, irrigated properties, and buildings on city water. We coordinate the certification and handle the compliance paperwork.',
              },
              {
                title: 'Commercial Water Heaters',
                body: 'Service and replacement of commercial water heaters — so your kitchen, restrooms, or break room never go without hot water during operating hours. Quoted upfront before any work starts.',
              },
              {
                title: 'Drain & Sewer Cleaning',
                body: 'Power augering and camera inspection for grease-prone kitchen lines, floor drains, restroom lines, and the main sewer. We clear the clog and tell you why it happened so it stops recurring.',
              },
              {
                title: 'Fixture & Supply Repairs',
                body: 'Commercial toilets, urinals, faucets, hose bibs, and supply-line repairs. Fast turnaround on the everyday failures that take a restroom or prep station out of service.',
              },
              {
                title: 'Leak Detection',
                body: "Electronic and acoustic leak detection to pinpoint a hidden leak before it damages your floors, inventory, or downstairs tenant — without tearing up the whole building to find it.",
              },
              {
                title: 'Scheduled Preventive Maintenance',
                body: 'A simple maintenance schedule built around your property and your hours — drain cleaning, water heater checks, backflow testing, and fixture inspections before they become emergencies.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
            Not sure if we cover your job? Call{' '}
            <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
              (530) 704-6989
            </a>{' '}
            — we'll tell you honestly whether it's the right fit for a licensed local shop or
            something better suited to a large-scale industrial contractor.
          </p>
        </div>
      </section>

      {/* Minimize downtime */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Built to Keep Your Doors Open
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For a business, a plumbing failure isn't an inconvenience — it's lost revenue. Here's
              how we keep the disruption short.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Fast Local Dispatch
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Redding is our home base. During business hours, typical on-site response is 30–60
                minutes — so a backed-up line or failed water heater gets handled before it costs you
                a full day.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Work Around Your Hours
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We schedule into your slow periods where we can, move quickly once we're on-site, and
                keep the mess and noise away from your customers and staff.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Upfront Pricing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You get the full quote before any work starts — no surprise charges, no urgency
                upcharge, and clean written invoices for your records or property manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Redding Businesses Call Topline for Commercial Plumbing
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Redding is home base. We've worked on plumbing systems in nearly every neighborhood —
              from the Enterprise and East Redding commercial corridors to downtown and out toward
              the Garden Tract. We know the area's building stock: mid-century structures with
              galvanized supply lines, '80s and '90s construction with copper, and newer builds on
              PEX. Each one behaves differently behind the wall, and that local knowledge saves a
              commercial property real diagnostic time.
            </p>
            <p>
              The same conditions that wear on Redding homes hit businesses harder, because the
              systems run all day. The Sacramento River and Shasta Lake supply means moderate
              hardness, so sediment buildup shortens the life of commercial water heaters that are
              cycling constantly for a kitchen or restroom block. Redding's long 110°F-plus summer
              stretches accelerate wear on outdoor supply lines and the irrigation backflow
              assemblies that many commercial properties are required to have certified every year. And in
              older buildings near the original core, end-of-life galvanized steel supply lines show
              up as pinhole leaks and pressure loss right when a busy floor can least afford it.
            </p>
            <p>
              That's the work we're built for: backflow testing, commercial water heaters,
              grease-prone kitchen and main drain lines, leak detection in older buildings, and
              scheduled maintenance that catches the small problems before they close your doors
              during a rush. We're a licensed local family business, not a corporate dispatch center
              — so the person who quotes the job is part of the same shop that shows up to do it.
            </p>
          </div>

          <div className="mt-10 p-6 bg-navy-900 text-white rounded-xl">
            <h3 className="text-xl font-heading font-bold mb-2">Property Managers & Multi-Unit</h3>
            <p className="text-gray-200 mb-4">
              We work with Redding-area property managers and small multi-unit buildings — coordinate
              access with tenants, provide written invoices for owner records, and keep one licensed
              team across all your properties so nobody has to chase down a different contractor each
              time.
            </p>
            <a
              href="tel:5307046989"
              className="inline-flex items-center gap-2 text-primary-light font-semibold hover:underline"
            >
              Set up service: (530) 704-6989 →
            </a>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Redding Businesses Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and accountable — one team that knows your property and your priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Same-Day During Business Hours',
                body: "Redding is our home base, so during business hours we can often be on-site the same day — fast enough to keep a clogged line or failed heater from costing you a full day of revenue.",
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "We don't start a commercial job and surprise you with the price after. You see the full quote first, with clean written invoices for your books or property manager.",
              },
              {
                title: 'Licensed, Bonded & Insured',
                body: 'CSLB License #596557. A fully licensed California plumbing contractor authorized for commercial work across Redding and Shasta County — with documentation for your records.',
              },
              {
                title: 'Compliance Handled',
                body: 'Backflow assemblies tested and repaired on schedule, certification coordinated, and the paperwork filed — so your business stays compliant without you having to track the deadline.',
              },
              {
                title: 'Minimal Downtime',
                body: 'We schedule into your slow hours where we can and move quickly on-site. The goal is always to get you back to serving customers as fast as possible.',
              },
              {
                title: 'One Local Team',
                body: 'Family owned and operated since 1998. The same shop quotes the job, does the work, and stands behind it — not a rotating cast of subcontractors.',
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

      {/* Related services */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Related Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the specific services behind our commercial work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/drain-cleaning"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">Drain Cleaning →</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Power augering and camera inspection for grease-prone kitchen and main lines.
              </p>
            </Link>
            <Link
              href="/services/leak-detection"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">Leak Detection →</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pinpoint hidden leaks before they damage floors, inventory, or a downstairs tenant.
              </p>
            </Link>
            <Link
              href="/services/emergency"
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Emergency Plumbing →
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Same-day emergency response during business hours when a failure can't wait.
              </p>
            </Link>
          </div>
          <p className="text-center text-gray-600 mt-8">
            Serving a Redding business?{' '}
            <Link href="/emergency-plumber-redding" className="text-primary font-semibold hover:underline">
              Emergency plumber in Redding
            </Link>{' '}
            ·{' '}
            <Link href="/drain-cleaning-redding" className="text-primary font-semibold hover:underline">
              Drain cleaning in Redding
            </Link>{' '}
            ·{' '}
            <Link href="/areas/redding" className="text-primary font-semibold hover:underline">
              All Redding plumbing services
            </Link>
          </p>
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
              Trusted by Redding Businesses & Homeowners
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
            Commercial Plumbing Across Shasta County & Beyond
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Based in Redding, serving businesses and property managers across the surrounding area.
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
        faqs={commercialFAQs}
        title="Commercial Plumbing FAQ — Redding, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Keep Your Business Running
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and accountable. Call now for same-day commercial availability during
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
