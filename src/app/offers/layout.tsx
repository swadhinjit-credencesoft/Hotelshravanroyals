import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Hotel Offers & Packages in Jaipur | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'View current hotel packages and seasonal offers at Shravan Royal Inn in Jaipur, Rajasthan.', '/offers')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/offers" title="Offers">{children}</SeoRoute>
}
