import React from 'react';
import Image from 'next/image';

export default function ProfessionalWork() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold uppercase text-gray-900 mb-6 leading-tight">
              Expert Technicians, Every Time
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our licensed and insured technicians bring years of experience to every job. From water heater repairs to complete system installations, we deliver professional service you can trust.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-base group hover:bg-gray-50 p-2 -ml-2 rounded transition-colors duration-150">
                <svg className="w-6 h-6 text-primary group-hover:text-primary flex-shrink-0 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-900">Licensed & Insured Professionals</span>
              </li>
              <li className="flex items-center gap-3 text-base group hover:bg-gray-50 p-2 -ml-2 rounded transition-colors duration-150">
                <svg className="w-6 h-6 text-primary group-hover:text-primary flex-shrink-0 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-900">Ongoing Training & Certification</span>
              </li>
              <li className="flex items-center gap-3 text-base group hover:bg-gray-50 p-2 -ml-2 rounded transition-colors duration-150">
                <svg className="w-6 h-6 text-primary group-hover:text-primary flex-shrink-0 transition-colors duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-900">100% Satisfaction Guaranteed</span>
              </li>
            </ul>
          </div>

          {/* Right: Image with Navy Accent */}
          <div className="relative order-first lg:order-last">
            {/* Navy accent box behind image */}
            <div className="absolute -top-4 right-2 md:-right-4 w-full h-full bg-navy-900 rounded-lg -z-10" />
            <Image
              src="/images/joe-cindy.png"
              alt="Topline Plumbing Technician at Work"
              width={600}
              height={800}
              className="relative w-full aspect-[3/4] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
