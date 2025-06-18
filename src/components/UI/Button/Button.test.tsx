import {fireEvent, render, screen} from "@testing-library/react";
import Button from "./Button.tsx";
import {MemoryRouter} from "react-router";

describe("Button", () => {
    it("renders children text", () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("calls onClick when clicked", () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click</Button>);
        fireEvent.click(screen.getByText("Click"));
        expect(handleClick).toHaveBeenCalled();
    });

    it("renders as a NavLink when `to` is provided", () => {
        render(
            <MemoryRouter>
                <Button to="/test">Go to test</Button>
            </MemoryRouter>
        );
        const link = screen.getByRole("link", { name: /go to test/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/test");
    });

    it("applies active class when isActive is true", () => {
        render(<Button isActive>Active</Button>);
        const btn = screen.getByRole("button", { name: /active/i });
        expect(btn).toHaveClass("bg-primary", "text-secondary");
    });

    it("applies inactive class when isActive is false", () => {
        render(<Button isActive={false}>Inactive</Button>);
        const btn = screen.getByRole("button", { name: /inactive/i });
        expect(btn).toHaveClass("bg-secondary", "text-primary");
    });
});
