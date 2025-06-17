import type {TimerModeSelectorProps} from "@/types/timer.ts";
import {BriefcaseIcon, PauseIcon, SparklesIcon} from "@heroicons/react/16/solid";
import Button from "@/components/UI/Button.tsx";
import clsx from "clsx";
import {memo} from "react";

function TimerModeSelector({ mode, onSwitchMode }: TimerModeSelectorProps) {
    return (
        <div className="flex justify-center gap-4">
            <Button
                onClick={() => onSwitchMode("work")}
                className={clsx(
                    mode === "work"
                        ? "bg-black text-white"
                        : "bg-white text-black"
                )}
                title="Tryb pracy"
            >
                <BriefcaseIcon className="h-8 w-8" />
            </Button>

            <Button
                onClick={() => onSwitchMode("shortBreak")}
                className={clsx(
                    mode === "shortBreak"
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-black hover:text-white"
                )}
                title="Krótka przerwa"
            >
                <PauseIcon className="h-8 w-8" />
            </Button>

            <Button
                onClick={() => onSwitchMode("longBreak")}
                className={clsx(
                    mode === "longBreak"
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-black hover:text-white"
                )}
                title="Długa przerwa"
            >
                <SparklesIcon className="h-8 w-8" />
            </Button>
        </div>
    );
}

const MemoizedTimerModeSelector = memo(TimerModeSelector);
MemoizedTimerModeSelector.displayName = "TimerModeSelector";

export default MemoizedTimerModeSelector;
