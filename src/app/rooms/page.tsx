import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CinematicHero from '@/components/ui/CinematicHero'
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
            "name": "Rooms & Stays at Unwind Karjat",
            "description": "Lawn & pool facing rooms, farm facing rooms, our Red Brick Suite and a Family Room for up to 8 guests.",
            "url": "https://unwindkarjat.com/rooms",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "HotelRoom",
                  "name": "Lawn & Pool Facing Room",
                  "description": "Bright, comfortable rooms overlooking the pool and lawn. Ideal for couples and small families.",
                  "image": "https://unwindkarjat.com/Lawn-Facing-Room.png",
                  "url": "https://unwindkarjat.com/rooms/lawn-and-pool-facing-room",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "value": 3
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "HotelRoom",
                  "name": "Farm Facing Room",
                  "description": "Quiet rooms looking towards the farm and surrounding greenery. Ideal for guests looking for a more peaceful stay.",
                  "image": "https://unwindkarjat.com/Forest-Facing-Room.png",
                  "url": "https://unwindkarjat.com/rooms/farm-facing-room",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "value": 2
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "HotelRoom",
                  "name": "Red Brick Suite",
                  "description": "Our signature suite, with a little more space and character. Ideal for couples looking for something special.",
                  "image": "https://unwindkarjat.com/images/cottage-exterior.png",
                  "url": "https://unwindkarjat.com/rooms/red-brick-suite",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "value": 2
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "HotelRoom",
                  "name": "Family Room",
                  "description": "A large room designed for families and groups, comfortably accommodating up to 8 guests.",
                  "image": "https://unwindkarjat.com/images/room-interior.jpg",
                  "url": "https://unwindkarjat.com/rooms/family-room",
                  "occupancy": {
                    "@type": "QuantitativeValue",
                    "value": 8
                  }
                }
              }
            ]
          })
        }}
      />

      <CinematicHero 
        label="Our Stay"
        title="Rooms Made for Slowing Down"
        tagline="Comfortable, spacious rooms designed around the way people actually like to spend a getaway."
        image='/roomhero.png'
      />
      <RoomsGrid />

      {/* Good to know */}
      <section className="py-20 bg-forest text-ivory">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl italic mb-6">The Simple Things Matter Here.</h2>
          <p className="font-serif text-ivory/70 leading-relaxed max-w-2xl mx-auto">
            Every room comes with the essentials taken care of — comfortable beds, air conditioning, hot water, parking and room service. All rooms are within the property, close to the pool, the lawns and the restaurant.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
