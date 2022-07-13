import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IButtonProps {
  isActive: boolean;
}
export interface ISignUpPropsUI {
  inputRef: any;
  onClickSignUp: (data: any) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onFocusPassOk: () => void;
  onBlurPassOk: () => void;
  view: boolean;
  onClickView: () => void;
  focusPassOk: boolean;
  passwordOk: string;
  onChangePasswordOk: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordOkErr: string;
  watchFields: { [x: string]: any };
}
export interface IFormValues {
  email?: string;
  password?: string;
  passwordOk?: string;
  name?: string;
}
