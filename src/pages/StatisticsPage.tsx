import { useStatistics } from '@/context/StatisticsContext';
import WeeklyChart from '@/components/Stats/WeeklyChart/WeeklyChart.tsx';
import TaskPerPomodoroChart from '@/components/Stats/TaskPerPomodoroChart/TaskPerPomodoroChart.tsx';
import TodayStatsCard from '@/components/Stats/TodayStatsCard/TodayStatsCard.tsx';

export default function StatisticsPage() {
    const { stats } = useStatistics();

    const today = new Date().toISOString().split('T')[0];
    const todayStats = stats[today] || { pomodoros: 0, minutesWorked: 0 };

    return (
        <div className="flex flex-col p-4 font-vt323 max-w-xl mx-auto gap-4">
            <h1 className="flex justify-center text-3xl">Stats</h1>
            <TodayStatsCard minutesWorked={todayStats.minutesWorked} pomodoros={todayStats.pomodoros} />
            <WeeklyChart />
            <TaskPerPomodoroChart />
        </div>
    );
}
