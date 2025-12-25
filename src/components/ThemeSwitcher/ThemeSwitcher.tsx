import React from "react";
import { useTheme } from "../../context/useTheme";
import "./ThemeSwitcher.css";

const ThemeSwitcher: React.FC = () => {
    const { theme, toggle } = useTheme();

    return (
        <div>
            <button onClick={toggle} className="theme-toggle-button">{theme === "dark" ? "☀️" :  "🌙"}</button>
        </div>
    );
};

export default ThemeSwitcher;