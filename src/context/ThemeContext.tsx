import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme, toggle: () => void } | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children}) => {
    const [theme, setTheme] = useState<Theme>("light");
    const toggle = () => setTheme();
};