import { render, screen } from "@testing-library/react";
import ExpensiveCalculation from "./ExpensiveCalculation";

test("ExpensiveCalculation renders result", () => {
    render(<ExpensiveCalculation />);
    expect(screen.getByText(/factorial/i)).toBeInTheDocument();
});