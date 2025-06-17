import Timer from "@/components/Timer/Timer";
import ErrorBoundary from "@/components/UI/ErrorBoundary";
import {lazy, Suspense} from "react";
import {LoadingScreen} from "@/components/UI/LoadingScreen";

const TaskList = lazy(() => import("@/components/Tasks/TaskList"));


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
