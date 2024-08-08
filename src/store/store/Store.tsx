import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import PostSlice from "../slices/PostSlice";
import CounterSlice from "../slices/CounterSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    post: PostSlice,
    like: CounterSlice,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
