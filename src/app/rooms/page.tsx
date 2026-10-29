import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CinematicHero from '@/components/ui/CinematicHero'
import LuxuryAmenities from '@/components/sections/LuxuryAmenities'
import RoomsGrid from '@/components/sections/RoomsGrid'
import JsonLd from '@/components/seo/JsonLd'
import SeoRoute from '@/components/seo/SeoRoute'
import { rooms } from '@/data/rooms'
import { siteUrl } from '@/lib/seo'

export default function RoomsPage() {
  return (
    <>
    <SeoRoute path="/rooms" title="Rooms">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Rooms at Shravan Royal Inn',
        itemListElement: rooms.map((room, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'HotelRoom',
            name: room.name,
            url: new URL(`/rooms/${room.id}`, siteUrl).toString(),
          },
        })),
      }} />
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Our Accommodations"
        title="Sanctuaries of Stillness"
        tagline="Forty-seven bespoke suites, each designed as a private world where the horizon is your only neighbor."
        image="https://bookonelocal.in/cdn/IMG_6381.mp4"
      />
      <RoomsGrid />
      <LuxuryAmenities />
      <Footer />
    </main>
    </SeoRoute>
    </>
  )
}
