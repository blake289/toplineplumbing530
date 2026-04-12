import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Headline */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4 no-orphans">
              Ready to Fix Your Plumbing Problem?
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Call now for <strong className="text-primary-light">upfront pricing</strong> and same-day service.
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row items-center lg:items-end gap-4">
            <a
              href="tel:5307046989"
              className="h-14 px-8 bg-primary text-white font-btn font-semibold rounded-full inline-flex items-center justify-center gap-3 hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:shadow-md focus-visible:-translate-y-0.5 transition-[transform,box-shadow,background-color] duration-200 ease-snappy shadow-lg text-base touch-target w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              (530) 704-6989
            </a>
            <Link
              href="/contact"
              className="h-14 px-8 bg-white text-navy-900 font-btn font-semibold rounded-full inline-flex items-center justify-center gap-3 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-[transform,box-shadow] duration-200 ease-snappy shadow-lg text-base border-2 border-white hover:shadow-xl touch-target w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
              </svg>
              Book Your Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
