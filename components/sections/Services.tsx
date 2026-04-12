import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Emergency Plumbing',
    description: "Burst pipes, gas leaks, and floods — we're there fast, any hour of the day or night.",
    href: '/services/emergency',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Water Heaters',
    description: 'Expert installation, proactive repair, and complete system replacement. Service starting at $127.',
    href: '/services/water-heater-repair',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Drain Cleaning',
    description: 'We clear tough clogs and backed-up sewer lines with mechanical power augers. Starting at $130.',
    href: '/services/drain-cleaning',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Tankless Upgrades',
    description: 'Endless hot water and lower energy bills with high-efficiency tankless water heater systems.',
    href: '/services/tankless',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
      </svg>
    ),
    title: 'Repiping Services',
    description: 'Upgrade old, failing galvanized or polybutylene pipes to reliable, modern PEX or copper.',
    href: '/services/repiping-services',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Fixture Installs',
    description: 'Professional installation for sinks, toilets, faucets, showers, and garbage disposals.',
    href: '/services/fixture-installs',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" aria-hidden />
              FULL-SERVICE PLUMBING
              <span className="w-8 h-px bg-primary" aria-hidden />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 tracking-[-0.02em] leading-[1.1] no-orphans">
              Whatever the problem, we fix it right.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional plumbing for homes and businesses throughout Northern California.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 lg:p-8 flex flex-col h-full cursor-pointer transition-[transform,box-shadow,border-color] duration-200 ease-snappy hover:border-navy-900/20 hover:-translate-y-[3px] hover:shadow-[0_16px_36px_-10px_rgba(15,23,42,0.10)] active:scale-[0.98] active:shadow-sm"
            >
              {/* Icon badge */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-900/[0.04] text-navy-900 group-hover:bg-primary/[0.08] group-hover:text-primary transition-colors duration-200 ease-snappy">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy-900 mb-3 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-gray-600 leading-relaxed flex-grow mb-6">
                {service.description}
              </p>

              {/* CTA Link */}
              <div className="flex items-center gap-2 text-navy-900 font-semibold text-sm group-hover:text-primary transition-colors">
                Learn more
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
