import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export default function CancellationPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://unwindkarjat.com/cancellation/#webpage",
            "url": "https://unwindkarjat.com/cancellation",
            "name": "Cancellation & Refund Policy | Unwind Karjat",
            "description": "Read the cancellation and refund policy guidelines of Unwind Karjat regarding direct booking reservation amendments, monsoon policies, and refunds.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://unwindkarjat.com/#website",
              "name": "Unwind Karjat",
              "url": "https://unwindkarjat.com"
            }
          })
        }}
      />

      <div className="pt-32 pb-32 px-6 md:px-10 max-w-4xl mx-auto">
        <SectionLabel className="mb-6">Legal</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-12">Cancellation Policy</h1>
        
        <div className="prose prose-forest font-sans text-taupe leading-loose space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Standard Cancellation</h2>
            <p>
              We understand that plans can change. For a full refund, cancellations must be made at least 48 hours prior to your scheduled check-in time (1:00 PM). Cancellations made within 48 hours of check-in will incur a charge equal to 100% of the room reservation fee.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Refund Processing</h2>
            <p>
              Approved refunds are processed back to the original payment method within 7 to 10 business days. Transaction charges or bank fees incurred during payment processing are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Reservation Amendments</h2>
            <p>
              Subject to availability, reservation dates may be modified free of charge up to 7 days before check-in. Amendments made within 7 days may be subject to seasonal tariff differences or modification fees.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">No-Show Policy</h2>
            <p>
              Guests who fail to arrive on their scheduled check-in date without prior notification will be considered a &ldquo;No-Show&rdquo;. In such cases, the entire reservation will be cancelled, and 100% of the booking amount will be forfeited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Monsoon & Force Majeure Policy</h2>
            <p>
              Unwind Karjat is a deep-nature retreat. In rare circumstances of extreme monsoon weather, natural disasters, or government travel advisories that prevent safe travel to Karjat, guests may request a complimentary reschedule voucher valid for up to 6 months.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
