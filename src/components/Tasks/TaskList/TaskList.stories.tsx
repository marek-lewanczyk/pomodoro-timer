import type { Meta, StoryObj } from '@storybook/react';
import TaskList from './TaskList';
import { TaskContext } from '@/context/TaskContext';
import type { Task, TaskContextType } from '@/types/task';

const mockTasks: Task[] = [
    { id: '1', title: 'Create wireframe', isCompleted: false, pomodoroCount: 2 },
    { id: '2', title: 'Write documentation', isCompleted: true, pomodoroCount: 3 }
];

const MockTasksProvider = ({ children }: { children: React.ReactNode }) => {
    const mockContext: TaskContextType = {
        tasks: mockTasks,
        activeTaskId: '1',
        addTask: () => {},
        updateTask: () => {},
        deleteTask: () => {},
        toggleComplete: () => {},
        setActiveTask: () => {},
        incrementPomodoroForActiveTask: () => {}
    };

    return <TaskContext.Provider value={mockContext}>{children}</TaskContext.Provider>;
};

const meta: Meta<typeof TaskList> = {
    title: 'Components/Tasks/TaskList',
    component: TaskList,
    decorators: [
        Story => (
            <MockTasksProvider>
                <div className="max-w-xl mx-auto p-4">
                    <Story />
                </div>
            </MockTasksProvider>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {};
