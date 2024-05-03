import { API_URL } from "@/utils/constants";
import { redirect } from 'next/navigation';

export async function getCardDetails(id) {
  const res = await fetch(`${API_URL}/cards/${id}`, {
    method: "GET",
    cache: 'no-cache',
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    // throw new Error('Failed to fetch cardDetails')
    redirect('/');
  }
  const jsonData = await res.json()
  return jsonData.data
}
