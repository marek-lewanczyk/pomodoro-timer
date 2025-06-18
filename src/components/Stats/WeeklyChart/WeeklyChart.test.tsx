import {render, screen} from "@testing-library/react";
import WeeklyChart from "./WeeklyChart";
import {StatisticsProvider} from "@/context/StatisticsContext.tsx";

describe("WeeklyChart", () => {
    it("renders chart heading", () => {
        render(
            <StatisticsProvider>
                <WeeklyChart />
            </StatisticsProvider>
        );

        const heading = screen.getByText(/Last 7 days/i);
        expect(heading).toBeInTheDocument();
    });
});
