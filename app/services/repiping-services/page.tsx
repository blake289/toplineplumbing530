import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Repiping Services in Redding, CA | Topline Plumbing',
  description: 'Professional repiping services in Redding. Upgrade old galvanized or polybutylene pipes to reliable PEX or Copper. Call (530) 768-9446.',
};

export default function RepipingServicesPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: 'Repiping Services in Redding — Upgrade Your Plumbing System',
        description: [
          "Old galvanized or polybutylene pipes causing low water pressure, rusty water, or frequent leaks?",
          "Topline Plumbing specializes in whole-house repiping using modern PEX or copper pipes. We'll upgrade your plumbing system for better water quality, pressure, and reliability."
        ],
      }}
      whenToRepair={[
        'Low water pressure throughout the house',
        'Rusty or discolored water',
        'Frequent pipe leaks',
        'Galvanized pipes installed before 1960',
        'Polybutylene (gray plastic) pipes',
      ]}
      services={[
        {
          title: 'Complete Home Repiping',
          items: [
            'PEX pipe installation (flexible, durable)',
            'Copper pipe installation (traditional)',
            'Whole-house water line replacement',
            'Minimal wall cutting and patching',
          ],
        },
        {
          title: 'Partial Repiping',
          items: [
            'Single room or bathroom repiping',
            'Hot water line replacement',
            'Cold water line replacement',
            'Main water line replacement',
          ],
        },
        {
          title: 'Why Repipe?',
          items: [
            'Improve water pressure and quality',
            'Eliminate rust and corrosion',
            'Prevent future leaks and water damage',
            'Increase home value',
          ],
        },
      ]}
    />
  );
}
