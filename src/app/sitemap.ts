import { MetadataRoute } from 'next'
import { FALLBACK_ROOMS } from '@/lib/rooms'
import { galleryImages } from '@/data/gallery'

export const dynamic = 'force-static'

const BASE_URL = 'https://hotelsuryabellacasa.com'
const TODAY = new Date().toISOString().slice(0, 10)

const localSeoPages = [
  { url: `${BASE_URL}/hotel-near-purnia-bus-stand`, priority: 0.9, images: ['https://bookonelocal.in/cdn/IMG_3815.avif'] },
  { url: `${BASE_URL}/hotel-near-vikass-market`, priority: 0.9, images: ['https://bookonelocal.in/cdn/IMG_3808.avif'] },
  { url: `${BASE_URL}/family-hotel-in-purnia`, priority: 0.9, images: ['https://bookonelocal.in/cdn/IMG_3701.avif'] },
  { url: `${BASE_URL}/business-hotel-in-purnia`, priority: 0.9, images: ['https://bookonelocal.in/cdn/IMG_3703.avif'] },
  { url: `${BASE_URL}/budget-hotel-in-purnia`, priority: 0.9, images: ['https://bookonelocal.in/cdn/IMG_3815.avif'] },
]

const blogArticles = [
  'best-hotels-in-purnea-near-bus-stand',
  'rooftop-restaurant-in-purnea',
  'places-to-visit-in-purnea',
  'banquet-hall-wedding-venue-in-purnea',
  'business-hotel-in-purnea',
  'family-hotel-in-purnea',
]

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/`, lastModified: TODAY, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/rooms`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/reservations`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/dining`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/experiences`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events/weddings`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events/parties`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events/corporate`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/events/day-trips`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/gallery`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/about`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7, images: ['https://bookonelocal.in/cdn/IMG_3815.avif', 'https://bookonelocal.in/cdn/IMG_3808.avif'] },
  { url: `${BASE_URL}/contact`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/blog`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/offers`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.7 },
  ...localSeoPages,
  ...blogArticles.map(slug => {
    const imageMap: Record<string, string[]> = {
      'best-hotels-in-purnea-near-bus-stand': ['https://bookonelocal.in/cdn/IMG_3815.avif'],
      'rooftop-restaurant-in-purnea': ['https://bookonelocal.in/cdn/IMG_3739.avif', 'https://bookonelocal.in/cdn/IMG_3808.avif'],
      'places-to-visit-in-purnea': ['https://bookonelocal.in/cdn/IMG_3809.avif', 'https://hotelsuryabellacasa.com/purneacity.jpg'],
      'banquet-hall-wedding-venue-in-purnea': ['https://bookonelocal.in/cdn/IMG_3766.avif'],
      'business-hotel-in-purnea': ['https://bookonelocal.in/cdn/IMG_3709.jpeg', 'https://bookonelocal.in/cdn/IMG_3703.avif'],
      'family-hotel-in-purnea': ['https://bookonelocal.in/cdn/IMG_3701.avif', 'https://bookonelocal.in/cdn/IMG_3764.avif'],
    }
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: TODAY,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: imageMap[slug] || [],
    }
  }),
  { url: `${BASE_URL}/faq`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8, images: ['https://bookonelocal.in/cdn/IMG_3815.avif'] },
  { url: `${BASE_URL}/reviews`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8, images: ['https://bookonelocal.in/cdn/IMG_3815.avif'] },
  { url: `${BASE_URL}/how-to-reach`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8, images: ['https://bookonelocal.in/cdn/IMG_3815.avif'] },
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
