import { api } from '@/lib/axios'

export interface GetMonthCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<GetMonthCanceledOrdersAmountResponse>(
    '/orders/month-canceled-orders-amount',
  )
  return response.data
}
