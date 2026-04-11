import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Leak Detection Services in Redding, CA | Topline Plumbing',
  description: 'Professional leak detection in Redding, CA. Find hidden water leaks in walls, slabs, and pipes fast. Non-invasive methods. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/leak-detection' },
  openGraph: {
    title: 'Leak Detection Services in Redding, CA | Topline Plumbing',
    description: 'Professional leak detection in Redding, CA. Find hidden water leaks in walls, slabs, and pipes fast. Non-invasive methods. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/leak-detection',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Leak Detection Services in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I know if I have a hidden water leak?',
    answer: 'Signs of a hidden leak include an unexplained spike in your water bill, the sound of running water when nothing is on, warm or wet spots on floors or walls, mold or mildew smell, low water pressure, or cracks appearing in your foundation. If your water meter is spinning when all fixtures are off, you likely have a leak. Call Topline Plumbing at (530) 704-6989.',
  },
  {
    question: 'What is a slab leak and how serious is it?',
    answer: 'A slab leak is a water or sewer pipe leak beneath your concrete foundation. Redding\'s extreme heat cycles cause the ground to expand and contract, which stresses pipes under the slab over time. Left untreated, slab leaks can erode your foundation, cause mold growth, and lead to structural damage. Early detection is critical — call (530) 704-6989 at the first sign.',
  },
  {
    question: 'How much does leak detection cost in Redding, CA?',
    answer: 'Professional leak detection in Redding typically runs $150–$400 depending on the complexity and location. This is almost always worth it — a hidden slab or wall leak left undetected can cause thousands in water damage and mold remediation. Call (530) 704-6989 for upfront pricing.',
  },
  {
    question: 'Do you use non-invasive leak detection methods?',
    answer: 'Yes. Topline Plumbing uses electronic leak detection and acoustic listening equipment to pinpoint leaks without tearing open walls or jackhammering floors unnecessarily. We locate the leak first, then make the smallest possible access point to fix it.',
  },
  {
    question: 'Can a leak detection test find leaks in my irrigation or pool lines?',
    answer: 'Yes. We can detect leaks in irrigation systems, pool plumbing, and outdoor supply lines in addition to interior plumbing. If your water bill is high and you can\'t find the source, we can run a full property leak test to find it. Call (530) 704-6989.',
  },
];

export default function LeakDetectionPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Leak Detection', url: 'https://toplineplumbingco.com/services/leak-detection' },
      ]} />
      <FAQSchema faqs={faqs} />
      <ServicePageTemplate
        faqs={faqs}
        hero={{
          title: 'Leak Detection in Redding, CA — Find It Before It Becomes a Disaster',
          description: [
            "A hidden water leak can quietly destroy your walls, floors, and foundation for months before you notice visible damage. By then, the repair bill is 10x what it would have been.",
            "Topline Plumbing uses electronic and acoustic leak detection equipment to find leaks in walls, under slabs, and in buried pipes — without unnecessary demolition. We find it, we fix it.",
          ],
        }}
        services={[
          {
            title: 'Electronic Leak Detection',
            items: [
              'Acoustic listening equipment to pinpoint leaks',
              'Pressure testing to confirm leak location',
              'Non-invasive — no unnecessary wall openings',
              'Works on copper, PVC, and PEX pipe',
            ],
          },
          {
            title: 'Slab Leak Detection & Repair',
            items: [
              'Detect leaks beneath concrete foundations',
              'Thermal and acoustic methods',
              'Tunneling or rerouting options',
              'Foundation protection — catch it early',
            ],
          },
          {
            title: 'Wall & Ceiling Leak Detection',
            items: [
              'Locate leaks hidden behind drywall',
              'Identify source vs. water migration path',
              'Minimal access points for repair',
              'Irrigation and outdoor line testing',
            ],
          },
        ]}
      />
    </>
  );
}
