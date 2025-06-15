import {useState} from "react";
import TextareaField from "@/components/UI/TextareaField";
import type {Task} from "@/types/task";
import {useTasks} from "@/context/TaskContext";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/16/solid";
import IconButton from "@/components/UI/IconButton";
import Checkbox from "@/components/UI/CheckBox.tsx";
import TaskPomodoroCount from "@/components/Tasks/TaskPomodoroCount.tsx";
import TaskActions from "@/components/Tasks/TaskActions.tsx";

interface Props {
  task: Task;
  isActive: boolean;
}

export default function TaskItem({ task, isActive }: Props) {
  const { updateTask, deleteTask, toggleComplete, setActiveTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleEdit = () => {
    if (isEditing && editedTitle.trim()) {
      updateTask(task.id, editedTitle.trim());
    }
    setIsEditing((prev) => !prev);
  };

  return (
    <li className="w-full flex flex-col bg-white">
      {/* Główna linia z checkboxem i tytułem */}
      <div className="font-vt323 flex justify-between items-center gap-5">
        <div className="w-full flex items-center gap-3">
          <Checkbox
            checked={task.isCompleted}
            onChange={() => toggleComplete(task.id)}
          />
          {isEditing ? (
            <TextareaField
              name="editedTitle"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="p-1 w-full resize-y font-vt323 text-sm bg-white text-black border border-black shadow-[3px_3px_0px_black] focus:outline-none focus:ring-2 focus:ring-black dark:border-white dark:bg-black dark:text-white dark:shadow-[3px_3px_0px_white]"
            />
          ) : (
            <span
              className={`flex-1 text-sm text-justify ${
                task.isCompleted ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <TaskPomodoroCount count={task.pomodoroCount} isActive={isActive} />
          <IconButton
            onClick={() => setIsExpanded((prev) => !prev)}
            className="lg:hidden"
          >
            {isExpanded ? (
              <ChevronDownIcon className="h-8 w-8" />
            ) : (
              <ChevronUpIcon className="h-8 w-8" />
            )}
          </IconButton>
        </div>
      </div>

      <div
        className={`mt-2 gap-4 flex-col lg:flex-row lg:items-center lg:justify-end ${
          isExpanded ? "flex flex-row items-center justify-end" : "hidden"
        } lg:flex`}
      >
        <TaskActions
          isCompleted={task.isCompleted}
          isActive={isActive}
          isEditing={isEditing}
          onSetActive={() => setActiveTask(task.id)}
          onEdit={handleEdit}
          onDelete={() => deleteTask(task.id)}
        />
      </div>
    </li>
  );
}
