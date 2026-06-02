import { Metadata } from 'next';
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
  '@id': 'https://toplineplumbingco.com/services/fixture-installs#service',
  name: 'Plumbing Fixture Installation in Redding, CA',
  serviceType: 'Plumbing Fixture Installation',
  description:
    'Professional plumbing fixture installation in Redding, CA — sinks, toilets, faucets, showers and tubs, garbage disposals, dishwasher and washing machine hookups, water filtration, and outdoor hose bibs. Customer-supplied fixtures welcome. Upfront pricing, leak-free installs. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/services/fixture-installs',
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
    name: 'Fixture Installation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Faucet Installation & Replacement', serviceType: 'Faucet Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Toilet Installation & Replacement', serviceType: 'Toilet Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garbage Disposal Installation', serviceType: 'Garbage Disposal Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shower & Tub Fixture Installation', serviceType: 'Shower Installation' } },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/services/fixture-installs#webpage',
  url: 'https://toplineplumbingco.com/services/fixture-installs',
  name: 'Fixture Installation in Redding, CA | Topline Plumbing',
  description:
    'Plumbing fixture installation in Redding, CA. Sinks, toilets, faucets, showers, and garbage disposals installed leak-free. Licensed since 1998, CSLB #596557.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/services/fixture-installs#service' },
};

export const metadata: Metadata = {
  title: 'Fixture Installation in Redding, CA | Topline Plumbing',
  description: 'Professional installation for sinks, toilets, faucets, showers, and garbage disposals in Redding. Expert plumbing fixture installation. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/services/fixture-installs' },
  openGraph: {
    title: 'Fixture Installation in Redding, CA | Topline Plumbing',
    description: 'Professional installation for sinks, toilets, faucets, showers, and garbage disposals in Redding. Expert plumbing fixture installation. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/services/fixture-installs',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Fixture Installation Services in Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

const fixtureFAQs = [
  {
    question: 'How much does toilet installation cost in Redding, CA?',
    answer: 'Toilet installation cost varies by job — the complexity of the install and whether the existing flange needs repair both factor in. We quote every job upfront before any work begins. Call (530) 704-6989 for a free estimate with any service.',
  },
  {
    question: 'Can you install a fixture I already purchased?',
    answer: 'Yes. We can install customer-supplied fixtures including toilets, faucets, sinks, showers, and garbage disposals. We recommend calling us before you purchase to make sure the fixture is compatible with your existing plumbing. Call (530) 704-6989.',
  },
  {
    question: 'How long does faucet installation take?',
    answer: 'Most faucet replacements take 30–60 minutes for a standard kitchen or bathroom faucet. Installations involving valve upgrades or supply line work may take longer. We provide upfront pricing before any work begins.',
  },
  {
    question: 'Do you install garbage disposals in Redding?',
    answer: 'Yes. We install all major brands of garbage disposals including InSinkErator, Waste King, and Moen. We also handle wiring if an outlet is already present, or coordinate with an electrician if a new outlet is needed. Call (530) 704-6989.',
  },
  {
    question: 'Do you install shower and tub fixtures?',
    answer: 'Yes. We install shower valves, tub faucets, shower heads, hand sprayers, and complete shower and tub trim kits. For full bathroom remodels or custom tile shower installations, call us to discuss the full scope of work. Call (530) 704-6989.',
  },
];

export default function FixtureInstallsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://toplineplumbingco.com' },
        { name: 'Services', url: 'https://toplineplumbingco.com/services' },
        { name: 'Fixture Installation', url: 'https://toplineplumbingco.com/services/fixture-installs' },
      ]} />
      <FAQSchema faqs={fixtureFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServicePageTemplate
      faqs={fixtureFAQs}
      hero={{
        title: 'Fixture Installation in Redding — Professional Plumbing Upgrades',
        description: [
          "Upgrading your bathroom or kitchen? Installing new fixtures?",
          "Topline Plumbing provides expert installation for all plumbing fixtures including sinks, toilets, faucets, showers, tubs, and garbage disposals. Professional installation ensures no leaks and optimal performance."
        ],
      }}
      services={[
        {
          title: 'Kitchen Fixtures',
          items: [
            'Kitchen sink installation',
            'Faucet installation and replacement',
            'Garbage disposal installation',
            'Dishwasher hookup',
          ],
        },
        {
          title: 'Bathroom Fixtures',
          items: [
            'Toilet installation and replacement',
            'Bathroom sink and vanity installation',
            'Shower and tub installation',
            'Bathroom faucet installation',
          ],
        },
        {
          title: 'Additional Services',
          items: [
            'Water filtration system installation',
            'Washing machine hookup',
            'Ice maker line installation',
            'Outdoor hose bibs and spigots',
          ],
        },
      ]}
      gallery={{
        photos: [
          'PXL_20230825_162604778.MP.jpg',
          'PXL_20230825_213739951.MP.jpg',
          'PXL_20230830_180651564.jpg',
          'PXL_20230907_172913442.jpg',
          'PXL_20230911_181942769.jpg',
          'PXL_20230911_183626309.jpg',
        ],
        title: 'Recent Fixture Installs',
        subtitle: 'Faucets, toilets, sinks, showers, and disposal swaps — clean installs, no callbacks.',
      }}
          />
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            A Fixture Is Only as Good as the Install
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              A new faucet or toilet looks simple, but the part that matters is hidden — the supply
              connections, the wax ring or gasket, the shutoff valves, and how square and level the
              fixture sits. A rushed install is exactly how you end up with a slow drip under the
              cabinet that warps the base, or a toilet that rocks and eventually breaks its seal. We do
              the unglamorous parts right so the fixture stays leak-free and you do not see us back for
              a callback.
            </p>
            <p>
              Older Redding homes add their own wrinkles. Corroded shutoff valves that will not turn,
              a worn toilet flange that needs repair before a new toilet can seat, and supply lines
              that should be replaced while everything is open are all common here. We catch those
              during the job and quote any extra work upfront, so there is no surprise once the old
              fixture comes off.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            Bought It Yourself? We Will Install It
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We are happy to install fixtures you have already purchased — toilets, faucets, sinks,
              showers, tubs, and garbage disposals. The one tip we always give: call us before you buy.
              A quick conversation about your existing plumbing, supply spacing, and drain configuration
              saves you from bringing home a fixture that does not fit, which means a return trip to the
              store and a delayed install. For garbage disposals, we handle the wiring when an outlet is
              already present, or coordinate with an electrician if a new circuit is needed.
            </p>
            <p>
              Most standard faucet swaps run about 30 to 60 minutes; jobs that involve valve upgrades or
              supply-line work take longer. Either way, we give you the price before we start.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-12 mb-6">
            Kitchen, Bathroom, and Everything Else
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              In the kitchen we install sinks, faucets, garbage disposals, and dishwasher hookups. In
              the bathroom we handle toilets, vanity sinks, shower and tub valves, trim kits, shower
              heads, and hand sprayers. Beyond those rooms we install water filtration systems, washing
              machine and ice maker lines, and outdoor hose bibs and spigots. For full bathroom remodels
              or custom tile shower work, call us to walk through the full scope.
            </p>
            <p>
              Topline Plumbing has served the Redding area since 1998 — family owned, licensed under
              California CSLB #596557, bonded, and insured, with a 5.0 Google rating and upfront pricing
              on every job. Call (530) 704-6989, Monday through Friday 8:00a to 4:30p.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
