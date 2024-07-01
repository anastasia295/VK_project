import { createSlice } from "@reduxjs/toolkit";

export interface PostSlice {
  value: any[];
}

const initialState: PostSlice = {
  value: [],
};

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postCreate: (state, action) => {
      state.value.push(action.payload);
    },
    postDelete: (state, action) => {
      state.value = state.value.filter(
        (post) => post?.id !== action.payload?.id
      );
    },
  },
});

export const { postCreate, postDelete } = PostSlice.actions;

export default PostSlice.reducer;
