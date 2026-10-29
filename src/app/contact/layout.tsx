import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Hotel Shravan Royal Inn Contact | Mansarovar Jaipur'
export const metadata: Metadata = pageMetadata(title, 'Find contact, address and reservation enquiry information for Hotel Shravan Royal Inn in Mansarovar, Jaipur.', '/contact')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/contact" title="Contact">{children}</SeoRoute>
}
