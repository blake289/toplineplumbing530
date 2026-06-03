import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/drain-cleaning-anderson#service',
  name: 'Drain Cleaning in Anderson, CA',
  serviceType: 'Drain Cleaning',
  description:
    'Professional drain cleaning in Anderson, CA using septic-safe mechanical power augering — no caustic chemicals. Clears kitchen, bathroom, and main sewer line clogs, with sewer camera inspection for recurring blockages. Built for Anderson homes on septic and well systems. Upfront pricing. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/drain-cleaning-anderson',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Anderson', sameAs: 'https://en.wikipedia.org/wiki/Anderson,_California' },
    { '@type': 'AdministrativeArea', name: 'Shasta County, CA' },
  ],
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Drain Cleaning Services in Anderson, CA',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Septic-Safe Mechanical Power Augering',
          serviceType: 'Drain Augering',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kitchen & Bathroom Drain Cleaning',
          serviceType: 'Drain Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Main Sewer Line Cleaning',
          serviceType: 'Sewer Line Cleaning',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer Camera Inspection',
          serviceType: 'Sewer Camera Inspection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Septic Transition & Cleanout Service',
          serviceType: 'Septic Line Service',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/drain-cleaning-anderson#webpage',
  url: 'https://toplineplumbingco.com/drain-cleaning-anderson',
  name: 'Drain Cleaning in Anderson, CA — Septic-Safe Power Augering',
  description:
    'Drain cleaning in Anderson, CA using septic-safe mechanical augering — no caustic chemicals. Kitchen, bathroom, and main line clogs cleared by a licensed local plumber since 1998.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/drain-cleaning-anderson#service' },
};

export const metadata: Metadata = {
  title: 'Drain Cleaning Anderson, CA | Topline Plumbing',
  description:
    'Drain cleaning in Anderson, CA. Septic-safe power augering for kitchen, bath, and main line clogs. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/drain-cleaning-anderson',
  },
  openGraph: {
    title: 'Drain Cleaning Anderson, CA | Topline Plumbing',
    description:
      'Drain cleaning in Anderson, CA. Septic-safe power augering for kitchen, bath, and main line clogs. Licensed since 1998. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/drain-cleaning-anderson',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Drain Cleaning in Anderson, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const drainFAQs = [
  {
    question: 'How much does drain cleaning cost in Anderson, CA?',
    answer:
      'Drain cleaning cost varies by job — a single fixture clog is different from a main line clog or one requiring camera inspection. We always quote the price upfront before starting work, with no surprise charges. Call (530) 704-6989 for a free estimate with any service.',
  },
  {
    question: 'Do you use chemicals to clear drains on septic systems in Anderson?',
    answer:
      "No. Many Anderson homes — especially toward Cottonwood Creek and rural areas — are on septic systems, and harsh chemical drain cleaners can damage the bacterial balance a septic tank relies on. We use septic-safe mechanical power augering that physically removes the clog instead of dumping caustics into your system. It's safer for your septic and it actually clears the line.",
  },
  {
    question: 'How fast can a plumber get to Anderson for a drain clog?',
    answer:
      "Anderson is 10 miles south of our Redding base on I-5, so we typically arrive within 30–60 minutes during business hours (Mon–Fri 8a–4:30p). We offer same-day drain cleaning in Anderson and the surrounding area when a truck is open. Call (530) 704-6989 to check availability.",
  },
  {
    question: 'What causes slow or clogged drains in Anderson homes?',
    answer:
      'The most common causes are grease and food buildup in kitchen drains, hair and soap scum in bathroom drains, and root intrusion or debris in main sewer lines. On septic-connected Anderson properties, the transition between the house line and the septic tank is a frequent trouble spot. Chemical cleaners only mask the problem — mechanical augering removes the clog completely.',
  },
  {
    question: 'How do I know if I have a main sewer line clog?',
    answer:
      'Signs of a main sewer line clog include multiple drains backing up at once, gurgling sounds from toilets when you run the sink, water backing up in the shower when you flush the toilet, or sewage smells from floor drains. On a septic system, these can also signal a full tank or a failing transition line. Call (530) 704-6989 right away — this is a plumbing emergency.',
  },
  {
    question: 'Can you run a camera inspection on Anderson sewer and septic lines?',
    answer:
      'Yes. We offer sewer camera inspections to locate the exact position and cause of a blockage — root intrusion, pipe damage, grease buildup, or a problem at the septic transition. This is especially useful for recurring clogs and for older homes near downtown Anderson with aging lines. Call (530) 704-6989 to schedule.',
  },
  {
    question: 'Do you clean drains in Anderson manufactured and mobile homes?',
    answer:
      "Yes. Anderson has a number of manufactured-home communities, and those homes have their own plumbing standards — supply lines, P-traps, and smaller-diameter drain runs. We bring the right equipment and approach for manufactured-home drains so we clear the clog without damaging the line.",
  },
  {
    question: 'Is Topline Plumbing a licensed drain cleaning company?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We are family owned and operated, with a 5.0 perfect rating on Google.',
  },
];

export default function DrainCleaningAndersonPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Drain Cleaning Anderson',
            url: 'https://toplineplumbingco.com/drain-cleaning-anderson',
          },
        ]}
      />
      <FAQSchema faqs={drainFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center lg:text-left">
          <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
            Septic-Safe Drain Cleaning · Anderson, CA · Licensed Since 1998
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
            Drain Cleaning in Anderson, CA
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-3xl lg:mx-0 mx-auto">
            Topline Plumbing is a licensed (CSLB #596557) drain cleaning service serving Anderson,
            CA. We clear clogs with septic-safe mechanical augering — no caustic chemicals — and
            offer same-day service during business hours (Mon–Fri 8a–4:30p) with upfront pricing.
            Call (530) 704-6989.
          </p>

          <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
            <span className="text-primary-light">On septic? →</span> we auger mechanically, never
            with chemicals that harm your tank
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
            <a
              href="tel:5307046989"
              className="h-14 px-8 bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="whitespace-nowrap">Call: (530) 704-6989</span>
            </a>
            <Link
              href="/contact"
              className="h-14 px-8 bg-white text-navy-900 font-semibold rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              Get a Free Estimate
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Typical Anderson arrival 30–60 minutes during
            business hours
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">3,000+</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Jobs Since 1998</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">5.0★</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Perfect Google Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">CSLB</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">License #596557</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">Family</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Owned & Operated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Septic-safe lead section */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Septic-Safe Mechanical Augering — No Caustics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Many Anderson homes are on septic systems. Pouring chemical drain cleaner into a
              septic-fed line kills the bacteria your tank depends on and rarely clears the clog.
              We use mechanical power augers that physically remove the blockage — safe for your
              septic, and they actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Power Auger Cleaning
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Mechanical augering for stubborn clogs</li>
                <li>• Sinks, toilets, and shower drains</li>
                <li>• Main sewer line cleaning</li>
                <li>• Septic-safe — no caustic chemicals</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Sewer & Septic Camera Inspection
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Camera inspection to locate blockages</li>
                <li>• Identify root intrusion or pipe damage</li>
                <li>• Check the house-to-septic transition</li>
                <li>• Detailed video report</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Same-Day Service</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fast response for urgent clogs</li>
                <li>• Same-day scheduling during business hours</li>
                <li>• Upfront pricing before we start</li>
                <li>• Clog removal you can count on</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Anderson Homes Call Topline for Drain Cleaning
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Anderson sits just south of Redding on I-5 — a 10-minute drive from our base. The town
              has a wide mix: older single-family homes near downtown, newer subdivisions off
              Riverside Ave, manufactured-home communities, and rural parcels stretching out toward
              Happy Valley and Cottonwood. Plumbing here ranges from city sewer to private septic,
              and that distinction matters a lot when it comes to clearing a drain.
            </p>
            <p>
              Properties closer to Cottonwood Creek and rural Anderson are often on septic. On those
              homes, the worst thing you can do is reach for a bottle of chemical drain cleaner — it
              damages the bacterial balance the septic tank relies on, and it usually doesn&rsquo;t
              clear the clog anyway. We use septic-safe mechanical augering that physically removes
              the blockage, and when a clog keeps coming back we run a camera to check the house-line
              and the transition into the septic tank. Sewer line and septic transition issues are
              one of the most common calls we get out here.
            </p>
            <p>
              In the newer Riverside Ave subdivisions and older in-town homes — the ones drawing
              municipal water from the City of Anderson Water Department and tied into city sewer —
              the usual suspects are grease and food in the kitchen line, hair and soap scum in the
              bathroom, and root intrusion in aging main lines. And in Anderson&rsquo;s manufactured
              and mobile homes, the smaller-diameter drain runs need the right equipment so we clear
              the clog without damaging the pipe. Whatever your Anderson address — city sewer or
              septic, stick-built or manufactured — we clear it the right way and quote it upfront.
            </p>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Anderson Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and family-run since 1998 — not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Septic-Safe Methods',
                body: 'We auger mechanically and never dump caustic chemicals into septic-fed lines. Safer for your tank, and it actually removes the clog instead of masking it.',
              },
              {
                title: 'We Remove the Clog, Not Push It',
                body: "Chemical cleaners and many quick fixes just shove the clog further down the line. Our power augers physically remove it so it doesn't come right back.",
              },
              {
                title: 'Camera Diagnosis Available',
                body: 'For recurring clogs we run a sewer camera to find the exact cause — root intrusion, a pipe break, or a problem at the septic transition — instead of guessing.',
              },
              {
                title: 'Fast From Redding',
                body: 'Anderson is 10 miles south on I-5, so we typically arrive within 30–60 minutes during business hours. Same-day drain cleaning when a truck is open.',
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "You see the price before we start. No surprise charges and no after-hours markup — we work standard business hours.",
              },
              {
                title: '5.0 Rating, 3,000+ Jobs',
                body: 'A 5.0 perfect rating on Google and more than 3,000 jobs since 1998. Licensed, bonded, and insured — CSLB #596557.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services / internal links */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
            Related Topline Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              ['/services/drain-cleaning', 'Drain Cleaning (All Services)'],
              ['/areas/anderson', 'Anderson Service Area'],
              ['/emergency-plumber-anderson', 'Emergency Plumber in Anderson'],
              ['/drain-cleaning-redding', 'Drain Cleaning in Redding'],
              ['/drain-cleaning-shasta-lake', 'Drain Cleaning in Shasta Lake'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="bg-white border border-gray-200 rounded-lg px-5 py-4 text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-500 fill-current"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-2">
            Trusted by Anderson-Area Homeowners
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            5.0 perfect rating on Google · Every review counts
          </p>
          <a
            href="https://g.page/r/CTUWBxm42-YEEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Read all Google reviews →
          </a>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Drain &amp; Sewer Service Across Shasta County &amp; Beyond
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day service in city limits during business hours. Rural and septic-connected
            properties welcome.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {[
              ['redding', 'Redding'],
              ['anderson', 'Anderson'],
              ['shasta-lake', 'Shasta Lake'],
              ['palo-cedro', 'Palo Cedro'],
              ['bella-vista', 'Bella Vista'],
              ['red-bluff', 'Red Bluff'],
            ].map(([slug, label]) => (
              <Link
                key={slug}
                href={`/areas/${slug}`}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={drainFAQs}
        title="Drain Cleaning FAQ — Anderson, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Clogged Drain in Anderson?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Septic-safe, licensed, and family-run since 1998. Call now for same-day drain cleaning
            during business hours.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:5307046989"
              className="h-14 px-8 bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="whitespace-nowrap">Call: (530) 704-6989</span>
            </a>
            <Link
              href="/contact"
              className="h-14 px-8 bg-white text-navy-900 font-semibold rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              Get a Quote
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Licensed, bonded, insured
          </p>
        </div>
      </section>
    </>
  );
}
