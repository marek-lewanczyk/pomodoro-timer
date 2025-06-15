import {createBrowserRouter} from "react-router";

import App from "@/App.tsx";
import SettingsPage from "@/pages/SettingsPage.tsx";
import StatisticsPage from "@/pages/StatisticsPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/settings",
        Component: SettingsPage,
    },
    {
        path: "/statistics",
        Component: StatisticsPage,
    }
])

export default router;
