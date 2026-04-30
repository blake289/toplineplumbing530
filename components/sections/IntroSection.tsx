import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function IntroSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with Red Accent */}
          <div className="relative overflow-hidden md:overflow-visible">
            {/* Red accent box behind image */}
            <div className="absolute top-4 left-0 md:-left-4 w-full h-full bg-primary rounded-2xl -z-10" />
            <Image
              src="/images/truck.webp"
              alt="Topline Plumbing Vans"
              width={600}
              height={750}
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="eager"
              fetchPriority="high"
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-[12px] tracking-[0.12em]">
              <span className="w-8 h-px bg-primary" aria-hidden />
              MEET TOPLINE PLUMBING
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-navy-900 leading-[1.1] tracking-[-0.02em]">
              Your local plumbing experts since 1998.
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-prose">
              As the leading <strong>Redding plumber</strong> since 1998, Topline Plumbing provides the fast, reliable
              solutions you need to stop leaks and clear drains today. Our family-owned team specializes in expert repairs,
              upfront pricing, and comprehensive plumbing services for homeowners and businesses across Northern California.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-prose">
              Whether you need emergency drain cleaning or a <Link href="/water-heater-replacement-redding" className="text-primary font-semibold underline-offset-4 hover:underline">water heater replacement</Link>, we are fully licensed, insured, and
              dedicated to getting the job done right the first time with a 100% satisfaction guarantee. Skip the stress and
              the mess; call us now to secure your upfront estimate and see why your neighbors have trusted us for decades.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex h-12 px-8 bg-primary text-white font-btn font-semibold rounded-full items-center justify-center hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg active:translate-y-0 active:scale-[0.97] active:shadow-sm transition-[transform,box-shadow,background-color] duration-200 ease-snappy shadow-md touch-target"
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
