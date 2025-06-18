// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';
import { AcademicCapIcon } from '@heroicons/react/16/solid';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextButton: Story = {
  args: {
    children: 'Click me',
    title: 'Text Button',
    isActive: false,
    type: 'button',
    onClick: () => console.log('clicked'),
  },
};

export const IconButton: Story = {
  args: {
    ...TextButton.args,
    children: <AcademicCapIcon className="h-8 w-8" />,
    title: 'Icon Button',
  },
};

export const ActiveTextButton: Story = {
  args: {
    ...TextButton.args,
    isActive: true,
    title: 'Active Text Button',
  },
};
