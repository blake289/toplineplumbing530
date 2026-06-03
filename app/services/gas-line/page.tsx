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
  '@id': 'https://toplineplumbingco.com/services/gas-line#service',
  name: 'Gas Line Repair & Installation in Redding, CA',
  serviceType: 'Gas Line Repair and Installation',
  description:
    'Licensed gas line repair and installation in Redding, CA — gas leak detection and repair, new appliance lines for ranges, dryers, and water heaters, outdoor BBQ and fire pit hookups, and pressure testing. Same-day service during business hours (Mon–Fri 8a–4:30p), properly permitted and inspected. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/services/gas-line',
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
    name: 'Gas Line Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gas Leak Detection & Repair', serviceType: 'Gas Leak Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'New Appliance Gas Line Installation', serviceType: 'Gas Line Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor BBQ & Fire Pit Hookup', serviceType: 'Gas Line Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gas Line Inspection & Pressure Testing', serviceType: 'Gas Line Inspection' } },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/services/gas-line#webpage',
  url: 'https://toplineplumbingco.com/services/gas-line',
  name: 'Gas Line Repair & Installation in Redding, CA | Topline Plumbing',
  description:
    'Licensed gas line repair and installation in Redding, CA. Gas leaks, appliance lines, BBQ hookups, pressure testing. Licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/services/gas-line#service' },
};

export const metadata: Metadata = {
  title: 'Gas Line Repair & Installation Redding, CA | Topline',
  description: 'Licensed gas line repair and installation in Redding, CA. Gas leaks, appliance lines, and outdoor BBQ hookups, same-day service Mon–Fri. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/gas-line' },
  openGraph: {
    title: 'Gas Line Repair & Installation Redding, CA | Topline',
    description: 'Licensed gas line repair and installation in Redding, CA. Gas leaks, appliance lines, and outdoor BBQ hookups, same-day service Mon–Fri. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/gas-line',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Gas Line Repair & Installation in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What should I do if I smell gas in my home?',
    answer: 'Leave the building immediately — do not turn any lights or switches on or off. Once outside, call your gas company (PG&E: 1-800-743-5000) to shut off the gas, then call Topline Plumbing at (530) 704-6989 for emergency gas line repair. Do not re-enter until the leak has been located and repaired by a licensed plumber.',
  },
  {
    question: 'Are you licensed to work on gas lines in California?',
    answer: 'Yes. Topline Plumbing holds a valid California Contractors License and is fully licensed, bonded, and insured to perform gas line work in Redding and surrounding Northern California communities. All gas line work is permitted and inspected as required by California code.',
  },
  {
    question: 'How much does gas line repair cost in Redding?',
    answer: 'Gas line work cost depends on the location of the leak, accessibility, and extent of damage — minor leak fixes are very different from new line installs for appliances or outdoor BBQs. Topline quotes every job upfront before any work begins. Call (530) 704-6989 for an estimate.',
  },
  {
    question: 'Can you install a gas line for my outdoor BBQ or fire pit?',
    answer: 'Yes. We install dedicated gas lines for outdoor grills, BBQs, fire pits, and patio heaters throughout Redding and the surrounding area. Running a dedicated gas line is safer and more convenient than dealing with propane tanks. Call (530) 704-6989 to schedule.',
  },
  {
    question: 'How do I know if I have a gas leak?',
    answer: 'Signs of a gas leak include a rotten egg or sulfur smell (natural gas has a chemical odorant added for detection), hissing or whistling near gas lines or appliances, dead vegetation in a line across your yard, or bubbling in standing water near a gas line. If you suspect a leak, leave the area and call for help immediately.',
  },
];

export default function GasLinePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Gas Line Repair & Installation', url: 'https://toplineplumbingco.com/services/gas-line' },
      ]} />
      <FAQSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServicePageTemplate
        faqs={faqs}
        hero={{
          title: 'Gas Line Repair & Installation in Redding, CA',
          description: [
            "Gas leaks are a serious safety hazard — and not something to wait on. Topline Plumbing provides same-day emergency gas line repair for Redding homeowners during business hours (Mon–Fri 8:00a–4:30p), with licensed plumbers who know California gas code inside and out. If you smell gas outside our hours, leave the building and call PG&E at 1-800-743-5000.",
            "Whether it's a suspected leak, a new appliance hookup, or an outdoor BBQ line, we handle it safely, properly permitted, and with upfront pricing.",
          ],
        }}
        services={[
          {
            title: 'Gas Leak Detection & Repair',
            items: [
              'Same-day emergency response during business hours',
              'Electronic leak detection equipment',
              'Pressure testing after every repair',
              'Full safety inspection included',
            ],
          },
          {
            title: 'New Gas Line Installation',
            items: [
              'Gas lines for ranges, dryers, and water heaters',
              'Outdoor BBQ and fire pit hookups',
              'Whole-house gas line upgrades',
              'Properly permitted and city-inspected',
            ],
          },
          {
            title: 'Gas Line Maintenance',
            items: [
              'Annual gas line inspections',
              'Shutoff valve replacement',
              'Flex connector replacement',
              'Sediment trap installation',
            ],
          },
        ]}
      gallery={{
        photos: [
          'PXL_20230824_203034325.jpg',
          'PXL_20230825_212631722.jpg',
          'PXL_20230829_172405158.jpg',
          'PXL_20230905_205839104.jpg',
          'PXL_20230909_212047234.jpg',
          'PXL_20230911_182202168.jpg',
        ],
        title: 'Recent Gas Line Work',
        subtitle: 'Licensed gas line installs, repairs, and pressure testing for residential and commercial.',
      }}
            />
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            If You Smell Gas, Act First, Call Second
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Natural gas has a chemical odorant added so a leak smells like rotten eggs or sulfur. If
              you smell it, leave the building right away — do not flip a light switch, light a match,
              or use anything that could spark. Once you are outside, call PG&amp;E at 1-800-743-5000 to
              shut the gas off, then call Topline at (530) 704-6989. Other warning signs are a hissing
              or whistling near a line or appliance, dead vegetation in a line across the yard, or
              bubbling in standing water near a buried gas line. Do not re-enter until a licensed
              plumber has located and repaired the leak.
            </p>
            <p>
              We provide same-day gas leak response during business hours, Monday through Friday 8:00a
              to 4:30p. Gas is not something to put off or DIY — California code requires this work be
              done by a licensed contractor and properly permitted, and our plumbers know that code
              inside and out.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            New Gas Lines for Appliances and the Backyard
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Adding a gas range, switching a dryer from electric to gas, or installing a new gas water
              heater all need a properly sized supply line, and an undersized line starves the appliance
              and can be unsafe. We run new lines for ranges, dryers, water heaters, and whole-house
              upgrades, sizing each one for the appliance's real demand. A common Redding job is
              upsizing an older line so it can feed a high-output appliance like a tankless water heater
              that the original tank-era plumbing was never built for.
            </p>
            <p>
              Out in the backyard, a dedicated gas line to a grill, built-in BBQ, fire pit, or patio
              heater means no more swapping propane tanks mid-cookout. We run the line, install the
              shutoff and connection, and pressure-test the whole thing before we sign off. Every
              installation is permitted and city-inspected as required.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            Every Gas Job Gets Pressure-Tested
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Whether it is a repair or a brand-new line, we pressure-test the system after the work to
              confirm there are no leaks before we put it back in service — that is the step that makes
              gas work safe, and it is non-negotiable on every job. We also handle the routine side:
              annual gas line inspections, shutoff valve replacement, worn flex connector replacement,
              and sediment trap installation to keep your system safe over the long haul.
            </p>
            <p>
              Topline Plumbing has served the Redding area since 1998 — family owned, licensed under
              California CSLB #596557, bonded, and insured, with a 5.0 Google rating and upfront pricing
              on every job. Call (530) 704-6989, Monday through Friday 8:00a to 4:30p.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Plumbing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/emergency-plumber-redding" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Emergency Plumber in Redding →</span></Link>
            <Link href="/services/leak-detection" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Leak Detection →</span></Link>
            <Link href="/services/water-heater-repair" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Water Heater Repair →</span></Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-primary font-semibold hover:underline">View all plumbing services →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
