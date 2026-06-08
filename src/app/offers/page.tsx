import OffersSection from '@/components/sections/OffersSection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function OffersPage() {
  return (
    <main className="bg-cream min-h-screen">
      

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://hotelsuryabellacasa.com/offers/#webpage",
            "url": "https://hotelsuryabellacasa.com/offers",
            "name": "Seasonal Packages & Resort Offers | Hotel Bella Casa",
            "description": "Save on your weekend getaways in Purnia. Check out active lodging promotions, culinary meal plan packages, and adventure tour add-ons.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://hotelsuryabellacasa.com/#website",
              "name": "Hotel Bella Casa",
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
