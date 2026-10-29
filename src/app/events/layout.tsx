import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Banquet Hall in Mansarovar Jaipur | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Explore banquet and event spaces in Mansarovar, Jaipur for weddings, private celebrations and corporate meetings at Shravan Royal Inn.', '/events')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/events" title="Events">{children}</SeoRoute>
}
