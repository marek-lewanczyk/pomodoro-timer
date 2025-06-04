import type {TimerControlsProps} from "@/types/timer.ts";
import {PlayPauseIcon, XMarkIcon} from "@heroicons/react/16/solid";

export default function TimerControls({
                                          isRunning,
                                          onStart,
                                          onPause,
                                          onReset,
                                      }: TimerControlsProps) {
    return (
        <div className="flex justify-center gap-4">
            {!isRunning ? (
                <button
                    onClick={onStart}
                    className="p-2 font-pixel text-sm bg-white text-black border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white"
                >
                    <PlayPauseIcon className="h-8 w-8" />
                </button>
            ) : (
                <button
                    onClick={onPause}
                    className="p-2 font-pixel text-sm bg-black text-white border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white"
                >
                    <PlayPauseIcon className="h-8 w-8" />
                </button>
            )}

            <button
                onClick={onReset}
                className="p-2 font-pixel text-sm bg-white text-black border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white"
            >
                <XMarkIcon className="h-8 w-8" />
            </button>
        </div>
    )
}
