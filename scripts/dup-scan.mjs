// Doorway/duplication scan for the new combo pages.
// Extracts visible text (JSX string literals + text nodes), normalizes to sentences,
// then reports: per-service-group avg pairwise similarity, and sentences shared across >=3 pages.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = '/Users/blakeernst/Projects/toplineplumbing530/app';
const GROUPS = {
  emergency: ['emergency-plumber-redding','emergency-plumber-anderson','emergency-plumber-shasta-lake','emergency-plumber-palo-cedro','emergency-plumber-bella-vista','emergency-plumber-red-bluff'],
  drain: ['drain-cleaning-redding','drain-cleaning-anderson','drain-cleaning-shasta-lake','drain-cleaning-palo-cedro','drain-cleaning-bella-vista','drain-cleaning-red-bluff'],
  'wh-repair': ['water-heater-repair-shasta-lake','water-heater-repair-anderson'],
  sewer: ['sewer-line-shasta-lake','sewer-line-anderson'],
};

// crude but effective: pull human-readable text out of the TSX
function extractText(tsx) {
  // drop schema <script> JSON-LD blocks and the metadata/schema const objects (not visible content)
  let s = tsx;
  // remove import lines
  s = s.replace(/^import .*$/gm, '');
  // grab JSX text between > and < , plus quoted strings used as copy
  const textNodes = [...s.matchAll(/>([^<>{}]+)</g)].map(m => m[1]);
  const quoted = [...s.matchAll(/['"`]([^'"`]{25,})['"`]/g)].map(m => m[1]); // strings >=25 chars = likely copy
  return [...textNodes, ...quoted]
    .join(' ')
    .replace(/\\u[0-9a-f]{4}|&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ');
}

function sentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map(x => x.trim().toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' '))
    .filter(x => x.split(' ').length >= 5); // real sentences only
}

const pageData = {};
for (const group of Object.values(GROUPS)) {
  for (const slug of group) {
    try {
      const tsx = readFileSync(join(ROOT, slug, 'page.tsx'), 'utf8');
      const sents = sentences(extractText(tsx));
      pageData[slug] = { sents, set: new Set(sents), words: sents.join(' ').split(' ').length };
    } catch (e) { pageData[slug] = { sents: [], set: new Set(), words: 0, err: e.message }; }
  }
}

function jaccard(a, b) {
  const inter = [...a].filter(x => b.has(x)).length;
  const uni = new Set([...a, ...b]).size;
  return uni ? inter / uni : 0;
}

console.log('=== PER-GROUP PAIRWISE SENTENCE SIMILARITY (Jaccard) ===');
console.log('(0 = totally unique pages, 1 = identical. >0.5 = doorway risk on main content)\n');
for (const [g, slugs] of Object.entries(GROUPS)) {
  console.log(`# ${g} (${slugs.length} pages)`);
  let sum = 0, n = 0;
  for (let i = 0; i < slugs.length; i++) for (let j = i+1; j < slugs.length; j++) {
    const sim = jaccard(pageData[slugs[i]].set, pageData[slugs[j]].set);
    sum += sim; n++;
  }
  console.log(`  avg pairwise similarity: ${(sum/n).toFixed(3)} | sentence counts: ${slugs.map(s=>pageData[s].sents.length).join(', ')} | word counts: ${slugs.map(s=>pageData[s].words).join(', ')}\n`);
}

console.log('=== SENTENCES REPEATED ACROSS PAGES (the shared/boilerplate content) ===');
const allSlugs = Object.values(GROUPS).flat();
const counts = {};
for (const slug of allSlugs) for (const s of pageData[slug].set) (counts[s] ??= []).push(slug);
const shared = Object.entries(counts).filter(([,v]) => v.length >= 4).sort((a,b)=>b[1].length-a[1].length);
console.log(`\n${shared.length} sentences appear on >=4 pages. Top offenders (these are find-and-replace risk if they carry the main message):\n`);
for (const [sent, slugs] of shared.slice(0, 40)) {
  console.log(`[${slugs.length}x] ${sent.slice(0,120)}`);
}
