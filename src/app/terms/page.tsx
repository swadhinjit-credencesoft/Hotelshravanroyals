import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export default function TermsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <div className="pt-32 pb-32 px-6 md:px-10 max-w-4xl mx-auto">
        <SectionLabel className="mb-6">Legal</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-12">Terms &amp; Conditions</h1>
        
        <div className="prose prose-forest font-sans text-taupe leading-loose space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Reservation Policy</h2>
            <p>
              All reservations are subject to availability and the specific terms of the package selected. A valid credit card is required to secure your sanctuary.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Cancellation &amp; No-Show</h2>
            <p>
              To respect the intimacy of the estate, cancellations must be made 14 days prior to arrival for a full refund. Cancellations within the 14-day window will be subject to a 50% sanctuary fee.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Estate Conduct</h2>
            <p>
              Shravan Royal Inn is a sanctuary of comfort and privacy. We ask all guests to respect the tranquility of the grounds and the privacy of other residents.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Liability</h2>
            <p>
              The inn takes every precaution to ensure guest safety; however, we are not liable for the loss of personal property or injuries sustained during self-guided explorations.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
