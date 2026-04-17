import { Metadata } from 'next';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';
import { getCityFaqs } from '@/lib/cityFaqs';

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

export default function BellaVistaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Areas Served', url: 'https://toplineplumbingco.com/areas' },
        { name: 'Plumber in Bella Vista, CA', url: 'https://toplineplumbingco.com/areas/bella-vista' },
      ]} />
      <FAQSchema faqs={getCityFaqs('bella-vista')} />
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
          description: "From diagnostic inspections to full replacements, we handle all water heater needs. Service starting at $127 with same-day availability.",
          href: '/services/water-heater-repair',
        },
        {
          title: 'Professional Drain Cleaning',
          description: 'Clear tough clogs with professional mechanical augering. No harsh chemicals, just effective results. Starting at $130.',
          href: '/services/drain-cleaning',
        },
        {
          title: 'Same-Day Emergency Service',
          description: 'Burst pipes? Gas leak? Flooding? Call us during business hours (Mon–Fri 8:00a–4:30p) for same-day response and upfront pricing.',
          href: '/services/emergency',
        },
      ]}
    />
      <FAQSection faqs={getCityFaqs('bella-vista')} />
    </>
  );
}
