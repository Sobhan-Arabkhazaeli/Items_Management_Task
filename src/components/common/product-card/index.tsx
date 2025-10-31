import type { FC } from "react";
import type { IProductItem } from "../../../core/types";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

export interface IProductCardProps {
  item: IProductItem;
  buttonsActive?: boolean;
}

const ProductCard: FC<IProductCardProps> = ({ item, buttonsActive }) => {
  return (
    <div className="group p-4 border border-border flex flex-col justify-between w-[400px] h-72 rounded-2xl bg-surface shadow-lg transition-all duration-500 hover:scale-[1.02]">
      <CardHeader item={item}  />
      <CardFooter item={item} buttonsActive={buttonsActive} />
    </div>
  );
};

export default ProductCard;
