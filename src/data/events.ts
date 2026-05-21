export interface EstateEvent {
  id: string;
  title: string;
  category: 'Weddings' | 'Corporate' | 'Private';
  description: string;
  capacity: string;
  image: string | string[];
  features: string[];
}

export const estateEvents: EstateEvent[] = [
  {
  id: 'e1',
  title: 'Hotel Shravan Royal Inn',
  category: 'Weddings',
  description: 'An elegant wedding and event destination in Jaipur offering modern luxury, stylish interiors, rooftop dining, and beautifully designed banquet spaces for unforgettable celebrations.',
  capacity: 'Up to 150 guests',
  image: [
    'https://bookonelocal.in/cdn/WhatsApp+Video+2026-05-21+at+1.18.07+PM+%281%29.mp4',
    'https://bookonelocal.in/cdn/WhatsApp+Video+2026-05-21+at+1.18.08+PM+%282%29.mp4',
    'https://bookonelocal.in/cdn/WhatsApp+Video+2026-05-21+at+1.18.07+PM.mp4',
    'https://bookonelocal.in/cdn/WhatsApp+Video+2026-05-21+at+1.18.05+PM.mp4',
  ],
  features: [
    'Premium banquet & event spaces',
    'Rooftop dining experience',
    'Luxury rooms & royal interiors',
    'Custom wedding & celebration arrangements',
    'Convenient location near ISKCON Jaipur'
  ],
}
];
