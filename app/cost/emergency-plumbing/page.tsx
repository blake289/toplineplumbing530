import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import CostPageTemplate from '@/components/templates/CostPageTemplate';

export const metadata: Metadata = {
  title: 'Emergency Plumbing Cost in Redding, CA | Topline Plumbing',
  description:
    'Emergency plumbing in Redding costs $150–$800+ depending on the issue. Transparent upfront pricing — no surprise upcharges. Call (530) 704-6989 during business hours (Mon–Fri 8a–4:30p).',
  alternates: { canonical: 'https://toplineplumbingco.com/cost/emergency-plumbing' },
  openGraph: {
    title: 'Emergency Plumbing Cost in Redding, CA | Topline Plumbing',
    description:
      "Emergency plumbing costs $150–$800+ in Redding. Transparent upfront pricing — call (530) 704-6989 Mon–Fri 8a–4:30p.",
    url: 'https://toplineplumbingco.com/cost/emergency-plumbing',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Emergency Plumbing Cost in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

const emergencyCostFAQs = [
  {
    question: 'How much does emergency plumbing cost in Redding, CA?',
    answer:
      'Emergency plumbing calls in Redding typically run $150–$800+ depending on the issue. A simple shut-off and minor repair (under-sink leak, single fixture issue) is at the low end. Burst pipe repair, water heater flooding, or main line backup can reach $500–$1,500+ depending on cleanup and repair scope. Topline Plumbing charges the same rate for emergency work as for scheduled calls during our business hours.',
  },
  {
    question: 'Do plumbers charge extra for emergencies?',
    answer:
      "Many do — typically 50–100% more than the standard rate, especially for after-hours calls. Topline Plumbing charges the same rate for emergency work as scheduled work during our business hours (Mon–Fri 8:00a–4:30p). A plumbing emergency shouldn't cost more just because it's urgent.",
  },
  {
    question: 'Is there a service call or trip charge for emergency plumbing?',
    answer:
      "Topline charges a flat diagnostic fee ($80–$120) for most emergency calls that covers the plumber arriving on-site, assessing the situation, and giving you a written quote for the repair. If you approve the repair, the diagnostic fee is credited toward the total cost. You never pay for a plumber to show up and do nothing.",
  },
  {
    question: 'What counts as a plumbing emergency?',
    answer:
      "A plumbing emergency is anything that's actively causing damage or that can't wait until business hours. This includes burst pipes, active leaks causing water damage, sewage backing up into the home, gas line leaks, complete loss of water, water heater flooding, frozen pipes in winter, or any situation where water is uncontrolled. Slow drains and dripping faucets are NOT emergencies — they can wait.",
  },
  {
    question: 'How fast can Topline respond to emergencies in Redding?',
    answer:
      "During business hours (Mon–Fri 8:00a–4:30p), Topline aims for same-day response to Redding-area emergencies. Typical on-site arrival is under an hour for Redding, Shasta Lake, Anderson, and surrounding addresses. Out-of-area calls (Red Bluff, Chico, Paradise) are scheduled as routing allows. We're closed evenings and weekends.",
  },
  {
    question: 'Should I turn off the water before calling a plumber?',
    answer:
      "Yes — almost always. If there's active flooding from anywhere in the house, shut off the main water valve before you do anything else. The main shut-off is usually in the garage, outside near the hose bib, or in the crawlspace/basement. Turning off the main will stop the water flow and limit damage while you wait for the plumber to arrive.",
  },
];

export default function EmergencyPlumbingCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Cost Guide', url: 'https://toplineplumbingco.com/cost' },
          {
            name: 'Emergency Plumbing Cost',
            url: 'https://toplineplumbingco.com/cost/emergency-plumbing',
          },
        ]}
      />
      <FAQSchema faqs={emergencyCostFAQs} />
      <CostPageTemplate
        h1="Emergency Plumbing Cost in Redding, CA"
        priceAnswer="$150–$800+ typical range"
        priceAnswerDetail="Varies by issue: minor leak repairs $150–$350, burst pipe repair $300–$800, water heater flooding $400–$1,200, main sewer backup $400–$1,000. Transparent upfront pricing — no surprise upcharges."
        intro={[
          "Plumbing emergencies are stressful enough without worrying that you're being price-gouged. Many plumbing companies tack heavy upcharges onto emergency calls. Topline Plumbing charges the same rate for emergency work as scheduled work during our business hours (Mon–Fri 8:00a–4:30p).",
          "For the Redding and Northern California market, most emergency plumbing calls run $150–$800 depending on the specific issue. A simple shut-off and minor repair is at the low end, while burst pipe repair, water heater flooding, or main sewer backup with water damage can reach $800–$1,500+. Below is a full breakdown of what you should expect to pay.",
          "If you're reading this with water actively flooding your home during business hours, stop reading and call (530) 704-6989. If it's after hours, shut off your main water valve, call 911 if it's a safety issue (gas, major flood), and text (530) 704-6989 — we'll respond first thing the next business day.",
        ]}
        costRanges={{
          title: 'Typical Emergency Plumbing Cost Ranges',
          description:
            'Real-world pricing for emergency calls in the Redding area. All jobs are quoted upfront before any work begins.',
          rows: [
            {
              scenario: 'Minor fixture leak / under-sink emergency',
              range: '$150–$350',
              notes: 'Stop leak, replace failed valve or supply line',
            },
            {
              scenario: 'Toilet overflow / failed flapper',
              range: '$150–$300',
              notes: 'Shut-off repair, flapper/fill valve replacement',
            },
            {
              scenario: 'Burst pipe repair (accessible)',
              range: '$300–$800',
              notes: 'Copper or PEX section replacement',
            },
            {
              scenario: 'Burst pipe (in-wall, slab, or crawlspace)',
              range: '$600–$1,500',
              notes: 'Access and repair, does not include drywall',
            },
            {
              scenario: 'Water heater flooding / emergency swap',
              range: '$400–$3,500',
              notes: 'Shut-off free, replacement quoted same as standard',
            },
            {
              scenario: 'Main sewer line backup',
              range: '$400–$1,000',
              notes: 'Hydrojetting or auger clearing',
            },
            {
              scenario: 'Gas line emergency',
              range: '$300–$1,200',
              notes: 'Shut-off, leak location, repair',
            },
            {
              scenario: 'Frozen pipe (winter)',
              range: '$250–$800',
              notes: 'Thaw, assess damage, repair any splits',
            },
            {
              scenario: 'Diagnostic / trip fee',
              range: '$80–$120',
              notes: 'Credited toward repair if you approve',
            },
          ],
        }}
        factors={{
          title: 'What Affects Emergency Plumbing Cost',
          description:
            'The nature of the emergency drives cost — severity, access, and scope, not arbitrary upcharges.',
          items: [
            {
              factor: 'Type and severity of the emergency',
              impact:
                'A simple leak under a sink is very different from a burst pipe flooding three rooms. The severity directly determines the repair scope.',
            },
            {
              factor: 'Accessibility of the damaged area',
              impact:
                'A pipe leak in a visible location (under a sink, in the garage) is the cheapest to fix. A leak inside a wall, under the slab foundation, or in the crawlspace is more labor-intensive and therefore more expensive.',
            },
            {
              factor: 'Repair vs. replacement',
              impact:
                'Spot-repairing a single burst section of copper is $300–$600. If the section is in terrible shape, you may need a larger repipe — which ranges up to $15,000 depending on scope.',
            },
            {
              factor: 'Whether water damage cleanup is needed',
              impact:
                "Topline handles the plumbing — we don't do drywall, flooring, or water mitigation. If you need cleanup, we can refer you to a local water damage restoration specialist, but that's a separate cost.",
            },
            {
              factor: 'Response time requirements',
              impact:
                'During business hours, Topline prioritizes active emergencies and aims for same-day response across the Redding area. If you need immediate priority over scheduled calls, we accommodate when possible — no additional charge.',
            },
            {
              factor: "What the plumber claims counts as 'emergency'",
              impact:
                "Some plumbers charge inflated emergency rates for any urgent call regardless of severity. Topline doesn't — a slow drip is still billed at our standard rate.",
            },
          ],
        }}
        whatsIncluded={{
          title: "What's Included in Topline's Emergency Response",
          items: [
            'Live scheduling during business hours (Mon–Fri 8:00a–4:30p)',
            'Same-day on-site response targeted for Redding-area emergencies',
            'Free upfront quote before any repair work begins',
            'Standard rate for emergency work — no inflated urgency upcharges',
            'Licensed California plumber with full insurance coverage (CSLB #596557)',
            'Fully stocked truck — we can usually complete most emergency repairs in a single visit',
            'Protection of your floors and belongings while we work',
            'Testing and full restoration of water or gas service before we leave',
            '30-day workmanship guarantee on all emergency repairs',
            'Written invoice detailing exactly what was done',
          ],
        }}
        redFlags={{
          title: "Red Flags to Watch for When You're in an Emergency",
          description:
            "When you're panicking and water is everywhere, you're vulnerable to being overcharged. Know what to watch for.",
          items: [
            "50–100% 'emergency' or 'after-hours premium' on the quote. This is the single most common overcharge. A legitimate emergency repair's cost is driven by the work, not the urgency.",
            "'Minimum 2-hour charge' for a 20-minute repair. Pay for the job, not the clock.",
            "Adding 'diagnostic fee' on top of the repair without crediting it. A diagnostic fee should be credited if you approve the repair.",
            "Pressure to agree to a large repair immediately 'before it gets worse.' A real emergency repair is quoted in writing, and you have the right to get a second opinion.",
            "'We need to replace everything' quotes. Many emergencies are single-point failures that only need a spot repair. Full repipe recommendations during an emergency are often upsells.",
            'No written invoice or receipt. Always get it in writing so you have recourse if something fails.',
          ],
        }}
        localContext={{
          title: 'Emergency Plumbing in the Redding Area',
          paragraphs: [
            "Topline is based in Redding and dispatches from inside city limits during business hours (Mon–Fri 8:00a–4:30p), so same-day response is typical for Redding, Shasta Lake, Anderson, Palo Cedro, and Bella Vista addresses. Out-of-area emergencies (Red Bluff, Chico, Paradise, Oroville) are scheduled as routing allows. We're closed evenings and weekends.",
            "When you reach us at (530) 704-6989 during business hours, you'll talk with someone who actually does plumbing — not an offshore call center. After hours, text the same number and we'll respond first thing the next business day.",
            "Topline has been handling Redding-area plumbing emergencies since 1998. Joe Torculas has personally responded to thousands of burst pipes, water heater failures, and sewer backups across Shasta County. That experience is what lets us quote accurately over the phone, show up with the right parts, and fix it the first time.",
          ],
        }}
        faqs={emergencyCostFAQs}
        primaryServiceHref="/services/emergency"
        primaryServiceLabel="See Emergency Plumbing Services"
        relatedCostLinks={[
          { href: '/cost/water-heater-replacement', label: 'Water Heater Cost' },
          { href: '/cost/drain-cleaning', label: 'Drain Cleaning Cost' },
          { href: '/cost/repiping', label: 'Repiping Cost' },
        ]}
      />
    </>
  );
}
