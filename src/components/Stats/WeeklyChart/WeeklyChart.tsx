import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { useStatistics } from '@/context/StatisticsContext.tsx';
import { getChartTheme } from '@/styles/chartTheme.ts';
import { getPast7Days } from '@/helpers/taskDate.ts';

export default function WeeklyChart() {
    const { stats } = useStatistics();
    const past7Days = getPast7Days();
    const chartTheme = getChartTheme();

    const data = past7Days.map(date => ({
        date: date.slice(5), // MM-DD
        Pomodoro: stats[date]?.pomodoros ?? 0,
        Minutes: stats[date]?.minutesWorked ?? 0
    }));

    return (
        <div className="p-4 border border-primary shadow font-vt323 text-sm dark:border-secondary dark:shadow-dark">
            <h3 className="text-xl mb-4 text-center">Last 7 days</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.color_gray} />
                    <XAxis
                        dataKey="date"
                        tick={{
                            fontFamily: chartTheme.fontFamily,
                            fontSize: chartTheme.fontSize,
                            fill: chartTheme.color_primary
                        }}
                        axisLine={{ stroke: chartTheme.color_primary }}
                        tickLine={{ stroke: chartTheme.color_primary }}
                    />
                    <YAxis
                        tick={{
                            fontFamily: chartTheme.fontFamily,
                            fontSize: chartTheme.fontSize,
                            fill: chartTheme.color_primary
                        }}
                        axisLine={{ stroke: chartTheme.color_primary }}
                        tickLine={{ stroke: chartTheme.color_primary }}
                    />
                    <Tooltip
                        wrapperStyle={{
                            fontFamily: chartTheme.fontFamily,
                            fontSize: chartTheme.fontSize
                        }}
                        contentStyle={{
                            border: chartTheme.border,
                            backgroundColor: chartTheme.color_secondary
                        }}
                    />
                    <Bar dataKey="Pomodoro" fill={chartTheme.color_primary} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
