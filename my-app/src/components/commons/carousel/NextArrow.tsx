import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface NextArrowProps {
  style?: any;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
const Next = styled.div`
  position: absolute;
  width: 7rem;
  height: 8rem;
  border-radius: 0rem 2rem 2rem 0rem;
  font-size: 5rem;
  line-height: 8rem;
  text-align: center;
  margin-left: 125rem;
  z-index: 2;
  color: white;
  cursor: pointer;
  background-color: rgba(94, 89, 99, 0.3);
  :hover {
    background-color: rgba(159, 63, 255, 0.3);
  }
`;
export default function NextArrow({ style, onClick }: NextArrowProps) {
  return <Next onClick={onClick}>{">"}</Next>;
}
