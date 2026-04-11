import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';

interface LocationService {
  title: string;
  description: string;
  href: string;
}

interface LocationPageProps {
  locationName: string;
  hero: {
    title: string;
    description: string;
  };
  about: {
    intro: string;
    details: string;
  };
  services: LocationService[];
}

export default function LocationPageTemplate({
  locationName,
  hero,
  about,
  services,
}: LocationPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white text-opacity-90 leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="h-12 px-8 bg-primary text-white font-btn font-bold rounded-xl inline-flex items-center justify-center hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-lg"
            >
              Book Service in {locationName} →
            </Link>
            <a
              href="tel:5307046989"
              className="h-12 px-8 bg-white text-navy-900 font-btn font-bold rounded-xl inline-flex items-center justify-center hover:bg-gray-100 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-lg"
            >
              Call (530) 704-6989
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Section */}
            <Card padding="lg" className="bg-gray-50">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                Serving {locationName} Homeowners
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {about.intro}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {about.details}
              </p>
            </Card>

            {/* Services Section */}
            <Card padding="lg">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                Our Local Services
              </h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-heading font-bold text-accent mb-2">
                      <Link href={service.href} className="hover:text-primary transition-colors">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Proud to Serve {locationName}
          </h2>
          <p className="text-lg md:text-xl text-white text-opacity-90 mb-8 leading-relaxed">
            Fast, reliable plumbing services from a team that cares about your community.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 px-12 bg-primary text-white font-btn font-bold rounded-xl items-center justify-center hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-lg hover:shadow-xl text-lg"
          >
            Schedule Service Today →
          </Link>
        </div>
      </section>
    </>
  );
}
