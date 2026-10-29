import type { Metadata } from 'next'
import SeoRoute from '@/components/seo/SeoRoute'
import { pageMetadata } from '@/lib/seo'

const title = 'Privacy Policy | Shravan Royal Inn'
export const metadata: Metadata = pageMetadata(title, 'Read the privacy policy for the Shravan Royal Inn website and enquiries.', '/privacy')

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SeoRoute path="/privacy" title="Privacy Policy">{children}</SeoRoute>
}
