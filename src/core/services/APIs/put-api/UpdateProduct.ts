import { AxiosError, type AxiosResponse } from "axios";
import Https from "../../interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { IProductItem } from "../../../types";

// * Update existing product (PUT)
export const updateProduct = async (
  productId: string | number,
  updatedProduct: IProductItem
): Promise<IProductItem> => {
  try {
    const response: AxiosResponse<IProductItem> = await Https.put(
      `products/${productId}`,
      updatedProduct
    );
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;

    // Map common status codes to readable messages
    if (axiosError.response?.status === 404)
      throw new Error("Product not found");
    if (axiosError.response?.status === 400)
      throw new Error("Invalid data sent to server");

    throw new Error(axiosError.message);
  }
};

// * Hook for updating product and keeping cache in sync
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: IProductItem }) =>
      updateProduct(id, data),

    // Refetch products list after successful update
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ProductsList"] });
    },

    onError: (error: Error) => {
      console.error("Error updating product:", error.message);
    },
  });
};
