import { gql, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";

import SignUpPresenter from "./sign-up.presenter";
import { IFormValues } from "./sign-up.types";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;
const schema = yup.object({
  email: yup
    .string()
    .email("이메일형식이 맞지 않습니다.")
    .required("이메엘을 입력해주세요"),
  name: yup.string().required("성함을 입력해주세요"),
  password: yup
    .string()
    .required("비밀번호를입력해주세요")
    .min(6, "비밀번호는 최소6자리입니다."),
});

export default function SignUpContainer() {
  const router = useRouter();
  const { register, formState, handleSubmit, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const [view, setView] = useState(false);
  const [focusPassOk, setFocusPassOk] = useState(false);
  const [passwordOk, setPasswordOk] = useState("");
  const [passwordOkErr, setPasswordOkErr] = useState("");
  const watchFields = watch();

  const onClickView = () => {
    setView((prev) => !prev);
  };
  const onFocusPassOk = () => {
    setFocusPassOk(true);
  };
  const onBlurPassOk = () => {
    setFocusPassOk(false);
  };
  const onChangePasswordOk = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordOk(e.target.value);
  };

  const onClickSignUp = async (data: IFormValues) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      alert("회원가입을 환영합니다! 로그인화면 으로 이동합니다.");
      router.push(`/login`);
    } catch (error: any) {
      alert(error);
    }
  };
  useEffect(() => {
    if (passwordOk === watchFields.password || watchFields.password === "") {
      setPasswordOkErr("");
    } else {
      setPasswordOkErr("입력하신 비밀번호가 다릅니다.");
    }
  }, [passwordOk, watchFields.password]);
  return (
    <SignUpPresenter
      onClickSignUp={onClickSignUp}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      view={view}
      onClickView={onClickView}
      onFocusPassOk={onFocusPassOk}
      onBlurPassOk={onBlurPassOk}
      focusPassOk={focusPassOk}
      passwordOk={passwordOk}
      onChangePasswordOk={onChangePasswordOk}
      passwordOkErr={passwordOkErr}
      watchFields={watchFields}
    />
  );
}
