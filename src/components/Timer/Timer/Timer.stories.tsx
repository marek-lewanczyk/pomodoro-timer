import type { Meta, StoryObj } from '@storybook/react';
import Timer from './Timer';
import { TaskContext } from '@/context/TaskContext';
import type { TaskContextType } from '@/types/task';

// 🔧 Mockowany provider
const MockTasksProvider = ({ children }: { children: React.ReactNode }) => {
  const mockContext: TaskContextType = {
    tasks: [{ id: '1', title: 'Design UI', isCompleted: false, pomodoroCount: 2 }],
    activeTaskId: '1',
    addTask: () => {},
    updateTask: () => {},
    deleteTask: () => {},
    toggleComplete: () => {},
    setActiveTask: () => {},
    incrementPomodoroForActiveTask: () => {
      console.log('Mock: Pomodoro incremented');
    },
  };

  return <TaskContext.Provider value={mockContext}>{children}</TaskContext.Provider>;
};

const meta: Meta<typeof Timer> = {
  title: 'Components/Timer/Timer',
  component: Timer,
  decorators: [
    (Story) => (
      <MockTasksProvider>
        <div className="max-w-md mx-auto p-4">
          <Story />
        </div>
      </MockTasksProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Timer>;

export const Default: Story = {};
