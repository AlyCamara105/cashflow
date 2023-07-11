import { configureStore } from "@reduxjs/toolkit";
import gameInfoSlice from "./gameInfoSlice";

export const store = configureStore({
  reducer: {
    gameInfo: gameInfoSlice
  },
});
