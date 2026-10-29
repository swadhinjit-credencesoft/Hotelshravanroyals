import type { MetadataRoute } from 'next'
import { rooms } from '@/data/rooms'
import { siteUrl } from '@/lib/seo'

const staticPaths = [
  '/',
  '/about',
  '/rooms',
  '/experiences',
  '/events',
  '/gallery',
  '/offers',
  '/reservations',
  '/contact',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    ...staticPaths,
    ...rooms.map((room) => `/rooms/${room.id}`),
  ]

  return urls.map((path) => ({ url: new URL(path, siteUrl).toString() }))
}
