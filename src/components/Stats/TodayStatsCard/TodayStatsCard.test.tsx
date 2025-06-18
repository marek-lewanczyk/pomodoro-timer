import {render, screen} from "@testing-library/react";
import TodayStatsCard from "./TodayStatsCard.tsx";

describe("TodayStatsCard", () => {
    it("renders pomodoros and minutes worked", () => {
        render(<TodayStatsCard pomodoros={5} minutesWorked={125} />);

        expect(screen.getByText(/Pomodoros completed today:/i)).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();

        const timeParagraph = screen.getByText((content, node) => {
            const hasText = content.includes("Total time:") && node?.textContent?.includes("125");
            return hasText;
        });

        expect(timeParagraph).toBeInTheDocument();
    });
});
