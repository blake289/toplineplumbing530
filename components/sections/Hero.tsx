import React from 'react';
import Image from 'next/image';
import HeroEstimateForm from '@/components/forms/HeroEstimateForm';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white">
      {/* Subtle background photo layer */}
      <Image
        src="/images/water-heater.webp"
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={85}
        sizes="100vw"
        className="object-cover object-center opacity-[0.08] pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/70 to-white/90 pointer-events-none" />

      {/* Decorative navy blob for subtle depth */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-navy-900/[0.035] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-40 w-[440px] h-[440px] rounded-full bg-primary/[0.04] blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — Copy + CTAs */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-primary mb-6">
              <span className="w-8 h-px bg-primary" aria-hidden />
              REDDING · ANDERSON · SHASTA LAKE
            </div>

            {/* Headline — mixed case, tight tracking, varied weight */}
            <h1 className="text-[2.25rem] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-navy-900 leading-[1.05] tracking-[-0.025em] mb-5">
              Redding&apos;s go-to plumber for
              <br className="hidden sm:block" />{' '}
              <span className="text-primary">24/7 emergencies</span>
              <span className="text-navy-900"> &amp; same-day repairs.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-7">
              Experienced, licensed technicians serving Redding and Northern California homeowners since 1998 — residential &amp; commercial.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-700 font-medium mb-9">
              {[
                '27+ Years Serving Redding',
                '2,847 Water Heaters Installed',
                '60-Min Response Time',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="tel:5307046989"
                className="h-14 px-8 bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call (530) 704-6989
              </a>
              <a
                href="#estimate-form"
                className="h-14 px-8 bg-white text-navy-900 font-semibold rounded-full inline-flex items-center justify-center gap-2 border-2 border-navy-900 hover:bg-navy-900 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-base"
              >
                Book Your Service
              </a>
            </div>
          </div>

          {/* RIGHT — Estimate form card */}
          <div id="estimate-form" className="w-full">
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)] border border-gray-100 p-6 sm:p-7 lg:p-8 max-w-md mx-auto lg:max-w-none">
              <div className="mb-5">
                <h2 className="text-[22px] font-bold text-navy-900 tracking-tight mb-1.5">
                  Get a free estimate
                </h2>
                <p className="text-sm text-gray-600">
                  No hidden fees. Upfront pricing. 60-min response.
                </p>
              </div>
              <HeroEstimateForm />
              <p className="mt-4 text-[11px] text-gray-400 text-center leading-relaxed">
                By submitting you agree to be contacted by Topline Plumbing. We never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
