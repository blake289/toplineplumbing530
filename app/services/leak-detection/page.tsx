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
  '@id': 'https://toplineplumbingco.com/services/leak-detection#service',
  name: 'Leak Detection in Redding, CA',
  serviceType: 'Leak Detection',
  description:
    'Professional leak detection in Redding, CA — electronic and acoustic equipment to pinpoint hidden leaks in walls, slabs, and buried pipe without unnecessary demolition. Slab leak detection, irrigation and pool line testing, and repair. Upfront pricing. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/services/leak-detection',
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
    name: 'Leak Detection Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electronic & Acoustic Leak Detection', serviceType: 'Leak Detection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Slab Leak Detection & Repair', serviceType: 'Slab Leak Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wall & Ceiling Leak Detection', serviceType: 'Leak Detection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Irrigation & Pool Line Testing', serviceType: 'Leak Detection' } },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/services/leak-detection#webpage',
  url: 'https://toplineplumbingco.com/services/leak-detection',
  name: 'Leak Detection Services in Redding, CA | Topline Plumbing',
  description:
    'Leak detection in Redding, CA. Find hidden leaks in walls, slabs, and pipes with non-invasive electronic methods. Licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/services/leak-detection#service' },
};

export const metadata: Metadata = {
  title: 'Leak Detection Services in Redding, CA | Topline Plumbing',
  description: 'Professional leak detection in Redding, CA. Find hidden water leaks in walls, slabs, and pipes fast. Non-invasive methods. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/leak-detection' },
  openGraph: {
    title: 'Leak Detection Services in Redding, CA | Topline Plumbing',
    description: 'Professional leak detection in Redding, CA. Find hidden water leaks in walls, slabs, and pipes fast. Non-invasive methods. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/leak-detection',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Leak Detection Services in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I know if I have a hidden water leak?',
    answer: 'Signs of a hidden leak include an unexplained spike in your water bill, the sound of running water when nothing is on, warm or wet spots on floors or walls, mold or mildew smell, low water pressure, or cracks appearing in your foundation. If your water meter is spinning when all fixtures are off, you likely have a leak. Call Topline Plumbing at (530) 704-6989.',
  },
  {
    question: 'What is a slab leak and how serious is it?',
    answer: 'A slab leak is a water or sewer pipe leak beneath your concrete foundation. Redding\'s extreme heat cycles cause the ground to expand and contract, which stresses pipes under the slab over time. Left untreated, slab leaks can erode your foundation, cause mold growth, and lead to structural damage. Early detection is critical — call (530) 704-6989 at the first sign.',
  },
  {
    question: 'How much does leak detection cost in Redding, CA?',
    answer: 'Leak detection cost varies by complexity and location. It is almost always worth it — a hidden slab or wall leak left undetected can cause thousands in water damage and mold remediation. We quote every job upfront before any work begins. Call (530) 704-6989 for an estimate.',
  },
  {
    question: 'Do you use non-invasive leak detection methods?',
    answer: 'Yes. Topline Plumbing uses electronic leak detection and acoustic listening equipment to pinpoint leaks without tearing open walls or jackhammering floors unnecessarily. We locate the leak first, then make the smallest possible access point to fix it.',
  },
  {
    question: 'Can a leak detection test find leaks in my irrigation or pool lines?',
    answer: 'Yes. We can detect leaks in irrigation systems, pool plumbing, and outdoor supply lines in addition to interior plumbing. If your water bill is high and you can\'t find the source, we can run a full property leak test to find it. Call (530) 704-6989.',
  },
];

export default function LeakDetectionPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Leak Detection', url: 'https://toplineplumbingco.com/services/leak-detection' },
      ]} />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServicePageTemplate
        faqs={faqs}
        hero={{
          title: 'Leak Detection in Redding, CA — Find It Before It Becomes a Disaster',
          description: [
            "A hidden water leak can quietly destroy your walls, floors, and foundation for months before you notice visible damage. By then, the repair bill is 10x what it would have been.",
            "Topline Plumbing uses electronic and acoustic leak detection equipment to find leaks in walls, under slabs, and in buried pipes — without unnecessary demolition. We find it, we fix it.",
          ],
        }}
        services={[
          {
            title: 'Electronic Leak Detection',
            items: [
              'Acoustic listening equipment to pinpoint leaks',
              'Pressure testing to confirm leak location',
              'Non-invasive — no unnecessary wall openings',
              'Works on copper, PVC, and PEX pipe',
            ],
          },
          {
            title: 'Slab Leak Detection & Repair',
            items: [
              'Detect leaks beneath concrete foundations',
              'Thermal and acoustic methods',
              'Tunneling or rerouting options',
              'Foundation protection — catch it early',
            ],
          },
          {
            title: 'Wall & Ceiling Leak Detection',
            items: [
              'Locate leaks hidden behind drywall',
              'Identify source vs. water migration path',
              'Minimal access points for repair',
              'Irrigation and outdoor line testing',
            ],
          },
        ]}
      gallery={{
        photos: [
          'PXL_20230825_162316080.MP.jpg',
          'PXL_20230825_212727678.jpg',
          'PXL_20230829_225313506.jpg',
          'PXL_20230907_171527829.jpg',
          'PXL_20230911_181819978.jpg',
          'PXL_20230911_183238954.jpg',
        ],
        title: 'Recent Leak Detection Jobs',
        subtitle: 'Slab leaks, supply line leaks, hidden moisture — found and fixed.',
      }}
            />
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Plumbing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/services/repiping-services" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Repiping Services →</span></Link>
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
