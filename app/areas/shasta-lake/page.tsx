import { Metadata } from 'next';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';
import { getCityFaqs } from '@/lib/cityFaqs';

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

export default function ShastaLakePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Areas Served', url: 'https://toplineplumbingco.com/areas' },
        { name: 'Plumber in Shasta Lake, CA', url: 'https://toplineplumbingco.com/areas/shasta-lake' },
      ]} />
      <FAQSchema faqs={getCityFaqs('shasta-lake')} />
      <LocationPageTemplate
      locationName="Shasta Lake"
      hero={{
        title: 'Expert Plumbers Serving Shasta Lake, CA',
        description: 'Fast, reliable plumbing services for homeowners in Shasta Lake. From Water Heater Repairs to Emergency Repairs, and Drain Cleaning for the Shasta Lake Community.',
      }}
      about={{
        intro: "Whether you're exploring Shasta Lake Caverns, touring the historic Shasta Dam, or enjoying the natural beauty of Burney Falls, the last thing you want to deal with when you get home is a plumbing emergency.",
        details: "At Topline Plumbing, we are proud to serve the residents of Shasta Lake, CA. From water heater failures to clogged drains, our family-owned business brings 30+ years of experience straight to your door.",
      }}
      services={[
        {
          title: 'Water Heater Repair & Replacement',
          description: "Is your 8-12 year old water heater showing signs of failure? We've installed thousands of units in Northern California. Get a free inspection today before a disaster strikes.",
          href: '/services/water-heater-repair',
        },
        {
          title: 'Expert Drain Cleaning',
          description: 'From slow kitchen sinks to backed-up main sewer lines, our mechanical augers will restore flow to your home without the use of pipe-damaging chemicals.',
          href: '/services/drain-cleaning',
        },
        {
          title: 'Same-Day Emergency Plumbing',
          description: 'Burst pipes or a flooded garage during business hours? Call (530) 704-6989 Mon–Fri 8:00a–4:30p for same-day response and flat-rate, upfront pricing.',
          href: '/services/emergency',
        },
      ]}
    />
      <FAQSection faqs={getCityFaqs('shasta-lake')} />
    </>
  );
}
