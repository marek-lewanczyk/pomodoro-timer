import type {TimerControlsProps} from "@/types/timer.ts";
import {PlayPauseIcon, XMarkIcon} from "@heroicons/react/16/solid";
import Button from "@/components/UI/Button.tsx";

export default function TimerControls({
                                          isRunning,
                                          onStart,
                                          onPause,
                                          onReset,
                                      }: TimerControlsProps) {
    return (
        <div className="flex justify-center gap-4">
            {!isRunning ? (
                <Button onClick={onStart} title="Start">
                    <PlayPauseIcon className="h-8 w-8" />
                </Button>
            ) : (
                <Button onClick={onPause} title="Pauza">
                    <PlayPauseIcon className="h-8 w-8" />
                </Button>
            )}

            <Button onClick={onReset} title="Resetuj ustawienia">
                <XMarkIcon className="h-8 w-8" />
            </Button>
        </div>
    )
}
