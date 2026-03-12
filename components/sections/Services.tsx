import React from 'react';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Emergency Plumbing',
    description: "Burst pipes, dangerous gas leaks, and floods—we're there fast.",
    href: '/services/emergency',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Drain Cleaning',
    description: 'We clear tough clogs and backed-up sewer lines with mechanical power augers. Starting at $130.',
    href: '/services/drain-cleaning',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v.375m0 0c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 017 16.875v-.375z" opacity="0.6" />
      </svg>
    ),
    title: 'Tankless Upgrades',
    description: 'Endless hot water and lower energy bills with high-efficiency tankless systems.',
    href: '/services/tankless',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
        <circle cx="4" cy="7" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="4" cy="12" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="4" cy="17" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    title: 'Repiping Services',
    description: 'Upgrade old, failing galvanized or polybutylene pipes to reliable PEX or Copper.',
    href: '/services/repiping-services',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
    <section id="services" className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest rounded-full mb-6">
            Full-Service Plumbing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 no-orphans">
            Whatever the Problem, We Fix It Right
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Professional plumbing services for residential and commercial properties throughout Northern California
          </p>
        </div>

        {/* Services Grid - Uniform height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group p-6 md:p-8 border-2 border-gray-200 rounded-xl bg-white hover:border-secondary hover:-translate-y-1 hover:shadow-xl transition-all duration-base flex flex-col h-full"
            >
              {/* Icon */}
              <div className="mb-6 text-primary">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-3 transition-colors duration-base">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base text-text-light mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* CTA Link */}
              <div className="flex items-center gap-2 font-semibold text-primary group-hover:text-primary-dark uppercase text-sm tracking-wide transition-all duration-base">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
