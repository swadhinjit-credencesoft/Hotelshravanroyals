import type { ReactNode } from 'react'
import JsonLd from './JsonLd'
import { breadcrumbSchema, siteUrl } from '@/lib/seo'

export default function SeoRoute({
  path,
  title,
  children,
}: {
  path: string
  title: string
  children: ReactNode
}) {
  const url = new URL(path, siteUrl).toString()
  return (
    <>
      <JsonLd data={breadcrumbSchema(path, title)} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        isPartOf: { '@id': new URL('/#website', siteUrl).toString() },
        about: { '@id': new URL('/#hotel', siteUrl).toString() },
      }} />
      {children}
    </>
  )
}
