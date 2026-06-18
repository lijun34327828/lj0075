import type { Order, PeriodStats } from "@/types"

const API_BASE = "/api"

export interface DayOrdersResponse {
  date: string
  orders: Order[]
  stats: PeriodStats
}

export interface WeekOrdersResponse {
  startDate: string
  endDate: string
  orders: Order[]
  stats: PeriodStats
}

export interface AvailableDatesResponse {
  dates: string[]
}

async function fetchJSON<T>(url: string): Promise<T | null> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3000)
    const res = await fetch(url, { signal: controller.signal })
    clearTimeout(timeout)
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

export async function fetchDayStats(date: string): Promise<PeriodStats | null> {
  const data = await fetchJSON<DayOrdersResponse>(`${API_BASE}/orders/day?date=${date}`)
  return data?.stats ?? null
}

export async function fetchWeekStats(startDate: string): Promise<PeriodStats | null> {
  const data = await fetchJSON<WeekOrdersResponse>(`${API_BASE}/orders/week?startDate=${startDate}`)
  return data?.stats ?? null
}

export async function fetchAvailableDates(): Promise<string[] | null> {
  const data = await fetchJSON<AvailableDatesResponse>(`${API_BASE}/dates`)
  return data?.dates ?? null
}
