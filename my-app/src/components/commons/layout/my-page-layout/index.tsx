import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TopButtonPage from "../../topButton";
const TopMenu = styled.div`
  margin-top: 10rem;
  width: 80rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
interface IShowProps {
  pick: boolean;
}
export const ProfileMenu = styled.div`
  text-align: center;
  height: 5rem;
  font-family: ${(props: IShowProps) => (props.pick ? "SUIT700" : "SUIT400")};
  font-size: 2rem;
  line-height: 4rem;
  padding-top: 0.5rem;
  border-radius: 1rem 1rem 0rem 0rem;
  border: 1px solid rgba(23, 0, 58, 0.12);
  width: 15rem;
  border-bottom: ${(props: IShowProps) => (props.pick ? "" : "none")};
  color: ${(props: IShowProps) => (props.pick ? "#6400FF" : " #7C7C7C")};
  box-shadow: ${(props: IShowProps) =>
    props.pick ? "inset 0 -2px 0  #6400FF" : " none"};
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 80rem;
  background: #ffffff;
  box-shadow: 0px 5px 5px rgba(23, 0, 58, 0.12);
`;

export default function MyPageLayout(props: { children: any }) {
  const [menuArr, setMenuArr] = useState([true, false, false, false]);
  const router = useRouter();
  const onClickMenu = (num: number) => () => {
    if (num === 0) {
      router.push("/myPage");
    } else if (num === 1) {
      router.push("/myPage/basket");
    } else if (num === 2) {
      router.push("/myPage/zzim");
    } else if (num === 3) {
      router.push("/myPage/charge-point");
    }
  };

  useEffect(() => {
    if (router.asPath === "/myPage") {
      setMenuArr([true, false, false, false]);
    } else if (router.asPath.includes("basket")) {
      setMenuArr([false, true, false, false]);
    } else if (router.asPath.includes("zzim")) {
      setMenuArr([false, false, true, false]);
    } else if (router.asPath.includes("charge-point")) {
      setMenuArr([false, false, false, true]);
    }
  }, [router.asPath]);

  return (
    <>
      <TopMenu>
        <TopButtonPage />
        <ProfileMenu onClick={onClickMenu(0)} pick={menuArr[0]}>
          내 정보
        </ProfileMenu>
        <ProfileMenu onClick={onClickMenu(1)} pick={menuArr[1]}>
          장바구니
        </ProfileMenu>
        <ProfileMenu onClick={onClickMenu(2)} pick={menuArr[2]}>
          찜목록
        </ProfileMenu>
        <ProfileMenu onClick={onClickMenu(3)} pick={menuArr[3]}>
          포인트충전
        </ProfileMenu>
      </TopMenu>
      <Wrapper>{props.children}</Wrapper>
    </>
  );
}
