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

export interface PeriodStats {
  totalSales: number
  totalOrders: number
  avgOrderValue: number
  fruitStats: FruitStat[]
  topProducts: FruitStat[]
  periodLabel: string
}

export type PeriodType = "day" | "week"
