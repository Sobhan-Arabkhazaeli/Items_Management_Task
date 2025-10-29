import { type AxiosResponse } from "axios";
import Https from "../../interceptor";
import { useQuery } from "@tanstack/react-query";
import type { IProductItem, IProductsParams } from "../../../types";

/**
 * Fetch users with optional params
 * @param params - { page, limit, sortBy, search }
 */
export const fetchUsers = async (
  params: IProductsParams
): Promise<IProductItem[]> => {
  try {
    const url = new URL("products", Https.defaults.baseURL);

    if (params.page) url.searchParams.append("page", params.page.toString());
    if (params.limit) url.searchParams.append("limit", params.limit.toString());
    if (params.sortBy) url.searchParams.append("sortBy", params.sortBy);
    if (params.search) url.searchParams.append("Title", params.search);

    const response: AxiosResponse<IProductItem[]> = await Https.get(
      url.toString()
    );
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * Custom hook to fetch users with React Query
 */
export const useProducts = (params: IProductsParams) => {
  return useQuery<IProductItem[]>({
    queryKey: ["ProductsList"],
    queryFn: () => fetchUsers(params),
  });
};
