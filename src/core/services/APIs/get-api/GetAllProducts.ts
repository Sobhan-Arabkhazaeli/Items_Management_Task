import { AxiosError, type AxiosResponse } from "axios";
import Https from "../../interceptor";
import { useQuery } from "@tanstack/react-query";
import type { IProductItem, IProductsParams } from "../../../types";

export const fetchUsers = async (
  params: IProductsParams
): Promise<IProductItem[]> => {
  try {
    const url = new URL("products", Https.defaults.baseURL);
    console.log(params)

    if (params.page) url.searchParams.append("page", params.page.toString());
    if (params.limit) url.searchParams.append("limit", params.limit.toString());
    if (params.sortBy) url.searchParams.append("sortBy", params.sortBy);
    url.searchParams.append("order", "desc")
    if (params.search) url.searchParams.append("title", params.search);

    const response: AxiosResponse<IProductItem[]> = await Https.get(
      url.toString()
    );

    return response.data || [];
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    if (axiosError.response?.status === 404) {
      // console.warn("No data found (404). Returning empty array.");
      return [];
    }

    // console.error("Error fetching products:", axiosError.message);
    return [];
  }
};

/**
 * Custom hook to fetch products with React Query
 */
export const useProducts = (params: IProductsParams) => {
  return useQuery<IProductItem[]>({
    queryKey: ["ProductsList", params],
    queryFn: () => fetchUsers(params),
  });
};
