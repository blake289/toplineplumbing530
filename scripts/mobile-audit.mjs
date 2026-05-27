import { chromium, devices } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE = 'http://localhost:3001';
const OUT = '.planning/mobile-audit-2026-05-13';

const pages = [
  ['/', 'homepage'],
  ['/about', 'about'],
  ['/contact', 'contact'],
  ['/faq', 'faq'],
  ['/gallery', 'gallery'],
  ['/resources', 'resources'],
  ['/water-heater-replacement-redding', 'wh-replacement-redding'],
  // Service pages
  ['/services/emergency', 'svc-emergency'],
  ['/services/drain-cleaning', 'svc-drain-cleaning'],
  ['/services/water-heater-repair', 'svc-water-heater'],
  ['/services/sewer-line', 'svc-sewer-line'],
  ['/services/tankless', 'svc-tankless'],
  ['/services/repiping-services', 'svc-repiping'],
  ['/services/leak-detection', 'svc-leak-detection'],
  ['/services/gas-line', 'svc-gas-line'],
  ['/services/fixture-installs', 'svc-fixture-installs'],
  // Area pages — all 15
  ['/areas', 'areas-index'],
  ['/areas/redding', 'area-redding'],
  ['/areas/anderson', 'area-anderson'],
  ['/areas/shasta-lake', 'area-shasta-lake'],
  ['/areas/palo-cedro', 'area-palo-cedro'],
  ['/areas/bella-vista', 'area-bella-vista'],
  ['/areas/red-bluff', 'area-red-bluff'],
  ['/areas/chico', 'area-chico'],
  ['/areas/paradise', 'area-paradise'],
  ['/areas/oroville', 'area-oroville'],
  ['/areas/yuba-city', 'area-yuba-city'],
  ['/areas/marysville', 'area-marysville'],
  ['/areas/auburn', 'area-auburn'],
  ['/areas/grass-valley', 'area-grass-valley'],
  ['/areas/truckee', 'area-truckee'],
  ['/areas/south-lake-tahoe', 'area-south-lake-tahoe'],
];

const browser = await chromium.launch();
const context = await browser.newContext({
  ...devices['iPhone 12'],
  // iPhone 12: 390×844, scale 3, isMobile true
});

const results = [];

for (const [route, label] of pages) {
  const page = await context.newPage();
  const consoleErrors = [];
  const consoleWarnings = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
    if (msg.type() === 'warning') consoleWarnings.push(msg.text());
  });
  page.on('pageerror', (err) => consoleErrors.push(`PAGEERROR: ${err.message}`));

  try {
    const resp = await page.goto(BASE + route, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(500);

    // Scroll through the page to trigger IntersectionObserver-based animations (count-ups, reveals)
    await page.evaluate(async () => {
      const total = document.body.scrollHeight;
      for (let y = 0; y <= total; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 800));
    });
    await page.waitForTimeout(2000); // let count-up animations finish (1800ms)

    // Capture metrics
    const metrics = await page.evaluate(() => {
      const body = document.body;
      const doc = document.documentElement;
      const html = document.documentElement;

      // Horizontal overflow detection
      const scrollWidth = Math.max(body.scrollWidth, doc.scrollWidth);
      const clientWidth = html.clientWidth;
      const hasHorizontalOverflow = scrollWidth > clientWidth + 1;

      // Find elements wider than viewport (likely culprits)
      const allEls = document.querySelectorAll('body *');
      const overflowingEls = [];
      for (const el of allEls) {
        const rect = el.getBoundingClientRect();
        if (rect.right > clientWidth + 1 && rect.width > 50) {
          overflowingEls.push({
            tag: el.tagName,
            cls: (el.className && typeof el.className === 'string') ? el.className.slice(0, 60) : '',
            right: Math.round(rect.right),
            width: Math.round(rect.width),
          });
          if (overflowingEls.length >= 5) break;
        }
      }

      // Tap targets: links and buttons
      const tapEls = document.querySelectorAll('a, button, [role="button"]');
      const smallTaps = [];
      tapEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44)) {
          const text = (el.textContent || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 40);
          smallTaps.push({
            text,
            w: Math.round(rect.width),
            h: Math.round(rect.height),
            href: el.getAttribute('href') || null,
          });
        }
      });

      // CTAs: tel:, sms:, mailto:, and form-submit buttons
      const ctas = [];
      document.querySelectorAll('a[href^="tel:"], a[href^="sms:"], a[href^="mailto:"]').forEach((el) => {
        const rect = el.getBoundingClientRect();
        ctas.push({
          type: el.getAttribute('href').split(':')[0],
          href: el.getAttribute('href'),
          text: (el.textContent || '').trim().slice(0, 40),
          w: Math.round(rect.width),
          h: Math.round(rect.height),
          visible: rect.width > 0 && rect.height > 0,
        });
      });

      // Smallest visible text (font-size)
      let smallestFs = Infinity;
      const textEls = document.querySelectorAll('p, span, li, a, button, h1, h2, h3, h4, h5, h6');
      textEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0 && el.textContent?.trim().length > 5) {
          const fs = parseFloat(getComputedStyle(el).fontSize);
          if (fs < smallestFs) smallestFs = fs;
        }
      });

      return {
        scrollWidth,
        clientWidth,
        hasHorizontalOverflow,
        overflowingEls: overflowingEls.slice(0, 5),
        tapTargetTotal: tapEls.length,
        smallTaps: smallTaps.slice(0, 10),
        smallTapsCount: smallTaps.length,
        ctas: ctas.slice(0, 12),
        smallestFontSize: smallestFs === Infinity ? null : Math.round(smallestFs * 10) / 10,
      };
    });

    // Screenshot full page
    const shotPath = path.join(OUT, `${label}.png`);
    await page.screenshot({ path: shotPath, fullPage: true });

    const result = {
      route,
      label,
      status: resp?.status() ?? 'unknown',
      consoleErrors,
      consoleWarnings: consoleWarnings.filter((w) => !w.includes('punycode') && !w.includes('node deprecation')),
      ...metrics,
    };
    results.push(result);
    console.log(`✓ ${label.padEnd(28)} status=${result.status} overflow=${metrics.hasHorizontalOverflow} smallTaps=${metrics.smallTapsCount} minFs=${metrics.smallestFontSize}px`);
  } catch (e) {
    console.log(`✗ ${label} — ${e.message}`);
    results.push({ route, label, error: e.message });
  } finally {
    await page.close();
  }
}

fs.writeFileSync(path.join(OUT, 'audit-data.json'), JSON.stringify(results, null, 2));
console.log(`\nWrote ${results.length} results to ${OUT}/audit-data.json`);

await browser.close();
