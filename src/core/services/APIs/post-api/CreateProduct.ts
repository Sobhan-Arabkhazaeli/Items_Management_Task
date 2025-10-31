import { AxiosError, type AxiosResponse } from "axios";
import Https from "../../interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { IProductItem } from "../../../types";

// * Create a new product (POST)

export const createProduct = async (
  product: IProductItem
): Promise<IProductItem> => {
  try {
    const response: AxiosResponse<IProductItem> = await Https.post(
      "products",
      product
    );
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.message);
  }
};

// * Hook for creating product and refreshing the cache
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct: IProductItem) => createProduct(newProduct),

    // Refetch products list after successful create
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ProductsList"] });
    },

    onError: (error: Error) => {
      console.error("Error creating product:", error.message);
    },
  });
};
