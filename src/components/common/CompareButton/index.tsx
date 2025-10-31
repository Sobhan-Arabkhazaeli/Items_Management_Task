import { Button, useDisclosure } from "@heroui/react";
import { useSelector } from "react-redux";
import type { IProductItem } from "../../../core/types";
import type { RootState } from "../../../redux/store";
import CompareModal from "../compare-modal";

const CompareButton = () => {
  // Grab compared products from Redux store
  const compareItems = useSelector(
    (state: RootState) => state.compare.items as IProductItem[]
  );

  // Manage modal open/close state using HeroUI’s disclosure hook
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Only open modal when exactly two products are selected
  const handleClick = () => {
    if (compareItems.length === 2) {
      onOpen();
    }
  };

  return (
    <>
      {/* Show compare button only when two items are selected */}
      <Button
        onPress={handleClick}
        className={`px-4 py-2 rounded-2xl fixed top-24 sm:left-1/2 max-sm:right-0 -translate-x-1/2 z-50 bg-primary text-white  
         ${compareItems.length !== 2 ? "hidden" : ""}`}
      >
        Compare Now
      </Button>

      {/* Comparison modal – displays selected products side by side */}
      <CompareModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default CompareButton;
