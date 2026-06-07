import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import Hero from '@/components/sections/Hero';
import IntroSection from '@/components/sections/IntroSection';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import ProfessionalWork from '@/components/sections/ProfessionalWork';
import StatsSection from '@/components/sections/StatsSection';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import FAQSchema from '@/components/layout/FAQSchema';

export const metadata: Metadata = {
  title: 'Emergency Plumber Redding CA | Same-Day Service | Topline',
  description: "Need a plumber fast in Redding or Shasta County? Topline Plumbing offers same-day emergency repairs, drain cleaning, and water heaters. Licensed local team. Call (530) 704-6989.",
  alternates: {
    canonical: 'https://toplineplumbingco.com',
  },
  openGraph: {
    title: 'Emergency Plumber Redding CA | Same-Day Service | Topline',
    description: "Need a plumber fast in Redding or Shasta County? Topline Plumbing offers same-day emergency repairs, drain cleaning, and water heaters. Licensed local team. Call (530) 704-6989.",
    url: 'https://toplineplumbingco.com',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Redding CA Licensed Plumber' }],
    locale: 'en_US',
    type: 'website',
  },
};

const homepageFAQs = [
  {
    question: "What are Topline Plumbing's hours for emergency service in Redding?",
    answer: "Topline Plumbing handles emergency plumbing during business hours: Monday through Friday, 8:00a to 4:30p. For active emergencies outside our hours, shut off your main water valve and call 911 if there's a safety issue (gas leak, major flood). Text (530) 704-6989 and we'll respond first thing the next business day.",
  },
  {
    question: "Is Topline Plumbing licensed and insured in California?",
    answer: "Yes. Topline Plumbing is fully licensed, bonded, and insured in the state of California. All of our plumbers hold valid California plumbing licenses and carry full liability insurance and workers' compensation coverage.",
  },
  {
    question: "Do you offer same-day plumbing service in Redding?",
    answer: "Yes. We offer same-day service for most plumbing repairs in Redding, Anderson, Shasta Lake, Palo Cedro, Bella Vista, and surrounding Northern California communities. Call (530) 704-6989 to schedule.",
  },
  {
    question: "How much does a plumber cost in Redding, CA?",
    answer: "Our pricing varies by job. We always provide upfront pricing before any work begins — no hidden fees or surprise bills. Call (530) 704-6989 for a free estimate with any service.",
  },
  {
    question: "What areas does Topline Plumbing serve?",
    answer: "We serve the greater Redding area — Redding, Anderson, Shasta Lake, Palo Cedro, Bella Vista, and Red Bluff, plus surrounding Shasta and Tehama county communities.",
  },
  {
    question: "Do you repair and replace water heaters in Redding?",
    answer: "Yes. We repair and replace all makes and models of water heaters, including tankless water heaters. Same-day water heater service is available in most cases. Call (530) 704-6989 for a free estimate with any service.",
  },
];

const popularLinks = [
  { label: 'Emergency Plumber in Redding', href: '/emergency-plumber-redding' },
  { label: 'Drain Cleaning in Redding', href: '/drain-cleaning-redding' },
  { label: '24/7 Emergency Plumbing Repairs', href: '/services/emergency' },
  { label: 'Sewer Line Repair & Replacement', href: '/services/sewer-line' },
  { label: 'Water Heater Repair & Replacement', href: '/services/water-heater-repair' },
  { label: 'Clogged Drain Cleaning', href: '/services/drain-cleaning' },
];

function PopularServices() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] text-primary mb-4">
              <span className="w-8 h-px bg-primary" aria-hidden />
              POPULAR IN REDDING &amp; SHASTA COUNTY
              <span className="w-8 h-px bg-primary" aria-hidden />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-900 tracking-[-0.02em] leading-[1.1] no-orphans">
              Fast, local plumbing help when you need it
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {popularLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 text-[15px] font-semibold text-navy-900 transition-[transform,box-shadow,border-color,color] duration-200 ease-snappy hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-10px_rgba(15,23,42,0.12)] active:scale-[0.98]"
              >
                {link.label}
                <svg
                  className="w-4 h-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={homepageFAQs} />
      <Hero />
      <IntroSection />
      <Services />
      <PopularServices />
      <Pricing />
      <ProfessionalWork />
      <StatsSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
