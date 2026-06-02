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
        title="Rooms & Stays"
        tagline="Discover clean, comfortable, and well-maintained rooms featuring air conditioning, free Wi-Fi, and premium service in Purnia."
        image='https://bookonelocal.in/cdn/IMG_7420.mp4'
      />
      <RoomsGrid />
      <LuxuryAmenities />
      <Footer />
    </main>
  )
}
