export interface Experience {
  id: string
  title: string
  category: string
  description: string
  duration: string
  image: string
  video?: string
  imageAlt: string
  season: string
  priceInfo?: string
}

export const experiences: Experience[] = [
  {
    id: 'e1',
    title: 'Ajodhya Hills & Forest Reserve',
    category: 'Nature & Trekking',
    description:
      'Step out of The Divine Oasis and into the Ajodhya Hills & Forest Reserve, just 0.4 km away. Wander wooded trails, spot forest wildlife, and watch the sun set over the Purulia landscape.',
    duration: '0.4 km away',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064442350-WhatsApp Image 2026-05-11 at 15.42.12 (1).jpg',
    imageAlt: 'Ajodhya Hills and Forest Reserve Purulia',
    season: 'Year-round, best October–March',
  },

  {
    id: 'e2',
    title: 'Thurga Dam Picnic',
    category: 'Water & Leisure',
    description:
      'Pack a picnic and head to Thurga Dam, 13.8 km from the resort. Calm waters, surrounding hills, and quiet banks make it a favourite daytime escape for families and couples.',
    duration: '13.8 km, ~25 mins drive',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064455582-WhatsApp Image 2026-05-11 at 15.42.15 (1).jpg',
    imageAlt: 'Thurga Dam near Ajodhya Hill Purulia',
    season: 'Year-round, best after monsoon',
  },

  {
    id: 'e3',
    title: 'Deulghata Heritage Temples',
    category: 'Culture & Heritage',
    description:
      'Journey to Deulghata, 33.7 km away, to see the terracotta deul-style temple ruins of eastern India. A rewarding half-day trip for history lovers exploring Purulia\'s rich architectural past.',
    duration: '33.7 km',
    image: 'https://images.unsplash.com/photo-1578148771262-2969a5614d6b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Ancient brick deul-style temple ruins at Deulghata, Purulia',
    season: 'October – March',
  },

  {
    id: 'e4',
    title: 'Organic Farm Walk',
    category: 'On-Property',
    description:
      'Take a walk through The Divine Oasis\'s own organic farm. See fresh seasonal vegetables growing, watch the kitchen at work, and learn how your farm-to-table meals make it to the plate.',
    duration: 'Inside the resort',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064504242-WhatsApp Image 2026-05-11 at 15.42.12.jpg',
    imageAlt: 'Organic farm at The Divine Oasis Ajodhya Hill',
    season: 'Year-round',
  },

  {
    id: 'e5',
    title: 'Barbeque & Bonfire Evenings',
    category: 'On-Property',
    description:
      'When the hills cool down, our barbeque stand fires up. Gather friends and family around glowing coals for a memorable evening of grilled food, starry skies, and forest air.',
    duration: 'Evenings, on request',
    image: '/bbq.jpg',
    imageAlt: 'Barbeque and bonfire evening at The Divine Oasis',
    season: 'Weather permitting',
  },

  {
    id: 'e6',
    title: 'Purulia Junction Connectivity',
    category: 'Travel Connectivity',
    description:
      'Reach us comfortably from Purulia Junction, 42.6 km away, with taxis readily available. Easy road access via Barabhum (38.5 km) also connects guests coming from Jharkhand side.',
    duration: '42.6 km from Purulia Junction',
    image: '/homehero/PuruliaJunctionConnectivity.jpg',
    imageAlt: 'Road and rail connectivity to The Divine Oasis from Purulia Junction',
    season: 'Year-round',
  },

  {
    id: 'e7',
    title: 'Family & Group Cottage Stays',
    category: 'Family & Leisure',
    description:
      'Curl up in spacious Vista accommodation or gather the whole family in interconnected cottages. Quiet forest mornings, shared meals, and unhurried evenings define the stay.',
    duration: 'Cottage accommodation',
    image: 'https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg',
    imageAlt: 'Family cottage stay at The Divine Oasis Ajodhya Hill',
    season: 'Year-round',
  },
]