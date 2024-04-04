import { API_URL } from "@/utils/constants";

export async function getCardDetails(id) {
  const res = await fetch(`${API_URL}/cards/${id}`, {
    method: "GET",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch cardDetails')
  }
  const jsonData = await res.json()
  return jsonData.data
}
