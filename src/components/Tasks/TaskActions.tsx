import IconButton from "@/components/UI/IconButton.tsx";
import {ClipboardDocumentCheckIcon, PencilIcon, StarIcon, TrashIcon} from "@heroicons/react/16/solid";

interface TaskActionsProps {
    isCompleted: boolean;
    isActive: boolean;
    isEditing: boolean;
    onSetActive: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

export default function TaskActions({
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
                <IconButton
                    onClick={onSetActive}
                    className={
                        isActive
                            ? "bg-black text-white"
                            : "bg-white text-black hover:bg-black hover:text-white"
                    }
                >
                    <StarIcon className="h-8 w-8" />
                </IconButton>
            )}
            <IconButton onClick={onEdit}>
                {isEditing ? (
                    <ClipboardDocumentCheckIcon className="h-8 w-8" />
                ) : (
                    <PencilIcon className="h-8 w-8" />
                )}
            </IconButton>
            <IconButton onClick={onDelete}>
                <TrashIcon className="h-8 w-8" />
            </IconButton>
        </div>
    );
}
