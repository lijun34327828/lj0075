export interface OrderItem {
  fruitName: string
  quantity: number
  unitPrice: number
  subtotal: number
}

export interface Order {
  id: string
  date: string
  items: OrderItem[]
}

export interface FruitStat {
  fruitName: string
  emoji: string
  totalQuantity: number
  totalSales: number
  percentage: number
}

export interface MoMData {
  salesMoM: number | null
  ordersMoM: number | null
}

export interface PeriodStats {
  totalSales: number
  totalOrders: number
  avgOrderValue: number
  fruitStats: FruitStat[]
  topProducts: FruitStat[]
  periodLabel: string
}

export interface DayTrend {
  date: string
  totalSales: number
  totalOrders: number
}

export type PeriodType = "day" | "week"
