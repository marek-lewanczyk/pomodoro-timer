import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import router from "@/router/router.tsx";

const root = document.getElementById('root');

createRoot(root!).render(
    <RouterProvider router={router} />
)
