import {AcademicCapIcon, StarIcon} from "@heroicons/react/16/solid";

interface PomodoroCountProps {
    count: number;
    isActive: boolean;
}

export default function TaskPomodoroCount({ count, isActive }: PomodoroCountProps) {
    return (
        <span className="flex flex-row gap-2 items-center text-xs text-black">
      {count}
            <AcademicCapIcon className="inline h-4 w-4" />
            {isActive && <StarIcon className="h-4 w-4 text-black lg:hidden" />}
    </span>
    );
}
