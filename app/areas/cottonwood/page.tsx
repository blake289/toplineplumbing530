import { Metadata } from 'next';
import AreaPageTemplate from '@/components/templates/AreaPageTemplate';

export const metadata: Metadata = {
  title: 'Plumber in Cottonwood, CA | Topline Plumbing',
  description: 'Licensed plumber in Cottonwood, CA. Well and septic service, drain cleaning, sewer line repair, and water heater service in southern Shasta County. Call (530) 704-6989',
  alternates: { canonical: 'https://toplineplumbingco.com/areas/cottonwood' },
  openGraph: {
    title: 'Plumber in Cottonwood, CA | Topline Plumbing',
    description: 'Licensed plumber in Cottonwood, CA. Well and septic service, drain cleaning, sewer line and water heater service. Call (530) 704-6989',
    url: 'https://toplineplumbingco.com/areas/cottonwood',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Licensed Plumber in Cottonwood, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function CottonwoodPage() {
  return <AreaPageTemplate slug="cottonwood" />;
}
