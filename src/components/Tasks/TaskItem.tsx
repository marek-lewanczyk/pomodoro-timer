import { useState } from 'react'
import type { Task } from '@/types/task'

interface TaskItemProps {
    task: Task
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    onUpdate: (id: string, title: string) => void
}

export default function TaskItem({ task, onToggle, onDelete, onUpdate }: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedTitle, setEditedTitle] = useState(task.title)

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (isEditing) {
            onUpdate(task.id, editedTitle.trim() || task.title)
        }
        setIsEditing(prev => !prev)
    }

    return (
        <li className="flex items-center justify-between gap-4 p-3 bg-white dark:bg-gray-800 border rounded shadow-sm">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => !isEditing && onToggle(task.id)}
                    disabled={isEditing}
                    className="w-5 h-5"
                    title={isEditing ? 'Disable while editing' : 'Mark as done'}
                />

                {isEditing ? (
                    <input
                        value={editedTitle}
                        onChange={e => setEditedTitle(e.target.value)}
                        className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-sm w-48"
                        autoFocus
                    />
                ) : (
                    <span
                        className={`text-sm ${task.isCompleted ? 'line-through text-gray-400' : ''}`}
                    >
            {task.title}
          </span>
                )}
            </div>

            <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-300">
          {task.pomodoroCount} pomodoro
        </span>
                <button
                    onClick={handleEdit}
                    className="text-blue-500 hover:underline text-xs"
                >
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-500 hover:underline text-xs"
                >
                    Delete
                </button>
            </div>
        </li>
    )
}
