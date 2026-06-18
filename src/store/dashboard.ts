import { create } from "zustand"
import type { PeriodType, PeriodStats } from "@/types"
import { fetchDayStats, fetchWeekStats, fetchAvailableDates } from "@/api"

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

interface DashboardState {
  periodType: PeriodType
  selectedDate: string
  weekStartDate: string
  stats: PeriodStats
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

    if (periodType === "day") {
      stats = await fetchDayStats(selectedDate)
    } else {
      stats = await fetchWeekStats(weekStartDate)
    }

    const remoteDates = await fetchAvailableDates()

    if (stats) {
      set({
        stats,
        availableDates: remoteDates || get().availableDates,
        loading: false,
        usingMock: false,
      })
    } else {
      set({
        stats: getEmptyStats(periodType === "day" ? selectedDate : weekStartDate),
        availableDates: remoteDates || weekDates,
        loading: false,
        usingMock: true,
      })
    }
  },
}))
