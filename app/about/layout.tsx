import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Topline Plumbing | Redding, CA Since 1998',
  description: 'Family-owned plumbing company serving Redding & Northern California since 1998. Licensed, insured, and trusted by thousands of homeowners. Call (530) 768-9446.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
