import type {TimerControlsProps} from "@/types/timer.ts";
import {Cog6ToothIcon, PlayPauseIcon, XMarkIcon} from "@heroicons/react/16/solid";
import IconButton from "@/components/UI/IconButton.tsx";

export default function TimerControls({
                                          isRunning,
                                          onStart,
                                          onPause,
                                          onReset,
                                      }: TimerControlsProps) {
    return (
        <div className="flex justify-center gap-4">
            {!isRunning ? (
                <IconButton onClick={onStart} title="Start">
                    <PlayPauseIcon className="h-8 w-8" />
                </IconButton>
            ) : (
                <IconButton onClick={onPause} title="Pauza">
                    <PlayPauseIcon className="h-8 w-8" />
                </IconButton>
            )}

            <IconButton onClick={onReset} title="Resetuj ustawienia">
                <XMarkIcon className="h-8 w-8" />
            </IconButton>

            <IconButton to="/settings">
                <Cog6ToothIcon className="w-8 h-8"/>
            </IconButton>
        </div>
    )
}
