import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      { source: '/cost', destination: '/services', permanent: true },
      { source: '/cost/water-heater-replacement', destination: '/water-heater-replacement-redding', permanent: true },
      { source: '/cost/tankless-installation', destination: '/services/tankless', permanent: true },
      { source: '/cost/drain-cleaning', destination: '/services/drain-cleaning', permanent: true },
      { source: '/cost/emergency-plumbing', destination: '/services/emergency', permanent: true },
      { source: '/cost/repiping', destination: '/services/repiping-services', permanent: true },
      { source: '/financing', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
