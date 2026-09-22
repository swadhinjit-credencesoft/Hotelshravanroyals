import type { Metadata } from 'next'
import CinematicHero from '@/components/ui/CinematicHero'
import LuxuryAmenities from '@/components/sections/LuxuryAmenities'
import RoomsGrid from '@/components/sections/RoomsGrid'

export const metadata: Metadata = {
  title: 'Premium Cottages & Luxury Suites at The Divine Oasis, Ajodhya Hill',
  description:
    'Book premium mud cottages, luxury suite cottage, Vista Four Beds, and Vista Pod Cottage at The Divine Oasis atop Ajodhya Hill, Purulia. Free Wi-Fi, geyser, room service, organic farm dining. Best forest resort cottages in Purulia.',
  alternates: {
    canonical: 'https://thedivineoasisresort.com/rooms',
  },
  keywords: [
    'cottage rooms in Purulia',
    'mud cottage resort Purulia',
    'luxury suite cottage Ajodhya Hill',
    'family rooms Purulia',
    'Vista Four Beds Purulia',
    'Vista Pod Cottage Purulia',
    'best resort rooms near Ajodhya Hill Purulia',
    'cottage prices The Divine Oasis',
  ],
}

export default function RoomsPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      {/* RoomList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Resort Cottages at The Divine Oasis, Ajodhya Hill",
            "description": "Premium mud cottages, luxury suite, Vista Four Beds, and Vista Pod cottages near Ajodhya Hills & Forest Reserve. Book forest resort cottages in Purulia with free Wi-Fi, geyser, and organic farm dining.",
            "url": "https://thedivineoasisresort.com/rooms",
            "numberOfItems": 4,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "Product", "name": "Premium Deluxe Mud Cottages", "category": "Mud Cottage" } },
              { "@type": "ListItem", "position": 2, "item": { "@type": "Product", "name": "Luxury Suite Cottage", "category": "Suite" } },
              { "@type": "ListItem", "position": 3, "item": { "@type": "Product", "name": "Vista Four Beds", "category": "Family Cottage" } },
              { "@type": "ListItem", "position": 4, "item": { "@type": "Product", "name": "Vista Pod Cottage", "category": "Pod Cottage" } }
            ]
          })
        }}
      />

      <CinematicHero 
        label="Premium Cottages at Ajodhya Hill - Mud Cottages, Luxury Suites & Family Rooms"
        title="Best Resort Cottages in Purulia - The Divine Oasis, Ajodhya Hill"
        tagline="Looking for forest resort cottages in Purulia? The Divine Oasis offers premium mud cottages, luxury suite, Vista Four Beds & Vista Pod cottages near Ajodhya Hills & Forest Reserve. Free Wi-Fi, geyser, organic farm dining - book now."
        image='https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg'
      />
      <RoomsGrid />
      <LuxuryAmenities />
    </main>
  )
}