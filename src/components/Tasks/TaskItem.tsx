import {useState} from "react";
import type {Task} from "@/types/task";
import {useTasks} from "@/context/TaskContext";
import {
    AcademicCapIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    ClipboardDocumentCheckIcon,
    PencilIcon,
    StarIcon,
    TrashIcon,
} from "@heroicons/react/16/solid";

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
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleComplete(task.id)}
            className="appearance-none w-6 h-6 border border-black bg-white checked:bg-black checked:border-black checked:text-white cursor-pointer shadow-[3px_3px_0px_black] transition duration-100"
          />
          {isEditing ? (
            <textarea
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="p-1 w-full resize-y font-vt323 text-sm bg-white text-black border border-black shadow-[3px_3px_0px_black] focus:outline-none focus:ring-2 focus:ring-black"
              autoFocus
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
          {/* Licznik */}
          <span className="flex flex-row gap-2 items-center text-xs text-black">
            {task.pomodoroCount}
            <AcademicCapIcon className="inline h-4 w-4" />
            {isActive && <StarIcon className="h-4 w-4 text-black lg:hidden" />}
          </span>

          {/* Przycisk rozwijania tylko na mobile */}
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-2 font-pixel text-sm bg-white text-black border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white lg:hidden"
          >
            {isExpanded ? (
              <ChevronDownIcon className={"h-8 w-8"} />
            ) : (
              <ChevronUpIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Licznik + ikony */}
      <div
        className={`mt-2 gap-4 flex-col lg:flex-row lg:items-center lg:justify-end ${
          isExpanded ? "flex flex-row items-center justify-end" : "hidden"
        } lg:flex`}
      >
        {/* Ikony */}
        <div className="flex flex-row justify-end gap-4 lg:flex-row">
          {!task.isCompleted && (
            <button
              onClick={() => setActiveTask(task.id)}
              className={`p-2 font-pixel text-sm border border-black shadow-[3px_3px_0px_black] ${
                isActive
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              <StarIcon className="h-8 w-8" />
            </button>
          )}
          <button
            onClick={handleEdit}
            className="p-2 font-pixel text-sm bg-white text-black border border-black shadow-[3px_3px_0px_black] hover:bg-black hover:text-white"
          >
            {isEditing ? (
              <ClipboardDocumentCheckIcon className="h-8 w-8" />
            ) : (
              <PencilIcon className="h-8 w-8" />
            )}
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="p-2 font-pixel text-sm bg-white text-black border border-black shadow-[3px_3px_0px_black] hover:bg-black hover:text-white"
          >
            <TrashIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </li>
  );
}
