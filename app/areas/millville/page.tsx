import { Metadata } from 'next';
import AreaPageTemplate from '@/components/templates/AreaPageTemplate';

export const metadata: Metadata = {
  title: 'Plumber in Millville, CA | Topline Plumbing',
  description: 'Licensed plumber in Millville, CA. Well-system service, septic-safe drain cleaning, water heater repair, and emergency plumbing in rural east Shasta County. Call (530) 704-6989',
  alternates: { canonical: 'https://toplineplumbingco.com/areas/millville' },
  openGraph: {
    title: 'Plumber in Millville, CA | Topline Plumbing',
    description: 'Licensed plumber in Millville, CA. Well-system service, septic-safe drain cleaning, water heater repair. Call (530) 704-6989',
    url: 'https://toplineplumbingco.com/areas/millville',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Licensed Plumber in Millville, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function MillvillePage() {
  return <AreaPageTemplate slug="millville" />;
}
