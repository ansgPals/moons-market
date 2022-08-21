import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

import LogInPresenter from "./Login.presenter";
import { accessTokenState, userInfoState } from "../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
      userPoint {
        amount
      }
    }
  }
`;

export default function LogInContainer() {
  const [, setUserInfo] = useRecoilState(userInfoState);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const client = useApolloClient();

  const inputRef = useRef<HTMLInputElement>(null);

  const [view, setView] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [idErr, setIdErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [focusId, setFocusId] = useState(false);
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
    setIdErr("");
  };
  const onClickView = () => {
    setView((prev) => !prev);
  };
  const onFocusId = () => {
    setFocusId(true);
  };
  const onBlurId = () => {
    setFocusId(false);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPassErr("");
  };

  const onClickLogin = async () => {
    if (userId === "") {
      setIdErr("*아이디를 입력해주세요.");
    }
    if (password.length < 7) {
      setPassErr("*비밀번호를 7자리 이상 입력해주세요.");
      return;
    }
    try {
      const result = await loginUser({
        variables: {
          email: userId,
          password: password,
        },
      });
      const accessToken = result.data?.loginUser?.accessToken;
      setAccessToken(accessToken);
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      setUserInfo(userInfo);
      alert(`어서오세요 ${userInfo?.name}님!! :)`);
      window.history.back();
    } catch (e) {
      if (e.message === "해당하는 유저가 없습니다.")
        setIdErr("*등록되지 않은 아이디 입니다.");
      else setIdErr(e.message);
    }
  };
  console.log(router);

  const onClickSignUp = () => {
    router.push("/sign-up");
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <LogInPresenter
      userId={userId}
      idErr={idErr}
      onChangeUserId={onChangeUserId}
      focusId={focusId}
      password={password}
      passErr={passErr}
      onFocusId={onFocusId}
      onBlurId={onBlurId}
      onChangePassword={onChangePassword}
      view={view}
      onClickView={onClickView}
      onClickLogin={onClickLogin}
      inputRef={inputRef}
      onClickSignUp={onClickSignUp}
    />
  );
}
