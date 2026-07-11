'use strict';
const { BIZ, ICONS, STARS, pic, crumbsLd, ctaBanner, pageHero, reviewCard, REVIEWS, renderPage } = require('../site');

/* About, contact, booking redirect, legal, thank-you, 404. */

const aboutContent = `
${pageHero('', {
  crumbs: [['Home', 'index.html'], ['About', '']],
  kicker: 'Our story',
  h1: 'The Columbus cleaning company that actually shows up',
  lead: 'We started LemonMaid because Columbus homeowners deserve a cleaning service that is reliable, respectful, and results-focused. Our mission is simple: make homes feel fresh and stress-free.',
})}

<section class="section"><div class="container">
  <div class="split">
    ${pic('', 'yellow-chair', 'Sunny yellow armchair in a bright, freshly cleaned living room', { cls: 'split-photo reveal', w: 1600, h: 1067 })}
    <div class="reveal reveal-d1">
      <span class="kicker">Why the lemon?</span>
      <h2>Fresh, bright, and a little bit sunny</h2>
      <p>A clean home changes how the whole week feels. That’s the feeling we’re named after — walking into a space that smells fresh, looks bright, and lets you exhale.</p>
      <p>We’re locally owned and operated, not a franchise. The people cleaning your home are background-checked, trained, and insured — and the people answering the phone are your Columbus neighbors.</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="${BIZ.booking}">${ICONS.sparkle(17)} Book with LemonMaid</a>
        <a class="btn btn-outline" href="contact-us.html">Say hello</a>
      </div>
    </div>
  </div>
</div></section>

<section class="section section-alt"><div class="container">
  <div class="section-head">
    <span class="kicker">Our promise</span>
    <h2>Three things we will always get right</h2>
  </div>
  <div class="grid-3">
    ${[
      ['clock', 'Reliability', 'We show up on time and do what we promised — every visit, not just the first one.'],
      ['home', 'Care', 'We treat every home with the same care we would give our own, down to the last baseboard.'],
      ['medal', 'Results', 'A consistently spotless finish, backed by our 24-hour re-clean guarantee.'],
    ].map((f, i) => `<article class="feature reveal reveal-d${i}">
      <span class="ico">${ICONS[f[0]](24)}</span>
      <h3>${f[1]}</h3>
      <p>${f[2]}</p>
    </article>`).join('\n    ')}
  </div>
  <p class="center mt-56">LemonMaid Cleaning is fully insured, and every team member completes a background check before their first clean.</p>
</div></section>

<section class="section"><div class="container">
  <div class="section-head">
    <span class="kicker">Reviews</span>
    <h2>Don’t take our word for it</h2>
  </div>
  <div class="grid-3">
    ${REVIEWS.map((r, i) => reviewCard(r, `reveal-d${i}`)).join('\n    ')}
  </div>
</div></section>

${ctaBanner('')}
`;

const contactContent = `
${pageHero('', {
  crumbs: [['Home', 'index.html'], ['Contact', '']],
  kicker: 'Contact us',
  h1: 'Talk to a real Columbus human',
  lead: 'Questions, quotes, rescheduling, or feedback — call, text, email, or use the form. We answer fast, seven days a week.',
  cta: false,
})}

<section class="section"><div class="container">
  <div class="grid-2" style="align-items:start">
    <div class="form-card reveal">
      <h2 style="font-size:1.5rem">Send us a message</h2>
      <p class="small muted">We typically reply within one business hour during open hours.</p>
      <form action="https://formsubmit.co/${BIZ.email}" method="POST">
        <input type="hidden" name="_subject" value="New LemonMaid website contact form submission">
        <input type="hidden" name="_next" value="${BIZ.domain}/thank-you.html">
        <input type="hidden" name="_captcha" value="false">
        <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">
        <label>Name<input required type="text" name="name" autocomplete="name"></label>
        <label>Email<input required type="email" name="email" autocomplete="email"></label>
        <label>Phone<input type="tel" name="phone" autocomplete="tel"></label>
        <label>Reason for inquiry<select name="reason">
          <option>General Question</option>
          <option>Get a Quote</option>
          <option>Reschedule</option>
          <option>Complaint</option>
          <option>Other</option>
        </select></label>
        <label>Message<textarea name="message" rows="5" required></textarea></label>
        <button class="btn btn-primary btn-lg" type="submit" style="width:100%">${ICONS.mail(18)} Send Message</button>
      </form>
    </div>
    <div style="display:grid;gap:26px">
      <div class="form-card contact-info-card reveal reveal-d1">
        <div class="ci-row">
          <span class="ci-ico">${ICONS.phone(19)}</span>
          <span><strong>Call or text</strong><a class="val" href="${BIZ.phoneHref}">${BIZ.phone}</a></span>
        </div>
        <div class="ci-row">
          <span class="ci-ico">${ICONS.mail(19)}</span>
          <span><strong>Email</strong><a class="val" href="mailto:${BIZ.email}">${BIZ.email}</a></span>
        </div>
        <div class="ci-row">
          <span class="ci-ico">${ICONS.clock(19)}</span>
          <span><strong>Hours</strong><span class="val">${BIZ.hours} · 7 days a week</span></span>
        </div>
        <div class="ci-row">
          <span class="ci-ico">${ICONS.pin(19)}</span>
          <span><strong>Service area</strong><span class="val">Columbus, OH and surrounding suburbs</span></span>
        </div>
      </div>
      <div class="map-panel reveal reveal-d2">
        <iframe title="Map of the LemonMaid Cleaning service area in Columbus, Ohio" src="https://maps.google.com/maps?q=Columbus%2C%20OH&t=&z=10&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>
      <p class="small muted mb-0" style="padding:0 6px">Serving Columbus, Dublin, Westerville, Hilliard, Gahanna, New Albany, and nearby suburbs. Prefer to skip the form? <a href="${BIZ.booking}">Book directly online</a>.</p>
    </div>
  </div>
</div></section>
`;

/* Simple pages */

const legal = (title, bodyHtml) => `
<section class="section" style="padding-top:56px"><div class="container">
  <div class="article prose">
    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Home</a><span class="sep">/</span><span aria-current="page">${title}</span></nav>
    <h1>${title}</h1>
    ${bodyHtml}
  </div>
</div></section>
`;

const privacyBody = `
  <p>LemonMaid Cleaning collects only the contact and booking information required to deliver cleaning services — your name, contact details, service address, and scheduling preferences.</p>
  <h2>How we use your information</h2>
  <ul>
    <li>To schedule, deliver, and follow up on cleaning services</li>
    <li>To send booking confirmations, reminders, and receipts</li>
    <li>To respond to inquiries you send us</li>
  </ul>
  <h2>What we don’t do</h2>
  <p>We do not sell customer data. Ever.</p>
  <h2>Questions or requests</h2>
  <p>Contact us at <a href="mailto:${BIZ.email}">${BIZ.email}</a> for any privacy questions or requests, including data access and deletion.</p>
`;

const termsBody = `
  <p>By booking LemonMaid Cleaning, you agree to provide accurate property details and safe home access for your scheduled appointment.</p>
  <h2>Rescheduling &amp; cancellation</h2>
  <p>Rescheduling or cancellation is free with at least 24 hours’ notice.</p>
  <h2>Satisfaction guarantee</h2>
  <p>If anything about your clean isn’t up to standard, tell us within 24 hours and we will re-clean the areas in question at no charge, or refund your service.</p>
  <h2>Contact</h2>
  <p>Questions about these terms? Reach us at <a href="mailto:${BIZ.email}">${BIZ.email}</a> or <a href="${BIZ.phoneHref}">${BIZ.phone}</a>.</p>
`;

const thankYouContent = `
<section class="section"><div class="container center" style="max-width:640px">
  <span class="kicker">Message received</span>
  <h1>Thanks — we got your message!</h1>
  <p class="lead">We’ll be in touch within one business hour. Need an answer right now? Call or text <a href="${BIZ.phoneHref}">${BIZ.phone}</a> for the fastest response.</p>
  <div class="cta-row" style="justify-content:center;margin-top:26px">
    <a class="btn btn-primary btn-lg" href="${BIZ.booking}">${ICONS.sparkle(18)} Book a Cleaning</a>
    <a class="btn btn-outline btn-lg" href="index.html">Back to Home</a>
  </div>
</div></section>
`;

const notFoundContent = `
<section class="section"><div class="container center" style="max-width:640px">
  <span class="kicker">404</span>
  <h1>Well, this corner needed dusting…</h1>
  <p class="lead">The page you’re looking for isn’t here. Let’s get you back to somewhere spotless.</p>
  <div class="cta-row" style="justify-content:center;margin-top:26px">
    <a class="btn btn-primary btn-lg" href="index.html">Back to Home</a>
    <a class="btn btn-outline btn-lg" href="${BIZ.booking}">Book a Clean</a>
  </div>
</div></section>
`;

/* /booking is a fast branded redirect to the BookingKoala form.
   (BookingKoala sends X-Frame-Options: SAMEORIGIN, so an on-site iframe embed
   is blocked until embedding is enabled in the BookingKoala dashboard.) */
const bookingPage = (path) => {
  const R = path.includes('/') ? '../' : '';
  return {
    path,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Now | LemonMaid Cleaning</title>
  <meta name="description" content="Book your Columbus house cleaning online in 60 seconds — instant pricing and real-time availability.">
  <meta name="robots" content="noindex">
  <link rel="canonical" href="${BIZ.booking}">
  <meta http-equiv="refresh" content="0; url=${BIZ.booking}">
  <link rel="icon" href="${R}favicon.ico" sizes="any">
</head>
<body>
  <p style="font-family:sans-serif;padding:2rem">Taking you to our secure booking page… <a href="${BIZ.booking}">Click here if you aren't redirected</a>.</p>
  <script>window.location.replace(${JSON.stringify(BIZ.booking)});</script>
</body>
</html>`,
  };
};

module.exports = [
  {
    path: 'about.html',
    html: renderPage({
      path: 'about.html',
      title: 'About LemonMaid Cleaning | Columbus Ohio House Cleaning Company',
      desc: 'Learn about LemonMaid Cleaning, a locally owned Columbus, Ohio house cleaning company built on trust, care, and spotless results.',
      canonical: `${BIZ.domain}/about`,
      active: 'about',
      jsonld: [crumbsLd([['Home', 'index.html'], ['About', '']], `${BIZ.domain}/about`)],
      content: aboutContent,
    }),
  },
  {
    path: 'contact-us.html',
    html: renderPage({
      path: 'contact-us.html',
      title: 'Contact LemonMaid Cleaning | Columbus Ohio House Cleaners',
      desc: 'Get in touch with LemonMaid Cleaning in Columbus, Ohio. Call, text, or email us. Mon-Sun 8AM-8PM.',
      canonical: `${BIZ.domain}/contact-us`,
      active: 'contact',
      jsonld: [crumbsLd([['Home', 'index.html'], ['Contact', '']], `${BIZ.domain}/contact-us`)],
      content: contactContent,
    }),
  },
  {
    path: 'privacy-policy.html',
    html: renderPage({
      path: 'privacy-policy.html',
      title: 'Privacy Policy | LemonMaid Cleaning',
      desc: 'How LemonMaid Cleaning collects, uses, and protects your information.',
      canonical: `${BIZ.domain}/privacy-policy`,
      active: '',
      content: legal('Privacy Policy', privacyBody),
    }),
  },
  {
    path: 'terms-of-service.html',
    html: renderPage({
      path: 'terms-of-service.html',
      title: 'Terms of Service | LemonMaid Cleaning',
      desc: 'The terms that apply when you book LemonMaid Cleaning services.',
      canonical: `${BIZ.domain}/terms-of-service`,
      active: '',
      content: legal('Terms of Service', termsBody),
    }),
  },
  {
    path: 'thank-you.html',
    html: renderPage({
      path: 'thank-you.html',
      title: 'Thank You | LemonMaid Cleaning',
      desc: 'Thanks for contacting LemonMaid Cleaning — we’ll be in touch shortly.',
      canonical: `${BIZ.domain}/thank-you`,
      active: '',
      content: thankYouContent,
    }),
  },
  {
    path: '404.html',
    html: renderPage({
      path: '404.html',
      title: 'Page Not Found | LemonMaid Cleaning',
      desc: 'That page isn’t here — head back to LemonMaid Cleaning’s homepage.',
      canonical: `${BIZ.domain}/404`,
      active: '',
      content: notFoundContent,
    }),
  },
  bookingPage('booking.html'),
  bookingPage('booking/index.html'),
];
