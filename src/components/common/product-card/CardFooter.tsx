import type { FC } from "react";
import type { IProductCardProps } from ".";
import { formatDate } from "../../../core/utils/format-date";
import { Tooltip } from "@heroui/react";

const CardFooter: FC<IProductCardProps> = ({ item }) => {
  // Destructuring the user properties
  const { Date_Created } = item;
  return (
    <div className="flex justify-between items-center ">
      <Tooltip content="Created Date" showArrow={true}>
        <div className="chip-primary cursor-default">{formatDate(Date_Created)}</div>
      </Tooltip>
    </div>
  );
};

export default CardFooter;
