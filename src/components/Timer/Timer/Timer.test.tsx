import { render, screen } from '@testing-library/react';
import Timer from './Timer.tsx';
import { vi } from 'vitest';

vi.mock('@/hooks/useTimer.tsx', () => ({
    useTimer: () => ({
        mode: 'work',
        isRunning: false,
        timeLeft: 1500, // 25:00
        start: vi.fn(),
        pause: vi.fn(),
        reset: vi.fn(),
        switchMode: vi.fn()
    })
}));

vi.mock('@/context/TaskContext.tsx', () => ({
    useTasks: () => ({
        incrementPomodoroForActiveTask: vi.fn()
    })
}));

describe('Timer', () => {
    it('renders the timer with correct mode and time', () => {
        render(<Timer />);

        expect(screen.getByText((_, node) => node?.textContent?.replace(/\s/g, '') === '25:00')).toBeInTheDocument();

        expect(screen.getByText(/focus time/i)).toBeInTheDocument();
    });

    it('renders control buttons', () => {
        render(<Timer />);

        expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
    });
});
