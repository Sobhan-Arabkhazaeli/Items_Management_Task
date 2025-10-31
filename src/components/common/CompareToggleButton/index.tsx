import { Button } from "@heroui/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleProduct } from "../../../redux/slices/CompareProducts";
import type { IProductItem } from "../../../core/types";
import type { FC } from "react";
import type { IProductCardProps } from "../product-card";
import type { RootState } from "../../../redux/store";
import { MdOutlineCompare } from "react-icons/md";

const CompareToggleButton: FC<IProductCardProps> = ({ item }) => {
  // Get products currently in the compare list
  const compareItems = useSelector((state: RootState) => state.compare.items);
  const dispatch = useDispatch();

  // Check if this product is already selected for comparison
  const selected = compareItems.find((p: IProductItem) => p.id === item.id);

  return (
    <Button
      // Toggle product in/out of the compare list
      onPress={() => dispatch(toggleProduct(item))}
      startContent={<MdOutlineCompare size={18} />}
      size="sm"
      className={`py-2 px-4 rounded-full border transition-all duration-300 ${
        selected
          ? "bg-success text-white" // active state
          : "bg-surface text-text hover:bg-primary/10" // default state
      }`}
    >
      Compare
    </Button>
  );
};

export default CompareToggleButton;
