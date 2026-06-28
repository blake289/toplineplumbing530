import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';
import FAQSection from '@/components/layout/FAQSection';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-anderson#service',
  name: 'Emergency Plumber in Anderson, CA',
  serviceType: 'Emergency Plumbing',
  description:
    'Same-day emergency plumbing in Anderson, CA during business hours (Mon–Fri 8a–4:30p) for burst pipes, sewer backups, water heater floods, and gas-line concerns. Includes well-pump and pressure-tank failures, manufactured-home plumbing, and septic-connected properties. Upfront pricing. Licensed plumber CSLB #596557, serving the Redding area since 1998.',
  category: 'Plumbing',
  url: 'https://toplineplumbingco.com/emergency-plumber-anderson',
  provider: { '@id': 'https://toplineplumbingco.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Anderson', sameAs: 'https://en.wikipedia.org/wiki/Anderson,_California' },
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
    name: 'Emergency Plumbing Services in Anderson, CA',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Burst Pipe Repair',
          serviceType: 'Emergency Pipe Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sewer Backup & Main Line Clearing',
          serviceType: 'Sewer Backup Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water Heater Flood & Leak Repair',
          serviceType: 'Water Heater Emergency Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Well Pump & Pressure Tank Service',
          serviceType: 'Well System Repair',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Gas Line Leak Inspection',
          serviceType: 'Gas Line Repair',
        },
      },
    ],
  },
  audience: { '@type': 'Audience', audienceType: 'Homeowners' },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://toplineplumbingco.com/emergency-plumber-anderson#webpage',
  url: 'https://toplineplumbingco.com/emergency-plumber-anderson',
  name: 'Emergency Plumber in Anderson, CA — Same-Day Response During Business Hours',
  description:
    'Emergency plumber serving Anderson, CA. Same-day response for burst pipes, sewer backups, and water heater floods during business hours from a licensed local plumber since 1998.',
  inLanguage: 'en-US',
  isPartOf: { '@id': 'https://toplineplumbingco.com/#website' },
  about: { '@id': 'https://toplineplumbingco.com/emergency-plumber-anderson#service' },
};

export const metadata: Metadata = {
  title: 'Emergency Plumber Anderson, CA | Topline Plumbing',
  description:
    'Emergency plumber in Anderson, CA. Same-day response for burst pipes, sewer backups, and water heater floods. Licensed since 1998. Call (530) 704-6989.',
  alternates: {
    canonical: 'https://toplineplumbingco.com/emergency-plumber-anderson',
  },
  openGraph: {
    title: 'Emergency Plumber Anderson, CA | Topline Plumbing',
    description:
      'Emergency plumber in Anderson, CA. Same-day response for burst pipes, sewer backups, and water heater floods. Licensed since 1998. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/emergency-plumber-anderson',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/truck.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Emergency Plumber in Anderson, CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const emergencyFAQs = [
  {
    question: 'How fast can an emergency plumber get to Anderson, CA?',
    answer:
      "During business hours (Mon–Fri 8:00a–4:30p), Topline typically reaches Anderson the same day — Anderson is 10 miles south of our Redding base on I-5. Call (530) 704-6989 and we'll tell you straight whether we can be there today. We service the whole Anderson area, including Happy Valley, Cottonwood, and surrounding rural Shasta County addresses.",
  },
  {
    question: 'When does Topline Plumbing handle emergencies in Anderson?',
    answer:
      "Topline handles emergency plumbing during business hours: Monday through Friday, 8:00a to 4:30p. We are not a 24/7 service. For after-hours issues, text (530) 704-6989 and we respond first thing the next business day. For an active safety issue outside our hours — a gas leak or major flood — call 911 and shut off your main water valve until we open.",
  },
  {
    question: 'How much does an emergency plumber cost in Anderson, CA?',
    answer:
      "Every emergency call is quoted upfront before any work starts — no surprise charges, and no after-hours markup, because we work standard business hours. Emergency calls during our hours are charged at our standard rate. Call (530) 704-6989 and we'll give you a clear quote before we dispatch.",
  },
  {
    question: 'What should I do while waiting for the plumber in an Anderson emergency?',
    answer:
      "Shut off the main water supply to stop active flooding. On well-fed Anderson properties, shut off the valve at the pressure tank. For a water heater leak, turn off the cold water inlet valve at the top of the tank. For a gas smell, leave the building immediately and call your gas company before calling a plumber.",
  },
  {
    question: 'Do you handle well-pump and pressure-tank emergencies in rural Anderson?',
    answer:
      "Yes. Many properties toward Cottonwood Creek and rural Anderson run on well water and septic. We service well-fed plumbing, pressure tanks, and the water lines from the well to the house, and we coordinate with well/pump specialists when a pump replacement is needed. A 'no water' or 'low pressure' call on a well system is something we handle regularly.",
  },
  {
    question: 'Can you handle plumbing emergencies in Anderson manufactured and mobile homes?',
    answer:
      "Yes. Anderson has a number of manufactured-home communities, and those homes have their own plumbing standards. Supply lines, P-traps, and water heater closets need the right materials and fittings. We've worked on manufactured-home plumbing throughout the Anderson area and bring the correct parts to do it right.",
  },
  {
    question: 'Is Topline Plumbing a licensed emergency plumber?',
    answer:
      'Yes. Topline Plumbing is a licensed, bonded, and insured California plumbing contractor — CSLB License #596557 — serving the Redding area since 1998. We are family owned and operated, with a 5.0 perfect rating on Google.',
  },
  {
    question: 'What counts as a plumbing emergency?',
    answer:
      'Common plumbing emergencies include burst pipes, major leaks causing water damage, complete loss of water, sewage backups, gas line problems, water heater flooding, and any situation where water is actively damaging your home or property. If you are unsure, call (530) 704-6989 during business hours and we will help you assess it.',
  },
];

export default function EmergencyPlumberAndersonPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          {
            name: 'Emergency Plumber Anderson',
            url: 'https://toplineplumbingco.com/emergency-plumber-anderson',
          },
        ]}
      />
      <FAQSchema faqs={emergencyFAQs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center lg:text-left">
          <p className="uppercase tracking-widest text-sm md:text-base text-primary-light font-semibold mb-4">
            Same-Day Emergency Response · Anderson, CA · Licensed Since 1998
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
            Emergency Plumber in Anderson, CA
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-3xl lg:mx-0 mx-auto">
            Topline Plumbing is a licensed (CSLB #596557) emergency plumber serving Anderson, CA. We
            offer same-day service during business hours (Mon–Fri 8a–4:30p) with upfront pricing.
            Call (530) 704-6989.
          </p>

          <div className="inline-block bg-primary/15 border border-primary/40 rounded-full px-6 py-3 mb-8 text-base md:text-lg text-white font-semibold">
            <span className="text-primary-light">Anderson is 10 min south on I-5 →</span> typically
            same-day during business hours
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
            Mon–Fri 8:00a–4:30p · CSLB #596557 · Same-day Anderson response during business hours
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">3,000+</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">of Jobs Since 1998</div>
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
              <div className="text-sm md:text-base text-gray-600 mt-1">Owned & Operated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Response promise */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              Our Emergency Response Promise in Anderson
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When water is actively damaging your home, you need a real local plumber who picks up
              the phone — not a corporate dispatch center. Here is what we promise during business
              hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Live Dispatch, Mon–Fri 8a–4:30p',
                body: "Call (530) 704-6989 during business hours and you'll reach a real local team, not a call center. We're not a 24/7 operation — we're straight with you about that — but during our hours we move fast.",
              },
              {
                title: 'Same-Day Response',
                body: 'Anderson is 10 minutes south of our Redding base on I-5, so dispatch is quick — typically same-day during business hours. Same-day scheduling for Anderson emergencies whenever we have an open truck.',
              },
              {
                title: 'Upfront Pricing — Even in Emergencies',
                body: "You'll know the cost before we start. No after-hours markup, no surprise charges, no weekend surcharge pricing — because we work standard business hours and quote every job upfront.",
              },
              {
                title: 'Fully Stocked Trucks',
                body: 'We carry parts for most repairs so we can fix it on the spot — including the right materials for manufactured-home plumbing and well-system components common in rural Anderson.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-navy-900 text-white rounded-xl max-w-4xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-2">
              After Hours, Evenings, or Weekends?
            </h3>
            <p className="text-gray-200">
              Topline is closed evenings and weekends. For an active emergency outside business
              hours: shut off your main water valve to stop the flooding, call 911 if it&rsquo;s a
              safety issue (gas leak, major flood, sewage backing up into living areas), then text{' '}
              <a href="tel:5307046989" className="text-primary-light font-semibold hover:underline">
                (530) 704-6989
              </a>{' '}
              and we&rsquo;ll respond first thing the next business day.
            </p>
          </div>
        </div>
      </section>

      {/* What to do before we arrive */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-3">
              What to Do Before We Arrive
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two of the most damaging Anderson emergencies are burst pipes and sewage backups.
              Here&rsquo;s how to limit the damage while we&rsquo;re on the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">Burst Pipe</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>
                    Shut off the main water supply. On well-fed Anderson properties, shut off the
                    valve at the pressure tank.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Turn off the water heater (gas to pilot, or flip the breaker).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>Open faucets to drain remaining water from the lines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Move valuables away from the affected area and document the damage.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">Sewage Backup</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Stop using all water in the house immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Keep people and pets away from the affected area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>
                    On septic-connected Anderson homes, do not run laundry or dishwashers — it adds
                    volume to a system that&rsquo;s already backing up.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Call us immediately — don&rsquo;t attempt DIY repairs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            Why Anderson Homes Call Topline for Emergencies
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Anderson sits just south of Redding on I-5 — a 10-minute drive from our base. The town
              has a wide mix: older single-family homes near downtown, newer subdivisions off
              Riverside Ave, manufactured-home communities, and rural parcels stretching out toward
              Happy Valley and Cottonwood. Plumbing here ranges from city water to private wells,
              depending on where you are — and a plumbing emergency looks different in each one.
            </p>
            <p>
              Properties closer to Cottonwood Creek and rural Anderson are often on well water and
              septic. That changes how we handle an emergency: there&rsquo;s a pressure tank and
              well pump in the picture, and a sewage backup on a septic-connected home needs careful
              handling so the system isn&rsquo;t overloaded. We don&rsquo;t pour caustic chemicals
              into septic-fed lines, and we know to check the pressure tank before assuming the
              house line is the problem.
            </p>
            <p>
              In the newer Riverside Ave subdivisions and in-town homes on city water — served by the
              City of Anderson water utility — the calls are more familiar: burst supply lines,
              water heater floods, main-line backups. And in
              Anderson&rsquo;s manufactured and mobile homes, the supply lines, P-traps, and water
              heater closets follow their own standards, so we bring the right materials to do it
              correctly the first time. Whatever your Anderson address, we&rsquo;ve seen it, and we
              show up with the parts to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* Why Topline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
              Why Anderson Homeowners Call Topline First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local, licensed, and family-run since 1998 — not a corporate dispatch operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fast From Redding',
                body: 'Anderson is 10 miles south on I-5, so we typically reach you the same day during business hours. Close enough to be your true local emergency plumber.',
              },
              {
                title: 'Upfront Quote Before Work Starts',
                body: "Even in an emergency, you see the price before we lift a wrench. No surprise charges, no after-hours markup — we work standard business hours.",
              },
              {
                title: 'Well & Septic Savvy',
                body: 'Rural Anderson runs on wells and septic. We service pressure tanks, well lines, and septic-connected drains the right way — no caustic chemicals dumped into a septic system.',
              },
              {
                title: 'Manufactured-Home Specialists',
                body: "Anderson's mobile and manufactured homes have their own plumbing standards. We carry the correct supply lines, P-traps, and fittings so the repair holds.",
              },
              {
                title: 'Real Local Business Hours',
                body: 'Mon–Fri 8a–4:30p — straightforward hours from a real local family business. We tell you straight that we are not a 24/7 service.',
              },
              {
                title: '5.0 Rating, 3,000+ Jobs',
                body: 'A 5.0 perfect rating on Google and 3,000+ jobs since 1998. Licensed, bonded, and insured — CSLB #596557.',
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

      {/* Related services / internal links */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
            Related Topline Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              ['/services/emergency', 'Emergency Plumbing (All Services)'],
              ['/areas/anderson', 'Anderson Service Area'],
              ['/drain-cleaning-anderson', 'Drain Cleaning in Anderson'],
              ['/emergency-plumber-redding', 'Emergency Plumber in Redding'],
              ['/emergency-plumber-red-bluff', 'Emergency Plumber in Red Bluff'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-navy-900 font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 md:py-20 bg-white">
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
            Trusted by Anderson-Area Homeowners
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            5.0 perfect rating on Google · Every review counts
          </p>
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

      {/* Service area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Emergency Plumbing Across Shasta County &amp; Beyond
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Same-day response in city limits during business hours. Rural and foothill calls
            typically scheduled the same day when a truck is open.
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
        title="Emergency Plumber FAQ — Anderson, CA"
        background="white"
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Plumbing Emergency in Anderson?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Licensed, local, and family-run since 1998. Call now for same-day response during
            business hours.
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
