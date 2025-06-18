import {useQuery} from "@tanstack/react-query";

export default function MotivationalQuote() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["motivationalQuote"],
        queryFn: async () => {
            const res = await fetch("https://api.quotable.io/random?tags=motivational|inspirational");
            if (!res.ok) throw new Error("Failed to fetch quote");
            const data = await res.json();
            return `${data.content} — ${data.author}`;
        },
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) return <p className="text-center italic text-sm">Loading...</p>;
    if (isError) return <p className="text-center italic text-sm">Keep going! 💪</p>;

    return (
        <p className="text-center italic text-sm font-vt323">
            {data}
        </p>
    );
}

// import {useEffect, useState} from "react";
//
// export default function MotivationalQuote() {
//     const [quote, setQuote] = useState<string | null>(null);
//
//     useEffect(() => {
//         fetch("https://api.quotable.io/random?tags=motivational|inspirational")
//             .then(res => res.json())
//             .then(data => setQuote(`${data.content} — ${data.author}`))
//             .catch(() =>
//                 setQuote("All our dreams can come true, if we have the courage to pursue them.")
//             );
//     }, []);
//
//     return (
//         <p className="text-center font-vt323 text-sm text-black dark:text-white italic">
//             {quote ?? "Loading quote..."}
//         </p>
//     );
// }
