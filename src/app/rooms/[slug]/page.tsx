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
  'premium-deluxe-mud-cottages': { 
    keyword: 'Premium Deluxe Mud Cottages at The Divine Oasis | Forest Cottage Near Ajodhya Hill', 
    suffix: 'Premium Deluxe Mud Cottages at The Divine Oasis, Purulia. Authentic mud cottage experience with modern amenities for 2-3 guests. Organic farm dining, free Wi-Fi, geyser & room service.' 
  },
  'luxury-suite-cottage': { 
    keyword: 'Luxury Suite Cottage at The Divine Oasis | Premium Suite Near Ajodhya Hill', 
    suffix: 'Luxury Suite Cottage at The Divine Oasis, Ajodhya Hill. Exclusive single-unit suite for 2-5 guests with premium amenities, forest views, organic farm dining & barbeque evenings.' 
  },
  'vista-four-beds': { 
    keyword: 'Vista Four Beds at The Divine Oasis | Family Cottage Near Ajodhya Hill', 
    suffix: 'Vista Four Beds at The Divine Oasis, Purulia. Spacious family cottage for 4-6 guests with forest views. Free Wi-Fi, geyser, room service & organic farm-to-table meals.' 
  },
  'vista-pod-cottage': { 
    keyword: 'Vista Pod Cottage at The Divine Oasis | Cozy Forest Pod Near Ajodhya Hill', 
    suffix: 'Vista Pod Cottage at The Divine Oasis, Ajodhya Hill. Intimate pod cottage for 2-3 guests with hilltop views. Complimentary Wi-Fi, geyser, room service & access to barbeque stand.' 
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const rooms = await getRooms()
  const room = rooms.find(r => r.slug === slug)
  if (!room) return {}

  const seo = roomSeo[slug]
  const title = seo ? seo.keyword : `${room.name} at The Divine Oasis | Ajodhya Hill, Purulia`
  const description = seo ? `${seo.suffix} Book ${room.name} at The Divine Oasis today.` : `${room.tagline}. Available for up to ${room.guests} guests. Book ${room.name} at The Divine Oasis, Ajodhya Hill, Purulia.`

  return {
    title,
    description,
    keywords: [
      `${room.name.toLowerCase()} purulia`,
      'resort cottage purulia near ajodhya hill',
      'mud cottage purulia',
      'book cottage the divine oasis',
      'best resort cottages purulia',
    ],
    alternates: {
      canonical: `https://thedivineoasisresort.com/rooms/${room.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: room.image, alt: `${room.name} - The Divine Oasis Ajodhya Hill` }],
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
      "name": `What is the ${room.name} at The Divine Oasis?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The ${room.name} at The Divine Oasis is a ${room.guests > 2 ? 'spacious family cottage' : 'cozy hilltop cottage'} at Ajodhya Hill, Purulia. It offers free Wi-Fi, geyser, room service and is perfect for ${room.guests > 2 ? 'families and groups' : 'couples and solo travelers'} seeking a forest retreat.`
      }
    },
    {
      "@type": "Question",
      "name": `How much does the ${room.name} cost at The Divine Oasis?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The ${room.name} at The Divine Oasis starts from ₹${room.price} per night. Book direct at thedivineoasisresort.com for the best rates and exclusive offers.`
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
            "brand": { "@type": "Brand", "name": "The Divine Oasis" },
            "offers": {
              "@type": "Offer",
              "price": room.price,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://thedivineoasisresort.com/rooms/${room.slug}`
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thedivineoasisresort.com" },
              { "@type": "ListItem", "position": 2, "name": "Rooms", "item": "https://thedivineoasisresort.com/rooms" },
              { "@type": "ListItem", "position": 3, "name": room.name, "item": `https://thedivineoasisresort.com/rooms/${room.slug}` }
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