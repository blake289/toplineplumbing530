import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: '24/7 Emergency Plumbing in Redding, CA | Topline Plumbing',
  description: 'Emergency plumber in Redding available 24/7. Fast response for burst pipes, gas leaks, and flooding. Call (530) 704-6989 now.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/emergency' },
  openGraph: {
    title: '24/7 Emergency Plumbing in Redding, CA | Topline Plumbing',
    description: 'Emergency plumber in Redding available 24/7. Fast response for burst pipes, gas leaks, and flooding. Call (530) 704-6989 now.',
    url: 'https://toplineplumbingco.com/services/emergency',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — 24/7 Emergency Plumbing in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const emergencyHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'What to Do in a Plumbing Emergency Before the Plumber Arrives',
  description:
    'Step-by-step emergency response to limit damage from a burst pipe, water heater failure, or active leak before the plumber arrives.',
  totalTime: 'PT10M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
  tool: [
    { '@type': 'HowToTool', name: 'Main water shut-off valve' },
    { '@type': 'HowToTool', name: 'Towels or wet/dry vacuum' },
    { '@type': 'HowToTool', name: 'Phone to call emergency plumber' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Shut off the main water valve',
      text: 'Go to your main water shut-off valve (usually in the garage, near the hose bib, or in the crawlspace) and turn it off immediately. This stops the water flow and limits further damage.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Turn off the water heater',
      text: 'For gas water heaters, turn the control knob to the pilot position. For electric, flip the water heater breaker. This prevents the tank from running dry and damaging the heating element.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Open faucets to drain the lines',
      text: 'Open all faucets (hot and cold) to drain any remaining water from the supply lines. This minimizes how much water can leak from the burst or failure point.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Call Topline Plumbing 24/7',
      text: 'Call (530) 704-6989 for 24/7 emergency plumbing in Redding. A real plumber answers — no voicemail. Average response time 60 minutes. No after-hours premium.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Protect valuables and document damage',
      text: 'Move furniture, electronics, and valuables out of the affected area. Start soaking up water with towels or a wet/dry vacuum. Take photos of all damage for your insurance claim.',
    },
  ],
};

const emergencyFAQs = [
  {
    question: "How fast does Topline Plumbing respond to plumbing emergencies in Redding?",
    answer: "Our average emergency response time in Redding is 60 minutes. We're available 24 hours a day, 7 days a week, 365 days a year — including weekends and holidays. Call (530) 704-6989 anytime.",
  },
  {
    question: "What counts as a plumbing emergency?",
    answer: "Common plumbing emergencies include burst pipes, major leaks causing water damage, complete loss of water, sewage backups, gas line problems, water heater flooding, and any situation where water is actively damaging your home or property.",
  },
  {
    question: "Do you charge extra for after-hours emergency plumbing calls?",
    answer: "We provide upfront pricing before any work begins. Call us at (530) 704-6989 and we'll give you a clear quote over the phone before dispatching — no surprise bills.",
  },
  {
    question: "What should I do while waiting for an emergency plumber?",
    answer: "Shut off the main water supply to stop active flooding. For a water heater leak, turn off the cold water inlet valve at the top of the tank. For a gas smell, leave the building immediately and call your gas company before calling a plumber.",
  },
  {
    question: "Is Topline Plumbing available for emergencies on weekends and holidays?",
    answer: "Yes. Topline Plumbing provides 24/7 emergency plumbing service every day of the year, including all weekends and holidays. Call (530) 704-6989 at any hour.",
  },
];

export default function EmergencyPlumbingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: '24/7 Emergency Plumbing', url: 'https://toplineplumbingco.com/services/emergency' },
      ]} />
      <FAQSchema faqs={emergencyFAQs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyHowToSchema) }}
      />
      <ServicePageTemplate
      faqs={emergencyFAQs}
      hero={{
        title: '24/7 Emergency Plumbing in Redding — We Answer, We Show Up, We Fix It',
        description: [
          "Burst pipe flooding your home? Sewage backing up? Gas leak? Don't wait — call us now.",
          "Topline Plumbing provides 24/7 emergency plumbing services across Redding and Northern California. A real plumber answers your call, and we aim to be on-site within 60 minutes for local emergencies."
        ],
      }}
      services={[
        {
          title: 'Our Emergency Response Promise',
          items: [
            'Real Person Answers — No voicemail. A real plumber answers 24/7',
            'Fast Response — We aim to be on-site within 60 minutes for Redding emergencies',
            'Upfront Pricing — Even in emergencies, you will know the cost before we start',
            'Fully Stocked Trucks — We carry parts for most repairs so we can fix it on the spot',
          ],
        },
        {
          title: 'What to Do Before We Arrive — Burst Pipes',
          items: [
            'Shut off main water supply',
            'Turn off water heater',
            'Open faucets to drain remaining water',
            'Move valuables away from affected area',
          ],
        },
        {
          title: 'What to Do Before We Arrive — Sewage Backup',
          items: [
            'Stop using all water in the house',
            'Keep people and pets away',
            'Call us immediately',
            'Do not attempt DIY repairs',
          ],
        },
      ]}
      ctaText="Need Emergency Help Right Now?"
    />
    </>
  );
}
