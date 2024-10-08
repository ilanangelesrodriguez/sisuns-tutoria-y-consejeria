import { useEffect, useState } from "react";

const ThemeProps = {
  key: "theme",
  light: "light",
  dark: "dark",
} as const;

type Theme = typeof ThemeProps.light | typeof ThemeProps.dark;

export const useTheme = (defaultTheme?: Theme) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(ThemeProps.key) as Theme | null;
    return storedTheme || (defaultTheme ?? ThemeProps.light);
  });

  const setThemeAndStore = (newTheme: Theme) => {
    localStorage.setItem(ThemeProps.key, newTheme);
    document.documentElement.classList.toggle(ThemeProps.light, newTheme === ThemeProps.light);
    document.documentElement.classList.toggle(ThemeProps.dark, newTheme === ThemeProps.dark);
    setTheme(newTheme);
  };

  const toggleTheme = () => setThemeAndStore(theme === ThemeProps.dark ? ThemeProps.light : ThemeProps.dark);

  useEffect(() => {
    setThemeAndStore(theme);
  }, [theme]);

  return { theme, isDark: theme === ThemeProps.dark, isLight: theme === ThemeProps.light, toggleTheme };
};
