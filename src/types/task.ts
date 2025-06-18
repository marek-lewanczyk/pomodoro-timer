export interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
    pomodoroCount: number;
}

export interface TaskContextType {
    tasks: Task[];
    activeTaskId: string | null;
    addTask: (title: string) => void;
    updateTask: (id: string, newTitle: string) => void;
    deleteTask: (id: string) => void;
    toggleComplete: (id: string) => void;
    setActiveTask: (id: string) => void;
    incrementPomodoroForActiveTask: () => void;
}

export interface TaskActionsProps {
    isCompleted: boolean;
    isActive: boolean;
    isEditing: boolean;
    onSetActive: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

export interface TaskItemProps {
    task: Task;
    isActive: boolean;
}

export interface TaskPomodoroCountProps {
    count: number;
    isActive: boolean;
}
