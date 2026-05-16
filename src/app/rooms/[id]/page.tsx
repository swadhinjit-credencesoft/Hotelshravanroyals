import { rooms } from '@/data/rooms';
import RoomDetailContent from '@/components/sections/RoomDetailContent';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id,
  }));
}

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const room = rooms.find((r) => r.id === params.id);

  if (!room) {
    notFound();
  }

  return <RoomDetailContent room={room} />;
}
