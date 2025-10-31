import { Button, useDisclosure } from "@heroui/react";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import UpsertProductModal from "../upsert-product-modal";
import ConfirmDeleteModal from "../confirm-delete-modal";
import { useUpdateProduct } from "../../../core/services/APIs/put-api/UpdateProduct";
import { useDeleteProduct } from "../../../core/services/APIs/delete-api/DeleteProduct";
import { productSchema } from "../../../core/validation";
import type { IProductItem } from "../../../core/types";
import type { FC } from "react";
import type { IProductCardProps } from ".";
import toast from "react-hot-toast";

const ActionButtons: FC<IProductCardProps> = ({ item }) => {
  // modal states for edit + delete product
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onOpenChange: onDeleteOpenChange,
  } = useDisclosure();

  // mutations for product update/delete
  const { mutate: updateProductMutate } = useUpdateProduct();
  const { mutate: deleteProductMutate } = useDeleteProduct();

  // handle product delete flow with toast feedback
  const handleConfirmDelete = () => {
    const toastId = toast.loading("Deleting product...");
    deleteProductMutate(String(item.id), {
      onSuccess: () => {
        toast.success("Product deleted successfully!", { id: toastId });
        onDeleteOpenChange(); // close modal after success
      },
      onError: () => {
        toast.error("Failed to delete product.", { id: toastId });
      },
    });
  };

  // handle product update via modal form
  const handleUpdate = (data: IProductItem) => {
    const toastId = toast.loading("Updating product...");
    updateProductMutate(
      { id: item.id!, data },
      {
        onSuccess: () =>
          toast.success("Product updated successfully!", { id: toastId }),
        onError: () =>
          toast.error("Failed to update product.", { id: toastId }),
      }
    );
  };

  return (
    <>
      <div className="flex gap-2">
        <Button
          onPress={onOpen}
          startContent={<FiEdit2 size={18} />}
          size="sm"
          className="bg-primary/10 text-primary rounded-full px-4 transition-all duration-300 hover:scale-105"
        >
          Edit
        </Button>

        <Button
          onPress={onDeleteOpen}
          startContent={<HiOutlineTrash size={18} />}
          size="sm"
          className="bg-danger/10 text-danger rounded-full px-4 transition-all duration-300 hover:scale-105"
        >
          Delete
        </Button>
      </div>

      <UpsertProductModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        product={item}
        onSubmit={handleUpdate}
        validation={productSchema}
      />

      <ConfirmDeleteModal
        isOpen={isDeleteOpen}
        onOpenChange={onDeleteOpenChange}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default ActionButtons;
