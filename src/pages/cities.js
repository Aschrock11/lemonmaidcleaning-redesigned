'use strict';
const { BIZ, CITIES, REVIEWS, ICONS, pic, crumbsLd, ctaBanner, faqSection, faqJsonLd, reviewCard, areaPillLinks, pageHero, renderPage } = require('../site');

/* One local landing page per service-area city. */

const cityPage = (city, idx) => {
  const review = REVIEWS[idx % REVIEWS.length];
  const faqs = [
    [`How much does house cleaning cost in ${city.name}?`,
      `Standard cleaning for a 2-bedroom home typically ranges from $120–$200, and deep cleaning starts at $180–$280 depending on size and condition. Get your exact ${city.name} quote online in 60 seconds — no in-home estimate needed.`],
    [`How soon can you clean my home in ${city.name}?`,
      `We offer same-week availability across ${city.name} and the Columbus metro, seven days a week from 8 AM to 8 PM. Book online or call/text ${BIZ.phone}.`],
    [`Are your cleaners background-checked and insured?`,
      'Yes. Every LemonMaid cleaner is background-checked, trained, and insured before their first clean — and every visit is backed by our 100% satisfaction guarantee.'],
  ];

  const services = [
    ['sparkle', 'Standard Cleaning', 'Recurring weekly, bi-weekly, or monthly upkeep — or a one-time refresh.', 'services.html'],
    ['broom', 'Deep Cleaning', 'Top-to-bottom detail work: baseboards, windowpanes, tile and grout.', 'deep-cleaning-columbus-ohio.html'],
    ['key', 'Move-In / Move-Out', 'Deposit-ready cleans inside cabinets, drawers, and appliances.', 'move-out-cleaning-columbus-ohio.html'],
    ['calendar', 'Airbnb & STR Turnovers', 'Guest-ready resets with linens and restocking for local hosts.', 'airbnb-cleaning-columbus-ohio.html'],
  ];

  const content = `
${pageHero('', {
  crumbs: [['Home', 'index.html'], ['Service Areas', 'index.html#services'], [`${city.name}, OH`, '']],
  kicker: 'Local service area',
  h1: `House cleaning in ${city.name}, Ohio`,
  lead: `LemonMaid Cleaning is proud to serve homeowners across ${city.name} — including ${city.hoods}. Background-checked cleaners, eco-friendly products, and a 100% satisfaction guarantee.`,
  ctaLabel: `Book a Clean in ${city.name}`,
})}

<section class="section"><div class="container">
  <div class="section-head">
    <span class="kicker">What we offer</span>
    <h2>Cleaning services available in ${city.name}</h2>
  </div>
  <div class="grid-4">
    ${services.map((s, i) => `<article class="feature reveal reveal-d${i % 4}" style="position:relative">
      <span class="ico">${ICONS[s[0]](24)}</span>
      <h3>${s[1]}</h3>
      <p>${s[2]}</p>
      <a class="arrow-link" style="margin-top:14px;display:inline-flex" href="${s[3]}">Learn more ${ICONS.arrow(15)}<span style="position:absolute;inset:0"></span></a>
    </article>`).join('\n    ')}
  </div>
</div></section>

<section class="section section-alt"><div class="container">
  <div class="split">
    ${pic('', 'family-living', `Bright family living room in ${city.name} kept spotless by LemonMaid, golden retriever relaxing on the rug`, { cls: 'split-photo reveal', w: 1600, h: 1067 })}
    <div class="reveal reveal-d1">
      <span class="kicker">Why ${city.name} chooses LemonMaid</span>
      <h2>Your neighbors, not a franchise</h2>
      <p>${city.blurb}</p>
      <ul class="check-list">
        ${[
          '<strong>Locally owned</strong> Columbus-area cleaning company',
          '<strong>Same-week availability</strong> in ' + city.name,
          '<strong>Insured, background-checked</strong> cleaners on every visit',
          '<strong>Eco-friendly products</strong> safe for kids and pets',
          '<strong>Simple online booking</strong> — done in about 2 minutes',
        ].map((t) => `<li><span class="chk">${ICONS.check(13)}</span><span>${t}</span></li>`).join('\n        ')}
      </ul>
      <div class="cta-row">
        <a class="btn btn-primary" href="${BIZ.booking}">Book a Clean in ${city.name} ${ICONS.arrow(16)}</a>
      </div>
    </div>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="section-head">
    <span class="kicker">Reviews</span>
    <h2>Loved across the Columbus metro</h2>
  </div>
  <div class="grid-3">
    ${[0, 1, 2].map((i) => reviewCard(REVIEWS[(idx + i) % REVIEWS.length], `reveal-d${i}`)).join('\n    ')}
  </div>
</div></section>

${faqSection(faqs, { alt: true, title: `${city.name} cleaning questions` })}

<section class="section"><div class="container center">
  <span class="kicker">Nearby areas</span>
  <h2 style="font-size:1.6rem">We also serve</h2>
  <div class="area-pills" style="justify-content:center;margin-top:20px">
    ${areaPillLinks('', city.slug)}
  </div>
</div></section>

${ctaBanner('', { title: `Ready for a cleaner home in ${city.name}?`, lead: 'Book online in 60 seconds. Background-checked cleaners. 100% satisfaction guaranteed.' })}
`;

  return {
    path: `house-cleaning-${city.slug}-ohio.html`,
    html: renderPage({
      path: `house-cleaning-${city.slug}-ohio.html`,
      title: `House Cleaning ${city.name} Ohio | LemonMaid Cleaning`,
      desc: `Professional house cleaning in ${city.name}, Ohio. LemonMaid offers trusted, background-checked cleaners. Book online or call ${BIZ.phone}.`,
      canonical: `${BIZ.domain}/house-cleaning-${city.slug}-ohio`,
      active: '',
      jsonld: [
        crumbsLd([['Home', 'index.html'], [`House Cleaning ${city.name}, OH`, '']], `${BIZ.domain}/house-cleaning-${city.slug}-ohio`),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `House Cleaning in ${city.name}, Ohio`,
          serviceType: 'House Cleaning',
          provider: { '@type': 'LocalBusiness', name: 'LemonMaid Cleaning', telephone: '+16147562656' },
          areaServed: { '@type': 'City', name: city.name, addressRegion: 'OH' },
          description: `Professional house cleaning services in ${city.name}, Ohio, including standard, deep, move-out, and short-term rental cleaning.`,
        },
        faqJsonLd(faqs),
      ],
      content,
    }),
  };
};

module.exports = CITIES.map(cityPage);
