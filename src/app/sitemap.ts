import { MetadataRoute } from 'next'
import { FALLBACK_ROOMS } from '@/lib/rooms'
import { galleryImages } from '@/data/gallery'

export const dynamic = 'force-static'

const BASE_URL = 'https://thedivineoasisresort.com'
const TODAY = new Date().toISOString().slice(0, 10)

const P1 = 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'
const P2 = 'https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg'
const P4 = 'https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg'
const P7 = 'https://bookonelocal.in/cdn/2026-05-13-064459381-WhatsApp Image 2026-05-11 at 15.42.11.jpg'
const P8 = 'https://bookonelocal.in/cdn/2026-05-13-064504242-WhatsApp Image 2026-05-11 at 15.42.12.jpg'
const R3 = 'https://bookonelocal.in/cdn/2026-05-13-063550245-WhatsApp Image 2026-05-11 at 15.54.31 (1).jpg'
const R4 = 'https://bookonelocal.in/cdn/2026-05-13-063648495-WhatsApp Image 2026-05-11 at 15.52.45 (1).jpg'
const LUX = 'https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg'
const MUD = 'https://bookonelocal.in/cdn/2026-05-13-063246599-WhatsApp Image 2026-05-11 at 15.52.07 (1).jpg'

const localSeoPages = [
  { url: `${BASE_URL}/resort-near-ajodhya-hill`, lastModified: TODAY, changeFrequency: 'monthly' as const, priority: 0.8, images: [P1] },
  { url: `${BASE_URL}/resort-near-baghmundi`, lastModified: TODAY, changeFrequency: 'monthly' as const, priority: 0.8, images: [P2] },
  { url: `${BASE_URL}/family-resort-near-ajodhya-hill`, lastModified: TODAY, changeFrequency: 'monthly' as const, priority: 0.8, images: [MUD] },
  { url: `${BASE_URL}/corporate-resort-in-purulia`, lastModified: TODAY, changeFrequency: 'monthly' as const, priority: 0.8, images: [LUX] },
  { url: `${BASE_URL}/budget-cottage-resort-in-purulia`, lastModified: TODAY, changeFrequency: 'monthly' as const, priority: 0.8, images: [R4] },
]

const blogArticles = [
  'best-resorts-near-ajodhya-hill',
  'organic-farm-dining-in-purulia',
  'places-to-visit-in-ajodhya-hill',
  'wedding-venue-in-purulia',
  'corporate-offsite-resort-in-purulia',
  'family-resort-in-ajodhya-hill',
  'luxury-cottage-resort-in-purulia',
  'resorts-near-purulia-railway-station',
  'best-dining-near-ajodhya-hill',
  'fine-dining-in-purulia',
  'family-dining-in-purulia',
  'best-dinner-place-in-purulia',
  'outdoor-wedding-venue-in-purulia',
  'birthday-party-resort-in-purulia',
  'corporate-event-venue-in-purulia',
  'things-to-do-in-purulia',
  'purulia-travel-guide',
  'local-food-guide-in-purulia',
  'shopping-in-purulia',
  'best-cottages-in-ajodhya-hill',
]

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`, lastModified: TODAY, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/rooms`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/reservations`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/dining`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/experiences`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events/weddings`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events/parties`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events/corporate`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events/day-trips`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/about`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7, images: [P1, P2] },
  { url: `${BASE_URL}/contact`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/offers`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.7 },
  ...localSeoPages,
  ...blogArticles.map(slug => {
    const imageMap: Record<string, string[]> = {
      'best-resorts-near-ajodhya-hill': [P1],
      'organic-farm-dining-in-purulia': [P4],
      'places-to-visit-in-ajodhya-hill': [P7],
      'wedding-venue-in-purulia': [P4],
      'corporate-offsite-resort-in-purulia': [LUX],
      'family-resort-in-ajodhya-hill': [MUD],
      'luxury-cottage-resort-in-purulia': [LUX],
      'resorts-near-purulia-railway-station': [P1],
      'best-dining-near-ajodhya-hill': [P8],
      'fine-dining-in-purulia': [P2],
      'family-dining-in-purulia': [MUD],
      'best-dinner-place-in-purulia': [P4],
      'outdoor-wedding-venue-in-purulia': [P4],
      'birthday-party-resort-in-purulia': [P7],
      'corporate-event-venue-in-purulia': [LUX],
      'things-to-do-in-purulia': [P7],
      'purulia-travel-guide': [P1],
      'local-food-guide-in-purulia': [P4],
      'shopping-in-purulia': [P7],
      'best-cottages-in-ajodhya-hill': [R3],
    }
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: TODAY,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: imageMap[slug] || [],
    }
  }),
  { url: `${BASE_URL}/faq`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8, images: [P1] },
  { url: `${BASE_URL}/reviews`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8, images: [P1] },
  { url: `${BASE_URL}/how-to-reach`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8, images: [P1] },
  { url: `${BASE_URL}/privacy`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/cancellation`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/terms`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const roomEntries: MetadataRoute.Sitemap = FALLBACK_ROOMS.map((room) => ({
    url: `${BASE_URL}/rooms/${room.slug}`,
    lastModified: TODAY,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
    images: room.images?.length > 0
      ? room.images.map(img => img.startsWith('http') ? img : `${BASE_URL}${img}`)
      : undefined,
  }))

  const gallerySitemap: MetadataRoute.Sitemap = [{
    url: `${BASE_URL}/gallery`,
    lastModified: TODAY,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    images: galleryImages.slice(0, 20).map(img => img.src),
  }]

  return [...staticRoutes, ...roomEntries, ...gallerySitemap]
}