import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Hotel Photo & Video Gallery | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Browse photos and videos of Shravan Royal Inn, its rooms, events and experiences in Jaipur.', '/gallery')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/gallery" title="Gallery">{children}</SeoRoute>
}
