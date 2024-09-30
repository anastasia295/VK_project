import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../types/user";

type TInitialState = {
  friend: TUser[];
  offer: TUser[];
  request: TUser[];
  friendsFriend: TUser[];
};

const initialState: TInitialState = {
  friend: [],
  offer: [],
  request: [],
  friendsFriend: [],
};

const FriendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    updateFriends: (state, action) => {
      state.friend = action.payload;
    },
    addFriend: (state, action) => {
      state.friend.push(action.payload);
    },
    deleteFriend: (state, action) => {
      state.friend = state.friend.filter((el) => el?.id !== action.payload?.id);
    },
    updateOffers: (state, action) => {
      state.offer = action.payload;
    },
    deleteOffer: (state, action) => {
      state.offer = state.offer.filter((el) => el?.id !== action.payload?.id);
    },
    addOffer: (state, action) => {
      state.offer.push(action.payload);
    },
    updateRequest: (state, action) => {
      state.request = action.payload;
    },
    addRequest: (state, action) => {
      state.request.push(action.payload);
    },
    deleteRequest: (state, action) => {
      state.request = state.request.filter(
        (el) => el?.id !== action.payload?.id
      );
    },
    updateFriendsFriend: (state, action) => {
      state.friendsFriend = action.payload;
    },
    addFriendsFriend: (state, action) => {
      state.friendsFriend.push(action.payload);
    },
    deleteFriendsFriend: (state, action) => {
      state.friendsFriend = state.friendsFriend.filter(
        (el) => el?.id !== action.payload?.id
      );
    },
  },
});

export const {
  updateFriends,
  addFriend,
  deleteFriend,
  updateOffers,
  addOffer,
  deleteOffer,
  updateRequest,
  deleteRequest,
  addRequest,
  updateFriendsFriend,
  addFriendsFriend,
  deleteFriendsFriend,
} = FriendSlice.actions;

export default FriendSlice.reducer;
