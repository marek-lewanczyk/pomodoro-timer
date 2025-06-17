import {useEffect, useState} from "react";

export default function MotivationalQuote() {
    const [quote, setQuote] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://api.quotable.io/random?tags=motivational|inspirational")
            .then(res => res.json())
            .then(data => setQuote(`${data.content} — ${data.author}`))
            .catch(() =>
                setQuote("All our dreams can come true, if we have the courage to pursue them.")
            );
    }, []);

    return (
        <p className="text-center font-vt323 text-sm text-black dark:text-white italic">
            {quote ?? "Loading quote..."}
        </p>
    );
}
