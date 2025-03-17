import { create } from "zustand";

export type Theme = "dark" | "light" | undefined;

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const THEME_KEY = "current-theme";

export const useTheme = create<ThemeStore>((set) => ({
  theme: undefined,
  setTheme: (theme: Theme) => {
    if (!theme) return set({ theme: undefined });
    document.documentElement.classList.remove("dark", "light");
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList.add(theme);
    return set({ theme });
  },
}));
