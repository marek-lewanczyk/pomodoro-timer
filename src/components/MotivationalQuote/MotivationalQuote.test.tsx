import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MotivationalQuote from './MotivationalQuote.tsx';

const createTestClient = () => new QueryClient({ defaultOptions: { queries: { retry: false } } });

describe('MotivationalQuote', () => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('displays loading text', () => {
        (fetch as any).mockImplementation(() => new Promise(() => {})); // never resolves
        render(
            <QueryClientProvider client={createTestClient()}>
                <MotivationalQuote />
            </QueryClientProvider>
        );
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('displays error fallback on fetch failure', async () => {
        (fetch as any).mockRejectedValue(new Error('API Error'));
        render(
            <QueryClientProvider client={createTestClient()}>
                <MotivationalQuote />
            </QueryClientProvider>
        );

        await waitFor(() => expect(screen.getByText(/keep going/i)).toBeInTheDocument());
    });

    it('displays the quote on success', async () => {
        (fetch as any).mockResolvedValue({
            ok: true,
            json: async () => ({
                content: 'Stay hungry, stay foolish.',
                author: 'Steve Jobs'
            })
        });

        render(
            <QueryClientProvider client={createTestClient()}>
                <MotivationalQuote />
            </QueryClientProvider>
        );

        await waitFor(() => expect(screen.getByText(/stay hungry, stay foolish.*Steve Jobs/i)).toBeInTheDocument());
    });
});
