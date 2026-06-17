import { MetadataRoute } from 'next'
import { FALLBACK_ROOMS } from '@/lib/rooms'

// Required for Next.js static export (output: 'export')
export const dynamic = 'force-static'

const BASE_URL = 'https://hotelsuryabellacasa.com'
const TODAY = new Date().toISOString().slice(0, 10)

// Static pages with priorities
const STATIC_ROUTES: MetadataRoute.Sitemap = [
  {
    url: `${BASE_URL}/`,
    lastModified: TODAY,
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/rooms`,
    lastModified: TODAY,
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/reservations`,
    lastModified: TODAY,
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/dining`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/events`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/events/weddings`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/events/parties`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/events/corporate`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/events/day-trips`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/gallery`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/experiences`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/about`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/contact`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/blog`,
    lastModified: TODAY,
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/offers`,
    lastModified: TODAY,
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  // Local SEO landing pages
  {
    url: `${BASE_URL}/hotel-near-purnia-bus-stand`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/hotel-near-vikass-market`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/family-hotel-in-purnia`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/business-hotel-in-purnia`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/budget-hotel-in-purnia`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  // Legal pages
  {
    url: `${BASE_URL}/privacy`,
    lastModified: TODAY,
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/cancellation`,
    lastModified: TODAY,
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/terms`,
    lastModified: TODAY,
    changeFrequency: 'yearly',
    priority: 0.3,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Use FALLBACK_ROOMS for static export — these are the known room slugs
  const roomEntries: MetadataRoute.Sitemap = FALLBACK_ROOMS.map((room) => ({
    url: `${BASE_URL}/rooms/${room.slug}`,
    lastModified: TODAY,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...STATIC_ROUTES, ...roomEntries]
}
