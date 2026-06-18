import { useDashboardStore } from "@/store/dashboard"
import { CalendarDays, CalendarRange } from "lucide-react"
import type { PeriodType } from "@/types"

export default function PeriodSwitcher() {
  const { periodType, setPeriodType, selectedDate, setSelectedDate, weekStartDate, setWeekStartDate, availableDates, loading } =
    useDashboardStore()

  const tabs: { key: PeriodType; label: string; icon: React.ReactNode }[] = [
    { key: "day", label: "单日", icon: <CalendarDays size={16} /> },
    { key: "week", label: "单周", icon: <CalendarRange size={16} /> },
  ]

  function formatDateDisplay(dateStr: string) {
    const [, m, d] = dateStr.split("-")
    return `${parseInt(m)}月${parseInt(d)}日`
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex bg-white rounded-full p-1 shadow-sm border border-fruit-cream-dark">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setPeriodType(tab.key)}
            disabled={loading}
            className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              periodType === tab.key
                ? "bg-fruit-orange text-white shadow-md"
                : "text-fruit-bark hover:bg-fruit-cream"
            } ${loading ? "opacity-70 cursor-wait" : ""}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {periodType === "day" && (
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={selectedDate}
            max={availableDates[0]}
            min={availableDates[availableDates.length - 1]}
            onChange={(e) => setSelectedDate(e.target.value)}
            disabled={loading}
            className="px-4 py-2 rounded-xl border border-fruit-cream-dark bg-white text-sm text-fruit-bark
              focus:outline-none focus:ring-2 focus:ring-fruit-orange/30 focus:border-fruit-orange
              transition-all duration-200 disabled:opacity-60 disabled:cursor-wait"
          />
          <span className="text-sm text-fruit-bark/60">{formatDateDisplay(selectedDate)}</span>
        </div>
      )}

      {periodType === "week" && (
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={weekStartDate}
            max={availableDates[0]}
            min={availableDates[availableDates.length - 1]}
            onChange={(e) => setWeekStartDate(e.target.value)}
            disabled={loading}
            className="px-4 py-2 rounded-xl border border-fruit-cream-dark bg-white text-sm text-fruit-bark
              focus:outline-none focus:ring-2 focus:ring-fruit-orange/30 focus:border-fruit-orange
              transition-all duration-200 disabled:opacity-60 disabled:cursor-wait"
          />
          <span className="text-sm text-fruit-bark/60">起始日（含7天）</span>
        </div>
      )}
    </div>
  )
}
