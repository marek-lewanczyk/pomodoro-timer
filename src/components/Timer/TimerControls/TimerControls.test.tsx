import { fireEvent, render, screen } from '@testing-library/react';
import TimerControls from './TimerControls.tsx';
import { describe, expect, it, vi } from 'vitest';

describe('TimerControls', () => {
    it('renders Start and Reset buttons when timer is not running', () => {
        const onStart = vi.fn();
        const onReset = vi.fn();

        render(<TimerControls isRunning={false} onStart={onStart} onPause={vi.fn()} onReset={onReset} />);

        expect(screen.getByTitle('Start')).toBeInTheDocument();
        expect(screen.getByTitle('Reset')).toBeInTheDocument();

        fireEvent.click(screen.getByTitle('Start'));
        expect(onStart).toHaveBeenCalled();

        fireEvent.click(screen.getByTitle('Reset'));
        expect(onReset).toHaveBeenCalled();
    });

    it('renders Pause and Reset buttons when timer is running', () => {
        const onPause = vi.fn();
        const onReset = vi.fn();

        render(<TimerControls isRunning={true} onStart={vi.fn()} onPause={onPause} onReset={onReset} />);

        expect(screen.getByTitle('Pause')).toBeInTheDocument();
        expect(screen.getByTitle('Reset')).toBeInTheDocument();

        fireEvent.click(screen.getByTitle('Pause'));
        expect(onPause).toHaveBeenCalled();

        fireEvent.click(screen.getByTitle('Reset'));
        expect(onReset).toHaveBeenCalled();
    });
});
