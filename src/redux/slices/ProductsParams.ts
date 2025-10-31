import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProductsParams } from "../../core/types";

const initialState: IProductsParams = {
  search: undefined,
  sortBy: undefined,
  page: 1,
  limit: 3,
};

const productParamsSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    // Update search term for filtering products
    setSearch: (state, action: PayloadAction<IProductsParams["search"]>) => {
      state.search = action.payload;
    },

    // Update current page for pagination
    setPage: (state, action: PayloadAction<IProductsParams["page"]>) => {
      state.page = action.payload;
    },

    // Update number of items per page
    setLimit: (state, action: PayloadAction<IProductsParams["limit"]>) => {
      state.limit = action.payload;
    },

    // Update sorting key (e.g., dateCreated)
    setSortBy: (state, action: PayloadAction<IProductsParams["sortBy"]>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearch, setPage, setLimit, setSortBy } =
  productParamsSlice.actions;

export default productParamsSlice.reducer;

// Optional interface for type-safe selector usage
export interface IProductParamsState {
  params: IProductsParams;
}
