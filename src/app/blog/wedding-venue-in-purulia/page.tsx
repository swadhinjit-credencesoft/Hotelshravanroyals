import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleLayout from '@/components/layout/BlogArticleLayout'

export const metadata: Metadata = {
  title: 'Wedding Venue in Purulia | Hilltop Celebrations Near Ajodhya',
  description:
    'Plan your dream wedding at the best outdoor venue in Purulia. Hilltop ceremonies, social events, organic catering, and guest cottages at The Divine Oasis near Ajodhya Hills.',
  keywords: [
    'wedding venue in purulia',
    'marriage destination ajodhya',
    'hilltop wedding purulia',
    'resort wedding ajodhya',
    'wedding venue near ajodhya hills',
    'destination wedding purulia',
    'small wedding venue west bengal purulia',
    'divine oasis wedding purulia',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/blog/wedding-venue-in-purulia',
  },
  openGraph: {
    title: 'Wedding Venue in Purulia | The Divine Oasis',
    description: 'An intimate hilltop wedding venue in Purulia. Forest-view ceremonies, social events, organic catering, and cottage blocks at The Divine Oasis, Ajodhya.',
    url: 'https://thedivineoasisresort.com/blog/wedding-venue-in-purulia',
    siteName: 'The Divine Oasis',
    type: 'article',
    publishedTime: '2026-01-10T00:00:00.000Z',
    modifiedTime: '2026-07-23T00:00:00.000Z',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064516081-WhatsApp Image 2026-05-11 at 15.42.14 (1).jpg', width: 1200, height: 630, alt: 'Wedding venue in Purulia - The Divine Oasis Ajodhya' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Venue in Purulia',
    description: 'Hilltop wedding venue in Purulia at The Divine Oasis — outdoor ceremonies, organic catering, and guest cottages near Ajodhya Hills.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064516081-WhatsApp Image 2026-05-11 at 15.42.14 (1).jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function BlogPost() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Wedding Venue in Purulia | Hilltop Celebrations Near Ajodhya',
    description: 'A hilltop wedding venue in Purulia — outdoor ceremonies, social events, organic catering, and guest cottages at The Divine Oasis near Ajodhya Hills.',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064516081-WhatsApp Image 2026-05-11 at 15.42.14 (1).jpg',
    datePublished: '2026-01-10',
    dateModified: '2026-07-23',
    author: { '@type': 'Organization', name: 'The Divine Oasis' },
    publisher: { '@type': 'Organization', name: 'The Divine Oasis' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does The Divine Oasis host weddings in Purulia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, The Divine Oasis hosts intimate hilltop weddings near Ajodhya Hills with outdoor ceremony spaces, social event setups, and cottage blocks for guests.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many guests can a wedding at the resort accommodate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The resort is best suited for intimate and mid-size celebrations of up to 60-80 guests, with on-site cottage accommodation for the wedding party.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is catering vegetarian?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The signature organic veg thali and farm-based spreads are available, and non-vegetarian barbeque options can be arranged for events on request.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can guests stay overnight after the wedding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, guests can book the mud cottages, luxury suite, VISTA four-bed rooms, and pod cottages for a complete stay at the resort.',
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
        category="Events & Weddings"
        date="Jan 10, 2026"
        heroImage="https://bookonelocal.in/cdn/2026-05-13-064516081-WhatsApp Image 2026-05-11 at 15.42.14 (1).jpg"
        heroAlt="Wedding venue in Purulia - outdoor hilltop celebration at The Divine Oasis, Ajodhya"
        relatedArticles={[
          { title: 'Outdoor Wedding Venue in Purulia', link: '/blog/outdoor-wedding-venue-in-purulia' },
          { title: 'Birthday Party Resort in Purulia', link: '/blog/birthday-party-resort-in-purulia' },
          { title: 'Corporate Event Venue in Purulia', link: '/blog/corporate-event-venue-in-purulia' },
          { title: 'Luxury Cottage Resort in Purulia', link: '/blog/luxury-cottage-resort-in-purulia' },
        ]}
        serviceLinks={[
          { label: 'Events', link: '/events' },
          { label: 'Rooms', link: '/rooms' },
          { label: 'Dining', link: '/dining' },
          { label: 'Gallery', link: '/gallery' },
          { label: 'Contact', link: '/contact' },
          { label: 'Book Now', link: 'https://bookone.io/The-Divine-Oasis?bookingEngine=true' },
        ]}
      >
        <p>
          Weddings in Bengal are famous for being grand — but more and more couples are choosing the opposite: a small, beautiful,
          outdoor wedding with their nearest people around them. A hilltop celebration in Purulia gives you exactly that. At
          <strong><Link href="/" className="text-gold hover:underline"> The Divine Oasis</Link></strong>, the ceremony happens under the
          forest canopy of <strong>Ajodhya Hill</strong>, surrounded by sal trees and hills that stretch into the horizon — a wedding venue
          in Purulia that feels more like a place you would go on holiday.
        </p>
        <p>
          Our ground is not a convention-centre marriage hall. It is an open hillside 0.4 km from the <strong>Ajodhya Hills &amp; Forest
          Reserve</strong>, where we set up <strong>social event</strong> spaces, seating for your <strong>family rooms</strong> and guests, and
          curated farm-based catering. That&apos;s what makes weddings here feel personal rather than produced.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">The Outdoor Hilltop Setting</h2>
        <p>
          The wedding package at The Divine Oasis is built around the outdoors. The ceremony space looks out over the mid-morning light of
          the hills or the golden hour before sunset — choose your slot and we arrange the seating direction accordingly. For evening
          ceremonies, the <strong>barbeque stand</strong>, open <strong>seating areas</strong>, and <strong>drinks &amp; hors d&apos;oeuvres</strong>
          turn the reception into a relaxed hill-party.
        </p>
        <p>
          Unlike a city banquet hall, the venue offers built-in accommodation. The wedding party can book the <strong>Premium Deluxe Mud
          Cottages</strong>, the single <strong>Luxury Suite Cottage</strong> for the couple, and <strong>VISTA Four Beds</strong> rooms for
          families — everyone sleeps steps from where the ceremony happened. For more on the feel of the space, see our guide to
          <Link href="/blog/outdoor-wedding-venue-in-purulia" className="text-gold hover:underline"> outdoor wedding venues in Purulia</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Catering: Farm-Fresh Celebration Thali</h2>
        <p>
          Food at a hilltop wedding should be warm and plentiful, and ours comes from the resort&apos;s <strong>organic farm</strong>. The
          signature <strong>veg thali</strong>, local curries, chokha-style sides, and seasonal vegetables form the backbone of the menu.
          Our team can customise the spread with your family&apos;s favourite dishes and plan <strong>barbeque counters</strong> for the
          evening reception.
        </p>
        <p>
          Non-vegetarian preparations can be arranged on request with advance notice, and the kitchen is happy to accommodate dietary
          preferences — read how the farm kitchen works in our
          <Link href="/blog/organic-farm-dining-in-purulia" className="text-gold hover:underline"> organic farm dining guide</Link>.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Guest Accommodation &amp; Logistics</h2>
        <p>
          With 5 mud cottages, 4 VISTA four-bed rooms, 2 pod cottages, and 1 luxury suite, the resort comfortably hosts a small wedding
          party on-site. Additional guests can be accommodated with nearby homestay tie-ups we arrange. Each cottage includes
          <strong>free Wi-Fi, smart TV, geyser/hot water, 24-hour room service</strong>, and <strong>hand sanitizer</strong> —
          everything a guest needs for a comfortable stay.
        </p>
        <p>
          The resort is <strong>42.6 km from Purulia Junction</strong>, and <strong>about 200 km from Kolkata</strong> — reachable by car in a
          single day for most guests. We coordinate pickup and route guidance, so your extended family arrives without stress. Check the
          <Link href="/blog/resorts-near-purulia-railway-station" className="text-gold hover:underline"> travel guide to Purulia Junction</Link>
          for details.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Planning a Wedding at The Divine Oasis</h2>
        <p>
          The best weddings here are booked 3-6 months ahead, especially around the peak season of <strong>November to February</strong>.
          Start by choosing your dates, then discuss guest count, ceremony slot, and catering with our team. We recommend booking the
          <strong>cottage block</strong> in the same reservation so the wedding party stays together.
        </p>
        <p>
          Share your headcount and dates when you
          <Link href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline"> enquire online</Link>,
          or call <a href="tel:+91990398950" className="text-gold hover:underline">+91 99039 89950</a> to walk through the setup with our
          events coordinator.
        </p>

        <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">FAQs</h2>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Does The Divine Oasis host weddings in Purulia?</h3>
        <p>
          Yes, The Divine Oasis hosts <strong>intimate hilltop weddings</strong> near Ajodhya Hills with outdoor ceremony spaces, social
          event setups, and cottage blocks for guests.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">How many guests can a wedding at the resort accommodate?</h3>
        <p>
          The resort suits <strong>intimate and mid-size celebrations of up to 60-80 guests</strong>, with on-site cottage accommodation
          for the wedding party.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Is catering vegetarian?</h3>
        <p>
          The signature <strong>organic veg thali</strong> and farm-based spreads are available, and non-vegetarian barbeque can be arranged
          for events on request.
        </p>

        <h3 className="font-display text-lg text-forest mt-6 mb-2">Can guests stay overnight after the wedding?</h3>
        <p>
          Yes, guests can book the <strong>mud cottages, luxury suite, VISTA four-bed rooms, and pod cottages</strong> for a complete stay.
        </p>

        <p>
          Pair your wedding trip with <Link href="/blog/things-to-do-in-purulia" className="text-gold hover:underline">things to do in Purulia</Link>
          so your guests can turn the celebration into a weekend escape.
        </p>
      </BlogArticleLayout>
    </>
  )
}