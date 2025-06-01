import type {TimerControlsProps} from "@/types/timer.ts";

export default function TimerControls({
                                          isRunning,
                                          onStart,
                                          onPause,
                                          onReset,
                                      }: TimerControlsProps) {
    return (
        <div className="flex gap-4">
            {!isRunning ? (
                <button
                    onClick={onStart}
                    className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    Start
                </button>
            ) : (
                <button
                    onClick={onPause}
                    className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                    Pause
                </button>
            )}

            <button
                onClick={onReset}
                className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
            >
                Reset
            </button>
        </div>
    )
}
