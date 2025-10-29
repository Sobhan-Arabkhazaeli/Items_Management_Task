import type { FC } from "react";
import type { IProductCardProps } from ".";


const CardHeader :FC<IProductCardProps> = ({item}) => {
     // Destructuring the user properties
     const {Title ,Subtitle} = item;
  return (
    <div className="cursor-pointer">
        <h1 className="overflow-hidden line-clamp-2">{Title}</h1>
        <p className="overflow-hidden line-clamp-5">{Subtitle}</p>
    </div>
  )
}

export default CardHeader