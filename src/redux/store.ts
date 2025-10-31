import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/ChangeTheme";
import productParamsReducer from "./slices/ProductsParams";
import compareReducer from "./slices/CompareProducts"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    params : productParamsReducer,
    compare : compareReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
