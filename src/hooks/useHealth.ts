import { useState, useEffect } from "react";
import type { HealthResponse } from "../types/HealthResponse";
import { healthApi } from "../services/api";

export const useHealth = () => {
    const [state, setState] = useState<{
        health: HealthResponse | null;
        error: string;
        loading: boolean;
    }>({
        health: null,
        error: "",
        loading: true
    });
    
    useEffect(() => {
        let mounted = true;

        const checkHealth = async () => {
            try {
                const data = await healthApi.checkHealth();
                if (mounted) {
                    setState(prev => ({
                        ...prev,
                        health: data,
                        error: "",
                        loading: false
                    }));
                }
            } catch (err) {
                if (mounted) {
                    setState(prev => ({
                        ...prev,
                        error: "Failed to connect to backend",
                        loading: false
                    }));
                }
            }
        };

        checkHealth();

        return () => {
            mounted = false;
        }
    }, []);

    return state;
};