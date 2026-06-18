import { useDashboardStore } from "@/store/dashboard"
import { formatCurrency } from "@/utils/stats"
import { TrendingUp } from "lucide-react"
import type { DayTrend } from "@/types"

function formatDateShort(dateStr: string) {
  const [, m, d] = dateStr.split("-")
  return `${parseInt(m)}/${parseInt(d)}`
}

function MiniBarChart({ data }: { data: DayTrend[] }) {
  if (data.length === 0) return null

  const maxSales = Math.max(...data.map((d) => d.totalSales), 1)
  const maxOrders = Math.max(...data.map((d) => d.totalOrders), 1)

  return (
    <div className="flex items-end gap-1.5 sm:gap-2.5 h-44">
      {data.map((d) => {
        const salesHeight = Math.max((d.totalSales / maxSales) * 100, 2)
        const ordersHeight = Math.max((d.totalOrders / maxOrders) * 100, 2)

        return (
          <div key={d.date} className="flex-1 flex flex-col items-center gap-1 min-w-0">
            <div className="flex items-end gap-0.5 w-full h-36">
              <div className="flex-1 flex items-end">
                <div
                  className="w-full rounded-t-sm bg-gradient-to-t from-fruit-orange to-fruit-orange-light transition-all duration-500"
                  style={{ height: `${salesHeight}%` }}
                  title={`销售额: ¥${d.totalSales.toFixed(2)}`}
                />
              </div>
              <div className="flex-1 flex items-end">
                <div
                  className="w-full rounded-t-sm bg-gradient-to-t from-fruit-green to-fruit-green-light transition-all duration-500"
                  style={{ height: `${ordersHeight}%` }}
                  title={`订单数: ${d.totalOrders}`}
                />
              </div>
            </div>
            <span className="text-[10px] sm:text-xs text-fruit-bark/50 truncate w-full text-center">
              {formatDateShort(d.date)}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function SVGLineChart({ data }: { data: DayTrend[] }) {
  if (data.length === 0) return null

  const maxSales = Math.max(...data.map((d) => d.totalSales), 1)
  const maxOrders = Math.max(...data.map((d) => d.totalOrders), 1)
  const w = 100
  const h = 60
  const padX = 5
  const padY = 5
  const innerW = w - padX * 2
  const innerH = h - padY * 2

  const salesPoints = data.map((d, i) => ({
    x: padX + (data.length > 1 ? (i / (data.length - 1)) * innerW : innerW / 2),
    y: padY + innerH - (d.totalSales / maxSales) * innerH,
  }))

  const orderPoints = data.map((d, i) => ({
    x: padX + (data.length > 1 ? (i / (data.length - 1)) * innerW : innerW / 2),
    y: padY + innerH - (d.totalOrders / maxOrders) * innerH,
  }))

  function toPath(points: { x: number; y: number }[]) {
    return points
      .map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`))
      .join(" ")
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40 sm:h-48" preserveAspectRatio="none">
      {Array.from({ length: 4 }, (_, i) => {
        const y = padY + (innerH / 3) * i
        return (
          <line
            key={i}
            x1={padX}
            y1={y}
            x2={w - padX}
            y2={y}
            stroke="#F5EDE3"
            strokeWidth="0.3"
          />
        )
      })}
      <path
        d={toPath(salesPoints)}
        fill="none"
        stroke="#FF6B35"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {salesPoints.map((p, i) => (
        <circle key={`s${i}`} cx={p.x} cy={p.y} r="1.2" fill="#FF6B35" />
      ))}
      <path
        d={toPath(orderPoints)}
        fill="none"
        stroke="#2D5016"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {orderPoints.map((p, i) => (
        <circle key={`o${i}`} cx={p.x} cy={p.y} r="1.2" fill="#2D5016" />
      ))}
    </svg>
  )
}

export default function TrendChart() {
  const { trend, loading, periodType } = useDashboardStore()

  if (trend.length === 0 && !loading) return null

  return (
    <div className="animate-slide-up stagger-4 bg-white rounded-2xl shadow-sm border border-fruit-cream-dark overflow-hidden">
      <div className="px-5 py-4 border-b border-fruit-cream-dark flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-fruit-orange/10">
          <TrendingUp size={18} className="text-fruit-orange" />
        </div>
        <h3 className="text-base font-semibold text-fruit-bark">经营趋势</h3>
        <span className="text-xs text-fruit-bark/40 ml-1">
          {periodType === "day" ? "近7日逐日变化" : "所选周期逐日变化"}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-gradient-to-t from-fruit-orange to-fruit-orange-light" />
            <span className="text-xs text-fruit-bark/60">销售额</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-gradient-to-t from-fruit-green to-fruit-green-light" />
            <span className="text-xs text-fruit-bark/60">订单数</span>
          </div>
        </div>

        <div className={`transition-opacity duration-300 ${loading ? "opacity-40" : ""}`}>
          <div className="hidden sm:block">
            <SVGLineChart data={trend} />
          </div>
          <div className="sm:hidden">
            <MiniBarChart data={trend} />
          </div>
        </div>

        <div className="mt-4 border border-fruit-cream-dark rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-fruit-cream/60">
                <th className="text-left px-3 py-2 text-fruit-bark/60 font-medium">日期</th>
                <th className="text-right px-3 py-2 text-fruit-bark/60 font-medium">销售额</th>
                <th className="text-right px-3 py-2 text-fruit-bark/60 font-medium">订单数</th>
              </tr>
            </thead>
            <tbody>
              {trend.map((d) => (
                <tr key={d.date} className="border-t border-fruit-cream-dark/60 hover:bg-fruit-cream/40 transition-colors">
                  <td className="px-3 py-2 text-fruit-bark/70">{formatDateShort(d.date)}</td>
                  <td className="px-3 py-2 text-right font-mono text-fruit-bark">{formatCurrency(d.totalSales)}</td>
                  <td className="px-3 py-2 text-right font-mono text-fruit-bark">{d.totalOrders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
