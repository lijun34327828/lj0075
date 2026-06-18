import type { Order, FruitStat, PeriodStats } from "@/types"
import { FRUIT_EMOJIS } from "@/data/mockData"

export function computeStats(orders: Order[], periodLabel: string): PeriodStats {
  const totalSales = orders.reduce(
    (sum, order) => sum + order.items.reduce((s, item) => s + item.subtotal, 0),
    0
  )
  const totalOrders = orders.length
  const avgOrderValue = totalOrders > 0 ? Math.round((totalSales / totalOrders) * 100) / 100 : 0

  const fruitMap = new Map<string, { quantity: number; sales: number }>()

  for (const order of orders) {
    for (const item of order.items) {
      const existing = fruitMap.get(item.fruitName) || { quantity: 0, sales: 0 }
      existing.quantity += item.quantity
      existing.sales += item.subtotal
      fruitMap.set(item.fruitName, existing)
    }
  }

  const fruitStats: FruitStat[] = Array.from(fruitMap.entries())
    .map(([name, data]) => ({
      fruitName: name,
      emoji: FRUIT_EMOJIS[name] || "🍈",
      totalQuantity: data.quantity,
      totalSales: Math.round(data.sales * 100) / 100,
      percentage: totalSales > 0 ? Math.round((data.sales / totalSales) * 10000) / 100 : 0,
    }))
    .sort((a, b) => b.totalQuantity - a.totalQuantity)

  const topProducts = [...fruitStats].slice(0, 5)

  return {
    totalSales: Math.round(totalSales * 100) / 100,
    totalOrders,
    avgOrderValue,
    fruitStats,
    topProducts,
    periodLabel,
  }
}

export function formatCurrency(value: number): string {
  return `¥${value.toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
