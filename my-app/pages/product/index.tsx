import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import WaitingCardSlider from "../../src/components/commons/carousel-main";
import BestProductPage from "./BestItem";
import ProductList from "./list";
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
export default function ProductMainPage() {
  return (
    <>
      <BestProductPage />
      <ProductList />
    </>
  );
}
