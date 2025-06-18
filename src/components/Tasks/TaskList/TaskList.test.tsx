import {render, screen} from "@testing-library/react";
import {vi} from "vitest";
import * as TaskContext from "@/context/TaskContext.tsx";
import TaskList from "./TaskList.tsx";

vi.mock("./TaskForm/TaskForm.tsx", () => ({
    default: () => <div data-testid="task-form" />,
}));

vi.mock("./TaskItem/TaskItem.tsx", () => ({
    __esModule: true,
    default: ({ task }: { task: any }) => <li data-testid="task-item">{task.title}</li>,
}));

describe("TaskList", () => {
    it("renders heading and TaskForm", () => {
        vi.spyOn(TaskContext, "useTasks").mockReturnValue({
            tasks: [],
            activeTaskId: null,
        });

        render(<TaskList />);

        expect(screen.getByText("Your Tasks")).toBeInTheDocument();
        expect(screen.getByTestId("task-form")).toBeInTheDocument();
    });

    it("renders message when there are no tasks", () => {
        vi.spyOn(TaskContext, "useTasks").mockReturnValue({
            tasks: [],
            activeTaskId: null,
        });

        render(<TaskList />);
        expect(screen.getByText(/No tasks yet/i)).toBeInTheDocument();
    });

    it("renders list of tasks when available", () => {
        const tasks = [
            { id: "1", title: "Buy milk", isCompleted: false },
            { id: "2", title: "Walk dog", isCompleted: true },
        ];

        vi.spyOn(TaskContext, "useTasks").mockReturnValue({
            tasks,
            activeTaskId: "1",
        });

        render(<TaskList />);

        expect(screen.queryByText(/No tasks yet/i)).not.toBeInTheDocument();
        expect(screen.getAllByTestId("task-item")).toHaveLength(2);
        expect(screen.getByText("Buy milk")).toBeInTheDocument();
        expect(screen.getByText("Walk dog")).toBeInTheDocument();
    });
});
