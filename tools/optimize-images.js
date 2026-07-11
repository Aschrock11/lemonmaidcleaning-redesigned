#!/usr/bin/env node
/* One-time image optimizer: src/assets/photos/*.jpg → src/assets/optimized/
   Generates 480/960/1600w WebP variants plus a 1200w JPEG (for og:image use).
   Run: node tools/optimize-images.js  (requires: npm install, dev only) */
'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.join(__dirname, '../src/assets/photos');
const OUT = path.join(__dirname, '../src/assets/optimized');
const WIDTHS = [480, 960, 1600];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.jpg'));
  for (const f of files) {
    const name = path.basename(f, '.jpg');
    const input = path.join(SRC, f);
    for (const w of WIDTHS) {
      await sharp(input).resize({ width: w }).webp({ quality: 72 }).toFile(path.join(OUT, `${name}-${w}.webp`));
    }
    // JPEG kept for og:image scrapers with weak WebP support
    await sharp(input).resize({ width: 1200 }).jpeg({ quality: 72, progressive: true }).toFile(path.join(OUT, `${name}.jpg`));
    const orig = fs.statSync(input).size;
    const webp = fs.statSync(path.join(OUT, `${name}-960.webp`)).size;
    console.log(`${name}: ${(orig / 1024).toFixed(0)}KB jpg → ${(webp / 1024).toFixed(0)}KB webp@960`);
  }
})();
