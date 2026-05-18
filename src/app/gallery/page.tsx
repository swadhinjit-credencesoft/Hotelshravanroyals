import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GallerySection from '@/components/sections/GallerySection'
import CinematicHero from '@/components/ui/CinematicHero'

export default function GalleryPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Visual Stories"
        title="The Collection"
        tagline="A curated archive of captured moments, architectural details, and natural beauty surrounding our Jaipur sanctuary."
        image="https://bookonelocal.in/cdn/IMG_6344.mp4"
      />
      <GallerySection />
      <Footer />
    </main>
  )
}
