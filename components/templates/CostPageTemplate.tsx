import React from 'react';
import Link from 'next/link';
import FAQSection from '@/components/layout/FAQSection';

export interface CostRangeRow {
  scenario: string;
  range: string;
  notes: string;
}

export interface CostFactor {
  factor: string;
  impact: string;
}

export interface CostPageProps {
  // Hero / answer box
  h1: string;
  priceAnswer: string; // e.g. "$1,200–$3,500 in the Redding area"
  priceAnswerDetail: string;

  // Core sections
  intro: string[];

  costRanges: {
    title: string;
    description?: string;
    rows: CostRangeRow[];
  };

  factors: {
    title: string;
    description?: string;
    items: CostFactor[];
  };

  whatsIncluded: {
    title: string;
    items: string[];
  };

  repairVsReplace?: {
    title: string;
    repair: { label: string; cost: string; when: string[] };
    replace: { label: string; cost: string; when: string[] };
  };

  redFlags: {
    title: string;
    description: string;
    items: string[];
  };

  localContext: {
    title: string;
    paragraphs: string[];
  };

  faqs: { question: string; answer: string }[];

  // Related links
  primaryServiceHref: string;
  primaryServiceLabel: string;
  relatedCostLinks: { href: string; label: string }[];
}

export default function CostPageTemplate({
  h1,
  priceAnswer,
  priceAnswerDetail,
  intro,
  costRanges,
  factors,
  whatsIncluded,
  repairVsReplace,
  redFlags,
  localContext,
  faqs,
  primaryServiceHref,
  primaryServiceLabel,
  relatedCostLinks,
}: CostPageProps) {
  return (
    <>
      {/* Hero with price answer box */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight text-white">
            {h1}
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 my-8 border border-white/20">
            <p className="text-sm uppercase tracking-wider text-accent-green font-bold mb-2">
              Quick Answer
            </p>
            <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
              {priceAnswer}
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              {priceAnswerDetail}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="tel:5307046989"
              className="h-12 px-8 bg-primary text-white font-btn font-bold rounded-xl inline-flex items-center justify-center gap-2 hover:bg-primary-dark hover:-translate-y-1 transition-all shadow-lg"
            >
              Call for Exact Quote — (530) 704-6989
            </a>
            <Link
              href="/contact"
              className="h-12 px-8 bg-white text-navy-900 font-btn font-bold rounded-xl inline-flex items-center justify-center hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg"
            >
              Request Free Estimate →
            </Link>
          </div>
        </div>
      </section>

      {/* Intro paragraphs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {intro.map((para, i) => (
            <p
              key={i}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-5 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Cost range table */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
            {costRanges.title}
          </h2>
          {costRanges.description && (
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {costRanges.description}
            </p>
          )}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-12 gap-4 p-5 bg-navy-900 text-white font-bold text-sm uppercase tracking-wider">
                <div className="col-span-5">Scenario</div>
                <div className="col-span-3">Typical Range</div>
                <div className="col-span-4">Notes</div>
              </div>
              {costRanges.rows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 gap-4 p-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="col-span-12 md:col-span-5 font-semibold text-gray-900">
                    {row.scenario}
                  </div>
                  <div className="col-span-6 md:col-span-3 text-primary font-bold text-lg">
                    {row.range}
                  </div>
                  <div className="col-span-6 md:col-span-4 text-gray-600 text-sm">
                    {row.notes}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 italic">
            Ranges are typical for the Redding / Northern California market.
            Call (530) 704-6989 for an exact upfront quote — we price every
            job before any work begins.
          </p>
        </div>
      </section>

      {/* What affects cost */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
            {factors.title}
          </h2>
          {factors.description && (
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {factors.description}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {factors.items.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-2">
                  {item.factor}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            {whatsIncluded.title}
          </h2>
          <ul className="space-y-4">
            {whatsIncluded.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-accent-green flex-shrink-0 mt-1"
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
                <span className="text-lg text-gray-800 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Repair vs Replace cost comparison (optional) */}
      {repairVsReplace && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
              {repairVsReplace.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-accent-green">
                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-2">
                  {repairVsReplace.repair.label}
                </h3>
                <p className="text-3xl font-heading font-extrabold text-primary mb-4">
                  {repairVsReplace.repair.cost}
                </p>
                <p className="font-semibold text-gray-800 mb-3">When it makes sense:</p>
                <ul className="space-y-2">
                  {repairVsReplace.repair.when.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy-900 text-white rounded-2xl p-8 border-t-4 border-primary">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {repairVsReplace.replace.label}
                </h3>
                <p className="text-3xl font-heading font-extrabold text-accent-green mb-4">
                  {repairVsReplace.replace.cost}
                </p>
                <p className="font-semibold text-white/90 mb-3">When it makes sense:</p>
                <ul className="space-y-2">
                  {repairVsReplace.replace.when.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/85">
                      <span className="text-accent-green mt-0.5">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Red flags / trust signals */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
            {redFlags.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {redFlags.description}
          </p>
          <div className="bg-white rounded-2xl shadow-md border-l-4 border-primary p-6 md:p-8">
            <ul className="space-y-4">
              {redFlags.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="text-base md:text-lg text-gray-800 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
            {localContext.title}
          </h2>
          {localContext.paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-lg text-gray-700 leading-relaxed mb-5 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} background="gray" />

      {/* CTA with related links */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Get a Free, No-Pressure Estimate
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Upfront pricing, no hidden fees, same-day service across Redding
            and the entire 530 area code. Call for an exact quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:5307046989"
              className="h-14 px-10 bg-primary text-white font-btn font-bold rounded-xl inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg text-lg"
            >
              Call: (530) 704-6989
            </a>
            <Link
              href={primaryServiceHref}
              className="h-14 px-10 bg-white text-navy-900 font-btn font-bold rounded-xl inline-flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg text-lg"
            >
              {primaryServiceLabel} →
            </Link>
          </div>
          {relatedCostLinks.length > 0 && (
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm uppercase tracking-wider text-white/70 mb-4">
                Related Cost Guides
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedCostLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
