import type {TimerModeSelectorProps} from "@/types/timer.ts";
import {BriefcaseIcon, PauseIcon, SparklesIcon} from "@heroicons/react/16/solid";
import IconButton from "@/components/UI/IconButton";
import clsx from "clsx";

export default function TimerModeSelector({ mode, onSwitchMode }: TimerModeSelectorProps) {
    return (
        <div className="flex justify-center gap-4">
            <IconButton
                onClick={() => onSwitchMode("work")}
                className={clsx(
                    mode === "work"
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-black hover:text-white"
                )}
                title="Tryb pracy"
            >
                <BriefcaseIcon className="h-8 w-8" />
            </IconButton>

            <IconButton
                onClick={() => onSwitchMode("shortBreak")}
                className={clsx(
                    mode === "shortBreak"
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-black hover:text-white"
                )}
                title="Krótka przerwa"
            >
                <PauseIcon className="h-8 w-8" />
            </IconButton>

            <IconButton
                onClick={() => onSwitchMode("longBreak")}
                className={clsx(
                    mode === "longBreak"
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-black hover:text-white"
                )}
                title="Długa przerwa"
            >
                <SparklesIcon className="h-8 w-8" />
            </IconButton>
        </div>
    );
}
