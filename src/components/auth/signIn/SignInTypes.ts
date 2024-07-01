import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface IPropsSignIn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  // setPassword: (value: string) => void;
  // setEmail: (value: string) => void;
  navigate?: (to: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}
