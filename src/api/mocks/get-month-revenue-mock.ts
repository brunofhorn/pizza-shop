import { http, HttpResponse } from 'msw'

import type { GetMonthRevenueAmountResponse } from '../get-month-revenue'

export const getMonthRevenueAmountMock = http.get<
  never,
  never,
  GetMonthRevenueAmountResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 10,
  })
})
