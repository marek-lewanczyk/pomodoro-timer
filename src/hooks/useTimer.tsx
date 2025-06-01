import { useEffect, useRef, useState } from "react";

import type { TimerMode, TimerConfig } from "@/types/timer.ts";

export function useTimer(config?: TimerConfig) {
    const workDuration = (config?.workDuration ?? 25) * 60; // Default to 25 minutes in seconds
    const shortBreakDuration = (config?.shortBreakMinutes ?? 5) * 60; // Default to 5 minutes in seconds
    const longBreakDuration = (config?.longBreakMinutes ?? 15) * 60; // Default to 15 minutes in seconds

    const [mode, setMode] = useState<TimerMode>("work");
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(workDuration);
    const [worksSessions, setWorkSessions] = useState<number>(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const getDuration = (mode: TimerMode): number => {
        switch (mode) {
            case "work": return workDuration;
            case "shortBreak": return shortBreakDuration;
            case "longBreak": return longBreakDuration;
        }
    }

    const start = () => {
        if (isRunning) return;

        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev === 1) {
                    handleEndOfWorkSession();
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);
    }

    const pause = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setIsRunning(false);
    }

    const reset = () => {
        pause();
        setTimeLeft(getDuration(mode ?? "work"));
    }

    const switchMode = (newMode: TimerMode) => {
        pause();
        setMode(newMode);
        setTimeLeft(getDuration(newMode));
    }

    const handleEndOfWorkSession = () => {
        if (mode === "work") {
            const nextCount = worksSessions + 1;
            setWorkSessions(nextCount);

            if (nextCount >= 4) {
                switchMode("longBreak");
                setWorkSessions(0);
            } else {
                switchMode("shortBreak");
            }
        } else {
            switchMode("work");
        }
    }
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    }, []);

    return {
        mode,
        isRunning,
        timeLeft,
        start,
        pause,
        reset,
        switchMode,
    }
}
