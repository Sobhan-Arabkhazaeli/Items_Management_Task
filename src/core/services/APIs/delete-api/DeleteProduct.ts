import type { AxiosResponse } from "axios";
import Https from "../../interceptor";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// * DELETE request to remove a product by ID
export const deleteProduct = async (
  productId: string | number
): Promise<void> => {
  const response: AxiosResponse<void> = await Https.delete(
    `products/${productId}`
  );
  return response.data;
};

// * Custom hook for deleting a product
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => deleteProduct(id),

    onSuccess: () => {
      // Refetch products after successful delete
      queryClient.invalidateQueries({ queryKey: ["ProductsList"] });
    },

    onError: (error: Error) => {
      console.error("Error deleting product:", error.message);
    },
  });
};
