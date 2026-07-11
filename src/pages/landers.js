'use strict';
const { BIZ, ICONS, pic, crumbsLd, ctaBanner, faqSection, faqJsonLd, pageHero, renderPage } = require('../site');

/* Service landing pages: deep cleaning, move-out, Airbnb. */

const serviceJsonLd = (name, serviceType, description, minPrice) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  serviceType,
  provider: { '@type': 'LocalBusiness', name: 'LemonMaid Cleaning', telephone: '+16147562656' },
  areaServed: { '@type': 'City', name: 'Columbus', addressRegion: 'OH' },
  description,
  offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice } },
});

const checkList = (items, yes = true) =>
  `<ul class="check-list">${items.map((t) => `<li><span class="chk${yes ? '' : ' no'}">${ICONS.check(13)}</span><span>${t}</span></li>`).join('\n')}</ul>`;

/* ------------------------------------------------------------------- deep */

const DEEP_FAQS = [
  ['How long does a deep clean take?',
    'It depends on home size and condition, but plan for noticeably longer than a standard clean — we’re hand-detailing baseboards, grout, and windowpanes, not just passing through.'],
  ['Is a deep clean required for my first visit?',
    'It’s not required, but it’s what we recommend for most first-time customers: it brings every surface up to standard so recurring cleans can keep it there.'],
  ['Does a deep clean include inside my fridge or cabinets?',
    'Inside the fridge/freezer/stove and inside cabinets/drawers are part of our <a href="move-out-cleaning-columbus-ohio.html">Move-In/Move-Out service</a>. You can also add them to a deep clean when booking.'],
];

const deepContent = `
${pageHero('', {
  crumbs: [['Home', 'index.html'], ['Services', 'services.html'], ['Deep Cleaning', '']],
  kicker: 'From $180',
  h1: 'Deep cleaning service in Columbus, Ohio',
  lead: 'We clean what regular cleaning misses: every surface, every corner, every detail. The full reset your home deserves.',
  ctaLabel: 'Book a Deep Clean',
})}

<section class="section"><div class="container">
  <div class="split">
    ${pic('', 'bathroom-modern', 'Modern bathroom with streak-free glass shower after a LemonMaid deep clean', { cls: 'split-photo reveal', w: 1600, h: 1067 })}
    <div class="reveal reveal-d1">
      <span class="kicker">What’s included</span>
      <h2>Everything in a standard clean — plus the details</h2>
      ${checkList([
        '<strong>Inside windowpanes</strong> (inside only)',
        '<strong>Baseboards</strong> hand-detailed room by room',
        '<strong>Tile and grout</strong> detail work',
        '<strong>Wall spot-checking</strong> within reach',
        '<strong>Kitchen hood vent</strong> detailing',
      ])}
      <p class="small muted">Need inside cabinets/drawers or inside the fridge, freezer, or stove? Those interior tasks are included with <a href="move-out-cleaning-columbus-ohio.html">Move-In/Move-Out cleaning</a>.</p>
    </div>
  </div>
</div></section>

<section class="section section-alt"><div class="container">
  <div class="section-head">
    <span class="kicker">Timing</span>
    <h2>When should you book a deep clean?</h2>
  </div>
  <div class="grid-3">
    ${[
      ['sparkle', 'First-time cleaning service', 'Start with a reset so recurring cleans can maintain a truly clean baseline.'],
      ['key', 'Before or after moving', 'Walk into fresh — or leave a spotless goodbye (and protect that deposit).'],
      ['refresh', 'Seasonal reset', 'Spring and fall are perfect moments to hit the details that build up quietly.'],
      ['calendar', 'Before a special event', 'Hosting the holidays or a party? Let the house make the first impression.'],
      ['shield', 'After illness recovery', 'A thorough, sanitizing top-to-bottom clean for extra peace of mind.'],
      ['clock', 'It’s just been a while', 'No judgment — that’s exactly what deep cleans are for.'],
    ].map((f, i) => `<article class="feature reveal reveal-d${i % 3}">
      <span class="ico">${ICONS[f[0]](24)}</span>
      <h3>${f[1]}</h3>
      <p>${f[2]}</p>
    </article>`).join('\n    ')}
  </div>
  <p class="center mt-56">Most Columbus deep cleans start at <strong>$180</strong> and vary by home size and condition. <a href="pricing.html">View pricing</a> or <a href="services.html">see all services</a>.</p>
</div></section>

${faqSection(DEEP_FAQS, { title: 'Deep cleaning questions' })}

${ctaBanner('', { title: 'Ready for the full reset?', lead: 'Book your Columbus deep clean online in 60 seconds — satisfaction guaranteed, or your money back.' })}
`;

/* ---------------------------------------------------------------- move-out */

const MOVE_FAQS = [
  ['Will this cleaning help me get my deposit back?',
    'That’s the goal. We work from a landlord-ready checklist covering the areas property managers actually inspect — inside appliances, cabinets, closets, and every major surface.'],
  ['Should the home be empty before you arrive?',
    'Empty (or close to it) is best. It lets us reach inside cabinets, closets, and behind appliance spaces without working around boxes.'],
  ['Can you clean before I move in instead?',
    'Absolutely — move-in cleans are the same detailed service, so you start your new chapter in a genuinely clean home.'],
];

const moveContent = `
${pageHero('', {
  crumbs: [['Home', 'index.html'], ['Services', 'services.html'], ['Move-In / Move-Out', '']],
  kicker: 'From $200',
  h1: 'Move-in &amp; move-out cleaning in Columbus, Ohio',
  lead: 'Get your property deposit-ready — or move-in ready — with detailed cleaning inside cabinets, appliances, closets, and every major surface.',
  ctaLabel: 'Book Move-Out Cleaning',
})}

<section class="section"><div class="container">
  <div class="split">
    <div class="reveal">
      <span class="kicker">What’s included</span>
      <h2>Built for smooth handoffs</h2>
      ${checkList([
        '<strong>Landlord-ready cleaning checklist</strong> — the walkthrough, handled',
        '<strong>Inside all major appliances</strong> — fridge, freezer, and stove',
        '<strong>Inside cabinets and drawers</strong>, wiped and detailed',
        '<strong>Everything in our deep clean</strong> — baseboards, windowpanes, grout',
        '<strong>Flexible same-week scheduling</strong> around your closing or lease dates',
      ])}
      <div class="cta-row">
        <a class="btn btn-primary" href="booking.html">Book Move-Out Cleaning ${ICONS.arrow(16)}</a>
        <a class="btn btn-outline" href="services.html">All services</a>
      </div>
    </div>
    ${pic('', 'empty-room', 'Bright, empty living space cleaned and ready for final walkthrough', { cls: 'split-photo reveal reveal-d1', w: 1600, h: 1067 })}
  </div>
</div></section>

<section class="section section-alt"><div class="container">
  <div class="section-head">
    <span class="kicker">Who it’s for</span>
    <h2>One service, three stressful weeks solved</h2>
  </div>
  <div class="grid-3">
    ${[
      ['key', 'Tenants', 'Hand back the keys with confidence — and give your deposit its best chance of coming home with you.'],
      ['home', 'Homeowners & buyers', 'Move into a home that’s actually clean, not “broom clean.” Start fresh from day one.'],
      ['shield', 'Landlords & agents', 'Turn units faster with consistent, checklist-based cleans between residents or before showings.'],
    ].map((f, i) => `<article class="feature reveal reveal-d${i}">
      <span class="ico">${ICONS[f[0]](24)}</span>
      <h3>${f[1]}</h3>
      <p>${f[2]}</p>
    </article>`).join('\n    ')}
  </div>
</div></section>

${faqSection(MOVE_FAQS, { title: 'Move-out cleaning questions' })}

${ctaBanner('', { title: 'Moving is hard. This part isn’t.', lead: 'Book your move-in or move-out clean online in 60 seconds and cross one more thing off the list.' })}
`;

/* ------------------------------------------------------------------ airbnb */

const STR_FAQS = [
  ['Can you handle same-day turnovers?',
    'Yes — same-day turnover scheduling is exactly what this service is built for. Tell us your check-out and check-in windows and we’ll work between them.'],
  ['Do you change linens and restock supplies?',
    'Yes. Linen changes, bed staging, and restocking of essentials (using your supplies) are all available as part of your turnover.'],
  ['How do I know the unit is guest-ready?',
    'We work from a host-approved checklist every visit, so the unit is reset the same way every time. Photo confirmation is available on request.'],
];

const strContent = `
${pageHero('', {
  crumbs: [['Home', 'index.html'], ['Services', 'services.html'], ['Airbnb & STR', '']],
  kicker: 'From $80 per turnover',
  h1: 'Airbnb &amp; short-term rental cleaning in Columbus, Ohio',
  lead: 'Keep every guest arrival 5-star ready with reliable turnover cleaning, linen changes, and restocking support for Columbus hosts.',
  ctaLabel: 'Book STR Cleaning',
})}

<section class="section"><div class="container">
  <div class="split">
    ${pic('', 'bedroom', 'Short-term rental bedroom staged hotel-perfect for the next guest', { cls: 'split-photo reveal', w: 1600, h: 1067 })}
    <div class="reveal reveal-d1">
      <span class="kicker">What’s included</span>
      <h2>Turnovers that protect your ratings</h2>
      ${checkList([
        '<strong>Same-day turnover scheduling</strong> between check-out and check-in',
        '<strong>Linen change and reset</strong> options with hotel-style staging',
        '<strong>Restocking</strong> of guest essentials',
        '<strong>Checklist-based process</strong> so every reset is identical',
        '<strong>Reliable communication</strong> — you’ll know when the unit is guest-ready',
      ])}
      <div class="cta-row">
        <a class="btn btn-primary" href="booking.html">Book STR Cleaning ${ICONS.arrow(16)}</a>
        <a class="btn btn-outline" href="${BIZ.phoneHref}">${ICONS.phone(16)} Talk turnovers with us</a>
      </div>
    </div>
  </div>
</div></section>

<section class="section section-alt"><div class="container">
  <div class="section-head">
    <span class="kicker">Why hosts switch to us</span>
    <h2>Your reviews live and die on cleanliness</h2>
    <p class="lead">“Sparkling clean” is the phrase every host wants in their reviews. We make it routine.</p>
  </div>
  <div class="grid-3">
    ${[
      ['clock', 'On-time, every time', 'Late cleans mean late check-ins and angry guests. We arrive inside your turnover window, period.'],
      ['refresh', 'Consistent resets', 'A checklist-based process means guest #40 gets the same spotless arrival as guest #1.'],
      ['medal', 'Five-star standards', 'Background-checked, insured cleaners who treat your listing like the business it is.'],
    ].map((f, i) => `<article class="feature reveal reveal-d${i}">
      <span class="ico">${ICONS[f[0]](24)}</span>
      <h3>${f[1]}</h3>
      <p>${f[2]}</p>
    </article>`).join('\n    ')}
  </div>
</div></section>

${faqSection(STR_FAQS, { title: 'Host questions, answered' })}

${ctaBanner('', { title: 'Give your guests a five-star arrival', lead: 'Book a turnover online in 60 seconds, or talk to us about recurring turnover support for your listing.' })}
`;

module.exports = [
  {
    path: 'deep-cleaning-columbus-ohio.html',
    html: renderPage({
      path: 'deep-cleaning-columbus-ohio.html',
      title: 'Deep Cleaning Service Columbus Ohio | LemonMaid Cleaning',
      desc: 'LemonMaid offers professional deep cleaning in Columbus, Ohio. Top-to-bottom cleaning of every surface, appliance, and detail. Starting at $180. Book online today.',
      canonical: `${BIZ.domain}/deep-cleaning-columbus-ohio`,
      active: 'services',
      jsonld: [
        crumbsLd([['Home', 'index.html'], ['Services', 'services.html'], ['Deep Cleaning', '']], `${BIZ.domain}/deep-cleaning-columbus-ohio`),
        serviceJsonLd('Deep Cleaning Service', 'Deep House Cleaning', 'Professional deep cleaning service in Columbus, Ohio including detailed top-to-bottom cleaning.', '180'),
        faqJsonLd(DEEP_FAQS),
      ],
      content: deepContent,
    }),
  },
  {
    path: 'move-out-cleaning-columbus-ohio.html',
    html: renderPage({
      path: 'move-out-cleaning-columbus-ohio.html',
      title: 'Move Out Cleaning Columbus Ohio | Move-In Cleaning | LemonMaid',
      desc: 'Professional move-out and move-in cleaning in Columbus, OH. LemonMaid ensures your property is spotless for the next chapter. Book online or call (614) 756-2656.',
      canonical: `${BIZ.domain}/move-out-cleaning-columbus-ohio`,
      active: 'services',
      jsonld: [
        crumbsLd([['Home', 'index.html'], ['Services', 'services.html'], ['Move-In / Move-Out', '']], `${BIZ.domain}/move-out-cleaning-columbus-ohio`),
        serviceJsonLd('Move-In/Move-Out Cleaning Service', 'Move Out House Cleaning', 'Professional move-in and move-out cleaning in Columbus, Ohio with inside-appliance and cabinet detailing.', '200'),
        faqJsonLd(MOVE_FAQS),
      ],
      content: moveContent,
    }),
  },
  {
    path: 'airbnb-cleaning-columbus-ohio.html',
    html: renderPage({
      path: 'airbnb-cleaning-columbus-ohio.html',
      title: 'Airbnb Cleaning Columbus Ohio | Short-Term Rental Cleaning | LemonMaid',
      desc: 'Keep your Columbus Airbnb or short-term rental guest-ready with LemonMaid. Reliable turnaround cleans, linen changes, and restocking.',
      canonical: `${BIZ.domain}/airbnb-cleaning-columbus-ohio`,
      active: 'services',
      jsonld: [
        crumbsLd([['Home', 'index.html'], ['Services', 'services.html'], ['Airbnb & STR Cleaning', '']], `${BIZ.domain}/airbnb-cleaning-columbus-ohio`),
        serviceJsonLd('Airbnb & Short-Term Rental Cleaning', 'Vacation Rental Cleaning', 'Turnover cleaning for Airbnb and short-term rentals in Columbus, Ohio with linen changes and restocking.', '80'),
        faqJsonLd(STR_FAQS),
      ],
      content: strContent,
    }),
  },
];
