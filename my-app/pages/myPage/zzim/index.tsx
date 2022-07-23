import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

import ZzimItemPage from "../../../src/components/units/zzim/zzimItem";

const Wrapper = styled.div`
  width: 80rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 4rem;
`;

const ZzimItem = styled.div`
  width: 500px;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        _id
        email
        name
        picture
      }

      createdAt

      createdAt
    }
  }
`;

export default function MyZzimPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  return (
    <>
      <Wrapper>
        <ZzimItem>
          {" "}
          {data?.fetchUseditemsIPicked.map((el) => (
            <ZzimItemPage el={el} key={el._id} />
          ))}
        </ZzimItem>
      </Wrapper>
    </>
  );
}
