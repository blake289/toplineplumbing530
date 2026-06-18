import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-red-bluff#service',
  name: 'Emergency Plumber in Red Bluff, CA',
  serviceType: 'Emergency Plumbing',
  description:
    'Same-day emergency plumbing in Red Bluff, CA during business hours (Mon–Fri 8a–4:30p). Burst pipes, sewer backups, water heater floods, and gas-related leaks handled by a licensed local plumber — CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/emergency-plumber-red-bluff',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Red Bluff', sameAs: 'https://en.wikipedia.org/wiki/Red_Bluff,_California' },
    { '@type': 'AdministrativeArea', name: 'Tehama County, CA' },
  ],
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:30',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Emergency Plumbing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Burst Pipe Repair',
          serviceType: 'Burst Pipe Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer Backup Clearing',
          serviceType: 'Sewer Backup Clearing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Heater Flood / Leak Response',
          serviceType: 'Water Heater Emergency Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Major Leak Detection & Shut-Off',
          serviceType: 'Leak Repair',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-red-bluff#webpage',
  url: 'https://toplineplumbingco.com/emergency-plumber-red-bluff',
  name: 'Emergency Plumber in Red Bluff, CA — Same-Day Response During Business Hours',
  description:
    'Emergency plumber serving Red Bluff and Tehama County. Same-day response for burst pipes, sewer backups, and water heater floods during business hours. Licensed CSLB #596557, serving the area since 1998.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/emergency-plumber-red-bluff#service' },
};

export const metadata: Metadata = {
  title: 'Emergency Plumber Red Bluff, CA | Topline Plumbing',
  description:
    'Emergency plumber in Red Bluff, CA. Same-day response for burst pipes, sewer backups, and water heater floods. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/emergency-plumber-red-bluff',
  },
  openGraph: {
    title: 'Emergency Plumber Red Bluff, CA | Topline Plumbing',
    description:
      'Emergency plumber in Red Bluff, CA. Same-day response for burst pipes, sewer backups, and water heater floods. Licensed since 1998. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/emergency-plumber-red-bluff',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Emergency Plumber in Red Bluff, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const emergencyFAQs = [
  {
    question: 'How fast can a plumber get to Red Bluff?',
    answer:
      'During business hours (Mon–Fri 8a–4:30p), typical arrival in Red Bluff is 45–75 minutes — usually under an hour. Red Bluff is 30 miles south of Redding on I-5, and we dispatch from the Redding area. Call (530) 704-6989 and we will tell you straight when we can be there.',
  },
  {
    question: 'Does Topline Plumbing offer 24/7 emergency service in Red Bluff?',
    answer:
      'No — we are honest about this. Topline handles emergency plumbing during business hours: Monday through Friday, 8:00a to 4:30p. For after-hours problems, text (530) 704-6989 and we respond first thing the next business day. If it is a safety emergency (gas leak or major flood), call 911 and shut off your main water valve until we open.',
  },
  {
    question: 'What should I do while waiting for an emergency plumber in Red Bluff?',
    answer:
      'Shut off the main water valve to stop active flooding, then turn off the water heater and open faucets to drain the lines. For a gas smell, leave the building immediately and call your gas company. For a sewage backup, stop using all water and keep people and pets away. Then call (530) 704-6989.',
  },
  {
    question: 'How much does an emergency plumber cost in Red Bluff, CA?',
    answer:
      'Every emergency call is quoted upfront before any work starts — no surprise charges, and no after-hours markup because we run real business hours. The price depends on the job (a burst supply line is different from a main sewer backup). Call (530) 704-6989 for a clear quote before we dispatch.',
  },
  {
    question: 'Do you handle emergencies in older Red Bluff historic-district homes?',
    answer:
      "Yes. Red Bluff's 1850s downtown has some of the oldest housing we service — homes that layer original cast iron drains, galvanized supply, and partial copper retrofits in the same structure. That mix makes emergencies trickier: a failure behind one wall can involve three different pipe materials. We diagnose what is actually behind the wall before we cut into it.",
  },
  {
    question: 'Can you respond to ranch and well/septic properties west of Red Bluff?',
    answer:
      'Yes. We service ranch properties west of town that run on wells and septic, with longer service lines and more exposed outdoor plumbing. We handle the same-day response during business hours; rural addresses may land at the longer end of the 45–75 minute window.',
  },
  {
    question: 'Is Topline Plumbing licensed to work in Red Bluff and Tehama County?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area and Tehama County since 1998. Family owned and operated, with a 5.0 perfect rating on Google.',
  },
];

export default function EmergencyPlumberRedBluffPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Emergency Plumber Red Bluff',
            url: 'https://toplineplumbingco.com/emergency-plumber-red-bluff',
          },
        ]}
      />
      <FAQSchema faqs={emergencyFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
              Serving Red Bluff &amp; Tehama County · Licensed Since 1998
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
              Emergency Plumber in Red Bluff, CA
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              Topline Plumbing is a licensed (CSLB #596557) emergency plumber serving Red Bluff, CA.
              We offer same-day emergency response during business hours (Mon–Fri 8a–4:30p) with
              upfront pricing — burst pipes, sewer backups, and water heater floods. Call (530) 704-6989.
            </p>

            <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
              <span className="text-primary-light">Mon–Fri 8a–4:30p →</span> typical arrival in Red
              Bluff 45–75 minutes
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
              Mon–Fri 8:00a–4:30p · CSLB #596557 · Typical Red Bluff arrival 45–75 minutes
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

      {/* Honest hours / after-hours framing */}
      <section className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-3">
            Straight Talk on Our Hours
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are not a 24/7 dispatch center, and we will not pretend to be. Topline handles Red
            Bluff emergencies live during business hours — <strong>Mon–Fri 8:00a–4:30p</strong>. For
            an after-hours problem, text <a href="tel:5307046989" className="text-primary font-semibold hover:underline">(530) 704-6989</a> and
            we respond first thing the next business day. For a safety issue (gas leak, major flood),
            call 911 and shut off your main water valve.
          </p>
        </div>
      </section>

      {/* Service sections */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Our Red Bluff Emergency Response
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When water is actively damaging your home, every minute counts. Here is what to expect
              from us — and what to do before we get there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-900 text-white rounded-xl border-2 border-primary p-6 shadow-md">
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Our Emergency Response Promise
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Live dispatch Mon–Fri 8:00a–4:30p</li>
                <li>• Same-day scheduling for Red Bluff emergencies</li>
                <li>• Upfront pricing — you know the cost before we start</li>
                <li>• Fully stocked trucks to fix most problems on the spot</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Before We Arrive — Burst Pipe
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Shut off the main water supply</li>
                <li>• Turn off the water heater</li>
                <li>• Open faucets to drain remaining water</li>
                <li>• Move valuables away from the affected area</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Before We Arrive — Sewage Backup
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Stop using all water in the house</li>
                <li>• Keep people and pets away</li>
                <li>• Call us immediately</li>
                <li>• Do not attempt DIY repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
              Why Red Bluff Homes Call Topline in an Emergency
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Red Bluff is the Tehama County seat, about 30 miles south of Redding on I-5. The
                historic downtown dates to the 1850s — meaning some of the oldest housing stock we
                service anywhere. When a pipe fails in a pre-1920 Red Bluff home, you are rarely
                dealing with one pipe material. Original cast iron drains, galvanized supply, partial
                copper retrofits, and modern fixtures are often layered into the same house, and an
                emergency in one section can involve three different materials behind the wall. We
                diagnose what is actually there before we cut — that is the difference between a clean
                emergency repair and a bigger mess.
              </p>
              <p>
                The City of Red Bluff Water Department draws its supply entirely from deep municipal
                groundwater wells, so the mineral content in that well-sourced water is worth keeping
                in mind for the water heaters and fixtures we get called out on. Summers here are some
                of the hottest in California, and that drives a seasonal spike in two failures we
                respond to: water heater flue and venting problems, and outdoor PVC that splits in the
                summer heat. Both can turn into active leaks fast. Outside
                the historic core, ranch properties west of town run on wells and septic with longer
                service lines and more exposed outdoor plumbing — more places for an emergency to
                start.
              </p>
              <p>
                We have served this region since 1998, and Red Bluff is squarely inside our service
                area — typical arrival is 45–75 minutes during business hours, usually under the hour.
                We bring fully stocked trucks so most emergencies get fixed on the same visit, with the
                price quoted upfront before we touch anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Red Bluff Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and honest about how we work — not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Same-Day During Business Hours',
                body: 'Call during business hours and we schedule same-day for Red Bluff emergencies — typical arrival 45–75 minutes, usually under an hour from the Redding area.',
              },
              {
                title: 'Honest About Our Hours',
                body: 'We are not 24/7 and we say so. Mon–Fri 8a–4:30p live dispatch; after hours, text us and we respond next business day. No fake round-the-clock promises.',
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: 'Even in an emergency, you see the price before we lift a wrench. No after-hours markup, no surprise charges — we run real business hours.',
              },
              {
                title: 'Built for Old Red Bluff Homes',
                body: "Cast iron, galvanized, copper, and modern fixtures layered in one historic house? We diagnose what's actually behind the wall before we cut into it.",
              },
              {
                title: 'Fully Stocked Trucks',
                body: 'We carry parts for most repairs, so the majority of Red Bluff emergencies get fixed on the same visit instead of waiting on a return trip.',
              },
              {
                title: 'Licensed, Bonded & Insured',
                body: 'CSLB License #596557, serving the Redding area and Tehama County since 1998. Family owned and operated with a 5.0 perfect Google rating.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
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
            Trusted by Northern California Homeowners
          </h2>
          <p className="text-lg text-gray-600 mb-6">5.0 perfect rating on Google</p>
          <a
            href="https://g.page/r/CTUWBxm42-YEEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Read all Google reviews →
          </a>
        </div>
      </section>

      {/* Related services + internal links */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-6 text-center">
            Related Plumbing Help in Red Bluff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link
              href="/services/emergency"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Emergency Plumbing</div>
              <div className="text-sm text-gray-600">Our full emergency service overview</div>
            </Link>
            <Link
              href="/drain-cleaning-red-bluff"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Drain Cleaning Red Bluff</div>
              <div className="text-sm text-gray-600">Clogs, sewer lines & camera inspection</div>
            </Link>
            <Link
              href="/areas/red-bluff"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Red Bluff Plumbing</div>
              <div className="text-sm text-gray-600">All services for Red Bluff & Tehama County</div>
            </Link>
            <Link
              href="/emergency-plumber-redding"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Emergency Plumber Redding</div>
              <div className="text-sm text-gray-600">Same-day emergency response in Redding</div>
            </Link>
            <Link
              href="/emergency-plumber-anderson"
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="font-heading font-bold text-navy-900 mb-1">Emergency Plumber Anderson</div>
              <div className="text-sm text-gray-600">Same-day emergency response in Anderson</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Emergency Plumbing Across Our Service Area
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day response in city limits during business hours. Red Bluff and outlying addresses
            typically arrive within 45–75 minutes.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-3xl mx-auto">
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
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={emergencyFAQs}
        title="Emergency Plumber FAQ — Red Bluff, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Plumbing Emergency in Red Bluff?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Call now for same-day response during business hours. Licensed, local, and upfront about
            pricing — and our hours.
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
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Licensed, bonded, insured
          </p>
        </div>
      </section>
    </>
  );
}
