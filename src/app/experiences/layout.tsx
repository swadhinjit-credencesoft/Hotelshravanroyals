import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Things to Do & Hotel Experiences | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Discover hotel experiences, Jaipur activities and seasonal offerings at Shravan Royal Inn.', '/experiences')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/experiences" title="Experiences">{children}</SeoRoute>
}
