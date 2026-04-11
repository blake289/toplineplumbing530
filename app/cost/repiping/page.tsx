import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import CostPageTemplate from '@/components/templates/CostPageTemplate';

export const metadata: Metadata = {
  title: 'Whole-House Repiping Cost in Redding, CA | Topline Plumbing',
  description:
    'Whole-house repiping in Redding costs $4,000–$15,000 depending on home size, pipe type, and access. PEX vs copper comparison, full cost breakdown. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/cost/repiping' },
  openGraph: {
    title: 'Whole-House Repiping Cost in Redding, CA | Topline Plumbing',
    description:
      'Whole-house repiping costs $4,000–$15,000 in Redding. Full PEX vs copper comparison from a licensed Redding plumber since 1998.',
    url: 'https://toplineplumbingco.com/cost/repiping',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Whole-House Repiping Cost in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

const repipingCostFAQs = [
  {
    question: 'How much does whole-house repiping cost in Redding, CA?',
    answer:
      'Whole-house repiping in Redding typically costs $4,000–$15,000 depending on home size, pipe material, and access. A 1,200 sq ft single-story home with PEX and a crawlspace runs $4,000–$7,000. A 2,500+ sq ft two-story home with copper and slab foundation can reach $12,000–$15,000. Topline quotes every repipe upfront after a free on-site evaluation.',
  },
  {
    question: 'Is PEX or copper better for repiping?',
    answer:
      "For most Redding homes, PEX is the better choice. It's 30–40% cheaper to install, flexible enough to route through existing walls with minimal drywall cutting, resistant to freeze damage, and has a 50+ year expected lifespan. Copper is the premium option — it's rigid, time-tested, fire-resistant, and commonly specified for high-end remodels. Both are code-compliant and both are excellent if installed properly.",
  },
  {
    question: 'How long does a whole-house repipe take?',
    answer:
      "A typical single-story Redding home can be fully repiped in 2–3 days. Two-story homes and slab-foundation homes take 3–5 days. Topline works in sections so your home never loses water for more than a few hours at a time — you'll have working plumbing at the end of each day.",
  },
  {
    question: "Do I need to repipe if I have galvanized or polybutylene pipes?",
    answer:
      "Polybutylene — yes, absolutely. Polybutylene (common in homes built 1978–1995) fails unpredictably and is uninsurable. Galvanized steel — it depends on the age. Most galvanized pipes start to corrode and restrict flow at 40–50 years, and by 60 years they're usually done. If you have brown or discolored water, low water pressure, or frequent pinhole leaks, you need to repipe.",
  },
  {
    question: 'Will my walls be destroyed during repiping?',
    answer:
      "No. A good plumber repipes with minimal drywall cutting — typically 4–6 small access holes per room, not ripping open entire walls. Topline uses PEX routing through existing cavities wherever possible to minimize damage. You'll usually need to patch and paint the access holes afterward ($500–$1,500 for a typical repipe), but the walls themselves stay intact.",
  },
  {
    question: 'Does homeowners insurance cover repiping?',
    answer:
      "Usually no — repiping is considered preventive maintenance and is not covered by standard homeowners insurance. However, if a pipe failure causes water damage, the cleanup may be partially covered. Some insurance companies will mandate repiping if you file multiple leak claims — in that case they won't pay for the repipe itself, but they may reduce your premiums once it's done.",
  },
];

export default function RepipingCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Cost Guide', url: 'https://toplineplumbingco.com/cost' },
          {
            name: 'Repiping Cost',
            url: 'https://toplineplumbingco.com/cost/repiping',
          },
        ]}
      />
      <FAQSchema faqs={repipingCostFAQs} />
      <CostPageTemplate
        h1="Whole-House Repiping Cost in Redding, CA"
        priceAnswer="$4,000–$15,000 installed"
        priceAnswerDetail="Depends on home size, pipe material (PEX vs copper), and access. 1,200 sq ft single-story with PEX runs $4,000–$7,000. 2,500+ sq ft two-story with copper reaches $12,000–$15,000. Includes labor, materials, permits, and inspection."
        intro={[
          "If you're seeing rusty water, pinhole leaks, low water pressure, or you know you have old galvanized or polybutylene pipes, repiping isn't optional — it's a matter of when, not if. And the longer you wait, the more likely a single leak turns into a major water damage event.",
          "For the Redding and Northern California market, whole-house repiping typically costs $4,000–$15,000 depending on the size of your home, whether you choose PEX or copper, and how accessible your existing pipes are. Below is the full breakdown of what to expect, what drives the price, and how to decide between PEX and copper.",
        ]}
        costRanges={{
          title: 'Typical Repiping Cost Ranges',
          description:
            "Full installed prices for Redding-area homes. Includes labor, materials, permits, and inspection — but not drywall patching or paint (typically $500–$1,500 additional from a drywall/paint contractor).",
          rows: [
            {
              scenario: '1,000–1,500 sq ft, PEX, crawlspace',
              range: '$4,000–$6,500',
              notes: 'Easiest access, fastest repipe',
            },
            {
              scenario: '1,500–2,000 sq ft, PEX, crawlspace',
              range: '$6,000–$9,000',
              notes: 'Most common Redding-area repipe',
            },
            {
              scenario: '2,000–2,500 sq ft, PEX, two-story',
              range: '$8,000–$12,000',
              notes: 'Additional runs for upper floor',
            },
            {
              scenario: '1,200–1,800 sq ft, copper, crawlspace',
              range: '$7,000–$11,000',
              notes: 'Premium material, longer install',
            },
            {
              scenario: '2,000+ sq ft, copper, two-story',
              range: '$10,000–$15,000+',
              notes: 'Premium option for high-end homes',
            },
            {
              scenario: 'Slab-foundation homes (any size)',
              range: '+$1,500–$3,500',
              notes: 'Pipes re-routed through attic or walls',
            },
            {
              scenario: 'Polybutylene removal',
              range: '+$500–$1,500',
              notes: 'Required disposal and line clearing',
            },
          ],
        }}
        factors={{
          title: 'What Affects Whole-House Repiping Cost',
          description:
            "Here's what drives repipe quotes from the low end of the range to the high end.",
          items: [
            {
              factor: 'Home size and bathroom count',
              impact:
                "More square footage and more bathrooms mean more runs — which directly drives both labor and material cost. A 2-bath home and a 4-bath home of the same square footage can differ by $2,000–$4,000.",
            },
            {
              factor: 'Pipe material (PEX vs copper)',
              impact:
                'PEX is 30–40% cheaper than copper for both material and labor. Copper is the premium option for high-end remodels and buyers who specifically want metal piping.',
            },
            {
              factor: 'Foundation type',
              impact:
                'Crawlspace homes are the cheapest and fastest — we route new pipes through the crawlspace with minimal drywall cutting. Slab-foundation homes are the most expensive because we cannot route through the slab; we run pipes through attics, walls, or soffits.',
            },
            {
              factor: 'Number of stories',
              impact:
                'Single-story homes are easier than two-story. Two-story homes require vertical runs to reach upper-floor fixtures, which adds labor and material.',
            },
            {
              factor: 'Existing pipe material being removed',
              impact:
                'Galvanized removal is standard. Polybutylene has to be fully removed and disposed of as a known-defective product — adds $500–$1,500. Lead pipe removal (pre-1950 homes) is specialized and more expensive.',
            },
            {
              factor: 'Drywall and cosmetic restoration',
              impact:
                "Topline handles the plumbing — we make clean, minimal access cuts. Patching, taping, mudding, and painting is typically $500–$1,500 from a separate drywall/paint contractor. We can recommend a trusted local contractor for this.",
            },
          ],
        }}
        whatsIncluded={{
          title: "What's Included in Topline's Repiping Quote",
          items: [
            'Complete removal of old galvanized, polybutylene, or copper lines (as needed)',
            'New PEX or copper supply lines run throughout the home',
            'New shut-off valves at every fixture (sinks, toilets, water heater, washing machine)',
            'New main shut-off valve at the water meter entry',
            'All necessary fittings, transitions, and connections',
            'Minimal-access drywall cutting (typically 4–6 holes per room, not full wall removal)',
            'Full pressure testing of the new system before closing up access points',
            'Water quality testing after repipe completion',
            'City of Redding or applicable jurisdiction permit pulled and inspection scheduled',
            'Full California code compliance (new valves, supports, and transitions)',
            'Written workmanship warranty — 5 years on labor',
            '25-year material warranty on PEX, 50-year on copper (from manufacturer)',
          ],
        }}
        repairVsReplace={{
          title: 'PEX vs Copper: Which Is Right for Your Home?',
          repair: {
            label: 'PEX',
            cost: '$4,000–$12,000',
            when: [
              "You want to save 30–40% on total cost",
              'Your home is a standard residential build (not historic)',
              'You value freeze resistance (important for Redding winters)',
              'You want minimal drywall impact (flexible tubing routes easier)',
              '50-year expected lifespan is enough for your needs',
              "You're selling the home within 15–20 years (cost matters more)",
            ],
          },
          replace: {
            label: 'Copper',
            cost: '$7,000–$15,000+',
            when: [
              'High-end remodel or new custom build',
              'You prefer time-tested, rigid metal piping',
              'Required by specific HOA or historic district rules',
              'You plan to stay in the home 30+ years',
              "Insurance company specifies copper",
              'You want the longest warranty period',
            ],
          },
        }}
        redFlags={{
          title: 'Red Flags in Repiping Quotes',
          description:
            "Repiping is a major project — $4,000–$15,000 is a lot of money. Here's what to watch for.",
          items: [
            "No free on-site evaluation. A real repipe quote requires the plumber to physically inspect your home — attic access, crawlspace, existing pipe runs, fixture count. Phone quotes are always too low or too high.",
            "Refusing to explain the PEX vs copper decision. A good plumber walks you through the tradeoffs of each and lets you choose — not pushes you into whatever they have in stock.",
            'Skipping the permit. California requires a permit for full repipes. Unpermitted repipes void your homeowners insurance and create problems at resale.',
            'No written warranty. Workmanship should be warrantied 5+ years. If the plumber won\'t put their work in writing, don\'t hire them.',
            'Quoting drywall repair in the same line item as plumbing. Good plumbers make clean access cuts and recommend a drywall contractor separately. If the quote bundles drywall, you\'re usually paying extra for it.',
            "Demolition-heavy approach ('we'll need to open every wall'). A skilled repiper opens 4–6 small holes per room, not entire walls.",
          ],
        }}
        localContext={{
          title: 'Repiping in Redding',
          paragraphs: [
            "Redding has thousands of homes built in the 1960s–1980s with galvanized or polybutylene pipes that are approaching or past their end of life. If your home is in this age range and you're seeing any warning signs (rust-colored water, falling pressure, repeated pinhole leaks), the question isn't whether you need to repipe — it's when.",
            "Topline has completed hundreds of full repipes across Shasta County since 1998. We've seen every type of home construction in the area — older Shasta Lake ranch homes, mid-century Enterprise neighborhoods, newer Palo Cedro builds, and the Bella Vista rural acreage homes. We know which brands and methods work in this climate and which don't.",
            "Every repipe includes pulling the permit, scheduling the inspection, and handling all code requirements. You never deal with the City of Redding or County directly. And every single repipe is quoted upfront, in writing, before any work begins.",
          ],
        }}
        faqs={repipingCostFAQs}
        primaryServiceHref="/services/repiping-services"
        primaryServiceLabel="See Repiping Services"
        relatedCostLinks={[
          { href: '/cost/water-heater-replacement', label: 'Water Heater Cost' },
          { href: '/cost/tankless-installation', label: 'Tankless Cost' },
          { href: '/cost/drain-cleaning', label: 'Drain Cleaning Cost' },
        ]}
      />
    </>
  );
}
