import {fireEvent, render, screen} from "@testing-library/react";
import HelpModal from "./HelpModal.tsx";

describe("HelpModal", () => {
    beforeEach(() => {
        const modalRoot = document.createElement("div");
        modalRoot.setAttribute("id", "modal-root");
        document.body.appendChild(modalRoot);
    });

    afterEach(() => {
        const modalRoot = document.getElementById("modal-root");
        if (modalRoot) modalRoot.remove();
    });

    it("renders modal content", () => {
        render(<HelpModal onClose={() => {}} />);
        expect(screen.getByText("How does it work?")).toBeInTheDocument();
    });

    it("calls onClose when clicking backdrop", () => {
        const handleClose = vi.fn();
        render(<HelpModal onClose={handleClose} />);
        fireEvent.click(screen.getByTestId("backdrop"));
        expect(handleClose).toHaveBeenCalled();
    });

    it("does NOT call onClose when clicking inside modal", () => {
        const handleClose = vi.fn();
        render(<HelpModal onClose={handleClose} />);
        fireEvent.click(screen.getByTestId("modal-content"));
        expect(handleClose).not.toHaveBeenCalled();
    });

    it("closes when clicking close button", () => {
        const handleClose = vi.fn();
        render(<HelpModal onClose={handleClose} />);
        fireEvent.click(screen.getByLabelText("Close"));
        expect(handleClose).toHaveBeenCalled();
    });
});
