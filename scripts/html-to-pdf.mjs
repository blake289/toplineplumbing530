import { chromium } from 'playwright';

const [, , htmlPath, pdfPath] = process.argv;
if (!htmlPath || !pdfPath) {
  console.error('usage: node html-to-pdf.mjs <input.html> <output.pdf>');
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('file://' + htmlPath, { waitUntil: 'load' });
await page.pdf({
  path: pdfPath,
  format: 'Letter',
  printBackground: true,
  margin: { top: '16mm', bottom: '16mm', left: '14mm', right: '14mm' },
});
await browser.close();
console.log('PDF written:', pdfPath);
