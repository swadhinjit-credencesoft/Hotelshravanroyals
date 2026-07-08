'use client'

import { useEffect, useState } from 'react'
import { addDays, fetchAvailability, todayString } from '@/lib/hotelmate'
import { getRoomAvailability, getRoomPrice, slugifyRoomName, FALLBACK_ROOMS } from '@/lib/rooms'

export interface RoomLivePrice {
  price: number
  roomId: string | null
  isLive: boolean
  available: boolean
}

export type LivePriceMap = Record<string, RoomLivePrice>

// Build initial price map from FALLBACK_ROOMS so prices are visible immediately
function buildFallbackPriceMap(): LivePriceMap {
  const map: LivePriceMap = {}
  FALLBACK_ROOMS.forEach((room) => {
    map[room.slug] = {
      price: room.price,
      roomId: room.roomId,
      isLive: false, // static fallback, not live
      available: room.isAvailable,
    }
  })
  return map
}

export function useLivePrices() {
  // Initialize with fallback prices — never stuck on "loading" state
  const [prices, setPrices] = useState<LivePriceMap>(buildFallbackPriceMap)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let active = true

    async function loadPrices() {
      setLoading(true)

      try {
        const today = todayString()
        const tomorrow = addDays(today, 1)
        const data = await fetchAvailability({
          fromDate: today,
          toDate: tomorrow,
          noOfRooms: 1,
          noOfPersons: 2,
        })

        if (!active) return

        const map: LivePriceMap = {}
        data.roomList?.forEach((room) => {
          map[slugifyRoomName(room.name)] = {
            price: getRoomPrice(room),
            roomId: String(room.id),
            isLive: true,
            available: getRoomAvailability(room),
          }
        })

        // Only update if we got valid live prices
        if (Object.keys(map).length > 0) {
          setPrices(map)
        }
      } catch {
        // Silently keep fallback prices — API may be temporarily unavailable
        if (active) setPrices(buildFallbackPriceMap())
      } finally {
        if (active) setLoading(false)
      }
    }

    loadPrices()

    return () => {
      active = false
    }
  }, [])

  return { prices, loading }
}
