import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: '24/7 Emergency Plumbing in Redding, CA | Topline Plumbing',
  description: 'Emergency plumber in Redding available 24/7. Fast response for burst pipes, gas leaks, and flooding. Call (530) 768-9446 now.',
};

export default function EmergencyPlumbingPage() {
  return (
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
  );
}
