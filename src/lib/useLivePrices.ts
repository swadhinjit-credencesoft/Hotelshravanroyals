'use client'

import { useEffect, useState } from 'react'
import { addDays, fetchAvailability, todayString } from '@/lib/hotelmate'
import { getRoomAvailability, getRoomPrice, slugifyRoomName } from '@/lib/rooms'

export interface RoomLivePrice {
  price: number
  roomId: string | null
  isLive: boolean
  available: boolean
}

export type LivePriceMap = Record<string, RoomLivePrice>

export function useLivePrices() {
  const [prices, setPrices] = useState<LivePriceMap>({})
  const [loading, setLoading] = useState(true)

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

        setPrices(map)
      } catch {
        if (active) setPrices({})
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
