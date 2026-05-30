'use client'

import { useState, useEffect } from 'react'
import { fetchAvailability, todayString, addDays } from '@/lib/hotelmate'
import { rooms } from '@/data/rooms'

export interface RoomLivePrice {
  price: number
  roomId: string | null
  isLive: boolean
  available: boolean
}

export type LivePriceMap = Record<string, RoomLivePrice>

/**
 * Fetches live prices for all rooms from the HotelMate API for today's dates.
 * Falls back to static prices if the API call fails.
 */
export function useLivePrices() {
  const [prices, setPrices] = useState<LivePriceMap>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    async function loadPrices() {
      setLoading(true)

      const timeout = new Promise<never>((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error('Timeout')), 8000)
      })

      try {
        const today = todayString()
        const tomorrow = addDays(today, 1)

        const data = await Promise.race([
          fetchAvailability({
            fromDate: today,
            toDate: tomorrow,
            noOfRooms: 1,
            noOfPersons: 2,
          }),
          timeout,
        ]) as Awaited<ReturnType<typeof fetchAvailability>>

        if (!active) return

        const map: LivePriceMap = {}

        rooms.forEach((room) => {
          // Try to match by name substring (bidirectional)
          const apiRoom = data.roomList?.find((r) => {
            const apiName = r.name.toLowerCase().trim()
            const localName = room.name.toLowerCase().trim()
            return (
              apiName.includes(localName) ||
              localName.includes(apiName) ||
              // also try matching key words (e.g. "lawn", "forest", "cottage")
              localName.split(' ').some((w) => w.length > 4 && apiName.includes(w))
            )
          })

          if (apiRoom) {
            // Prefer the first rate plan amount, then roomOnlyPrice, then static fallback
            const plan = apiRoom.ratesAndAvailabilityDtos?.[0]?.roomRatePlans?.[0]
            const price = plan?.amount || apiRoom.roomOnlyPrice || room.price
            const noOfAvailable = apiRoom.ratesAndAvailabilityDtos?.[0]?.noOfAvailable ?? 1
            map[room.slug] = {
              price,
              roomId: String(apiRoom.id),
              isLive: true,
              available: noOfAvailable > 0,
            }
          } else {
            // Room not found in API response — use static price
            map[room.slug] = {
              price: room.price,
              roomId: null,
              isLive: false,
              available: true,
            }
          }
        })

        setPrices(map)
      } catch {
        if (!active) return
        // Network / CORS failure — fall back to static prices gracefully
        const map: LivePriceMap = {}
        rooms.forEach((room) => {
          map[room.slug] = {
            price: room.price,
            roomId: null,
            isLive: false,
            available: true,
          }
        })
        setPrices(map)
      } finally {
        if (timeoutId) clearTimeout(timeoutId)
        if (active) setLoading(false)
      }
    }

    loadPrices()
    return () => {
      active = false
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return { prices, loading }
}
