import { useDispatch, useSelector } from "react-redux";
import type { FC } from "react";
import { setSortBy } from "../../../../redux/slices/ProductsParams";
import BaseSelect from "../../select-input";
import type { RootState } from "../../../../redux/store";

const SortSelect: FC = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state: RootState) => state.params);

  // available sorting options
  const sortOptions = [{ key: "dateCreated", label: "dateCreated" }];

  return (
    <BaseSelect
      label="Sort By"
      value={sortBy}
      options={sortOptions}
      // update sort param in redux on change
      onChange={(value: string | undefined) => dispatch(setSortBy(value))}
    />
  );
};

export default SortSelect;
