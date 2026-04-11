import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Drain Cleaning Services in Redding, CA | Topline Plumbing',
  description: 'Professional drain cleaning in Redding starting at $130. We clear tough clogs and backed-up sewer lines. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/drain-cleaning' },
  openGraph: {
    title: 'Drain Cleaning Services in Redding, CA | Topline Plumbing',
    description: 'Professional drain cleaning in Redding starting at $130. We clear tough clogs and backed-up sewer lines. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/drain-cleaning',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Drain Cleaning Services in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const drainFAQs = [
  {
    question: 'How much does drain cleaning cost in Redding, CA?',
    answer: 'Drain cleaning in Redding starts at $130 for standard sink or shower clogs using a power auger. Sewer line cleaning or camera inspection may cost more depending on the severity and location of the blockage. Call (530) 704-6989 for a free estimate.',
  },
  {
    question: 'What causes slow or clogged drains?',
    answer: 'The most common causes are grease and food buildup in kitchen drains, hair and soap scum in bathroom drains, and root intrusion or debris in main sewer lines. Chemical drain cleaners only mask the problem — professional augering removes the clog completely.',
  },
  {
    question: 'How do I know if I have a main sewer line clog?',
    answer: 'Signs of a main sewer line clog include multiple drains backing up at once, gurgling sounds from toilets when you run the sink, water backing up in the shower when you flush the toilet, or sewage smells coming from floor drains. Call (530) 704-6989 immediately — this is a plumbing emergency.',
  },
  {
    question: 'Do you offer same-day drain cleaning in Redding?',
    answer: 'Yes. Topline Plumbing offers same-day drain cleaning in Redding and surrounding areas. We keep fully stocked service trucks and can respond quickly to urgent clogs. Call (530) 704-6989 to check availability.',
  },
  {
    question: 'Can you clean drains with a camera inspection?',
    answer: 'Yes. We offer sewer camera inspections to locate the exact position and cause of blockages — including root intrusion, pipe damage, or grease buildup. This is especially useful for recurring clogs or main sewer line issues. Call (530) 704-6989 to schedule.',
  },
];

export default function DrainCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Drain Cleaning', url: 'https://toplineplumbingco.com/services/drain-cleaning' },
      ]} />
      <FAQSchema faqs={drainFAQs} />
      <ServicePageTemplate
      faqs={drainFAQs}
      hero={{
        title: 'Drain Cleaning in Redding — Fast, Thorough, & Guaranteed',
        description: [
          "Slow drain? Backed-up sink? Sewage smell? Don't reach for the chemical drain cleaner — it only masks the problem.",
          "Topline Plumbing uses professional mechanical power augers to clear tough clogs and backed-up sewer lines. We don't just push the clog further down; we remove it completely."
        ],
      }}
      services={[
        {
          title: 'Power Auger Cleaning — Starting at $130',
          items: [
            'Mechanical augering for stubborn clogs',
            'Sinks, toilets, and shower drains',
            'Main sewer line cleaning',
            'Clog removal guarantee',
          ],
        },
        {
          title: 'Sewer Line Inspection',
          items: [
            'Camera inspection to locate blockages',
            'Identify root intrusion or pipe damage',
            'Preventive maintenance recommendations',
            'Detailed video report',
          ],
        },
        {
          title: 'Same-Day Service',
          items: [
            'Fast response for urgent clogs',
            'No after-hours premium charges',
            'Upfront pricing before we start',
            'Satisfaction guaranteed',
          ],
        },
      ]}
    />
    </>
  );
}
