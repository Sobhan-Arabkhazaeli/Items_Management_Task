import { useDispatch, useSelector } from "react-redux";
import type { FC } from "react";
import BaseSelect from "../../select-input";
import { setLimit } from "../../../../redux/slices/ProductsParams";
import type { RootState } from "../../../../redux/store";

/**
 * @component RowsOfPageSelect
 */
const RowsOfPageSelect: FC = () => {
  const dispatch = useDispatch();
  // ----------------------- Redux & Local States -----------------------
  const { limit } = useSelector((state: RootState) => state.params);

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
      onChange={(value) => dispatch(setLimit(value))}
    />
  );
};

export default RowsOfPageSelect;
