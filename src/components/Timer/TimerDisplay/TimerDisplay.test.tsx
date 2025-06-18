import { render, screen } from '@testing-library/react';
import TimerDisplay from './TimerDisplay';
import { describe, expect, it } from 'vitest';

describe('TimerDisplay', () => {
  it('displays correct title based on mode', () => {
    render(<TimerDisplay timeLeft={1500} mode="work" />);
    expect(screen.getByText('Focus Time')).toBeInTheDocument();

    render(<TimerDisplay timeLeft={1500} mode="shortBreak" />);
    expect(screen.getByText('Short Break')).toBeInTheDocument();

    render(<TimerDisplay timeLeft={1500} mode="longBreak" />);
    expect(screen.getByText('Long Break')).toBeInTheDocument();
  });

  it('displays time in MM : SS format', () => {
    render(<TimerDisplay timeLeft={1500} mode="work" />);
    expect(screen.getByText('25 : 00')).toBeInTheDocument();

    render(<TimerDisplay timeLeft={65} mode="shortBreak" />);
    expect(screen.getByText('01 : 05')).toBeInTheDocument();

    render(<TimerDisplay timeLeft={9} mode="longBreak" />);
    expect(screen.getByText('00 : 09')).toBeInTheDocument();
  });
});
