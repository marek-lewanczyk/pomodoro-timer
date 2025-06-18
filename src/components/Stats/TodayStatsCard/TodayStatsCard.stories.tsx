import type { Meta, StoryObj } from '@storybook/react-vite';

import TodayStatsCard from './TodayStatsCard';

const meta = {
    component: TodayStatsCard
} satisfies Meta<typeof TodayStatsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        pomodoros: 0,
        minutesWorked: 0
    }
};
