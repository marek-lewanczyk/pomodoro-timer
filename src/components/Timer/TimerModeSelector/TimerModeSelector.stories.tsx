import type { Meta, StoryObj } from '@storybook/react-vite';

import TimerModeSelector from './TimerModeSelector';

const meta = {
  component: TimerModeSelector,
} satisfies Meta<typeof TimerModeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "work",
    onSwitchMode: () => {}
  }
};