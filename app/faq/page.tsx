import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/layout/BreadcrumbSchema';
import FAQSchema from '@/components/layout/FAQSchema';

export const metadata: Metadata = {
  title: 'Plumbing FAQ — Common Questions Answered | Topline Plumbing Redding',
  description:
    'Answers to the most common plumbing questions from Redding homeowners. Emergency plumbing, water heaters, drain cleaning, pricing, and more. Licensed plumber since 1998.',
  alternates: { canonical: 'https://toplineplumbingco.com/faq' },
  openGraph: {
    title: 'Plumbing FAQ — Common Questions | Topline Plumbing',
    description:
      'Answers to the most common plumbing questions from Redding homeowners — from a licensed plumber since 1998.',
    url: 'https://toplineplumbingco.com/faq',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing FAQ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

interface FAQCategory {
  name: string;
  id: string;
  faqs: { question: string; answer: string }[];
}

const faqCategories: FAQCategory[] = [
  {
    name: 'Emergency Plumbing',
    id: 'emergency',
    faqs: [
      {
        question: 'What are your hours for emergency plumbing?',
        answer:
          'Topline Plumbing handles emergency plumbing during business hours: Monday through Friday, 8:00a to 4:30p. For after-hours issues, text (530) 704-6989 and we\'ll respond first thing the next business day. For active emergencies outside our hours, call 911 if it\'s a safety issue (gas leak, major flood) or shut off your water at the main valve until we open.',
      },
      {
        question: 'How fast can a plumber get to my house in an emergency?',
        answer:
          'During business hours (Mon–Fri 8:00a–4:30p), we aim to respond same-day to emergencies in Redding, Anderson, and Shasta Lake. For extended service areas like Chico, Paradise, and Oroville, we\'ll schedule as quickly as routing allows.',
      },
      {
        question: 'Do you charge extra for emergency calls?',
        answer:
          'No. Topline Plumbing charges the same rate for emergency work as standard calls during our business hours. No surprise upcharges — the price we quote is the price you pay.',
      },
      {
        question: 'What should I do if a pipe bursts in my house?',
        answer:
          'First, shut off the main water valve (usually near the water meter or where the main line enters your home). Then turn off your water heater to prevent damage. Open faucets to drain remaining water. Call us at (530) 704-6989 during business hours — we\'ll get a plumber to you as fast as we can.',
      },
    ],
  },
  {
    name: 'Water Heaters',
    id: 'water-heaters',
    faqs: [
      {
        question: 'How long does a water heater last?',
        answer:
          'A standard tank water heater typically lasts 8–12 years. Tankless water heaters last 15–20 years with proper maintenance. If your water heater is over 10 years old and showing signs of rust, leaking, or inconsistent heating, it\'s time to consider replacement.',
      },
      {
        question: 'How much does it cost to replace a water heater in Redding?',
        answer:
          'Replacement cost varies by job — the unit, installation complexity, permits, and whether you\'re going tank or tankless all factor in. We quote every replacement in writing before any work begins, so you know the exact price before you approve. Call (530) 704-6989 for a free written quote.',
      },
      {
        question: 'Should I upgrade to a tankless water heater?',
        answer:
          'Tankless water heaters provide endless hot water and save 20–30% on energy costs. They\'re ideal for larger households or homes where you frequently run out of hot water. We can assess your home and give you an honest recommendation — sometimes a standard tank is the better choice.',
      },
      {
        question: 'Can you do same-day water heater replacement?',
        answer:
          'Yes. We stock the most common water heater sizes and can typically complete a same-day replacement in 2–4 hours. For tankless conversions or unusual configurations, we\'ll schedule within 1–2 business days.',
      },
    ],
  },
  {
    name: 'Drain Cleaning',
    id: 'drains',
    faqs: [
      {
        question: 'How much does drain cleaning cost?',
        answer:
          'Drain cleaning cost varies by job — a simple single-drain clear is different from a main line clog or one requiring camera inspection or hydrojetting. We always quote the price upfront before starting work. Call (530) 704-6989 for a free estimate.',
      },
      {
        question: 'What causes frequent drain clogs?',
        answer:
          'The most common causes are hair buildup in bathroom drains, grease and food waste in kitchen drains, and tree root intrusion in main sewer lines. If you\'re dealing with recurring clogs, a camera inspection can identify the root cause so we fix it permanently instead of just clearing the symptom.',
      },
      {
        question: 'Do you offer sewer camera inspections?',
        answer:
          'Yes. We use high-definition sewer cameras to inspect drain lines and sewer pipes. Camera inspections help us identify the exact location and cause of clogs, cracks, root intrusion, and pipe deterioration — so we fix the right problem the first time.',
      },
    ],
  },
  {
    name: 'Pricing & Payment',
    id: 'pricing',
    faqs: [
      {
        question: 'How does your pricing work?',
        answer:
          'We provide upfront, flat-rate pricing before any work begins. Our plumber will diagnose the issue, explain what needs to be done, and give you the exact price. You approve it before we start. No hourly rates, no surprise charges.',
      },
      {
        question: 'Do you offer free estimates?',
        answer:
          'We offer free phone estimates for straightforward jobs. For complex issues that require an on-site diagnosis (like slab leaks or sewer problems), there may be a diagnostic fee — which we waive if you hire us to do the repair.',
      },
      {
        question: 'What forms of payment do you accept?',
        answer:
          'We accept cash, checks, all major credit cards, and debit cards. Payment is due upon completion of work.',
      },
      {
        question: 'Do you offer financing for large plumbing jobs?',
        answer:
          'For major projects like whole-home repiping, water heater replacements, or sewer line repairs, we can discuss flexible payment arrangements. Call us at (530) 704-6989 to discuss your options.',
      },
    ],
  },
  {
    name: 'Licensing & Service Area',
    id: 'licensing',
    faqs: [
      {
        question: 'Are you licensed and insured?',
        answer:
          'Yes. Topline Plumbing is a fully licensed California plumbing contractor, bonded and insured. Every plumber on our team holds the required state licenses. We carry general liability and workers\' compensation insurance on every job.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We serve 15+ cities across Northern California including Redding, Anderson, Shasta Lake, Palo Cedro, Bella Vista, Red Bluff, Chico, Paradise, Oroville, Yuba City, Marysville, Auburn, Grass Valley, Truckee, and South Lake Tahoe.',
      },
      {
        question: 'How long have you been in business?',
        answer:
          'Topline Plumbing was founded by Joe Torculas in 1998. We\'ve been serving Redding and Northern California for over 27 years, completing thousands of residential and commercial plumbing jobs.',
      },
    ],
  },
  {
    name: 'Specific Services',
    id: 'services',
    faqs: [
      {
        question: 'Do you do gas line work?',
        answer:
          'Yes. We are licensed for gas line installation, repair, and leak detection. Gas line work includes new gas line runs for appliances, gas leak repair, gas line pressure testing, and gas meter connections.',
      },
      {
        question: 'Can you repipe my entire house?',
        answer:
          'Yes. We specialize in whole-home repiping with PEX and copper. If you have galvanized or polybutylene pipes, repiping is often the best long-term solution. Most whole-home repipes are completed in 1–3 days depending on home size.',
      },
      {
        question: 'Do you install garbage disposals?',
        answer:
          'Yes. We install, repair, and replace garbage disposals, kitchen faucets, bathroom faucets, toilets, sinks, and showers. Fixture installation is one of our most common service calls.',
      },
      {
        question: 'Do you work on commercial properties?',
        answer:
          'Yes. In addition to residential plumbing, we provide commercial plumbing service for businesses, restaurants, and multi-unit properties in Redding and Northern California.',
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://toplineplumbingco.com' },
          { name: 'FAQ', url: 'https://toplineplumbingco.com/faq' },
        ]}
      />
      <FAQSchema faqs={allFaqs} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            Straight answers from a licensed Redding plumber. No runaround, no
            sales pitch — just the information you need to make a smart decision
            about your plumbing.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-6 bg-gray-100 border-b border-gray-200 sticky top-[116px] z-30">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium text-navy-900 bg-white border border-gray-200 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
          {faqCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16 last:mb-0 scroll-mt-48">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-8 pb-4 border-b-2 border-primary">
                {category.name}
              </h2>
              <div className="space-y-4 md:space-y-6">
                {category.faqs.map((faq, i) => (
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
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We&apos;re happy to answer any plumbing question — no obligation, no
            sales pressure. Call us or send a message and a real plumber will get
            back to you.
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
              className="h-14 px-10 bg-white text-navy-900 font-btn font-bold rounded-full inline-flex items-center justify-center border-2 border-navy-900 hover:bg-navy-900 hover:text-white transition-all text-lg"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
