import React from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const pricingCards = [
  {
    title: 'Water Heating Service',
    price: '$127',
    priceNote: 'Starting price',
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
    title: 'Drain Cleaning',
    price: '$130',
    priceNote: 'Starting price',
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
    title: 'Emergency Response',
    price: 'Variable',
    priceNote: 'Free quote upfront',
    description: 'Emergency plumbing for burst pipes, gas leaks, and flooding — same-day response during business hours.',
    features: [
      'Mon–Fri 8a–4:30p',
      'Same-day response',
      'Emergency diagnostics',
      'Upfront pricing',
    ],
    href: '/services/emergency',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" aria-hidden />
              TRANSPARENT PRICING
              <span className="w-8 h-px bg-primary" aria-hidden />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 tracking-[-0.02em] leading-[1.1]">
              Upfront pricing. No surprises.
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Flat, honest rates you see before work begins. Plus a free estimate on every job.
            </p>
          </div>
        </Reveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingCards.map((card) => (
            <div
              key={card.title}
              className={`relative flex flex-col rounded-2xl p-8 lg:p-9 transition-[transform,box-shadow,border-color] duration-200 ease-snappy ${
                card.featured
                  ? 'bg-navy-900 text-white border-2 border-navy-900 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] md:scale-[1.04] md:-translate-y-1'
                  : 'bg-white text-navy-900 border border-gray-200 hover:shadow-lg hover:-translate-y-[3px] active:scale-[0.98] active:shadow-sm'
              }`}
            >
              {/* Featured badge */}
              {card.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-[11px] font-bold tracking-[0.1em] rounded-full shadow-md">
                  MOST REQUESTED
                </div>
              )}

              {/* Title */}
              <h3 className={`text-xl font-bold mb-4 tracking-tight ${card.featured ? 'text-white' : 'text-navy-900'}`}>
                {card.title}
              </h3>

              {/* Price */}
              <div className="mb-5">
                <div className={`text-5xl lg:text-[56px] font-bold leading-none tracking-[-0.03em] ${card.featured ? 'text-white' : 'text-navy-900'}`}>
                  {card.price}
                </div>
                <div className={`text-[13px] mt-2 font-medium ${card.featured ? 'text-white/70' : 'text-gray-500'}`}>
                  {card.priceNote}
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px w-full mb-5 ${card.featured ? 'bg-white/15' : 'bg-gray-100'}`} />

              {/* Description */}
              <p className={`text-[15px] leading-relaxed mb-6 ${card.featured ? 'text-white/80' : 'text-gray-600'}`}>
                {card.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[14px]">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${card.featured ? 'text-accent-green' : 'text-accent-green'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={card.featured ? 'text-white/85' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={card.href}
                className={`block text-center h-12 leading-[48px] rounded-full font-semibold transition-all duration-200 ${
                  card.featured
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg'
                    : 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
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
