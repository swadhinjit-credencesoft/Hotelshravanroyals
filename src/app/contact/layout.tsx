import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Contact Shravan Royal Inn | Jaipur'
export const metadata: Metadata = pageMetadata(title, 'Contact Shravan Royal Inn in Jaipur for room reservations, event enquiries and stay information.', '/contact')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/contact" title="Contact">{children}</SeoRoute>
}
