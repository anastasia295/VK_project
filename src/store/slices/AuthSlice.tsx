import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/user";

type TInitialState = {
  user: TUser | null;
};

const initialState: TInitialState = {
  user: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = AuthSlice.actions;

export default AuthSlice.reducer;
