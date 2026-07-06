import type { Metadata } from 'next'
import CinematicHero from '@/components/ui/CinematicHero'
import LuxuryAmenities from '@/components/sections/LuxuryAmenities'
import RoomsGrid from '@/components/sections/RoomsGrid'

export const metadata: Metadata = {
  title: 'AC Rooms & Deluxe Rooms Purnea',
  description:
    'Book deluxe AC rooms in Purnea at Hotel Surya Bella Casa near Bus Stand. Family rooms, luxury stays, free WiFi, parking & room service. Best hotel rooms in Purnea for comfort and value.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/rooms',
  },
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
            "name": "Hotel Rooms in Purnea at Hotel Surya Bella Casa",
            "description": "Deluxe AC rooms, family rooms, and premium suites near Purnea Bus Stand. Book the best hotel rooms in Purnea with free WiFi, parking and room service.",
            "url": "https://hotelsuryabellacasa.com/rooms",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "Product", "name": "Standard Room", "category": "Standard" } },
              { "@type": "ListItem", "position": 2, "item": { "@type": "Product", "name": "Deluxe Room", "category": "Deluxe" } },
              { "@type": "ListItem", "position": 3, "item": { "@type": "Product", "name": "Superior Room", "category": "Superior" } },
              { "@type": "ListItem", "position": 4, "item": { "@type": "Product", "name": "Premium Room", "category": "Premium" } },
              { "@type": "ListItem", "position": 5, "item": { "@type": "Product", "name": "Suite Room", "category": "Suite" } }
            ]
          })
        }}
      />

      <CinematicHero 
        label="Deluxe Room in Purnea - AC Rooms & Family Rooms Near Bus Stand"
        title="Best Rooms in Purnea - Deluxe AC Rooms, Family Rooms & Luxury Stays"
        tagline="Looking for deluxe rooms in Purnea? Hotel Surya Bella Casa offers AC rooms, family rooms, luxury rooms near Bus Stand with free WiFi, parking & room service. Best hotel rooms in Purnea - book now."
        image='https://bookonelocal.in/cdn/IMG_7420.mp4'
      />
      <RoomsGrid />
      <LuxuryAmenities />
    </main>
  )
}
