/**
 * Centralized GA4 analytics helpers for Hotel Surya Bella Casa
 * Implements the full e-commerce funnel:
 *   view_search_results → view_item_list → select_item → view_item → begin_checkout → purchase
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function push(event: string, params: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params)
  }
}

// ─── Booking Search ────────────────────────────────────────────────────────────

export interface SearchParams {
  checkIn: string
  checkOut: string
  guests: string | number
  rooms: string | number
  source?: string
}

/**
 * Fire when user submits the booking search form (hero bar or reservations page).
 * Maps to GA4 standard: view_search_results
 */
export function trackSearch(params: SearchParams) {
  push('view_search_results', {
    search_term: `${params.checkIn} to ${params.checkOut}`,
    check_in_date: params.checkIn,
    check_out_date: params.checkOut,
    number_of_guests: Number(params.guests),
    number_of_rooms: Number(params.rooms),
    source: params.source ?? 'hero_booking_bar',
    currency: 'INR',
  })
}

// ─── Room List ─────────────────────────────────────────────────────────────────

export interface RoomListItem {
  roomId: string
  name: string
  price: number
  category: string
}

/**
 * Fire when the rooms list/carousel becomes visible.
 * Maps to GA4 standard: view_item_list
 */
export function trackViewItemList(rooms: RoomListItem[], listName = 'Rooms Carousel') {
  push('view_item_list', {
    item_list_id: 'rooms',
    item_list_name: listName,
    currency: 'INR',
    items: rooms.map((room, index) => ({
      item_id: room.roomId,
      item_name: room.name,
      item_category: room.category,
      price: room.price,
      currency: 'INR',
      index,
    })),
  })
}

// ─── Room Selection ────────────────────────────────────────────────────────────

export interface RoomItem {
  roomId: string
  name: string
  price: number
  category: string
  source?: string
}

/**
 * Fire when user clicks "Book Now" on a room card.
 * Maps to GA4 standard: select_item
 */
export function trackSelectItem(room: RoomItem) {
  push('select_item', {
    item_list_id: 'rooms',
    item_list_name: room.source ?? 'Rooms',
    currency: 'INR',
    items: [
      {
        item_id: room.roomId,
        item_name: room.name,
        item_category: room.category,
        price: room.price,
        currency: 'INR',
        quantity: 1,
      },
    ],
  })
}

/**
 * Fire when user views a room detail page.
 * Maps to GA4 standard: view_item
 */
export function trackViewItem(room: RoomItem) {
  push('view_item', {
    currency: 'INR',
    value: room.price,
    items: [
      {
        item_id: room.roomId,
        item_name: room.name,
        item_category: room.category,
        price: room.price,
        currency: 'INR',
        quantity: 1,
      },
    ],
  })
}

// ─── Checkout ──────────────────────────────────────────────────────────────────

export interface CheckoutParams {
  roomId: string
  roomName: string
  price: number
  category: string
  checkIn?: string
  checkOut?: string
  guests?: number
  rooms?: number
  source?: string
}

/**
 * Fire when user clicks "Book Now" / "Check Availability" and is redirected to BookOne.
 * Maps to GA4 standard: begin_checkout
 */
export function trackBeginCheckout(params: CheckoutParams) {
  push('begin_checkout', {
    currency: 'INR',
    value: params.price,
    check_in_date: params.checkIn,
    check_out_date: params.checkOut,
    number_of_guests: params.guests ?? 2,
    number_of_rooms: params.rooms ?? 1,
    source: params.source ?? 'rooms_page',
    items: [
      {
        item_id: params.roomId,
        item_name: params.roomName,
        item_category: params.category,
        price: params.price,
        currency: 'INR',
        quantity: params.rooms ?? 1,
      },
    ],
  })
}

// ─── Engagement Events ─────────────────────────────────────────────────────────

/**
 * Fire when user clicks a phone/call link.
 */
export function trackPhoneClick(source: string) {
  push('phone_click', {
    source,
    event_category: 'engagement',
    phone_number: '+919835923601',
  })
}

/**
 * Fire when user clicks a WhatsApp link.
 */
export function trackWhatsAppClick(source: string) {
  push('whatsapp_click', {
    source,
    event_category: 'engagement',
    phone_number: '+919835923601',
  })
}

/**
 * Fire when user submits a contact form.
 */
export function trackContactFormSubmit(source: string) {
  push('contact_form_submit', {
    source,
    event_category: 'lead',
  })
}
