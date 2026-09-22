# The Divine Oasis

Website for **The Divine Oasis** — a hilltop forest resort at Ajodhya Hill, Purulia, West Bengal.

Production domain: https://thedivineoasisresort.com

Built with **Next.js 15** (App Router) and exported as a fully static site (`output: 'export'`), deployed to Apache shared hosting via the `.htaccess` in `public/`.

## Getting Started

```bash
npm install
npm run dev     # development server at http://localhost:3000
npm run lint    # ESLint checks
npm run build   # production build + static export (writes to ./out)
```

The exported site is written to `./out` and is ready to upload to the web root, alongside `public/.htaccess`.

## Project Structure

- `src/app/` — Pages and routes (home, rooms, dining, events, experiences, blog, offers, contact, about, faq, reviews, gallery, reservations, legal pages, SEO landing pages)
- `src/components/` — Layout, UI, and section components
- `src/data/` — Central content/dataset files (gallery, dining, events, experiences, offers, testimonials, awards, hero)
- `src/lib/` — Data layer (`hotelmate.ts` property 3558), room catalogue, analytics, GSAP setup

## Key configuration

- All booking links point to the HotelMate engine: `https://bookone.io/The-Divine-Oasis?bookingEngine=true`
- Room slugs, names, and rates are defined in `src/lib/rooms.ts`
- Brand/contact details (phone, email, geolocation) live in `src/data/site.ts` and `src/lib/hotelmate.ts`
- Image assets are served from `bookonelocal.in` CDN (remote pattern registered in `next.config.mjs`)

## Deploying

1. `npm run build`
2. Upload the contents of `./out` to the host's web root
3. Ensure `public/.htaccess` is uploaded too (canonical https + room-slug redirects)