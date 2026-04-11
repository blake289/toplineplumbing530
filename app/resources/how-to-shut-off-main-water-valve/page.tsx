import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

export const metadata: Metadata = {
  title: 'How to Shut Off the Main Water Valve in Your Home | Topline Plumbing',
  description:
    'Step-by-step guide to finding and shutting off your main water valve in a plumbing emergency. The single most important plumbing skill every Redding homeowner should know.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/resources/how-to-shut-off-main-water-valve',
  },
  openGraph: {
    title: 'How to Shut Off the Main Water Valve in Your Home',
    description:
      'Step-by-step emergency guide from a licensed Redding plumber. Find your main shut-off valve before you need it.',
    url: 'https://toplineplumbingco.com/resources/how-to-shut-off-main-water-valve',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'How to Shut Off the Main Water Valve',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Shut Off the Main Water Valve in Your Home',
  description:
    'Step-by-step instructions for locating and shutting off your home\'s main water supply valve in a plumbing emergency.',
  totalTime: 'PT3M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  tool: [
    { '@type': 'HowToTool', name: 'Water meter key (optional)' },
    { '@type': 'HowToTool', name: 'Adjustable wrench (for stuck valves)' },
    { '@type': 'HowToTool', name: 'Flashlight' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Locate your main shut-off valve',
      text: 'The main shut-off is usually located where the water line enters your home — in the garage, near an exterior wall, in a utility closet, in the crawlspace, or outside near the hose bib. In Redding homes, it is most commonly in the garage on the wall nearest the street.',
      url: 'https://toplineplumbingco.com/resources/how-to-shut-off-main-water-valve#locate',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Identify the valve type',
      text: 'You will see one of two types: a ball valve (a lever handle) or a gate valve (a round wheel handle). Ball valves are more common in newer homes and turn 90 degrees. Gate valves turn multiple rotations and require more force.',
      url: 'https://toplineplumbingco.com/resources/how-to-shut-off-main-water-valve#identify',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Turn the valve to the off position',
      text: 'For a ball valve, rotate the lever 90 degrees (one quarter turn) so it is perpendicular to the pipe. For a gate valve, turn the round handle clockwise until it stops — this may take 10–20 full rotations.',
      url: 'https://toplineplumbingco.com/resources/how-to-shut-off-main-water-valve#shut-off',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Verify the water is off',
      text: 'Open a faucet inside the house. Water should slow to a trickle within 5–10 seconds and then stop completely. If water continues flowing, the valve may not be fully closed or you may have shut off the wrong valve.',
      url: 'https://toplineplumbingco.com/resources/how-to-shut-off-main-water-valve#verify',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'If the main valve is stuck or not working',
      text: 'Locate your water meter at the street — usually in a concrete box marked "WATER" on the sidewalk or curb. Use a meter key or a long adjustable wrench to turn the meter shut-off valve. Then call a plumber to replace your broken main shut-off.',
      url: 'https://toplineplumbingco.com/resources/how-to-shut-off-main-water-valve#meter',
    },
  ],
};

const shutOffFAQs = [
  {
    question: 'Where is the main water shut-off valve in most Redding homes?',
    answer:
      'In most Redding homes, the main shut-off valve is located in the garage on the wall nearest the street, or outside the home near the front hose bib. Older homes may have it in the crawlspace or a basement utility area. Newer homes (post-2000) commonly have it in a utility closet or near the water heater.',
  },
  {
    question: 'What does a main water shut-off valve look like?',
    answer:
      "You'll see one of two types: a ball valve (a lever handle — looks like a flat metal paddle you turn 90 degrees) or a gate valve (a round wheel handle that looks like a faucet). Both are attached to the pipe where the water enters your home. Ball valves are more reliable and common in newer homes.",
  },
  {
    question: 'How do I shut off water if the main valve is broken?',
    answer:
      'If the main shut-off in your house is broken or stuck, locate the water meter at the street — usually in a concrete or metal box on the sidewalk or curb strip. There\'s a shut-off valve at the meter that requires a meter key (a long T-handle tool) or a long crescent wrench to operate. Shut that off, then call a plumber to replace your main shut-off valve.',
  },
  {
    question: 'Should I exercise my main water shut-off valve periodically?',
    answer:
      'Yes. Older gate-style valves can seize up if never used. Every 6 months, turn the valve fully off and then back on to keep it working. If it\'s stiff or leaks when you operate it, have a plumber replace it before you have a real emergency and find out it doesn\'t work.',
  },
  {
    question: 'How long can I leave my main water shut off?',
    answer:
      "You can leave the water off indefinitely with no damage to plumbing or fixtures. If you're going on vacation or leaving the house vacant, shutting off the main is recommended — it prevents any leak from becoming a flood while you're away.",
  },
];

export default function HowToShutOffMainWaterValvePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Resources', url: 'https://toplineplumbingco.com/resources' },
          {
            name: 'How to Shut Off Main Water Valve',
            url: 'https://toplineplumbingco.com/resources/how-to-shut-off-main-water-valve',
          },
        ]}
      />
      <FAQSchema faqs={shutOffFAQs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-sm uppercase tracking-wider text-primary font-bold mb-3">
            Emergency Guide
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-white">
            How to Shut Off the Main Water Valve in Your Home
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            The single most important plumbing skill every homeowner should
            know. A working main shut-off is the difference between a
            $200 repair and a $20,000 water damage claim.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 prose prose-lg">
          <div className="bg-red-50 border-l-4 border-primary p-6 rounded-r-xl mb-10">
            <p className="text-lg font-bold text-navy-900 mb-2">
              Emergency right now?
            </p>
            <p className="text-base text-gray-800 mb-4">
              If water is actively flooding your home, locate your main valve
              and turn it off before you do anything else. Then call Topline
              Plumbing at{' '}
              <a href="tel:5307046989" className="text-primary font-bold underline">
                (530) 704-6989
              </a>{' '}
              for 24/7 emergency response in the Redding area.
            </p>
          </div>

          <h2 id="why-it-matters" className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Why every homeowner needs to know this
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A burst pipe can release 30–50 gallons of water per minute. In 10
            minutes, that's 300–500 gallons dumped into your home — enough to
            destroy drywall, hardwood floors, electrical, and insulation. The
            only thing that stops it is your main water shut-off valve.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Most Redding homeowners have no idea where their main shut-off is,
            whether it works, or how to operate it. When the emergency
            happens, they waste 5–10 precious minutes searching — and by the
            time they call a plumber, the damage is already done.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            This guide takes 5 minutes to read and could save you thousands.
            Walk through it once right now, find your valve, and confirm it
            works. You'll never regret it.
          </p>

          <h2 id="locate" className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Step 1: Locate your main shut-off valve
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Your main shut-off is located where the water supply line enters
            your home. In the Redding area, here's where to look in order of
            likelihood:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold flex-shrink-0">1.</span>
              <span>
                <strong>The garage, on the wall nearest the street.</strong>{' '}
                This is the most common location in Redding homes built since
                1970. Look for a copper or PEX pipe coming out of the wall
                with a valve on it.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold flex-shrink-0">2.</span>
              <span>
                <strong>Outside near a hose bib.</strong> Often on the front
                or side of the house. Look for a valve inside a small box or
                exposed along the exterior wall.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold flex-shrink-0">3.</span>
              <span>
                <strong>In a utility closet or near the water heater.</strong>{' '}
                Common in newer homes without garages.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold flex-shrink-0">4.</span>
              <span>
                <strong>In the crawlspace.</strong> Common in older Shasta
                County homes and rural Palo Cedro / Bella Vista properties.
                Bring a flashlight.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold flex-shrink-0">5.</span>
              <span>
                <strong>At the water meter on the street.</strong> If there's
                no valve inside the house at all, you'll need to use the
                meter shut-off.
              </span>
            </li>
          </ul>

          <h2 id="identify" className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Step 2: Identify the valve type
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            You'll have one of two types:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-5 border border-gray-200">
            <h3 className="text-xl font-bold text-navy-900 mb-2">Ball Valve</h3>
            <p className="text-gray-700 leading-relaxed">
              Looks like a flat metal paddle or lever. Turns 90 degrees (one
              quarter turn). When the lever is parallel to the pipe, water is
              ON. When it's perpendicular to the pipe, water is OFF. These
              are more reliable and most common in homes built since 2000.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
            <h3 className="text-xl font-bold text-navy-900 mb-2">Gate Valve</h3>
            <p className="text-gray-700 leading-relaxed">
              Looks like a round wheel, similar to an outdoor faucet handle.
              Requires multiple full rotations to close. Turn clockwise to
              close, counter-clockwise to open. Older gate valves can seize
              up if never used — if yours is stuck, don't force it. Call a
              plumber.
            </p>
          </div>

          <h2 id="shut-off" className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Step 3: Turn the valve to OFF
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            <strong>Ball valve:</strong> Rotate the lever 90 degrees until
            it's perpendicular to the pipe. That's it — the water is off.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            <strong>Gate valve:</strong> Turn the wheel clockwise. Keep
            turning until it stops — this may take 10–20 full rotations
            depending on the valve. Don't over-tighten at the end — just
            turn until firm resistance.
          </p>

          <h2 id="verify" className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Step 4: Verify the water is off
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Don't trust that the valve worked without verifying. Open any
            faucet inside the house. The water should slow to a trickle
            within 5–10 seconds, then stop completely.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If water keeps flowing, either the valve isn't fully closed
            (rotate further) or you turned off the wrong valve. Some homes
            have multiple shut-off points — one for the street-side supply
            and one for an irrigation line. Make sure you've closed the one
            feeding the house.
          </p>

          <h2 id="meter" className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Backup plan: The water meter shut-off
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            If your main shut-off inside the house is broken, stuck, or
            doesn't exist, you can shut off water at the meter. In Redding,
            the water meter is typically in a concrete or metal box on the
            sidewalk or curb strip near the front of the property, marked
            "WATER."
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Inside the box is a valve operated by a meter key (a long
            T-handle tool available at any hardware store) or a long
            adjustable wrench. The valve is typically a rectangular shape —
            turn it 90 degrees to shut off.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            <strong>Important:</strong> If your main shut-off inside the
            house is broken, replace it as soon as possible. Every Redding
            home should have a working main shut-off inside the building,
            not just at the street.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Do this right now (it takes 2 minutes)
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Don't wait for an emergency to find out your shut-off doesn't
            work. Take 2 minutes right now:
          </p>
          <ol className="space-y-2 text-lg text-gray-700 mb-8 list-decimal list-inside">
            <li>Find your main shut-off valve.</li>
            <li>Turn it off and verify with a faucet.</li>
            <li>Turn it back on.</li>
            <li>
              Tell everyone in your household where it is and how to operate
              it.
            </li>
          </ol>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            If the valve is stuck, leaks when operated, or you can't find
            one at all, call Topline Plumbing at{' '}
            <a href="tel:5307046989" className="text-primary font-bold">
              (530) 704-6989
            </a>
            . Replacing a main shut-off is a simple, affordable job
            ($150–$350 depending on access) — and it's the best $200 of
            insurance you can buy for your home.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-accent-green mt-10">
            <p className="text-sm uppercase tracking-wider text-accent-green font-bold mb-2">
              Related Guides
            </p>
            <ul className="space-y-1 text-lg text-navy-900">
              <li>
                <Link href="/resources/burst-pipe-emergency-guide" className="text-primary underline">
                  What to do when a pipe bursts: Step-by-step emergency guide
                </Link>
              </li>
              <li>
                <Link href="/resources/water-heater-failure-warning-signs" className="text-primary underline">
                  7 warning signs your water heater is about to fail
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="text-primary underline">
                  24/7 emergency plumbing in Redding
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <FAQSection faqs={shutOffFAQs} background="gray" />

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Broken Shut-Off Valve? Don't Wait.
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Topline Plumbing replaces main shut-off valves same-day in the
            Redding area. Upfront pricing, no after-hours premium.
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
