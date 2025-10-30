import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProductsParams } from "../../core/types";

// ---------- Initial State ----------
const initialState: IProductsParams = {
  search: undefined,
  sortBy: undefined,
  page: 1,
  limit: 3,
};

// ---------- Slice Definition ----------
const productParamsSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    /**
     * @desc Set product search term
     * @example dispatch(setSearch("keyboard"))
     */
    setSearch: (state, action: PayloadAction<IProductsParams["search"]>) => {
      state.search = action.payload;
    },

    /**
     * @desc Set current page number
     * @example dispatch(setPage(2))
     */
    setPage: (state, action: PayloadAction<IProductsParams["page"]>) => {
      state.page = action.payload;
    },

    /**
     * @desc Set number of items per page
     * @example dispatch(setLimit(20))
     */
    setLimit: (state, action: PayloadAction<IProductsParams["limit"]>) => {
      state.limit = action.payload;
    },

    /**
     * @desc Set sort key (e.g.,"date", etc.)
     * @example dispatch(setSortBy("date"))
     */
    setSortBy: (state, action: PayloadAction<IProductsParams["sortBy"]>) => {
      state.sortBy = action.payload;
    },
  },
});

// ---------- Exports ----------
export const { setSearch, setPage, setLimit, setSortBy } =
  productParamsSlice.actions;

export default productParamsSlice.reducer;

// ---------- Types ----------
/**
 * Type for selecting this slice from the Redux store.
 * Keeps store strongly typed.
 */
export interface IProductParamsState {
  params: IProductsParams;
}
