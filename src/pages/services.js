'use strict';
const { BIZ, ICONS, ctaBanner, faqSection, faqJsonLd, pageHero, renderPage } = require('../site');

/* ---------------------------------------------------------------- services */

const SERVICE_ROWS = [
  {
    id: 'standard',
    img: 'images/bright-living.jpg', alt: 'Sunlit living room kept tidy with recurring standard cleaning',
    title: 'Standard Cleaning',
    price: 'From $100',
    href: BIZ.booking, linkLabel: 'Book Standard Cleaning',
    desc: 'The clean that keeps your home feeling handled, week after week. Perfect as recurring service (weekly, bi-weekly, or monthly) or a one-time refresh.',
    includes: ['Dusting, vacuuming, and mopping throughout', 'Kitchen counters, sink, and appliance exteriors', 'Bathroom sanitizing — toilets, tubs, showers, and sinks', 'Ceiling fans, light fixtures, and general surface dusting', 'Trash emptied and beds tidied'],
  },
  {
    id: 'deep',
    img: 'images/bathroom-modern.jpg', alt: 'Gleaming glass shower and vanity after a deep cleaning',
    title: 'Deep Cleaning',
    price: 'From $180',
    href: 'deep-cleaning-columbus-ohio.html', linkLabel: 'See Deep Cleaning',
    desc: 'A top-to-bottom reset for first-time cleans, seasonal refreshes, or homes that need extra love. Everything in a standard clean, plus the details.',
    includes: ['Everything in Standard Cleaning', 'Inside windowpanes (inside only)', 'Baseboards hand-detailed', 'Tile and grout detail work', 'Wall spot-checking and hood vent detailing'],
  },
  {
    id: 'moveout',
    img: 'images/empty-room.jpg', alt: 'Empty, spotless living area ready for a final walkthrough',
    title: 'Move-In / Move-Out Cleaning',
    price: 'From $200',
    href: 'move-out-cleaning-columbus-ohio.html', linkLabel: 'See Move-Out Cleaning',
    desc: 'Deposit-ready cleaning designed for transitions — whether you’re handing back keys or picking up new ones.',
    includes: ['Everything in Deep Cleaning', 'Inside cabinets and drawers', 'Inside fridge, freezer, and stove', 'Closets wiped and detailed', 'Landlord-ready checklist'],
  },
  {
    id: 'airbnb',
    img: 'images/bedroom.jpg', alt: 'Guest-ready bedroom staged after a short-term rental turnover',
    title: 'Airbnb & Short-Term Rental Cleaning',
    price: 'From $80',
    href: 'airbnb-cleaning-columbus-ohio.html', linkLabel: 'See STR Cleaning',
    desc: 'Reliable turnover cleans that protect your ratings. Same-day scheduling, linen changes, and restocking for host-ready stays.',
    includes: ['Full turnover clean between guests', 'Linen changes and bed staging', 'Restocking of essentials', 'Checklist-based process with photo confirmation available', 'Same-day scheduling'],
  },
];

const COMPARISON = [
  ['Dusting, vacuuming, mopping', true, true, true],
  ['Kitchen and bathroom sanitizing', true, true, true],
  ['Ceiling fans, light fixtures, and surface dusting', true, true, true],
  ['Inside windowpanes (inside only)', false, true, true],
  ['Hand detailing of baseboards', false, true, true],
  ['Tile and grout detailing', false, true, true],
  ['Inside fridge / freezer / stove', false, false, true],
  ['Inside cabinets and drawers', false, false, true],
];

const SERVICES_FAQS = [
  ['Which service should I pick for my first clean?',
    'Most first-time customers start with a deep clean so we can bring every surface up to standard, then switch to recurring standard cleaning to keep it that way.'],
  ['Can I customize what the cleaner focuses on?',
    'Absolutely. Add notes and priorities when you book — or tell your cleaner at the door. It’s your clean.'],
  ['Do you offer recurring discounts or plans?',
    `Recurring customers get our best rates. Pick weekly, bi-weekly, or monthly when you book online, or call/text <a href="${BIZ.phoneHref}">${BIZ.phone}</a> and we’ll help you choose.`],
];

const yn = (v) => v ? '<span class="yes">✓</span>' : '<span class="no">—</span>';

const servicesContent = `
${pageHero('', {
  crumbs: [['Home', 'index.html'], ['Services', '']],
  kicker: 'Services',
  h1: 'House cleaning services in Columbus, OH',
  lead: 'Professional residential cleaning across Columbus and its suburbs. Whether you need recurring maid service, a one-time deep clean, or a move-out clean, our background-checked team delivers guaranteed results.',
})}

${SERVICE_ROWS.map((s, i) => `<section class="section${i % 2 ? ' section-alt' : ''}" id="${s.id}"><div class="container">
  <div class="split">
    ${i % 2 ? '' : `<img class="split-photo reveal" src="${s.img}" alt="${s.alt}" loading="lazy" width="1600" height="1360">`}
    <div class="reveal reveal-d1">
      <span class="kicker">${s.price}</span>
      <h2>${s.title}</h2>
      <p>${s.desc}</p>
      <ul class="check-list">
        ${s.includes.map((t) => `<li><span class="chk">${ICONS.check(13)}</span><span>${t}</span></li>`).join('\n        ')}
      </ul>
      <div class="cta-row">
        <a class="btn btn-primary" href="${s.href}">${s.linkLabel} ${ICONS.arrow(16)}</a>
      </div>
    </div>
    ${i % 2 ? `<img class="split-photo reveal" src="${s.img}" alt="${s.alt}" loading="lazy" width="1600" height="1360">` : ''}
  </div>
</div></section>`).join('\n')}

<section class="section"><div class="container">
  <div class="section-head">
    <span class="kicker">Compare</span>
    <h2>Standard vs. Deep vs. Move-Out</h2>
    <p class="lead">Not sure which clean you need? Here’s exactly what’s included in each.</p>
  </div>
  <div class="table-wrap reveal">
    <table>
      <thead><tr><th>What’s included</th><th>Standard</th><th>Deep</th><th>Move-In/Out</th></tr></thead>
      <tbody>
        ${COMPARISON.map((row) => `<tr><td>${row[0]}</td><td>${yn(row[1])}</td><td>${yn(row[2])}</td><td>${yn(row[3])}</td></tr>`).join('\n        ')}
      </tbody>
    </table>
  </div>
  <p class="center mt-40">Want a more thorough clean? <a href="deep-cleaning-columbus-ohio.html">Upgrade to a Deep Clean</a>. Need inside cabinets and appliances? <a href="move-out-cleaning-columbus-ohio.html">Move-In/Move-Out</a> covers those interior tasks.</p>
</div></section>

${faqSection(SERVICES_FAQS, { alt: true, title: 'Service questions, answered' })}

${ctaBanner('', { title: 'Not sure which clean is right? We’ll help.', lead: 'Get an instant quote online, or call/text and we’ll match you with the right service in two minutes.' })}
`;

/* ----------------------------------------------------------------- pricing */

const PRICE_CARDS = [
  {
    title: 'Standard Cleaning', amount: '$100', desc: 'Recurring upkeep or a one-time refresh for a lived-in home.',
    perks: ['Kitchens, baths, bedrooms & living areas', 'Weekly, bi-weekly, or monthly', 'Supplies included'],
  },
  {
    title: 'Deep Cleaning', amount: '$180', popular: true, desc: 'The top-to-bottom reset — ideal for first-time cleans.',
    perks: ['Everything in Standard', 'Baseboards, windowpanes & grout detail', 'Best first-visit value'],
  },
  {
    title: 'Move-In / Move-Out', amount: '$200', desc: 'Deposit-ready cleaning for moving transitions.',
    perks: ['Everything in Deep', 'Inside cabinets & drawers', 'Inside fridge, freezer & stove'],
  },
  {
    title: 'Airbnb Turnover', amount: '$80', desc: 'Guest-ready turnovers for short-term rental hosts.',
    perks: ['Full turnover clean', 'Linen change & staging', 'Restocking essentials'],
  },
];

const PRICE_TABLE = [
  ['Standard Cleaning', 'From $100', 'From $130', 'From $160', 'Custom quote'],
  ['Deep Cleaning', 'From $180', 'From $220', 'From $270', 'Custom quote'],
  ['Move-In/Move-Out', 'From $200', 'From $250', 'From $300', 'Custom quote'],
  ['Airbnb Turnover', 'From $80', 'From $120', 'From $150', 'Custom quote'],
];

const PRICING_FAQS = [
  ['Why are prices listed as “from”?',
    'Every home is different. Final pricing depends on home size, condition, and any add-ons — you’ll see your exact quote online before you confirm, with no surprises on cleaning day.'],
  ['What affects my final price?',
    'Home size, number of bathrooms, clutter level, time since the last professional clean, and add-ons like interior windows or inside the oven.'],
  ['Are there any contracts or hidden fees?',
    'No contracts, ever. You can pause, reschedule (free with 24 hours’ notice), or cancel recurring service anytime.'],
];

const pricingContent = `
${pageHero('', {
  crumbs: [['Home', 'index.html'], ['Pricing', '']],
  kicker: 'Transparent pricing',
  h1: 'House cleaning prices in Columbus, Ohio',
  lead: 'Simple starting rates, exact quotes in 60 seconds online, and never a surprise on cleaning day.',
  ctaLabel: 'Get My Exact Quote',
})}

<section class="section"><div class="container">
  <div class="grid-4" style="align-items:stretch">
    ${PRICE_CARDS.map((c, i) => `<article class="price-card reveal reveal-d${i % 4}${c.popular ? ' popular' : ''}">
      ${c.popular ? '<span class="popular-tag">Most popular first clean</span>' : ''}
      <h3>${c.title}</h3>
      <p class="p-desc">${c.desc}</p>
      <span class="p-from">Starting at</span>
      <span class="p-amount">${c.amount}</span>
      <ul class="check-list">
        ${c.perks.map((t) => `<li><span class="chk">${ICONS.check(12)}</span><span>${t}</span></li>`).join('\n        ')}
      </ul>
      <a class="btn ${c.popular ? 'btn-primary' : 'btn-outline'}" href="${BIZ.booking}">Get My Quote</a>
    </article>`).join('\n    ')}
  </div>
</div></section>

<section class="section section-alt"><div class="container">
  <div class="section-head">
    <span class="kicker">By home size</span>
    <h2>Starting prices by home size</h2>
    <p class="lead">Starting estimates — your exact quote depends on your home’s condition and any add-ons you choose.</p>
  </div>
  <div class="table-wrap reveal">
    <table>
      <thead><tr><th>Service</th><th>1 Bed / 1 Bath</th><th>2 Bed / 2 Bath</th><th>3 Bed / 2 Bath</th><th>4+ Bed</th></tr></thead>
      <tbody>
        ${PRICE_TABLE.map((row) => `<tr>${row.map((c, i) => `<td>${c}</td>`).join('')}</tr>`).join('\n        ')}
      </tbody>
    </table>
  </div>
  <p class="center mt-40 muted small">Prices are starting estimates. Final price depends on home condition and specific requirements — get your exact quote online or <a href="contact-us.html">contact us</a> for a custom quote.</p>
</div></section>

${faqSection(PRICING_FAQS, { title: 'Pricing questions, answered' })}

${ctaBanner('', { title: 'See your exact price in 60 seconds', lead: 'No phone tag, no in-home estimates, no surprises. Answer a few quick questions and your quote appears instantly.' })}
`;

module.exports = [
  {
    path: 'services.html',
    html: renderPage({
      path: 'services.html',
      title: 'House Cleaning Services Columbus OH - Deep Clean, Move-Out & More | LemonMaid',
      desc: 'Explore all cleaning services from LemonMaid - standard, deep clean, move-in/out, and Airbnb cleaning in Columbus, OH. Get a free quote today.',
      canonical: `${BIZ.domain}/services`,
      active: 'services',
      jsonld: [
        { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'LemonMaid Cleaning', telephone: '+16147562656', address: { '@type': 'PostalAddress', addressLocality: 'Columbus', addressRegion: 'OH' } },
        faqJsonLd(SERVICES_FAQS),
      ],
      content: servicesContent,
    }),
  },
  {
    path: 'pricing.html',
    html: renderPage({
      path: 'pricing.html',
      title: 'House Cleaning Prices Columbus Ohio | LemonMaid Cleaning',
      desc: 'See transparent starting prices for house cleaning in Columbus, OH. Standard cleaning from $100, deep cleaning from $180. Get your exact quote online in 60 seconds.',
      canonical: `${BIZ.domain}/pricing`,
      active: 'pricing',
      jsonld: [faqJsonLd(PRICING_FAQS)],
      content: pricingContent,
    }),
  },
];
