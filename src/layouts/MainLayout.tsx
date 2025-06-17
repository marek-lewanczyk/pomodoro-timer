import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import AnimatedOutlet from "@/components/AnimatedOutlet.tsx";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col justify-between dark:bg-gray-950">
            <header className="p-6 text-center font-pixel text-4xl uppercase">
                Pomodoro Timer
            </header>
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                <AnimatedOutlet />
            </main>

            <footer className="py-4">
                <Footer />
            </footer>
        </div>
    );
}
