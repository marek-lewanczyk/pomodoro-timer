import type { TimerModeSelectorProps } from "@/types/timer.ts";
import {BriefcaseIcon, PauseIcon, SparklesIcon} from "@heroicons/react/16/solid";

export default function TimerModeSelector({ onSwitchMode }: TimerModeSelectorProps) {
    return (
        <div className="flex justify-center space-x-4 mb-4">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => onSwitchMode("work")}
            >
                <BriefcaseIcon className="h-8 w-8" />
            </button>
            <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => onSwitchMode("shortBreak")}
            >
                <PauseIcon className="h-8 w-8" />
            </button>
            <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => onSwitchMode("longBreak")}
            >
                <SparklesIcon className="h-8 w-8" />
            </button>
        </div>
    );
}
