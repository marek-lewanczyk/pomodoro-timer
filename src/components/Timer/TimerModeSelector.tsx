import type {TimerModeSelectorProps} from "@/types/timer.ts";
import {BriefcaseIcon, PauseIcon, SparklesIcon} from "@heroicons/react/16/solid";
import clsx from "clsx";

export default function TimerModeSelector({ mode, onSwitchMode }: TimerModeSelectorProps) {
    const baseClasses =
        "p-2 font-pixel text-sm border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition";

    return (
        <div className="flex justify-center gap-4">
            <button
                className={clsx(
                    baseClasses,
                    mode === "work" ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"
                )}
                onClick={() => onSwitchMode("work")}
            >
                <BriefcaseIcon className="h-8 w-8" />
            </button>

            <button
                className={clsx(
                    baseClasses,
                    mode === "shortBreak" ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"
                )}
                onClick={() => onSwitchMode("shortBreak")}
            >
                <PauseIcon className="h-8 w-8" />
            </button>

            <button
                className={clsx(
                    baseClasses,
                    mode === "longBreak" ? "bg-black text-white" : "bg-white text-black hover:bg-black hover:text-white"
                )}
                onClick={() => onSwitchMode("longBreak")}
            >
                <SparklesIcon className="h-8 w-8" />
            </button>
        </div>
    );
}
