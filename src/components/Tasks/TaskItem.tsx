import {memo, useState} from "react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/16/solid";

import {useTasks} from "@/context/TaskContext";
import TextareaField from "@/components/UI/TextareaField";
import Button from "@/components/UI/Button.tsx";
import Checkbox from "@/components/UI/CheckBox.tsx";
import TaskPomodoroCount from "@/components/Tasks/TaskPomodoroCount.tsx";
import TaskActions from "@/components/Tasks/TaskActions.tsx";
import type {TaskItemProps} from "@/types/task.ts";

function TaskItem({ task, isActive }: TaskItemProps) {
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
    <li className="w-full flex flex-col bg-secondary">
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
              className="p-1 w-auto font-vt323 text-sm bg-secondary text-primary border border-primary shadow focus:outline-none"
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
          <Button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="lg:hidden"
          >
            {isExpanded ? (
              <ChevronDownIcon className="h-8 w-8" />
            ) : (
              <ChevronUpIcon className="h-8 w-8" />
            )}
          </Button>
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

function areEqual(prev: TaskItemProps, next: TaskItemProps) {
  return (
    prev.task.id === next.task.id &&
    prev.task.title === next.task.title &&
    prev.task.isCompleted === next.task.isCompleted &&
    prev.task.pomodoroCount === next.task.pomodoroCount &&
    prev.isActive === next.isActive
  );
}

const MemoizedTaskItem = memo(TaskItem, areEqual);
MemoizedTaskItem.displayName = "TaskItem";

export default MemoizedTaskItem;
