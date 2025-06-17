import Timer from "@/components/Timer/Timer.tsx";
import TaskList from "@/components/Tasks/TaskList.tsx";
import Footer from "@/components/Footer.tsx";
import Button from "@/components/UI/Button.tsx";
import {useState} from "react";
import HelpModal from "@/components/HelpModal.tsx";
import {ChartBarIcon, Cog6ToothIcon, InformationCircleIcon,} from "@heroicons/react/16/solid";

function App() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-start gap-5 dark:bg-gray-950">
      <h1 className="font-pixel text-4xl text-center p-8 uppercase">
        Pomodoro Timer
      </h1>
      <div className="flex justify-center gap-4">
        <Button to="/statistics">
          <ChartBarIcon className="h-8 w-8" />
        </Button>

        <Button to="/settings">
          <Cog6ToothIcon className="w-8 h-8" />
        </Button>

        <Button onClick={() => setShowHelp(true)} title="Help">
          <InformationCircleIcon className="h-8 w-8" />
        </Button>
      </div>
      <main className="grid grid-cols-1">
        <Timer />
        <TaskList />
      </main>
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}

      <Footer />
    </div>
  );
}

export default App;
