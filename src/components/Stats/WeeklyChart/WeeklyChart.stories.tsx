import type { Meta, StoryObj } from '@storybook/react-vite';
import WeeklyChart from './WeeklyChart';
import { StatisticsContext } from '@/context/StatisticsContext';

const MockStatisticsProvider = ({ children }: { children: React.ReactNode }) => {
    const mockContext = {
        stats: {
            '2025-06-12': { pomodoros: 3, minutesWorked: 75 },
            '2025-06-13': { pomodoros: 2, minutesWorked: 50 },
            '2025-06-14': { pomodoros: 4, minutesWorked: 100 },
            '2025-06-15': { pomodoros: 1, minutesWorked: 25 },
            '2025-06-16': { pomodoros: 3, minutesWorked: 60 },
            '2025-06-17': { pomodoros: 5, minutesWorked: 125 },
            '2025-06-18': { pomodoros: 2, minutesWorked: 40 }
        },
        incrementStats: () => {}
    };

    return <StatisticsContext.Provider value={mockContext}>{children}</StatisticsContext.Provider>;
};

const meta: Meta<typeof WeeklyChart> = {
    title: 'Components/Stats/WeeklyChart',
    component: WeeklyChart,
    decorators: [
        Story => (
            <MockStatisticsProvider>
                <Story />
            </MockStatisticsProvider>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
