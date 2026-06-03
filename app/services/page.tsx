import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Plumbing Services in Redding, CA | Topline Plumbing',
  description:
    'Full-service plumbing in Redding & Shasta County: emergency plumbing, water heater repair, drain cleaning, tankless, sewer line, gas line, leak detection, repiping, and fixture installs. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services' },
  openGraph: {
    title: 'Plumbing Services in Redding, CA | Topline Plumbing',
    description:
      'Full-service plumbing in Redding & Shasta County: emergency plumbing, water heater repair, drain cleaning, tankless, sewer line, gas line, leak detection, repiping, and fixture installs. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Plumbing Services in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const services = [
  {
    href: '/services/emergency',
    title: 'Emergency Plumbing',
    description:
      'Same-day response for burst pipes, gas leaks, and flooding during business hours.',
  },
  {
    href: '/services/water-heater-repair',
    title: 'Water Heater Repair',
    description:
      'Same-day diagnostics and repair for tank water heaters that quit, leak, or run cold.',
  },
  {
    href: '/services/drain-cleaning',
    title: 'Drain Cleaning',
    description:
      'Clear clogged sinks, tubs, and main lines with professional snaking and hydro-jetting.',
  },
  {
    href: '/services/tankless',
    title: 'Tankless Water Heaters',
    description:
      'Tankless water heater installation for endless hot water and lower energy bills.',
  },
  {
    href: '/services/sewer-line',
    title: 'Sewer Line Repair & Replacement',
    description:
      'Camera inspection, root removal, and full sewer line repair or replacement.',
  },
  {
    href: '/services/gas-line',
    title: 'Gas Line Repair & Installation',
    description:
      'Safe gas line repair, installation, and leak testing for appliances and additions.',
  },
  {
    href: '/services/leak-detection',
    title: 'Leak Detection',
    description:
      'Pinpoint hidden slab, wall, and underground leaks before they cause major damage.',
  },
  {
    href: '/services/repiping-services',
    title: 'Repiping Services',
    description:
      'Whole-home repipes to replace failing galvanized or leak-prone pipes for good.',
  },
  {
    href: '/services/fixture-installs',
    title: 'Fixture Installation',
    description:
      'Faucets, toilets, sinks, garbage disposals, and fixture upgrades installed right.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
            Plumbing Services in Redding &amp; Shasta County
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Topline Plumbing has been a family-owned, licensed plumber serving
            Redding, Anderson, Shasta Lake, and the rest of Shasta County since
            1998. From a 2am burst pipe to a planned whole-home repipe, we show
            up on time, quote the price upfront, and stand behind every job.
            Explore our services below and call when you&apos;re ready.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center flex-wrap text-sm">
          <Link href="/" className="text-blue-600 hover:underline py-2">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Services</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold uppercase tracking-wider">
                What We Do
              </span>
              <div className="w-8 h-[2px] bg-[#dc2626]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1e3a5f] mb-4">
              Residential &amp; Commercial Plumbing, Done Right
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We handle the full range of plumbing work for homes and businesses
              across Northern California &mdash; repairs, installs, and the kind
              of urgent fixes that can&apos;t wait. We&apos;re licensed under
              CSLB #596557, fully insured, and reachable Monday through Friday,
              8:00a&ndash;4:30p. Pick the service you need to learn more.
            </p>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 focus-visible:shadow-md focus-visible:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#dc2626] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#1e3a5f] group-hover:text-[#dc2626] transition-colors duration-150">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular city pages */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1e3a5f] mb-3">
              Plumbing by City &amp; Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Looking for a specific service in your town? Jump straight to the local page for the
              fastest answer on response times, pricing, and what we cover in your area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['/emergency-plumber-redding', 'Emergency Plumber in Redding'],
              ['/drain-cleaning-redding', 'Drain Cleaning in Redding'],
              ['/sewer-line-redding', 'Sewer Line Repair in Redding'],
              ['/water-heater-replacement-redding', 'Water Heater Replacement in Redding'],
              ['/emergency-plumber-anderson', 'Emergency Plumber in Anderson'],
              ['/drain-cleaning-anderson', 'Drain Cleaning in Anderson'],
              ['/emergency-plumber-shasta-lake', 'Emergency Plumber in Shasta Lake'],
              ['/drain-cleaning-red-bluff', 'Drain Cleaning in Red Bluff'],
              ['/commercial-plumbing-redding', 'Commercial Plumbing in Redding'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="block bg-white border border-gray-200 rounded-lg px-5 py-4 text-[#1e3a5f] font-medium hover:border-[#dc2626] hover:text-[#dc2626] hover:shadow-sm transition-all"
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 bg-[#dc2626]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Call and tell us what&apos;s going on. We&apos;ll diagnose it,
            quote it upfront, and get it handled &mdash; same-day when we can.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5307046989"
              className="bg-white text-[#1e3a5f] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:-translate-y-0.5 focus-visible:bg-gray-100 focus-visible:-translate-y-0.5 transition-all duration-200"
            >
              Call (530) 704-6989
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 focus-visible:bg-white/10 transition-all duration-200"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
