export const HOTELMATE_PROPERTY_ID = 3525
export const HOTELMATE_API_BASE = 'https://api.thehotelmate.co/api/thm'
export const BOOKING_ENGINE_URL = 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true'

export interface HotelAddress {
  country: string
  postcode: string
  streetNumber: string
  streetName: string
  suburb: string
  city: string
  state: string
  locality: string
  addressLine1: string | null
  addressLine2: string | null
}

export interface TaxSlab {
  minAmount: number
  maxAmount: number
  percentage: number
}

export interface TaxDetail {
  name: string
  percentage: number
  country: string
  state: string
  taxableAmount: number
  taxAmount: number
  taxSlabsList: TaxSlab[]
}

export interface RoomRatePlan {
  code: string
  name: string
  effectiveDate: string
  expiryDate: string
  description: string | null
  active: boolean
  amount: number
  roomId: number
  deviationFromStandardPlan: number
  minimumLengthOfStay: number
  maximumLengthOfStay: number
  status: string
  restriction: string | null
  currencyCode: string
  minimumOccupancy: number
  maximumOccupancy: number
  extraChargePerPerson: number | null
  extraChargePerChild: number | null
  extraChargePerChild3To5yrs: number
  noOfChildren: number
  dayOfTheWeekList: string[]
}

export interface RateAvailabilityDto {
  id: number
  price: number
  totalNoRooms: number
  noOfBooked: number
  noOfAvailable: number
  noOfOnHold: number
  date: string
  roomName: string
  roomId: number
  status: string
  restriction: string | null
  roomRatePlans: RoomRatePlan[]
}

export interface HotelRoom {
  id: number
  name: string
  description: string
  propertyId: number
  roomOnlyPrice: number
  noOfRooms: number
  minimumOccupancy: number
  maximumOccupancy: number
  extraChargePerPerson: number | null
  roomFacilities: { id: number; name: string }[]
  ratesAndAvailabilityDtos: RateAvailabilityDto[] | null
  noOfChild: number
  imageList: { url: string }[]
}

export interface PropertyService {
  id: number | null
  name: string
}

export interface BusinessServiceDto {
  checkInTime?: string
  checkOutTime?: string
}

export interface HotelProperty {
  id: number
  name: string
  shortName: string
  mobile: string
  whatsApp: string
  email: string
  address: HotelAddress
  localCurrency: string
  website: string
  longitude: string
  latitude: string
  businessDescription: string
  seoFriendlyName: string
  taxDetails: TaxDetail[]
  roomList: HotelRoom[]
  imageList: { url: string }[]
  minimumRoooPrice: number
  propertyServicesList?: PropertyService[]
  businessServiceDtoList?: BusinessServiceDto[]
}

export interface AvailabilityParams {
  fromDate: string
  toDate: string
  noOfRooms: number
  noOfPersons: number
}

export async function fetchAvailability(params: AvailabilityParams): Promise<HotelProperty> {
  const url = `${HOTELMATE_API_BASE}/checkAvailability/${HOTELMATE_PROPERTY_ID}?fromDate=${params.fromDate}&toDate=${params.toDate}&noOfRooms=${params.noOfRooms}&noOfPersons=${params.noOfPersons}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HotelMate API error: ${res.status}`)
  return res.json()
}

export function buildBookingUrl(params?: {
  fromDate?: string
  toDate?: string
  noOfRooms?: string
  noOfPersons?: string
  roomName?: string
  roomId?: string
}): string {
  const baseUrl = 'https://bookone.io/Hotel-Bella-Casa'
  
  const fromStr = params?.fromDate || todayString()
  const toStr = params?.toDate || addDays(todayString(), 1)
  
  // Parse incoming YYYY-MM-DD
  const partsFrom = fromStr.split('-').map(Number)
  const [fYear, fMonth, fDay] = partsFrom[0] > 1000 ? partsFrom : [partsFrom[2], partsFrom[1], partsFrom[0]]
  const start = new Date(fYear, fMonth - 1, fDay)
  
  const partsTo = toStr.split('-').map(Number)
  const [tYear, tMonth, tDay] = partsTo[0] > 1000 ? partsTo : [partsTo[2], partsTo[1], partsTo[0]]
  const end = new Date(tYear, tMonth - 1, tDay)

  const pad = (n: number) => String(n).padStart(2, "0")
  
  // YYYY-MM-DD
  const checkInIso = `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`
  const checkOutIso = `${end.getFullYear()}-${pad(end.getMonth() + 1)}-${pad(end.getDate())}`

  // DD-MM-YYYY (Required for BookOne / HotelMate fromDate/toDate)
  const checkInDDMMYYYY = `${pad(start.getDate())}-${pad(start.getMonth() + 1)}-${start.getFullYear()}`
  const checkOutDDMMYYYY = `${pad(end.getDate())}-${pad(end.getMonth() + 1)}-${end.getFullYear()}`

  const safeAdults = Math.max(1, Number(params?.noOfPersons) || 1)
  const safeRooms = Math.max(1, Number(params?.noOfRooms) || 1)
  const safeChildren = 0
  const numGuests = safeAdults + safeChildren

  const nights = Math.max(
    1,
    Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  )

  const query = new URLSearchParams()
  query.set("bookingEngine", "true")

  // Format 1 — ISO (newer engines)
  query.set("checkin", checkInIso)
  query.set("checkout", checkOutIso)

  // Format 2 — split day/month/year (legacy widget fallback)
  query.set("checkinDay", String(start.getDate()))
  query.set("checkinMonth", String(start.getMonth() + 1))
  query.set("checkinYear", String(start.getFullYear()))
  query.set("checkoutDay", String(end.getDate()))
  query.set("checkoutMonth", String(end.getMonth() + 1))
  query.set("checkoutYear", String(end.getFullYear()))

  // Format 3 — fromDate/toDate (DD-MM-YYYY)
  query.set("fromDate", checkInDDMMYYYY)
  query.set("toDate", checkOutDDMMYYYY)

  query.set("nights", String(nights))

  query.set("adults", String(safeAdults))
  query.set("numAdults", String(safeAdults))
  query.set("children", String(safeChildren))
  query.set("Children", String(safeChildren))
  query.set("numGuests", String(numGuests))
  query.set("noOfPersons", String(numGuests))

  query.set("rooms", String(safeRooms))
  query.set("noOfRooms", String(safeRooms))

  if (params?.roomName) query.set("room", params.roomName)
  if (params?.roomId) {
    query.set("roomId", params.roomId)
    query.set("roomTypeId", params.roomId)
  }

  return `${baseUrl}?${query.toString()}`
}

const HOTEL_NAME = 'Hotel Surya Bella Casa'
const HOTEL_ADDRESS = 'Suryalok Complex, Opposite Vikass Market, Near Bus Stand, Purnia, Bihar 854301'

function buildEnquiryMessage(extra?: string): string {
  return (
    'This is an Enquiry from : The HotelMate Website' +
    '\nHotel Name: ' + HOTEL_NAME +
    '\nProperty Id: ' + HOTELMATE_PROPERTY_ID +
    '\nexternalSite: WebSite' +
    '\nAddress: ' + HOTEL_ADDRESS +
    (extra ? '\n' + extra : '')
  )
}

export function buildWhatsAppUrl(extra?: string): string {
  const phoneNumber = '919835923601'
  const message = buildEnquiryMessage(extra)
  return 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message)
}

export function formatDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function todayString(): string {
  return formatDate(new Date())
}

/**
 * Track booking events via GA4 (window.gtag)
 */
export function trackBookingEvent(event: 'booking_click' | 'booking_start' | 'booking_success', metadata?: Record<string, string | number | undefined>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, metadata)
  }
}

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void
  }
}

export function addDays(date: string, days: number): string {
  if (!date) return ''
  const parts = date.split('-').map(Number)
  let day, month, year
  if (parts[0] > 1000) {
    [year, month, day] = parts
  } else {
    [day, month, year] = parts
  }
  const localDate = new Date(year, month - 1, day)
  localDate.setDate(localDate.getDate() + days)
  return formatDate(localDate)
}
