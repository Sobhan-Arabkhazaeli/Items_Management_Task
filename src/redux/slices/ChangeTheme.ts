import { createSlice } from "@reduxjs/toolkit";
import {
  getItem,
  setItem,
} from "../../core/hooks/local-storage/useLocalStorage";

const THEME_KEY = "theme";

// Load saved theme from localStorage if available,
// otherwise default to 'light'.
const initialState: "light" | "dark" =
  (getItem(THEME_KEY) as "light" | "dark" | null) ?? "light";

// Redux slice for managing theme state across the app
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Toggle between light and dark mode
    // Also sync the new value with localStorage for persistence
    toggleTheme: (state) => {
      const newTheme = state === "dark" ? "light" : "dark";
      setItem(THEME_KEY, newTheme);
      return newTheme;
    },
  },
});

// Export action for triggering the theme toggle
export const { toggleTheme } = themeSlice.actions;

// Export reducer to be included in the store
export default themeSlice.reducer;
