import { createContext, useContext, useEffect, useState } from 'react';
import type { PomodoroStats } from '@/types/stats.ts';

const LOCAL_STORAGE_KEY = 'pomodoroStats';

export const StatisticsContext = createContext<{
  stats: PomodoroStats;
  incrementStats: (minutes: number) => void;
}>({
  stats: {},
  incrementStats: () => {},
});

export const StatisticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [stats, setStats] = useState<PomodoroStats>({});

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) setStats(JSON.parse(saved));
  }, []);

  const incrementStats = (minutes: number) => {
    const dateKey = new Date().toISOString().split('T')[0];

    const updated = {
      ...stats,
      [dateKey]: {
        pomodoros: (stats[dateKey]?.pomodoros ?? 0) + 1,
        minutesWorked: (stats[dateKey]?.minutesWorked ?? 0) + minutes,
      },
    };

    setStats(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <StatisticsContext.Provider value={{ stats, incrementStats }}>
      {children}
    </StatisticsContext.Provider>
  );
};

export const useStatistics = () => useContext(StatisticsContext);
