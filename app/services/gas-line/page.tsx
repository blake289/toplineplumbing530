import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Gas Line Repair & Installation in Redding, CA | Topline Plumbing',
  description: 'Licensed gas line repair and installation in Redding, CA. Gas leaks, new appliance lines, outdoor BBQ hookups. Same-day service Mon–Fri 8a–4:30p. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/gas-line' },
  openGraph: {
    title: 'Gas Line Repair & Installation in Redding, CA | Topline Plumbing',
    description: 'Licensed gas line repair and installation in Redding, CA. Gas leaks, new appliance lines, outdoor BBQ hookups. Same-day service Mon–Fri 8a–4:30p. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/gas-line',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Gas Line Repair & Installation in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What should I do if I smell gas in my home?',
    answer: 'Leave the building immediately — do not turn any lights or switches on or off. Once outside, call your gas company (PG&E: 1-800-743-5000) to shut off the gas, then call Topline Plumbing at (530) 704-6989 for emergency gas line repair. Do not re-enter until the leak has been located and repaired by a licensed plumber.',
  },
  {
    question: 'Are you licensed to work on gas lines in California?',
    answer: 'Yes. Topline Plumbing holds a valid California Contractors License and is fully licensed, bonded, and insured to perform gas line work in Redding and surrounding Northern California communities. All gas line work is permitted and inspected as required by California code.',
  },
  {
    question: 'How much does gas line repair cost in Redding?',
    answer: 'Gas line work cost depends on the location of the leak, accessibility, and extent of damage — minor leak fixes are very different from new line installs for appliances or outdoor BBQs. Topline quotes every job upfront before any work begins. Call (530) 704-6989 for an estimate.',
  },
  {
    question: 'Can you install a gas line for my outdoor BBQ or fire pit?',
    answer: 'Yes. We install dedicated gas lines for outdoor grills, BBQs, fire pits, and patio heaters throughout Redding and the surrounding area. Running a dedicated gas line is safer and more convenient than dealing with propane tanks. Call (530) 704-6989 to schedule.',
  },
  {
    question: 'How do I know if I have a gas leak?',
    answer: 'Signs of a gas leak include a rotten egg or sulfur smell (natural gas has a chemical odorant added for detection), hissing or whistling near gas lines or appliances, dead vegetation in a line across your yard, or bubbling in standing water near a gas line. If you suspect a leak, leave the area and call for help immediately.',
  },
];

export default function GasLinePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Gas Line Repair & Installation', url: 'https://toplineplumbingco.com/services/gas-line' },
      ]} />
      <FAQSchema faqs={faqs} />
      <ServicePageTemplate
        faqs={faqs}
        hero={{
          title: 'Gas Line Repair & Installation in Redding, CA',
          description: [
            "Gas leaks are a serious safety hazard — and not something to wait on. Topline Plumbing provides same-day emergency gas line repair for Redding homeowners during business hours (Mon–Fri 8:00a–4:30p), with licensed plumbers who know California gas code inside and out. If you smell gas outside our hours, leave the building and call PG&E at 1-800-743-5000.",
            "Whether it's a suspected leak, a new appliance hookup, or an outdoor BBQ line, we handle it safely, properly permitted, and with upfront pricing.",
          ],
        }}
        services={[
          {
            title: 'Gas Leak Detection & Repair',
            items: [
              'Same-day emergency response during business hours',
              'Electronic leak detection equipment',
              'Pressure testing after every repair',
              'Full safety inspection included',
            ],
          },
          {
            title: 'New Gas Line Installation',
            items: [
              'Gas lines for ranges, dryers, and water heaters',
              'Outdoor BBQ and fire pit hookups',
              'Whole-house gas line upgrades',
              'Properly permitted and city-inspected',
            ],
          },
          {
            title: 'Gas Line Maintenance',
            items: [
              'Annual gas line inspections',
              'Shutoff valve replacement',
              'Flex connector replacement',
              'Sediment trap installation',
            ],
          },
        ]}
      />
    </>
  );
}
