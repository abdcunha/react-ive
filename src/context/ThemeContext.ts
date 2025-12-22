import React from "react";
import type { Theme } from "../types/Theme";

export const ThemeContext = React.createContext<{ theme: Theme; toggle: () => void } | undefined>(undefined);