import { useDashboardStore } from "@/store/dashboard"
import { formatCurrency } from "@/utils/stats"
import { DollarSign, ShoppingCart, Receipt, TrendingUp, TrendingDown, Minus } from "lucide-react"

function MoMBadge({ value }: { value: number | null }) {
  if (value === null) {
    return (
      <span className="inline-flex items-center gap-0.5 text-xs text-white/50 bg-white/10 rounded-full px-2 py-0.5">
        环比不适用
      </span>
    )
  }

  const isUp = value > 0
  const isDown = value < 0
  const isFlat = value === 0

  return (
    <span className={`inline-flex items-center gap-0.5 text-xs font-medium rounded-full px-2 py-0.5 ${
      isUp ? "bg-emerald-400/30 text-emerald-100" : isDown ? "bg-red-400/30 text-red-100" : "bg-white/15 text-white/70"
    }`}>
      {isUp && <TrendingUp size={10} />}
      {isDown && <TrendingDown size={10} />}
      {isFlat && <Minus size={10} />}
      {isUp && "+"}{value}%
    </span>
  )
}

export default function StatCards() {
  const { stats, mom, loading } = useDashboardStore()

  const cards = [
    {
      label: "总销售额",
      value: formatCurrency(stats.totalSales),
      icon: <DollarSign size={22} />,
      color: "from-fruit-orange to-fruit-orange-light",
      iconBg: "bg-white/25",
      formula: "所有订单金额合计",
      momValue: mom.salesMoM,
    },
    {
      label: "总订单数",
      value: stats.totalOrders.toLocaleString("zh-CN"),
      icon: <ShoppingCart size={22} />,
      color: "from-fruit-green to-fruit-green-light",
      iconBg: "bg-white/25",
      formula: "成交订单合计",
      momValue: mom.ordersMoM,
    },
    {
      label: "平均客单价",
      value: formatCurrency(stats.avgOrderValue),
      icon: <Receipt size={22} />,
      color: "from-fruit-gold to-amber-400",
      iconBg: "bg-white/25",
      formula: "总销售额 ÷ 订单数",
      momValue: null,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card, idx) => (
        <div
          key={card.label}
          className={`animate-slide-up stagger-${idx + 1} relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.color}
            p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5
            ${loading ? "opacity-80" : ""}`}
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute -right-2 -bottom-6 w-16 h-16 rounded-full bg-white/5" />
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-white/80 mb-1">{card.label}</p>
              <p className="text-2xl sm:text-3xl font-mono font-bold tracking-tight">{card.value}</p>
            </div>
            <div className={`p-2.5 rounded-xl ${card.iconBg}`}>
              {card.icon}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-white/60">{card.formula}</span>
            {card.momValue !== null && card.momValue !== undefined && <MoMBadge value={card.momValue} />}
          </div>
        </div>
      ))}
    </div>
  )
}
