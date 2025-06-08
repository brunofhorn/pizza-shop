import { http, HttpResponse } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2000 },
    { date: '02/01/2024', receipt: 1000 },
    { date: '03/01/2024', receipt: 345 },
    { date: '04/01/2024', receipt: 4678 },
    { date: '05/01/2024', receipt: 435 },
    { date: '06/01/2024', receipt: 753 },
    { date: '07/01/2024', receipt: 286 },
  ])
})
