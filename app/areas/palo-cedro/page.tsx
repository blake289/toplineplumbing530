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
  title: 'Plumber in Palo Cedro, CA | Topline Plumbing',
  description: 'Expert plumbing services in Palo Cedro, CA. Water heater repair, tankless upgrades, and emergency plumbing. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/areas/palo-cedro' },
  openGraph: {
    title: 'Plumber in Palo Cedro, CA | Topline Plumbing',
    description: 'Expert plumbing services in Palo Cedro, CA. Water heater repair, tankless upgrades, and emergency plumbing. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/areas/palo-cedro',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Licensed Plumber in Palo Cedro, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/areas/palo-cedro#webpage',
  url: 'https://toplineplumbingco.com/areas/palo-cedro',
  name: 'Plumber in Palo Cedro, CA | Topline Plumbing',
  description:
    'Licensed plumber in Palo Cedro, California. Same-day emergency plumbing, drain cleaning, water heater repair, and leak detection. Licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/#business' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/areas/palo-cedro#service',
  serviceType: 'Plumbing',
  name: 'Plumbing Services in Palo Cedro, CA',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Palo Cedro' },
    { '@type': 'AdministrativeArea', name: 'Shasta County' },
  ],
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30',
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};export default function PaloCedroPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Areas Served', url: 'https://toplineplumbingco.com/areas' },
        { name: 'Plumber in Palo Cedro, CA', url: 'https://toplineplumbingco.com/areas/palo-cedro' },
      ]} />
      <FAQSchema faqs={getCityFaqs('palo-cedro')} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LocalContext profile={getCityProfile('palo-cedro')} />

      <LocationPageTemplate
      locationName="Palo Cedro"
      hero={{
        title: 'Trusted Plumbers Serving Palo Cedro, CA',
        description: 'Professional plumbing services for Palo Cedro homes. Expert water heater repair, tankless installations, and emergency services.',
      }}
      about={{
        intro: "Palo Cedro homeowners trust Topline Plumbing for honest, reliable service. We treat every home with the care and respect it deserves.",
        details: "With 30+ years of experience serving Northern California, we bring professional expertise and transparent pricing to every job. From routine maintenance to emergency repairs, we're here for you.",
      }}
      services={[
        {
          title: 'Tankless Water Heater Upgrades',
          description: 'Upgrade to endless hot water and save up to 30% on energy bills. Free consultation and professional installation.',
          href: '/services/tankless',
        },
        {
          title: 'Water Heater Maintenance & Repair',
          description: <>Routine service with upfront pricing — and full same-day <Link href="/water-heater-replacement-redding" className="text-blue-600 hover:underline">water heater replacement</Link> when repair isn&apos;t the right call. Keep your water heater running efficiently and prevent costly breakdowns.</>,
          href: '/services/water-heater-repair',
        },
        {
          title: 'Same-Day Emergency Services',
          description: 'Burst pipes, water heater failures, or sewer backups? Call during business hours (Mon–Fri 8:00a–4:30p) for same-day response and upfront pricing.',
          href: '/services/emergency',
        },
      ]}
    />
      {/* City Service Links */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plumbing Services in Palo Cedro</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link href="/emergency-plumber-palo-cedro" className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
              <span className="font-semibold text-gray-900">Emergency Plumber Palo Cedro</span>
            </Link>
            <Link href="/drain-cleaning-palo-cedro" className="block p-5 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
              <span className="font-semibold text-gray-900">Drain Cleaning Palo Cedro</span>
            </Link>
          </div>
        </div>
      </section>
      <FAQSection faqs={getCityFaqs('palo-cedro')} />
    </>
  );
}
