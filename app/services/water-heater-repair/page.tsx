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
  '@id': 'https://toplineplumbingco.com/services/water-heater-repair#service',
  name: 'Water Heater Repair in Redding, CA',
  serviceType: 'Water Heater Repair',
  description:
    'Water heater repair in Redding, CA — same-day diagnostic for no hot water, leaks, rumbling tanks, and pilot or ignition trouble. Thermostat and heating element replacement, sediment flush, anode rod and pressure relief valve service, plus honest repair-versus-replace advice. Upfront pricing. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/services/water-heater-repair',
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
    name: 'Water Heater Repair Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Same-Day Diagnostic', serviceType: 'Water Heater Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heating Element & Thermostat Replacement', serviceType: 'Water Heater Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leak Diagnosis & Repair', serviceType: 'Water Heater Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sediment Flush & Routine Maintenance', serviceType: 'Water Heater Maintenance' } },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/services/water-heater-repair#webpage',
  url: 'https://toplineplumbingco.com/services/water-heater-repair',
  name: 'Water Heater Repair in Redding, CA | Topline Plumbing',
  description:
    'Water heater repair in Redding, CA. Same-day diagnostic, thermostat and element repair, leak and flush service. Licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/services/water-heater-repair#service' },
};

export const metadata: Metadata = {
  title: 'Water Heater Repair in Redding, CA | Topline Plumbing',
  description: "Expert water heater repair in Redding, CA with same-day diagnostic, thermostat, heating element, leak repair, and annual flush service. Call (530) 704-6989.",
  alternates: { canonical: 'https://toplineplumbingco.com/services/water-heater-repair' },
  openGraph: {
    title: 'Water Heater Repair in Redding, CA | Topline Plumbing',
    description: "Expert water heater repair in Redding, CA with same-day diagnostic, thermostat, heating element, leak repair, and annual flush service. Call (530) 704-6989.",
    url: 'https://toplineplumbingco.com/services/water-heater-repair',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Water Heater Repair in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const waterHeaterFAQs = [
  {
    question: "How do I know if my water heater needs to be repaired or replaced?",
    answer: "If your water heater is under 8 years old and the issue is a faulty thermostat, heating element, or minor leak, repair is usually the right call. If it's 10+ years old, rusting, making loud rumbling noises, or leaking from the tank itself, replacement is almost always more cost-effective. Our plumbers will give you an honest recommendation.",
  },
  {
    question: "How much does water heater replacement cost in Redding, CA?",
    answer: "Replacement cost varies by job — the unit, installation complexity, and permits all factor in. We quote every replacement upfront before any work begins, so you know the exact price before you approve. Call (530) 704-6989 for a free estimate with any service.",
  },
  {
    question: "Can you replace my water heater the same day?",
    answer: "In most cases, yes — see our dedicated water heater replacement page for full details on same-day install, brands stocked, and the permit process. We service Redding, Anderson, Shasta Lake, and surrounding areas. Call (530) 704-6989 and we'll let you know right away.",
  },
  {
    question: "What are the signs my water heater is failing?",
    answer: "Common warning signs include: no hot water or lukewarm water, water that takes too long to reheat, discolored or rust-colored water, a sulfur or rotten egg smell, popping or rumbling sounds from the tank, water pooling around the base, or a unit that's 10+ years old.",
  },
  {
    question: "Do you install tankless water heaters in Redding?",
    answer: "Yes. We install and service all major brands of tankless water heaters. Tankless units provide endless hot water and can reduce energy costs by 20–30%. Call (530) 704-6989 for a free assessment to see if tankless is right for your home.",
  },
];

export default function WaterHeaterRepairPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Water Heater Repair', url: 'https://toplineplumbingco.com/services/water-heater-repair' },
      ]} />
      <FAQSchema faqs={waterHeaterFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServicePageTemplate
      faqs={waterHeaterFAQs}
      hero={{
        title: 'Water Heater Repair in Redding, CA — Same-Day Diagnostic',
        description: [
          "Is your water heater making strange noises? Running out of hot water faster than usual? Leaking around the base?",
          "With 3,000+ jobs completed across Northern California, Topline Plumbing diagnoses water heater problems fast and repairs what can be saved — same-day service during business hours.",
        ],
      }}
      relatedCallout={{
        title: 'Need a Full Replacement Instead?',
        href: '/water-heater-replacement-redding',
        label: 'See our Redding replacement guide',
      }}
      stats={[
        {
          value: '15%',
          description: "Routine service can improve your water heater's efficiency by up to 15%, helping it run better and last longer.",
        },
        {
          value: '1,500gal',
          description: 'A well-maintained system can save up to 1,500 gallons of water per year, reducing waste and lowering utility costs.',
        },
        {
          value: '20%',
          description: 'Homeowners can lower annual water heating energy use by up to 20% with regular maintenance.',
        },
      ]}
      whenToRepair={[
        'Your unit is less than 8 years old',
        'The issue is minor (thermostat, heating element)',
        'No signs of corrosion or major leaks',
        'Cost of repair is less than 50% of replacement',
      ]}
      whenToReplace={[
        'Your unit is 10+ years old',
        "You're seeing rusty water or major leaks",
        'Frequent repairs are needed',
        'Your energy bills are climbing',
        'You want to upgrade to tankless',
      ]}
      services={[
        {
          title: 'Routine Maintenance',
          items: [
            'Flush sediment buildup',
            'Test pressure relief valve',
            'Check anode rod',
            'Inspect for leaks and corrosion',
          ],
        },
        {
          title: 'Emergency Repairs',
          items: [
            'Heating element replacement',
            'Thermostat replacement',
            'Pressure relief valve repair',
            'Leak diagnosis and repair',
          ],
        },
        {
          title: 'Diagnostic & Inspection',
          items: [
            'Same-day failure diagnosis',
            'Pilot light & ignition troubleshooting',
            'Honest repair-vs-replace recommendation',
          ],
        },
      ]}
      gallery={{
        photos: [
          'PXL_20230824_190214986.jpg',
          'PXL_20230825_184458238.jpg',
          'PXL_20230829_154244043.jpg',
          'PXL_20230831_195054222.jpg',
          'PXL_20230909_193611657.jpg',
          'PXL_20230911_182128368.MP.jpg',
        ],
        title: 'Recent Water Heater Jobs',
        subtitle: 'Installs, replacements, repairs. Tank and tankless. Every photo is from a Topline job.',
      }}
          />
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Water Heater Service by City</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link href="/water-heater-repair-redding" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Redding</span></Link>
            <Link href="/water-heater-repair-anderson" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Anderson</span></Link>
            <Link href="/water-heater-repair-shasta-lake" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Shasta Lake</span></Link>
            <Link href="/water-heater-repair-palo-cedro" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Palo Cedro</span></Link>
            <Link href="/water-heater-repair-bella-vista" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Bella Vista</span></Link>
            <Link href="/water-heater-repair-red-bluff" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Red Bluff</span></Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="font-semibold text-gray-900">Related services:</span>
            <Link href="/water-heater-replacement-redding" className="text-primary font-semibold hover:underline">Water Heater Replacement</Link>
            <span className="text-gray-400">·</span>
            <Link href="/services/tankless" className="text-primary font-semibold hover:underline">Tankless Water Heaters</Link>
            <span className="text-gray-400">·</span>
            <Link href="/services" className="text-primary font-semibold hover:underline">All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
