"use client";
import { configureStore } from "@reduxjs/toolkit";
import waitingListReducer from "./slice/waitingListSlice";

const store = configureStore({
  reducer: {
    waitingList: waitingListReducer,
  },
});

export default store;
