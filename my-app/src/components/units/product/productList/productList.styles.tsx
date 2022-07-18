import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { CardContent } from "@mui/material";

export const BackGround = styled.div`
  padding-top: 100px;
  width: 120rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 120rem;
  min-height: 100rem;

  justify-content: center;
  align-items: center;
`;
export const MyCard = styled.div`
  width: 23rem;
  height: 50rem;
  border-radius: 1rem;
  margin-top: 5rem;
  margin-right: 3rem;
  border-radius: 1rem;
  cursor: pointer;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(23, 0, 58, 0.1);
  :hover {
    box-shadow: none;
  }
`;
export const SerchBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 120rem;
  height: fit-content;
  justify-content: center;
  align-items: center;
  color: #8c00ff;
  margin-bottom: 20px;
`;
export const SerchDiv = styled.div`
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const SearchInput = styled.input`
  padding: 0px 2rem;
  width: 60rem;
  height: 6rem;
  background-color: white;
  text-align: start;
  font-size: 3rem;
  line-height: 8rem;
  border: 0.5rem solid #8c00ff;

  margin-bottom: 2rem;
  :focus {
    color: #8c00ff;
  }
`;
interface IProps {
  isMatched: boolean;
}
export const SearchWord = styled.span`
  font-size: 2rem;
  color: ${(props: IProps) => (props.isMatched ? "#f542b0" : "black")};
`;
export const MyCardContent = styled.div`
  width: 23rem;
  padding: 2rem;
`;
export const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 23rem;
  height: 30rem;
  border-radius: 1rem 1rem 0rem 0rem;
`;

export const ProductName = styled.div`
  font-size: 2.5rem;
  color: #bdbdbd;
  width: 20rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const Remark = styled.div`
  font-size: 1.5rem;
  width: 20rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ProductInfo = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 23rem;
`;
export const CardButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 23rem;
  padding: 0rem 2rem;
`;
export const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 6rem;
`;
export const Heart = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: url("/heart.png");
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Text = styled.div`
  font-size: 1.5rem;
  color: gray;
`;
