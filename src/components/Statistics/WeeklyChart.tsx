import {useStatistics} from "@/context/StatisticsContext.tsx";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

function getPast7Days(): string[] {
    const days: string[] = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        days.push(d.toISOString().split("T")[0]);
    }
    return days;
}

export default function WeeklyChart() {
    const { stats } = useStatistics();
    const past7Days = getPast7Days();

    const data = past7Days.map(date => ({
        date: date.slice(5), // MM-DD
        Pomodoro: stats[date]?.pomodoros ?? 0,
        Minutes: stats[date]?.minutesWorked ?? 0,
    }));

    return (
        <div className="p-4 border border-black shadow-[3px_3px_0_black] font-vt323 text-sm">
            <h3 className="text-xl mb-4 text-center">Ostatnie 7 dni</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#999" />
                    <XAxis
                        dataKey="date"
                        tick={{ fontFamily: "VT323", fontSize: 14, fill: "#000" }}
                        axisLine={{ stroke: "#000" }}
                        tickLine={{ stroke: "#000" }}
                    />
                    <YAxis
                        tick={{ fontFamily: "VT323", fontSize: 14, fill: "#000" }}
                        axisLine={{ stroke: "#000" }}
                        tickLine={{ stroke: "#000" }}
                    />
                    <Tooltip
                        wrapperStyle={{ fontFamily: "VT323", fontSize: 14 }}
                        contentStyle={{ border: "2px solid black", backgroundColor: "#fff" }}
                    />
                    <Bar dataKey="Pomodoro" fill="black" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
