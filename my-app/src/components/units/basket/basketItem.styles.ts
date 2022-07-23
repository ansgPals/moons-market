import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 80rem;
  border-bottom: 1px solid #e8e7e7;
  display: flex;
  padding: 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ProductCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  :hover {
  }
`;

export const IMG = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

export const TitleBox = styled.div`
  padding-left: 20px;
  width: 30rem;
  font-size: 2rem;
  font-weight: bold;
`;
export const RemarkBox = styled.div`
  padding-left: 20px;
  width: 30rem;
  font-size: 2rem;
`;
export const PriceBox = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #5907ff;
`;
export const Name = styled.div`
  color: gray;
  width: 15rem;
  font-size: 1rem;
  line-height: 20px;
`;
