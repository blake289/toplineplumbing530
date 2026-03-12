import React from 'react';
import Card from '@/components/ui/Card';
import HeroEstimateForm from '@/components/forms/HeroEstimateForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/water-heater.webp')" }}
      />

      {/* Dark Overlay for WCAG AA Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto container-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center">
          {/* Left: Headline & CTAs */}
          <div className="text-white text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wide mb-6 bg-white/15 backdrop-blur-md px-6 py-2.5 rounded-full">
              <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Estimates • Same-Day Service</span>
            </div>

            {/* Headline - Responsive sizing, no orphans */}
            <h1 className="font-heading font-bold uppercase tracking-tight mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight no-orphans">
              Redding's Go-To Plumber for 24/7 Emergencies & Same-Day Repairs
            </h1>

            {/* Feature List - All on same line on desktop, wrap on mobile */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-8 text-sm md:text-base">
              <span className="flex items-center gap-2 whitespace-nowrap">
                <svg className="w-5 h-5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Experienced Technicians
              </span>
              <span className="flex items-center gap-2 whitespace-nowrap">
                <svg className="w-5 h-5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Residential & Commercial
              </span>
              <span className="flex items-center gap-2 whitespace-nowrap">
                <svg className="w-5 h-5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 Emergency Support
              </span>
            </div>

            {/* CTA Buttons - Clear hierarchy */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="tel:5307689446"
                className="h-14 px-8 bg-secondary text-white font-btn font-semibold rounded-full inline-flex items-center justify-center gap-2 hover:bg-secondary-dark hover:scale-105 transition-all duration-base shadow-lg hover:shadow-xl text-base md:text-lg touch-target"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                (530) 768-9446
              </a>
              <a
                href="/contact"
                className="h-14 px-8 bg-primary text-white font-btn font-bold rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary-dark hover:scale-105 transition-all duration-base shadow-lg hover:shadow-brand text-base md:text-lg uppercase tracking-wide touch-target"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                </svg>
                Book Your Service
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full">
            <Card padding="lg" shadow="xl">
              <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                Get a Free Estimate
              </h2>
              <p className="text-text-light mb-6">
                Fill out the form and we'll get back to you within 1 hour
              </p>
              <HeroEstimateForm />
            </Card>
          </div>
        </div>
      </div>

      {/* Curved SVG Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px]"
        >
          <path
            d="M321.39 56.44c120.46 31.84 256.76 43.1 380.08 30.65C827.8 74.45 941.83 45.42 1060 21.05 1121 8.87 1178.64 3.03 1200 0v120H0V0c32.74 15.68 76.59 29.8 126.73 40.59 66.56 14.34 135.53 14.99 194.66 15.85z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
