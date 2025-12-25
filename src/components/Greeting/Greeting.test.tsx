import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting/Greeting";

test("Greeting displays a message", () => {
    render(<Greeting name="world!" />);
    expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
});