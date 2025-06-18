import { memo, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';

import { useTasks } from '@/context/TaskContext.tsx';
import TextareaField from '@/components/UI/TextareaField/TextareaField.tsx';
import Button from '@/components/UI/Button/Button.tsx';
import Checkbox from '@/components/UI/CheckBox/CheckBox.tsx';
import TaskPomodoroCount from '@/components/Tasks/TaskPomodoroCount/TaskPomodoroCount.tsx';
import TaskActions from '@/components/Tasks/TaskActions/TaskActions.tsx';
import type { TaskItemProps } from '@/types/task.ts';

function TaskItem({ task, isActive }: TaskItemProps) {
    const { updateTask, deleteTask, toggleComplete, setActiveTask } = useTasks();
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleEdit = () => {
        if (isEditing && editedTitle.trim()) {
            updateTask(task.id, editedTitle.trim());
        }
        setIsEditing(prev => !prev);
    };

    return (
        <li className="bg-secondary dark:bg-primary flex w-full flex-col">
            <div className="font-vt323 flex items-center justify-between gap-5">
                <div className="flex w-full items-center gap-3">
                    <Checkbox checked={task.isCompleted} onChange={() => toggleComplete(task.id)} />
                    {isEditing ? (
                        <TextareaField
                            name="editedTitle"
                            value={editedTitle}
                            onChange={e => setEditedTitle(e.target.value)}
                            className="font-vt323 bg-secondary border-primary dark:bg-primary dark:border-secondary dark:shadow-secondary w-auto border p-1 text-sm shadow focus:outline-none"
                        />
                    ) : (
                        <span className={`flex-1 text-justify text-sm ${task.isCompleted ? 'line-through' : ''}`}>{task.title}</span>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <TaskPomodoroCount count={task.pomodoroCount} isActive={isActive} />
                    <div className="lg:hidden">
                        <Button onClick={() => setIsExpanded(prev => !prev)}>
                            {isExpanded ? <ChevronDownIcon className="h-8 w-8" /> : <ChevronUpIcon className="h-8 w-8" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile-only options */}
            {isExpanded && (
                <div className="mt-2 flex flex-col items-end gap-4 lg:hidden">
                    <TaskActions
                        isCompleted={task.isCompleted}
                        isActive={isActive}
                        isEditing={isEditing}
                        onSetActive={() => setActiveTask(task.id)}
                        onEdit={handleEdit}
                        onDelete={() => deleteTask(task.id)}
                    />
                </div>
            )}

            {/* Desktop-only options (always visible) */}
            <div className="mt-2 hidden gap-4 lg:flex lg:flex-row lg:items-center lg:justify-end">
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
MemoizedTaskItem.displayName = 'TaskItem';

export default MemoizedTaskItem;
