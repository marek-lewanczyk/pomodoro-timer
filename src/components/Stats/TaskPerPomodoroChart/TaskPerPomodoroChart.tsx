import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { useTasks } from '@/context/TaskContext.tsx';
import { getChartTheme } from '@/styles/chartTheme.ts';
import { getTaskChartData } from '@/helpers/taskData.ts';

export default function TaskPerPomodoroChart() {
    const { tasks } = useTasks();
    const data = getTaskChartData(tasks);
    const chartTheme = getChartTheme();

    return (
        <div className="p-4 border border-primary shadow font-vt323 text-sm dark:border-secondary dark:shadow-dark ">
            <h3 className="text-xl mb-4 text-center">Pomodoro per Task</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.color_gray} />
                    <XAxis
                        dataKey="name"
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
                    <Bar dataKey="pomodoros" fill={chartTheme.color_primary} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
