import express from "express";
import cors from "cors";
import { getAvailableDates, getDayOrders, getWeekOrders, FRUIT_EMOJIS } from "./data/orders";
const app = express();
const PORT = 8846;
app.use(cors());
app.use(express.json());
function computeStats(orders, periodLabel) {
    const totalSales = orders.reduce((sum, order) => sum + order.items.reduce((s, item) => s + item.subtotal, 0), 0);
    const totalOrders = orders.length;
    const avgOrderValue = totalOrders > 0 ? Math.round((totalSales / totalOrders) * 100) / 100 : 0;
    const fruitMap = new Map();
    for (const order of orders) {
        for (const item of order.items) {
            const existing = fruitMap.get(item.fruitName) || { quantity: 0, sales: 0 };
            existing.quantity += item.quantity;
            existing.sales += item.subtotal;
            fruitMap.set(item.fruitName, existing);
        }
    }
    const fruitStats = Array.from(fruitMap.entries())
        .map(([name, data]) => ({
        fruitName: name,
        emoji: FRUIT_EMOJIS[name] || "🍈",
        totalQuantity: data.quantity,
        totalSales: Math.round(data.sales * 100) / 100,
        percentage: totalSales > 0 ? Math.round((data.sales / totalSales) * 10000) / 100 : 0,
    }))
        .sort((a, b) => b.totalQuantity - a.totalQuantity);
    const topProducts = [...fruitStats].slice(0, 5);
    return {
        totalSales: Math.round(totalSales * 100) / 100,
        totalOrders,
        avgOrderValue,
        fruitStats,
        topProducts,
        periodLabel,
    };
}
function formatDateCN(dateStr) {
    const [y, m, d] = dateStr.split("-");
    return `${y}年${parseInt(m)}月${parseInt(d)}日`;
}
function formatWeekLabel(startDate) {
    const ws = new Date(startDate);
    const endDate = new Date(ws);
    endDate.setDate(endDate.getDate() + 6);
    const endStr = `${endDate.getFullYear()}/${endDate.getMonth() + 1}/${endDate.getDate()}`;
    const startStr = `${ws.getFullYear()}/${ws.getMonth() + 1}/${ws.getDate()}`;
    return `${startStr} - ${endStr}`;
}
app.get("/api/dates", (req, res) => {
    const dates = getAvailableDates();
    res.json({ dates });
});
app.get("/api/orders/day", (req, res) => {
    const date = req.query.date;
    if (!date) {
        res.status(400).json({ error: "缺少 date 参数" });
        return;
    }
    const orders = getDayOrders(date);
    const periodLabel = formatDateCN(date);
    const stats = computeStats(orders, periodLabel);
    res.json({
        date,
        orders,
        stats,
    });
});
app.get("/api/orders/week", (req, res) => {
    const startDate = req.query.startDate;
    if (!startDate) {
        res.status(400).json({ error: "缺少 startDate 参数" });
        return;
    }
    const orders = getWeekOrders(startDate);
    const periodLabel = formatWeekLabel(startDate);
    const stats = computeStats(orders, periodLabel);
    const end = new Date(startDate);
    end.setDate(end.getDate() + 6);
    const endDate = `${end.getFullYear()}-${String(end.getMonth() + 1).padStart(2, "0")}-${String(end.getDate()).padStart(2, "0")}`;
    res.json({
        startDate,
        endDate,
        orders,
        stats,
    });
});
app.listen(PORT, () => {
    console.log(`🍊 鲜果记后端服务已启动: http://localhost:${PORT}`);
});
