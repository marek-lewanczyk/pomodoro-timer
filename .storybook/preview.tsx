import type { Preview } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../src/index.css';

// 1. Inicjalizacja react-query clienta
const queryClient = new QueryClient();

if (typeof window !== 'undefined') {
  const existing = document.getElementById('modal-root');
  if (!existing) {
    const div = document.createElement('div');
    div.setAttribute('id', 'modal-root');
    document.body.appendChild(div);
  }
}

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
