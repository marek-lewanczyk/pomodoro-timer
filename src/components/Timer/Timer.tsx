import {useTimer} from "@/hooks/useTimer.tsx";
import TimerModeSelector from "@/components/Timer/TimerModeSelector.tsx";
import TimerDisplay from "@/components/Timer/TimerDisplay.tsx";
import TimerControls from "@/components/Timer/TimerControls.tsx";
import {useTasks} from "@/context/TaskContext.tsx";

export default function Timer() {
    const { incrementPomodoroForActiveTask } = useTasks();

    const { mode, isRunning, timeLeft, start, pause, reset, switchMode } = useTimer({
        onWorkSessionEnd: incrementPomodoroForActiveTask
    });
    return (
        <>
            <TimerModeSelector onSwitchMode={switchMode} />

            <TimerDisplay timeLeft={timeLeft} mode={mode} />

            <TimerControls
                isRunning={isRunning}
                onStart={start}
                onPause={pause}
                onReset={reset}
            />
        </>
    )
}
