import { Pagination } from "@heroui/react";
import type { FC } from "react";

interface IPaginationProps {
  page: number | undefined;
  totalPages: number | undefined;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

/**
 * @component PaginationSection
 */
const PaginationSection: FC<IPaginationProps> = ({
  page = 1,
  totalPages = 1,
  handlePageChange,
}) => {
  const onChange = (value: number) => {
    const syntheticEvent = { target: { value } } as unknown as React.ChangeEvent<unknown>;
    handlePageChange(syntheticEvent, value);
  };
  // console.log(totalPages)

  return (
    <div className="flex flex-col items-center gap-3 py-6">
      <p className="text-gray-700 dark:text-gray-300 font-medium">
        Page: <span className="text-indigo-600 dark:text-indigo-400">{page}</span>
      </p>

      <Pagination
        total={totalPages}
        page={page}
        onChange={onChange}
        showControls
        classNames={{
          base: "flex justify-center",
          item: "bg-bg text-text border border-gray-300 dark:border-gray-700 hover:bg-primary dark:hover:bg-gray-700 transition-colors duration-200",
          cursor: "bg-indigo-600 text-white dark:bg-indigo-500",
        }}
      />
    </div>
  );
};

export default PaginationSection;
