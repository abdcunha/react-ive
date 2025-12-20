import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders ThemeSwitcher", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /theme/i })).toBeInTheDocument();
});