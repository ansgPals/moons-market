import LayOutFooter from "./footer/index";
import LayOutHeader from "./header";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { todayProductState } from "../../../commons/store";
import LayOutBanner from "./banner";

const Body = styled.div`
  width: 100vw;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  padding-top: 90px;
  align-items: center;
`;

const LENDING_PAGE = ["/"];
const MY_PAGE = [
  "/myPage",
  "/myPage/basket",
  "/myPage/zzim",
  "/myPage/charge-point",
];

interface ILayoutProps {
  children: ReactNode;
}
export default function LayOut(props: ILayoutProps) {
  const [todayProduct] = useRecoilState(todayProductState);

  const router = useRouter();
  const isMyPage = MY_PAGE.includes(router.asPath);
  const isLending = LENDING_PAGE.includes(router.asPath);
  return (
    <>
      <LayOutHeader />
      <LayOutBanner />
      <Body>{props.children}</Body>
      <LayOutFooter />
    </>
  );
}
