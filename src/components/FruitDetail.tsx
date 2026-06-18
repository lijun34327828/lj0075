import { useDashboardStore } from "@/store/dashboard"
import { formatCurrency } from "@/utils/stats"
import { ClipboardList } from "lucide-react"

export default function FruitDetail() {
  const { stats, loading } = useDashboardStore()

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-fruit-cream-dark p-6 transition-opacity duration-300 ${loading ? "opacity-80" : ""}`}>
      <div className="flex items-center gap-2 mb-5">
        <ClipboardList size={20} className="text-fruit-green" />
        <h2 className="text-lg font-bold text-fruit-bark">水果销量明细</h2>
        <span className="ml-auto text-xs text-fruit-bark/40">销售额占比 = 水果销售额 ÷ 总销售额</span>
      </div>

      {stats.fruitStats.length === 0 ? (
        <div className="text-center py-8 text-fruit-bark/40">暂无数据</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-fruit-cream">
                <th className="text-left py-3 px-2 text-fruit-bark/60 font-medium">水果</th>
                <th className="text-right py-3 px-2 text-fruit-bark/60 font-medium">数量(斤)</th>
                <th className="text-right py-3 px-2 text-fruit-bark/60 font-medium">销售额</th>
                <th className="text-right py-3 px-2 text-fruit-bark/60 font-medium">占比</th>
              </tr>
            </thead>
            <tbody>
              {stats.fruitStats.map((fruit, idx) => (
                <tr
                  key={fruit.fruitName}
                  className={`animate-slide-up stagger-${Math.min(idx + 1, 8)} border-b border-fruit-cream-dark/50
                    hover:bg-fruit-green-pale/40 transition-colors duration-150`}
                >
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{fruit.emoji}</span>
                      <span className="font-medium text-fruit-bark">{fruit.fruitName}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right font-mono font-medium text-fruit-bark">
                    {fruit.totalQuantity}
                  </td>
                  <td className="py-3 px-2 text-right font-mono text-fruit-orange font-medium">
                    {formatCurrency(fruit.totalSales)}
                  </td>
                  <td className="py-3 px-2 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-1.5 bg-fruit-cream rounded-full overflow-hidden">
                        <div
                          className="h-full bg-fruit-green rounded-full"
                          style={{ width: `${fruit.percentage}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-fruit-bark/60 w-12 text-right">
                        {fruit.percentage}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-fruit-cream/50">
                <td className="py-3 px-2 font-bold text-fruit-bark">合计</td>
                <td className="py-3 px-2 text-right font-mono font-bold text-fruit-bark">
                  {stats.fruitStats.reduce((s, f) => s + f.totalQuantity, 0)}
                </td>
                <td className="py-3 px-2 text-right font-mono font-bold text-fruit-orange">
                  {formatCurrency(stats.totalSales)}
                </td>
                <td className="py-3 px-2 text-right font-mono text-xs text-fruit-bark/60">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  )
}
