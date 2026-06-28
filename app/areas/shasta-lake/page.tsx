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
  title: 'Plumber in Shasta Lake, CA | Topline Plumbing',
  description: 'Professional plumbing services in Shasta Lake, CA. Water heater repair, emergency plumbing, and drain cleaning. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/areas/shasta-lake' },
  openGraph: {
    title: 'Plumber in Shasta Lake, CA | Topline Plumbing',
    description: 'Professional plumbing services in Shasta Lake, CA. Water heater repair, emergency plumbing, and drain cleaning. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/areas/shasta-lake',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Licensed Plumber in Shasta Lake, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/areas/shasta-lake#webpage',
  url: 'https://toplineplumbingco.com/areas/shasta-lake',
  name: 'Plumber in Shasta Lake, CA | Topline Plumbing',
  description:
    'Licensed plumber in Shasta Lake, California. Same-day emergency plumbing, drain cleaning, water heater repair, and leak detection. Licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/#business' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/areas/shasta-lake#service',
  serviceType: 'Plumbing',
  name: 'Plumbing Services in Shasta Lake, CA',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Shasta Lake' },
    { '@type': 'AdministrativeArea', name: 'Shasta County' },
  ],
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30',
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};export default function ShastaLakePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Areas Served', url: 'https://toplineplumbingco.com/areas' },
        { name: 'Plumber in Shasta Lake, CA', url: 'https://toplineplumbingco.com/areas/shasta-lake' },
      ]} />
      <FAQSchema faqs={getCityFaqs('shasta-lake')} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LocalContext profile={getCityProfile('shasta-lake')} />

      <LocationPageTemplate
      locationName="Shasta Lake"
      hero={{
        title: 'Expert Plumbers Serving Shasta Lake, CA',
        description: 'Fast, reliable plumbing services for homeowners in Shasta Lake. From Water Heater Repairs to Emergency Repairs, and Drain Cleaning for the Shasta Lake Community.',
      }}
      about={{
        intro: "Whether you're exploring Shasta Lake Caverns, touring the historic Shasta Dam, or enjoying the natural beauty of Burney Falls, the last thing you want to deal with when you get home is a plumbing emergency.",
        details: "At Topline Plumbing, we are proud to serve the residents of Shasta Lake, CA. From water heater failures to clogged drains, our family-owned business brings 28 years of experience straight to your door.",
      }}
      services={[
        {
          title: 'Water Heater Repair & Replacement',
          description: <>Is your 8-12 year old water heater showing signs of failure? We&apos;ve installed thousands of units in Northern California — explore same-day <Link href="/water-heater-replacement-redding" className="text-blue-600 hover:underline">water heater replacement</Link> options. Get a free inspection today before a disaster strikes.</>,
          href: '/water-heater-repair-shasta-lake',
        },
        {
          title: 'Expert Drain Cleaning',
          description: 'From slow kitchen sinks to backed-up main sewer lines, our mechanical augers will restore flow to your home without the use of pipe-damaging chemicals.',
          href: '/drain-cleaning-shasta-lake',
        },
        {
          title: 'Same-Day Emergency Plumbing',
          description: 'Burst pipes or a flooded garage during business hours? Call (530) 704-6989 Mon–Fri 8:00a–4:30p for same-day response and flat-rate, upfront pricing.',
          href: '/emergency-plumber-shasta-lake',
        },
      ]}
    />
      {/* City Service Links */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plumbing Services in Shasta Lake</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/emergency-plumber-shasta-lake" className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
              <span className="font-semibold text-gray-900">Emergency Plumber Shasta Lake</span>
            </Link>
            <Link href="/drain-cleaning-shasta-lake" className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
              <span className="font-semibold text-gray-900">Drain Cleaning Shasta Lake</span>
            </Link>
            <Link href="/water-heater-repair-shasta-lake" className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
              <span className="font-semibold text-gray-900">Water Heater Repair Shasta Lake</span>
            </Link>
            <Link href="/sewer-line-shasta-lake" className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
              <span className="font-semibold text-gray-900">Sewer Line Shasta Lake</span>
            </Link>
          </div>
        </div>
      </section>
      <FAQSection faqs={getCityFaqs('shasta-lake')} />
    </>
  );
}
