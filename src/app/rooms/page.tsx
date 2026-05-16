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
        tagline="From rustic Red Brick Cottages to serene Lawn and Forest facing rooms, discover your perfect nature retreat in Karjat."
        image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2400&q=95"
      />
      <RoomsGrid />
      <LuxuryAmenities />
      <Footer />
    </main>
  )
}
