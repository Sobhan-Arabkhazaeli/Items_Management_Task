import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { Formik } from "formik";
import { useMediaQuery } from "@react-hook/media-query";
import FormProduct from "../form-product";
import ProductCard from "../product-card";
import type { IFormProduct, IProductItem } from "../../../core/types";
import type { ObjectSchema } from "yup";

interface UpsertProductModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  product?: IProductItem | null;
  onSubmit: (data: IProductItem) => void;
  validation: ObjectSchema<IProductItem>;
}

const UpsertProductModal = ({
  isOpen,
  onOpenChange,
  product,
  onSubmit,
  validation,
}: UpsertProductModalProps) => {
  // Check if we’re editing or creating a product
  const isEdit = Boolean(product);

  // Handle responsive modal size
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Prepare initial form values
  const initialValues: IFormProduct = product
    ? { ...product }
    : { title: "", subtitle: "" };

  // Submit form and close modal
  const handleSubmit = async (values: IFormProduct) => {
    onSubmit(values as IProductItem);
    onOpenChange(false);
  };

  return (
    <Modal
      backdrop="opaque"
      size={isMobile ? "full" : "3xl"}
      isOpen={isOpen}
      scrollBehavior="inside"
      onOpenChange={onOpenChange}
      classNames={{ backdrop: "bg-zinc-900/80" }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="text-lg font-semibold text-text">
              {isEdit ? "Edit Product" : "Create Product"}
            </ModalHeader>

            <ModalBody className="pb-6">
              <Formik<IFormProduct>
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validation}
              >
                {(form) => (
                  <div className="flex flex-col md:flex-row md:items-start items-center gap-4 justify-between">
                    {/* Left side — form section */}
                    <div className="flex-1 w-full">
                      <FormProduct variant={isEdit} />
                    </div>

                    {/* Right side — live product preview */}
                    <div className="flex-1 w-full">
                      <ProductCard
                        item={form.values as IProductItem}
                        buttonsActive={false}
                      />
                    </div>
                  </div>
                )}
              </Formik>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default UpsertProductModal;
