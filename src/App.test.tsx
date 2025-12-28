import { render } from "@testing-library/react";
import App from "./App";
import { vitest as vi } from "vitest"
import { act } from "react";

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

test("renders ThemeSwitcher", async () => {
    let container: HTMLElement;

    await act(async () => {
        const rendered = render(<App />);
        container = rendered.container;
    });
    expect(container!.querySelector('.light-theme')).toBeInTheDocument();
});

afterAll(() => {
    vi.resetAllMocks();
});