import { useState } from 'react'
import { useTasks } from '@/context/TaskContext'

export default function TaskForm() {
    const [title, setTitle] = useState('')
    const { addTask } = useTasks()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (title.trim()) {
            addTask(title.trim())
            setTitle('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="New task"
                className="flex-1 px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    )
}
