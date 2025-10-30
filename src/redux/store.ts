import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/ChangeTheme";
import productParamsReducer from "./slices/ProductsParams";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    params : productParamsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
