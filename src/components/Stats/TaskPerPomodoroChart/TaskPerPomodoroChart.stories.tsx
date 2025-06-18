import type { Meta, StoryObj } from '@storybook/react-vite';
import TaskPerPomodoroChart from './TaskPerPomodoroChart';
import { TaskContext } from '@/context/TaskContext';
import type { TaskContextType } from '@/types/task';

const MockTasksProvider = ({ children }: { children: React.ReactNode }) => {
    const mockContext: TaskContextType = {
        tasks: [
            { id: '1', title: 'Learn React', isCompleted: false, pomodoroCount: 3 },
            { id: '2', title: 'Write Docs', isCompleted: false, pomodoroCount: 2 }
        ],
        activeTaskId: null,
        addTask: () => {},
        updateTask: () => {},
        deleteTask: () => {},
        toggleComplete: () => {},
        setActiveTask: () => {},
        incrementPomodoroForActiveTask: () => {}
    };

    return <TaskContext.Provider value={mockContext}>{children}</TaskContext.Provider>;
};

const meta: Meta<typeof TaskPerPomodoroChart> = {
    title: 'Components/Stats/TaskPerPomodoroChart',
    component: TaskPerPomodoroChart,
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
