import * as S from "./sign-up.styles";
import { ISignUpPropsUI } from "./sign-up.types";

export default function SignUpPresenter(props: ISignUpPropsUI) {
  return (
    <>
      <S.Wrapper>
        <S.Logo>회원가입 / SIGN-UP </S.Logo>

        <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
          <S.JustBox>
            <S.SubTitle>이메일</S.SubTitle>
            <S.LoginInput
              placeholder="E-Mail"
              type="text"
              inner={props.watchFields.email}
              error={props.formState.errors.email?.message}
              ref={props.inputRef}
              {...props.register("email")}
            ></S.LoginInput>{" "}
          </S.JustBox>
          <S.InputErr>{props.formState.errors.email?.message}</S.InputErr>

          <S.JustBox>
            <S.SubTitle>이름</S.SubTitle>
            <S.LoginInput
              placeholder="이름을 입력해주세요."
              type="text"
              inner={props.watchFields.name}
              error={props.formState.errors.name?.message}
              {...props.register("name")}
            ></S.LoginInput>{" "}
          </S.JustBox>
          <S.InputErr>{props.formState.errors.name?.message}</S.InputErr>

          <S.JustBox>
            <S.SubTitle>비밀번호</S.SubTitle>
            <S.LoginInput
              placeholder="비밀번호를 입력해주세요."
              type="password"
              inner={props.watchFields.password}
              error={props.formState.errors.password?.message}
              {...props.register("password")}
            ></S.LoginInput>{" "}
          </S.JustBox>
          <S.InputErr>{props.formState.errors.password?.message}</S.InputErr>

          <S.JustBox>
            <S.SubTitle>비밀번호확인</S.SubTitle>
            <S.LoginInputDiv
              focus={props.focusPassOk}
              inner={props.passwordOk}
              error={props.formState.errors.passwordOk?.message}
            >
              <S.PassInput
                onFocus={props.onFocusPassOk}
                onBlur={props.onBlurPassOk}
                placeholder="비밀번호확인을 입력해주세요."
                type={props.view ? "text" : "password"}
                onChange={props.onChangePasswordOk}
              ></S.PassInput>
              <S.InputIcon
                onClick={props.onClickView}
                src={props.view ? "/login/view.png" : "/login/noview.png"}
              />
            </S.LoginInputDiv>
          </S.JustBox>
          <S.InputErr>{props.passwordOkErr}</S.InputErr>

          <S.Button isActive={props.formState.isValid && !props.passwordOkErr}>
            회원가입하기
          </S.Button>
        </form>
      </S.Wrapper>
    </>
  );
}
