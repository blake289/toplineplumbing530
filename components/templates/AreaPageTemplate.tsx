import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';
import LocalContext from '@/components/sections/LocalContext';
import { getCityFaqs } from '@/lib/cityFaqs';
import { getCityProfile, type CitySlug } from '@/lib/cityProfiles';

const ALL_AREAS: { slug: CitySlug; name: string }[] = [
  { slug: 'redding', name: 'Redding' },
  { slug: 'anderson', name: 'Anderson' },
  { slug: 'shasta-lake', name: 'Shasta Lake' },
  { slug: 'palo-cedro', name: 'Palo Cedro' },
  { slug: 'bella-vista', name: 'Bella Vista' },
  { slug: 'red-bluff', name: 'Red Bluff' },
  { slug: 'cottonwood', name: 'Cottonwood' },
  { slug: 'millville', name: 'Millville' },
  { slug: 'happy-valley', name: 'Happy Valley' },
  { slug: 'igo', name: 'Igo' },
  { slug: 'lake-california', name: 'Lake California' },
];

// Nearest town that has dedicated city-service money pages — the service links
// below point there so template towns feed authority to real landing pages.
const NEAREST_MONEY_CITY: Partial<Record<CitySlug, string>> = {
  cottonwood: 'anderson',
  millville: 'palo-cedro',
  'happy-valley': 'anderson',
  igo: 'redding',
  'lake-california': 'red-bluff',
};

const SERVICES = [
  { href: (m: string) => `/emergency-plumber-${m}`, label: 'Emergency Plumbing', desc: (c: string) => `Burst pipes, water heater flooding, and sewer backups in ${c} — same-day response during business hours (Mon–Fri 8:00a–4:30p).` },
  { href: (m: string) => `/drain-cleaning-${m}`, label: 'Drain Cleaning', desc: (c: string) => `Clogged or slow drains in ${c}? We clear kitchen, bathroom, and main lines with professional equipment, usually in under an hour.` },
  { href: (m: string) => `/water-heater-repair-${m}`, label: 'Water Heater Repair & Replacement', desc: (c: string) => `No hot water, a leaking tank, or rumbling noises in ${c}? We repair pilot, thermostat, and valve faults, flush sediment, and replace tanks same-day with upfront pricing.` },
  { href: () => '/tankless-water-heater-redding', label: 'Tankless Water Heater Installation', desc: (c: string) => `Endless hot water and lower standby energy use for ${c} homes. We size the unit correctly and install it with warranty.` },
  { href: (m: string) => `/sewer-line-${m}`, label: 'Sewer Line Repair', desc: (c: string) => `Recurring backups, gurgling toilets, or sewage odors in ${c} usually point past a single fixture to the main or sewer line. We diagnose the real cause before quoting.` },
  { href: () => '/leak-detection-redding', label: 'Leak Detection', desc: (c: string) => `Hidden leaks and unexplained water bills in ${c}. We trace the line to the actual failure point before any digging or cutting.` },
];

export default function AreaPageTemplate({ slug }: { slug: CitySlug }) {
  const profile = getCityProfile(slug);
  const { name, county } = profile;
  const url = `https://toplineplumbingco.com/areas/${slug}`;
  // Rotate from this town's position so every area page (including the newest
  // towns) receives inbound links from siblings — plain slice(0, 6) always
  // returned the same first six and left the rest orphaned.
  const idx = ALL_AREAS.findIndex((a) => a.slug === slug);
  const nearby = [...ALL_AREAS.slice(idx + 1), ...ALL_AREAS.slice(0, Math.max(idx, 0))].slice(0, 6);
  const money = NEAREST_MONEY_CITY[slug] ?? 'redding';

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: `Plumber in ${name}, CA | Topline Plumbing`,
    description: `Licensed plumber in ${name}, California. Same-day emergency plumbing, drain cleaning, water heater repair, and leak detection. Licensed since 1998, CSLB #596557.`,
    inLanguage: 'en-US',
    isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
    about: { '@id': 'https://toplineplumbingco.com/#business' },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    serviceType: 'Plumbing',
    name: `Plumbing Services in ${name}, CA`,
    provider: { '@id': 'https://toplineplumbingco.com/#business' },
    areaServed: [
      { '@type': 'City', name },
      { '@type': 'AdministrativeArea', name: county },
    ],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:30',
    },
    audience: { '@type': 'Audience', audienceType: 'Homeowners' },
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Areas Served', url: 'https://toplineplumbingco.com/areas' },
        { name: `Plumber in ${name}, CA`, url },
      ]} />
      <FAQSchema faqs={getCityFaqs(slug)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Licensed Plumber in {name}, California</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Professional plumbing service in {name}, {county}. Licensed plumbers for emergency plumbing, drain cleaning, water heater repair, leak detection, and all residential and commercial plumbing needs. Same-day service available during business hours.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/areas" className="text-blue-600 hover:underline">Service Areas</Link>
          <span className="mx-2">/</span>
          <span>{name} CA</span>
        </div>
      </div>

      <LocalContext profile={profile} />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Your Trusted Plumber in {name}, California</h2>
              <p className="text-lg text-gray-700">
                Topline Plumbing serves {name} and the surrounding {county} area with professional plumbing service. Our licensed plumbers have worked across Northern California since 1998, with upfront pricing and a 5-star Google rating.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need same-day emergency repair during business hours (Mon–Fri 8:00a–4:30p) or a scheduled water heater installation, we are ready to help. We offer same-day service for most repairs in {name} and the surrounding area.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 pt-6">Complete Plumbing Services in {name}</h2>
              <div className="space-y-6">
                {SERVICES.map((s) => (
                  <div key={s.label}>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      <Link href={s.href(money)} className="text-blue-600 hover:underline block py-2">{s.label}</Link>
                    </h3>
                    <p className="text-gray-700">{s.desc(name)}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 pt-8">Why {name} Homeowners Choose Topline Plumbing</h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  ['Local Plumbers:', `We serve ${name} and know the area's plumbing challenges`],
                  ['Licensed & Insured:', 'Fully licensed California plumbing contractor (CSLB #596557), bonded and insured'],
                  ['Fast Response:', 'Same-day service during business hours (Mon–Fri 8:00a–4:30p)'],
                  ['Transparent Pricing:', 'Upfront pricing before we start work — no hidden fees'],
                  ['5-Star Rated:', 'Trusted across Northern California with a 5-star Google rating'],
                ].map(([strong, rest]) => (
                  <li key={strong} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>{strong}</strong> {rest}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 pt-8">Plumbing Service Areas Near {name}</h2>
              <p className="text-gray-700 mb-4">In addition to {name}, we provide licensed plumbing service throughout the greater Redding area including:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {nearby.map((a) => (
                  <Link key={a.slug} href={`/areas/${a.slug}`} className="text-blue-600 hover:underline block py-2">Plumber {a.name}</Link>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 pt-8">Emergency Plumber {name} — Same-Day Service</h2>
              <p className="text-gray-700">
                When you have a plumbing emergency in {name} — burst pipe, water heater flooding, sewer backup, or any urgent plumbing problem — call Topline Plumbing at <strong>(530) 704-6989</strong> during our business hours (Mon–Fri 8:00a–4:30p). For after-hours issues, text the same number and we&apos;ll respond first thing the next business day.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{name} Plumber</h3>
                <p className="mb-4">Call for Same-Day Service</p>
                <a href="tel:5307046989" className="w-full h-14 px-6 bg-white text-primary font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (530) 704-6989
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{name} Services</h3>
                <ul>
                  <li><Link href={`/emergency-plumber-${money}`} className="text-blue-600 hover:underline block py-2">Emergency Plumbing</Link></li>
                  <li><Link href={`/drain-cleaning-${money}`} className="text-blue-600 hover:underline block py-2">Drain Cleaning</Link></li>
                  <li><Link href={`/water-heater-repair-${money}`} className="text-blue-600 hover:underline block py-2">Water Heater</Link></li>
                  <li><Link href="/tankless-water-heater-redding" className="text-blue-600 hover:underline block py-2">Tankless Upgrades</Link></li>
                  <li><Link href="/services/repiping-services" className="text-blue-600 hover:underline block py-2">Repiping</Link></li>
                  <li><Link href={`/sewer-line-${money}`} className="text-blue-600 hover:underline block py-2">Sewer Line</Link></li>
                  <li><Link href="/services/gas-line" className="text-blue-600 hover:underline block py-2">Gas Line</Link></li>
                  <li><Link href="/leak-detection-redding" className="text-blue-600 hover:underline block py-2">Leak Detection</Link></li>
                  <li><Link href="/services/fixture-installs" className="text-blue-600 hover:underline block py-2">Fixture Installs</Link></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Service Info</h3>
                <ul className="space-y-2 text-gray-700">
                  {['Licensed CA Plumber', 'Bonded & Insured', 'Mon–Fri 8–4:30', 'Same-Day Service', 'Upfront Pricing', '5★ Google Rating'].map((info) => (
                    <li key={info} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {info}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={getCityFaqs(slug)} />

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Plumber in {name}?</h2>
          <p className="text-xl text-gray-200 mb-8">Licensed plumbers ready to help. Same-day service available in {name}, California during business hours.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:5307046989" className="h-14 px-8 bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">Call: (530) 704-6989</span>
            </a>
            <Link href="/services" className="h-14 px-8 bg-white text-navy-900 font-semibold rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
