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
  '@id': 'https://toplineplumbingco.com/services/repiping-services#service',
  name: 'Repiping Services in Redding, CA',
  serviceType: 'Whole-House Repiping',
  description:
    'Whole-house and partial repiping in Redding, CA — replacing failing galvanized steel and polybutylene pipe with modern PEX or copper for better pressure, cleaner water, and fewer leaks. Free on-site estimate, minimal wall cutting, full patch and cleanup. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/services/repiping-services',
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
    name: 'Repiping Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole-House PEX Repiping', serviceType: 'Repiping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole-House Copper Repiping', serviceType: 'Repiping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Partial / Single-Room Repiping', serviceType: 'Repiping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Main Water Line Replacement', serviceType: 'Water Line Replacement' } },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/services/repiping-services#webpage',
  url: 'https://toplineplumbingco.com/services/repiping-services',
  name: 'Repiping Services in Redding, CA | Topline Plumbing',
  description:
    'Whole-house repiping in Redding, CA. Upgrade old galvanized or polybutylene pipe to PEX or copper. Free estimate, licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/services/repiping-services#service' },
};

export const metadata: Metadata = {
  title: 'Repiping Services in Redding, CA | Topline Plumbing',
  description: 'Professional repiping services in Redding, CA. Upgrade old galvanized or polybutylene pipe to reliable PEX or copper for better pressure. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/repiping-services' },
  openGraph: {
    title: 'Repiping Services in Redding, CA | Topline Plumbing',
    description: 'Professional repiping services in Redding, CA. Upgrade old galvanized or polybutylene pipe to reliable PEX or copper for better pressure. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/repiping-services',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Repiping Services in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const repipingFAQs = [
  {
    question: 'How do I know if my home needs repiping?',
    answer: 'Common signs that your home needs repiping include low water pressure throughout the house, rusty or brown-colored water, frequent pipe leaks, visible pipe corrosion, or pipes that are 40+ years old. Galvanized steel and polybutylene pipes are especially prone to failure and should be replaced proactively.',
  },
  {
    question: 'How much does whole-house repiping cost in Redding, CA?',
    answer: 'Repiping cost varies by home size, pipe material (PEX vs. copper), and accessibility of existing pipes. We provide a free on-site estimate with detailed upfront pricing before any work begins. Call (530) 704-6989 to schedule.',
  },
  {
    question: 'What is the difference between PEX and copper repiping?',
    answer: 'PEX (cross-linked polyethylene) is flexible, freeze-resistant, and less expensive than copper. It is the most popular choice for repiping today. Copper is more rigid, has a longer track record, and is preferred in some high-end applications. We install both and will recommend the best option for your home and budget.',
  },
  {
    question: 'How long does a whole-house repipe take?',
    answer: 'Most whole-house repipes in Redding take 2–5 days depending on the size of the home. We minimize disruption by working room by room, and in most cases you will have water access throughout the project. We handle all wall repair and cleanup before we leave.',
  },
  {
    question: 'Is repiping covered by homeowners insurance?',
    answer: 'In some cases, yes. If your pipes failed due to a sudden and accidental event like a burst pipe, your insurance may cover repairs. However, gradual deterioration due to age is typically not covered. We can provide detailed documentation of the work done to support any insurance claim. Call (530) 704-6989 for details.',
  },
];

export default function RepipingServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Repiping Services', url: 'https://toplineplumbingco.com/services/repiping-services' },
      ]} />
      <FAQSchema faqs={repipingFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServicePageTemplate
      faqs={repipingFAQs}
      hero={{
        title: 'Repiping Services in Redding — Upgrade Your Plumbing System',
        description: [
          "Old galvanized or polybutylene pipes causing low water pressure, rusty water, or frequent leaks?",
          "Topline Plumbing specializes in whole-house repiping using modern PEX or copper pipes. We'll upgrade your plumbing system for better water quality, pressure, and reliability."
        ],
      }}
      whenToRepair={[
        'Low water pressure throughout the house',
        'Rusty or discolored water',
        'Frequent pipe leaks',
        'Galvanized pipes installed before 1960',
        'Polybutylene (gray plastic) pipes',
      ]}
      services={[
        {
          title: 'Complete Home Repiping',
          items: [
            'PEX pipe installation (flexible, durable)',
            'Copper pipe installation (traditional)',
            'Whole-house water line replacement',
            'Minimal wall cutting and patching',
          ],
        },
        {
          title: 'Partial Repiping',
          items: [
            'Single room or bathroom repiping',
            'Hot water line replacement',
            'Cold water line replacement',
            'Main water line replacement',
          ],
        },
        {
          title: 'Why Repipe?',
          items: [
            'Improve water pressure and quality',
            'Eliminate rust and corrosion',
            'Prevent future leaks and water damage',
            'Increase home value',
          ],
        },
      ]}
      gallery={{
        photos: [
          'PXL_20230824_203617356.jpg',
          'PXL_20230825_212644110.jpg',
          'PXL_20230829_225306088.MP.jpg',
          'PXL_20230906_190237285.jpg',
          'PXL_20230911_181811472.jpg',
          'PXL_20230911_182304434.jpg',
        ],
        title: 'Recent Repipe Projects',
        subtitle: 'Galvanized-to-copper, copper-to-PEX, full-home repipes — done clean, done right.',
      }}
          />
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Older Redding Homes Outgrow Their Pipes
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              A lot of Redding's housing stock dates to the mid-century era, and homes from that
              period were commonly plumbed with galvanized steel supply lines. Galvanized corrodes from
              the inside out — the interior diameter slowly chokes down with rust and scale, which is
              why an older home develops weak pressure, water that runs rusty or brown after it sits,
              and a rising number of pinhole leaks. Once a galvanized system starts going, patching one
              section just moves the next failure down the line.
            </p>
            <p>
              Homes built or re-plumbed in the late 1970s through mid-1990s may instead have
              polybutylene — usually gray plastic pipe — which is prone to sudden failure and is worth
              replacing proactively rather than waiting for a burst. If your pipes are 40-plus years
              old, the water runs discolored, pressure is poor house-wide, or you are chasing one leak
              after another, a repipe usually costs less in the long run than the slow drip of repairs
              and water damage.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            PEX vs. Copper — What We Recommend and Why
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              PEX (cross-linked polyethylene) is flexible, resists freezing better than rigid pipe,
              installs with fewer joints, and costs less than copper — it is the most common choice for
              modern repipes and a strong fit for most Redding homes. Copper is rigid, has a long proven
              track record, and is sometimes preferred for specific applications or by homeowner
              preference. We install both and make an honest recommendation based on your home, your
              water, and your budget rather than steering you toward whatever has the bigger ticket.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            What a Repipe Looks Like, Start to Finish
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We start with a free on-site estimate and detailed upfront pricing — you approve the
              number before any work begins. Most whole-house repipes in Redding take about two to five
              days depending on the size of the home. We work room by room to keep water access
              available through most of the project, open only the access points we need, and we handle
              the wall repair and cleanup before we leave so you are not left with the patching.
              Partial repipes — a single bathroom, a hot-water loop, or just the main water line — are
              also an option when a full replacement is not warranted yet.
            </p>
            <p>
              Topline Plumbing has served the Redding area since 1998 — family owned, licensed under
              California CSLB #596557, bonded, and insured, with a 5.0 Google rating. Call (530)
              704-6989, Monday through Friday 8:00a to 4:30p, to schedule your free repipe estimate.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Plumbing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/services/leak-detection" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Leak Detection →</span></Link>
            <Link href="/emergency-plumber-redding" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Emergency Plumber in Redding →</span></Link>
            <Link href="/services/sewer-line" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Sewer Line Repair →</span></Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-primary font-semibold hover:underline">View all plumbing services →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
