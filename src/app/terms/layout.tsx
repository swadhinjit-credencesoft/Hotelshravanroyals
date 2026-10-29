import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Terms & Conditions | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Review reservation, cancellation and guest terms for Shravan Royal Inn.', '/terms')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/terms" title="Terms & Conditions">{children}</SeoRoute>
}
