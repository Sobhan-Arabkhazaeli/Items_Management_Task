import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

// * Syncs theme between Redux, DOM, and Tailwind.
export function useTheme() {
  // Read current theme from Redux store
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const root = document.documentElement;

    // Update HTML attribute (for custom theme handling)
    root.setAttribute("data-theme", theme);

    // Sync with Tailwind's dark mode
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return theme;
}
