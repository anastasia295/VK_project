import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import PostSlice from "../slices/PostSlice";
import CounterSlice from "../slices/CounterSlice";
import FriendsSlice from "../slices/FriendsSlice";
import PageSlice from "../slices/PageSlice";
import SearchSlice from "../slices/SearchSlice";
import MessagesSlice from "../slices/MessagesSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    post: PostSlice,
    friend: FriendsSlice,
    like: CounterSlice,
    page: PageSlice,
    search: SearchSlice,
    messages: MessagesSlice,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

export default Store;
