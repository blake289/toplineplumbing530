import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Topline Plumbing | Redding, CA Since 1998',
  description: 'Family-owned plumbing company serving Redding & Northern California since 1998. Licensed, insured, and trusted by thousands of homeowners. Call (530) 704-6989.',
  alternates: { canonical: 'https://toplineplumbingco.com/about' },
  openGraph: {
    title: 'About Topline Plumbing | Redding, CA Since 1998',
    description: 'Family-owned plumbing company serving Redding & Northern California since 1998. Licensed, insured, and trusted by thousands of homeowners.',
    url: 'https://toplineplumbingco.com/about',
    siteName: 'Topline Plumbing',
    images: [{ url: '/images/joe-paulette.webp', width: 1200, height: 630, alt: 'Joe and Paulette, Owners of Topline Plumbing, Redding CA' }],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
