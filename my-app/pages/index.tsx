import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useScroll } from "../src/commons/library/scrollHook";
import { IQuery } from "../src/commons/types/generated/types";
import MainCarousel from "../src/components/commons/carousel";
import TopButtonPage from "../src/components/commons/topButton";

const MainTitleBox = styled.div`
  background-image: url("/main/purple.png");
  width: 100vw;
  min-width: 800px;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainCenterBox = styled.div`
  background-color: none;
  width: 100vw;
  min-width: 800px;
  height: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 3rem;
  color: white;
  font-weight: bolder;
  font-style: italic;
  font-family: "SUIT700";

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 3s;
`;
interface IScrollProps {
  scrollY: number;
}
const MainCenterImgBox = styled.div`
  background-color: #7050c7;
  width: 100vw;
  min-width: 800px;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 10%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  display: ${(props: IScrollProps) => (props.scrollY > 80 ? "flex" : "none")};
  ${(props: IScrollProps) => props.scrollY > 80 && { animation: "fadeInUp 1s" }}
`;
const MainCenterImg = styled.div`
  width: 100vw;
  min-width: 800px;
  height: 60rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #eda0ad;
  background-image: url("/main/styleimg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  :hover > div {
    visibility: visible;
  }
`;
const SubTitle = styled.div`
  font-size: 4rem;
  font-family: "SUIT700";
`;
const HoverBox = styled.div`
  position: absolute;
  visibility: hidden;
  width: 100vw;
  min-width: 80rem;
  height: 60rem;
  z-index: 2;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const GoCommunity = styled.button`
  color: white;
  font-size: 4rem;
  font-family: "SUIT600";
  background-color: transparent;
  border: none;
`;
const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const carouselData = [
  {
    img: "/main/carouselimg.png",
    title: "미니 홈페이지 만들기",
    level: "입문",
    subTitle: "내 손으로 추억의 미니 홈페이지를 만들어 보세요.",
  },
  {
    img: "/main/carouselimg.png",
    title: "고양이 츄르 만들기",
    level: "입문",
    subTitle: "내 손으로 고양이의 츄르를 만들어 보세요.",
  },
  {
    img: "/main/carouselimg.png",
    title: "미니 잔디 만들기",
    level: "입문",
    subTitle: "내 손으로 자연의 잔디를 만들어 보세요.",
  },
];
export const FETCH_USED_ITEM_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export default function MoonsMarketMainPage() {
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEM_OF_THE_BEST
  );

  const { scrollY } = useScroll();

  return (
    <div>
      <TopButtonPage />
      <MainTitleBox>
        <Title>리셀의 문을 열다</Title>
        <Title>MOONSMARKET</Title>
      </MainTitleBox>
      <PositionRow style={{ marginTop: "10rem" }}>
        <SubTitle style={{ marginLeft: "4rem", marginRight: "1rem" }}>
          TODAY
        </SubTitle>
        <SubTitle style={{ color: "#7050c7", marginRight: "1rem" }}>
          HOT
        </SubTitle>
        <SubTitle>DILL</SubTitle>
      </PositionRow>
      <MainCarousel data={data?.fetchUseditemsOfTheBest} />
      <MainCenterBox>
        <SubTitle
          style={{
            marginLeft: "4rem",
            marginTop: "10rem",
            marginBottom: "2rem",
          }}
        >
          BLOG WHITH MAGAGINE
        </SubTitle>
        <MainCenterImgBox scrollY={scrollY}>
          <MainCenterImg>
            <HoverBox>
              <GoCommunity>지금 마켓러메거진 보러가기!</GoCommunity>
              <GoCommunity>CLICK!</GoCommunity>
            </HoverBox>
            <SubTitle
              style={{
                color: "white",
                marginRight: "60rem",
                marginBottom: "30rem",
              }}
            >
              고민될때는?
            </SubTitle>
            <SubTitle style={{ color: "white", marginBottom: "30rem" }}>
              다른 마켓러의 후기
            </SubTitle>
          </MainCenterImg>
        </MainCenterImgBox>
      </MainCenterBox>
    </div>
  );
}
