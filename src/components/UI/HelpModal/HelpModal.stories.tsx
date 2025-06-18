import type { Meta, StoryObj } from '@storybook/react-vite';

import HelpModal from './HelpModal';

const meta = {
    component: HelpModal
} satisfies Meta<typeof HelpModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onClose: () => console.log('Modal closed')
    }
};
