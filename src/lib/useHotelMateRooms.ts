'use client'

import { useEffect, useState } from 'react'
import { addDays, fetchAvailability, todayString } from '@/lib/hotelmate'
import { mapHotelMateRooms, Room, FALLBACK_ROOMS } from '@/lib/rooms'

interface UseHotelMateRoomsParams {
  fromDate?: string
  toDate?: string
  noOfRooms?: number
  noOfPersons?: number
}

export function useHotelMateRooms(params: UseHotelMateRoomsParams = {}) {
  // Start with FALLBACK_ROOMS immediately — rooms always render, never stuck on loading
  const [rooms, setRooms] = useState<Room[]>(FALLBACK_ROOMS)
  const [loading, setLoading] = useState(false) // false because FALLBACK_ROOMS are already shown
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    async function loadRooms() {
      setLoading(true)
      setError(null)

      try {
        const fromDate = params.fromDate || todayString()
        const toDate = params.toDate || addDays(fromDate, 1)
        const data = await fetchAvailability({
          fromDate,
          toDate,
          noOfRooms: params.noOfRooms ?? 1,
          noOfPersons: params.noOfPersons ?? 2,
        })

        if (!active) return
        const liveRooms = mapHotelMateRooms(data.roomList)
        // Only replace fallback rooms if live data returned valid rooms
        if (liveRooms.length > 0) {
          setRooms(liveRooms)
        }
      } catch (err) {
        if (!active) return
        // Silently keep FALLBACK_ROOMS on display — don't show error to visitor
        // API may be temporarily down; show static room data instead of broken state
        setError(err instanceof Error ? err.message : 'Unable to load live room data')
        // rooms already contain FALLBACK_ROOMS from initial state — leave them
      } finally {
        if (active) setLoading(false)
      }
    }

    loadRooms()

    return () => {
      active = false
    }
  }, [params.fromDate, params.toDate, params.noOfRooms, params.noOfPersons])

  return { rooms, loading, error }
}
