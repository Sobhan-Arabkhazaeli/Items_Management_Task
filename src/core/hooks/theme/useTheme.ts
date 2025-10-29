import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

/**
 * Custom hook to sync the current theme with DOM + TailwindCSS + localStorage.
 */
export function useTheme() {
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("data-theme", theme);

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return theme;
}
