#!/usr/bin/env node
/* LemonMaid Cleaning site generator.
   Usage: node build.js
   Output: docs/ (ready for GitHub Pages, "deploy from /docs"). */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'docs');
const SRC = path.join(ROOT, 'src');
const { BIZ, CITIES } = require('./src/site');

const pages = [
  require('./src/pages/home'),
  ...require('./src/pages/services'),
  ...require('./src/pages/landers'),
  ...require('./src/pages/cities'),
  ...require('./src/pages/blog'),
  ...require('./src/pages/misc'),
];

/* Clean output dir */
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

/* Write pages */
for (const page of pages) {
  const dest = path.join(OUT, page.path);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, page.html);
}

/* Static assets */
const copy = (from, to) => {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
};
fs.mkdirSync(path.join(OUT, 'styles'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'scripts'), { recursive: true });
copy(path.join(SRC, 'css/main.css'), path.join(OUT, 'styles/main.css'));
copy(path.join(SRC, 'js/main.js'), path.join(OUT, 'scripts/main.js'));

for (const f of ['favicon.ico', 'favicon-32x32.png', 'favicon-16x16.png', 'apple-touch-icon.png']) {
  copy(path.join(SRC, 'assets', f), path.join(OUT, f));
}
fs.mkdirSync(path.join(OUT, 'images'), { recursive: true });
for (const f of ['logo.png', 'logo.svg']) {
  copy(path.join(SRC, 'assets', f), path.join(OUT, 'images', f));
}
for (const f of fs.readdirSync(path.join(SRC, 'assets/photos'))) {
  copy(path.join(SRC, 'assets/photos', f), path.join(OUT, 'images', f));
}

/* sitemap.xml — same URL set as the original site */
const urls = [
  '/', '/services', '/deep-cleaning-columbus-ohio', '/move-out-cleaning-columbus-ohio',
  '/airbnb-cleaning-columbus-ohio', '/pricing', '/about', '/booking', '/contact-us', '/blog',
  '/blog/how-much-does-house-cleaning-cost-columbus-ohio',
  '/blog/deep-clean-vs-standard-clean',
  '/blog/how-to-prepare-for-a-cleaning-service',
  ...CITIES.map((c) => `/house-cleaning-${c.slug}-ohio`),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${BIZ.domain}${u}</loc></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap);

fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${BIZ.domain}/sitemap.xml\n`);
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

/* NOTE: CNAME (www.lemonmaidcleaning.com) is intentionally NOT written here.
   Add it at cutover time — two GitHub Pages repos can't claim the same domain. */

console.log(`Built ${pages.length} pages → docs/`);
