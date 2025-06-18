import {fireEvent, render, screen} from "@testing-library/react";
import MemoizedTaskItem from "./TaskItem";
import {vi} from "vitest";
import * as TaskContext from "@/context/TaskContext";
import type {Task} from "@/types/task";

describe("TaskItem", () => {
    const sampleTask: Task = {
        id: "task-id",
        title: "Do homework",
        isCompleted: false,
        pomodoroCount: 3,
    };

    const mockToggleComplete = vi.fn();
    const mockDeleteTask = vi.fn();
    const mockUpdateTask = vi.fn();
    const mockSetActive = vi.fn();

    beforeEach(() => {
        vi.spyOn(TaskContext, "useTasks").mockReturnValue({
            toggleComplete: mockToggleComplete,
            deleteTask: mockDeleteTask,
            updateTask: mockUpdateTask,
            setActiveTask: mockSetActive,
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("renders task title and pomodoro count", () => {
        render(<MemoizedTaskItem task={sampleTask} isActive={false} />);
        expect(screen.getByText("Do homework")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("calls toggleComplete when checkbox is clicked", () => {
        render(<MemoizedTaskItem task={sampleTask} isActive={false} />);
        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);
        expect(mockToggleComplete).toHaveBeenCalledWith("task-id");
    });
});
