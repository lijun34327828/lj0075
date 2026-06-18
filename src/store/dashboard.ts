import { create } from "zustand"
import type { PeriodType, PeriodStats, MoMData, DayTrend } from "@/types"
import { fetchDayStats, fetchWeekStats, fetchAvailableDates, fetchTrendWeek } from "@/api"

function getTodayStr(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
}

function getWeekDates(): string[] {
  const dates: string[] = []
  const today = new Date()
  for (let i = 0; i < 14; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    dates.push(
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
    )
  }
  return dates
}

function getEmptyStats(periodLabel: string): PeriodStats {
  return {
    totalSales: 0,
    totalOrders: 0,
    avgOrderValue: 0,
    fruitStats: [],
    topProducts: [],
    periodLabel,
  }
}

function getEmptyMoM(): MoMData {
  return {
    salesMoM: null,
    ordersMoM: null,
  }
}

interface DashboardState {
  periodType: PeriodType
  selectedDate: string
  weekStartDate: string
  stats: PeriodStats
  mom: MoMData
  trend: DayTrend[]
  availableDates: string[]
  loading: boolean
  usingMock: boolean
  setPeriodType: (type: PeriodType) => void
  setSelectedDate: (date: string) => void
  setWeekStartDate: (date: string) => void
  refreshData: () => void
}

const today = getTodayStr()
const weekDates = getWeekDates()

export const useDashboardStore = create<DashboardState>((set, get) => ({
  periodType: "day",
  selectedDate: today,
  weekStartDate: weekDates[6],
  stats: getEmptyStats(""),
  mom: getEmptyMoM(),
  trend: [],
  availableDates: weekDates,
  loading: true,
  usingMock: false,
  setPeriodType: (type) => {
    set({ periodType: type, loading: true })
    get().refreshData()
  },
  setSelectedDate: (date) => {
    set({ selectedDate: date, loading: true })
    get().refreshData()
  },
  setWeekStartDate: (date) => {
    set({ weekStartDate: date, loading: true })
    get().refreshData()
  },
  refreshData: async () => {
    const { periodType, selectedDate, weekStartDate } = get()
    let stats: PeriodStats | null = null
    let mom: MoMData | null = null
    let trend: DayTrend[] | null = null

    if (periodType === "day") {
      const result = await fetchDayStats(selectedDate)
      if (result) {
        stats = result.stats
        mom = result.mom
      }
      const trendStart = new Date(selectedDate)
      trendStart.setDate(trendStart.getDate() - 6)
      const tsStr = `${trendStart.getFullYear()}-${String(trendStart.getMonth() + 1).padStart(2, "0")}-${String(trendStart.getDate()).padStart(2, "0")}`
      trend = await fetchTrendWeek(tsStr)
    } else {
      const result = await fetchWeekStats(weekStartDate)
      if (result) {
        stats = result.stats
        mom = result.mom
      }
      trend = await fetchTrendWeek(weekStartDate)
    }

    const remoteDates = await fetchAvailableDates()

    if (stats) {
      set({
        stats,
        mom: mom || getEmptyMoM(),
        trend: trend || [],
        availableDates: remoteDates || get().availableDates,
        loading: false,
        usingMock: false,
      })
    } else {
      set({
        stats: getEmptyStats(periodType === "day" ? selectedDate : weekStartDate),
        mom: getEmptyMoM(),
        trend: trend || [],
        availableDates: remoteDates || weekDates,
        loading: false,
        usingMock: true,
      })
    }
  },
}))
