import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Fixture Installation in Redding, CA | Topline Plumbing',
  description: 'Professional installation for sinks, toilets, faucets, showers, and garbage disposals in Redding. Expert plumbing fixture installation. Call (530) 768-9446.',
};

export default function FixtureInstallsPage() {
  return (
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
  );
}
