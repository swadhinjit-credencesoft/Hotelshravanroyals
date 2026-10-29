import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Hotel Room Booking in Mansarovar Jaipur | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Enquire about room availability and reservations at Hotel Shravan Royal Inn in Mansarovar, Jaipur.', '/reservations')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/reservations" title="Reservations">{children}</SeoRoute>
}
