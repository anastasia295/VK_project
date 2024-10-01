import { createSlice } from "@reduxjs/toolkit";
import { TDialogue, TMessage } from "../../types/message";

type TInitialState = {
  messages: TMessage[];
  dialogue: TDialogue[];
  typing: string;
  notification: number[];
};

const initialState: TInitialState = {
  messages: [],
  dialogue: [],
  typing: "",
  notification: [],
};

const MessagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    updateMessages: (state, action) => {
      state.messages = action.payload;
    },
    updateDialogue: (state, action) => {
      state.dialogue = action.payload;
    },
    deleteDialogue: (state, action) => {
      state.dialogue = state.dialogue.filter(
        (el, i) => i !== action.payload?.index
      );
    },
    addDialogue: (state, action) => {
      state.dialogue.push(action.payload);
    },
    updateTyping: (state, action) => {
      state.typing = action.payload;
    },
    addNotification: (state, action) => {
      state.notification.push(action.payload);
    },
    deleteNotification: (state, action) => {
      state.notification = state.notification.filter(
        (num: number) => num !== action.payload
      );
    },
  },
});

export const {
  updateMessages,
  updateDialogue,
  deleteDialogue,
  addDialogue,
  updateTyping,
  addNotification,
  deleteNotification,
} = MessagesSlice.actions;

export default MessagesSlice.reducer;
