import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher: React.FC = () => {
    const { theme, toggle } = useTheme();

    return (
        <div>
            <span>Current theme: {theme}</span>
            <button onClick={toggle}>Toggle Theme</button>
        </div>
    );
};

export default ThemeSwitcher;