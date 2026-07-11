'use strict';
const { BIZ, ICONS, pic, crumbsLd, ctaBanner, renderPage } = require('../site');

/* Blog index + three articles. Content carried over from the original site,
   expanded with proper article formatting. */

const POSTS = [
  {
    slug: 'how-much-does-house-cleaning-cost-columbus-ohio',
    title: 'How Much Does House Cleaning Cost in Columbus, Ohio? (2026 Guide)',
    navTitle: 'How Much Does House Cleaning Cost in Columbus?',
    desc: 'A local 2026 guide to house cleaning prices in Columbus, Ohio — what standard, deep, and move-out cleans cost, and what changes your final quote.',
    img: 'kitchen3',
    imgAlt: 'Clean modern kitchen with white cabinets and stainless appliances',
    date: '2026-05-20', dateLabel: 'May 20, 2026', read: '4 min read',
    excerpt: 'Standard cleans usually run $100–$200 in Columbus. Here’s what moves your quote up or down — and how to get the best value.',
    body: `
      <div class="callout"><p><strong>Quick answer:</strong> Standard house cleaning in Columbus usually costs <strong>$100–$200</strong>. Deep cleaning typically starts at <strong>$180–$280</strong> based on size and condition.</p></div>

      <h2>What affects cleaning prices?</h2>
      <p>Cleaning quotes aren’t arbitrary — they reflect how long your home will genuinely take to clean well. The biggest factors:</p>
      <ul>
        <li><strong>Home size</strong> — more square footage and more bedrooms means more time.</li>
        <li><strong>Number of bathrooms</strong> — bathrooms are the most labor-intensive rooms in the house.</li>
        <li><strong>Clutter level</strong> — clear surfaces clean faster than crowded ones.</li>
        <li><strong>Time since your last professional clean</strong> — buildup takes extra detail work.</li>
        <li><strong>Add-ons</strong> — interior oven, interior windows, inside the fridge, and similar extras.</li>
      </ul>

      <h2>Typical Columbus price ranges</h2>
      <ul>
        <li><strong>Standard cleaning:</strong> $100–$200</li>
        <li><strong>Deep cleaning:</strong> $180–$280+</li>
        <li><strong>Move-out cleaning:</strong> $200–$350+</li>
        <li><strong>Airbnb turnover:</strong> $80–$150+</li>
      </ul>
      <p>You can see LemonMaid’s starting rates by home size on our <a href="../pricing.html">pricing page</a>.</p>

      <h2>How to get the best value</h2>
      <ul>
        <li><strong>Start with a deep clean, then go recurring.</strong> Recurring service after a first deep clean keeps your home at a high baseline for the lowest ongoing rate.</li>
        <li><strong>Focus add-ons where they matter.</strong> Rotate extras like the oven interior instead of adding everything every visit.</li>
        <li><strong>Compare insured, local companies</strong> — not just the lowest number. A cheap uninsured clean can cost far more than it saves.</li>
      </ul>

      <div class="callout"><p><strong>Want your exact number?</strong> LemonMaid quotes are instant — answer a few questions about your home and see your price in about 60 seconds. <a href="../booking.html">Get your exact quote</a>.</p></div>
    `,
  },
  {
    slug: 'deep-clean-vs-standard-clean',
    title: 'Deep Clean vs. Standard Clean: What’s the Difference?',
    navTitle: 'Deep Clean vs. Standard Clean',
    desc: 'Standard cleaning maintains your home; deep cleaning resets it. Here’s exactly what each includes and when to choose which.',
    img: 'bathroom-modern',
    imgAlt: 'Sparkling modern bathroom after a professional deep clean',
    date: '2026-05-06', dateLabel: 'May 6, 2026', read: '3 min read',
    excerpt: 'Standard cleaning maintains cleanliness. Deep cleaning resets the home. Here’s how to know which one your home needs right now.',
    body: `
      <p>The shortest honest answer: <strong>standard cleaning maintains cleanliness; deep cleaning resets the home</strong> by tackling details regular cleanings skip.</p>

      <h2>What standard cleaning includes</h2>
      <p>Dusting, vacuuming, mopping, kitchen and bathroom sanitizing, and routine surface and detail wipe-downs. It’s the service that keeps a clean home clean — most customers run it weekly, bi-weekly, or monthly.</p>

      <h2>What deep cleaning adds</h2>
      <ul>
        <li>Inside windowpanes (inside only)</li>
        <li>Hand-detailed baseboards</li>
        <li>Tile and grout detail cleaning</li>
        <li>Wall spot-checking within reach</li>
        <li>Kitchen hood vent detailing</li>
      </ul>
      <div class="callout"><p><strong>Note:</strong> inside cabinets/drawers and inside the fridge, freezer, or stove are included with <a href="../move-out-cleaning-columbus-ohio.html">Move-In/Move-Out cleaning</a>, or available as add-ons.</p></div>

      <h2>When to choose a deep clean</h2>
      <ul>
        <li><strong>First-time service</strong> — start from a truly clean baseline</li>
        <li><strong>Seasonal reset</strong> — spring or fall refresh</li>
        <li><strong>Moving</strong> — in or out</li>
        <li><strong>Long gaps</strong> between professional cleanings</li>
      </ul>
      <p>Still unsure? The rule of thumb we give Columbus customers: if it’s been more than a couple of months since a professional clean, start deep. <a href="../deep-cleaning-columbus-ohio.html">See what’s in our deep clean</a> or <a href="../booking.html">book one online</a>.</p>
    `,
  },
  {
    slug: 'how-to-prepare-for-a-cleaning-service',
    title: 'How to Prepare for Your First House Cleaning (Quick Checklist)',
    navTitle: 'How to Prepare for a Cleaning Service',
    desc: 'A quick 5-step checklist to get the most out of your first professional house cleaning — and the one thing you definitely don’t need to do.',
    img: 'spray-yellow',
    imgAlt: 'Hand in rubber glove holding a yellow spray bottle on a mint background',
    date: '2026-04-22', dateLabel: 'April 22, 2026', read: '2 min read',
    excerpt: 'Five quick steps before your cleaner arrives — and no, you don’t need to clean before we get there.',
    body: `
      <p>Your first professional cleaning is about to hand you back your weekend. A few minutes of prep helps your cleaner spend every minute on what matters:</p>

      <h2>The 5-step checklist</h2>
      <ul>
        <li><strong>1. Pick up loose clutter and personal items.</strong> Clear surfaces let us clean them instead of organizing around them.</li>
        <li><strong>2. Secure pets in a safe room.</strong> We love them — and they’ll love not being startled by the vacuum.</li>
        <li><strong>3. Share clear entry instructions.</strong> Door code, lockbox, key under the gnome — whatever works, just tell us in your booking notes.</li>
        <li><strong>4. List your priorities.</strong> Baseboards bugging you? Guest bath needs extra attention? Say so — it’s your clean.</li>
        <li><strong>5. Decide if you’ll be home or out.</strong> Either is completely fine. Most recurring customers end up leaving us to it.</li>
      </ul>

      <div class="callout"><p><strong>And the big one:</strong> no, you do <em>not</em> need to clean before the cleaner comes. Just clear the surfaces so we can focus on the details you hired us for.</p></div>

      <p>Ready when you are — <a href="../booking.html">book your Columbus cleaning</a> in about 60 seconds, or read about <a href="../deep-cleaning-columbus-ohio.html">what’s in a deep clean</a> if it’s your first professional visit.</p>
    `,
  },
];

const indexContent = `
<section class="page-hero"><div class="container">
  <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../index.html">Home</a><span class="sep">/</span><span aria-current="page">Blog</span></nav>
  <span class="kicker">The LemonMaid blog</span>
  <h1>House cleaning tips &amp; resources</h1>
  <p class="lead">Honest local guides on pricing, services, and getting the most from a professional clean in Columbus, Ohio.</p>
</div></section>

<section class="section"><div class="container">
  <div class="grid-3">
    ${POSTS.map((p, i) => `<article class="post-card reveal reveal-d${i}">
      ${pic('../', p.img, p.imgAlt, { sizes: '(max-width: 768px) 94vw, 350px', w: 800, h: 400 })}
      <div class="post-body">
        <span class="post-meta">${p.dateLabel} · ${p.read}</span>
        <h3><a href="${p.slug}.html">${p.navTitle}</a></h3>
        <p>${p.excerpt}</p>
      </div>
    </article>`).join('\n    ')}
  </div>
</div></section>

${ctaBanner('../')}
`;

const postPage = (p) => ({
  path: `blog/${p.slug}.html`,
  html: renderPage({
    path: `blog/${p.slug}.html`,
    title: `${p.navTitle} | LemonMaid Cleaning`,
    desc: p.desc,
    canonical: `${BIZ.domain}/blog/${p.slug}`,
    active: 'blog',
    ogImage: `${BIZ.domain}/images/${p.img}.jpg`,
    jsonld: [crumbsLd([['Home', 'index.html'], ['Blog', 'blog/index.html'], [p.navTitle, '']], `${BIZ.domain}/blog/${p.slug}`), {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.desc,
      image: `${BIZ.domain}/images/${p.img}.jpg`,
      datePublished: p.date,
      author: { '@type': 'Organization', name: 'LemonMaid Cleaning' },
      publisher: { '@type': 'Organization', name: 'LemonMaid Cleaning', logo: { '@type': 'ImageObject', url: `${BIZ.domain}/images/logo.png` } },
      mainEntityOfPage: `${BIZ.domain}/blog/${p.slug}`,
    }],
    content: `
<section class="section" style="padding-top:56px"><div class="container">
  <div class="article">
    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../index.html">Home</a><span class="sep">/</span><a href="index.html">Blog</a><span class="sep">/</span><span aria-current="page">${p.navTitle}</span></nav>
    <h1>${p.title}</h1>
    <div class="article-meta">
      <span>${ICONS.calendar(15)} ${p.dateLabel}</span>
      <span>${ICONS.clock(15)} ${p.read}</span>
      <span>${ICONS.pin(15)} Columbus, OH</span>
    </div>
    ${pic('../', p.img, p.imgAlt, { cls: 'article-hero-img', sizes: '(max-width: 900px) 94vw, 760px', eager: true, w: 1600, h: 727 })}
    <div class="prose">${p.body}</div>
  </div>
</div></section>
${ctaBanner('../')}
`,
  }),
});

module.exports = [
  {
    path: 'blog/index.html',
    html: renderPage({
      path: 'blog/index.html',
      title: 'House Cleaning Tips & Resources - Columbus, OH | LemonMaid',
      desc: 'Helpful cleaning guides from LemonMaid Cleaning in Columbus, Ohio — pricing, deep clean vs standard, and how to prepare for your first professional clean.',
      canonical: `${BIZ.domain}/blog`,
      active: 'blog',
      content: indexContent,
    }),
  },
  ...POSTS.map(postPage),
];
