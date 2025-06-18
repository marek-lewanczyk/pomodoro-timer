import type { Meta, StoryObj } from '@storybook/react-vite';

import TimerControls from './TimerControls';

const meta = {
  component: TimerControls,
} satisfies Meta<typeof TimerControls>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isRunning: true,
    onStart: () => {},
    onPause: () => {},
    onReset: () => {}
  }
};