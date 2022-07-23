import styled from "@emotion/styled";
import { IButtonColorProps } from "./boardWrite.types";

export const BackGround = styled.div`
  box-shadow: 0px 5px 35px rgba(23, 0, 58, 0.12);
  width: 80rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;
export const MyTitle = styled.div`
  width: 60rem;
  font-family: "SUIT600";
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

export const MyBody = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BackTop = styled.div`
  width: 60rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PositionCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const MyErr = styled.div`
  color: red;
  height: 1.5rem;
  font-size: 1rem;
  margin-left: 1rem;
`;
export const MyName = styled.div`
  font-size: 1.5rem;
  color: black;
  width: 10rem;
`;
export const PutName = styled.input`
  font-size: 1.5rem;
  color: #c4c4c4;
  border: 1px solid #bdbdbd;
  width: 28rem;
  height: 3rem;
  margin-top: 1rem;
  padding: 0rem 1rem;
  border-radius: 0.5rem;
`;

export const TitleBox = styled.div`
  margin-top: 2rem;
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PutTitle = styled.input`
  font-size: 1.5rem;
  color: #c4c4c4;
  padding: 0rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #bdbdbd;
  width: 60rem;
  height: 3rem;
  margin-top: 1rem;
`;
export const TextBox = styled.div`
  margin-top: 2rem;
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PutText = styled.textarea`
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #c4c4c4;
  border: 1px solid #bdbdbd;
  width: 60rem;
  min-height: 10rem;
  margin-top: 1rem;
`;

export const PhotoBox = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const GrayBoxBox = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const InBox = styled.button`
  margin-top: 4rem;
  height: 5rem;
  width: 179px;
  background-color: ${(props: IButtonColorProps) =>
    props.isActive ? "#6400ff" : "none"};
  border: none;
  color: white;
  font-family: "SUIT600";
  border-radius: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;
