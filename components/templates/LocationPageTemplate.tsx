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
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white text-opacity-90 leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="h-12 px-8 bg-primary text-white font-btn font-semibold rounded-full inline-flex items-center justify-center hover:bg-primary-dark transition-all duration-base shadow-lg"
            >
              Book Service in {locationName} →
            </Link>
            <a
              href="tel:5307689446"
              className="h-12 px-8 bg-white text-navy-900 font-btn font-semibold rounded-full inline-flex items-center justify-center hover:bg-gray-100 transition-all duration-base shadow-lg"
            >
              Call (530) 768-9446
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
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
      <section className="py-16 md:py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Proud to Serve {locationName}
          </h2>
          <p className="text-lg md:text-xl text-white text-opacity-90 mb-8 leading-relaxed">
            Fast, reliable plumbing services from a team that cares about your community.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 px-12 bg-primary text-white font-btn font-semibold rounded-full items-center justify-center hover:bg-primary-dark transition-all duration-base shadow-lg hover:shadow-xl text-lg"
          >
            Schedule Service Today →
          </Link>
        </div>
      </section>
    </>
  );
}
