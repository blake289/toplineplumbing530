import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

export const metadata: Metadata = {
  title: 'Burst Pipe Emergency Guide — What to Do Right Now | Topline Plumbing',
  description:
    'Step-by-step emergency guide for a burst pipe in Redding, CA. What to do in the first 10 minutes to limit damage — and what to tell the plumber when you call.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/resources/burst-pipe-emergency-guide',
  },
  openGraph: {
    title: 'Burst Pipe Emergency Guide — What to Do Right Now',
    description:
      'Burst pipe emergency? Step-by-step guide from a licensed Redding plumber. What to do in the first 10 minutes.',
    url: 'https://toplineplumbingco.com/resources/burst-pipe-emergency-guide',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Burst Pipe Emergency Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

const burstPipeHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'What to Do When a Pipe Bursts in Your Home',
  description:
    'Step-by-step emergency response for a burst pipe. The first 10 minutes determine whether you have a manageable repair or a major water damage claim.',
  totalTime: 'PT10M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Shut off the main water valve',
      text: 'Go directly to your main water shut-off valve and turn it off. Every second the water keeps flowing is more damage. This is the single most important step.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Turn off the water heater',
      text: 'If you have a gas water heater, turn the control knob to the pilot position. For electric, flip the breaker. This prevents the water heater from running dry and burning out.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Open faucets to drain remaining water',
      text: 'Open all faucets — both hot and cold — to drain any water remaining in the supply lines. This reduces the amount that can leak out of the burst.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Call a plumber',
      text: 'Call an emergency plumber immediately. In Redding during business hours (Mon–Fri 8:00a–4:30p), call Topline Plumbing at (530) 704-6989 for same-day response. Outside those hours, text the same number and we\'ll respond first thing the next business day.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Protect valuables and start water removal',
      text: 'Move furniture, rugs, electronics, and valuables out of the affected area. Start soaking up water with towels, mops, or a wet/dry vacuum if you have one. Take photos for insurance.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Document everything for insurance',
      text: 'Photograph all damage, note the time of the burst, and save the plumber invoice. Most standard homeowners insurance covers sudden burst pipe water damage — but you need documentation.',
    },
  ],
};

const burstPipeFAQs = [
  {
    question: 'What should I do first if a pipe bursts in my home?',
    answer:
      'Shut off the main water valve immediately — before you do anything else. Every second the water keeps flowing is more damage. After shutting off the main, turn off the water heater (to prevent it running dry), open faucets to drain remaining water from the lines, and call a plumber. In Redding, call Topline Plumbing at (530) 704-6989 during business hours (Mon–Fri 8:00a–4:30p).',
  },
  {
    question: 'Does homeowners insurance cover burst pipes?',
    answer:
      "Most standard homeowners insurance covers sudden and accidental burst pipe water damage — but not gradual leaks or maintenance issues. Your policy likely covers the water damage cleanup, drywall, flooring, and belongings. It usually does NOT cover the plumbing repair itself. Document everything with photos and keep all invoices.",
  },
  {
    question: 'How much does burst pipe repair cost in Redding?',
    answer:
      'Cost depends on access and scope. A simple burst in an accessible location (under a sink or in a garage) is far less than an in-wall, slab, or crawlspace repair. Pipes that have burst from freezing sometimes require replacement of longer sections. Topline quotes every emergency in writing before any work begins. Call (530) 704-6989 for a free estimate.',
  },
  {
    question: 'How much water comes out of a burst pipe?',
    answer:
      'A typical 1/2-inch residential supply line at normal water pressure releases 30–50 gallons per minute when fully burst. In 10 minutes that\'s 300–500 gallons — enough to destroy carpets, hardwood, drywall, and most finishes on an entire floor. This is why shutting off the main water is the #1 emergency step.',
  },
  {
    question: 'Can I fix a burst pipe myself to save money?',
    answer:
      "For a small pinhole leak you might be able to apply an epoxy patch or pipe clamp as a short-term fix — but it's temporary and not a real repair. A full burst requires replacing the damaged section with proper fittings, which needs tools, experience, and code compliance. DIY burst pipe repair almost always leads to a bigger problem later. Call a licensed plumber.",
  },
  {
    question: "What causes pipes to burst in Redding?",
    answer:
      "In Redding, the most common causes are (1) aging galvanized or polybutylene pipes that have corroded and weakened, (2) freeze damage during winter cold snaps — especially in garages, exterior walls, and crawlspaces, (3) sudden water pressure spikes from failing pressure regulators, and (4) physical damage during remodels or DIY work.",
  },
];

export default function BurstPipeEmergencyGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Resources', url: 'https://toplineplumbingco.com/resources' },
          {
            name: 'Burst Pipe Emergency Guide',
            url: 'https://toplineplumbingco.com/resources/burst-pipe-emergency-guide',
          },
        ]}
      />
      <FAQSchema faqs={burstPipeFAQs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(burstPipeHowToSchema) }}
      />

      {/* Emergency banner */}
      <div className="bg-primary text-white py-4">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-base md:text-lg font-bold">
            Emergency during business hours? Call Topline Mon&ndash;Fri 8&ndash;4:30:{' '}
            <a href="tel:5307046989" className="underline">
              (530) 704-6989
            </a>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-20 pb-12 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-sm uppercase tracking-wider text-primary font-bold mb-3">
            Emergency Guide
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-white">
            Burst Pipe Emergency Guide: What to Do Right Now
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            A burst pipe dumps 30–50 gallons of water per minute into your
            home. The first 10 minutes determine whether you have a manageable
            repair or a major water damage claim. Here's exactly what to do.
          </p>
        </div>
      </section>

      {/* The critical 10 minutes */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-6">
            The first 10 minutes — in order
          </h2>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-primary rounded-r-xl p-6">
              <div className="flex items-start gap-4">
                <span className="bg-primary text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Shut off the main water valve. Now.
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every second matters. Go directly to your main water
                    shut-off valve and turn it off. If you don't know where
                    it is,{' '}
                    <Link
                      href="/resources/how-to-shut-off-main-water-valve"
                      className="text-primary underline font-bold"
                    >
                      read our shut-off guide here
                    </Link>{' '}
                    — but do it AFTER the crisis, not during.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-navy-900 rounded-r-xl p-6">
              <div className="flex items-start gap-4">
                <span className="bg-navy-900 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Turn off the water heater
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you have a gas water heater, turn the control knob to
                    the pilot position. For electric, flip the water heater
                    breaker. This prevents the tank from running dry and
                    burning out the heating element or burner — a costly
                    side-effect of many burst pipe incidents.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-navy-900 rounded-r-xl p-6">
              <div className="flex items-start gap-4">
                <span className="bg-navy-900 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Open faucets to drain remaining water
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Open all faucets in the house — both hot and cold — to
                    drain any water still in the supply lines. This reduces
                    how much can leak out of the burst, and makes the repair
                    site easier for the plumber to work on.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-navy-900 rounded-r-xl p-6">
              <div className="flex items-start gap-4">
                <span className="bg-navy-900 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  4
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Call a plumber
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In Redding during business hours (Mon&ndash;Fri 8:00a&ndash;4:30p),
                    call Topline Plumbing at{' '}
                    <a href="tel:5307046989" className="text-primary font-bold underline">
                      (530) 704-6989
                    </a>{' '}
                    for same-day response. Outside business hours, shut off your
                    main water valve, call 911 if there is a safety issue, and
                    text the same number &mdash; we will respond first thing the
                    next business day.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-navy-900 rounded-r-xl p-6">
              <div className="flex items-start gap-4">
                <span className="bg-navy-900 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  5
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Protect valuables and start water removal
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Move furniture, rugs, electronics, and important
                    documents out of the affected area — or elevate them on
                    blocks. Start soaking up water with towels, mops, or a
                    wet/dry vacuum if you have one. Every minute water sits
                    on flooring or drywall adds to the damage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border-l-4 border-navy-900 rounded-r-xl p-6">
              <div className="flex items-start gap-4">
                <span className="bg-navy-900 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  6
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Take photos for insurance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Document everything — the burst location, the water
                    spread, all damaged items, and any cleanup efforts. Note
                    the time the burst started and when you discovered it.
                    Homeowners insurance typically covers sudden burst pipe
                    damage, but you need documentation to file the claim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to tell the plumber */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-6">
            What to tell the plumber when you call
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A good emergency plumber can diagnose the situation and prepare
            the truck before they leave — if you give them the right info.
            Be ready to answer:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 mb-5">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>
                <strong>Your address</strong> — including nearest cross
                street if you're in a rural area
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>
                <strong>Where the burst is</strong> — under a sink, in a
                wall, garage, crawlspace, attic, etc.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>
                <strong>Pipe type if you know it</strong> — copper, PEX,
                galvanized, polybutylene
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>
                <strong>Whether you've shut off the main water</strong> —
                this is the first thing the plumber will ask
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>
                <strong>How long it's been leaking</strong> — 5 minutes vs.
                several hours changes the approach
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">•</span>
              <span>
                <strong>What's above and below the leak</strong> — other
                floors, ceilings, finished basements
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Don't do these */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-6">
            What NOT to do
          </h2>
          <div className="space-y-5 text-lg text-gray-700">
            <p>
              <strong className="text-primary">
                Don't try to patch it yourself while water is flowing.
              </strong>{' '}
              Tape, epoxy, and pipe clamps won't hold at full water
              pressure. Shut off the main first, then the plumber can do a
              real repair.
            </p>
            <p>
              <strong className="text-primary">
                Don't turn the water back on to "check if it's stopped."
              </strong>{' '}
              If it was burst, it's still burst. Leave the water off until
              the plumber has made the repair and tested it.
            </p>
            <p>
              <strong className="text-primary">
                Don't use a wet vacuum on water that's touched electrical
                outlets or appliances.
              </strong>{' '}
              Turn off electricity to affected areas at the breaker panel
              first. Water and live electrical are a lethal combination.
            </p>
            <p>
              <strong className="text-primary">
                Don't start ripping out drywall yourself.
              </strong>{' '}
              Let the plumber diagnose the leak location first — often the
              visible water isn't where the actual burst is. A restoration
              contractor should handle any demo work, with coordination
              from your insurance.
            </p>
            <p>
              <strong className="text-primary">
                Don't accept the first plumber quote without writing down
                what's included.
              </strong>{' '}
              Even in an emergency, you have the right to an itemized
              quote. Topline always quotes in writing before any work
              starts.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={burstPipeFAQs} background="gray" />

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Topline Plumbing &mdash; Redding&apos;s Go-To Plumber Since 1998
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Same-day emergency response during business hours (Mon&ndash;Fri
            8:00a&ndash;4:30p). Upfront pricing. Licensed, bonded &amp; insured
            (CSLB #596557).
          </p>
          <a
            href="tel:5307046989"
            className="inline-flex h-14 px-10 bg-primary text-white font-btn font-bold rounded-xl items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg text-lg"
          >
            Call: (530) 704-6989
          </a>
        </div>
      </section>
    </>
  );
}
