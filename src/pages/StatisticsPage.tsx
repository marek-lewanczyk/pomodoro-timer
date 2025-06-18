import { useStatistics } from '@/context/StatisticsContext';
import WeeklyChart from '@/components/Stats/WeeklyChart/WeeklyChart.tsx';
import TaskPerPomodoroChart from '@/components/Stats/TaskPerPomodoroChart/TaskPerPomodoroChart.tsx';
import TodayStatsCard from '@/components/Stats/TodayStatsCard/TodayStatsCard.tsx';

export default function StatisticsPage() {
    const { stats } = useStatistics();

    const today = new Date().toISOString().split('T')[0];
    const todayStats = stats[today] || { pomodoros: 0, minutesWorked: 0 };

    return (
        <div className="font-vt323 mx-auto flex max-w-xl flex-col gap-4 p-4">
            <h1 className="flex justify-center text-3xl">Stats</h1>
            <TodayStatsCard minutesWorked={todayStats.minutesWorked} pomodoros={todayStats.pomodoros} />
            <WeeklyChart />
            <TaskPerPomodoroChart />
        </div>
    );
}
