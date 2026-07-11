/* Shared data, layout, and components for the LemonMaid static site generator. */
'use strict';

const BIZ = {
  name: 'LemonMaid Cleaning',
  domain: 'https://www.lemonmaidcleaning.com',
  phone: '(614) 756-2656',
  phoneHref: 'tel:+16147562656',
  email: 'support@lemonmaidcleaning.com',
  booking: 'https://lemonmaidcleaning.bookingkoala.com/booknow?embed=true',
  hours: 'Mon–Sun 8:00 AM–8:00 PM',
};

const CITIES = [
  { slug: 'columbus', name: 'Columbus', hoods: 'German Village, the Short North, Clintonville, and Victorian Village' },
  { slug: 'dublin', name: 'Dublin', hoods: 'Bridge Park, Muirfield Village, and Historic Dublin' },
  { slug: 'hilliard', name: 'Hilliard', hoods: 'Old Hilliard, Ballantrae, and Heritage Preserve' },
  { slug: 'powell', name: 'Powell', hoods: 'Golf Village, Liberty Township, and downtown Powell' },
  { slug: 'lewis-center', name: 'Lewis Center', hoods: 'the Polaris area, Alum Creek, and the Olentangy school district' },
  { slug: 'upper-arlington', name: 'Upper Arlington', hoods: 'Old Arlington, Kingsdale, and the Lane Avenue corridor' },
  { slug: 'bexley', name: 'Bexley', hoods: 'Drexel, Main Street, and the Capital University area' },
  { slug: 'gahanna', name: 'Gahanna', hoods: 'Creekside, Olde Gahanna, and the Academy Park area' },
  { slug: 'new-albany', name: 'New Albany', hoods: 'Market Square, Fenway, and the country club communities' },
  { slug: 'westerville', name: 'Westerville', hoods: 'Uptown Westerville, the Highlands, and the Otterbein University area' },
];

const REVIEWS = [
  {
    name: 'Paige M.', initial: 'P', color: '#1B8A5A', where: 'Columbus, OH',
    text: 'The cleaner was incredibly detail oriented and so sweet. Everything looked amazing, and it was such a relief to not have to worry about cleaning myself. You can really tell she took her time and cared about the work she was doing.',
  },
  {
    name: 'Annie N.', initial: 'A', color: '#F2A007', where: 'Columbus, OH',
    text: 'Lisa did a wonderful job on our deep clean! Staff on the phone are very sweet and kind. They’re flexible and able to accommodate our busy schedule. Looking forward to continued services!',
  },
  {
    name: 'Pooja K.', initial: 'P', color: '#0D5C3C', where: 'Columbus, OH',
    text: 'Everything was spotless and perfectly dusted, even the plants! No streaks, got rid of all the pet hair, and bathrooms were squeaky clean. So impressed with the attention to detail. Highly recommend!',
  },
];

/* Inline SVG icons (stroke inherits currentColor unless filled) */
const I = (paths, opts = {}) => {
  const size = opts.size || 20;
  const stroke = opts.fill ? 'none' : 'currentColor';
  const fill = opts.fill || 'none';
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
};

const ICONS = {
  phone: (s) => I('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>', { size: s }),
  mail: (s) => I('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>', { size: s }),
  clock: (s) => I('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', { size: s }),
  pin: (s) => I('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>', { size: s }),
  check: (s) => I('<polyline points="20 6 9 17 4 12"/>', { size: s }),
  arrow: (s) => I('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>', { size: s }),
  shield: (s) => I('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>', { size: s }),
  calendar: (s) => I('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/>', { size: s }),
  leaf: (s) => I('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>', { size: s }),
  medal: (s) => I('<circle cx="12" cy="9" r="6"/><path d="M9 14.5 7 22l5-3 5 3-2-7.5"/><path d="m9.5 9 1.7 1.7L14.5 7.4"/>', { size: s }),
  home: (s) => I('<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><polyline points="9 22 9 14 15 14 15 22"/>', { size: s }),
  sparkle: (s) => I('<path d="M12 2l2.1 6.9L21 11l-6.9 2.1L12 20l-2.1-6.9L3 11l6.9-2.1L12 2z" fill="currentColor" stroke="none"/>', { size: s, fill: 'currentColor' }),
  key: (s) => I('<circle cx="7.5" cy="15.5" r="4.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>', { size: s }),
  broom: (s) => I('<path d="m13 11 8-8"/><path d="M13.5 11.5 11 9 3 21l6.5-2.5L13.5 11.5z"/><path d="m6 17 2 2"/>', { size: s }),
  refresh: (s) => I('<path d="M3 12a9 9 0 0 1 15.36-6.36L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.36 6.36L3 16"/><path d="M3 21v-5h5"/>', { size: s }),
};

const STARS = '★★★★★';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Lemon squiggle underline for hero words */
const squiggle = (word) =>
  `<span class="squiggle">${word}<svg viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true"><path d="M4 16 C 40 6, 80 20, 116 12 S 190 8, 216 14" fill="none" stroke="#FFD91E" stroke-width="9" stroke-linecap="round"/></svg></span>`;

/* ------------------------------------------------------------------ layout */

function topbar() {
  return `<div class="topbar"><div class="container">
    <div class="tb-left tb-item">${ICONS.phone(15)}<a href="${BIZ.phoneHref}">Call or text ${BIZ.phone}</a></div>
    <div class="tb-right">
      <span class="tb-item">${ICONS.clock(15)}${BIZ.hours}, 7 days a week</span>
      <span class="tb-item"><span class="tb-stars">${STARS}</span>5.0 rated by Columbus homeowners</span>
    </div>
  </div></div>`;
}

function header(R, active) {
  const nav = [
    ['home', 'index.html', 'Home'],
    ['services', 'services.html', 'Services'],
    ['pricing', 'pricing.html', 'Pricing'],
    ['about', 'about.html', 'About'],
    ['blog', 'blog/index.html', 'Blog'],
    ['contact', 'contact-us.html', 'Contact'],
  ];
  const links = nav.map(([key, href, label]) =>
    `<a${key === active ? ' class="active"' : ''} href="${R}${href}">${label}</a>`).join('');
  return `<header class="site-header"><div class="container nav-wrap">
    <a class="logo" href="${R}index.html"><img src="${R}images/logo.png" alt="LemonMaid Cleaning logo" width="120" height="120"></a>
    <nav class="nav-links" aria-label="Main navigation">${links}
      <a class="btn btn-primary nav-book-mobile" href="${BIZ.booking}">Book Now ${ICONS.arrow(16)}</a>
      <a class="nav-phone" href="${BIZ.phoneHref}">${ICONS.phone(16)} ${BIZ.phone}</a>
    </nav>
    <div class="nav-actions">
      <a class="nav-phone" href="${BIZ.phoneHref}">${ICONS.phone(17)} <span>${BIZ.phone}</span></a>
      <a class="btn btn-primary" href="${BIZ.booking}">Book Now</a>
    </div>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span class="bar"></span><span class="bar"></span><span class="bar"></span></button>
  </div></header>`;
}

function footer(R) {
  const year = 2026;
  const areaLinks = CITIES.map((c) => `<a href="${R}house-cleaning-${c.slug}-ohio.html">${c.name}</a>`).join('');
  return `<footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div>
        <a class="f-logo" href="${R}index.html"><img src="${R}images/logo.png" alt="LemonMaid Cleaning logo" width="120" height="120"></a>
        <p>Columbus’s trusted house cleaning service. Locally owned, fully insured, and obsessed with the details — so you can get your weekends back.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <div class="f-links">
          <a href="${R}index.html">Home</a>
          <a href="${R}services.html">Services</a>
          <a href="${R}pricing.html">Pricing</a>
          <a href="${R}about.html">About</a>
          <a href="${R}blog/index.html">Blog</a>
          <a href="${R}contact-us.html">Contact</a>
          <a href="${BIZ.booking}">Book Now</a>
        </div>
      </div>
      <div>
        <h3>Services</h3>
        <div class="f-links">
          <a href="${R}services.html">Standard Cleaning</a>
          <a href="${R}deep-cleaning-columbus-ohio.html">Deep Cleaning</a>
          <a href="${R}move-out-cleaning-columbus-ohio.html">Move-In / Move-Out</a>
          <a href="${R}airbnb-cleaning-columbus-ohio.html">Airbnb &amp; STR Cleaning</a>
        </div>
        <h3 style="margin-top:26px">Service Areas</h3>
        <div class="f-links" style="grid-template-columns:1fr 1fr; display:grid;">${areaLinks}</div>
      </div>
      <div>
        <h3>Get in Touch</h3>
        <div class="f-contact">
          <span class="tb-item">${ICONS.phone(17)}<a href="${BIZ.phoneHref}">${BIZ.phone}</a></span>
          <span class="tb-item">${ICONS.mail(17)}<a href="mailto:${BIZ.email}">${BIZ.email}</a></span>
          <span class="tb-item">${ICONS.clock(17)}<span>${BIZ.hours}<br>Open 7 days a week</span></span>
          <span class="tb-item">${ICONS.pin(17)}<span>Columbus, OH &amp; nearby suburbs</span></span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${year} LemonMaid Cleaning. All rights reserved.</span>
      <span><a href="${R}privacy-policy.html">Privacy Policy</a> · <a href="${R}terms-of-service.html">Terms of Service</a></span>
    </div>
  </div></footer>
  <div class="mobile-cta">
    <a class="btn btn-outline" href="${BIZ.phoneHref}">${ICONS.phone(16)} Call</a>
    <a class="btn btn-primary" href="${BIZ.booking}">Book Now</a>
  </div>`;
}

function ctaBanner(R, opts = {}) {
  const title = opts.title || 'Ready for a cleaner home in Columbus?';
  const lead = opts.lead || 'Book online in 60 seconds. Background-checked cleaners, eco-friendly products, and a 100% satisfaction guarantee.';
  return `<section class="cta-banner"><div class="container">
    <div class="cta-panel reveal">
      <span class="sparkle sparkle-1">${ICONS.sparkle(26)}</span>
      <span class="sparkle sparkle-2">${ICONS.sparkle(26)}</span>
      <h2>${title}</h2>
      <p class="lead">${lead}</p>
      <div class="cta-row">
        <a class="btn btn-primary btn-lg" href="${BIZ.booking}">${ICONS.sparkle(18)} Book My Cleaning</a>
        <a class="btn btn-lg" style="border-color:#fff;color:#fff" href="${BIZ.phoneHref}">${ICONS.phone(18)} ${BIZ.phone}</a>
      </div>
      <p class="cta-note">Free rescheduling with 24-hour notice · No contracts, ever</p>
    </div>
  </div></section>`;
}

function faqSection(faqs, opts = {}) {
  const items = faqs.map(([q, a], i) => `<details class="faq-item reveal"${i === 0 && opts.openFirst ? ' open' : ''}>
    <summary>${q}</summary><div class="faq-body"><p>${a}</p></div></details>`).join('\n');
  return `<section class="section${opts.alt ? ' section-alt' : ''}" id="faq"><div class="container">
    <div class="section-head"><span class="kicker">Good to know</span><h2>${opts.title || 'Frequently asked questions'}</h2></div>
    <div class="faq-list">${items}</div>
  </div></section>`;
}

function faqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q.replace(/<[^>]+>/g, ''),
      acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') },
    })),
  };
}

function reviewCard(r, extraClass = '') {
  return `<article class="review-card reveal ${extraClass}">
    <span class="stars" aria-label="5 out of 5 stars">${STARS}</span>
    <blockquote>“${r.text}”</blockquote>
    <div class="who">
      <span class="avatar" style="background:${r.color}">${r.initial}</span>
      <span><span class="name">${r.name}</span><br><span class="meta">${r.where} · Verified customer</span></span>
    </div>
  </article>`;
}

function checkItem(text, yes = true) {
  return `<li><span class="chk${yes ? '' : ' no'}">${ICONS.check(13)}</span><span>${text}</span></li>`;
}

function areaPillLinks(R, exceptSlug) {
  return CITIES.filter((c) => c.slug !== exceptSlug)
    .map((c) => `<a href="${R}house-cleaning-${c.slug}-ohio.html">${ICONS.pin(14)} ${c.name}</a>`).join('\n');
}

function pageHero(R, opts) {
  const crumbs = (opts.crumbs || []).map((c, i, arr) => {
    const last = i === arr.length - 1;
    return last ? `<span aria-current="page">${c[0]}</span>` : `<a href="${R}${c[1]}">${c[0]}</a><span class="sep">/</span>`;
  }).join('');
  return `<section class="page-hero"><div class="container">
    ${crumbs ? `<nav class="breadcrumbs" aria-label="Breadcrumb">${crumbs}</nav>` : ''}
    ${opts.kicker ? `<span class="kicker">${opts.kicker}</span>` : ''}
    <h1>${opts.h1}</h1>
    ${opts.lead ? `<p class="lead">${opts.lead}</p>` : ''}
    ${opts.cta === false ? '' : `<div class="cta-row">
      <a class="btn btn-primary btn-lg" href="${BIZ.booking}">${ICONS.sparkle(18)} ${opts.ctaLabel || 'Get an Instant Quote'}</a>
      <a class="btn btn-outline btn-lg" href="${BIZ.phoneHref}">${ICONS.phone(18)} Call/text ${BIZ.phone}</a>
    </div>`}
  </div></section>`;
}

/* The LocalBusiness schema, carried over from the original site. */
const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LemonMaid Cleaning',
  image: 'https://www.lemonmaidcleaning.com/images/logo.png',
  '@id': 'https://www.lemonmaidcleaning.com',
  url: 'https://www.lemonmaidcleaning.com',
  telephone: '+16147562656',
  email: 'support@lemonmaidcleaning.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Columbus', addressRegion: 'OH', postalCode: '43215', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 39.9612, longitude: -82.9988 },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00', closes: '20:00',
  }],
  priceRange: '$$',
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Paige Matthews' }, datePublished: '2026-05-08', reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'The cleaner was incredibly detail oriented and so sweet. Everything looked amazing, and it was such a relief to not have to worry about cleaning myself.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Annie Nobile' }, datePublished: '2026-05-04', reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Lisa did a wonderful job on our deep clean! Staff are very sweet and kind. They’re flexible and able to accommodate our busy schedule.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Pooja Kanuri' }, datePublished: '2026-04-08', reviewRating: { '@type': 'Rating', ratingValue: '5' }, reviewBody: 'Everything was spotless and perfectly dusted. So impressed with the attention to detail and how fresh everything feels. Highly recommend!' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '50' },
};

/* ------------------------------------------------------------------ shell */

function renderPage(opts) {
  const depth = (opts.path.match(/\//g) || []).length;
  const R = '../'.repeat(depth);
  const jsonld = (opts.jsonld || []).map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n  ');
  const ogImage = opts.ogImage || `${BIZ.domain}/images/hero-kitchen.jpg`;
  const bodyClass = opts.bodyClass ? ` class="${opts.bodyClass}"` : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(opts.title)}</title>
  <meta name="description" content="${esc(opts.desc)}">
  <link rel="canonical" href="${opts.canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="LemonMaid Cleaning">
  <meta property="og:title" content="${esc(opts.title)}">
  <meta property="og:description" content="${esc(opts.desc)}">
  <meta property="og:url" content="${opts.canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${R}styles/main.css">
  <link rel="icon" href="${R}favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="${R}favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="${R}favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="${R}apple-touch-icon.png">
  ${jsonld}
</head>
<body${bodyClass}>
<a class="skip-link" href="#main">Skip to content</a>
${topbar()}
${header(R, opts.active)}
<main id="main">
${opts.content}
</main>
${footer(R)}
<script src="${R}scripts/main.js" defer></script>
</body>
</html>`;
}

module.exports = {
  BIZ, CITIES, REVIEWS, ICONS, STARS, esc, squiggle,
  ctaBanner, faqSection, faqJsonLd, reviewCard, checkItem,
  areaPillLinks, pageHero, LOCAL_BUSINESS, renderPage,
};
