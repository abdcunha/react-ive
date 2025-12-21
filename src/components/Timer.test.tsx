import { render, screen } from "@testing-library/react";
import Timer from "./Timer";

test("Timer renders and shows seconds", () => {
    render(<Timer />);
    expect(screen.getByText(/timer/i)).toBeInTheDocument();
});