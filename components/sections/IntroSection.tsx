import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function IntroSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with Red Accent */}
          <div className="relative">
            {/* Red accent box behind image */}
            <div className="absolute top-4 left-2 md:-left-4 w-full h-full bg-primary rounded-2xl -z-10" />
            <Image
              src="/images/truck.webp"
              alt="Topline Plumbing Vans"
              width={600}
              height={750}
              className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-navy-500 font-semibold text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
              <span>Meet Topline Plumbing</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold uppercase text-gray-900 leading-tight">
              Your Local Plumbing Experts
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-prose">
              As the leading <strong>Redding plumber</strong> since 1998, Topline Plumbing provides the fast, reliable
              solutions you need to stop leaks and clear drains today. Our family-owned team specializes in expert repairs,
              upfront pricing, and comprehensive plumbing services for homeowners and businesses across Northern California.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-prose">
              Whether you need emergency drain cleaning or a water heater replacement, we are fully licensed, insured, and
              dedicated to getting the job done right the first time with a 100% satisfaction guarantee. Skip the stress and
              the mess; call us now to secure your upfront estimate and see why your neighbors have trusted us for decades.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex h-12 px-8 bg-primary text-white font-btn font-semibold rounded-xl items-center justify-center hover:-translate-y-1 active:translate-y-0 hover:shadow-primary/20 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-md touch-target"
              >
                Request Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
