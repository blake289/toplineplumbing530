import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Water Heater Repair & Replacement in Redding, CA | Topline Plumbing',
  description: "Topline Plumbing offers expert water heater repair, and same-day replacement in Redding. We've replaced 2,847+ water heaters. Call (530) 768-9446 for a free inspection.",
};

export default function WaterHeaterRepairPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: 'Water Heater Repair & Replacement in Redding, CA — Same-Day Service',
        description: [
          "Is your water heater making strange noises? Running out of hot water faster than usual? Leaking around the base?",
          "Topline Plumbing has replaced 2,847+ water heaters across Northern California. We know how to diagnose problems fast, repair what can be saved, and replace units that are beyond repair — all with same-day service."
        ],
      }}
      stats={[
        {
          value: '15%',
          description: "Routine service can improve your water heater's efficiency by up to 15%, helping it run better and last longer.",
        },
        {
          value: '1,500gal',
          description: 'A well-maintained system can save up to 1,500 gallons of water per year, reducing waste and lowering utility costs.',
        },
        {
          value: '$200',
          description: 'Homeowners can save up to $200 per year on energy bills with regular water heater maintenance.',
        },
      ]}
      whenToRepair={[
        'Your unit is less than 8 years old',
        'The issue is minor (thermostat, heating element)',
        'No signs of corrosion or major leaks',
        'Cost of repair is less than 50% of replacement',
      ]}
      whenToReplace={[
        'Your unit is 10+ years old',
        "You're seeing rusty water or major leaks",
        'Frequent repairs are needed',
        'Your energy bills are climbing',
        'You want to upgrade to tankless',
      ]}
      services={[
        {
          title: 'Routine Maintenance — $127',
          items: [
            'Flush sediment buildup',
            'Test pressure relief valve',
            'Check anode rod',
            'Inspect for leaks and corrosion',
          ],
        },
        {
          title: 'Emergency Repairs',
          items: [
            'Heating element replacement',
            'Thermostat replacement',
            'Pressure relief valve repair',
            'Leak diagnosis and repair',
          ],
        },
        {
          title: 'Full Replacement — From $1,000',
          items: [
            'Traditional tank water heaters',
            'Tankless on-demand systems',
            'Hybrid heat pump water heaters',
            'Professional installation & disposal',
          ],
        },
      ]}
    />
  );
}
