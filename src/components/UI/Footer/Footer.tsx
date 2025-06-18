import { Suspense } from 'react';
import MotivationalQuote from '@/components/MotivationalQuote/MotivationalQuote.tsx';

export default function Footer() {
    return (
        <footer className="border-primary font-vt323 dark:border-secondary flex flex-col gap-2 border-t p-8 text-center text-sm">
            <Suspense fallback={<p className="px-4 italic">Loading quote...</p>}>
                <MotivationalQuote />
            </Suspense>
            <p>
                Made with ❤️ by{' '}
                <a href="https://github.com/marek-lewanczyk" target="_blank" rel="noreferrer">
                    {'Marek Lewańczyk'}
                </a>
            </p>
        </footer>
    );
}
