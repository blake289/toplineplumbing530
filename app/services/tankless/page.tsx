import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Tankless Water Heater Installation in Redding, CA | Topline Plumbing',
  description: 'Upgrade to a tankless water heater in Redding. Endless hot water and lower energy bills. Call (530) 704-6989 for a free consultation.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/tankless' },
  openGraph: {
    title: 'Tankless Water Heater Installation in Redding, CA | Topline Plumbing',
    description: 'Upgrade to a tankless water heater in Redding. Endless hot water and lower energy bills. Call (530) 704-6989 for a free consultation.',
    url: 'https://toplineplumbingco.com/services/tankless',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Tankless Water Heater Installation in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const tanklessFAQs = [
  {
    question: 'How much does tankless water heater installation cost in Redding, CA?',
    answer: 'Tankless water heater installation in Redding typically ranges from $1,500–$3,500 depending on the unit, gas line requirements, and venting setup. We provide upfront pricing before any work begins. Call (530) 704-6989 for a free consultation.',
  },
  {
    question: 'How much can I save by switching to tankless?',
    answer: 'Most homeowners save 20–30% on water heating costs by switching to a tankless system. Since tankless heaters only heat water on demand instead of keeping a full tank hot 24/7, they use significantly less energy — especially in households that use hot water consistently throughout the day.',
  },
  {
    question: 'How long do tankless water heaters last?',
    answer: 'Tankless water heaters typically last 20+ years — nearly double the lifespan of a traditional tank unit (8–12 years). They also tend to have lower long-term repair costs because they have fewer components subject to corrosion or sediment buildup.',
  },
  {
    question: 'What brands of tankless water heaters do you install?',
    answer: 'We install all major brands including Navien, Rinnai, Noritz, and Rheem. We will recommend the right brand and model for your household size and water usage. Call (530) 704-6989 for a free recommendation.',
  },
  {
    question: 'Do I need to upgrade my gas line for a tankless water heater?',
    answer: 'Sometimes yes. Tankless units require a larger gas supply than traditional tank heaters, so older homes may need a gas line upgrade. We assess your current gas line during the free consultation and include any required upgrades in your upfront quote. Call (530) 704-6989 to schedule.',
  },
];

export default function TanklessWaterHeaterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Tankless Water Heater Installation', url: 'https://toplineplumbingco.com/services/tankless' },
      ]} />
      <FAQSchema faqs={tanklessFAQs} />
      <ServicePageTemplate
      faqs={tanklessFAQs}
      pricingCallout={{
        priceRange: '$3,000–$6,500 installed',
        href: '/cost/tankless-installation',
        label: 'See Full Cost Guide',
      }}
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
    </>
  );
}
