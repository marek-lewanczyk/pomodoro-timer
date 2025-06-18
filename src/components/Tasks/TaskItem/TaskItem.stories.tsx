import type { Meta, StoryObj } from '@storybook/react';
import TaskItem from './TaskItem';
import { TaskContext } from '@/context/TaskContext';
import type { Task, TaskContextType } from '@/types/task';

const mockTask: Task = {
  id: '1',
  title: 'Write Storybook setup',
  isCompleted: false,
  pomodoroCount: 3,
};

const MockTasksProvider = ({ children }: { children: React.ReactNode }) => {
  const mockContext: TaskContextType = {
    tasks: [mockTask],
    activeTaskId: null,
    addTask: () => {},
    updateTask: (id, title) => console.log('updateTask', id, title),
    deleteTask: (id) => console.log('deleteTask', id),
    toggleComplete: (id) => console.log('toggleComplete', id),
    setActiveTask: (id) => console.log('setActiveTask', id),
    incrementPomodoroForActiveTask: () => {},
  };

  return <TaskContext.Provider value={mockContext}>{children}</TaskContext.Provider>;
};

const meta: Meta<typeof TaskItem> = {
  title: 'Components/Tasks/TaskItem',
  component: TaskItem,
  decorators: [
    (Story) => (
      <MockTasksProvider>
        <ul className="max-w-md mx-auto p-4">
          <Story />
        </ul>
      </MockTasksProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TaskItem>;

export const Default: Story = {
  args: {
    task: mockTask,
    isActive: false,
  },
};
