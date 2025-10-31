import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import type { FC } from "react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onOpenChange,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="sm"
      classNames={{ backdrop: "bg-zinc-900/80" }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-semibold text-danger">
              Confirm Deletion
            </ModalHeader>
            {/* Warning message for confirmation delete product */}
            <ModalBody>
              <p>
                Are you sure you want to delete?
                <br />
                This action cannot be undone!
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="danger" onPress={onConfirm}>
                Yes, Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDeleteModal;
