import { configureStore } from "@reduxjs/toolkit";
import pomoSlice from "./slice/pomoSlice";

export const store = configureStore({
  reducer: {
    promo: pomoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
