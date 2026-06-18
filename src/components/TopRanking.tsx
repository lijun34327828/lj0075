import { useDashboardStore } from "@/store/dashboard"
import { formatCurrency } from "@/utils/stats"
import { Trophy } from "lucide-react"

export default function TopRanking() {
  const { stats, loading } = useDashboardStore()
  const maxQuantity = stats.topProducts.length > 0 ? stats.topProducts[0].totalQuantity : 1

  const medalColors = [
    "bg-gradient-to-r from-amber-400 to-yellow-300",
    "bg-gradient-to-r from-gray-300 to-gray-200",
    "bg-gradient-to-r from-orange-400 to-amber-600",
  ]

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-fruit-cream-dark p-6 transition-opacity duration-300 ${loading ? "opacity-80" : ""}`}>
      <div className="flex items-center gap-2 mb-5">
        <Trophy size={20} className="text-fruit-gold" />
        <h2 className="text-lg font-bold text-fruit-bark">销量 TOP 榜单</h2>
        <span className="ml-auto text-xs text-fruit-bark/40">按销售数量降序</span>
      </div>

      {stats.topProducts.length === 0 ? (
        <div className="text-center py-8 text-fruit-bark/40">暂无数据</div>
      ) : (
        <div className="space-y-4">
          {stats.topProducts.map((fruit, idx) => (
            <div
              key={fruit.fruitName}
              className={`animate-slide-up stagger-${idx + 1} group`}
            >
              <div className="flex items-center gap-3 mb-1.5">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm ${
                    idx < 3 ? medalColors[idx] : "bg-fruit-cream-dark text-fruit-bark/50"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="text-xl">{fruit.emoji}</span>
                <span className="font-medium text-fruit-bark flex-1">{fruit.fruitName}</span>
                <span className="font-mono text-sm font-bold text-fruit-orange">
                  {fruit.totalQuantity}斤
                </span>
                <span className="font-mono text-xs text-fruit-bark/50">
                  {formatCurrency(fruit.totalSales)}
                </span>
              </div>
              <div className="ml-10 h-2.5 bg-fruit-cream rounded-full overflow-hidden">
                <div
                  className={`animate-grow-width stagger-${idx + 1} h-full rounded-full transition-colors ${
                    idx === 0
                      ? "bg-fruit-orange"
                      : idx === 1
                      ? "bg-fruit-orange-light"
                      : idx === 2
                      ? "bg-fruit-gold"
                      : "bg-fruit-green-light/60"
                  }`}
                  style={{ width: `${(fruit.totalQuantity / maxQuantity) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
