import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TimerModeSelector from './TimerModeSelector.tsx';
import { describe, expect, it, vi } from 'vitest';

describe('TimerModeSelector', () => {
  it('renders all mode buttons', () => {
    render(<TimerModeSelector mode="work" onSwitchMode={() => {}} />);

    expect(screen.getByTitle('Work time')).toBeInTheDocument();
    expect(screen.getByTitle('Short break')).toBeInTheDocument();
    expect(screen.getByTitle('Long break')).toBeInTheDocument();
  });

  it('calls onSwitchMode with correct mode when buttons are clicked', async () => {
    const onSwitchMode = vi.fn();
    render(<TimerModeSelector mode="work" onSwitchMode={onSwitchMode} />);

    await userEvent.click(screen.getByTitle('Work time'));
    expect(onSwitchMode).toHaveBeenCalledWith('work');

    await userEvent.click(screen.getByTitle('Short break'));
    expect(onSwitchMode).toHaveBeenCalledWith('shortBreak');

    await userEvent.click(screen.getByTitle('Long break'));
    expect(onSwitchMode).toHaveBeenCalledWith('longBreak');

    expect(onSwitchMode).toHaveBeenCalledTimes(3);
  });
});
