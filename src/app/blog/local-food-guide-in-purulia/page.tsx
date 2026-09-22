import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Local Food Guide in Purulia | Bengali Bhoj, Organic Thali & More',
  description:
    'Explore the Purulia food scene. Local Bengali dishes, the organic farm thali at The Divine Oasis, chokha-style sides, and hilltop dining near Ajodhya.',
  keywords: [
    'local food purulia',
    'purulia food guide',
    'bengali food ajodhya',
    'veg thali purulia',
    'organic food ajodhya hills',
    'purulia cuisine west bengal',
    'food near ajodhya hill',
    'regional dishes purulia',
  ],
  alternates: { canonical: 'https://thedivineoasisresort.com/blog/local-food-guide-in-purulia' },
  openGraph: {
    title: 'Local Food Guide in Purulia | The Divine Oasis',
    description: 'A local food guide to Purulia — Bengali home-style cooking, the organic farm thali at The Divine Oasis, chokha-style sides, and hilltop dining near Ajodhya.',
    url: 'https://thedivineoasisresort.com/blog/local-food-guide-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2026-06-22T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064507861-WhatsApp Image 2026-05-11 at 15.42.13 (1).jpg', width: 1200, height: 630, alt: 'Local food guide in Purulia - The Divine Oasis Ajodhya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Food Guide in Purulia',
    description: 'Purulia food guide — Bengali home-style dishes, the organic farm thali, and hilltop dining at The Divine Oasis near Ajodhya.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064507861-WhatsApp Image 2026-05-11 at 15.42.13 (1).jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Local Food Guide in Purulia | Bengali Bhoj, Organic Thali & More",
    "description": "A local food guide to Purulia — Bengali home-style cooking, the organic farm thali, chokha-style sides, and hilltop dining near Ajodhya.",
    "image": "https://bookonelocal.in/cdn/2026-05-13-064507861-WhatsApp Image 2026-05-11 at 15.42.13 (1).jpg",
    "datePublished": "2026-06-22",
    "dateModified": "2026-07-23",
    "author": { "@type": "Organization", "name": "The Divine Oasis" },
    "publisher": { "@type": "Organization", "name": "The Divine Oasis" },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What food is Purulia famous for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Purulia shares Bengali and Jharkhand-border flavours — vegetable chokha-style sides, dal, seasonal greens, and honest home-style thalis built on local produce.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I try authentic local food in Purulia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Divine Oasis serves authentic farm-to-table local thali at Ajodhya Hill, using vegetables from its own organic farm.",
        },
      },
      {
        "@type": "Question",
        name: "Is the food at the resort vegetarian?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The signature dining experience is a vegetarian farm thali; non-vegetarian and barbeque options can be arranged for groups on request.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy local snacks and produce in Purulia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, local markets around Purulia town offer seasonal produce, handloom, and snacks — see our shopping guide for the best stops.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogArticleLayout
        metadata={metadata}
        schema={schema}
        category="Food & Culture"
        date="Jun 22, 2026"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064507861-WhatsApp Image 2026-05-11 at 15.42.13 (1).jpg"
        heroAlt="Local food guide in Purulia - farm-to-table thali at The Divine Oasis"
        relatedArticles={[
          { title: 'Organic Farm Dining in Purulia', link: '/blog/organic-farm-dining-in-purulia' },
          { title: 'Best Dining Near Ajodhya Hill', link: '/blog/best-dining-near-ajodhya-hill' },
          { title: 'Best Dinner Place in Purulia', link: '/blog/best-dinner-place-in-purulia' },
          { title: 'Shopping in Purulia', link: '/blog/shopping-in-purulia' },
        ]}
        serviceLinks={[
          { label: 'Dining', link: '/dining' },
          { label: 'Rooms', link: '/rooms' },
          { label: 'Gallery', link: '/gallery' },
          { label: 'Contact', link: '/contact' },
          { label: 'Book Now', link: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true' },
        ]}
      >
        <p>
          Food is the fastest way to understand a district. Purulia sits at the meeting point of Bengal and the Jharkhand borderlands, and its
          kitchens echo both — honest vegetables, slow dal, and heat that respects the person eating it. This <strong>local food guide to
          Purulia</strong> is written from <strong><Link href="/" className="text-gold hover:underline">The Divine Oasis</Link></strong>, where the
          farm-to-table <strong>veg thali</strong> turns regional cooking into the centrepiece of a stay on <strong>Ajodhya Hill</strong>.
        </p>
        <p>
          The tasting starts before you sit down: the <strong>organic farm</strong> that supplies the kitchen walks right up to the dining area,
          so you can see — and pick — what is on the plate. It is regional food at its most direct.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">The Farm Thali: A Purulia Signature</h2>
        <p>
          The resort&apos;s signature plate is the <strong>veg thali</strong>: rice, slow-cooked dal, two seasonal vegetables, a leafy green
          preparation, chokha or bharta, papad, salad, and a local sweet. Every element comes from the day&apos;s garden yield — the menu itself
          changes with the season. This is where our
          <Link href="/blog/organic-farm-dining-in-purulia" className="text-gold hover:underline"> farm dining</Link> story starts, and it is
          the meal most guests remember longest.
        </p>
        <p>
          Around the thali, the kitchen plates <strong>Bengali home-style curries</strong>, simple North Indian dishes, and regional specialities —
          with non-vegetarian and barbeque spreads arranged for groups on request.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">What to Look For on a Purulia Menu</h2>
        <p>
          Beyond the thali, watch for the <strong>chokha/bharta family</strong> — roasted vegetable preparations mashed with mustard oil and
          spices — that mark the Jharkhand-side influence. <strong>Seasonal greens</strong> feature heavily, as do local paddy and millet dishes.
          Tea culture runs deep: expect strong, sweet cups at every highway stop between the resort and
          <strong>Thurga Dam (13.8 km)</strong>.
        </p>
        <p>
          In town, the <strong>local markets</strong> reveal the pantry of the district — vegetables, spices, and dried fish that travel well.
          Our <Link href="/blog/shopping-in-purulia" className="text-gold hover:underline">shopping guide</Link> lists the best market stops for
          foodies.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Eat Like a Local: A Day&apos;s Rhythm</h2>
        <p>
          Eat early on a trip to Purulia. Breakfast at the resort before the sunrise <strong>Matha Buru</strong> trek; a filling thali lunch
          either at the resort or packed for a <strong>Thurga Dam</strong> picnic; and a long dinner back on the hill with the
          <strong>barbeque stand</strong> and <strong>drinks &amp; hors d&apos;oeuvres</strong>. This rhythm keeps you fresh for the treks and gives
          the cooking time to be unhurried — a meal sequence we detail in the
          <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline"> activities guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Dietary Flexibility &amp; Booking</h2>
        <p>
          Pure-veg, jain, low-oil, and kid-friendly versions are routine here — tell us your preferences when booking meals. Groups wanting a
          tasting menu or barbeque night should confirm at least a day ahead so the kitchen can plan fresh. Call
          <a href="tel:+91990398950" className="text-gold hover:underline"> +91 99039 89950</a> or email
          <a href="mailto:thedivineoasisresort@gmail.com" className="text-gold hover:underline"> thedivineoasisresort@gmail.com</a>. Staying over?
          <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> Book a cottage</Link>
          and the meals follow.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">What food is Purulia famous for?</h3>
        <p>
          Purulia shares <strong>Bengali and Jharkhand-border flavours</strong> — vegetable chokha-style sides, dal, seasonal greens, and honest
          home-style thalis built on local produce.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Where can I try authentic local food in Purulia?</h3>
        <p>
          <strong>The Divine Oasis</strong> serves authentic farm-to-table local thali at Ajodhya Hill, using vegetables from its own organic
          farm.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is the food at the resort vegetarian?</h3>
        <p>
          The signature dining experience is a <strong>vegetarian farm thali</strong>; non-vegetarian and barbeque options can be arranged for
          groups on request.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Can I buy local snacks and produce in Purulia?</h3>
        <p>
          Yes, local markets around Purulia town offer <strong>seasonal produce, handloom, and snacks</strong> — see our shopping guide for the
          best stops.
        </p>

        <p>
          Sweeten the planning with <Link href="/blog/best-dinner-place-in-purulia" className="text-gold hover:underline">dinner ideas</Link> and
          <Link href="/blog/purulia-travel-guide" className="text-gold hover:underline">the full travel guide</Link>.
        </p>
      </BlogArticleLayout>
    </>
  )
}