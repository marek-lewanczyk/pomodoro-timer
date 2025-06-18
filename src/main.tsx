import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from '@/router/router.tsx';
import { TasksProvider } from '@/context/TaskContext.tsx';
import { SettingsProvider } from '@/context/SettingsContext.tsx';
import { StatisticsProvider } from '@/context/StatisticsContext.tsx';
import { NotificationProvider } from '@/context/NotificationContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = document.getElementById('root');

const rawSettings = localStorage.getItem('settings');
if (rawSettings) {
    try {
        const parsed = JSON.parse(rawSettings);
        const root = document.documentElement;
        root.classList.remove('light', 'dark');

        if (parsed.theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.classList.add(prefersDark ? 'dark' : 'light');
        } else {
            root.classList.add(parsed.theme);
        }
    } catch (e) {
        console.error('Invalid theme settings', e);
    }
}

createRoot(root!).render(
    <QueryClientProvider client={new QueryClient()}>
        <SettingsProvider>
            <NotificationProvider>
                <StatisticsProvider>
                    <TasksProvider>
                        <RouterProvider router={router} />
                    </TasksProvider>
                </StatisticsProvider>
            </NotificationProvider>
        </SettingsProvider>
    </QueryClientProvider>
);
