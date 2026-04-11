import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

export const metadata: Metadata = {
  title: '7 Warning Signs Your Water Heater Is About to Fail | Topline Plumbing',
  description:
    'How to tell if your water heater is about to fail — before you wake up to a flooded garage. Warning signs every Redding homeowner should know.',
  alternates: {
    canonical:
      'https://toplineplumbingco.com/resources/water-heater-failure-warning-signs',
  },
  openGraph: {
    title: '7 Warning Signs Your Water Heater Is About to Fail',
    description:
      'The warning signs most homeowners miss until a flooded garage costs them $5,000. From a licensed Redding plumber since 1998.',
    url: 'https://toplineplumbingco.com/resources/water-heater-failure-warning-signs',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Water Heater Failure Warning Signs',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

const waterHeaterSignsFAQs = [
  {
    question: 'How long do water heaters last in Redding, CA?',
    answer:
      "Most tank water heaters in Redding last 8–12 years. Redding's hard, mineral-heavy water shortens lifespan compared to softer-water regions — a tank that would last 15 years in the Bay Area might only last 10 years in Redding. Tankless units typically last 20+ years. Annual flushing can extend life by 2–3 years.",
  },
  {
    question: 'What are the first signs of water heater failure?',
    answer:
      'The earliest warning signs are: popping or rumbling sounds when the tank heats up (sediment buildup), hot water running out faster than it used to, rust-colored water from hot taps, and small moisture stains around the base of the tank. If you see any of these and your tank is 8+ years old, start planning replacement before it fails completely.',
  },
  {
    question: 'Is it better to replace a water heater before it fails?',
    answer:
      'Yes — almost always. A scheduled replacement is $1,200–$3,500 with no water damage. A failed water heater that floods your garage can easily cause $3,000–$15,000 in drywall, flooring, and cleanup damage on top of the replacement cost. The math is simple: if your tank is 10+ years old, replace it on your schedule, not the tank\'s.',
  },
  {
    question: 'Does rusty hot water mean my water heater is failing?',
    answer:
      "Usually yes. If cold water runs clear but hot water comes out rust-colored or has a metallic taste, the inside of your water heater tank is corroding. The anode rod that's supposed to protect the tank has worn out, and the tank itself is deteriorating. This is typically the last 6–12 months of the water heater's life — replace soon.",
  },
  {
    question: 'Why is my water heater making popping sounds?',
    answer:
      "Popping or rumbling sounds are caused by sediment buildup at the bottom of the tank. When the burner or heating element heats water trapped under the sediment, it creates steam bubbles that pop through the sediment — making the noise. It's a sign the tank is working much harder than it should and is approaching failure.",
  },
  {
    question: 'How much warning do I get before a water heater fails?',
    answer:
      "Usually 2–12 months of warning signs, but catastrophic failures can happen with no warning at all. The tank wall can develop a slow pinhole leak that goes unnoticed for weeks, then suddenly fail completely. This is why we recommend annual inspections on any water heater over 8 years old — early detection saves thousands.",
  },
];

export default function WaterHeaterFailureSignsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Resources', url: 'https://toplineplumbingco.com/resources' },
          {
            name: 'Water Heater Failure Warning Signs',
            url: 'https://toplineplumbingco.com/resources/water-heater-failure-warning-signs',
          },
        ]}
      />
      <FAQSchema faqs={waterHeaterSignsFAQs} />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-sm uppercase tracking-wider text-primary font-bold mb-3">
            Water Heater Guide
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-white">
            7 Warning Signs Your Water Heater Is About to Fail
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Most water heater failures come with 2–12 months of warning
            signs. Here's exactly what to watch for — and when the signs
            mean you should stop putting it off and replace the tank now.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Water heaters don't usually fail suddenly. They give you
            warning. The problem is that most homeowners don't know what
            the warning signs are — so they ignore the clues until a
            flooded garage, ruined drywall, and a $10,000 water damage
            claim force their hand.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            A scheduled water heater replacement runs $1,200–$3,500 in the
            Redding area. A catastrophic failure that floods your home
            averages $5,000–$15,000 in water damage on top of the
            replacement. This guide covers the 7 signs Topline plumbers
            check every single time we service a water heater — so you can
            check yours right now.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Sign #1: Your water heater is over 8 years old
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Age is the single biggest predictor of failure. Most residential
            tank water heaters last 8–12 years — and in Redding, where the
            water is hard and mineral-heavy, you're usually at the lower
            end of that range.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Check the manufacturer label on the side of your tank. The
            serial number starts with a letter (usually representing the
            month) followed by a two-digit year. A water heater with serial
            number "A18234567" was made in January 2018 — it's currently
            8 years old and at the top of its expected life.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Sign #2: Popping, rumbling, or crackling sounds
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            When you hear popping or rumbling from the water heater during
            its heating cycle, that's the sound of water boiling through
            hardened sediment at the bottom of the tank. Minerals from
            Redding's hard water settle out and form a crust that the
            burner has to heat through — dramatically overworking the tank.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            You can sometimes extend life by flushing the tank annually,
            but once popping sounds start, the sediment is already causing
            damage. Tanks in this state typically fail within 12–24 months.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Sign #3: Rust-colored or metallic-tasting hot water
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Fill a glass from the hot water tap. Is it clear? Or does it
            have a brown, orange, or yellowish tint? Does it taste
            metallic?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            If your cold water runs clear but your hot water is discolored,
            the inside of your water heater tank is corroding. The sacrificial
            anode rod that's supposed to protect the tank has worn out, and
            now the tank itself is rusting.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This is one of the latest warning signs. Once the tank is
            actively rusting from the inside, you usually have 6–12 months
            before catastrophic failure. Replace soon.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Sign #4: Hot water doesn't last as long as it used to
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Do you run out of hot water partway through a shower that
            used to be fine? Is your family complaining about cold water
            at the end of the morning routine?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            As sediment builds up at the bottom of the tank, it takes up
            space that used to hold hot water. A 40-gallon tank with 4
            inches of sediment only delivers 35 gallons of usable hot
            water. The reduced capacity gets worse over time until the
            tank is practically useless.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Sign #5: Visible moisture or staining around the base
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Look at the floor around the base of the water heater. Do you
            see water stains, rust, or calcium crystalization? Is there
            any moisture at all?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Tank leaks don't always start as big, obvious floods. They
            often start as slow weeps through pinholes in the tank wall
            that leave behind mineral deposits as they dry. By the time
            you notice stains, the leak has been active for weeks or
            months.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            <strong className="text-primary">
              Visible moisture around a tank water heater is a replace-now
              warning.
            </strong>{' '}
            A slow leak can become a catastrophic failure with no further
            warning. Don't wait.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Sign #6: Longer recovery time between showers
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            If you used to be able to take back-to-back showers with no
            issue and now the second person is getting a lukewarm shower
            20 minutes later, the heating element or burner is losing
            efficiency. This usually means sediment insulation preventing
            the burner from heating water quickly, a failing thermostat,
            or a worn heating element in electric models.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            Sign #7: Your energy bill is creeping up
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            A dying water heater has to work harder and longer to do the
            same job. If your gas or electric bill has climbed 10–25%
            without any other changes in your household, the water heater
            is a likely culprit. Modern high-efficiency tanks or tankless
            units can reduce your hot water energy bill by 20–35%.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mt-10 mb-4">
            What to do if you're seeing these signs
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            If you're seeing <strong>one</strong> of the signs and the tank
            is under 8 years old, it may be repairable. Single components
            like thermostats, heating elements, and thermocouples can be
            replaced for $150–$450.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            If you're seeing <strong>two or more</strong> of the signs, or
            your tank is 10+ years old regardless, start planning the
            replacement. A scheduled replacement costs $1,200–$3,500 in
            the Redding area (see our{' '}
            <Link href="/cost/water-heater-replacement" className="text-primary underline">
              water heater replacement cost guide
            </Link>
            ). A failure while you're on vacation is a five-figure water
            damage claim.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            If you're seeing <strong>visible moisture around the base</strong>,
            replace it now. This is the single clearest sign that
            catastrophic failure is imminent, and waiting even one more week
            is a gamble.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-accent-green mt-10">
            <p className="text-sm uppercase tracking-wider text-accent-green font-bold mb-2">
              Related Guides
            </p>
            <ul className="space-y-1 text-lg text-navy-900">
              <li>
                <Link href="/cost/water-heater-replacement" className="text-primary underline">
                  Water Heater Replacement Cost in Redding
                </Link>
              </li>
              <li>
                <Link href="/cost/tankless-installation" className="text-primary underline">
                  Tankless Water Heater Installation Cost
                </Link>
              </li>
              <li>
                <Link href="/services/water-heater-repair" className="text-primary underline">
                  Water Heater Repair & Replacement Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <FAQSection faqs={waterHeaterSignsFAQs} background="gray" />

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Free Water Heater Inspection
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Not sure if your water heater is failing? Topline offers free
            inspections for Redding-area homeowners. We'll give you an
            honest assessment — repair, replace, or keep running.
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
