import {useState} from 'react'
import {useTasks} from '@/context/TaskContext'
import {PlusIcon} from "@heroicons/react/16/solid";
import IconButton from "@/components/UI/IconButton.tsx";

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
            <IconButton type="submit" title="Dodaj">
                <PlusIcon className="h-8 w-8" />
            </IconButton>
        </form>
    )
}
