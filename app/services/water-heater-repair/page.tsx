import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Water Heater Repair & Replacement in Redding, CA | Topline Plumbing',
  description: "Topline Plumbing offers expert water heater repair, and same-day replacement in Redding. 3,000+ jobs completed. Call (530) 704-6989 for a free inspection.",
  alternates: { canonical: 'https://toplineplumbingco.com/services/water-heater-repair' },
  openGraph: {
    title: 'Water Heater Repair & Replacement in Redding, CA | Topline Plumbing',
    description: "Topline Plumbing offers expert water heater repair, and same-day replacement in Redding. 3,000+ jobs completed. Call (530) 704-6989 for a free inspection.",
    url: 'https://toplineplumbingco.com/services/water-heater-repair',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Water Heater Repair & Replacement in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const waterHeaterFAQs = [
  {
    question: "How do I know if my water heater needs to be repaired or replaced?",
    answer: "If your water heater is under 8 years old and the issue is a faulty thermostat, heating element, or minor leak, repair is usually the right call. If it's 10+ years old, rusting, making loud rumbling noises, or leaking from the tank itself, replacement is almost always more cost-effective. Our plumbers will give you an honest recommendation.",
  },
  {
    question: "How much does water heater replacement cost in Redding, CA?",
    answer: "Replacement cost varies by job — the unit, installation complexity, and permits all factor in. We quote every replacement upfront before any work begins, so you know the exact price before you approve. Call (530) 704-6989 for a free estimate.",
  },
  {
    question: "Can you replace my water heater the same day?",
    answer: "In most cases, yes. Topline Plumbing offers same-day water heater replacement in Redding, Anderson, Shasta Lake, and surrounding areas. We keep common units in stock. Call (530) 704-6989 and we'll let you know right away.",
  },
  {
    question: "What are the signs my water heater is failing?",
    answer: "Common warning signs include: no hot water or lukewarm water, water that takes too long to reheat, discolored or rust-colored water, a sulfur or rotten egg smell, popping or rumbling sounds from the tank, water pooling around the base, or a unit that's 10+ years old.",
  },
  {
    question: "Do you install tankless water heaters in Redding?",
    answer: "Yes. We install and service all major brands of tankless water heaters. Tankless units provide endless hot water and can reduce energy costs by 20–30%. Call (530) 704-6989 for a free assessment to see if tankless is right for your home.",
  },
];

export default function WaterHeaterRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Water Heater Repair & Replacement', url: 'https://toplineplumbingco.com/services/water-heater-repair' },
      ]} />
      <FAQSchema faqs={waterHeaterFAQs} />
      <ServicePageTemplate
      faqs={waterHeaterFAQs}
      hero={{
        title: 'Water Heater Repair & Replacement in Redding, CA — Same-Day Service',
        description: [
          "Is your water heater making strange noises? Running out of hot water faster than usual? Leaking around the base?",
          "With 3,000+ jobs completed across Northern California, Topline Plumbing knows how to diagnose problems fast, repair what can be saved, and replace units that are beyond repair — all with same-day service."
        ],
      }}
      stats={[
        {
          value: '15%',
          description: "Routine service can improve your water heater's efficiency by up to 15%, helping it run better and last longer.",
        },
        {
          value: '1,500gal',
          description: 'A well-maintained system can save up to 1,500 gallons of water per year, reducing waste and lowering utility costs.',
        },
        {
          value: '20%',
          description: 'Homeowners can lower annual water heating energy use by up to 20% with regular maintenance.',
        },
      ]}
      whenToRepair={[
        'Your unit is less than 8 years old',
        'The issue is minor (thermostat, heating element)',
        'No signs of corrosion or major leaks',
        'Cost of repair is less than 50% of replacement',
      ]}
      whenToReplace={[
        'Your unit is 10+ years old',
        "You're seeing rusty water or major leaks",
        'Frequent repairs are needed',
        'Your energy bills are climbing',
        'You want to upgrade to tankless',
      ]}
      services={[
        {
          title: 'Routine Maintenance',
          items: [
            'Flush sediment buildup',
            'Test pressure relief valve',
            'Check anode rod',
            'Inspect for leaks and corrosion',
          ],
        },
        {
          title: 'Emergency Repairs',
          items: [
            'Heating element replacement',
            'Thermostat replacement',
            'Pressure relief valve repair',
            'Leak diagnosis and repair',
          ],
        },
        {
          title: 'Full Replacement',
          items: [
            'Traditional tank water heaters',
            'Tankless on-demand systems',
            'Professional installation & disposal',
          ],
        },
      ]}
    />
    </>
  );
}
