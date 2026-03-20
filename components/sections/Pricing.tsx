import React from 'react';
import Link from 'next/link';

const pricingCards = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
        <path d="M12 18c-2.21 0-4-1.79-4-4 0-1.5 1.5-3.5 4-5.5 2.5 2 4 4 4 5.5 0 2.21-1.79 4-4 4z"/>
      </svg>
    ),
    title: 'Water Heating Service',
    price: '$127',
    description: 'Comprehensive diagnostics, annual flush, and safety inspections for tank or tankless systems.',
    features: [
      'Full system diagnostic check',
      'Safety valve inspection',
      'Temperature & pressure test',
      'Sediment flush & cleaning',
    ],
    href: '/services/water-heater-repair',
    featured: false,
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3"/>
      </svg>
    ),
    title: 'Drain Cleaning',
    price: '$130',
    description: 'Professional mechanical augering for stubborn clogs in sinks, toilets, or main sewer lines.',
    features: [
      'Power auger cleaning',
      'Sewer line inspection',
      'Clog removal guarantee',
      'Same-day service available',
    ],
    href: '/services/drain-cleaning',
    featured: false,
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Emergency Response',
    price: 'Variable',
    description: '24/7 emergency plumbing for burst pipes, gas leaks, and flooding—fast response guaranteed.',
    features: [
      '24/7 availability',
      'Rapid dispatch',
      'Emergency diagnostics',
      'Immediate repairs',
    ],
    href: '/services/emergency',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Premium plumbing services with transparent, upfront pricing. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards Grid - Equal height with aligned CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingCards.map((card, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border flex flex-col transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-1 hover:bg-white/10 ${
                card.featured
                  ? 'border-accent border-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]'
                  : 'border-white/10 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)]'
              }`}
            >
              {/* Icon */}
              <div className="mb-6">{card.icon}</div>

              {/* Title */}
              <h3 className="font-heading text-xl uppercase text-white tracking-wider mb-4 font-semibold">
                {card.title}
              </h3>

              {/* Price - with proper padding/word-break */}
              <div className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-none break-words pr-2 group-hover:scale-105 transition-transform duration-200">
                {card.price}
              </div>

              {/* Description */}
              <p className="text-white/60 mb-6 leading-relaxed text-base">
                {card.description}
              </p>

              {/* Features List - flex-grow pushes CTA to bottom */}
              <ul className="space-y-3 mb-8 flex-grow">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - aligned at bottom */}
              <Link
                href={card.href}
                className={`block text-center py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] whitespace-nowrap hover:-translate-y-1 active:translate-y-0 hover:shadow-md focus-visible:-translate-y-1 touch-target ${
                  card.featured
                    ? 'bg-accent text-navy-900 hover:bg-accent-yellow border-2 border-accent shadow-md'
                    : 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                }`}
              >
                Book Service
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
