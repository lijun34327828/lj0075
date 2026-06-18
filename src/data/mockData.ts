import type { Order } from "@/types"

const FRUIT_EMOJIS: Record<string, string> = {
  "红富士苹果": "🍎",
  "香蕉": "🍌",
  "橙子": "🍊",
  "草莓": "🍓",
  "葡萄": "🍇",
  "西瓜": "🍉",
  "桃子": "🍑",
  "梨": "🍐",
  "芒果": "🥭",
  "蓝莓": "🫐",
  "樱桃": "🍒",
  "猕猴桃": "🥝",
  "荔枝": "🔴",
  "龙眼": "🟤",
  "火龙果": "🐉",
}

export { FRUIT_EMOJIS }

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randPrice(min: number, max: number) {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100
}

const FRUITS = [
  { name: "红富士苹果", priceRange: [5.5, 8.8] as [number, number] },
  { name: "香蕉", priceRange: [3.5, 5.5] as [number, number] },
  { name: "橙子", priceRange: [4.0, 7.0] as [number, number] },
  { name: "草莓", priceRange: [15.0, 28.0] as [number, number] },
  { name: "葡萄", priceRange: [8.0, 15.0] as [number, number] },
  { name: "西瓜", priceRange: [2.0, 4.0] as [number, number] },
  { name: "桃子", priceRange: [6.0, 12.0] as [number, number] },
  { name: "梨", priceRange: [4.5, 8.0] as [number, number] },
  { name: "芒果", priceRange: [10.0, 18.0] as [number, number] },
  { name: "蓝莓", priceRange: [25.0, 40.0] as [number, number] },
  { name: "樱桃", priceRange: [30.0, 55.0] as [number, number] },
  { name: "猕猴桃", priceRange: [6.0, 10.0] as [number, number] },
]

function generateOrder(date: string, orderId: number): Order {
  const itemCount = rand(1, 4)
  const selectedIndices = new Set<number>()
  while (selectedIndices.size < itemCount) {
    selectedIndices.add(rand(0, FRUITS.length - 1))
  }

  const items = Array.from(selectedIndices).map((idx) => {
    const fruit = FRUITS[idx]
    const unitPrice = randPrice(fruit.priceRange[0], fruit.priceRange[1])
    const quantity = rand(1, 8)
    const subtotal = Math.round(unitPrice * quantity * 100) / 100
    return {
      fruitName: fruit.name,
      quantity,
      unitPrice,
      subtotal,
    }
  })

  return {
    id: `ORD-${date}-${String(orderId).padStart(4, "0")}`,
    date,
    items,
  }
}

function generateDailyOrders(date: string): Order[] {
  const count = rand(18, 42)
  return Array.from({ length: count }, (_, i) => generateOrder(date, i + 1))
}

function getDateStr(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

export function generateMockData(): Record<string, Order[]> {
  const data: Record<string, Order[]> = {}
  const today = new Date()
  for (let i = 0; i < 14; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const dateStr = getDateStr(d)
    data[dateStr] = generateDailyOrders(dateStr)
  }
  return data
}

export const MOCK_DATA = generateMockData()
