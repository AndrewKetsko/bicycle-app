import { configureStore } from "@reduxjs/toolkit";
import { bicycleApi } from "./bicycleApi";

export const store = configureStore({
  reducer: { [bicycleApi.reducerPath]: bicycleApi.reducer },

  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), bicycleApi.middleware],
});
