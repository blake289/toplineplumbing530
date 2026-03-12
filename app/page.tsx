import Hero from '@/components/sections/Hero';
import IntroSection from '@/components/sections/IntroSection';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import ProfessionalWork from '@/components/sections/ProfessionalWork';
import StatsSection from '@/components/sections/StatsSection';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
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
