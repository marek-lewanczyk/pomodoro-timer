import {useState} from 'react'
import {useTasks} from '@/context/TaskContext'
import {PlusIcon} from "@heroicons/react/16/solid";

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
        <form onSubmit={handleSubmit} className="w-full flex gap-4">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="New task"
                className="w-full p-2 font-vt323 bg-white text-black border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none  focus:ring-white placeholder-white"
            />
            <button
                type="submit"
                className="p-2 font-pixel text-sm bg-white text-black border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white"
            >
                <PlusIcon className="h-8 w-8" />
            </button>
        </form>
    )
}
