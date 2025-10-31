import { AxiosError } from "axios";
import Https from "../../interceptor";
import { useQuery } from "@tanstack/react-query";
import type { IProductItem, IProductsParams } from "../../../types";

// Fetch product list from server with pagination, sort, and search support
export const fetchUsers = async (
  params: IProductsParams
): Promise<IProductItem[]> => {
  try {
    // Build the API URL dynamically (cleaner than string concat)
    const url = new URL("products", Https.defaults.baseURL);

    // Attach query params if they exist
    if (params.page) url.searchParams.append("page", params.page.toString());
    if (params.limit) url.searchParams.append("limit", params.limit.toString());
    if (params.sortBy) url.searchParams.append("sortBy", params.sortBy);
    url.searchParams.append("order", "desc"); // default order
    if (params.search) url.searchParams.append("title", params.search);

    // Send request — interceptor already returns data, not the full response
    const data = await Https.get<IProductItem[]>(url.toString());

    // Always return array to avoid breaking UI on empty data
    return data || [];
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    // If API returns 404 → just return empty list (no need to throw)
    if (axiosError.response?.status === 404) return [];

    // Any other error → return empty array as fallback
    return [];
  }
};

// * React Query hook for fetching product list

export const useProducts = (params: IProductsParams) => {
  return useQuery<IProductItem[]>({
    queryKey: ["ProductsList", params],
    queryFn: () => fetchUsers(params),
  });
};
