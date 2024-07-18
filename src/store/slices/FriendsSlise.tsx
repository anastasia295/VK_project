import { createSlice } from "@reduxjs/toolkit";

export interface PostSlice {
  value: any[];
}

const initialState: PostSlice = {
  value: [],
};

const FriendsSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    friendCreate: (state, action) => {
      state.value.push(action.payload);
    },

    friendDelete: (state, action) => {
      state.value = state.value.filter(
        (post) => post?.id !== action.payload?.id
      );
    },
  },
});

export const { friendCreate, friendDelete } = FriendsSlice.actions;

export default FriendsSlice.reducer;
