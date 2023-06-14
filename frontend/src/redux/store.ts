import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks.slice";

const store = configureStore({
  reducer: { tasksSlice },
});

export default store;
