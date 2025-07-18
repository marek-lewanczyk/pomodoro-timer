import { useEffect, useRef, useState } from 'react';

import type { TimerConfig, TimerMode } from '@/types/timer.ts';
import { useSettings } from '@/context/SettingsContext.tsx';
import { useSound } from '@/hooks/useSound.tsx';
import { useStatistics } from '@/context/StatisticsContext.tsx';
import { useNotification } from '@/context/NotificationContext.tsx';

export function useTimer(config?: TimerConfig) {
    const { settings } = useSettings();
    const { incrementStats } = useStatistics();
    const { showNotification } = useNotification();

    const workDuration = settings.workDuration * 60; // Default to 25 minutes in seconds
    const shortBreakDuration = settings.shortBreakDuration * 60; // Default to 5 minutes in seconds
    const longBreakDuration = settings.longBreakDuration * 60; // Default to 15 minutes in seconds

    // const workDuration = (0.05) * 60; // Default to 25 minutes in seconds
    // const shortBreakDuration = (0.05) * 60; // Default to 5 minutes in seconds
    // const longBreakDuration = (0.05) * 60; // Default to 15 minutes in seconds

    const [mode, setMode] = useState<TimerMode>('work');
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(workDuration);
    const [worksSessions, setWorkSessions] = useState<number>(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const volume = settings.soundVolume / 100;

    const playWorkEnd = useSound('/sounds/work_end.mp3', volume);
    const playShortBreakEnd = useSound('/sounds/shortbreak_end.mp3', volume);
    const playLongBreakEnd = useSound('/sounds/longbreak_end.mp3', volume);

    const getDuration = (mode: TimerMode): number => {
        switch (mode) {
            case 'work':
                return workDuration;
            case 'shortBreak':
                return shortBreakDuration;
            case 'longBreak':
                return longBreakDuration;
        }
    };

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
            });
        }, 1000);
    };

    const pause = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setIsRunning(false);
    };

    const reset = () => {
        pause();
        setTimeLeft(getDuration(mode ?? 'work'));
    };

    const switchMode = (newMode: TimerMode) => {
        pause();
        setMode(newMode);
        setTimeLeft(getDuration(newMode));
    };

    const handleEndOfWorkSession = () => {
        if (mode === 'work') {
            config?.onWorkSessionEnd?.();

            if (settings.soundEnabled) playWorkEnd();
            showNotification('🎉 Great job! Time for a break.');

            incrementStats(workDuration / 60);

            const nextCount = worksSessions + 1;
            setWorkSessions(nextCount);

            if (nextCount >= 4) {
                switchMode('longBreak');
                setWorkSessions(0);
            } else {
                switchMode('shortBreak');
            }
        } else if (mode === 'shortBreak') {
            if (settings.soundEnabled) playShortBreakEnd();
            showNotification('🧠 Ready for the next session? Let’s get started!');
            switchMode('work');
        } else if (mode === 'longBreak') {
            if (settings.soundEnabled) playLongBreakEnd();
            showNotification('💪 You’ve completed the entire cycle! Well done!');
            switchMode('work');
        }
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return {
        mode,
        isRunning,
        timeLeft,
        start,
        pause,
        reset,
        switchMode
    };
}
