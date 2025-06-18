import Timer from "@/components/Timer/Timer/Timer.tsx";
import ErrorBoundary from "@/components/UI/ErrorBoundary/ErrorBoundary.tsx";
import {lazy, Suspense} from "react";
import {LoadingScreen} from "@/components/UI/LoadingScreen/LoadingScreen.tsx";

const TaskList = lazy(() => import("@/components/Tasks/TaskList/TaskList.tsx"));


export default function TimerPage() {
    return (
        <div className="flex flex-col gap-8">
            <ErrorBoundary>
                <Timer />
            </ErrorBoundary>
            <Suspense fallback={<LoadingScreen />}>
                <TaskList />
            </Suspense>
        </div>
    );
}
