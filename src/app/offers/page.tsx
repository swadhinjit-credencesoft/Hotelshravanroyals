import OffersSection from '@/components/sections/OffersSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { offers } from '@/data/offers'

export default function OffersPage() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://hotelsuryabellacasa.com/offers/#itemlist",
    "name": "Seasonal Packages & Offers",
    "description": "Exclusive deals and seasonal packages at Hotel Surya Bella Casa, Purnia.",
    "url": "https://hotelsuryabellacasa.com/offers",
    "itemListElement": offers.map((offer, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": offer.name,
        "description": `${offer.nights} nights package with ${offer.includes.length} amenities. Price: ₹${offer.price.toLocaleString()}.`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://hotelsuryabellacasa.com/offers/#webpage",
            "url": "https://hotelsuryabellacasa.com/offers",
            "name": "Seasonal Packages & Resort Offers | Hotel Surya Bella Casa",
            "description": "Save on your weekend getaways in Purnia. Check out active lodging promotions, culinary meal plan packages, and adventure tour add-ons.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://hotelsuryabellacasa.com/#website",
              "name": "Hotel Surya Bella Casa",
              "url": "https://hotelsuryabellacasa.com"
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
