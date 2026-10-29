import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Jaipur Hotel Deals & Offers | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Explore hotel deals and seasonal stay packages at Shravan Royal Inn in Jaipur, Rajasthan.', '/offers')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/offers" title="Offers">{children}</SeoRoute>
}
