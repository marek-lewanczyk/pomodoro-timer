import Timer from '@/components/Timer/Timer/Timer.tsx';
import TaskList from '@/components/Tasks/TaskList/TaskList.tsx';
import Footer from '@/components/UI/Footer/Footer.tsx';
import ErrorBoundary from '@/components/UI/ErrorBoundary/ErrorBoundary.tsx';

function App() {
    return (
        <div className="flex min-h-screen min-w-screen flex-col justify-start gap-5 dark:bg-gray-950">
            <h1 className="font-pixel p-8 text-center text-4xl uppercase">Pomodoro Timer</h1>
            <main className="grid grid-cols-1">
                <ErrorBoundary>
                    <Timer />
                </ErrorBoundary>
                <TaskList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
