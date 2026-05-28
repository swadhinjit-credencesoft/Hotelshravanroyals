import { notFound } from 'next/navigation'
import RoomDetailClient from './RoomDetailClient'
import { fetchAvailability } from '@/lib/hotelmate'
import { mapHotelMateRooms, Room } from '@/lib/rooms'

import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
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
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const rooms = await getRooms()
  const room = rooms.find(r => r.slug === params.slug)
  if (!room) return {}

  const title = `${room.name} | Luxury Cottages | Hotel Bella Casa`
  const description = `${room.tagline}. Available for up to ${room.guests} guests. Book your luxury stay in Purnia today.`
  
  return {
    title,
    description,
    alternates: {
      canonical: `https://hotelsuryabellacasa.com/rooms/${room.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: room.image, alt: room.imageAlt }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [room.image],
    }
  }
}

export async function generateStaticParams() {
  const rooms = await getRooms()
  return rooms.map((room) => ({
    slug: room.slug,
  }))
}

export default async function RoomDetailPage({ params }: Props) {
  const rooms = await getRooms()
  const room = rooms.find(r => r.slug === params.slug)
  
  if (!room) notFound()

  const otherRooms = rooms.filter(r => r.slug !== params.slug)

  return <RoomDetailClient room={room} otherRooms={otherRooms} />
}
