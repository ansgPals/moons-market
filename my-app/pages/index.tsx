import { gql, useQuery } from "@apollo/client";
import { useScroll } from "../src/commons/library/scrollHook";
import { IQuery } from "../src/commons/types/generated/types";
import MainCarousel from "../src/components/commons/carousel-main";
import TopButtonPage from "../src/components/commons/topButton";
import { FETCH_USED_ITEM_OF_THE_BEST } from "../src/components/units/main/main-page.query";
import * as S from "../src/components/units/main/main-page.style";

export default function MoonsMarketMainPage() {
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEM_OF_THE_BEST
  );

  const { scrollY } = useScroll();

  return (
    <S.Wrapper>
      <TopButtonPage />
      <S.MainTitleBox>
        <S.Title>리셀의 문을 열다</S.Title>
        <S.Title>MOONSMARKET</S.Title>
      </S.MainTitleBox>
      <S.PositionRow style={{ marginTop: "10rem" }}>
        <S.SubTitle style={{ marginRight: "1rem" }}>TODAY</S.SubTitle>
        <S.SubTitle style={{ color: "#7050c7", marginRight: "1rem" }}>
          HOT
        </S.SubTitle>
        <S.SubTitle>DILL</S.SubTitle>
      </S.PositionRow>
      <MainCarousel data={data?.fetchUseditemsOfTheBest} />
      <S.MainCenterBox>
        <S.SubTitle
          style={{
            width: "120rem",
            marginTop: "10rem",
            marginBottom: "2rem",
          }}
        >
          BLOG WITH STYLE BOARD
        </S.SubTitle>
        <S.MainCenterImgBox scrollY={scrollY}>
          <S.MainCenterImg>
            <S.HoverBox>
              <S.GoCommunity>지금 마켓러 스타일보드 보러가기!</S.GoCommunity>
              <S.GoCommunity></S.GoCommunity>
            </S.HoverBox>
            <S.SubTitle
              style={{
                color: "white",
                marginRight: "60rem",
                marginBottom: "30rem",
              }}
            >
              고민될때는?
            </S.SubTitle>
            <S.SubTitle style={{ color: "white", marginBottom: "30rem" }}>
              다른 마켓러의 후기
            </S.SubTitle>
          </S.MainCenterImg>
        </S.MainCenterImgBox>
      </S.MainCenterBox>
    </S.Wrapper>
  );
}
