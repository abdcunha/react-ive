import type { HealthStatusProps } from "../types/HealthStatusProps";

export const HealthStatus = ({ health, error, loading }: HealthStatusProps) => {
    if (loading) {
        return (
            <div className="card">
                <h2>Backend Health Status</h2>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="card">
                <h2>Backend Health Status</h2>
                <p style={{ color: "red" }}>{error}</p>
            </div>
        );
    }

    return (
        <div className="card">
            <h2>Backend Health Status</h2>
            <div>
                <p>Status: {health?.status}</p>
                <p>Last Updated: {health?.timestamp}</p>
                <p>Uptime: {health?.uptime.toFixed(2)}</p>
            </div>
        </div>
    );
}