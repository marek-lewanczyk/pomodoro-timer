import Navbar from '@/components/UI/Navbar/Navbar.tsx';
import Footer from '@/components/UI/Footer/Footer.tsx';
import AnimatedOutlet from '@/components/AnimatedOutlet/AnimatedOutlet.tsx';

export default function MainLayout() {
    return (
        <div className="bg-secondary dark:bg-primary text-primary dark:text-secondary flex min-h-screen flex-col justify-between">
            <header className="font-pixel p-6 text-center text-4xl uppercase">Pomodoro Timer</header>
            <Navbar />

            <main className="container mx-auto flex-grow px-4 py-8">
                <AnimatedOutlet />
            </main>

            <footer className="py-4">
                <Footer />
            </footer>
        </div>
    );
}
