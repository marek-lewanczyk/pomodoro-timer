import { render, screen } from '@testing-library/react';
import TaskPomodoroCount from './TaskPomodoroCount.tsx';

describe('TaskPomodoroCount', () => {
    it('renders count and academic cap icon', () => {
        const { container } = render(<TaskPomodoroCount count={3} isActive={false} />);

        expect(screen.getByText('3')).toBeInTheDocument();

        const svgs = container.querySelectorAll('svg');
        expect(svgs.length).toBe(1);
    });

    it('renders star icon when active', () => {
        const { container } = render(<TaskPomodoroCount count={5} isActive={true} />);

        const svgs = container.querySelectorAll('svg');
        expect(svgs.length).toBe(2);
    });

    it('does not render star icon when not active', () => {
        const { container } = render(<TaskPomodoroCount count={2} isActive={false} />);

        const svgs = container.querySelectorAll('svg');
        expect(svgs.length).toBe(1);
    });
});
