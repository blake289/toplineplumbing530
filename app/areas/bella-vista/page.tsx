import { Metadata } from 'next';
import Link from 'next/link';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';
import { getCityFaqs } from '@/lib/cityFaqs';
import LocalContext from '@/components/sections/LocalContext';
import { getCityProfile } from '@/lib/cityProfiles';

export const metadata: Metadata = {
  title: 'Plumber in Bella Vista, CA | Topline Plumbing',
  description: 'Local plumbing services in Bella Vista, CA. Water heater repair, drain cleaning, and emergency plumbing. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/areas/bella-vista' },
  openGraph: {
    title: 'Plumber in Bella Vista, CA | Topline Plumbing',
    description: 'Local plumbing services in Bella Vista, CA. Water heater repair, drain cleaning, and emergency plumbing. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/areas/bella-vista',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Licensed Plumber in Bella Vista, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/areas/bella-vista#webpage',
  url: 'https://toplineplumbingco.com/areas/bella-vista',
  name: 'Plumber in Bella Vista, CA | Topline Plumbing',
  description:
    'Licensed plumber in Bella Vista, California. Same-day emergency plumbing, drain cleaning, water heater repair, and leak detection. Licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/#business' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/areas/bella-vista#service',
  serviceType: 'Plumbing',
  name: 'Plumbing Services in Bella Vista, CA',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Bella Vista' },
    { '@type': 'AdministrativeArea', name: 'Shasta County' },
  ],
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30',
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};export default function BellaVistaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Areas Served', url: 'https://toplineplumbingco.com/areas' },
        { name: 'Plumber in Bella Vista, CA', url: 'https://toplineplumbingco.com/areas/bella-vista' },
      ]} />
      <FAQSchema faqs={getCityFaqs('bella-vista')} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LocalContext profile={getCityProfile('bella-vista')} />

      <LocationPageTemplate
      locationName="Bella Vista"
      hero={{
        title: 'Local Plumbers Serving Bella Vista, CA',
        description: 'Quality plumbing services for Bella Vista residents. Water heater repair, drain cleaning, and same-day emergency response during business hours (Mon–Fri 8:00a–4:30p).',
      }}
      about={{
        intro: "Bella Vista residents deserve plumbing services from a local team that understands the community. Topline Plumbing provides fast, professional service with the personal touch of a family-owned business.",
        details: "We've been serving Northern California since 1998, building our reputation on honesty, quality work, and customer satisfaction. Licensed, bonded, and insured (CSLB #596557).",
      }}
      services={[
        {
          title: 'Complete Water Heater Services',
          description: <>From diagnostic inspections to full same-day <Link href="/water-heater-replacement-redding" className="text-blue-600 hover:underline">water heater replacement</Link>, we handle all water heater needs with same-day availability and upfront pricing.</>,
          href: '/water-heater-repair-bella-vista',
        },
        {
          title: 'Professional Drain Cleaning',
          description: 'Clear tough clogs with professional mechanical augering. No harsh chemicals, just effective results — quoted upfront before we start.',
          href: '/drain-cleaning-bella-vista',
        },
        {
          title: 'Same-Day Emergency Service',
          description: 'Burst pipes? Gas leak? Flooding? Call us during business hours (Mon–Fri 8:00a–4:30p) for same-day response and upfront pricing.',
          href: '/emergency-plumber-bella-vista',
        },
      ]}
    />
      {/* City Service Links */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plumbing Services in Bella Vista</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link href="/emergency-plumber-bella-vista" className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
              <span className="font-semibold text-gray-900">Emergency Plumber Bella Vista</span>
            </Link>
            <Link href="/drain-cleaning-bella-vista" className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
              <span className="font-semibold text-gray-900">Drain Cleaning Bella Vista</span>
            </Link>
          </div>
        </div>
      </section>
      <FAQSection faqs={getCityFaqs('bella-vista')} />
    </>
  );
}
