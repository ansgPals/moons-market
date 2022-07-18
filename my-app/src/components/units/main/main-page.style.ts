import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MainTitleBox = styled.div`
  background-image: url("/main/purple.png");
  width: 100vw;
  min-width: 800px;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MainCenterBox = styled.div`
  background-color: none;
  width: 100vw;
  min-width: 800px;
  height: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
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
export const MainCenterImgBox = styled.div`
  background-color: #7050c7;
  width: 100vw;
  min-width: 800px;
  height: 50rem;
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
export const MainCenterImg = styled.div`
  width: 100vw;
  min-width: 800px;
  height: 50rem;
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
export const SubTitle = styled.div`
  font-size: 4rem;
  font-family: "SUIT700";
`;
export const HoverBox = styled.div`
  position: absolute;
  visibility: hidden;
  width: 100vw;
  min-width: 80rem;
  height: 50rem;
  z-index: 2;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const GoCommunity = styled.button`
  color: white;
  font-size: 4rem;
  font-family: "SUIT600";
  background-color: transparent;
  border: none;
`;
export const PositionRow = styled.div`
  width: 120rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
