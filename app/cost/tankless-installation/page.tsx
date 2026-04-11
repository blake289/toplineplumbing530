import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import CostPageTemplate from '@/components/templates/CostPageTemplate';

export const metadata: Metadata = {
  title: 'Tankless Water Heater Installation Cost in Redding, CA | Topline Plumbing',
  description:
    'Tankless water heater installation in Redding costs $3,000–$6,500 depending on gas line and venting upgrades. Full cost breakdown with ROI analysis. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/cost/tankless-installation',
  },
  openGraph: {
    title: 'Tankless Water Heater Installation Cost in Redding, CA',
    description:
      'Tankless water heater installation costs $3,000–$6,500 in Redding. Full cost breakdown + ROI analysis from a licensed Redding plumber.',
    url: 'https://toplineplumbingco.com/cost/tankless-installation',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Tankless Water Heater Installation Cost in Redding',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

const tanklessCostFAQs = [
  {
    question: 'How much does a tankless water heater cost installed in Redding?',
    answer:
      'Tankless water heater installation in Redding costs $3,000–$6,500 fully installed, including the unit, gas line upgrade if needed, venting, electrical, and permit. A straightforward gas-to-gas tankless swap without major upgrades lands closer to $3,000–$4,500. Full conversions from tank to tankless with gas line and venting upgrades run $4,500–$6,500.',
  },
  {
    question: 'Is a tankless water heater worth it in Redding, CA?',
    answer:
      "For most Redding homes with 3+ people, yes. Tankless units last 20+ years (compared to 8–12 for tank units), deliver endless hot water, and reduce energy use by 24–34% according to the U.S. Department of Energy. The upfront cost is higher, but over the 20-year lifespan you typically save $1,500–$3,000 in energy costs plus avoid one full tank replacement. For small households that use minimal hot water, the payback is slower.",
  },
  {
    question: 'How much energy does a tankless water heater save per month?',
    answer:
      "The U.S. Department of Energy estimates tankless water heaters cut water heating energy use by 24–34% for households using less than 41 gallons/day, and by 8–14% for heavy users. For a typical Redding household spending $40–$60/month on hot water, that's $8–$20 in monthly savings, or $96–$240 per year.",
  },
  {
    question: 'Do I need a bigger gas line for a tankless water heater?',
    answer:
      "Often, yes. Tank water heaters run at 30,000–40,000 BTU, while most gas tankless units need 150,000–199,000 BTU. Most Redding homes built before 2000 have a 1/2-inch or 3/4-inch gas line that's too small — we usually need to run a 3/4-inch or 1-inch line from the meter. This is the biggest hidden cost in a tankless conversion.",
  },
  {
    question: 'How long does tankless installation take?',
    answer:
      'A simple tankless-to-tankless swap takes 3–5 hours. A full conversion from a tank water heater to tankless takes 6–10 hours because of the gas line, venting, electrical, and code-compliant mounting work. We always complete the install in a single day so you never go without hot water overnight.',
  },
  {
    question: 'What brand of tankless water heater do you recommend for Redding?',
    answer:
      'For most Redding homes we recommend Rinnai, Navien, or Noritz — these are the three brands with the best reliability track record in the Northern California climate and water chemistry. Navien is our top pick for homes with mid-range budgets, Rinnai for premium installs, and Noritz for commercial applications.',
  },
];

export default function TanklessInstallationCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Cost Guide', url: 'https://toplineplumbingco.com/cost' },
          {
            name: 'Tankless Installation Cost',
            url: 'https://toplineplumbingco.com/cost/tankless-installation',
          },
        ]}
      />
      <FAQSchema faqs={tanklessCostFAQs} />
      <CostPageTemplate
        h1="Tankless Water Heater Installation Cost in Redding, CA"
        priceAnswer="$3,000–$6,500 installed"
        priceAnswerDetail="Full cost for a residential tankless water heater in Redding, including the unit, gas line upgrade (if needed), venting, electrical, permits, and disposal of the old tank. Straightforward swaps run $3,000–$4,500, full conversions run $4,500–$6,500."
        intro={[
          "Tankless water heaters give you endless hot water, cut your energy bill 24–34%, and last 20+ years — more than double the lifespan of a traditional tank. The tradeoff is higher upfront cost and a more complex installation.",
          "For Redding homeowners, the full installed cost typically ranges from $3,000 on the low end (straightforward swap) to $6,500 on the high end (full conversion from a tank unit with gas line and venting upgrades). Below is the full breakdown of what drives the cost, when tankless is worth it, and what to watch out for.",
        ]}
        costRanges={{
          title: 'Typical Tankless Installation Cost Ranges',
          description:
            'Fully installed prices for Redding-area homes, including unit, labor, permits, and all required upgrades.',
          rows: [
            {
              scenario: 'Tankless-to-tankless replacement',
              range: '$2,800–$4,500',
              notes: 'Existing gas line and venting already sized for tankless',
            },
            {
              scenario: 'Basic tank-to-tankless conversion',
              range: '$3,500–$5,000',
              notes: 'Gas line and vent upgrade required',
            },
            {
              scenario: 'Full conversion with gas line rerun',
              range: '$4,500–$6,500',
              notes: 'Most common for older Redding homes',
            },
            {
              scenario: 'Outdoor tankless installation',
              range: '$3,000–$4,500',
              notes: 'No venting needed, simpler install',
            },
            {
              scenario: 'Whole-home recirculation upgrade',
              range: '+$500–$1,200',
              notes: 'Adds instant hot water at all fixtures',
            },
            {
              scenario: 'Hybrid / heat-pump tankless',
              range: '$5,000–$8,500',
              notes: 'Highest efficiency, rebate-eligible',
            },
          ],
        }}
        factors={{
          title: 'What Affects Tankless Installation Cost',
          description:
            'The unit itself is only part of the cost. Here are the variables that drive the total quote up or down.',
          items: [
            {
              factor: 'Gas line size',
              impact:
                "Tankless units need 150,000–199,000 BTU, vs. 30,000–40,000 for tank models. Most Redding homes built before 2000 need a larger gas line from the meter to the heater — this is the single biggest cost variable, adding $500–$1,500.",
            },
            {
              factor: 'Venting type',
              impact:
                'Tankless units use stainless steel or PVC venting rated for condensing combustion. Most tank water heater vents cannot be reused, so new venting is typically required. Adds $300–$800.',
            },
            {
              factor: 'Indoor vs outdoor mounting',
              impact:
                'Outdoor mounting eliminates the need for venting entirely, cutting $300–$800 off the cost. Indoor mounting is more common but requires code-compliant venting and combustion air.',
            },
            {
              factor: 'Electrical requirements',
              impact:
                "Even gas tankless units need a 120V outlet for the controls. If there's no existing outlet within reach, you'll need an electrician or electrical work added to the quote. Electric tankless units need dedicated 240V circuits — much more expensive.",
            },
            {
              factor: 'Unit brand and BTU capacity',
              impact:
                'Rinnai and Navien are premium brands ($1,000–$2,200 unit cost). Builder-grade brands run $700–$1,200 but have shorter warranties and more failures. We stick with brands we can back.',
            },
            {
              factor: 'Recirculation system add-on',
              impact:
                'A recirc pump eliminates the 15–30 second wait for hot water to reach distant fixtures. Adds $500–$1,200 but dramatically improves the daily experience — especially in larger Redding homes.',
            },
          ],
        }}
        whatsIncluded={{
          title: "What's Included in Topline's Tankless Installation Quote",
          items: [
            'The tankless water heater unit (Rinnai, Navien, Noritz, or your preferred brand) with full manufacturer warranty',
            "Removal and disposal of your old water heater — we'll haul it away at no extra charge",
            'All gas line work — sizing, routing, fittings, and leak testing to California code',
            'Stainless steel or PVC venting installation rated for condensing combustion',
            '120V electrical connection (or 240V for electric models)',
            'Isolation valves for future maintenance and descaling',
            'Condensate drain line installation (condensing models)',
            'City of Redding or applicable jurisdiction permit and inspection',
            'Startup, calibration, and temperature setting',
            'Walkthrough showing you how to use the unit, access error codes, and schedule annual descaling',
            'Written workmanship warranty',
          ],
        }}
        repairVsReplace={{
          title: 'Tankless vs. Traditional Tank: 10-Year Cost Comparison',
          repair: {
            label: 'Traditional Tank (10 years)',
            cost: '~$4,000 total',
            when: [
              'Lower upfront cost ($1,200–$3,500 installed)',
              'One full replacement within 10 years (typical tank lifespan)',
              'Higher monthly energy cost ($40–$70/mo)',
              'Hot water capacity limited by tank size (runs out)',
              'Simpler install and maintenance',
            ],
          },
          replace: {
            label: 'Tankless (10 years)',
            cost: '~$3,800–$5,500 total',
            when: [
              'Higher upfront cost ($3,000–$6,500 installed)',
              'No replacement needed within 10 years (20+ year lifespan)',
              'Lower monthly energy cost ($25–$45/mo)',
              'Endless hot water — never runs out',
              'Requires annual descaling ($150–$300)',
              'Breaks even at ~year 7–9, saves money after that',
            ],
          },
        }}
        redFlags={{
          title: 'Red Flags in Tankless Quotes from Other Plumbers',
          description:
            'Tankless is more complex than tank installs, so there are more places a plumber can cut corners. Watch for these.',
          items: [
            "Not upgrading the gas line when it's undersized. A tankless unit starved for gas will short-cycle, under-perform, and eventually fail. The plumber saves 2 hours — you lose 10 years of unit life.",
            'Reusing old tank water heater venting. Tank venting is rated for lower exhaust temperatures and will fail on a tankless unit. Must be replaced.',
            'Skipping the isolation valves. These are code-required and essential for annual descaling. Saving $30 here costs you $300–$500 every time you need maintenance.',
            'No permit or inspection. Tankless installs are the most commonly unpermitted plumbing work in California. If yours is unpermitted and fails, your homeowners insurance may deny the claim.',
            "Offering 'lifetime warranty' without the fine print. Most 'lifetime' warranties only cover the heat exchanger — not the labor or other components. Read it.",
            'Quoting before seeing your existing gas line, vent, and electrical. A real tankless quote requires an in-person look.',
          ],
        }}
        localContext={{
          title: 'Tankless Installation in Redding',
          paragraphs: [
            "Most Redding homes built before 2000 need gas line upgrades for tankless installs. The good news is that the upgrade is one-time — once we run a properly sized line from your meter, you're set for decades. We handle this work in-house so you're not dealing with multiple contractors.",
            "Redding's hard water is hard on tankless units too. We strongly recommend annual descaling (easy to do with isolation valves, $150–$300/year). Homes with a whole-house water softener can go 18–24 months between descalings. Topline installs with isolation valves standard — never as an upgrade.",
            "We've installed tankless units throughout Redding, Shasta Lake, Anderson, Palo Cedro, and the surrounding areas since 2008 — when tankless first became common in residential. That experience matters: tankless is the single most commonly botched water heater install, and the failures don't show up for 2–3 years. Do it right the first time.",
          ],
        }}
        faqs={tanklessCostFAQs}
        primaryServiceHref="/services/tankless"
        primaryServiceLabel="See Tankless Services"
        relatedCostLinks={[
          { href: '/cost/water-heater-replacement', label: 'Water Heater Cost' },
          { href: '/cost/repiping', label: 'Repiping Cost' },
          { href: '/cost/emergency-plumbing', label: 'Emergency Plumbing Cost' },
        ]}
      />
    </>
  );
}
