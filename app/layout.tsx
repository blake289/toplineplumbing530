import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/layout/SchemaMarkup";
import MobileCallFab from "@/components/layout/MobileCallFab";
import PhoneCallTracker from "@/components/analytics/PhoneCallTracker";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Topline Plumbing | Redding CA Plumber — Same-Day Service",
  description: "Redding's trusted plumber. Fast, reliable, same-day emergency plumbing service. Water heater repair, drain cleaning, leak detection. Call (530) 704-6989.",
  keywords: "plumber Redding CA, emergency plumbing Redding, water heater repair Redding, drain cleaning Redding, plumbing service Shasta Lake Anderson CA",
  metadataBase: new URL('https://toplineplumbingco.com'),
  openGraph: {
    title: "Topline Plumbing | Redding's Trusted Plumber",
    description: "Fast, licensed plumbing in Redding, CA. Emergency plumbing, water heater repair, drain cleaning. Same-day service Mon–Fri 8:00a–4:30p. Call (530) 704-6989.",
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
    description: "Fast, licensed plumbing in Redding, CA. Same-day emergency service Mon–Fri 8a–4:30p. Call (530) 704-6989.",
    images: ['/images/water-heater.webp'],
  },
  alternates: {
    canonical: 'https://toplineplumbingco.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <SchemaMarkup />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM context" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3ZFMX0QHX2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ZFMX0QHX2');
          `}
        </Script>
        <PhoneCallTracker />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallFab />
      </body>
    </html>
  );
}
