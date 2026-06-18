import type { Order, PeriodStats, MoMData, DayTrend } from "@/types"

const API_BASE = "/api"

export interface DayOrdersResponse {
  date: string
  orders: Order[]
  stats: PeriodStats
  mom: MoMData
}

export interface WeekOrdersResponse {
  startDate: string
  endDate: string
  orders: Order[]
  stats: PeriodStats
  mom: MoMData
}

export interface AvailableDatesResponse {
  dates: string[]
}

export interface TrendWeekResponse {
  startDate: string
  trend: DayTrend[]
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

export async function fetchDayStats(date: string): Promise<{ stats: PeriodStats; mom: MoMData } | null> {
  const data = await fetchJSON<DayOrdersResponse>(`${API_BASE}/orders/day?date=${date}`)
  if (!data) return null
  return { stats: data.stats, mom: data.mom }
}

export async function fetchWeekStats(startDate: string): Promise<{ stats: PeriodStats; mom: MoMData } | null> {
  const data = await fetchJSON<WeekOrdersResponse>(`${API_BASE}/orders/week?startDate=${startDate}`)
  if (!data) return null
  return { stats: data.stats, mom: data.mom }
}

export async function fetchAvailableDates(): Promise<string[] | null> {
  const data = await fetchJSON<AvailableDatesResponse>(`${API_BASE}/dates`)
  return data?.dates ?? null
}

export async function fetchTrendWeek(startDate: string): Promise<DayTrend[] | null> {
  const data = await fetchJSON<TrendWeekResponse>(`${API_BASE}/trend/week?startDate=${startDate}`)
  return data?.trend ?? null
}
