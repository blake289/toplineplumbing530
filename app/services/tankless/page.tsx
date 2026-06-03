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
  '@id': 'https://toplineplumbingco.com/services/tankless#service',
  name: 'Tankless Water Heater Installation in Redding, CA',
  serviceType: 'Tankless Water Heater Installation',
  description:
    'Tankless water heater installation in Redding, CA — endless on-demand hot water and lower energy bills. Navien, Rinnai, Noritz, and Rheem units sized to your household, with gas line and venting upgrades handled and old tank removal included. Free consultation, upfront pricing, licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/services/tankless',
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
    name: 'Tankless Water Heater Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tankless Unit Installation', serviceType: 'Tankless Water Heater Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gas Line Upgrade for Tankless', serviceType: 'Gas Line Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venting Installation', serviceType: 'Water Heater Venting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Old Tank Removal & Disposal', serviceType: 'Water Heater Removal' } },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/services/tankless#webpage',
  url: 'https://toplineplumbingco.com/services/tankless',
  name: 'Tankless Water Heater Installation in Redding, CA | Topline Plumbing',
  description:
    'Tankless water heater installation in Redding, CA. Endless hot water, lower energy bills, free consultation. Licensed plumber since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/services/tankless#service' },
};

export const metadata: Metadata = {
  title: 'Tankless Water Heater Installation Redding, CA | Topline',
  description: 'Tankless water heater installation in Redding, CA. Endless on-demand hot water and lower energy bills, free consultation, upfront pricing. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/tankless' },
  openGraph: {
    title: 'Tankless Water Heater Installation Redding, CA | Topline',
    description: 'Tankless water heater installation in Redding, CA. Endless on-demand hot water and lower energy bills, free consultation, upfront pricing. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/tankless',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Tankless Water Heater Installation in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const tanklessFAQs = [
  {
    question: 'How much does tankless water heater installation cost in Redding, CA?',
    answer: 'Tankless installation cost varies by job — the unit, gas line requirements, and venting setup all factor in. We quote every job upfront before any work begins. Call (530) 704-6989 for a free consultation.',
  },
  {
    question: 'How much can I save by switching to tankless?',
    answer: 'Most homeowners save 20–30% on water heating costs by switching to a tankless system. Since tankless heaters only heat water on demand instead of keeping a full tank hot at all times, they use significantly less energy — especially in households that use hot water consistently throughout the day.',
  },
  {
    question: 'How long do tankless water heaters last?',
    answer: 'Tankless water heaters typically last 20+ years — nearly double the lifespan of a traditional tank unit (8–12 years). They also tend to have lower long-term repair costs because they have fewer components subject to corrosion or sediment buildup.',
  },
  {
    question: 'What brands of tankless water heaters do you install?',
    answer: 'We install all major brands including Navien, Rinnai, Noritz, and Rheem. We will recommend the right brand and model for your household size and water usage. Call (530) 704-6989 for a free recommendation.',
  },
  {
    question: 'Do I need to upgrade my gas line for a tankless water heater?',
    answer: 'Sometimes yes. Tankless units require a larger gas supply than traditional tank heaters, so older homes may need a gas line upgrade. We assess your current gas line during the free consultation and include any required upgrades in your upfront quote. Call (530) 704-6989 to schedule.',
  },
];

export default function TanklessWaterHeaterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Tankless Water Heater Installation', url: 'https://toplineplumbingco.com/services/tankless' },
      ]} />
      <FAQSchema faqs={tanklessFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServicePageTemplate
      faqs={tanklessFAQs}
      hero={{
        title: 'Tankless Water Heater Installation in Redding — Endless Hot Water, Lower Bills',
        description: [
          "Tired of running out of hot water? Want to cut your energy bills by 30%?",
          "Tankless water heaters provide hot water on demand, only heating water when you need it. That means endless hot water for your family and significant savings on your energy bill."
        ],
      }}
      relatedCallout={{
        title: 'Sticking with a Tank?',
        href: '/water-heater-replacement-redding',
        label: 'See our tank replacement guide',
      }}
      stats={[
        {
          value: '30%',
          description: 'Tankless systems can reduce water heating costs by up to 30% compared to traditional tank systems.',
        },
        {
          value: '20+ years',
          description: 'Tankless water heaters last 20+ years, nearly double the lifespan of traditional tank models.',
        },
        {
          value: 'Endless',
          description: 'Never run out of hot water again. Tankless systems heat water on demand, providing continuous supply.',
        },
      ]}
      services={[
        {
          title: 'Tankless Installation',
          items: [
            'Full system installation',
            'Gas line upgrades (if needed)',
            'Venting installation',
            'Old tank removal and disposal',
          ],
        },
        {
          title: 'Popular Brands We Install',
          items: [
            'Navien — Industry-leading efficiency',
            'Rinnai — Reliable and proven',
            'Noritz — High-performance models',
            'Rheem — Affordable and dependable',
          ],
        },
        {
          title: 'Free Consultation',
          items: [
            'Assess your hot water needs',
            'Recommend the right size unit',
            'Upfront pricing with no hidden fees',
            'Honest install timeline before you commit',
          ],
        },
      ]}
      ctaText="Ready to Upgrade to Tankless?"
      gallery={{
        photos: [
          'PXL_20230825_162506459.jpg',
          'PXL_20230825_212741148.jpg',
          'PXL_20230829_225325304.jpg',
          'PXL_20230907_172844004.jpg',
          'PXL_20230911_181844320.jpg',
          'PXL_20230911_183623813.jpg',
        ],
        title: 'Recent Tankless Installs',
        subtitle: 'Tankless water heater installs and upgrades across Northern California.',
      }}
          />
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Is Tankless Right for Your Redding Home?
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              A tankless water heater heats water only when you turn on a tap, instead of keeping
              40 to 50 gallons hot all day the way a traditional tank does. For a Redding
              household that runs back-to-back showers in the morning or fills a deep tub, that
              means hot water that does not run out partway through. It also means you are not
              paying to reheat a full tank all day while everyone is at work or school.
            </p>
            <p>
              Tankless is not automatically the right answer for every home, and we will tell you so
              before you spend a dollar. Units are sized by flow rate (gallons per minute) and by the
              incoming groundwater temperature, and Redding winters bring colder inlet water than the
              summer does. If your household regularly runs multiple high-demand fixtures at the same
              time, a single small unit can struggle. During the free consultation we measure your
              real hot-water demand and recommend a unit that keeps up year-round, rather than selling
              you the biggest model on the truck.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            What a Tankless Install Actually Involves
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Swapping a tank for a tankless unit is more involved than a like-for-like tank
              replacement, and an honest plumber will walk you through all of it up front. Many older
              Redding homes were plumbed with a gas line sized for a standard tank, and tankless
              burners draw considerably more gas at peak, so the supply line often needs to be
              upsized. Tankless units also vent differently, so we install the correct concentric or
              dedicated venting for your model. We pull the old tank, dispose of it, mount the new
              unit, make the gas, water, and venting connections, and pressure-test the work before we
              leave.
            </p>
            <p>
              Redding's hard, mineral-heavy water is hard on any water heater, and tankless units are
              no exception — scale builds up on the heat exchanger over time. We size and install with
              that in mind and explain the periodic descaling flush that keeps a tankless unit running
              efficiently for its full 20-plus-year life. Every job is properly permitted where
              required and quoted in full before we start, so the price you approve is the price you
              pay.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            Why Redding Homeowners Choose Topline
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Topline Plumbing has served the Redding area since 1998 — family owned and operated,
              fully licensed under California CSLB #596557, bonded, and insured. We install Navien,
              Rinnai, Noritz, and Rheem tankless systems and match the brand and model to your home
              instead of pushing one line. You get upfront pricing, an honest repair-versus-upgrade
              recommendation, and clean work backed by our 5.0 Google rating. Call (530) 704-6989,
              Monday through Friday 8:00a to 4:30p, to book a free tankless consultation.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Plumbing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/services/water-heater-repair" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Water Heater Repair →</span></Link>
            <Link href="/water-heater-replacement-redding" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Water Heater Replacement in Redding →</span></Link>
            <Link href="/services/leak-detection" className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-md transition-all"><span className="font-semibold text-gray-900">Leak Detection →</span></Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-primary font-semibold hover:underline">View all plumbing services →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
