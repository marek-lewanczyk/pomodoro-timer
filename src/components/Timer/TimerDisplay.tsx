import type {TimerDisplayProps} from "@/types/timer.ts";

export default function TimerDisplay({ timeLeft, mode }: TimerDisplayProps) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const padded = (n: number) => n.toString().padStart(2, "0");

  return (
    <div
      className={`flex flex-col items-center justify-center`}
    >
      <h2 className="font-vt323 text-3xl uppercase mb-1">
        {mode === "work" && "Focus Time"}
        {mode === "shortBreak" && "Short Break"}
        {mode === "longBreak" && "Long Break"}
      </h2>
      <div className="flex justify-center items-center font-pixel text-4xl tracking-widest">
        {padded(minutes)} : {padded(seconds)}
      </div>
    </div>
  );
}
