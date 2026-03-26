import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';

export const metadata: Metadata = {
  title: '24/7 Emergency Plumbing in Redding, CA | Topline Plumbing',
  description: 'Emergency plumber in Redding available 24/7. Fast response for burst pipes, gas leaks, and flooding. Call (530) 768-9446 now.',
};

const emergencyFAQs = [
  {
    question: "How fast does Topline Plumbing respond to plumbing emergencies in Redding?",
    answer: "Our average emergency response time in Redding is 60 minutes. We're available 24 hours a day, 7 days a week, 365 days a year — including weekends and holidays. Call (530) 768-9446 anytime.",
  },
  {
    question: "What counts as a plumbing emergency?",
    answer: "Common plumbing emergencies include burst pipes, major leaks causing water damage, complete loss of water, sewage backups, gas line problems, water heater flooding, and any situation where water is actively damaging your home or property.",
  },
  {
    question: "Do you charge extra for after-hours emergency plumbing calls?",
    answer: "We provide upfront pricing before any work begins. Call us at (530) 768-9446 and we'll give you a clear quote over the phone before dispatching — no surprise bills.",
  },
  {
    question: "What should I do while waiting for an emergency plumber?",
    answer: "Shut off the main water supply to stop active flooding. For a water heater leak, turn off the cold water inlet valve at the top of the tank. For a gas smell, leave the building immediately and call your gas company before calling a plumber.",
  },
  {
    question: "Is Topline Plumbing available for emergencies on weekends and holidays?",
    answer: "Yes. Topline Plumbing provides 24/7 emergency plumbing service every day of the year, including all weekends and holidays. Call (530) 768-9446 at any hour.",
  },
];

export default function EmergencyPlumbingPage() {
  return (
    <>
      <FAQSchema faqs={emergencyFAQs} />
      <ServicePageTemplate
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
            '✓ Real Person Answers — No voicemail. A real plumber answers 24/7',
            '✓ Fast Response — We aim to be on-site within 60 minutes for Redding emergencies',
            '✓ Upfront Pricing — Even in emergencies, you will know the cost before we start',
            '✓ Fully Stocked Trucks — We carry parts for most repairs so we can fix it on the spot',
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
