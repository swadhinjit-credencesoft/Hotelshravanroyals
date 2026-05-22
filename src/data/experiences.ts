export interface Experience {
  id: string
  title: string
  category: string
  description: string
  duration: string
  image: string
  imageAlt: string
  season: 'Monsoon' | 'Winter' | 'Year-round'
  priceInfo?: string
}

export const experiences: Experience[] = [
  {
    id: 'e1',
    title: 'Purnea College of Engineering',
    category: 'Education / Landmark',
    description: 'Located just 0.98 Km from the hotel, this premier educational institution is a key landmark in the region.',
    duration: '5 mins drive',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070007338-1000080265.jpg',
    imageAlt: 'Purnea College of Engineering Landmark',
    season: 'Year-round',
  },
  {
    id: 'e2',
    title: 'Vikass Market & Shopping',
    category: 'Shopping',
    description: 'Explore the bustling Vikass Market situated directly opposite our hotel for clothing, local products, and daily essentials.',
    duration: 'Flexible',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070012393-1000080263.jpg',
    imageAlt: 'Shopping at Vikass Market',
    season: 'Year-round',
  },
  {
    id: 'e3',
    title: 'Kali Mandir Temple Visit',
    category: 'Spiritual',
    description: 'Visit the historic and highly revered Kali Mandir temple in Purnia city to experience local heritage and spiritual calm.',
    duration: '2 hours',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070017792-1000080277.jpg',
    imageAlt: 'Kali Mandir Temple in Purnia',
    season: 'Year-round',
  },
  {
    id: 'e4',
    title: 'Purnea Junction Connectivity',
    category: 'Transit',
    description: 'Enjoy convenient access to Purnea Junction Railway Station located just 7.5 Km away, ensuring seamless connectivity to broad gauge rail networks.',
    duration: '15 mins drive',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070002480-1000080267.jpg',
    imageAlt: 'Purnea Junction Railway Station',
    season: 'Year-round',
  }
]
