import { Metadata } from 'next';
import Link from 'next/link';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';
import { getCityFaqs } from '@/lib/cityFaqs';

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

export default function PaloCedroPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Areas Served', url: 'https://toplineplumbingco.com/areas' },
        { name: 'Plumber in Palo Cedro, CA', url: 'https://toplineplumbingco.com/areas/palo-cedro' },
      ]} />
      <FAQSchema faqs={getCityFaqs('palo-cedro')} />
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
      <FAQSection faqs={getCityFaqs('palo-cedro')} />
    </>
  );
}
