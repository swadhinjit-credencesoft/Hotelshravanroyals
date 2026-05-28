'use client'

import { useEffect, useState } from 'react'
import { addDays, fetchAvailability, todayString } from '@/lib/hotelmate'
import { mapHotelMateRooms, Room } from '@/lib/rooms'

interface UseHotelMateRoomsParams {
  fromDate?: string
  toDate?: string
  noOfRooms?: number
  noOfPersons?: number
}

export function useHotelMateRooms(params: UseHotelMateRoomsParams = {}) {
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
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
        setRooms(mapHotelMateRooms(data.roomList))
      } catch (err) {
        if (!active) return
        setRooms([])
        setError(err instanceof Error ? err.message : 'Unable to load rooms')
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
