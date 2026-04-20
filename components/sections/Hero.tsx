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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
          {/* LEFT — Copy + CTAs */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" aria-hidden />
              REDDING · ANDERSON · SHASTA LAKE
            </div>

            {/* Headline — mixed case, tight tracking, varied weight */}
            <h1 className="text-[2rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-navy-900 leading-[1.12] tracking-[-0.02em] mb-4">
              Redding&apos;s go-to plumber for{' '}
              <span className="text-primary">same-day emergencies</span> &amp; trusted repairs.
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-5">
              Experienced, licensed technicians serving Redding and Northern California homeowners since 1998 — residential &amp; commercial.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-700 font-medium mb-6">
              {[
                '27+ Years Serving Redding',
                'Licensed & Insured — CSLB',
                '3,000+ Jobs Completed',
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
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <a
                href="tel:5307046989"
                className="h-12 px-7 bg-primary text-white font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:shadow-md transition-[transform,box-shadow,background-color] duration-200 ease-snappy shadow-lg text-[15px]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call (530) 704-6989
              </a>
              <a
                href="#estimate-form"
                className="h-12 px-7 bg-white text-navy-900 font-semibold rounded-full inline-flex items-center justify-center gap-2 border-2 border-navy-900 hover:bg-navy-900 hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-[transform,background-color,color,box-shadow] duration-200 ease-snappy text-[15px]"
              >
                Book Your Service
              </a>
            </div>

            {/* Trust badges */}
            {/* Trust badges */}
            <div className="mt-7 pt-6 border-t border-gray-200/60">
              <p className="text-[11px] font-semibold tracking-[0.15em] text-gray-400 uppercase mb-3 text-center lg:text-left">
                Trusted &amp; Reviewed Across
              </p>
              <div className="grid grid-cols-4 gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    ),
                    label: '5-Star Rated',
                    sub: 'Google',
                  },
                  {
                    icon: (
                      <div className="w-7 h-7 bg-gray-400 rounded flex items-center justify-center">
                        <span className="text-white text-[9px] font-bold leading-none">BBB</span>
                      </div>
                    ),
                    label: 'A+ Rating',
                    sub: 'BBB',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.27-.635-.936-1.42l2.465-5.344c.333-.72 1.14-.468 1.37.24l1.91 4.362c.228.545.08 1.016-.814.73zm-8.144 5.25l1.07-5.116c.192-.92 1.213-.79 1.66-.116l3.244 4.572c.468.665.073 1.258-.666 1.12l-4.37-.786c-.668-.12-1.13-.755-.938-1.674zm-2.39-1.172l-4.33 2.36c-.738.4-1.37-.168-1.14-.905l1.66-5.27c.226-.72 1.01-.823 1.43-.2l3.132 4.586c.42.617.027 1.074-.753.43zm-.984-5.588L4.3 9.274c-.73-.334-.655-1.12.04-1.41L9.584 5.4c.696-.29 1.184.115 1.12.846l-.474 5.196c-.063.73-.67 1.045-1.588.642zm3.028-2.53l.82-5.156c.116-.726.944-.93 1.43-.42l3.336 3.51c.486.51.262 1.186-.488 1.29l-4.156.624c-.75.112-1.1-.395-.942-1.848z" />
                      </svg>
                    ),
                    label: '5-Star Rated',
                    sub: 'Yelp',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    label: 'Licensed',
                    sub: 'CA CSLB',
                  },
                ].map((badge) => (
                  <div key={badge.sub} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1.5">
                    <div className="text-gray-400">{badge.icon}</div>
                    <div>
                      <p className="text-[13px] font-semibold text-gray-600 leading-tight">{badge.label}</p>
                      <p className="text-[11px] text-gray-400 leading-tight">{badge.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Estimate form card */}
          <div id="estimate-form" className="w-full lg:pl-4">
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)] border border-gray-100 p-5 sm:p-6 lg:p-7 max-w-md mx-auto lg:max-w-none">
              <div className="mb-4">
                <h2 className="text-[22px] lg:text-[24px] font-bold text-navy-900 tracking-tight mb-1.5">
                  Get a Free Estimate
                </h2>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  No hidden fees. Upfront pricing. Mon&ndash;Fri 8a&ndash;4:30p.
                </p>
              </div>
              <HeroEstimateForm />
              <p className="mt-3 text-[11px] text-gray-400 text-center leading-relaxed">
                By submitting you agree to be contacted by Topline Plumbing. We never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
