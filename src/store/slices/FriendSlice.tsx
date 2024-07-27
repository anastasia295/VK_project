import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/user";

type TInitialState = {
  user: TUser | [];
};

const initialState: TInitialState = {
  user: [],
};

const FriendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    friendCreate: (state = initialState, action) => {
      state.user = action.payload;
    },
  },
});

export const { friendCreate } = FriendSlice.actions;

export default FriendSlice.reducer;
