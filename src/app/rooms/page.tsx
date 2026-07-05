import CinematicHero from '@/components/ui/CinematicHero'
import LuxuryAmenities from '@/components/sections/LuxuryAmenities'
import RoomsGrid from '@/components/sections/RoomsGrid'

export default function RoomsPage() {
  return (
    <main className="bg-cream min-h-screen">
      
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
