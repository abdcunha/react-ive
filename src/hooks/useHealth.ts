import { useState, useEffect } from "react";
import type { HealthResponse } from "../types/HealthResponse";
import { healthApi } from "../services/api";

export const useHealth = () => {
    const [health, setHealth] = useState<{
        health: HealthResponse | null;
        error: string;
        loading: boolean;
    }>({
        health: null,
        error: "",
        loading: true
    });
    
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