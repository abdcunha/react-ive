import { render, screen } from "@testing-library/react";
import WindowWidth from "./WindowWidth";

test("WindowWidth displays a window", () => {
    render(<WindowWidth />);
    expect(screen.getByText(/window width:/i)).toBeInTheDocument();
});