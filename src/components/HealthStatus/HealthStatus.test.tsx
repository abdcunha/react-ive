import { render, screen } from "@testing-library/react";
import HealthStatus from "./HealthStatus";

test("HealthStatus displays status", () => {
    render(
        <HealthStatus
            health={null}
            error={""}
            loading={false} 
        />
    );
    expect(screen.getByText(/health status/i)).toBeInTheDocument();
});