import type { Meta, StoryObj } from '@storybook/react-vite';

import TaskActions from './TaskActions';

const meta = {
    component: TaskActions
} satisfies Meta<typeof TaskActions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isCompleted: true,
        isActive: true,
        isEditing: true,
        onSetActive: () => {},
        onEdit: () => {},
        onDelete: () => {}
    }
};
