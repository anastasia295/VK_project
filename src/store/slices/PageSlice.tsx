import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/user";

type TInitialState = {
  page: TUser | null;
};

const initialState: TInitialState = {
  page: null,
};

const PageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    updatePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { updatePage } = PageSlice.actions;

export default PageSlice.reducer;
