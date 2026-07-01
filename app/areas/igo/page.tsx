import { Metadata } from 'next';
import AreaPageTemplate from '@/components/templates/AreaPageTemplate';

export const metadata: Metadata = {
  title: 'Plumber in Igo, CA | Topline Plumbing',
  description: 'Licensed plumber serving Igo, CA in rural west Shasta County. Well-system service, septic-safe drain cleaning, water heater repair, and burst pipe repair. Call (530) 704-6989',
  alternates: { canonical: 'https://toplineplumbingco.com/areas/igo' },
  openGraph: {
    title: 'Plumber in Igo, CA | Topline Plumbing',
    description: 'Licensed plumber serving Igo, CA. Well-system service, septic-safe drain cleaning, water heater and burst pipe repair. Call (530) 704-6989',
    url: 'https://toplineplumbingco.com/areas/igo',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Licensed Plumber in Igo, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function IgoPage() {
  return <AreaPageTemplate slug="igo" />;
}
