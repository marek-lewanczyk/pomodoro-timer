import Timer from "@/components/Timer/Timer.tsx";
import TaskList from "@/components/Tasks/TaskList.tsx";

function App() {
  return (
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">
          <section>
              <Timer />
          </section>
          <section>
              <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
              <TaskList />
          </section>
      </main>
  )
}

export default App
