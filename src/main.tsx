import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import router from "@/router/router.tsx";
import {TasksProvider} from "@/context/TaskContext.tsx";

const root = document.getElementById('root');

createRoot(root!).render(
    <TasksProvider>
        <RouterProvider router={router} />
    </TasksProvider>
)
