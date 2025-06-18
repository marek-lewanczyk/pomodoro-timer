import type { TimerControlsProps } from '@/types/timer.ts';
import { PlayPauseIcon, XMarkIcon } from '@heroicons/react/16/solid';
import Button from '@/components/UI/Button/Button.tsx';
import { memo } from 'react';

function TimerControls({ isRunning, onStart, onPause, onReset }: TimerControlsProps) {
    return (
        <div className="flex justify-center gap-4">
            {!isRunning ? (
                <Button onClick={onStart} title="Start">
                    <PlayPauseIcon className="h-8 w-8" />
                </Button>
            ) : (
                <Button onClick={onPause} title="Pause">
                    <PlayPauseIcon className="h-8 w-8" />
                </Button>
            )}

            <Button onClick={onReset} title="Reset">
                <XMarkIcon className="h-8 w-8" />
            </Button>
        </div>
    );
}

const MemoizedTimerControls = memo(TimerControls);
MemoizedTimerControls.displayName = 'TimerControls';

export default MemoizedTimerControls;
