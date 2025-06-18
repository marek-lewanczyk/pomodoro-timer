import type { TimerModeSelectorProps } from '@/types/timer.ts';
import { BriefcaseIcon, PauseIcon, SparklesIcon } from '@heroicons/react/16/solid';
import Button from '@/components/UI/Button/Button.tsx';
import { memo } from 'react';

function TimerModeSelector({ mode, onSwitchMode }: TimerModeSelectorProps) {
  return (
    <div className="flex justify-center gap-4">
      <Button onClick={() => onSwitchMode('work')} isActive={mode === 'work'} title="Work time">
        <BriefcaseIcon className="h-8 w-8" />
      </Button>

      <Button
        onClick={() => onSwitchMode('shortBreak')}
        isActive={mode === 'shortBreak'}
        title="Short break"
      >
        <PauseIcon className="h-8 w-8" />
      </Button>

      <Button
        onClick={() => onSwitchMode('longBreak')}
        isActive={mode === 'longBreak'}
        title="Long break"
      >
        <SparklesIcon className="h-8 w-8" />
      </Button>
    </div>
  );
}

const MemoizedTimerModeSelector = memo(TimerModeSelector);
MemoizedTimerModeSelector.displayName = 'TimerModeSelector';

export default MemoizedTimerModeSelector;
