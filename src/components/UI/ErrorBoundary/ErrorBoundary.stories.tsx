import type { Meta, StoryObj } from '@storybook/react-vite';

import ErrorBoundary from './ErrorBoundary';

const meta = {
  component: ErrorBoundary,
} satisfies Meta<typeof ErrorBoundary>;

export default meta;

type Story = StoryObj<typeof meta>;

const BrokenComponent = () => {
  throw new Error('This is a broken component');
};

export const Default: Story = {
  args: {
    children: <BrokenComponent />,
  },
};
