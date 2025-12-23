import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Counter increments and decrements", () => {
    render(<Counter />);
    const incBtn = screen.getByRole("button", { name: "+" });
    const decBtn = screen.getByRole("button", { name: "-" });
    const value = screen.getByRole("paragraph");
    
    expect(value).toHaveTextContent("0");
    fireEvent.click(incBtn);
    expect(value).toHaveTextContent("1");
    fireEvent.click(decBtn);
    expect(value).toHaveTextContent("0");

});