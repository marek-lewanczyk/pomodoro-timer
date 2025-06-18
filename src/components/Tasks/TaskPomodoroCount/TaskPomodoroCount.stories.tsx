import type { Meta, StoryObj } from '@storybook/react-vite';

import TaskPomodoroCount from './TaskPomodoroCount';

const meta = {
  component: TaskPomodoroCount,
} satisfies Meta<typeof TaskPomodoroCount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 0,
    isActive: true
  }
};