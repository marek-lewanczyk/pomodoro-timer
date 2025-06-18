import type { Meta, StoryObj } from '@storybook/react-vite';
import TaskForm from './TaskForm';
import { TaskContext } from '@/context/TaskContext';
import type { TaskContextType } from '@/types/task';

const MockTasksProvider = ({ children }: { children: React.ReactNode }) => {
    const mockContext: TaskContextType = {
        tasks: [],
        activeTaskId: null,
        addTask: (title: string) => console.log('✅ Mock addTask:', title),
        updateTask: () => {},
        deleteTask: () => {},
        toggleComplete: () => {},
        setActiveTask: () => {},
        incrementPomodoroForActiveTask: () => {}
    };

    return <TaskContext.Provider value={mockContext}>{children}</TaskContext.Provider>;
};

const meta: Meta<typeof TaskForm> = {
    title: 'Components/Tasks/TaskForm',
    component: TaskForm,
    decorators: [
        Story => (
            <MockTasksProvider>
                <Story />
            </MockTasksProvider>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
