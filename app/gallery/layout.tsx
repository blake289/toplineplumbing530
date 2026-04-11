import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plumbing Work Gallery | Topline Plumbing Redding, CA',
  description: 'See our work — water heater installs, drain cleaning, repiping, and more. Topline Plumbing serves Redding & Northern California. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/gallery' },
  openGraph: {
    title: 'Plumbing Work Gallery | Topline Plumbing Redding, CA',
    description: 'See our work — water heater installs, drain cleaning, repiping, and more. Topline Plumbing serves Redding & Northern California.',
    url: 'https://toplineplumbingco.com/gallery',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/water-heater.webp', width: 1200, height: 630, alt: 'Topline Plumbing Work Gallery — Redding, CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
