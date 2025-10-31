import { Pagination } from "@heroui/react";
import type { FC } from "react";

interface IPaginationProps {
  page: number | undefined;
  totalPages: number | undefined;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

/**
 * Displays paginated navigation with current page indicator.
 */
const PaginationSection: FC<IPaginationProps> = ({
  page = 1,
  totalPages = 1,
  handlePageChange,
}) => {
  // Wraps the pagination onChange to fit expected event signature
  const onChange = (value: number) => {
    const syntheticEvent = {
      target: { value },
    } as unknown as React.ChangeEvent<unknown>;

    handlePageChange(syntheticEvent, value);
  };

  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <p className="text-text font-medium">
        Page: <span className="text-primary font-semibold">{page}</span>
      </p>
      <Pagination
        total={totalPages}
        page={page}
        onChange={onChange}
        showControls
        classNames={{
          base: "flex justify-center gap-2",
          item: "bg-surface text-text border border-border rounded-md px-3 py-1 cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white",
          cursor: "bg-primary text-white rounded-md px-3 py-1",
        }}
      />
    </div>
  );
};

export default PaginationSection;
