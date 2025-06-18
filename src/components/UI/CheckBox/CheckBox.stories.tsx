import type { Meta, StoryObj } from '@storybook/react-vite';

import CheckBox from './CheckBox';

const meta = {
    component: CheckBox
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: true,
        onChange: () => {}
    }
};
