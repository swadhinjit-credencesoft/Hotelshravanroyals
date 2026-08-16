import { notFound } from 'next/navigation'
import { rooms } from '@/data/rooms'
import RoomDetailClient from './RoomDetailClient'

import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const room = rooms.find(r => r.slug === params.slug)
  if (!room) return {}

  const title = `${room.name} | Unwind Karjat`
  const description = `${room.tagline}. Up to ${room.guests} guests with a ${room.view}. Book your stay near Mumbai and Pune today.`
  
  return {
    title,
    description,
    alternates: {
      canonical: `https://unwindkarjat.com/rooms/${room.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://unwindkarjat.com${room.image}`, alt: room.imageAlt }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://unwindkarjat.com${room.image}`],
    }
  }
}

export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }))
}

export default function RoomDetailPage({ params }: Props) {
  const room = rooms.find(r => r.slug === params.slug)
  
  if (!room) notFound()

  const otherRooms = rooms.filter(r => r.slug !== params.slug)

  return <RoomDetailClient room={room} otherRooms={otherRooms} />
}
