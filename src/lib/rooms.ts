import { HotelRoom } from '@/lib/hotelmate'

export const FALLBACK_ROOMS: Room[] = [
  {
    id: '1',
    slug: 'premium-deluxe-mud-cottages',
    name: 'Premium Deluxe Mud Cottages',
    tagline: 'Premium comfort with nature-inspired interiors',
    description: 'Traditional mud cottages with premium comfort, peaceful ambiance, modern amenities, and a relaxing nature-inspired stay experience.',
    size: 0,
    guests: 3,
    price: 4255,
    category: 'Premium Deluxe Mud Cottage',
    view: 'Forest View',
    image: 'https://bookonelocal.in/cdn/2026-05-13-063246599-WhatsApp Image 2026-05-11 at 15.52.07 (1).jpg',
    images: ['https://bookonelocal.in/cdn/2026-05-13-063246599-WhatsApp Image 2026-05-11 at 15.52.07 (1).jpg', 'https://bookonelocal.in/cdn/2026-05-13-063254515-WhatsApp Image 2026-05-11 at 15.52.08.jpg'],
    imageAlt: 'Premium Deluxe Mud Cottage at The Divine Oasis',
    amenities: ['Wifi', 'Flat TV', 'Room Service', 'Geyser', '24 Hours Room Service', 'Hand Sanitizer'],
    featured: true,
    roomId: '8675',
    noOfRooms: 5,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 4255,
    isAvailable: true,
  },
  {
    id: '2',
    slug: 'luxury-suite-cottage',
    name: 'Luxury Suite Cottage',
    tagline: 'Spacious cottages for families and couples',
    description: 'Spacious luxury suite cottage featuring elegant interiors, cozy bedding, private seating, and exceptional comfort for families and couples.',
    size: 0,
    guests: 5,
    price: 7225,
    category: 'Luxury Suite Cottage',
    view: 'Forest View',
    image: 'https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg',
    images: ['https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg', 'https://bookonelocal.in/cdn/2026-05-13-063021884-WhatsApp Image 2026-05-11 at 15.53.23 (2).jpg'],
    imageAlt: 'Luxury Suite Cottage at The Divine Oasis',
    amenities: ['Wifi', 'Flat TV', 'Room Service', 'Geyser', '24 Hours Room Service', 'Hand Sanitizer'],
    featured: true,
    roomId: '8676',
    noOfRooms: 1,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 7225,
    isAvailable: true,
  },
  {
    id: '3',
    slug: 'vista-four-beds',
    name: 'Vista Four Beds',
    tagline: 'Ideal for groups with beautiful forest views',
    description: 'Comfortable room with double beds, stylish interiors, modern amenities, and beautiful views for a pleasant relaxing stay.',
    size: 0,
    guests: 6,
    price: 6500,
    category: 'Vista Four Beds',
    view: 'Forest View',
    image: 'https://bookonelocal.in/cdn/2026-05-13-063550245-WhatsApp Image 2026-05-11 at 15.54.31 (1).jpg',
    images: ['https://bookonelocal.in/cdn/2026-05-13-063550245-WhatsApp Image 2026-05-11 at 15.54.31 (1).jpg', 'https://bookonelocal.in/cdn/2026-05-13-063553719-WhatsApp Image 2026-05-11 at 15.54.31.jpg'],
    imageAlt: 'Vista Four Beds room at The Divine Oasis',
    amenities: ['Wifi', 'Flat TV', 'Room Service', 'Geyser', '24 Hours Room Service', 'Hand Sanitizer'],
    featured: false,
    roomId: '8677',
    noOfRooms: 4,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 6500,
    isAvailable: true,
  },
  {
    id: '4',
    slug: 'vista-pod-cottage',
    name: 'Vista Pod Cottage',
    tagline: 'Compact and cozy pod cottage surrounded by nature',
    description: 'Compact and cozy pod cottage offering modern comfort, scenic surroundings, privacy, and a unique peaceful getaway experience.',
    size: 0,
    guests: 3,
    price: 4000,
    category: 'Vista Pod Cottage',
    view: 'Forest View',
    image: 'https://bookonelocal.in/cdn/2026-05-13-063648495-WhatsApp Image 2026-05-11 at 15.52.45 (1).jpg',
    images: ['https://bookonelocal.in/cdn/2026-05-13-063648495-WhatsApp Image 2026-05-11 at 15.52.45 (1).jpg', 'https://bookonelocal.in/cdn/2026-05-13-063652457-WhatsApp Image 2026-05-11 at 15.52.42.jpg'],
    imageAlt: 'Vista Pod Cottage at The Divine Oasis',
    amenities: ['Wifi', 'Flat TV', 'Room Service', 'Geyser', '24 Hours Room Service', 'Hand Sanitizer'],
    featured: false,
    roomId: '8678',
    noOfRooms: 2,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 4000,
    isAvailable: true,
  },
]

export interface Room {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  size: number
  guests: number
  price: number
  category: string
  view: string
  image: string
  images: string[]
  imageAlt: string
  amenities: string[]
  featured: boolean
  roomId: string
  noOfRooms: number
  ratesAndAvailabilityDtos: HotelRoom['ratesAndAvailabilityDtos']
  roomOnlyPrice: number
  isAvailable: boolean
}

export function slugifyRoomName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function stripHtml(value?: string | null): string {
  if (!value) return ''

  return value
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

export function getRoomPrice(room: HotelRoom): number {
  const rate = room.ratesAndAvailabilityDtos?.find((item) => item.price > 0)
  const plan = room.ratesAndAvailabilityDtos
    ?.flatMap((item) => item.roomRatePlans ?? [])
    .find((item) => item.active && item.amount > 0)

  return plan?.amount || rate?.price || room.roomOnlyPrice || 0
}

export function getRoomAvailability(room: HotelRoom): boolean {
  const availability = room.ratesAndAvailabilityDtos?.[0]
  return availability ? availability.noOfAvailable > 0 : room.noOfRooms > 0
}

export function mapHotelMateRoom(room: HotelRoom): Room {
  const name = stripHtml(room.name) || 'Room'
  const description = stripHtml(room.description)
  const amenities = room.roomFacilities?.map((facility) => stripHtml(facility.name)).filter(Boolean) ?? []
  const category = name.replace(/\s*room\s*$/i, '').trim() || name
  const images = Array.from(
    new Set(room.imageList?.map((image) => image.url).filter(Boolean) ?? [])
  )
  const firstImage = images[0] ?? ''

  return {
    id: String(room.id),
    roomId: String(room.id),
    slug: slugifyRoomName(name),
    name,
    tagline: description || `${name} at The Divine Oasis`,
    description,
    size: 0,
    guests: room.maximumOccupancy || room.minimumOccupancy || 1,
    price: getRoomPrice(room),
    category,
    view: 'Forest View',
    image: firstImage,
    images,
    imageAlt: `${name} at The Divine Oasis`,
    amenities,
    featured: true,
    noOfRooms: room.noOfRooms,
    ratesAndAvailabilityDtos: room.ratesAndAvailabilityDtos,
    roomOnlyPrice: room.roomOnlyPrice,
    isAvailable: getRoomAvailability(room),
  }
}

export function mapHotelMateRooms(roomList?: HotelRoom[] | null): Room[] {
  return (roomList ?? []).map(mapHotelMateRoom).filter((room) => room.name && room.image)
}
