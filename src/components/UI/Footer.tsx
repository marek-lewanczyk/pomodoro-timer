import {Suspense} from "react";
import MotivationalQuote from "@/components/MotivationalQuote.tsx";

export default function Footer() {
    return (
        <footer className="mt-8 py-4 border-t border-black dark:border-white text-center font-vt323 text-sm text-black dark:text-white">
            <Suspense fallback={<p className="px-4 italic">Loading quote...</p>}>
                <MotivationalQuote />
            </Suspense>
            <p className="mt-2">
                Made with ❤️ by <a href="https://github.com/marek-lewanczyk" target="_blank">{"Marek Lewańczyk"}</a>
            </p>
        </footer>
    );
}
