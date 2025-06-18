import type { Settings } from '@/types/settings.ts';
import { createContext, useContext, useState } from 'react';

const defaultSettings: Settings = {
    workDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
    soundEnabled: true,
    soundVolume: 50,
    theme: 'system'
};

function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue];
}

const SettingsContext = createContext<{
    settings: Settings;
    updateSettings: (newSettings: Partial<Settings>) => void;
}>({
    settings: defaultSettings,
    updateSettings: () => {}
});

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [settings, setSettings] = useLocalStorage<Settings>('settings', defaultSettings);

    const updateSettings = (newSettings: Partial<Settings>) => {
        if (Object.keys(newSettings).length === 0) return;
        setSettings(prev => ({ ...prev, ...newSettings }));
    };

    return <SettingsContext.Provider value={{ settings, updateSettings }}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
    const ctx = useContext(SettingsContext);
    if (!ctx) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return ctx;
};
