import { useTasks } from "@/context/TaskContext";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks, activeTaskId } = useTasks();

  return (
    <div className="w-full mx-auto p-8 flex flex-col gap-4">
      <h2 className="font-vt323 text-2xl text-center text-black">Your Tasks</h2>

      <TaskForm />

      {tasks.length === 0 ? (
        <p className="font-vt323 text-center text-black">
          No tasks yet. Add one above!
        </p>
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
