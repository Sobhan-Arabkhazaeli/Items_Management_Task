import type { FC } from "react";
import type { IProductCardProps } from ".";
import { Tooltip } from "@heroui/react";
import { formatDate } from "../../../core/utils/format-date";

const CardHeader: FC<IProductCardProps> = ({ item }) => {
  const { title, subtitle, dateCreated } = item;
  return (
    <>
      <div className="cursor-pointer space-y-3 h-36">
        <h1 className="font-bold text-text line-clamp-2 leading-tight group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h1>
        <p className="text-text-secondary  leading-relaxed line-clamp-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {subtitle}
        </p>
      </div>
      <Tooltip content="Created Date" showArrow={true}>
        <div className="px-3 w-fit py-1.5 bg-surface/50 text-text rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:bg-surface/70 hover:scale-105 border border-border">
          {formatDate(dateCreated ?? "")}
        </div>
      </Tooltip>
    </>
  );
};

export default CardHeader;
