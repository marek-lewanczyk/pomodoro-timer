import type {TodayStatsCardProps} from "@/types/statistics.ts";

export default function TodayStatsCard({ pomodoros, minutesWorked }: TodayStatsCardProps) {
    return (
        <div className="p-4 border border-primary shadow font-vt323 text-sm">
            <p>Pomodoros completed today: <strong>{pomodoros}</strong></p>
            <p>Total time: <strong>{minutesWorked}</strong> min</p>
        </div>
    );
}
