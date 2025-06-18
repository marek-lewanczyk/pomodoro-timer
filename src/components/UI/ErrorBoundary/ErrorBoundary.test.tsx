import {render, screen} from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary.tsx";
import {vi} from "vitest";

function ProblematicComponent() {
    throw new Error("Test error");
}

describe("ErrorBoundary", () => {
    it("renders child component when no error", () => {
        render(
            <ErrorBoundary>
                <div>Safe content</div>
            </ErrorBoundary>
        );
        expect(screen.getByText("Safe content")).toBeInTheDocument();
    });

    it("catches error and renders fallback UI", () => {
        vi.spyOn(console, "error").mockImplementation(() => {});

        render(
            <ErrorBoundary>
                <ProblematicComponent />
            </ErrorBoundary>
        );

        expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
        expect(screen.getByText("Test error")).toBeInTheDocument();

        vi.restoreAllMocks();
    });
});
