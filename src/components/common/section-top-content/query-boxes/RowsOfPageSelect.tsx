import { useDispatch, useSelector } from "react-redux";
import type { FC } from "react";
import BaseSelect from "../../select-input";
import { setLimit } from "../../../../redux/slices/ProductsParams";
import type { RootState } from "../../../../redux/store";

const RowsOfPageSelect: FC = () => {
  const dispatch = useDispatch();
  const { limit } = useSelector((state: RootState) => state.params);

  // pagination size options
  const limitOptions = [
    { key: 3, label: "3" },
    { key: 9, label: "9" },
    { key: 12, label: "12" },
  ];

  return (
    <BaseSelect
      label="Rows Per Page"
      value={limit}
      options={limitOptions}
      // update rows per page param in redux
      onChange={(value) => dispatch(setLimit(value))}
    />
  );
};

export default RowsOfPageSelect;
