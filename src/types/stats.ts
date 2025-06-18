export interface PomodoroStats {
    [date: string]: {
        pomodoros: number;
        minutesWorked: number;
    }
}

export interface TodayStatsCardProps {
    pomodoros: number;
    minutesWorked: number;
}
