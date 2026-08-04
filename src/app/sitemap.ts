import { MetadataRoute } from 'next'
import { rooms } from '@/data/rooms'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unwindkarjat.com'
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/rooms',
    '/dining',
    '/experiences',
    '/events',
    '/events/corporate',
    '/events/day-trips',
    '/events/live-musical-evenings',
    '/events/parties',
    '/events/weddings',
    '/gallery',
    '/contact',
    '/reservations',
    '/privacy',
    '/terms',
    '/cancellation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/events/') || route === '/rooms' ? 0.9 : 0.8,
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
