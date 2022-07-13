import * as S from "./Login.styles";
import { ILoginPagePresenterProps } from "./Login.types";

export default function LoginPagePresenter(props: ILoginPagePresenterProps) {
  return (
    <S.Wrapper>
      <S.Logo>LOGIN</S.Logo>
      <S.LoginInput
        inner={props.userId}
        error={props.idErr}
        ref={props.inputRef}
        onChange={props.onChangeUserId}
        placeholder="ID"
      ></S.LoginInput>
      <S.InputErr>{props.idErr}</S.InputErr>
      <S.LoginInputDiv
        focus={props.focusId}
        inner={props.password}
        error={props.passErr}
      >
        <S.PassInput
          onFocus={props.onFocusId}
          onBlur={props.onBlurId}
          onChange={props.onChangePassword}
          type={props.view ? "text" : "password"}
          placeholder="PW"
        ></S.PassInput>
        <S.InputIcon
          onClick={props.onClickView}
          src={props.view ? "/login/view.png" : "/login/noview.png"}
        />
      </S.LoginInputDiv>
      <S.InputErr>{props.passErr}</S.InputErr>
      <S.Button onClick={props.onClickLogin}>로그인</S.Button>{" "}
      <S.Text
        style={{
          fontSize: "20px",
          fontFamily: "SUIT700",
          marginBottom: "21px",
        }}
      >
        or
      </S.Text>
      <S.GoSignup href="/sign-up">
        <S.Text style={{ color: "black" }}>신규</S.Text>
        <S.Text
          style={{
            marginLeft: "3px",
            marginRight: "3px",
            color: "#6400FF",
          }}
        >
          회원가입
        </S.Text>
        <S.Text style={{ color: "black" }}>하러가기👉</S.Text>
      </S.GoSignup>
    </S.Wrapper>
  );
}
