import { TUser } from "./user";

export type TLastMessage = {
  id: number;
  message: string;
  user: TUser;
};

export type TMessage = {
  lastMessage: TLastMessage;
  user: TUser;
};

export type TDialogue = {
  id: string;
  message: string;
  user: TUser;
};

export type TDialogBox = {
  open: boolean;
  setModal: (value: boolean) => void;
  userMessage: TUser;
};
