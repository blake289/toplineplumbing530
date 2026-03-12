import { Metadata } from 'next';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Plumber in Palo Cedro, CA | Topline Plumbing',
  description: 'Expert plumbing services in Palo Cedro, CA. Water heater repair, tankless upgrades, and emergency plumbing. Call (530) 768-9446.',
};

export default function PaloCedroPage() {
  return (
    <LocationPageTemplate
      locationName="Palo Cedro"
      hero={{
        title: 'Trusted Plumbers Serving Palo Cedro, CA',
        description: 'Professional plumbing services for Palo Cedro homes. Expert water heater repair, tankless installations, and emergency services.',
      }}
      about={{
        intro: "Palo Cedro homeowners trust Topline Plumbing for honest, reliable service. We treat every home with the care and respect it deserves.",
        details: "With 30+ years of experience serving Northern California, we bring professional expertise and transparent pricing to every job. From routine maintenance to emergency repairs, we're here for you.",
      }}
      services={[
        {
          title: 'Tankless Water Heater Upgrades',
          description: 'Upgrade to endless hot water and save up to 30% on energy bills. Free consultation and professional installation.',
          href: '/services/tankless',
        },
        {
          title: 'Water Heater Maintenance & Repair',
          description: 'Routine service starting at $127. Keep your water heater running efficiently and prevent costly breakdowns.',
          href: '/services/water-heater-repair',
        },
        {
          title: '24/7 Emergency Services',
          description: 'Plumbing emergencies don\'t wait for business hours. We\'re available 24/7 with fast response and upfront pricing.',
          href: '/services/emergency',
        },
      ]}
    />
  );
}
