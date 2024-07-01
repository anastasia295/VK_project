import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IPropsSignUp<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setRepeatPassword: (value: string) => void;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}
