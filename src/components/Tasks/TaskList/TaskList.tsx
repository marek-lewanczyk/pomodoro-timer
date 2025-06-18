import { useTasks } from '@/context/TaskContext.tsx';
import TaskForm from '../TaskForm/TaskForm.tsx';
import TaskItem from '../TaskItem/TaskItem.tsx';

export default function TaskList() {
  const { tasks, activeTaskId } = useTasks();

  return (
    <div className="w-full mx-auto p-8 flex flex-col gap-4">
      <h2 className="font-vt323 text-2xl text-center">Your Tasks</h2>

      <TaskForm />

      {tasks.length === 0 ? (
        <p className="font-vt323 text-center">No tasks yet. Add one above!</p>
      ) : (
        <ul className="space-y-6">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              isActive={task.id === activeTaskId && !task.isCompleted}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
