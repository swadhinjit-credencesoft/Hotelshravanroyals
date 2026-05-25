import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CinematicHero from '@/components/ui/CinematicHero'
import LuxuryAmenities from '@/components/sections/LuxuryAmenities'
import RoomsGrid from '@/components/sections/RoomsGrid'

export default function RoomsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Our Accommodations"
        title="Sanctuaries of Stillness"
        tagline="From rustic Red Brick Cottages to serene Lawn and Forest facing rooms, discover your perfect nature retreat in Purnia."
        image='https://bookonelocal.in/cdn/IMG_3678.avif'
      />
      <RoomsGrid />
      <LuxuryAmenities />
      <Footer />
    </main>
  )
}
