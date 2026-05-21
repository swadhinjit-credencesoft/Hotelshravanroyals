import { buildHotelMateCheckAvailabilityUrl } from "@/lib/hotelmate-availability";

export const PROPERTY_ID = 3523;

export async function fetchPropertyData(propertyId: number) {
  const response = await fetch(`https://api.thehotelmate.co/api/thm/findById/${propertyId}`, {
    next: { revalidate: 60 }, // Revalidate every minute for property details
    headers: {
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch property data: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchAvailability(
  propertyId: number,
  fromDate: string,
  toDate: string,
  options?: { noOfRooms?: number; noOfPersons?: number },
) {
  const url = buildHotelMateCheckAvailabilityUrl(propertyId, {
    fromDate,
    toDate,
    noOfRooms: options?.noOfRooms ?? 3,
    noOfPersons: options?.noOfPersons ?? 3,
  });
  const response = await fetch(url, {
    cache: "no-store", // Availability must always be fresh
    headers: {
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch availability: ${response.statusText}`);
  }

  return response.json();
}
