import { useState } from 'react'

interface TaskFormProps {
    onAdd: (title: string) => void
}

export default function TaskForm({ onAdd }: TaskFormProps) {
    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const trimmed = title.trim()
        if (!trimmed) return

        onAdd(trimmed)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
            >
                Add
            </button>
        </form>
    )
}
