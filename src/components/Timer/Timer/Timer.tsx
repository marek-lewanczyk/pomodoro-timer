import { useTimer } from '@/hooks/useTimer.tsx';
import TimerModeSelector from '@/components/Timer/TimerModeSelector/TimerModeSelector.tsx';
import TimerDisplay from '@/components/Timer/TimerDisplay/TimerDisplay.tsx';
import TimerControls from '@/components/Timer/TimerControls/TimerControls.tsx';
import { useTasks } from '@/context/TaskContext.tsx';

export default function Timer() {
    const { incrementPomodoroForActiveTask } = useTasks();

    const { mode, isRunning, timeLeft, start, pause, reset, switchMode } = useTimer({
        onWorkSessionEnd: incrementPomodoroForActiveTask
    });

    return (
        <div className="flex flex-col gap-10">
            <TimerModeSelector mode={mode} onSwitchMode={switchMode} />

            <TimerDisplay timeLeft={timeLeft} mode={mode} />

            <TimerControls isRunning={isRunning} onStart={start} onPause={pause} onReset={reset} />
        </div>
    );
}
