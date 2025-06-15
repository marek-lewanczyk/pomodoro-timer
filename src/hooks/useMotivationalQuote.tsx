import {useEffect, useState} from "react";

export function useMotivationalQuote(refreshMinutes = 5) {
    const [quote, setQuote] = useState<string | null>(null);

    const fetchQuote = () => {
        fetch("https://api.quotable.io/random?tags=motivational|inspirational")
            .then(res => res.json())
            .then(data => setQuote(`${data.content} — ${data.author}`))
            .catch(() => setQuote("Bądź zmianą, którą chcesz zobaczyć w świecie."));
    };

    useEffect(() => {
        fetchQuote(); // pobierz na start

        const interval = setInterval(fetchQuote, refreshMinutes * 60 * 1000);

        return () => clearInterval(interval); // wyczyść po unmount
    }, [refreshMinutes]);

    return quote;
}
