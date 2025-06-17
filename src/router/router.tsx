import {createBrowserRouter} from "react-router";
import App from "@/App.tsx";
import SettingsPage from "@/pages/SettingsPage.tsx";
import StatisticsPage from "@/pages/StatisticsPage.tsx";
import ErrorBoundary from "@/components/UI/ErrorBoundary.tsx"; // dodaj ten import

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorBoundary/>
    },
    {
        path: "/settings",
        element: <SettingsPage/>,
        errorElement: <ErrorBoundary />, // opcjonalnie dla tej trasy
    },
    {
        path: "/statistics",
        element: <StatisticsPage/>,
        errorElement: <ErrorBoundary />, // opcjonalnie
    },
]);

export default router;
