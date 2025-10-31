import { Button, useDisclosure } from "@heroui/react";
import { CiCirclePlus } from "react-icons/ci";
import { UpsertProductModal } from "../../../common";
import { useCreateProduct } from "../../../../core/services/APIs/post-api/CreateProduct";
import type { IFormProduct } from "../../../../core/types";
import { productSchema } from "../../../../core/validation";
import toast from "react-hot-toast";

const AddProductButton = () => {
  // Modal open/close controls
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Hook for creating new product
  const { mutate: createProductMutate } = useCreateProduct();

  // Handle product creation form submit
  const handleCreateProduct = (data: IFormProduct) => {
    // Add current date to the new product
    const productWithDate = { ...data, dateCreated: new Date().toISOString() };

    // Show loading toast while creating
    const toastId = toast.loading("Creating product...");

    // Trigger API call
    createProductMutate(productWithDate, {
      onSuccess: () =>
        toast.success("Product created successfully!", { id: toastId }),
      onError: () => toast.error("Failed to create product.", { id: toastId }),
    });
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="group transition-transform duration-300 hover:scale-105 bg-primary text-white shadow-md hover:shadow-lg"
        startContent={
          <CiCirclePlus
            size={24}
            className="text-white group-hover:rotate-90 transition-transform duration-300"
          />
        }
        variant="solid"
        size="md"
        radius="lg"
      >
        <span className="font-semibold">Add Product</span>
      </Button>

      <UpsertProductModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        product={null}
        onSubmit={handleCreateProduct}
        validation={productSchema}
      />
    </>
  );
};

export default AddProductButton;
