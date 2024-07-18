import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import PostSlice from "../slices/PostSlice";
import CounterSlice from "../slices/CounterSlice";
import NewSlice from "../slices/NewSlice";
import FriendsSlice from "../slices/FriendsSlise";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    newauth: NewSlice,
    post: PostSlice,
    like: CounterSlice,
    friend: FriendsSlice,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
