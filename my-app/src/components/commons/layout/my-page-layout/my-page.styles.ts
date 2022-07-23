import styled from "@emotion/styled";

export const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-family: "SUIT700";
  margin-left: 1.333rem;
  user-select: none;
`;
export const TopArrow = styled.header`
  width: min-content;
  font-size: 2rem;
  font-family: "SUIT700";
  color: #6400ff;
  transform: scaleX(-1);
  cursor: pointer;
  user-select: none;
`;
export const TopBarBox = styled.nav`
  width: 100%;
  margin-top: 2.666rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  user-select: none;
  border-bottom: 0.0666rem solid #e5e5e5;
  margin-bottom: 2.666rem;
`;
interface IShowProps {
  pick: string;
}
export const ProfileMenu = styled.div`
  text-align: center;
  line-height: 2.5rem;
  font-family: ${(props: IShowProps) =>
    props.pick === "profile" ? "SUIT700" : "SUIT400"};
  font-size: 1.333rem;
  width: 9.1333rem;
  padding-bottom: ${(props: IShowProps) =>
    props.pick === "profile" ? " 0.8rem" : "0.666rem"};
  color: ${(props: IShowProps) =>
    props.pick === "profile" ? "#6400FF" : " #7C7C7C"};
  box-shadow: ${(props: IShowProps) =>
    props.pick === "profile" ? "inset 0 -0.333rem 0  #6400FF" : " none"};
  cursor: pointer;
`;

export const UserInformationMenu = styled.div`
  text-align: center;
  line-height: 2.5rem;

  font-family: ${(props: IShowProps) =>
    props.pick === "userInformation" ? "SUIT700" : "SUIT400"};
  font-size: 1.333rem;
  width: 9.1333rem;

  padding-bottom: ${(props: IShowProps) =>
    props.pick === "userInformation" ? " 0.8rem" : "0.666rem"};
  color: ${(props: IShowProps) =>
    props.pick === "userInformation" ? "#6400FF" : " #7C7C7C"};
  box-shadow: ${(props: IShowProps) =>
    props.pick === "userInformation"
      ? "inset 0 -0.333rem 0  #6400FF"
      : " none"};
  cursor: pointer;
`;
export const RedText = styled.div`
  font-size: 1.333rem;
  font-family: "SUIT400";
  color: red;
  margin-bottom: 0.5rem;
`;
