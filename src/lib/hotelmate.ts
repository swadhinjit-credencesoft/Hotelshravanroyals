export const HOTELMATE_PROPERTY_ID = 3561
export const HOTELMATE_API_BASE = 'https://api.thehotelmate.co/api/thm'
export const BOOKING_ENGINE_URL = 'https://bookone.io/Unwind-Karjat?bookingEngine=true'

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
}): string {
  const q = new URLSearchParams({ bookingEngine: 'true' })
  if (params?.fromDate) q.set('fromDate', params.fromDate)
  if (params?.toDate) q.set('toDate', params.toDate)
  if (params?.noOfRooms) q.set('noOfRooms', params.noOfRooms)
  if (params?.noOfPersons) q.set('noOfPersons', params.noOfPersons)
  if (params?.roomName) q.set('room', params.roomName)
  return `https://bookone.io/Unwind-Karjat?${q.toString()}`
}

export function todayString(): string {
  return new Date().toISOString().split('T')[0]
}

export function addDays(date: string, days: number): string {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}
