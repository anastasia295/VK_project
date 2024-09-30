import { createSlice } from "@reduxjs/toolkit";

type PostState = {
  value: any[];
};

const initialState: PostState = {
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
