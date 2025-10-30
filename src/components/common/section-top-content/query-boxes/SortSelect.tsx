import { useDispatch, useSelector } from "react-redux";

import type { FC } from "react";
import { setSortBy } from "../../../../redux/slices/ProductsParams";
import BaseSelect from "../../select-input";
import type { RootState } from "../../../../redux/store";

/**
 * @component SortSelect
 */
const SortSelect: FC = () => {
  const dispatch = useDispatch();
  // ----------------------- Redux & Local States -----------------------
  const { sortBy } = useSelector((state: RootState) => state.params);

  const sortOptions = [{ key: "dateCreated", label: "dateCreated" }];

  return (
    <BaseSelect
      label="Sort By"
      value={sortBy}
      options={sortOptions}
      onChange={(value: string | undefined) => dispatch(setSortBy(value))}
    />
  );
};

export default SortSelect;
