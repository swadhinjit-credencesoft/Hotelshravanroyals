export interface Testimonial {
  id: string
  name: string
  country: string
  rating: number
  text: string
  stayType: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ritika Sharma',
    country: 'India',
    rating: 5,
    text: "Our stay at Shravan Royal Inn was absolutely wonderful. The hospitality, cleanliness, and peaceful atmosphere made our family vacation truly memorable. The staff treated us with exceptional warmth and care.",
    stayType: 'Luxury Villa',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80',
  },
  {
    id: 't2',
    name: 'Arjun Mehta',
    country: 'India',
    rating: 5,
    text: 'The Forest Suite experience was beyond expectations. Beautiful interiors, delicious food, and a calm environment made it one of the best resort stays we have ever had.',
    stayType: 'Forest Suite',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
  },
  {
    id: 't3',
    name: 'Sneha Kapoor',
    country: 'India',
    rating: 5,
    text: 'We celebrated our anniversary here and everything was perfectly arranged. The rooms were elegant, the service was prompt, and the overall ambiance felt luxurious yet comfortable.',
    stayType: 'Anniversary Stay',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  },
  {
    id: 't4',
    name: 'Rahul Verma',
    country: 'India',
    rating: 5,
    text: 'Shravan Royal Inn delivered an outstanding experience during our corporate event. Excellent banquet arrangements, courteous staff, and premium hospitality throughout our stay.',
    stayType: 'Corporate Stay',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
]