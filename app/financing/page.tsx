import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';

export const metadata: Metadata = {
  title: 'Flexible Payment Options for Plumbing | Topline Plumbing Redding',
  description:
    'Affordable plumbing solutions in Redding, CA. Upfront pricing, no hidden fees, and flexible payment arrangements for major plumbing projects. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/financing' },
  openGraph: {
    title: 'Flexible Payment Options | Topline Plumbing Redding',
    description:
      'Affordable plumbing with upfront pricing and flexible payment arrangements for major projects. Call (530) 704-6989.',
    url: 'https://toplineplumbingco.com/financing',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Flexible Payment Options',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const pricingExamples = [
  {
    service: 'Drain Cleaning',
    range: '$130 – $800',
    note: 'Most clogs cleared same-day',
    href: '/cost/drain-cleaning',
  },
  {
    service: 'Water Heater Replacement',
    range: '$1,200 – $3,500',
    note: 'Installed same-day when in stock',
    href: '/cost/water-heater-replacement',
  },
  {
    service: 'Tankless Installation',
    range: '$3,000 – $6,500',
    note: 'Flexible payment available',
    href: '/cost/tankless-installation',
  },
  {
    service: 'Emergency Plumbing',
    range: '$150 – $1,500',
    note: 'Same rate 24/7 — no after-hours premium',
    href: '/cost/emergency-plumbing',
  },
  {
    service: 'Whole-Home Repiping',
    range: '$4,000 – $15,000',
    note: 'Flexible payment available',
    href: '/cost/repiping',
  },
  {
    service: 'Sewer Line Repair',
    range: '$400 – $25,000',
    note: 'Trenchless options available',
    href: '/services/sewer-line',
  },
];

const financingFAQs = [
  {
    question: 'Do you offer financing for plumbing repairs?',
    answer:
      'For major projects like whole-home repiping, water heater replacements, and sewer line repairs, we can discuss flexible payment arrangements that work for your budget. Call us at (530) 704-6989 to discuss your specific situation.',
  },
  {
    question: 'Do you charge extra for emergency or after-hours service?',
    answer:
      'No. Topline Plumbing charges the same rate 24/7. There is no after-hours premium, weekend surcharge, or holiday markup. The price we quote is the price you pay, day or night.',
  },
  {
    question: 'How does upfront pricing work?',
    answer:
      'Our plumber diagnoses the issue, explains what needs to be done, and gives you the exact price before any work begins. You approve the price first. No hourly rates, no surprise charges, no hidden fees.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, personal checks, and all major credit and debit cards (Visa, Mastercard, American Express, Discover). Payment is due upon completion of work.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'We offer free phone estimates for straightforward jobs. For complex issues that require an on-site diagnosis, there may be a diagnostic fee — which we waive if you hire us to complete the repair.',
  },
];

export default function FinancingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'Payment Options', url: 'https://toplineplumbingco.com/financing' },
        ]}
      />
      <FAQSchema faqs={financingFAQs} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight text-white">
            Affordable Plumbing with Upfront Pricing
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            No surprises. No hidden fees. Know your price before we start — and
            flexible payment arrangements for major projects.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-12 text-center">
            How Our Pricing Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Diagnose',
                desc: 'Our plumber arrives, inspects the issue, and explains exactly what\'s going on — in plain English, not plumber-speak.',
              },
              {
                step: '2',
                title: 'Quote',
                desc: 'You get the total price upfront before any work begins. No hourly rates, no parts markups, no "well, while we\'re here..." upsells.',
              },
              {
                step: '3',
                title: 'Approve & Fix',
                desc: 'You say yes, we fix it. You say no, you owe nothing. The price you approve is the price you pay — guaranteed.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Pricing */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 text-center">
            Typical Plumbing Costs in Redding
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
            Real pricing from real jobs. Every project is quoted individually, but these ranges give you a ballpark.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingExamples.map((item) => (
              <Link
                key={item.service}
                href={item.href}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 p-6 transition-all hover:-translate-y-1 block group"
              >
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-primary transition-colors mb-1">
                  {item.service}
                </h3>
                <p className="text-2xl font-bold text-primary mb-2">{item.range}</p>
                <p className="text-gray-500 text-sm">{item.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-12 text-center">
            Payment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Standard Payment</h3>
              <ul className="space-y-3 text-gray-700">
                {['Cash', 'Personal Check', 'Visa / Mastercard', 'American Express', 'Discover', 'Debit Cards'].map((method) => (
                  <li key={method} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {method}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm mt-4">Payment due upon completion of work.</p>
            </div>
            <div className="bg-navy-900 rounded-2xl text-white p-8">
              <h3 className="text-xl font-bold text-white mb-4">Flexible Payment Arrangements</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                For major plumbing projects — repiping, water heater replacements,
                sewer line repairs — we understand the cost can be significant.
              </p>
              <p className="text-white/90 leading-relaxed mb-6">
                Call us to discuss flexible payment arrangements that work for your
                budget. We&apos;ll work with you to find a solution so you can get the
                plumbing repair you need without the financial stress.
              </p>
              <a
                href="tel:5307046989"
                className="w-full h-12 px-6 bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Discuss Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-8">
            Our Pricing Promise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              { title: 'No Hidden Fees', desc: 'The price we quote is the price you pay. Period.' },
              { title: 'No After-Hours Premium', desc: 'Same rate at 2am as 2pm. Emergencies don\'t wait for business hours.' },
              { title: 'No Pressure', desc: 'Decline the quote and owe nothing. We\'re here to help, not sell.' },
              { title: 'No Hourly Rates', desc: 'Flat-rate pricing so you\'re never watching the clock.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-navy-900">{item.title}</h3>
                  <p className="text-gray-600 text-[15px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-navy-900 mb-12">
            Pricing & Payment FAQ
          </h2>
          <div className="space-y-4 md:space-y-6">
            {financingFAQs.map((faq, i) => (
              <article
                key={i}
                className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg md:text-xl font-heading font-bold text-navy-900 mb-3 leading-snug">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Get Your Free Estimate Today
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Upfront pricing, flexible payment options, and honest plumbing from a
            company that&apos;s been in Redding since 1998.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5307046989"
              className="h-14 px-10 bg-primary text-white font-btn font-bold rounded-full inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: (530) 704-6989
            </a>
            <Link
              href="/contact"
              className="h-14 px-10 bg-white text-navy-900 font-btn font-bold rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              Request an Estimate Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
