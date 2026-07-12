# LemonMaid Cleaning — redesigned site

A ground-up redesign of [www.lemonmaidcleaning.com](https://www.lemonmaidcleaning.com), keeping every
existing URL (all SEO pages, canonicals, and JSON-LD structured data carried over) while rebuilding the
design, content, and code.

## What's here

- **`docs/`** — the built site, ready to serve as-is (GitHub Pages: Settings → Pages → deploy from `main` / `docs`).
- **`src/`** — the source: design system CSS, site JS, and page definitions.
- **`build.js`** — dependency-free Node generator. Run `node build.js` to regenerate `docs/` after editing `src/`.
- **`tools/optimize-images.js`** — regenerates the responsive WebP image set from `src/assets/photos/`
  (dev-only; needs `npm install` first). Outputs to `src/assets/optimized/`, which is what the build copies.

## Analytics (one switch to turn on)

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com) and copy the `G-XXXXXXXXXX` measurement ID.
2. Set `GA4_ID` at the top of `src/site.js`, run `node build.js`, commit.
3. Done — page views plus `book_now_click` and `call_click` conversion events fire automatically.

Also worth doing at cutover (both free, ~5 min each):
- **Google Search Console** — verify the domain, submit `sitemap.xml`.
- **Bing Webmaster Tools** — same; Bing powers ChatGPT's web search.

## Preview locally

```bash
cd docs && python3 -m http.server 8471
# open http://localhost:8471
```

## Site structure

28 pages, same URLs as the current live site:

- Home, Services, Pricing, About, Contact, Blog (+3 posts)
- Service landers: deep cleaning, move-in/move-out, Airbnb/STR
- 10 local SEO city pages (Columbus, Dublin, Hilliard, Powell, Lewis Center, Upper Arlington, Bexley, Gahanna, New Albany, Westerville)
- Booking redirect (BookingKoala), thank-you, 404, privacy, terms
- `sitemap.xml`, `robots.txt`, `llms.txt` (business facts for AI answer engines)

## SEO/AEO notes

- Every page carries JSON-LD: LocalBusiness (with `sameAs` social links), Service, FAQPage,
  BreadcrumbList, and BlogPosting where relevant.
- Images ship as 480/960/1600w WebP with `srcset` (~80% smaller than the originals).
- The `/booking` page embeds the BookingKoala form on-site (official embed snippet with
  their auto-resizer script); all Book Now CTAs point there so the funnel stays on-domain.
  A "open in new window" fallback link sits below the form.

## Design system

- **Palette:** lemon yellow `#FFD91E` + deep green `#0A3D28` on warm cream, from the existing logo
- **Type:** Fraunces (display) + Inter (text), via Google Fonts
- **Components:** sticky glass header, hero with floating review cards, badge marquee, stats band with
  count-up, FAQ accordions, pricing cards, comparison tables, review cards, area pills + map

## Hosting (live since 2026-07-11)

This repo serves **www.lemonmaidcleaning.com** via GitHub Pages. The build writes `docs/CNAME`;
a `gh-pages` branch mirrors `docs/` as a fallback publish source. The old `lemonmaid-site` repo
released the domain and keeps the previous site in its history.

To update the site: edit `src/`, run `node build.js`, commit and push `main`
(and sync `gh-pages` if that's the active Pages source).

## Image credits

Photography from [Unsplash](https://unsplash.com/license) (free for commercial use). Logo and favicons
carried over from the original site.
