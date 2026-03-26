import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';

interface Stat {
  value: string;
  description: string;
}

interface ServiceDetail {
  title: string;
  items: string[];
}

interface ServicePageProps {
  hero: {
    title: string;
    description: string[];
    backgroundImage?: string;
  };
  stats?: Stat[];
  whenToRepair?: string[];
  whenToReplace?: string[];
  services: ServiceDetail[];
  ctaText?: string;
}

export default function ServicePageTemplate({
  hero,
  stats,
  whenToRepair,
  whenToReplace,
  services,
  ctaText = "Not sure what you need?",
}: ServicePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight text-white">
            {hero.title}
          </h1>
          {hero.description.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl mb-4 text-white text-opacity-90 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="h-12 px-8 bg-primary text-white font-btn font-bold rounded-xl inline-flex items-center justify-center hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-lg"
            >
              Get Your Free Inspection →
            </Link>
            <a
              href="tel:5307689446"
              className="h-12 px-8 bg-white text-navy-900 font-btn font-bold rounded-xl inline-flex items-center justify-center hover:bg-gray-100 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-lg"
            >
              Call (530) 768-9446
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section (if provided) */}
      {stats && stats.length > 0 && (
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-navy-900 mb-12">
              Regular Water Heater Service Will Save You Time & Money
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} padding="lg" className="border-t-4 border-accent text-center">
                  <div className="text-5xl md:text-6xl font-heading font-extrabold text-accent mb-4">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* When to Repair vs Replace (if provided) */}
      {(whenToRepair || whenToReplace) && (
        <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {whenToRepair && (
                <Card padding="lg" className="bg-white">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    When to Repair
                  </h3>
                  <ul className="space-y-3">
                    {whenToRepair.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {whenToReplace && (
                <Card padding="lg" className="bg-navy-900">
                  <h3 className="text-2xl font-heading font-bold text-white mb-6">
                    When to Replace
                  </h3>
                  <ul className="space-y-3">
                    {whenToReplace.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-0.5">•</span>
                        <span className="text-white text-opacity-90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Services List */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} padding="lg" shadow="md" className="hover:shadow-lg transition-shadow duration-base">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 whitespace-nowrap">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-bold">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            {ctaText}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We'll inspect it for free and give you an honest assessment — no pressure, no upsell.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 px-12 bg-navy-700 text-white font-btn font-bold rounded-xl items-center justify-center hover:bg-navy-900 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-lg hover:shadow-xl text-lg"
          >
            Book Your Free Inspection →
          </Link>
        </div>
      </section>
    </>
  );
}
