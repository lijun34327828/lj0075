import { useEffect } from "react"
import { useDashboardStore } from "@/store/dashboard"
import PeriodSwitcher from "@/components/PeriodSwitcher"
import StatCards from "@/components/StatCards"
import TopRanking from "@/components/TopRanking"
import FruitDetail from "@/components/FruitDetail"
import { Store, Info, Loader2, Database, FileText } from "lucide-react"

export default function Dashboard() {
  const { stats, loading, usingMock, refreshData } = useDashboardStore()

  useEffect(() => {
    refreshData()
  }, [refreshData])

  return (
    <div className="min-h-screen bg-fruit-cream">
      <header className="bg-gradient-to-r from-fruit-green via-fruit-green-light to-fruit-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                <Store size={22} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-wide">鲜果记</h1>
                <p className="text-xs text-white/60">社区水果店 · 每日销量看板</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                usingMock
                  ? "bg-amber-400/20 text-amber-200"
                  : "bg-emerald-400/20 text-emerald-200"
              }`}>
                {usingMock ? <FileText size={12} /> : <Database size={12} />}
                {usingMock ? "本地数据" : "服务端数据"}
              </div>
              <span className="text-2xl">🍊🍎🍇</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <PeriodSwitcher />
          <div className="flex items-center gap-1.5 text-sm text-fruit-bark/50">
            {loading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Info size={14} />
            )}
            <span>统计周期：{stats.periodLabel}</span>
          </div>
        </div>

        <StatCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopRanking />
          <FruitDetail />
        </div>

        <footer className="text-center py-6 text-xs text-fruit-bark/30 border-t border-fruit-cream-dark">
          所有统计指标仅依靠店内订单原始数据运算得出，计算公式简单直观，方便手工核对
        </footer>
      </main>
    </div>
  )
}
