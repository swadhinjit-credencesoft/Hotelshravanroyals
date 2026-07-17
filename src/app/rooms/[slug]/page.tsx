import { notFound } from 'next/navigation'
import RoomDetailClient from './RoomDetailClient'
import { fetchAvailability } from '@/lib/hotelmate'
import { mapHotelMateRooms, FALLBACK_ROOMS, Room } from '@/lib/rooms'

import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

async function getRooms(): Promise<Room[]> {
  try {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    const format = (date: Date) => date.toISOString().slice(0, 10)
    const data = await fetchAvailability({
      fromDate: format(today),
      toDate: format(tomorrow),
      noOfRooms: 1,
      noOfPersons: 2,
    })
    return mapHotelMateRooms(data.roomList)
  } catch {
    return FALLBACK_ROOMS
  }
}

const roomSeo: Record<string, { keyword: string; suffix: string }> = {
  'super-deluxe-room': { keyword: 'Super Deluxe Room in Purnea | Best AC Room Near Bus Stand', suffix: 'Premium super deluxe AC room with elegant interiors near Purnea Bus Stand. Spacious luxury room for up to 3 guests with free WiFi, parking & room service.' },
  'deluxe-ac-room': { keyword: 'Deluxe AC Room in Purnea | Affordable AC Room Near Bus Stand', suffix: 'Affordable deluxe AC room in Purnea near Bus Stand. Cool comfort for up to 3 guests with free WiFi, parking & room service at Hotel Surya Bella Casa.' },
  'deluxe-non-ac-room': { keyword: 'Deluxe Non AC Room in Purnea | Budget Room Near Bus Stand', suffix: 'Budget-friendly deluxe non AC room in Purnea near Bus Stand. Spacious comfort at great value for up to 2 guests with free WiFi & parking.' },
  'standard-non-ac-room': { keyword: 'Standard Non AC Room in Purnea | Cheapest Room Near Bus Stand', suffix: 'Most affordable standard non AC room in Purnea near Bus Stand. Essential comfort for short stays up to 2 guests with free WiFi & parking.' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const rooms = await getRooms()
  const room = rooms.find(r => r.slug === slug)
  if (!room) return {}

  const seo = roomSeo[slug]
  const title = seo ? seo.keyword : `${room.name} in Purnea | AC Room Near Bus Stand`
  const description = seo ? `${seo.suffix} Book ${room.name} in Purnea today.` : `${room.tagline}. Available for up to ${room.guests} guests. Book ${room.name} in Purnea near Bus Stand today.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://hotelsuryabellacasa.com/rooms/${room.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: room.image, alt: `${room.name} - Hotel Surya Bella Casa Purnea` }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [room.image],
    },
  }
}

export async function generateStaticParams() {
  const rooms = await getRooms()
  return rooms.map((room) => ({
    slug: room.slug,
  }))
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params
  const rooms = await getRooms()
  const room = rooms.find(r => r.slug === slug)

  if (!room) notFound()

  const otherRooms = rooms.filter(r => r.slug !== slug)

  const roomFaq = [
    {
      "@type": "Question",
      "name": `What is the ${room.name} at Hotel Surya Bella Casa?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The ${room.name} at Hotel Surya Bella Casa is a comfortable ${room.guests > 2 ? 'spacious room' : 'cozy room'} in Purnea near Bus Stand. It offers free WiFi, parking, room service and is perfect for ${room.guests > 2 ? 'families and groups' : 'couples and solo travelers'}.`
      }
    },
    {
      "@type": "Question",
      "name": `How much does the ${room.name} cost in Purnea?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The ${room.name} at Hotel Surya Bella Casa starts from ₹${room.price} per night. Book direct for the best rates and exclusive offers.`
      }
    },
    {
      "@type": "Question",
      "name": `How many guests can stay in the ${room.name}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The ${room.name} can accommodate up to ${room.guests} guests comfortably.`
      }
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": room.name,
            "description": room.tagline,
            "image": [room.image, ...room.images],
            "brand": { "@type": "Brand", "name": "Hotel Surya Bella Casa" },
            "offers": {
              "@type": "Offer",
              "price": room.price,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://hotelsuryabellacasa.com/rooms/${room.slug}`
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hotelsuryabellacasa.com" },
              { "@type": "ListItem", "position": 2, "name": "Rooms", "item": "https://hotelsuryabellacasa.com/rooms" },
              { "@type": "ListItem", "position": 3, "name": room.name, "item": `https://hotelsuryabellacasa.com/rooms/${room.slug}` }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": roomFaq
          })
        }}
      />
      <RoomDetailClient room={room} otherRooms={otherRooms} />
    </>
  )
}
