import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';

export const metadata: Metadata = {
  title: 'Repiping Services in Redding, CA | Topline Plumbing',
  description: 'Professional repiping services in Redding. Upgrade old galvanized or polybutylene pipes to reliable PEX or Copper. Call (530) 768-9446.',
};

const repipingFAQs = [
  {
    question: 'How do I know if my home needs repiping?',
    answer: 'Common signs that your home needs repiping include low water pressure throughout the house, rusty or brown-colored water, frequent pipe leaks, visible pipe corrosion, or pipes that are 40+ years old. Galvanized steel and polybutylene pipes are especially prone to failure and should be replaced proactively.',
  },
  {
    question: 'How much does whole-house repiping cost in Redding, CA?',
    answer: 'Whole-house repiping in Redding typically ranges from $4,000–$12,000 depending on the size of your home, the pipe material (PEX vs. copper), and the accessibility of existing pipes. We provide a free on-site estimate with detailed upfront pricing. Call (530) 768-9446 to schedule.',
  },
  {
    question: 'What is the difference between PEX and copper repiping?',
    answer: 'PEX (cross-linked polyethylene) is flexible, freeze-resistant, and less expensive than copper. It is the most popular choice for repiping today. Copper is more rigid, has a longer track record, and is preferred in some high-end applications. We install both and will recommend the best option for your home and budget.',
  },
  {
    question: 'How long does a whole-house repipe take?',
    answer: 'Most whole-house repipes in Redding take 2–5 days depending on the size of the home. We minimize disruption by working room by room, and in most cases you will have water access throughout the project. We handle all wall repair and cleanup before we leave.',
  },
  {
    question: 'Is repiping covered by homeowners insurance?',
    answer: 'In some cases, yes. If your pipes failed due to a sudden and accidental event like a burst pipe, your insurance may cover repairs. However, gradual deterioration due to age is typically not covered. We can provide detailed documentation of the work done to support any insurance claim. Call (530) 768-9446 for details.',
  },
];

export default function RepipingServicesPage() {
  return (
    <>
      <FAQSchema faqs={repipingFAQs} />
      <ServicePageTemplate
      hero={{
        title: 'Repiping Services in Redding — Upgrade Your Plumbing System',
        description: [
          "Old galvanized or polybutylene pipes causing low water pressure, rusty water, or frequent leaks?",
          "Topline Plumbing specializes in whole-house repiping using modern PEX or copper pipes. We'll upgrade your plumbing system for better water quality, pressure, and reliability."
        ],
      }}
      whenToRepair={[
        'Low water pressure throughout the house',
        'Rusty or discolored water',
        'Frequent pipe leaks',
        'Galvanized pipes installed before 1960',
        'Polybutylene (gray plastic) pipes',
      ]}
      services={[
        {
          title: 'Complete Home Repiping',
          items: [
            'PEX pipe installation (flexible, durable)',
            'Copper pipe installation (traditional)',
            'Whole-house water line replacement',
            'Minimal wall cutting and patching',
          ],
        },
        {
          title: 'Partial Repiping',
          items: [
            'Single room or bathroom repiping',
            'Hot water line replacement',
            'Cold water line replacement',
            'Main water line replacement',
          ],
        },
        {
          title: 'Why Repipe?',
          items: [
            'Improve water pressure and quality',
            'Eliminate rust and corrosion',
            'Prevent future leaks and water damage',
            'Increase home value',
          ],
        },
      ]}
    />
    </>
  );
}
