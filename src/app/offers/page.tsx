import OffersSection from '@/components/sections/OffersSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { offers } from '@/data/offers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resort Offers & Packages | The Divine Oasis Ajodhya Hill, Purulia',
  description: 'Exclusive resort offers, seasonal packages, and best deals at The Divine Oasis at Ajodhya Hill, Purulia. Corporate retreat packages, wedding offers, family getaways.',
  alternates: {
    canonical: 'https://thedivineoasisresort.com/offers',
  },
  keywords: [
    'resort offers Purulia',
    'resort deals Ajodhya Hill',
    'best resort rates Purulia',
    'cottage booking offers Purulia',
    'corporate retreat rates Purulia',
    'wedding package resort Purulia',
    'family getaway offers Purulia',
  ],
}

export default function OffersPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://thedivineoasisresort.com/offers/#itemlist",
    "name": "Seasonal Packages & Offers",
    "description": "Exclusive deals and seasonal packages at The Divine Oasis, Ajodhya Hill, Purulia.",
    "url": "https://thedivineoasisresort.com/offers",
    "itemListElement": offers.map((offer, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": offer.name,
        "description": `${offer.nights} nights package with ${offer.includes.length} amenities. Price: â‚¹${offer.price.toLocaleString()}.`,
        "offers": {
          "@type": "Offer",
          "price": offer.price,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "validThrough": "2026-12-31"
        }
      }
    }))
  }

  return (
    <main className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Offers',
                item: 'https://thedivineoasisresort.com/offers',
              },
            ],
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://thedivineoasisresort.com/offers/#webpage",
            "url": "https://thedivineoasisresort.com/offers",
            "name": "Seasonal Packages & Resort Offers | The Divine Oasis",
            "description": "Save on your forest getaway at Ajodhya Hill. Check out active cottage promotions, organic farm meal plan packages, and adventure tour add-ons.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://thedivineoasisresort.com/#website",
              "name": "The Divine Oasis",
              "url": "https://thedivineoasisresort.com"
            }
          })
        }}
      />

      <div className="pt-32 pb-12 px-6 md:px-10 max-w-[1600px] mx-auto text-center">
        <SectionLabel className="justify-center mb-4">Limited Collections</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-8">Seasonal Journeys</h1>
      </div>
      <OffersSection />
    </main>
  )
}
