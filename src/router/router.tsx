import { createBrowserRouter } from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import TimerPage from '@/pages/TimerPage';
import SettingsPage from '@/pages/SettingsPage';
import StatisticsPage from '@/pages/StatisticsPage';
import ErrorBoundary from '@/components/UI/ErrorBoundary/ErrorBoundary.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <TimerPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'statistics',
        element: <StatisticsPage />,
      },
    ],
  },
]);

export default router;
