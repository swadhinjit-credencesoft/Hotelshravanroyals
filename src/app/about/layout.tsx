import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'About Shravan Royal Inn | Jaipur Hotel'
export const metadata: Metadata = pageMetadata(title, 'Learn about Shravan Royal Inn, its hospitality philosophy, architecture and story in Jaipur, Rajasthan.', '/about')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/about" title="About">{children}</SeoRoute>
}
