import Navbar from '@/components/UI/Navbar/Navbar.tsx';
import Footer from '@/components/UI/Footer/Footer.tsx';
import AnimatedOutlet from '@/components/AnimatedOutlet/AnimatedOutlet.tsx';

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-secondary dark:bg-primary text-primary dark:text-secondary">
            <header className="p-6 text-center font-pixel text-4xl uppercase">Pomodoro Timer</header>
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
