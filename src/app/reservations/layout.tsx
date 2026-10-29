import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Hotel Reservations | Shravan Royal Inn, Jaipur'
export const metadata: Metadata = pageMetadata(title, 'Find reservation information and enquire about a stay at Shravan Royal Inn in Jaipur.', '/reservations')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/reservations" title="Reservations">{children}</SeoRoute>
}
