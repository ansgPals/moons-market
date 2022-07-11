import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
interface IButtonProps {
  isPicked?: boolean;
}
const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  margin-top: 30px;
  position: sticky;
  min-width: 800px;
  position: fixed;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: #c7c7c7 1px solid;
`;

const Title = styled.div`
  font-size: 30px;
  color: black;
  font-style: italic;
  font-weight: 900;
  margin-left: 20px;
  font-family: "SUIT900";
  cursor: pointer;
`;
const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 30px;
`;

export const Menu = styled.div`
  width: 120px;
  color: ${(props: IButtonProps) => (props.isPicked ? "black" : "#bdbdbd")};
  text-decoration: ${(props: IButtonProps) =>
    props.isPicked ? "underline" : "none"};
  font-size: 20px;
  text-underline-offset: 5px;

  text-align: center;
  cursor: pointer;
  :hover {
    color: #6400ff;
  }
`;
export default function LayOutBanner() {
  const router = useRouter();

  const [pickArr, setPickArr] = useState([true, false, false]);
  const pageArr = ["", "/board", ""];
  const onClickMenu = (menuIndex) => () => {
    const pick = [false, false, false];
    pick[menuIndex] = true;
    setPickArr(pick);
    router.push(`${pageArr[menuIndex]}`);
  };
  const onClickTitle = () => {
    router.push("/");
    setPickArr([true, false, false]);
  };
  return (
    <>
      <Wrapper>
        <Title onClick={onClickTitle}>MOONSMARKET</Title>
        <PositionRow>
          <Menu onClick={onClickMenu(0)} isPicked={pickArr[0]}>
            HOME
          </Menu>
          <Menu onClick={onClickMenu(1)} isPicked={pickArr[1]}>
            STYLE
          </Menu>
          <Menu onClick={onClickMenu(2)} isPicked={pickArr[2]}>
            SHOP
          </Menu>
        </PositionRow>
      </Wrapper>
    </>
  );
}
