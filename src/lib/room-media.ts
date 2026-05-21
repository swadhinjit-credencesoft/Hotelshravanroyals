export type RoomCategory = 'deluxe' | 'suite' | 'villa' | 'standard'
export type RoomMediaType = 'image' | 'video'

const FALLBACK_ROOM_IMAGE =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=95'

const ROOM_VIDEO_BY_CATEGORY: Partial<Record<RoomCategory, string>> = {
  deluxe: 'https://bookonelocal.in/cdn/IMG_6369.mp4',
  suite: 'https://bookonelocal.in/cdn/IMG_6309.mp4',
}

export function getRoomCategory(roomName: string): RoomCategory {
  const nameLower = roomName.toLowerCase()

  if (nameLower.includes('suite')) return 'suite'
  if (nameLower.includes('villa')) return 'villa'
  if (nameLower.includes('standard') || nameLower.includes('classic')) return 'standard'

  return 'deluxe'
}

export function getRoomMedia(category: RoomCategory, apiImage?: string): { src: string; type: RoomMediaType } {
  const videoSrc = ROOM_VIDEO_BY_CATEGORY[category]

  if (videoSrc) {
    return { src: videoSrc, type: 'video' }
  }

  return { src: apiImage || FALLBACK_ROOM_IMAGE, type: 'image' }
}
