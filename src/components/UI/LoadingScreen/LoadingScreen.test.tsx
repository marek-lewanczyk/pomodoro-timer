import {render, screen} from "@testing-library/react";
import {LoadingScreen} from "./LoadingScreen.tsx";

describe("LoadingScreen", () => {
    it("renders 3 loading squares", () => {
        render(<LoadingScreen />);
        const squares = screen.getAllByTestId("loading-square");
        expect(squares).toHaveLength(3);
    });

    it("each square has correct class and style", () => {
        render(<LoadingScreen />);
        const squares = screen.getAllByTestId("loading-square");

        for (const square of squares) {
            expect(square).toHaveClass("w-6 h-6 bg-primary");
            expect(square).toHaveStyle({ imageRendering: "pixelated" });
        }
    });
});
