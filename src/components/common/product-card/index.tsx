import type { FC } from "react";
import type { IProductItem } from "../../../core/types";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

export interface IProductCardProps {
  item: IProductItem;
}

const ProductCard : FC<IProductCardProps> = ({item}) => {
    
  return (
    <div className="p-3 flex flex-col justify-between w-96 h-60 card rounded-3xl">
        <CardHeader item={item}/>
        <CardFooter item={item}/>
    </div>
  )
}

export default ProductCard