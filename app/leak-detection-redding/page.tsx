import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/leak-detection-redding#service',
  name: 'Leak Detection in Redding, CA',
  serviceType: 'Leak Detection',
  description:
    'Leak detection in Redding, CA. Electronic and acoustic equipment to pinpoint hidden leaks in walls, under slabs, and in buried pipe without unnecessary demolition. Slab leak detection and repair, wall and ceiling leaks, irrigation and pool line testing. Upfront pricing. Licensed plumber CSLB #596557, serving Redding since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/leak-detection-redding',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Redding', sameAs: 'https://en.wikipedia.org/wiki/Redding,_California' },
    { '@type': 'City', name: 'Shasta Lake', sameAs: 'https://en.wikipedia.org/wiki/Shasta_Lake,_California' },
    { '@type': 'City', name: 'Anderson', sameAs: 'https://en.wikipedia.org/wiki/Anderson,_California' },
    { '@type': 'City', name: 'Palo Cedro' },
    { '@type': 'City', name: 'Bella Vista' },
    { '@type': 'City', name: 'Red Bluff', sameAs: 'https://en.wikipedia.org/wiki/Red_Bluff,_California' },
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
    name: 'Leak Detection Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electronic & Acoustic Leak Detection',
          serviceType: 'Leak Detection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Slab Leak Detection & Repair',
          serviceType: 'Slab Leak Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wall & Ceiling Leak Detection',
          serviceType: 'Leak Detection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Irrigation & Pool Line Testing',
          serviceType: 'Leak Detection',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/leak-detection-redding#webpage',
  url: 'https://toplineplumbingco.com/leak-detection-redding',
  name: 'Leak Detection Redding, CA | Slab Leaks | Free Estimate',
  description:
    'Leak detection in Redding, CA. Electronic and acoustic tools pinpoint slab and wall leaks without demolition. Licensed since 1998. Call (530) 704-6989.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/leak-detection-redding#service' },
};

export const metadata: Metadata = {
  title: 'Leak Detection Redding, CA | Slab Leaks | Free Estimate',
  description:
    'Leak detection in Redding, CA. Electronic and acoustic tools pinpoint slab and wall leaks without demolition. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/leak-detection-redding',
  },
  openGraph: {
    title: 'Leak Detection Redding, CA | Slab Leaks | Free Estimate',
    description:
      'Leak detection in Redding, CA. Electronic and acoustic equipment pinpoints hidden slab, wall, and yard leaks without unnecessary demolition. Licensed local plumber since 1998.',
    url: 'https://toplineplumbingco.com/leak-detection-redding',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing | Leak Detection in Redding, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const leakDetectionFAQs = [
  {
    question: 'How do I know if I have a hidden water leak in my Redding home?',
    answer:
      'Signs of a hidden leak include an unexplained spike in your water bill, the sound of running water when nothing is on, warm or wet spots on floors or walls, a mold or mildew smell, low water pressure, or cracks appearing in your foundation. The simplest check: if your water meter is spinning when every fixture is off, you likely have a leak. Call Topline Plumbing at (530) 704-6989.',
  },
  {
    question: 'How do you find a leak without tearing open my walls or floors?',
    answer:
      'We use electronic leak detection and acoustic listening equipment to pinpoint leaks without tearing open walls or jackhammering floors unnecessarily. Pressure testing confirms the leak location, and the methods work on copper, PVC, and PEX pipe. We locate the leak first, then make the smallest possible access point to fix it.',
  },
  {
    question: 'What is a slab leak, and why are they common in Redding?',
    answer:
      "A slab leak is a water or sewer pipe leak beneath your concrete foundation. Redding's extreme heat cycles cause the ground to expand and contract, which stresses pipes under the slab over time. We see them frequently in the 1960s and 1970s tract homes in Enterprise and East Redding that were built over concrete slabs. Left untreated, slab leaks can erode your foundation, cause mold growth, and lead to structural damage. Early detection is critical.",
  },
  {
    question: 'How much does leak detection cost in Redding, CA?',
    answer:
      'Leak detection cost varies by complexity and location, and every job is quoted upfront before any work begins, with no surprise charges. It is almost always worth it: a hidden slab or wall leak left undetected can cause thousands in water damage and mold remediation. Call (530) 704-6989 for a free estimate with any service.',
  },
  {
    question: 'Do you repair the leak after you find it?',
    answer:
      'Yes. We find it, we fix it. For slab leaks we offer tunneling or rerouting options, and for wall and ceiling leaks we identify the source (not just the water migration path) and repair through the smallest access point possible. If the leak is a symptom of end-of-life piping, we will tell you honestly whether a repipe is the smarter long-term fix.',
  },
  {
    question: 'Can you find leaks in irrigation lines or pool plumbing?',
    answer:
      "Yes. We detect leaks in irrigation systems, pool plumbing, and outdoor supply lines in addition to interior plumbing. If your water bill is high and you can't find the source, we can run a full property leak test to find it. Redding summers that push past 110°F also stress outdoor supply lines, so yard-side leaks are a common find.",
  },
  {
    question: 'What if water is actively flooding my home right now?',
    answer:
      'Shut off your main water valve first, then call (530) 704-6989. An active leak that is damaging your home is an emergency, and we respond same-day during business hours (Mon–Fri 8a–4:30p). We are not a 24/7 shop; after hours, text the same number and we respond first thing the next business day. See our emergency plumber page for step-by-step guidance.',
  },
  {
    question: 'Is Topline Plumbing licensed for leak detection and repair?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor, CSLB License #596557, serving the Redding area since 1998. The same local, family-owned crew that finds your leak is the one that repairs it.',
  },
];

export default function LeakDetectionReddingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Leak Detection Redding',
            url: 'https://toplineplumbingco.com/leak-detection-redding',
          },
        ]}
      />
      <FAQSchema faqs={leakDetectionFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Redding&apos;s Leak Detection Specialists · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Leak Detection in Redding, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              A hidden water leak can quietly destroy your walls, floors, and foundation for months
              before you notice visible damage. By then, the repair bill is 10x what it would have
              been. Topline Plumbing uses electronic and acoustic leak detection equipment to
              pinpoint leaks in walls, under slabs, and in buried pipes, without unnecessary
              demolition. We find it, we fix it. CSLB #596557.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Locate first, then repair →</span> smallest
              possible access point, no exploratory demolition
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
              Free estimate with any service · Upfront quote before any work starts · Mon–Fri
              8:00a–4:30p · CSLB #596557
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

      {/* Signs of a hidden leak */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Signs You Have a Hidden Leak
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hidden leaks rarely announce themselves. These are the warning signs Redding
              homeowners call us about, and any one of them is worth a check.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">On Your Bill</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• An unexplained spike in your water bill</li>
                <li>• The water meter spinning with every fixture off</li>
                <li>• Usage that climbs month over month with no change in habits</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                In Your Home
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Warm or wet spots on floors or walls</li>
                <li>• The sound of running water when nothing is on</li>
                <li>• A mold or mildew smell you can&apos;t trace</li>
                <li>• Low water pressure at fixtures</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                In the Structure
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Cracks appearing in your foundation</li>
                <li>• A warm spot on a concrete floor (classic slab leak sign)</li>
                <li>• Water damage that reappears after cleanup</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Seeing any of these? Call{' '}
            <a href="tel:5307046989" className="text-primary font-semibold hover:underline">
              (530) 704-6989
            </a>{' '}
            before the damage compounds. If water is actively flooding, shut off your main valve
            first, then see our{' '}
            <Link href="/emergency-plumber-redding" className="text-primary font-semibold hover:underline">
              emergency plumber in Redding
            </Link>{' '}
            page for what to do before we arrive.
          </p>
        </div>
      </section>

      {/* How we find leaks */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              How We Find Leaks Without Tearing Up Your Home
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The old way to find a leak was to open walls until you hit water. We locate first,
              then make the smallest possible access point to fix it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Electronic &amp; Acoustic Detection
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Acoustic listening equipment to pinpoint leaks</li>
                <li>• Pressure testing to confirm leak location</li>
                <li>• Non-invasive, no unnecessary wall openings</li>
                <li>• Works on copper, PVC, and PEX pipe</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border-2 border-primary p-6 shadow-md relative">
              <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Serious
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Slab Leak Detection &amp; Repair
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Detect leaks beneath concrete foundations</li>
                <li>• Thermal and acoustic methods</li>
                <li>• Tunneling or rerouting repair options</li>
                <li>• Catch it early, protect the foundation</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                Walls, Ceilings &amp; Outdoors
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Locate leaks hidden behind drywall</li>
                <li>• Identify the source vs. the water migration path</li>
                <li>• Irrigation, pool, and outdoor line testing</li>
                <li>• Full property leak test when the source is a mystery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Redding Homes Spring Hidden Leaks
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Redding&apos;s housing stock and climate work against pipes in a few specific ways.
              Many pre-1980 Redding homes still have galvanized steel supply pipes that are
              reaching end of life; corrosion, pinhole leaks, and pressure loss are the warning
              signs before a full burst. Those pinhole leaks are exactly the kind that hide behind
              drywall and under floors for months.
            </p>
            <p>
              Slab leaks are the other recurring Redding call. The 1960s and 1970s tract homes in
              Enterprise and East Redding were built over concrete slabs, and Redding&apos;s
              extreme heat cycles cause the ground to expand and contract, stressing the pipes
              under the slab over time. The first sign is often a warm spot on the floor or a
              jumped water bill. We locate and repair them, with tunneling or rerouting options
              depending on what protects your foundation best.
            </p>
            <p>
              Outdoors, summers that push past 110°F stress irrigation and outdoor supply lines,
              so a mystery water bill is sometimes a yard-side leak rather than anything in the
              house. That&apos;s why we can run a full property leak test: interior plumbing,
              irrigation, and pool lines, until the source is found. And when a leak turns out to
              be a symptom of end-of-life piping rather than a one-off failure, we&apos;ll tell you
              straight whether a repair or a{' '}
              <Link href="/services/repiping-services" className="text-primary font-semibold hover:underline">
                repipe
              </Link>{' '}
              is the smarter long-term spend. If the wet spot is coming from a drain or sewer line
              instead of a supply line, that&apos;s a different fix; see our{' '}
              <Link href="/sewer-line-redding" className="text-primary font-semibold hover:underline">
                sewer line repair in Redding
              </Link>{' '}
              page.
            </p>
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
              Local, licensed, and equipped to find the leak before the demolition, not after.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Locate First, Then Repair',
                body: 'We pinpoint the leak with electronic and acoustic equipment before anyone opens a wall, then make the smallest possible access point to fix it.',
              },
              {
                title: 'We Find It, We Fix It',
                body: 'One licensed crew handles detection and repair. No handing you a report and leaving you to find a second contractor for the actual fix.',
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: 'Every job is quoted upfront before any work begins. No surprise charges, and no meter running while we search.',
              },
              {
                title: 'Slab Leak Experience',
                body: "Redding's 1960s and 1970s slab-built tract homes are a recurring call for us. We know the warning signs and the repair options that protect your foundation.",
              },
              {
                title: 'Whole-Property Testing',
                body: 'Interior plumbing, irrigation, pool lines, and outdoor supply. If the water bill says leak and the house says nothing, we test until the source is found.',
              },
              {
                title: 'Licensed Local Family Business',
                body: 'CSLB #596557, serving the Redding area since 1998. Real local business hours, Mon–Fri 8a–4:30p, with same-day response during those hours when possible.',
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
            <p className="text-lg text-gray-600">5.0 perfect rating on Google · Every review counts</p>
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

      {/* Related services */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
            Related Plumbing Help in Redding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/emergency-plumber-redding"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Emergency Plumber in Redding
              </h3>
              <p className="text-gray-600 text-sm">
                Active leak flooding right now? Same-day response during business hours.
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
                When the leak is a drain or sewer line, camera-first diagnosis and repair.
              </p>
            </Link>
            <Link
              href="/services/repiping-services"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                Repiping Services
              </h3>
              <p className="text-gray-600 text-sm">
                For end-of-life galvanized pipe where leaks keep coming back.
              </p>
            </Link>
          </div>
          <p className="text-center text-gray-600 mt-8">
            Want the service overview instead?{' '}
            <Link href="/services/leak-detection" className="text-primary font-semibold hover:underline">
              Leak detection services
            </Link>{' '}
            ·{' '}
            <Link href="/areas/redding" className="text-primary font-semibold hover:underline">
              All Redding plumbing services
            </Link>
          </p>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Leak Detection Across Shasta County
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Based in Redding, serving homeowners across the surrounding area during business hours.
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
        faqs={leakDetectionFAQs}
        title="Redding, CA Leak Detection FAQ"
        background="gray"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Think You Have a Leak? Find It Now.
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Every week a hidden leak runs, the repair bill grows. Licensed, local, and equipped to
            pinpoint it without tearing up your home.
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
              Get a Free Estimate
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
