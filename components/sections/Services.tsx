import React from 'react';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
      </svg>
    ),
    title: 'Tankless Upgrades',
    description: 'Endless hot water and lower energy bills with high-efficiency tankless systems.',
    href: '/services/tankless',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Repiping Services',
    description: 'Upgrade old, failing galvanized or polybutylene pipes to reliable PEX or Copper.',
    href: '/services/repiping-services',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
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
              className="group p-8 border-2 border-border rounded-xl bg-white hover:border-secondary hover:-translate-y-1 hover:shadow-2xl transition-all duration-base flex flex-col h-full"
            >
              {/* Icon */}
              <div className="mb-6 text-primary group-hover:scale-110 transition-all duration-base">
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
