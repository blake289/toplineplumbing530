import { Metadata } from 'next';
import AreaPageTemplate from '@/components/templates/AreaPageTemplate';

export const metadata: Metadata = {
  title: 'Plumber in Lake California, CA | Topline Plumbing',
  description: 'Licensed plumber serving Lake California, CA in Tehama County. Water heater repair and replacement, drain cleaning, leak detection, and repiping. Call (530) 704-6989',
  alternates: { canonical: 'https://toplineplumbingco.com/areas/lake-california' },
  openGraph: {
    title: 'Plumber in Lake California, CA | Topline Plumbing',
    description: 'Licensed plumber serving Lake California, CA. Water heater service, drain cleaning, leak detection, and repiping. Call (530) 704-6989',
    url: 'https://toplineplumbingco.com/areas/lake-california',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing — Licensed Plumber in Lake California, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function LakeCaliforniaPage() {
  return <AreaPageTemplate slug="lake-california" />;
}
