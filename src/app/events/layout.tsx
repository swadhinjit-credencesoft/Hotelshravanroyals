import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Weddings, Events & Meetings | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Explore wedding, private celebration and corporate event venues at Shravan Royal Inn in Jaipur.', '/events')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/events" title="Events">{children}</SeoRoute>
}
