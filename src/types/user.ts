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
  background: string;
};

export type TUserResponse = {
  data: TUser;
};
