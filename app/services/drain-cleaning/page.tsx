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
  '@id': 'https://toplineplumbingco.com/services/drain-cleaning#service',
  name: 'Drain Cleaning in Redding, CA',
  serviceType: 'Drain Cleaning',
  description:
    'Professional drain cleaning in Redding, CA — kitchen, bathroom, and main sewer line clogs cleared with mechanical power augers, not chemicals. Sewer camera inspection for recurring clogs and root intrusion. Same-day service during business hours (Mon–Fri 8a–4:30p) with upfront pricing. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/services/drain-cleaning',
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
    name: 'Drain Cleaning Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen & Bathroom Drain Clearing', serviceType: 'Drain Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Main Sewer Line Cleaning', serviceType: 'Sewer Line Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Power Auger / Mechanical Snaking', serviceType: 'Drain Snaking' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewer Camera Inspection', serviceType: 'Sewer Camera Inspection' } },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/services/drain-cleaning#webpage',
  url: 'https://toplineplumbingco.com/services/drain-cleaning',
  name: 'Drain Cleaning Services in Redding, CA | Topline Plumbing',
  description:
    'Drain cleaning in Redding, CA. Power-auger clog removal and sewer camera inspection with upfront pricing. Licensed local plumber since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/services/drain-cleaning#service' },
};

export const metadata: Metadata = {
  title: 'Drain Cleaning Services in Redding, CA | Topline Plumbing',
  description: 'Professional drain cleaning in Redding, CA with upfront pricing. We clear tough clogs and backed-up sewer lines, not just mask them. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/drain-cleaning' },
  openGraph: {
    title: 'Drain Cleaning Services in Redding, CA | Topline Plumbing',
    description: 'Professional drain cleaning in Redding, CA with upfront pricing. We clear tough clogs and backed-up sewer lines, not just mask them. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/drain-cleaning',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Drain Cleaning Services in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const drainFAQs = [
  {
    question: 'How much does drain cleaning cost in Redding, CA?',
    answer: 'Drain cleaning cost varies by job — a single fixture clog is different from a main line clog or one requiring camera inspection or hydrojetting. We always quote the price upfront before starting work. Call (530) 704-6989 for a free estimate with any service.',
  },
  {
    question: 'What causes slow or clogged drains?',
    answer: 'The most common causes are grease and food buildup in kitchen drains, hair and soap scum in bathroom drains, and root intrusion or debris in main sewer lines. Chemical drain cleaners only mask the problem — professional augering removes the clog completely.',
  },
  {
    question: 'How do I know if I have a main sewer line clog?',
    answer: 'Signs of a main sewer line clog include multiple drains backing up at once, gurgling sounds from toilets when you run the sink, water backing up in the shower when you flush the toilet, or sewage smells coming from floor drains. Call (530) 704-6989 immediately — this is a plumbing emergency.',
  },
  {
    question: 'Do you offer same-day drain cleaning in Redding?',
    answer: 'Yes. Topline Plumbing offers same-day drain cleaning in Redding and surrounding areas. We keep fully stocked service trucks and can respond quickly to urgent clogs. Call (530) 704-6989 to check availability.',
  },
  {
    question: 'Can you clean drains with a camera inspection?',
    answer: 'Yes. We offer sewer camera inspections to locate the exact position and cause of blockages — including root intrusion, pipe damage, or grease buildup. This is especially useful for recurring clogs or main sewer line issues. Call (530) 704-6989 to schedule.',
  },
];

export default function DrainCleaningPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Drain Cleaning', url: 'https://toplineplumbingco.com/services/drain-cleaning' },
      ]} />
      <FAQSchema faqs={drainFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServicePageTemplate
      faqs={drainFAQs}
      hero={{
        title: 'Drain Cleaning in Redding — Fast, Thorough, & Guaranteed',
        description: [
          "Slow drain? Backed-up sink? Sewage smell? Don't reach for the chemical drain cleaner — it only masks the problem.",
          "Topline Plumbing uses professional mechanical power augers to clear tough clogs and backed-up sewer lines. We don't just push the clog further down; we remove it completely."
        ],
      }}
      services={[
        {
          title: 'Power Auger Cleaning',
          items: [
            'Mechanical augering for stubborn clogs',
            'Sinks, toilets, and shower drains',
            'Main sewer line cleaning',
            'Clog removal guarantee',
          ],
        },
        {
          title: 'Sewer Line Inspection',
          items: [
            'Camera inspection to locate blockages',
            'Identify root intrusion or pipe damage',
            'Preventive maintenance recommendations',
            'Detailed video report',
          ],
        },
        {
          title: 'Same-Day Service',
          items: [
            'Fast response for urgent clogs',
            'Same-day scheduling during business hours',
            'Upfront pricing before we start',
            'Satisfaction guaranteed',
          ],
        },
      ]}
      gallery={{
        photos: [
          'PXL_20230824_184759382.MP.jpg',
          'PXL_20230825_184450871.MP.jpg',
          'PXL_20230829_154222780.jpg',
          'PXL_20230831_195044552.jpg',
          'PXL_20230909_152106802.jpg',
          'PXL_20230911_182112583.MP.jpg',
        ],
        title: 'Recent Drain & Sewer Work',
        subtitle: 'Real drains, real sewer lines, real Northern California homes. Every photo is from a Topline job.',
      }}
          />
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why We Auger Instead of Pouring Chemicals
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              A bottle of caustic drain cleaner might open a pinhole through a grease plug for a day,
              but it does nothing for root intrusion or a line that has scaled half-closed, and it can
              eat at an old pipe that is already thin. It also sits in your trap as a hazard for the
              next person who reaches in. We use professional mechanical power augers that physically
              remove the blockage at the source rather than masking it, so the clog stays gone instead
              of coming back next week.
            </p>
            <p>
              That matters in Redding specifically. A lot of the housing stock here is older
              mid-century construction built with galvanized supply and aging drain lines that have
              narrowed over the decades as scale and grease build up, so they clog more easily and
              recur faster than a newer PEX build. Out toward Palo Cedro and Bella Vista, many
              properties run on septic, where harsh chemical cleaners can damage the system outright.
              Mechanical augering is the septic-safe way to clear those lines.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            Common Drains We Clear
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>Kitchen lines</strong> clog from cooking grease, oils, and food scraps that cool
              and harden inside the pipe. <strong>Bathroom drains</strong> back up from hair and soap
              scum knitting together at the trap and branch line. <strong>Toilets</strong> block from
              flushed wipes, paper buildup, or an obstruction farther down. And a{' '}
              <strong>main sewer line clog</strong> backs up everything at once — that is the call
              where multiple drains gurgle, water rises in the shower when you flush, and you may smell
              sewage at a floor drain.
            </p>
            <p>
              A single slow fixture is a different job than a fully backed-up main line, which is why
              we diagnose first and quote the price upfront before any work starts. Whatever it turns
              out to be, you know the cost before we begin and there are no surprise charges after.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            When a Camera Makes Sense
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              If a clog keeps coming back, clearing it again is treating the symptom. We drop a sewer
              camera down the line to see exactly what is going on — root intrusion at a joint, a
              bellied or collapsed section, or decades of scale inside an old galvanized line. That
              tells us whether you need a simple clearing or a real repair, so you are not paying for
              the same call month after month. For recurring clogs and any main-line backup, the camera
              look is the right first move.
            </p>
            <p>
              Topline Plumbing has served the Redding area since 1998 — family owned, licensed under
              California CSLB #596557, bonded, and insured, with a 5.0 Google rating. We offer same-day
              drain cleaning during business hours, Monday through Friday 8:00a to 4:30p, with a typical
              30 to 60 minute response inside the Redding city limits. Call (530) 704-6989.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Drain Cleaning by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/drain-cleaning-redding" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Redding</span></Link>
            <Link href="/drain-cleaning-anderson" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Anderson</span></Link>
            <Link href="/drain-cleaning-shasta-lake" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Shasta Lake</span></Link>
            <Link href="/drain-cleaning-palo-cedro" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Palo Cedro</span></Link>
            <Link href="/drain-cleaning-bella-vista" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Bella Vista</span></Link>
            <Link href="/drain-cleaning-red-bluff" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Red Bluff</span></Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="font-semibold text-gray-900">Related services:</span>
            <Link href="/services/sewer-line" className="text-primary font-semibold hover:underline">Sewer Line Repair</Link>
            <span className="text-gray-400">·</span>
            <Link href="/services/emergency" className="text-primary font-semibold hover:underline">Emergency Plumbing</Link>
            <span className="text-gray-400">·</span>
            <Link href="/commercial-plumbing-redding" className="text-primary font-semibold hover:underline">Commercial Plumbing</Link>
            <span className="text-gray-400">·</span>
            <Link href="/services" className="text-primary font-semibold hover:underline">All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
