import type { Meta, StoryObj } from '@storybook/react-vite';

import TimerDisplay from './TimerDisplay';

const meta = {
    component: TimerDisplay
} satisfies Meta<typeof TimerDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        timeLeft: 0,
        mode: 'work'
    }
};
