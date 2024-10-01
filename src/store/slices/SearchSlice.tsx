import { createSlice } from "@reduxjs/toolkit";

type SearchState = {
  value: string;
};

const initialState: SearchState = {
  value: "",
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateSearch } = SearchSlice.actions;

export default SearchSlice.reducer;
