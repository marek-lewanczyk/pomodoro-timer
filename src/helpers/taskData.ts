import type {Task} from "@/types/task";

export const getTaskChartData = (tasks: Task[]) =>
    tasks.map(task => ({
        name: task.title,
        pomodoros: task.pomodoroCount,
    }));
