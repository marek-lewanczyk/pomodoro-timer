import { Suspense } from 'react';
import MotivationalQuote from '@/components/MotivationalQuote/MotivationalQuote.tsx';

export default function Footer() {
    return (
        <footer className="flex flex-col p-8 border-t border-primary text-center font-vt323 text-sm gap-2 dark:border-secondary">
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
