"use client";
import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./slice/blogSlice";
import waitingListReducer from "./slice/waitingListSlice";

const store = configureStore({
  reducer: {
    waitingList: waitingListReducer,
    blog: blogReducer,
  },
});

export default store;
