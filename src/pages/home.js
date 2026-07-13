'use strict';
const { BIZ, CITIES, REVIEWS, ICONS, STARS, squiggle, pic, ctaBanner, faqSection, faqJsonLd, reviewCard, areaPillLinks, LOCAL_BUSINESS, renderPage } = require('../site');

const FAQS = [
  ['How much does house cleaning cost in Columbus, Ohio?',
    `Standard cleaning for a 2-bedroom home in Columbus typically ranges from $200–$300. Deep cleaning starts at $280–$420 depending on home size and condition. See our <a href="pricing.html">pricing page</a> for starting rates, or get your exact quote online in 60 seconds.`],
  ['Do you bring your own supplies?',
    'Yes. We bring all supplies and equipment to every visit, and we use eco-friendly, non-toxic products that are safe for kids, pets, and the planet.'],
  ['Are your cleaners background-checked?',
    'Yes. Every LemonMaid cleaner is background-checked, trained, and insured before their first clean.'],
  ['What if I’m not happy with my cleaning?',
    'Tell us within 24 hours and we’ll come back and re-clean the areas in question at no charge — or refund your service. That’s our 100% satisfaction guarantee.'],
  ['Do I need to be home during the cleaning?',
    'Totally up to you. Many customers simply leave entry instructions when they book — a door code, lockbox, or a key with a neighbor all work great.'],
  ['How do I book a cleaning?',
    `Book online in about 60 seconds at <a href="booking.html">our booking page</a>, or call/text <a href="${BIZ.phoneHref}">${BIZ.phone}</a> and we’ll set everything up for you.`],
];

const marqueeItems = [
  'Fully Insured', 'Background-Checked Cleaners', 'Locally Owned', 'Eco-Friendly Products',
  '100% Satisfaction Guarantee', 'Open 7 Days a Week', 'Online Booking in 60 Seconds',
];

const services = [
  {
    img: 'bright-living', alt: 'Bright, freshly cleaned living room with sunlight streaming in',
    title: 'Standard Cleaning', price: 'From $150', href: 'services.html',
    desc: 'Recurring or one-time upkeep for kitchens, bathrooms, bedrooms, and living areas. Weekly, bi-weekly, or monthly.',
  },
  {
    img: 'bathroom-modern', alt: 'Spotless modern bathroom with glass shower and clean vanity',
    title: 'Deep Cleaning', price: 'From $280', href: 'deep-cleaning-columbus-ohio.html',
    desc: 'A top-to-bottom reset: baseboards by hand, inside windowpanes, tile and grout detail, and more.',
  },
  {
    img: 'empty-room', alt: 'Pristine, empty living space ready for move-in',
    title: 'Move-In / Move-Out', price: 'From $300', href: 'move-out-cleaning-columbus-ohio.html',
    desc: 'Deposit-ready cleaning inside cabinets, drawers, fridge, and stove — built for smooth transitions.',
  },
  {
    img: 'bedroom', alt: 'Hotel-quality bedroom staged for short-term rental guests',
    title: 'Airbnb & STR Cleaning', price: 'From $120', href: 'airbnb-cleaning-columbus-ohio.html',
    desc: 'Fast, reliable turnovers with linen changes and restocking so every guest walks into a 5-star stay.',
  },
];

const features = [
  { ico: 'shield', title: 'Vetted & Insured', desc: 'Every cleaner is background-checked, insured, and trained to our quality standard before they ever enter your home.' },
  { ico: 'calendar', title: 'Flexible Scheduling', desc: 'Weekly, bi-weekly, monthly, or one-time service — with free, easy rescheduling when life happens.' },
  { ico: 'medal', title: 'Satisfaction Guaranteed', desc: 'Not happy? We re-clean within 24 hours at no charge, or refund your service. No fine print.' },
  { ico: 'leaf', title: 'Eco-Friendly Products', desc: 'Non-toxic, planet-friendly products that are safe for kids, pets, and everyone who lives on your floors.' },
  { ico: 'home', title: 'Locally Owned', desc: 'We’re your Columbus neighbors — not a franchise. We care about this community because it’s ours too.' },
  { ico: 'clock', title: 'Always On Time', desc: 'Your time matters. We arrive within your appointment window, prepared and ready to shine.' },
];

const steps = [
  { title: 'Tell us about your home', desc: 'Pick your service type, home size, and any add-ons. It takes about 2 minutes online.' },
  { title: 'Choose a date & time', desc: 'Select the appointment window that fits your week — including weekends.' },
  { title: 'We make it shine', desc: 'Your background-checked cleaner arrives on time, fully equipped, and leaves your home spotless.' },
];

const content = `
<section class="hero"><div class="container hero-grid">
  <div class="hero-copy">
    <span class="pill-badge"><span class="stars">${STARS}</span> Rated 5.0 by Columbus homeowners</span>
    <h1>House cleaning in Columbus that feels like ${squiggle('sunshine')}</h1>
    <p class="hero-sub">Background-checked, insured cleaners who treat your home like their own. Book online in 60 seconds — satisfaction guaranteed, or your money back.</p>
    <div class="cta-row">
      <a class="btn btn-primary btn-lg" href="booking.html">${ICONS.sparkle(18)} Get an Instant Quote</a>
      <a class="btn btn-outline btn-lg" href="${BIZ.phoneHref}">${ICONS.phone(18)} ${BIZ.phone}</a>
    </div>
    <div class="trust-row">
      <div class="avatar-stack">
        <span style="background:#1B8A5A">P</span><span style="background:#F2A007">A</span><span style="background:#0D5C3C">K</span>
      </div>
      <p class="trust-copy mb-0"><span class="stars">${STARS}</span> <strong>5.0</strong>-rated by our customers<br>Most Columbus customers book within 48 hours</p>
    </div>
  </div>
  <div class="hero-media">
    <span class="blob blob-lemon"></span>
    <span class="blob blob-green"></span>
    ${pic('', 'hero-kitchen', 'Bright, spotless white kitchen with a bowl of fresh lemons on the counter', { cls: 'hero-photo', sizes: '(max-width: 900px) 94vw, 44vw', eager: true, w: 1600, h: 959 })}
    <div class="float-card float-review">
      <span class="stars">${STARS}</span>
      <p>“Everything looked amazing… such a relief!”</p>
      <p class="who">— Paige M., Columbus</p>
    </div>
    <div class="float-card float-chip">
      <span class="chip-ico">${ICONS.calendar(19)}</span>
      <span>Booked online<br>in 60 seconds</span>
    </div>
  </div>
</div></section>

<div class="marquee" aria-hidden="true"><div class="marquee-track">
  ${[...marqueeItems, ...marqueeItems].map((m) => `<span>${ICONS.sparkle(15)} ${m}</span>`).join('\n  ')}
</div></div>

<section class="section" id="services"><div class="container">
  <div class="section-head">
    <span class="kicker">Our services</span>
    <h2>A cleaning for every kind of home</h2>
    <p class="lead">From weekly upkeep to top-to-bottom resets and rental turnovers — pick the clean that fits your life.</p>
  </div>
  <div class="grid-4">
    ${services.map((s, i) => `<article class="svc-card reveal reveal-d${i % 4}">
      ${pic('', s.img, s.alt, { cls: 'svc-photo', sizes: '(max-width: 768px) 94vw, (max-width: 1080px) 44vw, 270px' })}
      <div class="svc-body">
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="svc-foot">
          <span class="price-chip">${s.price}</span>
          <a class="arrow-link stretched" href="${s.href}">Details ${ICONS.arrow(16)}</a>
        </div>
      </div>
    </article>`).join('\n    ')}
  </div>
</div></section>

<section class="section section-alt"><div class="container">
  <div class="section-head">
    <span class="kicker">Why LemonMaid</span>
    <h2>Why Columbus homeowners choose us</h2>
    <p class="lead">Anyone can mop a floor. We built LemonMaid around the things that actually make a cleaning service worth trusting.</p>
  </div>
  <div class="grid-3">
    ${features.map((f, i) => `<article class="feature reveal reveal-d${i % 3}">
      <span class="ico">${ICONS[f.ico](24)}</span>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </article>`).join('\n    ')}
  </div>
</div></section>

<section class="section-dark stats-band"><div class="container">
  <div class="stats-grid">
    <div class="stat reveal"><span class="num"><span data-count="5.0">0</span></span><span class="lbl">Average review rating</span></div>
    <div class="stat reveal reveal-d1"><span class="num"><span data-count="24" data-suffix="hr">0</span></span><span class="lbl">Re-clean guarantee</span></div>
    <div class="stat reveal reveal-d2"><span class="num"><span data-count="10">0</span></span><span class="lbl">Communities served</span></div>
    <div class="stat reveal reveal-d3"><span class="num"><span data-count="7">0</span></span><span class="lbl">Days a week we clean</span></div>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="section-head">
    <span class="kicker">How it works</span>
    <h2>Booking a cleaning is simple</h2>
  </div>
  <div class="steps">
    ${steps.map((s, i) => `<div class="step reveal reveal-d${i}">
      <span class="step-num">${i + 1}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join('\n    ')}
  </div>
  <p class="center mt-56"><a class="btn btn-primary btn-lg" href="booking.html">${ICONS.sparkle(18)} Book Your Clean Now</a></p>
</div></section>

<section class="section section-alt"><div class="container">
  <div class="split">
    ${pic('', 'wiping-table', 'LemonMaid cleaner in yellow gloves detailing window shutters', { cls: 'split-photo reveal', w: 1600, h: 1067 })}
    <div class="reveal reveal-d1">
      <span class="kicker">Our promise</span>
      <h2>The 100% happiness guarantee</h2>
      <p>We stand behind every clean. If anything isn’t up to standard, tell us within 24 hours — we’ll come back and make it right for free, or refund your service.</p>
      <ul class="check-list">
        ${['<strong>24-hour re-clean guarantee</strong> — we fix it, fast', '<strong>Quality-assurance inspections</strong> on our teams’ work', '<strong>Free rescheduling</strong> with 24 hours’ notice', '<strong>No contracts</strong> — pause or cancel recurring service anytime'].map((t) => `<li><span class="chk">${ICONS.check(13)}</span><span>${t}</span></li>`).join('\n        ')}
      </ul>
      <a class="btn btn-dark" href="about.html">More about LemonMaid ${ICONS.arrow(16)}</a>
    </div>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="section-head">
    <span class="kicker">Reviews</span>
    <h2>What Columbus homeowners are saying</h2>
    <p class="lead"><span class="rating-summary"><span class="big">5.0</span> <span class="stars">${STARS}</span> from verified local customers</span></p>
  </div>
  <div class="grid-3">
    ${REVIEWS.map((r, i) => reviewCard(r, `reveal-d${i}`)).join('\n    ')}
  </div>
</div></section>

<section class="section section-alt"><div class="container">
  <div class="areas-grid">
    <div class="reveal">
      <span class="kicker">Service areas</span>
      <h2>Proudly serving Columbus &amp; surrounding suburbs</h2>
      <p>Wherever you are in the metro — from downtown Columbus to New Albany — a five-star clean is a 60-second booking away.</p>
      <div class="area-pills">
        ${CITIES.map((c) => `<a href="house-cleaning-${c.slug}-ohio.html">${ICONS.pin(14)} ${c.name}</a>`).join('\n        ')}
      </div>
    </div>
    <div class="map-panel reveal reveal-d1">
      <iframe title="Map of the LemonMaid Cleaning service area in Columbus, Ohio" src="https://maps.google.com/maps?q=Columbus%2C%20OH&t=&z=10&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</div></section>

${faqSection(FAQS, { openFirst: true })}

${ctaBanner('')}
`;

module.exports = {
  path: 'index.html',
  html: renderPage({
    path: 'index.html',
    title: 'House Cleaning Columbus Ohio | LemonMaid Cleaning',
    desc: 'LemonMaid Cleaning offers trusted house cleaning in Columbus, Ohio. Book a deep clean, standard, or move-out clean online in 60 seconds. 100% satisfaction guarantee.',
    canonical: `${BIZ.domain}/`,
    active: 'home',
    jsonld: [LOCAL_BUSINESS, faqJsonLd(FAQS)],
    content,
  }),
};
