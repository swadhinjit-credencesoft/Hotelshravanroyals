import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ReservationsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <div className="pt-32 pb-32 px-6 md:px-10 max-w-[1600px] mx-auto text-center">
        <SectionLabel className="justify-center mb-4">Availability</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-8">Secure Your Stay</h1>
        <p className="font-serif text-xl text-taupe max-w-xl mx-auto leading-relaxed mb-12">
          Select your preferred dates and sanctuary. Our concierge will reach out within the hour to finalize your bespoke itinerary.
        </p>
        
        <div className="bg-cream-dark p-12 max-w-4xl mx-auto border border-gold/20">
          <p className="font-sans text-[11px] uppercase tracking-widest text-gold mb-4">Reservation Inquiry</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] uppercase tracking-widest text-taupe">Arrival</label>
              <input type="date" className="bg-cream p-4 border border-gold/10 font-sans text-sm focus:outline-none focus:border-gold" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] uppercase tracking-widest text-taupe">Departure</label>
              <input type="date" className="bg-cream p-4 border border-gold/10 font-sans text-sm focus:outline-none focus:border-gold" />
            </div>
          </div>
          <button className="mt-12 w-full bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] py-5 hover:bg-gold-light transition-all">
            Inquire About Availability
          </button>
        </div>
      </div>
      <Footer />
    </main>
  )
}
