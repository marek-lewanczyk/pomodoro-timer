import {useMotivationalQuote} from "@/hooks/useMotivationalQuote";

export default function Footer() {
    const quote = useMotivationalQuote(2);

    return (
        <footer className="mt-8 py-4 border-t border-black dark:border-white text-center font-vt323 text-sm text-black dark:text-white">
            <p className="px-4 italic">{quote || "..."}</p>
            <p className="mt-2">
                Made with ❤️ by <a href="https://github.com/marek-lewanczyk" target="_blank">{"Marek Lewańczyk"}</a>
            </p>
        </footer>
    );
}
