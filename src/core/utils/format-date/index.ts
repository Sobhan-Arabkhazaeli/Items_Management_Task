
import { format } from "date-fns";

export const formatDate = (dateString: string): string => {
  try {
    // Convert the input string to a Date object and format it
    return format(new Date(dateString), "yyyy/MM/dd");
  } catch {
    // If an invalid date is passed, return a fallback symbol
    return "-";
  }
};
