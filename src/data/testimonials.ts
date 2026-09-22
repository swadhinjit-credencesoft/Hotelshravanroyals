export interface Testimonial {
  id: string
  name: string
  country: string
  rating: number
  text: string
  stayType: string
  avatar: string
  source: string
  date: string
}

// Placeholder reviews for the rebranded resort. Replace with verified
// Google Business reviews once the new listing collects real feedback.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Guest Review',
    country: 'India',
    rating: 5,
    text: 'A peaceful forest holiday at The Divine Oasis. The mud cottages were clean and comfortable, the organic farm meals were delicious, and the staff made us feel truly at home. Perfect escape near Ajodhya Hills.',
    stayType: 'Family Stay',
    avatar: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
    source: 'Google Reviews',
    date: 'June 2026',
  },
  {
    id: 't2',
    name: 'Guest Review',
    country: 'India',
    rating: 5,
    text: 'Beautiful setting on the hills with fresh air all around. The luxury suite was spacious and well maintained. Barbeque evening under the stars was the highlight of our trip. Great location near Ajodhya Hills.',
    stayType: 'Couple Stay',
    avatar: 'https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg',
    source: 'Google Reviews',
    date: 'May 2026',
  },
  {
    id: 't3',
    name: 'Guest Review',
    country: 'India',
    rating: 5,
    text: 'Took our whole office for a retreat here. Great Wi-Fi, calm environment perfect for planning sessions, and the team was very attentive to everything we needed. Highly recommended for corporate offsites from Purulia.',
    stayType: 'Corporate Retreat',
    avatar: 'https://bookonelocal.in/cdn/2026-05-13-063018320-WhatsApp Image 2026-05-11 at 15.53.21.jpg',
    source: 'Google Reviews',
    date: 'April 2026',
  },
  {
    id: 't4',
    name: 'Guest Review',
    country: 'India',
    rating: 5,
    text: 'The organic farm food was wonderful — fresh vegetables straight from the farm. The vista cottage was cozy and the forest views were stunning at sunrise. A truly refreshing stay at Ajodhya Hill, Purulia.',
    stayType: 'Solo Nature Stay',
    avatar: 'https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg',
    source: 'Google Reviews',
    date: 'March 2026',
  },
];