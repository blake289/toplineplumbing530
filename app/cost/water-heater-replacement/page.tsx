import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import CostPageTemplate from '@/components/templates/CostPageTemplate';

export const metadata: Metadata = {
  title: 'Water Heater Replacement Cost in Redding, CA | Topline Plumbing',
  description:
    'Water heater replacement in Redding costs $1,200–$3,500 for a standard 40–50 gallon tank. Full cost breakdown, what affects price, and when repair makes sense instead. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/cost/water-heater-replacement',
  },
  openGraph: {
    title: 'Water Heater Replacement Cost in Redding, CA | Topline Plumbing',
    description:
      'Water heater replacement costs $1,200–$3,500 in Redding. Full breakdown with honest pricing from a licensed Redding plumber since 1998.',
    url: 'https://toplineplumbingco.com/cost/water-heater-replacement',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Water Heater Replacement Cost in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

const waterHeaterCostFAQs = [
  {
    question: 'How much does a new water heater cost installed in Redding, CA?',
    answer:
      'A standard 40–50 gallon gas or electric water heater costs $1,200–$3,500 installed in Redding, including the tank, labor, disposal of the old unit, and permit fees. Larger tanks, power vent models, and tankless units run higher — up to $6,500 installed. Topline Plumbing quotes every job upfront before any work starts.',
  },
  {
    question: 'Is it cheaper to repair or replace a water heater?',
    answer:
      'If your water heater is under 8 years old and the repair costs less than 50% of a new unit, repair usually wins. Past 10–12 years, replacement almost always makes more financial sense — you avoid throwing money at a unit that will fail again soon, and a modern high-efficiency tank can cut your energy bill. Topline gives you an honest recommendation either way.',
  },
  {
    question: 'How long does water heater installation take in Redding?',
    answer:
      'Most standard tank-to-tank replacements take 2–4 hours once we arrive. Tankless conversions take 4–8 hours because of the additional gas line, venting, and electrical work. Topline keeps fully stocked trucks, so we can usually handle same-day replacement for most standard tank models.',
  },
  {
    question: 'Do I need a permit to replace a water heater in Redding?',
    answer:
      'Yes. California requires a plumbing permit for water heater replacement in residential properties, including City of Redding addresses. Topline handles the permit pulling, inspection scheduling, and code compliance so you never have to deal with it — this is included in our quoted price.',
  },
  {
    question: "What's the most common reason a water heater fails?",
    answer:
      'Sediment buildup from Redding-area hard water is the number one killer. Minerals settle to the bottom of the tank, insulate the burner or heating element, and cause the tank to overheat and crack. Annual flushing extends life, but tanks over 10 years old are on borrowed time regardless.',
  },
  {
    question: 'Does Topline offer same-day water heater replacement?',
    answer:
      'Yes. We keep standard 40-gallon and 50-gallon gas and electric water heaters in stock on our service trucks. If you call before noon with a failed water heater, we can usually have hot water back on the same day. Call (530) 704-6989 for availability.',
  },
];

export default function WaterHeaterReplacementCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Cost Guide', url: 'https://toplineplumbingco.com/cost' },
          {
            name: 'Water Heater Replacement Cost',
            url: 'https://toplineplumbingco.com/cost/water-heater-replacement',
          },
        ]}
      />
      <FAQSchema faqs={waterHeaterCostFAQs} />
      <CostPageTemplate
        h1="Water Heater Replacement Cost in Redding, CA"
        priceAnswer="$1,200–$3,500 installed"
        priceAnswerDetail="Standard 40–50 gallon gas or electric tank, including removal of the old unit, installation labor, permit fees, and disposal. Tankless conversions and larger tanks run higher."
        intro={[
          "If your water heater is leaking from the base, making popping sounds, producing rusty water, or has stopped making hot water altogether, you're likely facing a replacement — not a repair. Most tanks last 8–12 years, and once the inside of the tank starts to corrode, there's no fix.",
          "In the Redding and Northern California market, the average homeowner pays $1,200–$3,500 for a standard tank replacement. That number includes the new water heater, the labor to remove the old one, the plumbing and gas/electrical reconnection, the permit and inspection, and disposal of the old unit.",
          "Below is a full breakdown of what Redding homeowners actually pay, what drives the price up or down, and when repair makes more sense than replacement.",
        ]}
        costRanges={{
          title: 'Typical Water Heater Replacement Cost Ranges',
          description:
            'Prices reflect full installed cost for Redding-area homes — tank, labor, permit, disposal, and all plumbing/gas/electrical work.',
          rows: [
            {
              scenario: '40-gallon gas or electric tank',
              range: '$1,200–$2,200',
              notes: 'Most common residential replacement',
            },
            {
              scenario: '50-gallon gas or electric tank',
              range: '$1,500–$2,800',
              notes: 'Standard for families of 4+',
            },
            {
              scenario: '75+ gallon high-capacity tank',
              range: '$2,500–$4,000',
              notes: 'Large homes, high hot water use',
            },
            {
              scenario: 'Power vent / direct vent gas',
              range: '$2,000–$3,500',
              notes: 'When standard venting is not possible',
            },
            {
              scenario: 'Tankless conversion (gas)',
              range: '$3,000–$6,500',
              notes: 'Includes gas line upgrade + venting',
            },
            {
              scenario: 'Hybrid heat-pump water heater',
              range: '$2,800–$5,500',
              notes: 'Highest energy efficiency, rebate-eligible',
            },
            {
              scenario: 'Emergency same-day swap',
              range: 'Same as above',
              notes: 'Same rate as scheduled during business hours',
            },
          ],
        }}
        factors={{
          title: 'What Affects Water Heater Replacement Cost',
          description:
            "Two Redding homeowners can get very different quotes for the 'same' water heater job. Here's why.",
          items: [
            {
              factor: 'Tank size and fuel type',
              impact:
                'A 40-gallon electric tank is the cheapest. Gas is slightly more due to venting. Larger tanks cost more — and tankless units are the most expensive upfront but save on operating cost.',
            },
            {
              factor: 'Location and accessibility',
              impact:
                "A garage install with clear access is fastest and cheapest. Attic, crawlspace, or tight closet installs take longer and cost more. Homes with the water heater on a second floor often need a drain pan and pan drain line as well.",
            },
            {
              factor: 'Code upgrades required',
              impact:
                'If your existing installation is out of current California code — wrong venting, missing expansion tank, no seismic strapping, non-compliant T&P discharge — those upgrades must be included in the replacement. Redding area homes built before 1995 often need upgrades.',
            },
            {
              factor: 'Permit and inspection fees',
              impact:
                'California law requires a permit for water heater replacement. Topline handles the permit and the inspection — these fees are baked into the quoted price, not added later.',
            },
            {
              factor: 'Disposal of the old unit',
              impact:
                'Old water heaters are heavy (80+ lbs empty, 500+ lbs full) and have to be properly disposed of. Topline handles removal and recycling — no charge for hauling it away.',
            },
            {
              factor: 'Gas line or electrical upgrades',
              impact:
                "Older homes may need a larger gas line for a new high-BTU unit, or a dedicated 240V circuit for an electric tank. If your existing setup doesn't meet the new unit's requirements, that's an extra line item.",
            },
          ],
        }}
        whatsIncluded={{
          title: "What's Included in Topline's Water Heater Replacement Price",
          items: [
            "The new water heater — your choice of brand (Bradford White, Rheem, AO Smith, Navien, Rinnai) with full manufacturer warranty",
            'Complete removal and disposal of your old water heater — no junk left behind',
            'Full installation labor, including all new flex connectors, shut-off valves, and dielectric unions',
            'Earthquake (seismic) strapping to current California code',
            'New temperature and pressure relief valve with proper discharge piping',
            'Thermal expansion tank installation if required by code',
            'Gas line connection and leak test (gas units) or electrical connection (electric units)',
            'Venting modification as required for proper combustion air and draft',
            'City of Redding or applicable jurisdiction permit pulled and inspection scheduled',
            'Hot water restoration and full operation test before we leave',
            'Written workmanship warranty on all installation labor',
            '30-minute walkthrough showing you how to operate, flush, and maintain the new unit',
          ],
        }}
        repairVsReplace={{
          title: 'Repair vs Replace: Which Makes Financial Sense?',
          repair: {
            label: 'Repair',
            cost: '$150–$600',
            when: [
              'Water heater is under 8 years old',
              'Repair cost is less than 50% of replacement',
              'Single component failure (thermostat, element, thermocouple, gas valve)',
              'No tank leaks or corrosion',
              'Anode rod can be replaced before tank damage starts',
            ],
          },
          replace: {
            label: 'Replace',
            cost: '$1,200–$3,500',
            when: [
              'Water heater is 10+ years old — even if current failure is "fixable"',
              'Active tank leak from the bottom or sides (tank is cracked)',
              'Rusty / discolored hot water (interior tank corrosion)',
              'Popping or rumbling sounds (severe sediment buildup)',
              'Repair quote is more than half the cost of a new unit',
              'Energy bills climbing from lost efficiency',
            ],
          },
        }}
        redFlags={{
          title: 'Red Flags: What to Watch for in Other Plumbers Quotes',
          description:
            "Not every plumbing company operates the same way. Here's what should make you pause before paying.",
          items: [
            "A 'free quote' that balloons after they arrive. A real quote is given in writing before work starts — not after the old tank is already out.",
            'Refusal to itemize labor, parts, permit, and disposal on the quote. You have a right to see what you\'re paying for.',
            'Cash-only, unpermitted installs. This saves $75–$200 on permit fees but leaves you holding the bag if anything fails (no code protection, no inspection, no recourse).',
            'Pushing a specific brand without explaining why. A good plumber recommends based on your situation — not because they have a dealer incentive.',
            "Inflated 'emergency' premiums of 50–100%. The cost of an emergency repair is driven by the work, not the urgency — Topline's rate for emergency work matches scheduled work during business hours.",
            'No written workmanship warranty. If the installer won\'t back their own work in writing, you shouldn\'t trust it.',
          ],
        }}
        localContext={{
          title: 'Water Heater Replacement in the Redding Area',
          paragraphs: [
            "Redding's hard, mineral-heavy water takes a toll on water heaters faster than it does in softer-water regions of California. Most Redding homes see their water heaters fail at 8–10 years instead of the 12–15 you'd see in areas with treated municipal water. If yours is in that window, start planning the replacement before it fails catastrophically and floods your garage.",
            "We serve the full Shasta County area — Redding, Shasta Lake, Anderson, Palo Cedro, Bella Vista — plus Red Bluff, Chico, and the rest of the 530 region. Most same-day replacements happen within city limits, while Tahoe and foothill installs are typically scheduled 24–48 hours out.",
            "Topline has replaced 2,800+ water heaters across Northern California since 1998. That experience matters: we know which brands handle Redding's water, which installs fail inspection and why, and how to spot the hidden issues (bad gas line, missing expansion tank, wrong venting) that cheaper plumbers miss. The price is fair and the work is done right the first time.",
          ],
        }}
        faqs={waterHeaterCostFAQs}
        primaryServiceHref="/services/water-heater-repair"
        primaryServiceLabel="See Water Heater Services"
        relatedCostLinks={[
          { href: '/cost/tankless-installation', label: 'Tankless Cost' },
          { href: '/cost/emergency-plumbing', label: 'Emergency Plumbing Cost' },
          { href: '/cost/drain-cleaning', label: 'Drain Cleaning Cost' },
          { href: '/cost/repiping', label: 'Repiping Cost' },
        ]}
      />
    </>
  );
}
