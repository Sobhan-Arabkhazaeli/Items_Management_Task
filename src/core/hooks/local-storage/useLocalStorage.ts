import type { StorageValue } from "../../constants/local-storage";

// * Save a value to localStorage (auto stringified)
export const setItem = <T extends StorageValue>(
  key: string,
  value: T
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

// * Get a parsed value from localStorage
// * Returns null if not found or invalid JSON
export const getItem = <T = unknown>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item) as T;
  } catch (error) {
    // Log parsing issues (bad or corrupted data)
    console.error(`Error parsing localStorage item "${key}":`, error);
    return null;
  }
};

// * Remove a specific item from localStorage
export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

// * Clear the entire localStorage
export const clearStorage = (): void => {
  localStorage.clear();
};
