import Timer from "@/components/Timer/Timer.tsx";
import TaskList from "@/components/Tasks/TaskList.tsx";

function App() {
  return (
      <div className="min-h-screen min-w-screen flex flex-col justify-start gap-10">
          <h1 className="font-pixel text-4xl text-center p-8 uppercase">Pomodoro Timer</h1>
          <main className="grid grid-cols-1">
              <Timer />
              <TaskList />
          </main>
      </div>
  )
}

export default App
