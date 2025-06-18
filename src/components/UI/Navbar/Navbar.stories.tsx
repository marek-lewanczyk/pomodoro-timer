import type { Meta, StoryObj } from '@storybook/react-vite';
import Navbar from './Navbar';
import { createMemoryRouter, RouterProvider } from 'react-router';

// 🔧 Utwórz tymczasowy router do Storybooka
const router = createMemoryRouter(
  [
    { path: '/', element: <Navbar /> },
    { path: '/statistics', element: <Navbar /> },
    { path: '/settings', element: <Navbar /> },
  ],
  { initialEntries: ['/'] },
);

const meta: Meta<typeof Navbar> = {
  title: 'Components/UI/Navbar', // ← To pole jest wymagane
  component: Navbar,
  decorators: [
    (Story) => (
      <RouterProvider router={router}>
        <Story />
      </RouterProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
