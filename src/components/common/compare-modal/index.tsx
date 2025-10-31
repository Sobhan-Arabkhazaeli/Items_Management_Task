import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import type { IProductItem } from "../../../core/types";
import ProductCard from "../../common/product-card";
import type { FC } from "react";

interface CompareModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const CompareModal: FC<CompareModalProps> = ({ isOpen, onOpenChange }) => {
  // Grab compared items from the Redux store
  const compareItems = useSelector(
    (state: RootState) => state.compare.items
  ) as IProductItem[];

  // If there are no items to compare, skip rendering the modal
  if (!compareItems || compareItems.length === 0) return null;

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      scrollBehavior="inside"
      classNames={{
        backdrop: "bg-zinc-900/80",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            {/* Modal title */}
            <ModalHeader className="flex flex-col gap-1 text-xl font-semibold">
              Compare Products
            </ModalHeader>

            {/* Main content - show the compared product cards */}
            <ModalBody className="px-6 py-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 justify-items-center lg:justify-items-start">
                {compareItems.map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    buttonsActive={false} // disable card buttons inside the compare modal
                  />
                ))}
              </div>
            </ModalBody>

            {/* Footer */}
            <ModalFooter>
              <Button variant="flat" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CompareModal;
