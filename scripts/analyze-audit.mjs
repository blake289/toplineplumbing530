import fs from 'fs';

const d = JSON.parse(fs.readFileSync('.planning/mobile-audit-2026-05-13/audit-data.json'));

console.log('=== AUDIT SUMMARY ===');
console.log('Total pages:', d.length);
console.log('Errors:', d.filter(x => x.error).length);
console.log('Pages with horizontal overflow:', d.filter(x => x.hasHorizontalOverflow).length);
console.log('Pages with console errors:', d.filter(x => (x.consoleErrors || []).length > 0).length);
console.log();

// Filter "real" small tap targets — exclude inline links (no href starting with /, or text length > 25)
function realSmallTaps(taps) {
  return (taps || []).filter(t => {
    // Standalone buttons or icon-buttons or short-text CTAs
    // Exclude long-text inline links (those are body text, not tap targets)
    if (t.text.length > 25) return false;
    return true;
  });
}

console.log('=== REAL TAP TARGET ISSUES (filtered) ===');
d.forEach(x => {
  const real = realSmallTaps(x.smallTaps);
  if (real.length > 0) {
    console.log(`\n  ${x.label}:`);
    real.slice(0, 6).forEach(t => {
      console.log(`    "${t.text}" ${t.w}x${t.h}px  href=${t.href || 'n/a'}`);
    });
  }
});

console.log();
console.log('=== HORIZONTAL OVERFLOW ===');
d.filter(x => x.hasHorizontalOverflow).forEach(x => {
  console.log(`  ${x.label} — scrollW=${x.scrollWidth} clientW=${x.clientWidth}`);
  (x.overflowingEls || []).slice(0, 3).forEach(el => {
    console.log(`    ${el.tag}.${el.cls.slice(0, 50)} (right=${el.right}, w=${el.width})`);
  });
});

console.log();
console.log('=== SMALLEST VISIBLE FONT (under 12px) ===');
d.filter(x => x.smallestFontSize && x.smallestFontSize < 12).forEach(x => {
  console.log(`  ${x.label.padEnd(30)} ${x.smallestFontSize}px`);
});

console.log();
console.log('=== CONSOLE ERRORS ===');
d.filter(x => (x.consoleErrors || []).length > 0).forEach(x => {
  console.log(`  ${x.label}:`);
  x.consoleErrors.slice(0, 3).forEach(e => console.log(`    ${e.slice(0, 200)}`));
});

console.log();
console.log('=== CTAS ON KEY PAGES ===');
['homepage', 'svc-emergency', 'svc-drain-cleaning', 'area-redding', 'area-truckee'].forEach(label => {
  const p = d.find(x => x.label === label);
  if (!p) return;
  const tel = (p.ctas || []).filter(c => c.type === 'tel' && c.visible).length;
  const sms = (p.ctas || []).filter(c => c.type === 'sms' && c.visible).length;
  const mail = (p.ctas || []).filter(c => c.type === 'mailto' && c.visible).length;
  console.log(`  ${label.padEnd(20)} tel=${tel} sms=${sms} mail=${mail}`);
});

console.log();
console.log('=== ERRORED PAGES ===');
d.filter(x => x.error).forEach(x => {
  console.log(`  ${x.label}: ${x.error.slice(0, 100)}`);
});
