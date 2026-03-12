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
    featured: true,
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
    <section className="py-20 md:py-28" style={{ background: '#0D1B2A' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-heading font-bold uppercase text-white tracking-wider mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-white text-opacity-70 text-lg max-w-2xl mx-auto leading-relaxed">
            Premium plumbing services with transparent, upfront pricing. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-[0.04] backdrop-blur-sm p-8 md:p-10 rounded-xl border transition-all duration-base hover:-translate-y-2 hover:bg-opacity-[0.08] ${
                card.featured
                  ? 'border-accent border-2 hover:shadow-2xl'
                  : 'border-white border-opacity-[0.08] hover:shadow-xl'
              }`}
            >
              {/* Icon */}
              <div className="mb-6">{card.icon}</div>

              {/* Title */}
              <h3 className="font-heading text-xl uppercase text-white text-opacity-90 tracking-wider mb-4 font-semibold">
                {card.title}
              </h3>

              {/* Price */}
              <div className="text-6xl md:text-7xl font-heading font-bold text-white mb-5 leading-none">
                {card.price}
              </div>

              {/* Description */}
              <p className="text-white text-opacity-60 mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white text-opacity-70 text-sm">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={card.href}
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-base ${
                  card.featured
                    ? 'bg-accent text-navy-900 hover:bg-[#d99320] border-2 border-accent'
                    : 'border-2 border-white border-opacity-20 text-white hover:bg-white hover:bg-opacity-10 hover:border-opacity-40'
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
