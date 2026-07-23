import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import GoldDivider from '@/components/ui/GoldDivider'

interface RelatedArticle {
  title: string
  link: string
}

interface ServiceLink {
  label: string
  link: string
}

interface BlogArticleLayoutProps {
  metadata: Metadata
  schema: Record<string, unknown>
  category: string
  date: string
  heroImage: string
  heroAlt: string
  relatedArticles: RelatedArticle[]
  serviceLinks: ServiceLink[]
  children: React.ReactNode
}

export default function BlogArticleLayout({
  metadata,
  schema,
  category,
  date,
  heroImage,
  heroAlt,
  relatedArticles,
  serviceLinks,
  children,
}: BlogArticleLayoutProps) {
  return (
    <main className="bg-cream min-h-screen pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hotelsuryabellacasa.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://hotelsuryabellacasa.com/blog' },
              { '@type': 'ListItem', position: 3, name: metadata.title as string, item: metadata.alternates?.canonical },
            ],
          }),
        }}
      />

      <article className="max-w-[800px] mx-auto px-6 md:px-10 pb-24">
        <div className="mb-8">
          <Link href="/blog" className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold hover:text-forest transition-colors">
            &larr; Back to Blog
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">{category}</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span className="font-sans text-[10px] text-taupe/60 tracking-wider">{date}</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
          {(metadata.title as string).replace(/ \| .*/, '')}
        </h1>

        <div className="relative aspect-[16/9] mb-12 border border-gold/10">
          <Image src={heroImage} alt={heroAlt} fill className="object-cover" loading="lazy" />
        </div>

        <div className="font-sans text-base text-taupe/80 space-y-5 leading-loose">
          {children}
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-wrap gap-3 mb-8">
            <Link href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold-light transition-all font-bold">
              <Calendar size={14} /> Book Now
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-gold/30 text-forest font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold/10 transition-all">
              <MapPin size={14} /> Contact Us
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {serviceLinks.map((sl) => (
              <Link key={sl.link} href={sl.link} className="inline-flex items-center gap-1 bg-forest/5 text-forest font-sans text-[10px] uppercase tracking-[0.15em] px-4 py-2 rounded-sm hover:bg-gold/10 transition-all">
                {sl.label}
              </Link>
            ))}
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gold/10">
            <SectionLabel className="mb-4">Related Articles</SectionLabel>
            <GoldDivider className="mb-6" />
            <ul className="space-y-3">
              {relatedArticles.map((ra) => (
                <li key={ra.link}>
                  <Link href={ra.link} className="font-sans text-sm text-gold hover:text-forest transition-colors hover:underline">
                    {ra.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </main>
  )
}
