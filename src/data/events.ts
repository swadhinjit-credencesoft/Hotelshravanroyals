export interface EstateEvent {
  id: string;
  title: string;
  category: 'Weddings' | 'Corporate' | 'Private';
  description: string;
  capacity: string;
  image?: string;
  video?: string[];
  features: string[];
}

export const estateEvents: EstateEvent[] = [
  {
    id: 'e1',
    title: 'The Royal Gardens',
    category: 'Weddings',
    description:
      'A canopy of living greenery and timeless elegance provides the perfect backdrop for your sacred vows. Open-air luxury at its most enchanting.',
    capacity: 'Up to 120 guests',
    video: [
      'https://bookonelocal.in/cdn/WhatsApp+Video+2026-05-21+at+1.18.07+PM+%281%29.mp4',
    ],
    features: [
      'Private garden trail access',
      'Custom floral installations',
      'Acoustic-optimized open-air clearing',
    ],
  },
  {
    id: 'e2',
    title: 'The Majestic Banquet',
    category: 'Private',
    description:
      'An opulent hall of grandeur that transforms every private celebration into an unforgettable milestone. Regal interiors meet bespoke service.',
    capacity: 'Up to 200 guests',
    video: [
      'https://bookonelocal.in/cdn/WhatsApp+Video+2026-05-21+at+1.18.08+PM+%282%29.mp4',
    ],
    features: [
      'State-of-the-art lighting rigs',
      'Custom stage and floral décor',
      'White-glove butler concierge',
    ],
  },
  {
    id: 'e3',
    title: 'The Executive Boardrooms',
    category: 'Corporate',
    description:
      'Precision-engineered conference suites designed for boardroom breakthroughs, product launches, and intimate leadership retreats.',
    capacity: 'Up to 80 delegates',
    video: [
      'https://bookonelocal.in/cdn/WhatsApp+Video+2026-05-21+at+1.18.07+PM.mp4',
    ],
    features: [
      'Integrated AV and video-conferencing',
      'Dedicated event coordinator',
      'Premium catering packages',
    ],
  },
  {
    id: 'e4',
    title: 'The Courtyard Arena',
    category: 'Private',
    description:
      'An open courtyard framed by heritage stonework, ideal for intimate celebrations, cultural evenings, and bespoke private dining under the stars.',
    capacity: 'Up to 150 guests',
    video: [
      'https://bookonelocal.in/cdn/WhatsApp+Video+2026-05-21+at+1.18.05+PM.mp4',
    ],
    features: [
      'Open-air starlit setting',
      'Heritage stone backdrop',
      'Live music and cultural performances',
    ],
  },
];