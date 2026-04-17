import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Service Areas — Plumber in Redding, Chico & Northern CA | Topline Plumbing',
  description:
    'Topline Plumbing serves 15+ cities across Northern California. Licensed plumbers in Redding, Anderson, Chico, Paradise, Oroville, Yuba City, and more. Same-day service. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/areas' },
  openGraph: {
    title: 'Service Areas — Plumber in Redding & Northern CA | Topline Plumbing',
    description:
      'Licensed plumbers serving 15+ Northern California cities. Same-day emergency service Mon–Fri 8:00a–4:30p. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/areas',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Northern California Service Areas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const serviceAreas = [
  {
    city: 'Redding',
    slug: 'redding',
    county: 'Shasta County',
    description: 'Our home base since 1998. Same-day plumbing service for all of Redding and surrounding neighborhoods.',
    primary: true,
  },
  {
    city: 'Anderson',
    slug: 'anderson',
    county: 'Shasta County',
    description: 'Licensed plumbers serving Anderson with emergency plumbing, drain cleaning, and water heater service.',
    primary: true,
  },
  {
    city: 'Shasta Lake',
    slug: 'shasta-lake',
    county: 'Shasta County',
    description: 'Fast-response plumbing service for Shasta Lake City residents and businesses.',
    primary: true,
  },
  {
    city: 'Palo Cedro',
    slug: 'palo-cedro',
    county: 'Shasta County',
    description: 'Professional plumbing for Palo Cedro homes — water heaters, leaks, and drain cleaning.',
    primary: true,
  },
  {
    city: 'Bella Vista',
    slug: 'bella-vista',
    county: 'Shasta County',
    description: 'Serving Bella Vista with reliable, licensed plumbing — same-day appointments available.',
    primary: true,
  },
  {
    city: 'Red Bluff',
    slug: 'red-bluff',
    county: 'Tehama County',
    description: 'Licensed plumber in Red Bluff for emergency service, water heaters, and all residential plumbing needs.',
    primary: false,
  },
  {
    city: 'Chico',
    slug: 'chico',
    county: 'Butte County',
    description: 'Professional plumbing service for Chico homeowners — drain cleaning, water heaters, and emergency repairs.',
    primary: false,
  },
  {
    city: 'Paradise',
    slug: 'paradise',
    county: 'Butte County',
    description: 'Trusted plumber in Paradise. Repiping, water heaters, and rebuild plumbing specialists.',
    primary: false,
  },
  {
    city: 'Oroville',
    slug: 'oroville',
    county: 'Butte County',
    description: 'Licensed plumbing service in Oroville — emergency plumbing, leak detection, and drain cleaning.',
    primary: false,
  },
  {
    city: 'Yuba City',
    slug: 'yuba-city',
    county: 'Sutter County',
    description: 'Professional plumber serving Yuba City with same-day service and upfront pricing.',
    primary: false,
  },
  {
    city: 'Marysville',
    slug: 'marysville',
    county: 'Yuba County',
    description: 'Licensed plumbing in Marysville — water heater repair, drain cleaning, and emergency service.',
    primary: false,
  },
  {
    city: 'Auburn',
    slug: 'auburn',
    county: 'Placer County',
    description: 'Trusted plumber in Auburn for residential and commercial plumbing needs.',
    primary: false,
  },
  {
    city: 'Grass Valley',
    slug: 'grass-valley',
    county: 'Nevada County',
    description: 'Licensed plumber in Grass Valley — emergency plumbing, repiping, and water heater service.',
    primary: false,
  },
  {
    city: 'Truckee',
    slug: 'truckee',
    county: 'Nevada County',
    description: 'Mountain plumbing specialists in Truckee — freeze protection, emergency service, and water heaters.',
    primary: false,
  },
  {
    city: 'South Lake Tahoe',
    slug: 'south-lake-tahoe',
    county: 'El Dorado County',
    description: 'Licensed plumber in South Lake Tahoe for vacation homes, rentals, and emergency plumbing.',
    primary: false,
  },
];

const primaryAreas = serviceAreas.filter((a) => a.primary);
const extendedAreas = serviceAreas.filter((a) => !a.primary);

export default function AreasServedPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Service Areas', url: 'https://toplineplumbingco.com/areas' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight text-white">
            Areas We Serve in Northern California
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            Topline Plumbing provides licensed, insured plumbing service across
            15+ cities in Northern California. From our home base in Redding to
            South Lake Tahoe — same-day service during business hours
            (Mon&ndash;Fri 8:00a&ndash;4:30p) and upfront pricing everywhere we go.
          </p>
          <p className="text-base text-white/70 leading-relaxed max-w-3xl mx-auto">
            Family-owned since 1998 &bull; Licensed CA Plumber &bull; 27+ years experience
          </p>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Primary Service Area — Shasta County
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
            Our fastest response times. Most jobs scheduled same-day during business hours (Mon&ndash;Fri 8:00a&ndash;4:30p).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 p-6 md:p-8 transition-all hover:-translate-y-1 block group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs uppercase tracking-wider text-primary font-bold">
                    {area.county}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                  Plumber in {area.city}, CA
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  {area.description}
                </p>
                <span className="text-primary font-semibold text-sm group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                  View {area.city} services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Service Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Extended Service Area — Northern California
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
            Licensed plumbing service across Butte, Tehama, Sutter, Yuba, Placer, Nevada, and El Dorado counties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 p-6 md:p-8 transition-all hover:-translate-y-1 block group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs uppercase tracking-wider text-accent-blue font-bold">
                    {area.county}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-navy-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                  Plumber in {area.city}, CA
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  {area.description}
                </p>
                <span className="text-primary font-semibold text-sm group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                  View {area.city} services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Why Northern California Homeowners Choose Topline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mt-10">
            {[
              { title: 'Licensed & Insured', desc: 'Fully licensed California plumbing contractor. Bonded and insured on every job.' },
              { title: 'Same-Day Service', desc: 'Most repairs scheduled same-day. No waiting around for a plumber — we show up when we say we will.' },
              { title: 'Same-Day Emergency Response', desc: 'Burst pipe, sewer backup, or water heater flooding? During business hours (Mon–Fri 8:00a–4:30p) we aim to be on-site same-day.' },
              { title: 'Upfront Pricing', desc: 'You see the price before we start work. No hourly surprises, no hidden fees, no urgency upcharges.' },
              { title: '27+ Years Experience', desc: 'Family-owned since 1998. We\'ve completed thousands of jobs across Northern California.' },
              { title: 'All Major Services', desc: 'Water heaters, drains, sewer lines, gas lines, repiping, leak detection, and more.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-navy-900">{item.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Need a Plumber in Northern California?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            From Redding to South Lake Tahoe &mdash; Topline Plumbing is ready to help.
            Same-day service during business hours (Mon&ndash;Fri 8:00a&ndash;4:30p) with upfront pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5307046989"
              className="h-14 px-10 bg-primary text-white font-btn font-bold rounded-full inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: (530) 704-6989
            </a>
            <Link
              href="/contact"
              className="h-14 px-10 bg-white text-navy-900 font-btn font-bold rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
