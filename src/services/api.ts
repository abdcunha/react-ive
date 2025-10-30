import type { HealthResponse } from "../types/HealthResponse";


// Base API
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const healthApi = {
    checkHealth: async (): Promise<HealthResponse> => {
        const response = await fetch(`${API_BASE_URL}/health`);

        if (!response.ok) {
            throw new Error('Health check failed');
        }

        return response.json();
    }
};