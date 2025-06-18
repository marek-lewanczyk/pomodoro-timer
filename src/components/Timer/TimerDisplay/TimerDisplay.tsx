import type { TimerDisplayProps } from '@/types/timer.ts';
import { memo } from 'react';

function TimerDisplay({ timeLeft, mode }: TimerDisplayProps) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const padded = (n: number) => n.toString().padStart(2, '0');

    return (
        <div className={`flex flex-col items-center justify-center`}>
            <h2 className="font-vt323 mb-1 text-3xl uppercase">
                {mode === 'work' && 'Focus Time'}
                {mode === 'shortBreak' && 'Short Break'}
                {mode === 'longBreak' && 'Long Break'}
            </h2>
            <div className="font-pixel flex items-center justify-center text-4xl tracking-widest">
                {padded(minutes)} : {padded(seconds)}
            </div>
        </div>
    );
}

function areEqual(prev: TimerDisplayProps, next: TimerDisplayProps) {
    return prev.timeLeft === next.timeLeft && prev.mode === next.mode;
}

const MemoizedTimerDisplay = memo(TimerDisplay, areEqual);
MemoizedTimerDisplay.displayName = 'TimerDisplay';

export default MemoizedTimerDisplay;
