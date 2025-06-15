import {useStatistics} from "@/context/StatisticsContext";
import Button from "@/components/UI/Button.tsx";
import {ArrowTurnLeftUpIcon} from "@heroicons/react/16/solid";
import WeeklyChart from "@/components/WeeklyChart.tsx";

export default function StatisticsPage() {
    const { stats } = useStatistics();

    const today = new Date().toISOString().split("T")[0];
    const todayStats = stats[today] || { pomodoros: 0, minutesWorked: 0 };

    return (
        <div className="p-4 font-vt323 max-w-xl mx-auto">
            <div className="flex items-center">
                <Button to="/">
                    <ArrowTurnLeftUpIcon className="w-8 h-8" />
                </Button>
                <h1 className="text-2xl m-4">Statystyki</h1>
            </div>
            <div className="mt-8 p-4 border border-black shadow-[3px_3px_0_black] font-vt323 text-sm">
                <p>Dziś ukończone: <strong>{todayStats.pomodoros}</strong> Pomodoro</p>
                <p>Łączny czas: <strong>{todayStats.minutesWorked}</strong> min</p>
            </div>
            <WeeklyChart />
        </div>
    );
}
