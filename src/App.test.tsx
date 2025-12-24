import { render, screen } from "@testing-library/react";
import App from "./App";
import { vitest as vi } from "vitest"

beforeAll(() => {
    globalThis.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
            status: "ok",
            timestamp: new Date().toISOString(),
            uptime: 123.45
        })
    });
});

test("renders ThemeSwitcher", () => {
    render(<App />);
});

afterAll(() => {
    vi.resetAllMocks();
});