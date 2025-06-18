import type { Meta, StoryObj } from '@storybook/react-vite';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router';

const meta: Meta<typeof Navbar> = {
  title: 'Components/UI/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
