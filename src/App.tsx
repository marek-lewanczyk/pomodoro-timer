import Timer from "@/components/Timer/Timer.tsx";
import TaskList from "@/components/Tasks/TaskList.tsx";
import {Link} from "react-router";

function App() {
  return (
      <div className="min-h-screen min-w-screen flex flex-col justify-start gap-10 dark:bg-gray-950">
          <h1 className="font-pixel text-4xl text-center p-8 uppercase dark:text-white">Pomodoro Timer</h1>
          <main className="grid grid-cols-1">
              <Timer />
              <TaskList />
          </main>
          <Link to="/settings" className="font-pixel text-sm p-2 border border-black shadow-[3px_3px_0px_black] hover:bg-black hover:text-white" />
      </div>
  )
}

export default App
