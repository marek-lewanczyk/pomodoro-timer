import {memo} from "react";
import {ClipboardDocumentCheckIcon, PencilIcon, StarIcon, TrashIcon} from "@heroicons/react/16/solid";

import Button from "@/components/UI/Button.tsx";
import type {TaskActionsProps} from "@/types/task.ts";


function TaskActions({
                                        isCompleted,
                                        isActive,
                                        isEditing,
                                        onSetActive,
                                        onEdit,
                                        onDelete,
                                    }: TaskActionsProps) {
    return (
        <div className="flex flex-row justify-end gap-4 lg:flex-row">
            {!isCompleted && (
                <Button
                    onClick={onSetActive}
                    isActive={isActive}
                >
                    <StarIcon className="h-8 w-8" />
                </Button>
            )}
            <Button onClick={onEdit}>
                {isEditing ? (
                    <ClipboardDocumentCheckIcon className="h-8 w-8" />
                ) : (
                    <PencilIcon className="h-8 w-8" />
                )}
            </Button>
            <Button onClick={onDelete}>
                <TrashIcon className="h-8 w-8" />
            </Button>
        </div>
    );
}

const MemoizedTaskActions = memo(TaskActions);
MemoizedTaskActions.displayName = "TaskActions";

export default MemoizedTaskActions;
