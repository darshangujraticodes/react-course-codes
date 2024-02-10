import { configureStore } from "@reduxjs/toolkit";
import authslice from "./actions/authSlice";

const store = configureStore({
  reducer: {},
});

export default store;
