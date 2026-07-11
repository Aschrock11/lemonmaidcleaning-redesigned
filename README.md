# LemonMaid Cleaning — redesigned site

A ground-up redesign of [www.lemonmaidcleaning.com](https://www.lemonmaidcleaning.com), keeping every
existing URL (all SEO pages, canonicals, and JSON-LD structured data carried over) while rebuilding the
design, content, and code.

## What's here

- **`docs/`** — the built site, ready to serve as-is (GitHub Pages: Settings → Pages → deploy from `main` / `docs`).
- **`src/`** — the source: design system CSS, site JS, and page definitions.
- **`build.js`** — dependency-free Node generator. Run `node build.js` to regenerate `docs/` after editing `src/`.

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
- `sitemap.xml`, `robots.txt`

## Design system

- **Palette:** lemon yellow `#FFD91E` + deep green `#0A3D28` on warm cream, from the existing logo
- **Type:** Fraunces (display) + Inter (text), via Google Fonts
- **Components:** sticky glass header, hero with floating review cards, badge marquee, stats band with
  count-up, FAQ accordions, pricing cards, comparison tables, review cards, area pills + map

## Cutover checklist (when ready to go live)

1. Enable GitHub Pages on this repo: **Settings → Pages → main branch, `/docs` folder**.
2. Verify everything on the `*.github.io` preview URL.
3. Remove the custom domain from the old `lemonmaid-site` repo.
4. Add `www.lemonmaidcleaning.com` as the custom domain here (this writes the `CNAME` file into `docs/`).
5. Done — DNS already points at GitHub Pages.

> `CNAME` is intentionally not committed yet: two GitHub Pages repos can't claim the same domain at once.

## Image credits

Photography from [Unsplash](https://unsplash.com/license) (free for commercial use). Logo and favicons
carried over from the original site.
