import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Headline */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold uppercase text-white leading-tight mb-4">
              Ready to Fix Your Plumbing Problem?
            </h2>
            <p className="text-lg text-white text-opacity-90">
              Book your free inspection now and get <strong>$100 off</strong>.
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row items-center lg:items-end gap-4">
            <a
              href="tel:5307689446"
              className="h-16 px-10 bg-blue-500 text-white font-semibold rounded-full inline-flex items-center justify-center gap-3 hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl text-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              (530) 768-9446
            </a>
            <Link
              href="/contact"
              className="h-16 px-10 bg-primary text-white font-bold rounded-full inline-flex items-center justify-center gap-3 hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl text-xl uppercase tracking-wide"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
