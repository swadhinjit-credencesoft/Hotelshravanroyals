import { rooms } from '@/data/rooms';
import RoomDetailContent from '@/components/sections/RoomDetailContent';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema, pageMetadata, siteUrl } from '@/lib/seo';

type RoomParams = { params: { id: string } };

export function generateMetadata({ params }: RoomParams): Metadata {
  const room = rooms.find((item) => item.id === params.id);
  if (!room) return pageMetadata('Room Not Found | Shravan Royal Inn', 'This room page could not be found.', `/rooms/${params.id}`);

  return pageMetadata(
    `${room.name} | Hotel Shravan Royal Inn Jaipur`,
    `${room.tagline}. View room size, occupancy, amenities and nightly rate at Shravan Royal Inn in Jaipur.`,
    `/rooms/${room.id}`,
  );
}

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

  const url = new URL(`/rooms/${room.id}`, siteUrl).toString();
  const roomSchema = {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    '@id': `${url}#room`,
    name: room.name,
    description: room.tagline,
    url,
    occupancy: { '@type': 'QuantitativeValue', value: room.guests },
    floorSize: { '@type': 'QuantitativeValue', value: room.size, unitCode: 'MTK' },
    amenityFeature: room.amenities.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    containedInPlace: { '@id': new URL('/#hotel', siteUrl).toString() },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema(`/rooms/${room.id}`, room.name)} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `${room.name} | Hotel Shravan Royal Inn Jaipur`,
        isPartOf: { '@id': new URL('/#website', siteUrl).toString() },
        about: { '@id': new URL('/#hotel', siteUrl).toString() },
      }} />
      <JsonLd data={roomSchema} />
      <RoomDetailContent room={room} />
    </>
  );
}
