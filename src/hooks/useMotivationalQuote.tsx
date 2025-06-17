import {useEffect, useState} from "react";

export function useMotivationalQuote(refreshMinutes = 5) {
    const [quote, setQuote] = useState<string | null>(null);

    const fetchQuote = () => {
        fetch("https://api.quotable.io/random?tags=motivational|inspirational")
            .then(res => res.json())
            .then(data => setQuote(`${data.content} — ${data.author}`))
            .catch(() => setQuote("The best way to predict your future is to create it. — Peter Drucker"));
    };

    useEffect(() => {
        fetchQuote();

        const interval = setInterval(fetchQuote, refreshMinutes * 60 * 1000);

        return () => clearInterval(interval);
    }, [refreshMinutes]);

    return quote;
}
