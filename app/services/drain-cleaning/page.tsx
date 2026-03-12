import { Metadata } from 'next';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Drain Cleaning Services in Redding, CA | Topline Plumbing',
  description: 'Professional drain cleaning in Redding starting at $130. We clear tough clogs and backed-up sewer lines. Call (530) 768-9446.',
};

export default function DrainCleaningPage() {
  return (
    <ServicePageTemplate
      hero={{
        title: 'Drain Cleaning in Redding — Fast, Thorough, & Guaranteed',
        description: [
          "Slow drain? Backed-up sink? Sewage smell? Don't reach for the chemical drain cleaner — it only masks the problem.",
          "Topline Plumbing uses professional mechanical power augers to clear tough clogs and backed-up sewer lines. We don't just push the clog further down; we remove it completely."
        ],
      }}
      services={[
        {
          title: 'Power Auger Cleaning — Starting at $130',
          items: [
            'Mechanical augering for stubborn clogs',
            'Sinks, toilets, and shower drains',
            'Main sewer line cleaning',
            'Clog removal guarantee',
          ],
        },
        {
          title: 'Sewer Line Inspection',
          items: [
            'Camera inspection to locate blockages',
            'Identify root intrusion or pipe damage',
            'Preventive maintenance recommendations',
            'Detailed video report',
          ],
        },
        {
          title: 'Same-Day Service',
          items: [
            'Fast response for urgent clogs',
            'No after-hours premium charges',
            'Upfront pricing before we start',
            'Satisfaction guaranteed',
          ],
        },
      ]}
    />
  );
}
