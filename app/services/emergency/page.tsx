import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Emergency Plumbing in Redding, CA | Topline Plumbing',
  description: 'Emergency plumber in Redding. Same-day response for burst pipes, gas leaks, and flooding during business hours (Mon–Fri 8a–4:30p). Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/emergency' },
  openGraph: {
    title: 'Emergency Plumbing in Redding, CA | Topline Plumbing',
    description: 'Emergency plumber in Redding. Same-day response for burst pipes, gas leaks, and flooding during business hours (Mon–Fri 8a–4:30p). Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/emergency',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Emergency Plumbing in Redding, CA' }],
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
      name: 'Call Topline Plumbing',
      text: 'Call (530) 704-6989 for emergency plumbing in Redding during business hours (Mon–Fri 8:00a–4:30p). Same-day response. Upfront pricing.',
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
    question: "When does Topline Plumbing handle emergencies in Redding?",
    answer: "Topline Plumbing handles emergency plumbing during business hours: Monday through Friday, 8:00a to 4:30p. For after-hours issues, text (530) 704-6989 and we'll respond first thing the next business day. For active emergencies outside our hours, call 911 if it's a safety issue (gas leak, major flood) or shut off your water at the main valve until we open.",
  },
  {
    question: "What counts as a plumbing emergency?",
    answer: "Common plumbing emergencies include burst pipes, major leaks causing water damage, complete loss of water, sewage backups, gas line problems, water heater flooding, and any situation where water is actively damaging your home or property.",
  },
  {
    question: "Do you charge extra for emergency plumbing calls?",
    answer: "No. Emergency calls during our business hours are charged at our standard rate — no surprise upcharges. We provide upfront pricing before any work begins. Call (530) 704-6989 and we'll give you a clear quote over the phone before dispatching.",
  },
  {
    question: "What should I do while waiting for an emergency plumber?",
    answer: "Shut off the main water supply to stop active flooding. For a water heater leak, turn off the cold water inlet valve at the top of the tank. For a gas smell, leave the building immediately and call your gas company before calling a plumber.",
  },
  {
    question: "What if I have a plumbing emergency after hours or on the weekend?",
    answer: "Topline is closed evenings and weekends, so for active emergencies outside business hours: shut off your main water valve to stop the flooding, call 911 if it's a safety issue (gas leak, major flood, sewage backing up into living areas), then text (530) 704-6989 and we'll respond first thing the next business day.",
  },
];

export default function EmergencyPlumbingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Emergency Plumbing', url: 'https://toplineplumbingco.com/services/emergency' },
      ]} />
      <FAQSchema faqs={emergencyFAQs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyHowToSchema) }}
      />
      <ServicePageTemplate
      faqs={emergencyFAQs}
      hero={{
        title: 'Emergency Plumbing in Redding — Same-Day Response During Business Hours',
        description: [
          "Burst pipe flooding your home? Sewage backing up? Gas leak during business hours? Call us now.",
          "Topline Plumbing handles emergency plumbing across Redding and Northern California Monday through Friday, 8:00a to 4:30p. Same-day response, upfront pricing, and licensed technicians who actually finish the job."
        ],
      }}
      services={[
        {
          title: 'Our Emergency Response Promise',
          items: [
            'Business Hours — Mon–Fri 8:00a–4:30p for live dispatch',
            'Fast Response — Same-day scheduling for Redding emergencies',
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
