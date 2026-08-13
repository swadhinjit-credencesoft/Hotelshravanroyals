import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CinematicHero from '@/components/ui/CinematicHero'
import LuxuryAmenities from '@/components/sections/LuxuryAmenities'
import RoomsGrid from '@/components/sections/RoomsGrid'

export default function RoomsPage() {
  return (
    <main className="bg-cream min-h-screen" id="main-content">
      <Navbar />
      
      {/* Rooms List Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Luxury Accommodations at Unwind Karjat",
            "description": "Explore our rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Karjat.",
            "url": "https://unwindkarjat.com/rooms",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "HotelRoom",
                  "name": "Red Brick Cottage",
                  "description": "Experience the soul of Karjat in our signature Red Brick Cottages, featuring rustic red bricks, high ceilings, and a private sit-out.",
                  "image": "https://unwindkarjat.com/images/exterior3.jpeg",
                  "url": "https://unwindkarjat.com/rooms/red-brick-cottage",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "value": 2
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "HotelRoom",
                  "name": "Lawn Facing Room",
                  "description": "Step directly from your room onto our manicured emerald lawns. Wake up to lush green vistas and enjoy morning tea on the lawn.",
                  "image": "https://unwindkarjat.com/Lawn-Facing-Room.png",
                  "url": "https://unwindkarjat.com/rooms/lawn-facing-room",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "value": 3
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "HotelRoom",
                  "name": "Forest Facing Room",
                  "description": "An intimate connection with the Karjat forest. Listen to the symphony of birds and rustle of leaves from your private balcony.",
                  "image": "https://unwindkarjat.com/Forest-Facing-Room.png",
                  "url": "https://unwindkarjat.com/rooms/forest-facing-room",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "value": 2
                  }
                }
              }
            ]
          })
        }}
      />

      <CinematicHero 
        label="Our Accommodations"
        title="Sanctuaries of Stillness"
        tagline="From rustic Red Brick Cottages to serene Lawn and Forest facing rooms, discover your perfect nature retreat in Karjat."
        image='/images/exterior2.jpeg'
      />
      <RoomsGrid />
      <LuxuryAmenities />
      <Footer />
    </main>
  )
}
