import { api } from '@/lib/axios'

export interface GetDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountResponse>(
    '/orders/day-orders-amount',
  )
  return response.data
}
