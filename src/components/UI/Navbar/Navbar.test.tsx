import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from './Navbar.tsx';
import userEvent from '@testing-library/user-event';

vi.mock('@/components/UI/HelpModal/HelpModal.tsx', () => ({
    default: ({ onClose }: { onClose: () => void }) => (
        <div data-testid="help-modal">
            <button onClick={onClose}>Close</button>
        </div>
    )
}));

describe('Navbar', () => {
    it('renders navigation buttons', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByTitle('Timer')).toBeInTheDocument();
        expect(screen.getByTitle('Stats')).toBeInTheDocument();
        expect(screen.getByTitle('Settings')).toBeInTheDocument();
        expect(screen.getByTitle('Help')).toBeInTheDocument();
    });

    it('shows and hides HelpModal', async () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const user = userEvent.setup();
        await user.click(screen.getByTitle('Help'));
        expect(screen.getByTestId('help-modal')).toBeInTheDocument();

        await user.click(screen.getByText('Close'));
        expect(screen.queryByTestId('help-modal')).not.toBeInTheDocument();
    });

    it('marks current path as active', () => {
        render(
            <MemoryRouter initialEntries={['/statistics']}>
                <Navbar />
            </MemoryRouter>
        );

        const statsIcon = screen.getByTitle('Stats').querySelector('svg');
        expect(statsIcon).toHaveClass('text-secondary');
    });
});
