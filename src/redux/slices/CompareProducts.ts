
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProductItem } from "../../core/types";

// Only allow up to 2 products in compare list
interface CompareState {
  items: IProductItem[];
}

const initialState: CompareState = { items: [] };

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    // Toggle product in compare list (add if less than 2, remove if exists)
    toggleProduct: (state, action: PayloadAction<IProductItem>) => {
      const exists = state.items.find((p) => p.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((p) => p.id !== action.payload.id);
      } else if (state.items.length < 2) {
        state.items.push(action.payload);
      }
    },

    // Clear all items from compare list
    clearCompare: (state) => {
      state.items = [];
    },
  },
});

export const { toggleProduct, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;
