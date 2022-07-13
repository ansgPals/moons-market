import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface NextArrowProps {
  style?: any;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
const Prev = styled.div`
  position: absolute;
  width: 7rem;
  height: 8rem;
  border-radius: 2rem 0rem 0rem 2rem;
  font-size: 5rem;
  line-height: 8rem;
  text-align: center;
  z-index: 2;
  color: white;
  cursor: pointer;
  background-color: rgba(94, 89, 99, 0.3);
  :hover {
    background-color: rgba(159, 63, 255, 0.3);
  }
  margin-top: 12%;
  margin-left: 12%;
`;
export default function PrevArrow({ style, onClick }: NextArrowProps) {
  return <Prev onClick={onClick}>{"<"}</Prev>;
}
