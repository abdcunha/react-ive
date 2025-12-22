import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../types/Theme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem("theme");
        return stored === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};