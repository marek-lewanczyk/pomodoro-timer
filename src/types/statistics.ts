export interface PomodoroStats {
    [date: string]: {
        pomodoros: number;
        minutesWorked: number;
    }
}
