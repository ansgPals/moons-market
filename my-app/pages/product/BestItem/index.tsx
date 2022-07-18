import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useRecoilState } from "recoil";
import { todayProductState } from "../../../src/commons/store";
import DOMPurify from "dompurify";
import { IQuery } from "../../../src/commons/types/generated/types";
import {
  getDotMoney,
  getTimeForTodayDate,
} from "../../../src/commons/library/utils";

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

export const BackGround = styled.div`
  padding-top: 10rem;
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
export const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 23rem;
  height: 30rem;
  border-radius: 1rem 1rem 0rem 0rem;
`;

export const ProductName = styled.div`
  font-size: 2rem;
  width: 20rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ProductInfo = styled.div`
  height: 8rem;
  font-size: 2rem;
`;
export const MyCardContent = styled.div`
  padding: 2rem;
`;

export const BestTitle = styled.div`
  font-size: 4rem;
  color: #8c00ff;
  font-style: italic;
  font-family: "SUIT600";
  width: 80rem;
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
export default function BestProductPage() {
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEM_OF_THE_BEST
  );

  const [, setTodayProduct] = useRecoilState(todayProductState);

  const router = useRouter();

  const onClickBest = (el) => () => {
    const todayProduct = JSON.parse(
      localStorage.getItem("todayProduct") || "[]"
    );
    const temp = todayProduct.filter((El: any) => El._id === el._id);
    if (temp.length === 0) {
      todayProduct.push(el);
      localStorage.setItem("todayProduct", JSON.stringify(todayProduct));
      setTodayProduct(todayProduct);
    }

    router.push(`/product/${el?._id}`);
  };

  return (
    <div>
      <BackGround>
        <BestTitle>MOONS PICK</BestTitle>

        <Contents>
          {data?.fetchUseditemsOfTheBest.map((el: any, index: number) => (
            <div key={el._id}>
              <MyCard onClick={onClickBest(el)}>
                {el.images[0] ? (
                  <CardImage
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                ) : (
                  <CardImage src={"/noimg.png"} />
                )}
                <MyCardContent>
                  <ProductName>{el.name}</ProductName>
                  <ProductInfo>가격 : {getDotMoney(el.price)} 원</ProductInfo>
                </MyCardContent>
                <CardButton>
                  <PositionRow>
                    {" "}
                    <Heart />
                    <Text>{el?.pickedCount}</Text>
                  </PositionRow>
                  <Text>{getTimeForTodayDate(el?.createdAt)}</Text>
                </CardButton>
              </MyCard>
            </div>
          ))}
        </Contents>
      </BackGround>
    </div>
  );
}
