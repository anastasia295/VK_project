import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import PostSlice from "../slices/PostSlice";
import CounterSlice from "../slices/CounterSlice";
import NewSlice from "../slices/NewSlice";
import FriendSlice from "../slices/FriendSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    newauth: NewSlice,
    post: PostSlice,
    like: CounterSlice,
    friend: FriendSlice,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
