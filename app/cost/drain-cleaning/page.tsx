import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import CostPageTemplate from '@/components/templates/CostPageTemplate';

export const metadata: Metadata = {
  title: 'Drain Cleaning Cost in Redding, CA | Topline Plumbing',
  description:
    'Drain cleaning in Redding starts at $130 for standard clogs. Main sewer line cleaning $250–$600. Full cost breakdown with no surprise fees. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/cost/drain-cleaning' },
  openGraph: {
    title: 'Drain Cleaning Cost in Redding, CA | Topline Plumbing',
    description:
      'Drain cleaning starts at $130 in Redding. Full cost breakdown from a licensed Redding plumber since 1998.',
    url: 'https://toplineplumbingco.com/cost/drain-cleaning',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Drain Cleaning Cost in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

const drainCostFAQs = [
  {
    question: 'How much does drain cleaning cost in Redding, CA?',
    answer:
      'Standard drain cleaning in Redding starts at $130 for sinks, tub drains, and toilets using a mechanical auger. Main sewer line cleaning typically runs $250–$600 depending on access and severity. Hydrojetting for heavy grease or root-intruded lines runs $400–$800. Topline quotes every job upfront before work begins — no hourly trap-and-charge pricing.',
  },
  {
    question: "Why shouldn't I use liquid drain cleaner first?",
    answer:
      "Over-the-counter drain cleaners like Drano and Liquid-Plumr use sodium hydroxide or sulfuric acid to dissolve clogs. The problem: they rarely clear the full blockage, they damage older pipes (especially galvanized and PVC), and if they don't work, the plumber who comes out next has to deal with caustic chemicals sloshing around. Most professional plumbers charge extra if chemicals are in the line. Skip them — mechanical augering is cheaper in the long run.",
  },
  {
    question: "What's the difference between drain cleaning and hydrojetting?",
    answer:
      'Drain cleaning (mechanical augering) uses a rotating cable with a cutting head to break through the clog. Hydrojetting uses high-pressure water (up to 4,000 PSI) to scour the entire inside of the pipe clean — removing grease buildup, root intrusion, and years of accumulated debris. Augering is cheaper and handles most clogs. Hydrojetting is the right call for recurring clogs, heavy grease, or commercial grease traps.',
  },
  {
    question: 'Do you offer free drain cleaning estimates in Redding?',
    answer:
      "Yes. Call (530) 704-6989 and we'll give you a price range over the phone based on the situation. If we need to come out to diagnose (usually for main sewer line issues), we'll give you a free upfront quote before any work starts.",
  },
  {
    question: 'How do I know if I need a camera inspection?',
    answer:
      "If you've had the same drain clog more than twice in 6 months, or your main sewer line is backing up without a clear cause, a camera inspection is worth the $200–$400. It shows exactly what's happening inside the pipe — roots, grease buildup, collapsed section, or misaligned joints — so the fix is targeted instead of guessed.",
  },
  {
    question: 'Does Topline charge extra for after-hours drain cleaning?',
    answer:
      "No. Topline Plumbing charges the same rate for drain cleaning whether you call at 2 PM on a Tuesday or 2 AM on a Sunday. We're one of the few plumbers in Redding with no after-hours premium — a plumbing emergency shouldn't cost more just because it happened at night.",
  },
];

export default function DrainCleaningCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Cost Guide', url: 'https://toplineplumbingco.com/cost' },
          {
            name: 'Drain Cleaning Cost',
            url: 'https://toplineplumbingco.com/cost/drain-cleaning',
          },
        ]}
      />
      <FAQSchema faqs={drainCostFAQs} />
      <CostPageTemplate
        h1="Drain Cleaning Cost in Redding, CA"
        priceAnswer="$130 starting price"
        priceAnswerDetail="Standard sink, tub, and toilet drain cleaning with mechanical augering. Main sewer line clearing $250–$600. Hydrojetting for heavy clogs $400–$800. Camera inspection $200–$400 when needed."
        intro={[
          "A slow or completely clogged drain is one of the most common plumbing problems — and also one where pricing varies wildly from company to company. Some plumbers quote $99 and tack on hundreds in hidden fees. Others won't quote at all until they've seen the job. We quote every drain cleaning upfront before starting.",
          "For the Redding and Northern California market, standard drain cleaning runs $130–$300 for common fixture clogs (sinks, tubs, toilets). Main sewer line cleaning is $250–$600. Hydrojetting for heavy grease, recurring clogs, or root intrusion is $400–$800. Below is the full breakdown.",
        ]}
        costRanges={{
          title: 'Typical Drain Cleaning Cost Ranges',
          description:
            'Fully quoted prices for Redding-area homes. Every job is priced upfront — no hourly trap-and-charge billing.',
          rows: [
            {
              scenario: 'Kitchen sink clog',
              range: '$130–$250',
              notes: 'Standard cable auger through trap or cleanout',
            },
            {
              scenario: 'Bathroom sink or shower drain',
              range: '$130–$220',
              notes: 'Typically hair + soap scum clogs',
            },
            {
              scenario: 'Toilet clog (not wax ring)',
              range: '$150–$280',
              notes: 'Closet auger for mainline toilet blockages',
            },
            {
              scenario: 'Main sewer line clearing',
              range: '$250–$600',
              notes: 'Depends on access and severity',
            },
            {
              scenario: 'Hydrojetting (fixture)',
              range: '$300–$500',
              notes: 'For recurring clogs or heavy grease',
            },
            {
              scenario: 'Hydrojetting (main sewer line)',
              range: '$500–$800',
              notes: 'Full scour of main line with high-pressure water',
            },
            {
              scenario: 'Sewer camera inspection',
              range: '$200–$400',
              notes: 'Video + written report, recommended for recurring issues',
            },
            {
              scenario: 'Emergency / after-hours',
              range: 'Same as above',
              notes: 'No premium — same rate 24/7',
            },
          ],
        }}
        factors={{
          title: 'What Affects Drain Cleaning Cost',
          description:
            "Why one drain cleaning job is $130 and the next is $500 — here's what drives the difference.",
          items: [
            {
              factor: 'Location of the clog',
              impact:
                'A clog right under the sink is fastest and cheapest. A clog 15 feet down the main drain line is slower and requires more cable. A clog under the slab foundation or out at the city sewer connection is the most expensive.',
            },
            {
              factor: 'Severity and type of clog',
              impact:
                'Hair and soap scum cables easily. Grease requires more work and often hydrojetting. Tree root intrusion is the most expensive — usually requires hydrojetting, camera inspection, and sometimes spot repair.',
            },
            {
              factor: 'Access to a cleanout',
              impact:
                "Homes with a properly installed cleanout (outdoor access point to the main line) are much cheaper to clean — we don't have to pull a toilet or open a trap. Homes without cleanouts add $75–$150 to the job.",
            },
            {
              factor: 'Pipe material and age',
              impact:
                "Older cast iron and galvanized drains catch debris more easily and are harder to fully clear. PVC is cleanest and cheapest. Lead and clay drains (common in pre-1960 Redding homes) need extra care to avoid damage.",
            },
            {
              factor: 'Whether hydrojetting is needed',
              impact:
                "If the clog is grease, heavy buildup, or roots, augering alone won't fully resolve it — the clog comes back in weeks. Hydrojetting costs more upfront but fixes the problem for real.",
            },
            {
              factor: 'Need for camera inspection',
              impact:
                'For recurring clogs (3+ times in 6 months) or a collapsed line, a camera inspection locates the exact problem so the fix is targeted. Adds $200–$400 but saves hundreds of dollars in repeat visits.',
            },
          ],
        }}
        whatsIncluded={{
          title: "What's Included in Topline's Drain Cleaning Quote",
          items: [
            "Mechanical augering (snaking) with professional-grade equipment — not a home-store snake",
            'Clog removal guaranteed for the quoted price — no charging extra if it takes longer than expected',
            'Protection of your floors and fixtures while we work',
            'Testing the drain after clearing to confirm flow is fully restored',
            'Recommendations on how to prevent the clog from returning',
            'Free same-day quote before any work begins',
            'No after-hours or weekend premium',
            '30-day workmanship guarantee — if the clog comes back in 30 days, we come back at no charge',
          ],
        }}
        redFlags={{
          title: 'Red Flags in Drain Cleaning Quotes',
          description:
            "Drain cleaning is where a lot of plumbers nickel-and-dime customers. Watch for these.",
          items: [
            "'$99 drain cleaning' ads — then a $350 service call fee, $200 trip charge, or $150 equipment fee tacked on. Real prices are quoted in full up front.",
            "Charging by the foot of cable used. You should pay for the outcome (clog cleared), not for how long the plumber wrestles with it.",
            "Refusing to give a quote until after they've 'assessed' the job. That's a sign they're planning to quote high once they're committed.",
            "Pushing hydrojetting for simple fixture clogs. Hydrojetting is great for heavy grease and roots — but a kitchen sink clog from food scraps rarely needs $500 jetting.",
            "Not running the drain for 1–2 minutes after clearing. If they don't confirm full flow is back, you don't know if the clog is actually gone.",
            'No 30-day guarantee. If a drain clog comes back within weeks, the plumber didn\'t actually clear it — they just poked a hole through the blockage.',
          ],
        }}
        localContext={{
          title: 'Drain Cleaning in Redding',
          paragraphs: [
            "Redding's older homes (anything built before 1970) often have cast iron drain lines that are prone to buildup — the rough interior catches grease, soap, and hair more easily than modern PVC. If you have one of these homes and you're getting frequent clogs, camera inspection is worth the money to confirm whether the line needs full jetting or partial replacement.",
            "Tree root intrusion is a big issue in neighborhoods with mature trees — Enterprise, Sunset Terrace, and parts of west Redding especially. Roots enter through joint cracks in older clay or cast iron sewer lines, grow, and eventually block the line. Hydrojetting with a root-cutting head is the right call for this, usually every 18–24 months for persistent problem homes.",
            'Topline has handled drain cleaning in Redding since 1998 — thousands of jobs. We know which neighborhoods have which problems, which old clay lines are fragile, and how to clear a clog without making the situation worse. Fast, fair pricing, and no upsells you don\'t need.',
          ],
        }}
        faqs={drainCostFAQs}
        primaryServiceHref="/services/drain-cleaning"
        primaryServiceLabel="See Drain Cleaning Services"
        relatedCostLinks={[
          { href: '/cost/emergency-plumbing', label: 'Emergency Plumbing Cost' },
          { href: '/cost/water-heater-replacement', label: 'Water Heater Cost' },
          { href: '/cost/repiping', label: 'Repiping Cost' },
        ]}
      />
    </>
  );
}
