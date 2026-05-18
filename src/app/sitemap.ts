import { MetadataRoute } from 'next'
import { rooms } from '@/data/rooms'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://unwindkarjat.com'

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/rooms',
    '/dining',
    '/experiences',
    '/events',
    '/gallery',
    '/contact',
    '/reservations',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic room routes
  const roomRoutes = rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...roomRoutes]
}
