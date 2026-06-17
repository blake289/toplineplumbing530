import type { MetadataRoute } from 'next';

const BASE_URL = 'https://toplineplumbingco.com';

// Honest build stamp. Update when site content is materially revised.
const BUILD_DATE = new Date('2026-06-11');

// priority tiers: home 1.0, money pages 0.8, hubs 0.6, legal 0.3
const moneyPages = [
  '/services/drain-cleaning',
  '/services/emergency',
  '/services/fixture-installs',
  '/services/gas-line',
  '/services/leak-detection',
  '/services/repiping-services',
  '/services/sewer-line',
  '/services/tankless',
  '/services/water-heater-repair',
  '/commercial-plumbing-redding',
  '/water-heater-replacement-redding',
  '/drain-cleaning-anderson',
  '/drain-cleaning-bella-vista',
  '/drain-cleaning-palo-cedro',
  '/drain-cleaning-red-bluff',
  '/drain-cleaning-redding',
  '/drain-cleaning-shasta-lake',
  '/emergency-plumber-anderson',
  '/emergency-plumber-bella-vista',
  '/emergency-plumber-palo-cedro',
  '/emergency-plumber-red-bluff',
  '/emergency-plumber-redding',
  '/emergency-plumber-shasta-lake',
  '/sewer-line-anderson',
  '/sewer-line-bella-vista',
  '/sewer-line-palo-cedro',
  '/sewer-line-red-bluff',
  '/sewer-line-redding',
  '/sewer-line-shasta-lake',
  '/water-heater-repair-redding',
  '/water-heater-repair-anderson',
  '/water-heater-repair-bella-vista',
  '/water-heater-repair-palo-cedro',
  '/water-heater-repair-red-bluff',
  '/water-heater-repair-shasta-lake',
];

const hubPages = [
  '/about',
  '/services',
  '/areas',
  '/areas/anderson',
  '/areas/bella-vista',
  '/areas/palo-cedro',
  '/areas/red-bluff',
  '/areas/redding',
  '/areas/shasta-lake',
  '/contact',
  '/faq',
  '/gallery',
  '/resources',
  '/resources/burst-pipe-emergency-guide',
  '/resources/how-to-shut-off-main-water-valve',
  '/resources/water-heater-failure-warning-signs',
];

const legalPages = ['/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    route: string,
    priority: number,
  ): MetadataRoute.Sitemap[number] => ({
    url: `${BASE_URL}${route}`,
    lastModified: BUILD_DATE,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority,
  });

  return [
    entry('/', 1),
    ...moneyPages.map((route) => entry(route, 0.8)),
    ...hubPages.map((route) => entry(route, 0.6)),
    ...legalPages.map((route) => entry(route, 0.3)),
  ];
}
