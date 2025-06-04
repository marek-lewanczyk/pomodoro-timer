import { useState } from 'react'
import type { Task } from '@/types/task'
import { useTasks } from '@/context/TaskContext'

interface Props {
    task: Task
    isActive: boolean
}

export default function TaskItem({ task, isActive }: Props) {
    const {
        updateTask,
        deleteTask,
        toggleComplete,
        setActiveTask
    } = useTasks()

    const [isEditing, setIsEditing] = useState(false)
    const [editedTitle, setEditedTitle] = useState(task.title)

    const handleEdit = () => {
        if (isEditing && editedTitle.trim()) {
            updateTask(task.id, editedTitle.trim())
        }
        setIsEditing(prev => !prev)
    }

    return (
        <li className="flex items-center justify-between p-3 border rounded bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => toggleComplete(task.id)}
                    className="w-5 h-5"
                />

                {isEditing ? (
                    <input
                        value={editedTitle}
                        onChange={e => setEditedTitle(e.target.value)}
                        className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-sm"
                        autoFocus
                    />
                ) : (
                    <span
                        className={`text-sm ${
                            task.isCompleted ? 'line-through text-gray-400' : ''
                        }`}
                    >
            {task.title}
          </span>
                )}
            </div>

            <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-300">
          {task.pomodoroCount} pomodoro
        </span>
                {!task.isCompleted && (
                    <button
                        onClick={() => setActiveTask(task.id)}
                        className={`text-xs px-2 py-1 rounded border ${
                            isActive
                                ? 'border-blue-500 text-blue-500 font-bold'
                                : 'border-gray-400 text-gray-500'
                        }`}
                    >
                        {isActive ? 'Active' : 'Set active'}
                    </button>
                )}
                <button
                    onClick={handleEdit}
                    className="text-xs text-blue-500 hover:underline"
                >
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button
                    onClick={() => deleteTask(task.id)}
                    className="text-xs text-red-500 hover:underline"
                >
                    Delete
                </button>
            </div>
        </li>
    )
}
