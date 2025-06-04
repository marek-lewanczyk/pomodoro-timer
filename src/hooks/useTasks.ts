import {useState} from "react";
import {v4 as uuidv4} from "uuid";

import type {Task} from "@/types/task.ts";

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string) => {
        const newTask: Task = {
            id: uuidv4(),
            title: title,
            isCompleted: false,
            pomodoroCount: 0,
        };
        setTasks(prev => [...prev, newTask]);
    }

    const updateTask = (id: string, title: string) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, title } : task
            )
        )
    }

    const toggleComplete = (id: string) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? {...task, isCompleted: !task.isCompleted} : task
            )
        )
    }

    const deleteTask = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    const incrementPomodoro = (id: string) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, pomodoroCount: task.pomodoroCount + 1 } : task
            )
        )
    }

    return {
        tasks,
        addTask,
        updateTask,
        toggleComplete,
        deleteTask,
        incrementPomodoro,
    }
}
