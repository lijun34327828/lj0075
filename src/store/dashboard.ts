import { create } from "zustand"
import type { PeriodType, PeriodStats, Order } from "@/types"
import { computeStats } from "@/utils/stats"
import { MOCK_DATA } from "@/data/mockData"
import { fetchDayOrders, fetchWeekOrders, fetchAvailableDates } from "@/api"

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

function formatDateCN(dateStr: string): string {
  const [y, m, d] = dateStr.split("-")
  return `${y}年${parseInt(m)}月${parseInt(d)}日`
}

function getMockOrders(periodType: PeriodType, selectedDate: string, weekStartDate: string): Order[] {
  if (periodType === "day") {
    return MOCK_DATA[selectedDate] || []
  }
  const ws = new Date(weekStartDate)
  const dates: string[] = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(ws)
    d.setDate(d.getDate() + i)
    dates.push(
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
    )
  }
  return dates.flatMap((dt) => MOCK_DATA[dt] || [])
}

function computePeriodLabel(periodType: PeriodType, selectedDate: string, weekStartDate: string): string {
  if (periodType === "day") {
    return formatDateCN(selectedDate)
  }
  const ws = new Date(weekStartDate)
  const endDate = new Date(ws)
  endDate.setDate(endDate.getDate() + 6)
  const endStr = `${endDate.getFullYear()}/${endDate.getMonth() + 1}/${endDate.getDate()}`
  const startStr = `${ws.getFullYear()}/${ws.getMonth() + 1}/${ws.getDate()}`
  return `${startStr} - ${endStr}`
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

const initialOrders = getMockOrders("day", today, weekDates[6])

export const useDashboardStore = create<DashboardState>((set, get) => ({
  periodType: "day",
  selectedDate: today,
  weekStartDate: weekDates[6],
  stats: computeStats(initialOrders, formatDateCN(today)),
  availableDates: weekDates,
  loading: false,
  usingMock: true,
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
    let orders: Order[] | null = null
    let usingMock = false

    if (periodType === "day") {
      orders = await fetchDayOrders(selectedDate)
    } else {
      orders = await fetchWeekOrders(weekStartDate)
    }

    if (!orders) {
      orders = getMockOrders(periodType, selectedDate, weekStartDate)
      usingMock = true
    }

    const remoteDates = await fetchAvailableDates()
    const periodLabel = computePeriodLabel(periodType, selectedDate, weekStartDate)

    set({
      stats: computeStats(orders, periodLabel),
      availableDates: remoteDates || weekDates,
      loading: false,
      usingMock,
    })
  },
}))
