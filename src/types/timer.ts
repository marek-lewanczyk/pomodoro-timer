export type TimerMode = 'work' | 'longBreak' | 'shortBreak';

export interface TimerConfig {
  workDuration?: number;
  shortBreakMinutes?: number;
  longBreakMinutes?: number;
  onWorkSessionEnd?: () => void;
}

export interface TimerModeSelectorProps {
  mode: TimerMode;
  onSwitchMode: (mode: TimerMode) => void;
}

export interface TimerDisplayProps {
  timeLeft: number;
  mode: TimerMode;
}

export interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}
