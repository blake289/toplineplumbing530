import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import FAQSection from '@/components/layout/FAQSection';

interface Stat {
  value: string;
  description: string;
}

interface ServiceDetail {
  title: string;
  items: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface PricingCallout {
  priceRange: string;
  href: string;
  label: string;
}

interface RelatedCallout {
  title: string;
  href: string;
  label: string;
}

interface ServicePageProps {
  hero: {
    title: string;
    description: string[];
    backgroundImage?: string;
  };
  pricingCallout?: PricingCallout;
  relatedCallout?: RelatedCallout;
  stats?: Stat[];
  whenToRepair?: string[];
  whenToReplace?: string[];
  services: ServiceDetail[];
  faqs?: FAQ[];
  ctaText?: string;
}

export default function ServicePageTemplate({
  hero,
  pricingCallout,
  relatedCallout,
  stats,
  whenToRepair,
  whenToReplace,
  services,
  faqs,
  ctaText = "Not sure what you need?",
}: ServicePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight text-white">
            {hero.title}
          </h1>
          {hero.description.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl mb-4 text-white text-opacity-90 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="h-12 px-8 bg-primary text-white font-btn font-bold rounded-xl inline-flex items-center justify-center hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-lg"
            >
              Get Your Free Inspection →
            </Link>
            <a
              href="tel:5307046989"
              className="h-12 px-8 bg-white text-navy-900 font-btn font-bold rounded-xl inline-flex items-center justify-center hover:bg-gray-100 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-lg"
            >
              Call (530) 704-6989
            </a>
          </div>
        </div>
      </section>

      {/* Related Page Callout (if provided) */}
      {relatedCallout && (
        <section className="py-8 md:py-10 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Link
              href={relatedCallout.href}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-200 p-6 md:p-7 transition-all hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-bold mb-1">
                    Related
                  </p>
                  <p className="text-xl md:text-2xl font-heading font-bold text-navy-900">
                    {relatedCallout.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                <span>{relatedCallout.label}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Pricing Callout (if provided) */}
      {pricingCallout && (
        <section className="py-8 md:py-10 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Link
              href={pricingCallout.href}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-200 p-6 md:p-7 transition-all hover:-translate-y-0.5 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-bold mb-1">
                    Typical Cost
                  </p>
                  <p className="text-xl md:text-2xl font-heading font-bold text-navy-900">
                    {pricingCallout.priceRange}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:translate-x-1 transition-transform">
                <span>{pricingCallout.label}</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Stats Section (if provided) */}
      {stats && stats.length > 0 && (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-navy-900 mb-12">
              Regular Water Heater Service Will Save You Time & Money
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} padding="lg" className="border-t-4 border-accent text-center">
                  <div className="text-5xl md:text-6xl font-heading font-extrabold text-accent mb-4">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* When to Repair vs Replace (if provided) */}
      {(whenToRepair || whenToReplace) && (
        <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {whenToRepair && (
                <Card padding="lg" className="bg-white">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    When to Repair
                  </h3>
                  <ul className="space-y-3">
                    {whenToRepair.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {whenToReplace && (
                <Card padding="lg" className="bg-navy-900">
                  <h3 className="text-2xl font-heading font-bold text-white mb-6">
                    When to Replace
                  </h3>
                  <ul className="space-y-3">
                    {whenToReplace.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">•</span>
                        <span className="text-white text-opacity-90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Services List */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} padding="lg" shadow="md" className="hover:shadow-lg transition-shadow duration-base">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 leading-snug">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section — only renders if faqs prop is provided */}
      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs} background="white" />
      )}

      {/* Areas Served */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 mb-4">
            Serving 15 Cities Across Northern California
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            From Redding to South Lake Tahoe — licensed, bonded &amp; insured plumbers ready for same-day service.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              ['Redding', '/areas/redding'],
              ['Anderson', '/areas/anderson'],
              ['Shasta Lake', '/areas/shasta-lake'],
              ['Palo Cedro', '/areas/palo-cedro'],
              ['Bella Vista', '/areas/bella-vista'],
              ['Red Bluff', '/areas/red-bluff'],
              ['Chico', '/areas/chico'],
              ['Paradise', '/areas/paradise'],
              ['Oroville', '/areas/oroville'],
              ['Yuba City', '/areas/yuba-city'],
              ['Marysville', '/areas/marysville'],
              ['Auburn', '/areas/auburn'],
              ['Grass Valley', '/areas/grass-valley'],
              ['Truckee', '/areas/truckee'],
              ['South Lake Tahoe', '/areas/south-lake-tahoe'],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="text-center py-3 px-4 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium hover:border-primary hover:text-primary hover:shadow-sm transition-all text-sm"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            {ctaText}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We'll inspect it for free and give you an honest assessment — no pressure, no upsell.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 px-12 bg-navy-700 text-white font-btn font-bold rounded-xl items-center justify-center hover:bg-navy-900 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-lg hover:shadow-xl text-lg"
          >
            Book Your Free Inspection →
          </Link>
        </div>
      </section>
    </>
  );
}
