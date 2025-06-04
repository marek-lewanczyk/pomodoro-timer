import TaskForm from './TaskForm'
import TaskItem from './TaskItem'
import { useTasks } from '@/hooks/useTasks'

export default function TaskList() {
    const {
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleComplete,
    } = useTasks()

    return (
        <div className="max-w-xl mx-auto mt-8">
            <TaskForm onAdd={addTask} />

            {tasks.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">
                    No tasks yet. Add one above!
                </p>
            ) : (
                <ul className="space-y-3">
                    {tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={toggleComplete}
                            onDelete={deleteTask}
                            onUpdate={updateTask}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}
