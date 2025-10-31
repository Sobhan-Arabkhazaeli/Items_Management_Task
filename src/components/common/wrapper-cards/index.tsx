import React, { type FC } from "react";
import UserCard_Skeleton from "../skeleton/UserCard_Skeleton";
import ProductCard from "../product-card";
import type { IProductItem } from "../../../core/types";
import { useMediaQuery } from "@react-hook/media-query";

interface IProp {
  usersData: IProductItem[] | undefined;
  isLoading?: boolean;
  isError?: boolean;
}

const WrapperCards: FC<IProp> = ({ usersData, isLoading, isError }) => {
  const containerStyles = "flex flex-wrap justify-around gap-5";

  // Handle responsive modal size
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Show skeletons while loading or no data yet
  if (isLoading || usersData === undefined) {
    return (
      <div className={containerStyles}>
        {[...Array(isMobile ? 1 : 3)].map((_, index) => (
          <UserCard_Skeleton key={index} />
        ))}
      </div>
    );
  }

  // Show empty/error message
  if (isError || usersData.length === 0) {
    return (
      <h1 className="text-center text-text-secondary text-lg mt-8">
        no data products
      </h1>
    );
  }

  // Render actual product cards
  return (
    <div className={containerStyles}>
      {usersData.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

// Memoized to avoid unnecessary re-renders
export default React.memo(WrapperCards);
