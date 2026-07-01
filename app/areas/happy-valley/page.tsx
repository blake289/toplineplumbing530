import { Metadata } from 'next';
import AreaPageTemplate from '@/components/templates/AreaPageTemplate';

export const metadata: Metadata = {
  title: 'Plumber in Happy Valley, CA | Topline Plumbing',
  description: 'Licensed plumber serving Happy Valley, CA in rural Shasta County. Well and septic service, sewer line repair, drain cleaning, and water heater service. Call (530) 704-6989',
  alternates: { canonical: 'https://toplineplumbingco.com/areas/happy-valley' },
  openGraph: {
    title: 'Plumber in Happy Valley, CA | Topline Plumbing',
    description: 'Licensed plumber serving Happy Valley, CA. Well and septic service, sewer line repair, drain cleaning, and water heater service. Call (530) 704-6989',
    url: 'https://toplineplumbingco.com/areas/happy-valley',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Licensed Plumber in Happy Valley, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HappyValleyPage() {
  return <AreaPageTemplate slug="happy-valley" />;
}
