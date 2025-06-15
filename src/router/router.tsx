import {createBrowserRouter} from "react-router";

import App from "@/App.tsx";
import SettingsPage from "@/pages/SettingsPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/settings",
        Component: SettingsPage,
    }
])

export default router;
