import { HotelRoom } from '@/lib/hotelmate'

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
    tagline: description || `${name} at Hotel Bella Casa`,
    description,
    size: 0,
    guests: room.maximumOccupancy || room.minimumOccupancy || 1,
    price: getRoomPrice(room),
    category,
    view: 'Hotel View',
    image: firstImage,
    images,
    imageAlt: `${name} at Hotel Bella Casa`,
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
