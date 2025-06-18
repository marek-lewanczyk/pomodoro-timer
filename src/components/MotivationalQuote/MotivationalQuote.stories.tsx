import type { Meta, StoryObj } from '@storybook/react-vite';

import MotivationalQuote from './MotivationalQuote';

const meta = {
    component: MotivationalQuote
} satisfies Meta<typeof MotivationalQuote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
