#!/usr/bin/env node
// Regenerates the deployed pages from the editable .dc.html sources.
// Usage: node scripts/build-publish.mjs
import { readFile, writeFile } from 'node:fs/promises';

const PAGES = {
  'RORR Landing.dc.html': 'index.html',
  'RORR Matches.dc.html': 'matches.html',
  'RORR About.dc.html': 'about.html'
};

const LINKS = [
  ['RORR%20Landing.dc.html', 'index.html'],
  ['RORR%20Matches.dc.html', 'matches.html'],
  ['RORR%20About.dc.html', 'about.html']
];

for (const [src, dest] of Object.entries(PAGES)) {
  let html = await readFile(src, 'utf8');
  for (const [from, to] of LINKS) html = html.split(from).join(to);
  await writeFile(dest, html);
  console.log(`${src} → ${dest} (${html.length} bytes)`);
}
