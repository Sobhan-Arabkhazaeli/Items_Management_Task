// Utility for managing data persistence using localStorage in a safe, typed way.

type StorageValue = string | number | boolean | object | null;

/**
 * Stores a value in localStorage after serializing it to JSON.
 * @param key - The unique identifier for the stored item.
 * @param value - The data to store (must be JSON serializable).
 */
export const setItem = <T extends StorageValue>(
  key: string,
  value: T
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Retrieves and parses a value from localStorage.
 * Returns null if the item doesn't exist or parsing fails.
 * @param key - The key of the stored item.
 */
export const getItem = <T = unknown>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item) as T;
  } catch (error) {
    // In case of corrupted data or invalid JSON format
    console.error(`Error parsing localStorage item "${key}":`, error);
    return null;
  }
};

/**
 * Removes a specific key from localStorage.
 * @param key - The key to remove.
 */
export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

/**
 * Clears all stored data in localStorage.
 * Use cautiously — this will remove everything.
 */
export const clearStorage = (): void => {
  localStorage.clear();
};
