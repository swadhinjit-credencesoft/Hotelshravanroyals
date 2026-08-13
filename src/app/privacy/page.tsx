import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export default function PrivacyPage() {
  return (
    <main className="bg-cream min-h-screen" id="main-content">
      <Navbar />
      
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://unwindkarjat.com/privacy/#webpage",
            "url": "https://unwindkarjat.com/privacy",
            "name": "Privacy Policy",
            "description": "Read the privacy policy guidelines of Unwind Karjat regarding data collection, storage, and customer reservation security protocols.",
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
        <h1 className="font-display text-5xl md:text-7xl italic text-forest mb-12">Privacy Policy</h1>
        
        <div className="prose prose-forest font-sans text-taupe leading-loose space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Introduction</h2>
            <p>
              At Unwind Karjat, your privacy is as paramount as your comfort. This policy outlines how we protect and manage the personal data you entrust to us during your stay and your interactions with our digital platforms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Data Collection</h2>
            <p>
              We collect only the information necessary to provide our bespoke services, including contact details, preference profiles, and stay history. This information is used exclusively to anticipate your needs and enhance your experience.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Confidentiality</h2>
            <p>
              Unwind Karjat never sells or shares your personal data with third-party marketers. Access to your information is strictly limited to authorized personnel who require it to serve you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-forest mb-4">Your Rights</h2>
            <p>
              You have the right to access, rectify, or request the deletion of your personal data at any time. Our concierge team is available to assist with any privacy-related inquiries.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
