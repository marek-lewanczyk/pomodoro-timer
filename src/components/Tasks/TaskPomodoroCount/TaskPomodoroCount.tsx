import { memo } from 'react';

import { AcademicCapIcon, StarIcon } from '@heroicons/react/16/solid';
import type { TaskPomodoroCountProps } from '@/types/task.ts';

function TaskPomodoroCount({ count, isActive }: TaskPomodoroCountProps) {
    return (
        <span className="flex flex-row gap-2 items-center text-xs">
            {count}
            <AcademicCapIcon className="inline h-4 w-4" />
            {isActive && <StarIcon className="h-4 w-4 lg:hidden" />}
        </span>
    );
}

const MemoizedTaskPomodoroCount = memo(TaskPomodoroCount);
MemoizedTaskPomodoroCount.displayName = 'TaskPomodoroCount';

export default MemoizedTaskPomodoroCount;
