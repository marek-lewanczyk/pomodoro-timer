import { useTasks } from '@/context/TaskContext'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

export default function TaskList() {
    const { tasks, activeTaskId } = useTasks()

    return (
        <div className="max-w-xl mx-auto mt-8">
            <TaskForm />

            {tasks.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
                    No tasks yet. Add one above!
                </p>
            ) : (
                <ul className="space-y-3">
                    {tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            isActive={task.id === activeTaskId}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}
