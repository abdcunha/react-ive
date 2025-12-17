import { memo } from "react";
import type { HealthStatusProps } from "../../types/HealthStatusProps";


const HealthStatus = memo(({health, error, loading}: HealthStatusProps) => {
    const renderContent = () => {
        if (loading) {
            return <p className="health-status__loading">Loading...</p>;
        }

        if (error) {
            return <p className="health-status__error">{error}</p>;
        }

        return (
            <div className="health-status__info">
                <p>Status: <span>{health?.status}</span></p>
                <p>Last Updated: <span>{health?.timestamp}</span></p>
                <p>Uptime: <span>{health?.uptime.toFixed(2)}</span></p>
            </div>
        );
    };

    return (
        <div className="health-status">
            <h2 className="health-status__title">Backend Health Status</h2>
            {renderContent()}
        </div>
    );
});

HealthStatus.displayName = "HealthStatus";

export default HealthStatus;