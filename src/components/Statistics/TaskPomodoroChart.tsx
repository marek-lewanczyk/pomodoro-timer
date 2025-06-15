import {useTasks} from "@/context/TaskContext";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function TaskPomodoroChart() {
    const { tasks } = useTasks();

    const data = tasks.map(task => ({
        name: task.title,
        pomodoros: task.pomodoroCount,
    }));

    return (
        <div className="p-4 border border-black shadow-[3px_3px_0_black] font-vt323 text-sm">
            <h3 className="text-xl mb-4 text-center">Pomodoro per Task</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#999" />
                    <XAxis
                        dataKey="name"
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
                    <Bar dataKey="pomodoros" fill="black" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
