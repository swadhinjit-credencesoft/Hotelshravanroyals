import { notFound } from 'next/navigation'
import { rooms } from '@/data/rooms'
import RoomDetailClient from './RoomDetailClient'

interface Props {
  params: { slug: string }
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
