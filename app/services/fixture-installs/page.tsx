import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';

export const metadata: Metadata = {
  title: 'Fixture Installation in Redding, CA | Topline Plumbing',
  description: 'Professional installation for sinks, toilets, faucets, showers, and garbage disposals in Redding. Expert plumbing fixture installation. Call (530) 768-9446.',
};

const fixtureFAQs = [
  {
    question: 'How much does toilet installation cost in Redding, CA?',
    answer: 'Toilet installation in Redding typically ranges from $150–$400 for labor, depending on the complexity of the job and whether the existing flange needs repair. This does not include the cost of the toilet itself. Call (530) 768-9446 for a free estimate.',
  },
  {
    question: 'Can you install a fixture I already purchased?',
    answer: 'Yes. We can install customer-supplied fixtures including toilets, faucets, sinks, showers, and garbage disposals. We recommend calling us before you purchase to make sure the fixture is compatible with your existing plumbing. Call (530) 768-9446.',
  },
  {
    question: 'How long does faucet installation take?',
    answer: 'Most faucet replacements take 30–60 minutes for a standard kitchen or bathroom faucet. Installations involving valve upgrades or supply line work may take longer. We provide upfront pricing before any work begins.',
  },
  {
    question: 'Do you install garbage disposals in Redding?',
    answer: 'Yes. We install all major brands of garbage disposals including InSinkErator, Waste King, and Moen. We also handle wiring if an outlet is already present, or coordinate with an electrician if a new outlet is needed. Call (530) 768-9446.',
  },
  {
    question: 'Do you install shower and tub fixtures?',
    answer: 'Yes. We install shower valves, tub faucets, shower heads, hand sprayers, and complete shower and tub trim kits. For full bathroom remodels or custom tile shower installations, call us to discuss the full scope of work. Call (530) 768-9446.',
  },
];

export default function FixtureInstallsPage() {
  return (
    <>
      <FAQSchema faqs={fixtureFAQs} />
      <ServicePageTemplate
      hero={{
        title: 'Fixture Installation in Redding — Professional Plumbing Upgrades',
        description: [
          "Upgrading your bathroom or kitchen? Installing new fixtures?",
          "Topline Plumbing provides expert installation for all plumbing fixtures including sinks, toilets, faucets, showers, tubs, and garbage disposals. Professional installation ensures no leaks and optimal performance."
        ],
      }}
      services={[
        {
          title: 'Kitchen Fixtures',
          items: [
            'Kitchen sink installation',
            'Faucet installation and replacement',
            'Garbage disposal installation',
            'Dishwasher hookup',
          ],
        },
        {
          title: 'Bathroom Fixtures',
          items: [
            'Toilet installation and replacement',
            'Bathroom sink and vanity installation',
            'Shower and tub installation',
            'Bathroom faucet installation',
          ],
        },
        {
          title: 'Additional Services',
          items: [
            'Water filtration system installation',
            'Washing machine hookup',
            'Ice maker line installation',
            'Outdoor hose bibs and spigots',
          ],
        },
      ]}
    />
    </>
  );
}
