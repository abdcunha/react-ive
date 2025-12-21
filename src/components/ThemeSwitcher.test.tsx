import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "../context/ThemeProvider";

test("ThemeSwitcher toggles theme", () => {
    render(
    <ThemeProvider>
        <ThemeSwitcher />
    </ThemeProvider>);
    const btn = screen.getByRole("button", { name: /theme/i});
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
});