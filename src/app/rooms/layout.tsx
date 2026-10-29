import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

const title = 'Hotel Rooms in Mansarovar Jaipur | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Explore hotel rooms and suites in Mansarovar, Jaipur at Shravan Royal Inn, with room details, amenities and reservation information.', '/rooms')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
