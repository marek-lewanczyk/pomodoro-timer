import type { TodayStatsCardProps } from '@/types/stats.ts';

export default function TodayStatsCard({ pomodoros, minutesWorked }: TodayStatsCardProps) {
    return (
        <div className="border-primary font-vt323 dark:border-secondary dark:shadow-dark border p-4 text-sm shadow">
            <p>
                Pomodoros completed today: <strong>{pomodoros}</strong>
            </p>
            <p>
                Total time: <strong>{minutesWorked}</strong> min
            </p>
        </div>
    );
}
