import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Tankless Water Heater Installation in Redding, CA | Topline Plumbing',
  description: 'Upgrade to a tankless water heater in Redding. Endless hot water and lower energy bills. Call (530) 768-9446 for a free consultation.',
};

export default function TanklessWaterHeaterPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: 'Tankless Water Heater Installation in Redding — Endless Hot Water, Lower Bills',
        description: [
          "Tired of running out of hot water? Want to cut your energy bills by 30%?",
          "Tankless water heaters provide hot water on demand, only heating water when you need it. That means endless hot water for your family and significant savings on your energy bill."
        ],
      }}
      stats={[
        {
          value: '30%',
          description: 'Tankless systems can reduce water heating costs by up to 30% compared to traditional tank systems.',
        },
        {
          value: '20+ years',
          description: 'Tankless water heaters last 20+ years, nearly double the lifespan of traditional tank models.',
        },
        {
          value: 'Endless',
          description: 'Never run out of hot water again. Tankless systems heat water on demand, providing continuous supply.',
        },
      ]}
      services={[
        {
          title: 'Tankless Installation',
          items: [
            'Full system installation',
            'Gas line upgrades (if needed)',
            'Venting installation',
            'Old tank removal and disposal',
          ],
        },
        {
          title: 'Popular Brands We Install',
          items: [
            'Navien — Industry-leading efficiency',
            'Rinnai — Reliable and proven',
            'Noritz — High-performance models',
            'Rheem — Affordable and dependable',
          ],
        },
        {
          title: 'Free Consultation',
          items: [
            'Assess your hot water needs',
            'Recommend the right size unit',
            'Upfront pricing with no hidden fees',
            'Financing options available',
          ],
        },
      ]}
      ctaText="Ready to Upgrade to Tankless?"
    />
  );
}
