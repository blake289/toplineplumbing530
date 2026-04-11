import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  background?: 'white' | 'gray';
}

/**
 * Visible FAQ section rendered as semantic HTML (h2 + h3 + p).
 * Pair with FAQSchema for the JSON-LD side — this component handles
 * the on-page rendering that Google's Helpful Content update rewards
 * and AI crawlers weight more heavily when it matches the schema.
 */
export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  background = 'gray',
}: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-navy-900 mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className={`space-y-4 md:space-y-6 ${subtitle ? '' : 'mt-12'}`}>
          {faqs.map((faq, i) => (
            <article
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 transition-shadow hover:shadow-md"
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
  );
}
