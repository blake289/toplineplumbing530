import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plumbing Work Gallery | Topline Plumbing Redding, CA',
  description: 'See our work — water heater installs, drain cleaning, repiping, and more. Topline Plumbing serves Redding & Northern California. Call (530) 768-9446.',
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
