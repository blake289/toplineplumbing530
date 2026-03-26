import type { Metadata } from "next";
import { Montserrat, Poppins, Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/layout/SchemaMarkup";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-btn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Topline Plumbing | Redding CA Plumber — Same-Day Service",
  description: "Redding's trusted plumber. Fast, reliable, same-day emergency plumbing service. Water heater repair, drain cleaning, leak detection. Call (530) 768-9446.",
  keywords: "plumber Redding CA, emergency plumbing Redding, water heater repair Redding, drain cleaning Redding, plumbing service Shasta Lake Anderson CA",
  metadataBase: new URL('https://toplineplumbingco.com'),
  openGraph: {
    title: "Topline Plumbing | Redding's Trusted Plumber",
    description: "Fast, licensed plumbing in Redding, CA. 24/7 emergency service, water heater repair, drain cleaning. Same-day service available. Call (530) 768-9446.",
    url: 'https://toplineplumbingco.com',
    siteName: 'Topline Plumbing',
    images: [
      {
        url: '/images/water-heater.webp',
        width: 1200,
        height: 630,
        alt: 'Topline Plumbing — Redding CA Licensed Plumber',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Topline Plumbing | Redding's Trusted Plumber",
    description: "Fast, licensed plumbing in Redding, CA. 24/7 emergency service. Call (530) 768-9446.",
    images: ['/images/water-heater.webp'],
  },
  icons: {
    icon: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/water-heater.webp" fetchPriority="high" />
        <SchemaMarkup />
      </head>
      <body>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
