import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

const title = 'Hotel Rooms & Suites in Jaipur | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Explore room and suite options at Shravan Royal Inn in Jaipur, with room details, amenities and booking links.', '/rooms')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
