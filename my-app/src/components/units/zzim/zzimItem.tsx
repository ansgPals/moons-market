import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

import { useRouter } from "next/router";
import { useState } from "react";
import { IZzimItemProps } from "./zzim.types";

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

// ignore prettier
export const NoHeartIcon = styled.div`
  background-image: url("/whiteheart.png");
  height: 3rem;
  width: 3rem;
  background-size: cover;
  margin-bottom: 1rem;
  :hover {
    background-image: url("/whiteheart.png");
  }
  cursor: pointer;
`;
export const HeartIcon = styled.div`
  background-image: url("/heart.png");
  height: 3rem;
  width: 3rem;
  background-size: cover;
  margin-bottom: 1rem;
  :hover {
    background-image: url("/heart.png");
  }
  cursor: pointer;
`;
export const TOGGLE_USED_ITEM_PISK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export default function ZzimItemPage(props: IZzimItemProps) {
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PISK);

  const [isPick, setPick] = useState(true);
  const router = useRouter();
  const onClickProduct = () => {
    router.push(`/product/${props.el._id}`);
  };
  const onClickPick = () => {
    setPick((prev) => !prev);
    try {
      toggleUseditemPick({
        variables: {
          useditemId: props.el._id,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <BackGround>
        {props.el.images[0] ? (
          <IMG src={`https://storage.googleapis.com/${props.el.images[0]}`} />
        ) : (
          <IMG src={"/noimg.png"} />
        )}

        <ProductCol onClick={onClickProduct}>
          <TitleBox>{props.el.name}</TitleBox>
          <RemarkBox>{props.el.remarks}</RemarkBox>
        </ProductCol>
        <Col>
          <PriceBox> {props.el.price}원</PriceBox>
          <Name>
            판매자명 :{"  "}
            {props.el.seller.name}
          </Name>
        </Col>
        {isPick ? (
          <HeartIcon onClick={onClickPick}></HeartIcon>
        ) : (
          <NoHeartIcon onClick={onClickPick}></NoHeartIcon>
        )}
      </BackGround>
    </>
  );
}
