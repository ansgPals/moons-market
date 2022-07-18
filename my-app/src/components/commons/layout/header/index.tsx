import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { IMutation } from "../../../../commons/types/generated/types";

const Wrapper = styled.div`
  position: fixed;
  height: 30px;
  width: 100vw;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  border-bottom: #c7c7c7 1px solid;
  z-index: 100;
`;

const PositionRow = styled.div`
  margin-right: 40px;
  height: 60px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const LoginButton = styled.button`
  color: #777777;
  width: 70px;
  height: 20px;
  font-size: 12px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayOutHeader() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const router = useRouter();

  const onClickLogin = () => {
    router.push(`/login`);
  };
  const onClickSignUp = () => {
    router.push(`/sign-up`);
  };

  const onClickMyPage = () => {
    router.push(`/myPage`);
  };
  const onClickLogout = async () => {
    try {
      const result = await logoutUser();
      result && setAccessToken("");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Wrapper>
      {!accessToken ? (
        <PositionRow>
          <LoginButton onClick={onClickLogin}>로그인</LoginButton>
          <LoginButton onClick={onClickSignUp}>회원가입</LoginButton>
        </PositionRow>
      ) : (
        <PositionRow>
          <LoginButton onClick={onClickMyPage}>마이페이지</LoginButton>
          <LoginButton onClick={onClickLogout}>로그아웃</LoginButton>
        </PositionRow>
      )}
    </Wrapper>
  );
}
