import type { FC } from "react";
import type { IProductCardProps } from ".";
import ActionButtons from "./CardButtons";
import CompareToggleButton from "../CompareToggleButton";

const CardFooter: FC<IProductCardProps> = ({ item, buttonsActive = true }) => {
  return (
    <div className="flex justify-between items-center pt-4 border-t border-border transition-all duration-300">
      {buttonsActive && <CompareToggleButton item={item} /> }
      {buttonsActive && <ActionButtons item={item} /> }
    </div>
  );
};
export default CardFooter;
