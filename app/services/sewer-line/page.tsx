import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Sewer Line Repair & Replacement in Redding, CA | Topline Plumbing',
  description: 'Expert sewer line repair and replacement in Redding, CA. Camera inspection, trenchless options available. Licensed, same-day response. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/sewer-line' },
  openGraph: {
    title: 'Sewer Line Repair & Replacement in Redding, CA | Topline Plumbing',
    description: 'Expert sewer line repair and replacement in Redding, CA. Camera inspection, trenchless options available. Licensed, same-day response. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/sewer-line',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Sewer Line Services in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I know if my sewer line is broken or damaged?',
    answer: 'Warning signs include multiple drains backing up at once, sewage odors in your yard or home, wet soggy patches in the lawn over the sewer line, gurgling sounds from toilets, and unusually green or lush grass above the pipe. If you notice any of these, call (530) 704-6989 immediately — sewer line issues get worse fast.',
  },
  {
    question: 'How much does sewer line repair cost in Redding, CA?',
    answer: 'Sewer line repair cost varies by location, depth, and extent of damage — a spot repair is far less than a full replacement, and trenchless methods are priced differently than dig-and-replace. Topline provides upfront written pricing after a camera inspection — no surprises. Call (530) 704-6989 for a free assessment.',
  },
  {
    question: 'Do you offer trenchless sewer line repair?',
    answer: 'Yes. When conditions allow, we offer trenchless repair options that avoid digging up your yard, driveway, or landscaping. During our camera inspection, we assess whether trenchless is viable for your situation and explain all available options with upfront pricing.',
  },
  {
    question: 'What causes sewer line damage?',
    answer: 'The most common causes in the Redding area are tree root intrusion (roots seek out water and crack pipes), aging cast iron or clay pipes, ground shifting from Northern California heat cycles, grease buildup, and physical damage from digging. A camera inspection identifies the exact cause.',
  },
  {
    question: 'How long does sewer line replacement take?',
    answer: 'A standard sewer line replacement typically takes 1–2 days for most residential properties. Trenchless methods can sometimes be completed in a single day. We work efficiently to minimize disruption and restore your plumbing as quickly as possible.',
  },
];

export default function SewerLinePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Sewer Line Repair & Replacement', url: 'https://toplineplumbingco.com/services/sewer-line' },
      ]} />
      <FAQSchema faqs={faqs} />
      <ServicePageTemplate
        faqs={faqs}
        hero={{
          title: 'Sewer Line Repair & Replacement in Redding, CA',
          description: [
            "A broken sewer line is one of the most serious plumbing problems a homeowner can face — raw sewage backing up into your home, foul odors, and potential foundation damage if left untreated.",
            "Topline Plumbing uses sewer camera inspection to diagnose the exact problem before we ever dig. We give you upfront pricing, explain all your options, and get it fixed right the first time.",
          ],
        }}
        services={[
          {
            title: 'Sewer Camera Inspection',
            items: [
              'High-definition camera inspection of your sewer line',
              'Identify root intrusion, cracks, or blockages',
              'Exact location and depth of damage',
              'Video report so you can see the problem yourself',
            ],
          },
          {
            title: 'Sewer Line Repair',
            items: [
              'Spot repairs for localized damage',
              'Root cutting and removal',
              'Pipe patching and joint repair',
              'Trenchless options when available',
            ],
          },
          {
            title: 'Full Sewer Line Replacement',
            items: [
              'Complete replacement of failed sewer lines',
              'Cast iron, clay, and ABS pipe specialists',
              'Proper slope and alignment for long-term performance',
              'City permit pulled and inspected',
            ],
          },
        ]}
      />
    </>
  );
}
