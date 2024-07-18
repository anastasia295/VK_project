import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/user";

type TInitialState = {
  user: TUser | [];
};

const initialState: TInitialState = {
  user: [],
};

const AuthSlice = createSlice({
  name: "newauth",
  initialState,
  reducers: {
    updateUserNew: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUserNew } = AuthSlice.actions;

export default AuthSlice.reducer;
