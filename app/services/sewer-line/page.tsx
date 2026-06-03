import { Metadata } from 'next';
import Link from 'next/link';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import FAQSchema from '@/components/layout/FAQSchema';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';

const areaServed = [
  { '@type': 'City', name: 'Redding', sameAs: 'https://en.wikipedia.org/wiki/Redding,_California' },
  { '@type': 'City', name: 'Anderson' },
  { '@type': 'City', name: 'Shasta Lake' },
  { '@type': 'City', name: 'Palo Cedro' },
  { '@type': 'City', name: 'Bella Vista' },
  { '@type': 'City', name: 'Red Bluff' },
  { '@type': 'AdministrativeArea', name: 'Shasta County, CA' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/services/sewer-line#service',
  name: 'Sewer Line Repair & Replacement in Redding, CA',
  serviceType: 'Sewer Line Repair',
  description:
    'Sewer line repair and replacement in Redding, CA — camera inspection to diagnose the exact problem before digging, spot repairs, root removal, trenchless options when conditions allow, and full line replacement. Upfront pricing after inspection, properly permitted. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/services/sewer-line',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed,
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sewer Line Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewer Camera Inspection', serviceType: 'Sewer Camera Inspection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewer Line Spot Repair', serviceType: 'Sewer Line Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Root Cutting & Removal', serviceType: 'Sewer Line Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Sewer Line Replacement', serviceType: 'Sewer Line Replacement' } },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/services/sewer-line#webpage',
  url: 'https://toplineplumbingco.com/services/sewer-line',
  name: 'Sewer Line Repair & Replacement in Redding, CA | Topline Plumbing',
  description:
    'Sewer line repair and replacement in Redding, CA. Camera inspection, root removal, trenchless options, full replacement. Licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/services/sewer-line#service' },
};

export const metadata: Metadata = {
  title: 'Sewer Line Repair & Replacement Redding, CA | Topline',
  description: 'Expert sewer line repair and replacement in Redding, CA. Camera inspection, trenchless options available. Licensed, same-day response. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/sewer-line' },
  openGraph: {
    title: 'Sewer Line Repair & Replacement Redding, CA | Topline',
    description: 'Expert sewer line repair and replacement in Redding, CA. Camera inspection, trenchless options available. Licensed, same-day response. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/sewer-line',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Sewer Line Services in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I know if my sewer line is broken or damaged?',
    answer: 'Warning signs include multiple drains backing up at once, sewage odors in your yard or home, wet soggy patches in the lawn over the sewer line, gurgling sounds from toilets, and unusually green or lush grass above the pipe. If you notice any of these, call (530) 704-6989 immediately — sewer line issues get worse fast.',
  },
  {
    question: 'How much does sewer line repair cost in Redding, CA?',
    answer: 'Sewer line repair cost varies by location, depth, and extent of damage — a spot repair is far less than a full replacement, and trenchless methods are priced differently than dig-and-replace. Topline quotes every job upfront after a camera inspection — no surprises. Call (530) 704-6989 for a free assessment.',
  },
  {
    question: 'Do you offer trenchless sewer line repair?',
    answer: 'Yes. When conditions allow, we offer trenchless repair options that avoid digging up your yard, driveway, or landscaping. During our camera inspection, we assess whether trenchless is viable for your situation and explain all available options with upfront pricing.',
  },
  {
    question: 'What causes sewer line damage?',
    answer: 'The most common causes in the Redding area are tree root intrusion (roots seek out water and crack pipes), aging cast iron or clay pipes, ground shifting from Northern California heat cycles, grease buildup, and physical damage from digging. A camera inspection identifies the exact cause.',
  },
  {
    question: 'How long does sewer line replacement take?',
    answer: 'A standard sewer line replacement typically takes 1–2 days for most residential properties. Trenchless methods can sometimes be completed in a single day. We work efficiently to minimize disruption and restore your plumbing as quickly as possible.',
  },
];

export default function SewerLinePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Sewer Line Repair & Replacement', url: 'https://toplineplumbingco.com/services/sewer-line' },
      ]} />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServicePageTemplate
        faqs={faqs}
        hero={{
          title: 'Sewer Line Repair & Replacement in Redding, CA',
          description: [
            "A broken sewer line is one of the most serious plumbing problems a homeowner can face — raw sewage backing up into your home, foul odors, and potential foundation damage if left untreated.",
            "Topline Plumbing uses sewer camera inspection to diagnose the exact problem before we ever dig. We give you upfront pricing, explain all your options, and get it fixed right the first time.",
          ],
        }}
        services={[
          {
            title: 'Sewer Camera Inspection',
            items: [
              'High-definition camera inspection of your sewer line',
              'Identify root intrusion, cracks, or blockages',
              'Exact location and depth of damage',
              'Video report so you can see the problem yourself',
            ],
          },
          {
            title: 'Sewer Line Repair',
            items: [
              'Spot repairs for localized damage',
              'Root cutting and removal',
              'Pipe patching and joint repair',
              'Trenchless options when available',
            ],
          },
          {
            title: 'Full Sewer Line Replacement',
            items: [
              'Complete replacement of failed sewer lines',
              'Cast iron, clay, and ABS pipe specialists',
              'Proper slope and alignment for long-term performance',
              'City permit pulled and inspected',
            ],
          },
        ]}
      gallery={{
        photos: [
          'PXL_20230824_190715691.jpg',
          'PXL_20230825_210252443.jpg',
          'PXL_20230829_172350300.jpg',
          'PXL_20230905_173519922.MP.jpg',
          'PXL_20230909_211732383.jpg',
          'PXL_20230911_182142819.jpg',
        ],
        title: 'Recent Sewer Line Work',
        subtitle: 'Camera inspections, root removal, line repairs across Shasta, Tehama, Butte, and Yuba counties.',
      }}
            />
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            We Diagnose Before We Dig
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              A sewer line problem is one of the few plumbing issues you cannot see, which is exactly
              why guessing is so expensive. Before we open the ground, we run a high-definition camera
              down the line to find the exact location, depth, and cause of the problem — whether it is
              root intrusion at a joint, a cracked or offset pipe, a bellied section holding standing
              water, or a full collapse. You see the footage yourself, and we quote the job upfront
              from what the camera actually shows, not from a worst-case guess.
            </p>
            <p>
              That diagnosis also decides the right fix. A localized break may only need a spot
              repair. Roots can sometimes be cut back and the line cleared and monitored. A line that
              has failed end to end needs replacement. Knowing which one you are dealing with is the
              difference between a few hundred dollars and a few thousand, and we will not sell you a
              replacement when a repair will hold.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            Why Sewer Lines Fail in the Redding Area
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Tree roots are the number-one culprit here. Roots are drawn to the moisture and nutrients
              inside a sewer line, and they work their way in through the tiniest gap at a joint, then
              expand until they crack the pipe and snag everything that flows past. Older Redding
              properties were often plumbed with clay or cast iron lines that corrode, scale, and crack
              with age. Northern California's hot, dry summers and seasonal ground movement add stress
              that shifts and separates aging pipe over time.
            </p>
            <p>
              The warning signs are worth knowing: multiple drains backing up at once, sewage odor in
              the yard or home, soggy patches or unusually green grass along the line's path, and
              gurgling toilets. These get worse fast, so the sooner we camera the line, the more
              options you have and the less damage there is to undo.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            Repair, Trenchless, or Full Replacement
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              When conditions allow, trenchless methods let us repair or replace a line with far less
              digging, sparing your yard, driveway, and landscaping. Trenchless is not viable for every
              situation — a fully collapsed or badly misaligned line still needs a traditional
              dig-and-replace — and we will tell you honestly which one your line qualifies for after
              the camera inspection. A standard replacement runs about one to two days for most
              residential properties, with trenchless sometimes done in a single day. Every job is
              properly permitted and inspected, with the slope and alignment set for long-term
              performance.
            </p>
            <p>
              Topline Plumbing has served the Redding area since 1998 — family owned, licensed under
              California CSLB #596557, bonded, and insured, with a 5.0 Google rating. Call (530)
              704-6989, Monday through Friday 8:00a to 4:30p, for a sewer line assessment.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sewer Line Service by City</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link href="/sewer-line-anderson" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Anderson</span></Link>
            <Link href="/sewer-line-shasta-lake" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Shasta Lake</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
