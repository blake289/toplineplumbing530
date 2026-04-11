import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Fixture Installation in Redding, CA | Topline Plumbing',
  description: 'Professional installation for sinks, toilets, faucets, showers, and garbage disposals in Redding. Expert plumbing fixture installation. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/fixture-installs' },
  openGraph: {
    title: 'Fixture Installation in Redding, CA | Topline Plumbing',
    description: 'Professional installation for sinks, toilets, faucets, showers, and garbage disposals in Redding. Expert plumbing fixture installation. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/fixture-installs',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Fixture Installation Services in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const fixtureFAQs = [
  {
    question: 'How much does toilet installation cost in Redding, CA?',
    answer: 'Toilet installation in Redding typically ranges from $150–$400 for labor, depending on the complexity of the job and whether the existing flange needs repair. This does not include the cost of the toilet itself. Call (530) 704-6989 for a free estimate.',
  },
  {
    question: 'Can you install a fixture I already purchased?',
    answer: 'Yes. We can install customer-supplied fixtures including toilets, faucets, sinks, showers, and garbage disposals. We recommend calling us before you purchase to make sure the fixture is compatible with your existing plumbing. Call (530) 704-6989.',
  },
  {
    question: 'How long does faucet installation take?',
    answer: 'Most faucet replacements take 30–60 minutes for a standard kitchen or bathroom faucet. Installations involving valve upgrades or supply line work may take longer. We provide upfront pricing before any work begins.',
  },
  {
    question: 'Do you install garbage disposals in Redding?',
    answer: 'Yes. We install all major brands of garbage disposals including InSinkErator, Waste King, and Moen. We also handle wiring if an outlet is already present, or coordinate with an electrician if a new outlet is needed. Call (530) 704-6989.',
  },
  {
    question: 'Do you install shower and tub fixtures?',
    answer: 'Yes. We install shower valves, tub faucets, shower heads, hand sprayers, and complete shower and tub trim kits. For full bathroom remodels or custom tile shower installations, call us to discuss the full scope of work. Call (530) 704-6989.',
  },
];

export default function FixtureInstallsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Fixture Installation', url: 'https://toplineplumbingco.com/services/fixture-installs' },
      ]} />
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
