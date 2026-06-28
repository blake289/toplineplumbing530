import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.toplineplumbingco.com' }],
        destination: 'https://toplineplumbingco.com/:path*',
        permanent: true,
      },
      { source: '/cost', destination: '/services', permanent: true },
      { source: '/cost/water-heater-replacement', destination: '/water-heater-replacement-redding', permanent: true },
      { source: '/cost/tankless-installation', destination: '/services/tankless', permanent: true },
      { source: '/cost/drain-cleaning', destination: '/services/drain-cleaning', permanent: true },
      { source: '/cost/emergency-plumbing', destination: '/services/emergency', permanent: true },
      { source: '/cost/repiping', destination: '/services/repiping-services', permanent: true },
      { source: '/financing', destination: '/contact', permanent: true },
      { source: '/areas/auburn', destination: '/areas', permanent: true },
      { source: '/areas/chico', destination: '/areas', permanent: true },
      { source: '/areas/grass-valley', destination: '/areas', permanent: true },
      { source: '/areas/marysville', destination: '/areas', permanent: true },
      { source: '/areas/oroville', destination: '/areas', permanent: true },
      { source: '/areas/paradise', destination: '/areas', permanent: true },
      { source: '/areas/south-lake-tahoe', destination: '/areas', permanent: true },
      { source: '/areas/truckee', destination: '/areas', permanent: true },
      { source: '/areas/yuba-city', destination: '/areas', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default nextConfig;
