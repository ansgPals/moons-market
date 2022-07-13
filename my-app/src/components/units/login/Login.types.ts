import { ChangeEvent, MutableRefObject } from "react";

export interface ILoginPagePresenterProps {
  userId: string;
  idErr: string;
  onChangeUserId: (e: ChangeEvent<HTMLInputElement>) => void;
  focusId: boolean;
  password: string;
  passErr: string;
  onFocusId: () => void;
  onBlurId: () => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  view: boolean;
  onClickView: () => void;
  onClickLogin: () => Promise<void>;
  inputRef: MutableRefObject<HTMLInputElement>;
}
