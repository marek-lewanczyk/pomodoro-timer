import type { Task, TaskContextType } from '@/types/task.ts';
import { createContext, startTransition, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'tasks';

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    startTransition(() => {
      setTasks((prev) => [
        ...prev,
        {
          id: uuidv4(),
          title,
          isCompleted: false,
          pomodoroCount: 0,
        },
      ]);
    });
  };

  const updateTask = (id: string, newTitle: string) => {
    startTransition(() => {
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? { ...task, title: newTitle } : task)),
      );
    });
  };

  const deleteTask = (id: string) => {
    startTransition(() => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
      if (id === activeTaskId) setActiveTaskId(null);
    });
  };

  const toggleComplete = (id: string) => {
    startTransition(() => {
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)),
      );
    });
  };

  const setActiveTask = (id: string) => {
    startTransition(() => {
      setActiveTaskId(id);
    });
  };

  const incrementPomodoroForActiveTask = () => {
    startTransition(() => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === activeTaskId && !task.isCompleted
            ? { ...task, pomodoroCount: task.pomodoroCount + 1 }
            : task,
        ),
      );
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        activeTaskId,
        addTask,
        updateTask,
        deleteTask,
        toggleComplete,
        setActiveTask,
        incrementPomodoroForActiveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return ctx;
};
