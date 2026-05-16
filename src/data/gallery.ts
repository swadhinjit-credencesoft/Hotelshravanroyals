export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'rooms' | 'dining' | 'spa' | 'nature' | 'events'
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=90', alt: 'Resort infinity pool at golden hour', category: 'rooms', width: 1200, height: 800 },
  { id: 'g2', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90', alt: 'Terrace dining at sunset', category: 'dining', width: 1200, height: 900 },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=90', alt: 'Spa stone treatment room', category: 'spa', width: 1200, height: 800 },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=90', alt: 'Ancient forest trail', category: 'nature', width: 800, height: 1200 },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=90', alt: 'Luxury suite interior', category: 'rooms', width: 1200, height: 800 },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=90', alt: 'Cocktail lounge interior', category: 'dining', width: 800, height: 1000 },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=90', alt: 'Yoga terrace at sunrise', category: 'spa', width: 1200, height: 800 },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&q=90', alt: 'Coastal horseback ride', category: 'nature', width: 1200, height: 800 },
]
