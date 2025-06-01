import type {TimerDisplayProps} from "@/types/timer.ts";

export default function TimerDisplay({ timeLeft, mode }: TimerDisplayProps) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const padded = (n: number) => n.toString().padStart(2, '0')

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold capitalize mb-4">
                {mode === "work" && "Focus Time"}
                {mode === "shortBreak" && "Short Break"}
                {mode === "longBreak" && "Long Break"}
            </h2>
            <div className="text-6xl font-mono tracking-widest">
                {padded(minutes)} : {padded(seconds)}
            </div>
        </div>
    )
}
