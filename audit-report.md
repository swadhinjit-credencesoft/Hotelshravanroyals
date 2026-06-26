# Hotel Surya Bella Casa — Audit Report

## Project Overview

| Property | Value |
|---|---|
| **Framework** | Next.js 15.5.19 |
| **Router** | App Router |
| **Output** | Static Export (`output: 'export'`) |
| **TypeScript** | Yes |
| **Styling** | Tailwind CSS |
| **Animation** | framer-motion + GSAP + Lenis (3 libraries) |
| **Images** | `unoptimized: true` (static export) |
| **Data** | HotelMate API (client-side) |
| **Deployment** | Static HTML export |

## Files Found

- **Pages:** 25 page files across routes
- **Layouts:** 16 layout files
- **Sections:** 19 section components
- **UI components:** 10 UI components
- **Data files:** 9 data files
- **Library files:** 5 lib files

## Critical Issues

1. **Cancellation page has NO metadata** — no layout, no `export metadata`
2. **Rick Roll YouTube URL** in `gallery/page.tsx` (`dQw4w9WgXcQ`)
3. **"Pune" typo** in `events/day-trips/page.tsx` schema (should be "Purnia")
4. **Missing OG images** on 4 event sub-pages (weddings, parties, day-trips, corporate)
5. **3 competing animation libraries** — framer-motion (120KB) + GSAP (60KB) + Lenis (15KB)

## Performance Issues

1. **All sections are `'use client'`** — no server components for static content
2. **`images: { unoptimized: true }`** — no Next.js image optimization
3. **No `sizes` attributes** on many `fill` images
4. **Places in image filenames** (`/Lawn Facing Room.png`)
5. **Same OG image** reused across all pages
6. **GSAP incrementally loaded** in section components (parallax, dining)

## SEO Issues

1. Cancellation page: no title, description, OG, canonical
2. Event sub-pages: OG metadata missing `images` array
3. JSON-LD injected via `<script>` tags (not metadata API)
4. Heading hierarchy improvements possible
5. Alt text improvements possible on some images

## Code Quality Issues

1. `build.js` uses fragile polling workaround for Windows
2. `RoomDetailContent.tsx` and `RoomDetailClient.tsx` duplicate functionality
3. Hardcoded placeholder content (Rick Roll, same image repeated)
4. Mixed concerns in several large client components
5. Commented-out code blocks

## Recommended Actions

1. **Fix critical bugs** — cancellation metadata, Rick Roll, Pune typo
2. **Add OG images** to event sub-pages
3. **Convert static sections** to server components (reduce client JS 30-50%)
4. **Add metadata.ts** for centralized SEO configuration
5. **Improve images** — sizes, alt text, WebP
6. **Add loading/error boundaries**
7. **Fix accessibility** — aria labels, semantic HTML
