import LayOutFooter from "./footer/index";
import LayOutHeader from "./header";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { todayProductState } from "../../../commons/store";
import LayOutBanner from "./banner";
import MyPageLayout from "./my-page-layout";

const Body = styled.div`
  width: 100vw;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  padding-top: 90px;
  align-items: center;
`;

interface ILayoutProps {
  children: ReactNode;
}
export default function LayOut(props: ILayoutProps) {
  const router = useRouter();
  const isMyPage = router.asPath.indexOf("myPage") > 0;

  return (
    <>
      <LayOutHeader />
      <LayOutBanner />
      {isMyPage && (
        <Body>
          <MyPageLayout>{props.children}</MyPageLayout>
        </Body>
      )}
      {!isMyPage && <Body>{props.children}</Body>}
      <LayOutFooter />
    </>
  );
}
