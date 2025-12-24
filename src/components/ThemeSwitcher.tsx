import React from "react";
import { useTheme } from "../context/useTheme";

const ThemeSwitcher: React.FC = () => {
    const { theme, toggle } = useTheme();

    return (
        <div>
            <button onClick={toggle}>{theme === "dark" ? "☀️" :  "🌙"}</button>
        </div>
    );
};

export default ThemeSwitcher;