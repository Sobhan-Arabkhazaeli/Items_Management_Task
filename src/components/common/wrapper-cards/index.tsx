import React,{ type FC }  from "react";
import UserCard_Skeleton from "../skeleton/UserCard_Skeleton";
import type { IProductItem } from "../../../core/types";
import ProductCard from "../product-card";

interface IProp {
  usersData: IProductItem[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const WrapperCards: FC<IProp> = ({ usersData, isLoading, isError }) => {

  const containerStyles = "flex flex-wrap justify-around gap-5";
  

  if (isLoading || usersData === undefined) {
    return (
      <div className={containerStyles}>
        {[...Array(3)].map((_, index) => (
          <UserCard_Skeleton key={index} />
        ))}
      </div>
    );
  } else if (isError || usersData.length === 0) {
    return (
      <h1 className="text-center text-gray-500 text-lg mt-8">
        no data products
      </h1>
    );
  } else {
    return (
      <div className={containerStyles}>
        {usersData.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    );
  }
};

export default React.memo(WrapperCards);
