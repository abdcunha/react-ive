import type { HealthResponse } from "./HealthResponse";

export interface HealthStatusProps {
    health: HealthResponse | null;
    error: string;
    loading: boolean;
}