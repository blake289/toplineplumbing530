import type { Metadata } from 'next';
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
  title: 'Topline Plumbing | Redding CA Plumber — Same-Day Service',
  description: "Redding's trusted plumber. Fast, reliable, same-day emergency plumbing service. Water heater repair, drain cleaning, leak detection. Call (530) 704-6989.",
  alternates: {
    canonical: 'https://toplineplumbingco.com',
  },
  openGraph: {
    title: "Topline Plumbing | Redding's Trusted Plumber",
    description: "Fast, licensed plumbing in Redding, CA. Emergency plumbing, water heater repair, drain cleaning. Same-day service Mon–Fri 8:00a–4:30p. Call (530) 704-6989.",
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
    answer: "Our pricing varies by job. We always provide upfront pricing before any work begins — no hidden fees or surprise bills. Call (530) 704-6989 for a free estimate.",
  },
  {
    question: "What areas does Topline Plumbing serve?",
    answer: "We serve Redding, Anderson, Shasta Lake, Palo Cedro, Bella Vista, Red Bluff, Chico, Oroville, Yuba City, Marysville, Paradise, Auburn, Grass Valley, Truckee, South Lake Tahoe, and surrounding Northern California communities.",
  },
  {
    question: "Do you repair and replace water heaters in Redding?",
    answer: "Yes. We repair and replace all makes and models of water heaters, including tankless water heaters. Same-day water heater service is available in most cases. Call (530) 704-6989 for a free estimate.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={homepageFAQs} />
      <Hero />
      <IntroSection />
      <Services />
      <Pricing />
      <ProfessionalWork />
      <StatsSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
