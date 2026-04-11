import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Plumbing Cost Guide — Redding, CA | Topline Plumbing',
  description:
    'Honest plumbing cost estimates for Redding and Northern California. Water heater replacement, drain cleaning, emergency service, repiping, tankless installation — typical price ranges with no hidden fees.',
  alternates: { canonical: 'https://toplineplumbingco.com/cost' },
  openGraph: {
    title: 'Plumbing Cost Guide — Redding, CA | Topline Plumbing',
    description:
      'Honest plumbing cost estimates for Redding and Northern California. Typical price ranges with no hidden fees — call (530) 704-6989 for an exact quote.',
    url: 'https://toplineplumbingco.com/cost',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Cost Guide for Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const costGuides = [
  {
    href: '/cost/water-heater-replacement',
    title: 'Water Heater Replacement Cost',
    priceRange: '$1,200–$3,500',
    blurb:
      'Full cost breakdown for replacing a 40–50 gallon water heater in Redding, including labor, permits, and disposal.',
  },
  {
    href: '/cost/tankless-installation',
    title: 'Tankless Water Heater Installation Cost',
    priceRange: '$3,000–$6,500',
    blurb:
      'What Redding homeowners pay for tankless water heater installs — upfront costs vs. long-term energy savings.',
  },
  {
    href: '/cost/drain-cleaning',
    title: 'Drain Cleaning Cost',
    priceRange: '$130–$500+',
    blurb:
      'Pricing for clogged sinks, tub drains, toilets, and main sewer lines. When to use a simple auger vs. hydrojetting.',
  },
  {
    href: '/cost/emergency-plumbing',
    title: 'Emergency Plumbing Cost',
    priceRange: '$150–$800+',
    blurb:
      "What 24/7 emergency plumbing actually costs in Redding — and why Topline doesn't charge after-hours premiums.",
  },
  {
    href: '/cost/repiping',
    title: 'Whole-Home Repiping Cost',
    priceRange: '$4,000–$15,000',
    blurb:
      'PEX vs copper repiping costs for Redding homes. What impacts the final price and how to know if you need it.',
  },
];

export default function CostHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Plumbing Cost Guide', url: 'https://toplineplumbingco.com/cost' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight text-white">
            Plumbing Cost Guide for Redding, CA
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
            Most plumbers won't publish prices. We will. These are the real,
            typical ranges for the Redding and Northern California market —
            not national averages inflated by metro-area pricing.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            Every Topline Plumbing job is quoted upfront before we start work.
            No surprise fees. No after-hours premiums. Call{' '}
            <a href="tel:5307046989" className="text-accent-green font-bold underline">
              (530) 704-6989
            </a>{' '}
            for an exact estimate on your job.
          </p>
        </div>
      </section>

      {/* Why transparency */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why We Publish Prices
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            When you're dealing with a plumbing problem, the last thing you
            want is to make 10 phone calls trying to figure out what something
            should cost. You want a real answer — and you want to know
            you're not being overcharged.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Most plumbing companies refuse to publish any pricing because it
            gives them room to quote high after they show up. That's not how
            we operate. Joe Torculas has been plumbing in Redding since 1998,
            and Topline has built its reputation on upfront, honest pricing —
            the same quote whether you call at 3 PM on a Wednesday or 3 AM on
            Christmas morning.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Below is what Redding homeowners typically pay for the most common
            plumbing services. Your specific job may fall outside these ranges
            depending on accessibility, code requirements, and complexity —
            call for an exact quote any time.
          </p>
        </div>
      </section>

      {/* Cost guides grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-12 text-center">
            Cost Guides by Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costGuides.map((guide, i) => (
              <Link
                key={i}
                href={guide.href}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 p-6 md:p-8 transition-all hover:-translate-y-1 block group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-navy-900 group-hover:text-primary transition-colors pr-4">
                    {guide.title}
                  </h3>
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <p className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-3">
                  {guide.priceRange}
                </p>
                <p className="text-gray-600 leading-relaxed">{guide.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8">
            How Topline Plumbing Prices Jobs
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-navy-900">Upfront pricing, always.</strong>{' '}
              Before any work begins, you get a written quote. That's the price
              you pay — not an hour later once we've opened up the wall.
            </p>
            <p>
              <strong className="text-navy-900">No after-hours premium.</strong>{' '}
              Some emergency plumbers charge double on nights and weekends.
              Topline charges the same rate whenever you call. A burst pipe at
              2 AM costs the same as a scheduled drain cleaning at 2 PM.
            </p>
            <p>
              <strong className="text-navy-900">Free diagnostics on most calls.</strong>{' '}
              We'll come out, look at the problem, and give you a full quote
              before you commit to anything. No pressure to say yes.
            </p>
            <p>
              <strong className="text-navy-900">Licensed, bonded, and insured.</strong>{' '}
              Every job is done by a licensed California plumber with full
              liability coverage. You're protected.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready for an Exact Quote?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Call now for same-day service, upfront pricing, and a real plumber
            on the line — not a scheduler.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5307046989"
              className="h-14 px-10 bg-primary text-white font-btn font-bold rounded-xl inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg text-lg"
            >
              Call: (530) 704-6989
            </a>
            <Link
              href="/contact"
              className="h-14 px-10 bg-white text-navy-900 font-btn font-bold rounded-xl inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
