"use client";
      import React, { useEffect } from "react";
import { Theme, THEME_KEY, useTheme } from "@/store/ThemeStore";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { setTheme, theme } = useTheme((state) => state);

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY) as Theme;

    if (localTheme) {
      return setTheme(localTheme);
    }
    const isDark = window.matchMedia("(prefers-color-scheme: dark)");

    if (isDark.matches) {
      setTheme("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      setTheme("light");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [setTheme]);

  if (!theme) return null;

  return <>{children}</>;
};

export default ThemeProvider;
