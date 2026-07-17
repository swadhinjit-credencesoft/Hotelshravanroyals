import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions of Hotel Surya Bella Casa, Purnea. Booking terms, house rules, liability, and guest policy for all reservations.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://hotelsuryabellacasa.com/terms/#webpage",
            "url": "https://hotelsuryabellacasa.com/terms",
            "name": "Terms of Service & Booking Conditions | Hotel Surya Bella Casa",
            "description": "Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Hotel Surya Bella Casa.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://hotelsuryabellacasa.com/#website",
              "name": "Hotel Surya Bella Casa",
              "url": "https://hotelsuryabellacasa.com"
            }
          })
        }}
      />

      <div className="pt-32 pb-32 px-6 md:px-10 max-w-4xl mx-auto">
        <SectionLabel className="mb-6">Legal</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-12">Terms &amp; Conditions</h1>
        
        <div className="prose prose-forest font-sans text-taupe leading-loose space-y-8">
         <section className="space-y-6">
  <h2 className="font-serif text-2xl text-forest mb-4">
   Tariff
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
       Guests are requested to refer to the Hotel Tariff Card available with the reception. The tariff is for room charges only. Food and beverages are available in the Restaurant and Room Service.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
      Extra person in a room will be charged as per tariff card.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
      Children above 8 years of age are chargeable.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
       The management reserves the right to alter the room tariff without any prior notice. Current Tariff will be applicable during billing at the hotel.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Location wise Complimentary/Chargeable WIFI internet facility is available in the hotel. Guests/Boarders are requested not to misuse /violate any law in respect to the use of internet facility. Guests will be responsible /liable for any unlawful act & violation of rules in this regard.
      </p>
    </div>

  </div>
</section>

         <section className="space-y-6">
  <h2 className="font-serif text-2xl text-forest mb-4">
    Cancellation & Amendment
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        In case of any cancellation or modification of reservation, guests are requested to refer to the hotel’s Cancellation & Amendment Policy applicable at the time of booking.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Hotel Surya Bella Casa reserves the right to cancel any confirmed booking or reservation in situations involving emergencies, operational issues, or legal violations.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        For any queries related to bookings, cancellations, or amendments, guests may contact the hotel directly through the official communication channels provided on the website.
      </p>
    </div>

  </div>
</section>
<section className="space-y-6">
  <h2 className="font-serif text-2xl text-forest mb-4">
    Reservation & Check-In Policy
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        All bookings and reservations at Hotel Surya Bella Casa are confirmed from 12:00 Noon or from the official check-in time on the reservation date.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Standard Check-In Time: 1:00 PM
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Standard Check-Out Time: 12:00 Noon
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Early check-in is subject to room availability and may be chargeable as per hotel policy.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Late check-out after 12:00 Noon is subject to availability and additional charges may apply.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Approval for early check-in or late check-out is solely at the discretion of Hotel Surya Bella Casa management.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Any request for extension of stay beyond the originally booked check-out date is subject to room availability and management approval.
      </p>
    </div>

  </div>
</section>

<section className="space-y-6">
  <h2 className="font-serif text-2xl text-forest mb-4">
    Liability
  </h2>

  <div className="space-y-5 text-gray-700 leading-8">

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Guests are personally responsible and liable for all charges incurred during their stay at Hotel Surya Bella Casa.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        Liability for payment shall not be waived under any circumstances, including bookings made on behalf of any individual, group, company, organization, or association.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <span className="mt-2 text-forest">•</span>
      <p>
        In the event that any third party fails to settle full or partial charges related to the booking or stay, the guest shall remain personally liable for the outstanding amount.
      </p>
    </div>

  </div>
</section>
        </div>
      </div>
    </main>
  )
}
