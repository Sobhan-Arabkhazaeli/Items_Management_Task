import { useEffect, useState } from "react";
import { getItem, setItem } from "../local-storage/useLocalStorage";

const THEME_KEY = "theme";

/**
 * Custom hook for handling app theme (light/dark).
 * Keeps user preference in localStorage and syncs it with the DOM.
 */
export function useTheme() {
  // Initialize theme based on user preference or system setting.
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light"; // default for SSR

    const saved = getItem(THEME_KEY) as "light" | "dark" | null;
    if (saved) return saved;

    // Fall back to system preference if no saved theme is found.
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    // Update the root attribute for CSS-based theme switching
    root.setAttribute("data-theme", theme);

    // Optional: also use a 'dark' class if you’re using Tailwind’s `darkMode: 'class'`
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    // Persist the user's theme preference
    setItem(THEME_KEY, theme);
  }, [theme]);

  // Return both current theme and setter for toggling in components
  return { theme, setTheme };
}
