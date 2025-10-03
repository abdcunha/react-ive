import { useState, useEffect } from "react";
import type { HealthResponse } from "../types/HealthResponse";

export const useHealth = () => {
    const [health, setHealth] = useState<HealthResponse | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkHealth = async () => {
            try {
                const response = await fetch("http://localhost:3000/health");
                const data = await response.json();
                setHealth(data);
                setError("");
            } catch (err) {
                setError("Failed to connect to backend");
            } finally {
                setLoading(false);
            }
        };

        checkHealth();
    }, []);

    return { health, error, loading };
};