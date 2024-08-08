export type TGender = "man" | "women";
export type TFamilyStatus =
  | "single"
  | "married"
  | "inLove"
  | "activeSearch"
  | "notChosen";

export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: TGender;
  phone: string;
  birthday: string;
  city: string;
  avatar: string;
  familyStatus: TFamilyStatus;
  status: string;
  friendStatus: TFriendStatusAll;
  background: string;
  friends: TUser[];
};

export type TUserResponse = {
  data: TUser;
};

export type TFriendStatus = "friend" | "none" | "offer" | "request";
export type TСhildren = {
  children?: React.ReactElement;
};

export type TPost = {
  name: string;
  id: number;
};

export type TFriendStatusAll = TFriendStatus | "me";

export type IPropsSignIn = {};
