import { gql } from "@apollo/client";

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
