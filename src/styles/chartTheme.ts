export const getChartTheme = (): {
    fontFamily: string;
    fontSize: number;
    border: string;
    color_gray: string;
    color_primary: string;
    color_secondary: string;
} => {
    let theme = "light";

    try {
        const settings = JSON.parse(localStorage.getItem("settings") || "{}");
        if (settings.theme === "dark") theme = "dark";
    } catch {
        // fallback: default to light
    }

    return theme === "dark"
        ? {
            fontFamily: "VT323",
            fontSize: 14,
            border: "2px solid #faf9f6",
            color_gray: "#666",
            color_primary: "#faf9f6",     // jasny tekst
            color_secondary: "#352f36",  // ciemne tło
        }
        : {
            fontFamily: "VT323",
            fontSize: 14,
            border: "2px solid #352f36",
            color_gray: "#999",
            color_primary: "#352f36",     // ciemny tekst
            color_secondary: "#faf9f6",   // jasne tło
        };
};
