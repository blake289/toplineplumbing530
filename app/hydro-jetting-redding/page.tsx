import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/hydro-jetting-redding#service',
  name: 'Hydro Jetting in Redding, CA',
  serviceType: 'Hydro Jetting',
  description:
    'Hydro jetting in Redding, CA — high-pressure water jetting that scours grease, mineral scale, sludge, and tree roots out of clogged drain and sewer lines. Camera-inspected before and after, with honest repair-vs-jet guidance and upfront pricing. Licensed plumber CSLB #596557, serving Redding since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/hydro-jetting-redding',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Redding', sameAs: 'https://en.wikipedia.org/wiki/Redding,_California' },
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
    name: 'Hydro Jetting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Main Sewer Line Hydro Jetting',
          serviceType: 'Sewer Line Hydro Jetting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Grease Line Jetting (Restaurants & Commercial)',
          serviceType: 'Grease Line Hydro Jetting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tree Root Cutting & Removal',
          serviceType: 'Root Removal Hydro Jetting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer Camera Inspection',
          serviceType: 'Drain Camera Inspection',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/hydro-jetting-redding#webpage',
  url: 'https://toplineplumbingco.com/hydro-jetting-redding',
  name: 'Hydro Jetting Redding, CA | Topline Plumbing',
  description:
    "Hydro jetting in Redding, CA — high-pressure drain and sewer cleaning for grease, scale, roots, and recurring clogs. Camera-inspected, upfront pricing. Call (530) 704-6989.",
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/hydro-jetting-redding#service' },
};

export const metadata: Metadata = {
  title: 'Hydro Jetting Redding, CA | Topline Plumbing',
  description:
    "Hydro jetting in Redding, CA — high-pressure drain and sewer cleaning for grease, scale, roots, and recurring clogs. Camera-inspected, upfront pricing. Call (530) 704-6989.",
  alternates: {
    canonical: 'https://toplineplumbingco.com/hydro-jetting-redding',
  },
  openGraph: {
    title: 'Hydro Jetting Redding, CA | Topline Plumbing',
    description:
      "Redding's hydro jetting specialists. High-pressure drain and sewer cleaning for grease, mineral scale, and tree roots — camera-inspected first, with upfront pricing from a licensed local plumber since 1998.",
    url: 'https://toplineplumbingco.com/hydro-jetting-redding',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Hydro Jetting in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const hydroJettingFAQs = [
  {
    question: 'What is hydro jetting, and how is it different from snaking?',
    answer:
      "Hydro jetting uses a high-pressure water jet fed through a specialized hose to scour the full inside diameter of a pipe — cutting through grease, mineral scale, sludge, and tree roots and flushing them out. A snake (cable auger) punches a hole through a single clog, which clears the immediate backup but leaves the buildup on the pipe walls behind. Snaking is the right, cheaper call for a simple isolated clog; hydro jetting is what you want for recurring clogs, grease lines, or roots, because it cleans the pipe rather than just poking through it.",
  },
  {
    question: 'How do I know if I need hydro jetting in Redding?',
    answer:
      "The usual signs are repeat backups in the same line, multiple fixtures draining slowly at once, gurgling drains, or a main line that re-clogs within months of a snaking. Grease-heavy kitchen lines and older sewer laterals with root intrusion are the classic candidates. We camera-inspect the line first so we can see exactly what's in there — then recommend jetting only if it's the right fix.",
  },
  {
    question: 'Is hydro jetting safe for older pipes?',
    answer:
      "It depends on the pipe, which is exactly why we run a camera first. On sound pipe — ABS, PVC, healthy cast iron, or clay — hydro jetting is safe and thorough. If the camera shows cracked, collapsed, or badly corroded pipe, we will not jet it; we'll show you the footage and talk through the right repair instead. Plenty of older Redding homes have aging laterals, so this camera-first step matters. We won't risk your pipe to make a sale.",
  },
  {
    question: 'How much does hydro jetting cost in Redding, CA?',
    answer:
      "Every job is quoted upfront before any work starts — no surprise charges. Cost depends on the line (a kitchen branch versus a full main sewer), how bad the buildup is, and whether a camera inspection is included. We diagnose first, then give you a firm price. Call (530) 704-6989 for a free estimate with any service.",
  },
  {
    question: 'Can hydro jetting clear tree roots?',
    answer:
      "Yes. A hydro jetter with a root-cutting head shears roots back to the pipe wall and flushes the debris out, which is far more thorough than a cable that just bores a channel through the root mass. We confirm the result with the camera. If the camera shows the roots are getting in through a broken joint or cracked lateral, jetting buys you time, but we'll also walk you through a permanent sewer line repair so it doesn't keep coming back.",
  },
  {
    question: 'Do you hydro jet commercial and restaurant grease lines in Redding?',
    answer:
      "Yes. Grease-laden restaurant and commercial kitchen lines are one of the best uses for hydro jetting — it strips the hardened grease off the pipe walls that a snake can't touch. We schedule commercial jetting around your hours where we can. See our commercial plumbing page for more on how we work with Redding businesses.",
  },
  {
    question: 'Are you available 24/7 for drain emergencies in Redding?',
    answer:
      "We're not a 24/7 shop — we run real local business hours, Mon–Fri 8a–4:30p, with same-day response during those hours when the schedule allows. After hours, text (530) 704-6989 and we respond first thing the next business day. For an active sewage backup that's flooding the home, shut off water use to the affected drains and call us first thing — and call 911 for any genuine safety hazard.",
  },
];

export default function HydroJettingReddingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Hydro Jetting Redding',
            url: 'https://toplineplumbingco.com/hydro-jetting-redding',
          },
        ]}
      />
      <FAQSchema faqs={hydroJettingFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Redding&apos;s Hydro Jetting Specialists · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Hydro Jetting in Redding, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) hydro jetting service based right here in
              Redding, CA. We use a high-pressure water jet to scour grease, mineral scale, sludge,
              and tree roots out of drain and sewer lines — and we camera-inspect first, so we only
              jet when it&apos;s the right fix. Same-day service during business hours (Mon–Fri
              8a–4:30p) with upfront pricing. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Camera-inspected first →</span> we won&apos;t jet a
              pipe that can&apos;t take it
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
              Free estimate with any service · Camera inspection before we jet · Mon–Fri 8:00a–4:30p ·
              CSLB #596557 · Based in Redding
            </p>
          </div>
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
              <div className="text-sm md:text-base text-gray-600 mt-1">Owned &amp; Operated</div>
            </div>
          </div>
        </div>
      </section>

      {/* What hydro jetting clears */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              What Hydro Jetting Clears in Redding
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A high-pressure jet cleans the full diameter of the pipe — not just a hole through the
              clog. That&apos;s why it&apos;s the fix for the problems that keep coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Grease &amp; Sludge
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Hardened kitchen-line grease</li>
                <li>• Soap and food sludge buildup</li>
                <li>• Restaurant &amp; commercial grease lines</li>
                <li>• Recurring slow kitchen drains</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Mineral Scale</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Mineral scale inside older lines</li>
                <li>• Narrowed pipe diameter</li>
                <li>• Repeat clogs after snaking</li>
                <li>• Sluggish whole-house drainage</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">Roots &amp; Debris</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Tree-root intrusion in sewer laterals</li>
                <li>• Mud, silt, and main-line debris</li>
                <li>• Camera-confirmed before &amp; after</li>
                <li>• Honest read on whether the line needs repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Jet vs Snake */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Hydro Jet or Just Snake It? We&apos;ll Tell You Straight
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jetting isn&apos;t always the answer — sometimes a snake is the smarter, cheaper call.
              Here&apos;s the honest framework we use before quoting you anything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border-2 border-primary p-8 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                Hydro jetting makes sense when…
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>The same line keeps clogging after snaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>It&apos;s a greasy kitchen or commercial line</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Roots or heavy scale are narrowing the pipe</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>The camera shows sound pipe that can take the pressure</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                A snake is the better call when…
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">—</span>
                  <span>It&apos;s a simple, one-time isolated clog</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">—</span>
                  <span>A single fixture (one sink or tub) is backed up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">—</span>
                  <span>The pipe is too old or fragile to jet safely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold flex-shrink-0">—</span>
                  <span>The cheaper fix solves it for good</span>
                </li>
              </ul>
              <Link
                href="/drain-cleaning-redding"
                className="inline-block mt-5 text-primary font-semibold hover:underline"
              >
                See our Redding drain cleaning page →
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Not sure which you need? Call{' '}
            <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
              (530) 704-6989
            </a>{' '}
            — we camera-inspect first, then give you an honest recommendation before quoting.
          </p>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
              Why Redding Lines End Up Needing a Jet
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Two things drive most of the recurring drain calls we run in Redding: mineral scale and
                mature trees. Mineral deposits leave scale on the inside of older drain and sewer
                lines — heaviest in homes on harder well water.
                Over years that narrows the pipe, catches grease and debris, and turns a line that
                used to flow fine into one that clogs every few months no matter how many times it
                gets snaked.
              </p>
              <p>
                The other culprit is roots. Plenty of established Redding neighborhoods, from the
                older core near downtown out through Enterprise, sit over clay or aging sewer laterals
                that thirsty tree roots love to find. A cable auger bores a channel through the root
                mass and the line flows for a while, but the roots are still there. A hydro jetter
                with a cutting head shears them back to the pipe wall and flushes them out — a far
                more complete clean.
              </p>
              <p>
                The honest part matters here: an old, cracked, or root-invaded lateral can be too
                fragile to jet, which is why we run a sewer camera first on every job. If the line is
                sound, we jet it and confirm the result on camera. If the camera shows the pipe itself
                is failing, we won&apos;t jet it to make a quick sale — we&apos;ll show you the footage
                and walk you through a proper{' '}
                <Link href="/sewer-line-redding" className="text-primary font-semibold hover:underline">
                  sewer line repair
                </Link>{' '}
                instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Redding Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and straight with you about what your line actually needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Camera-First, Always',
                body: "We inspect the line on camera before we jet, so we know exactly what's in there and whether the pipe can take the pressure. No guessing, no blind jetting.",
              },
              {
                title: 'Based Right Here in Redding',
                body: "Redding is our home turf, so it's the fastest territory we cover. Call before noon during business hours and we can usually get to you the same day.",
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "We diagnose the line, then show you the price before we start. No teardown-then-surprise-bill, no meter running while you wait.",
              },
              {
                title: "We Won't Jet a Bad Pipe",
                body: "If the camera shows cracked or collapsed pipe, we stop and show you the footage. We won't risk your line to ring up a jetting charge.",
              },
              {
                title: 'Roots, Grease & Scale',
                body: 'Cutting heads for roots, the pressure to strip hardened grease, and the experience to know what years of mineral scale do to older lines.',
              },
              {
                title: 'Licensed Local Family Business',
                body: 'CSLB #596557, serving Redding since 1998. Real local business hours, Mon–Fri 8a–4:30p — no after-hours surcharge games.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

      {/* Social proof */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
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
              Trusted by Redding-Area Homeowners
            </h2>
            <p className="text-lg text-gray-600">5.0 perfect rating on Google</p>
          </div>

          <div className="text-center">
            <a
              href="https://g.page/r/CTUWBxm42-YEEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Read all Google reviews →
            </a>
          </div>
        </div>
      </section>

      {/* Related services in Redding */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
            More Plumbing Help in Redding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/drain-cleaning-redding"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Drain Cleaning in Redding
              </h3>
              <p className="text-gray-600 text-sm">
                Snaking, augering, and camera inspection for everyday clogs in Redding.
              </p>
            </Link>
            <Link
              href="/sewer-line-redding"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Sewer Line Repair in Redding
              </h3>
              <p className="text-gray-600 text-sm">
                When the camera shows the line itself is failing — repair and replacement.
              </p>
            </Link>
            <Link
              href="/services/drain-cleaning"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Drain Cleaning Service
              </h3>
              <p className="text-gray-600 text-sm">
                Full details on our drain and sewer cleaning, augering, and camera service.
              </p>
            </Link>
            <Link
              href="/commercial-plumbing-redding"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Commercial Plumbing in Redding
              </h3>
              <p className="text-gray-600 text-sm">
                Grease-line jetting and drain service for Redding restaurants and businesses.
              </p>
            </Link>
            <Link
              href="/water-heater-repair-redding"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Water Heater Repair in Redding
              </h3>
              <p className="text-gray-600 text-sm">
                The other thing sediment wears out early — gas and electric repair.
              </p>
            </Link>
            <Link
              href="/areas/redding"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                All Plumbing in Redding
              </h3>
              <p className="text-gray-600 text-sm">
                Everything we do across Redding and Shasta County.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Hydro Jetting Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day service in city limits during business hours when the schedule allows. Rural and
            foothill calls typically scheduled within the day.
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
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-center text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={hydroJettingFAQs}
        title="Hydro Jetting FAQ — Redding, CA"
        background="gray"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Line Keeps Clogging in Redding? Let&apos;s Jet It Right.
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and camera-first. Call now for same-day availability during business
            hours — we&apos;re based right here in Redding.
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
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Licensed, bonded, insured · Based in Redding
          </p>
        </div>
      </section>
    </>
  );
}
