import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export const BackGround = styled.div`
  width: 80rem;
  /* border: 1rem solid #6600ff; */
  border-radius: 1rem;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 10rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImageBox = styled.div`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  background-image: url("/.png");
  background-size: cover;
`;
export const ProfileImage = styled.img`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  object-fit: cover;
`;
export const RightBox = styled.div`
  margin-left: 10rem;
`;

export const Name = styled.div`
  font-size: 3rem;
`;

export const Email = styled.div`
  font-size: 3rem;
  color: #bdbdbd;
`;

export const Point = styled.div`
  font-size: 2rem;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const GoCharge = styled.button`
  background-color: white;
  font-size: 2.5rem;
  margin-left: 2rem;
  cursor: pointer;
  background-color: #6600ff;
  color: white;
  border: none;
  border-radius: 1rem;
`;
export const EditButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 2rem;
  background-image: url("/update.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
      picture
    }
  }
`;

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN, { variables: {} });
  const router = useRouter();
  const onClickGoCharge = () => {
    router.push("/myPage/charge-point");
  };
  const onClickEditButton = () => {
    router.push(`/myPage/profile-edit`);
  };
  return (
    <>
      <BackGround>
        <Row>
          <ProfileImageBox>
            <ProfileImage
              src={`https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`}
            />
          </ProfileImageBox>

          <RightBox>
            <Email>{data?.fetchUserLoggedIn.email}</Email>
            <Row>
              <Name>{data?.fetchUserLoggedIn.name} 님</Name>{" "}
              <EditButton onClick={onClickEditButton} />
            </Row>
            <Point>
              POINT :
              {data?.fetchUserLoggedIn.userPoint.amount
                ? data?.fetchUserLoggedIn.userPoint.amount
                : 0}
              MP<GoCharge onClick={onClickGoCharge}>충전</GoCharge>
            </Point>
          </RightBox>
        </Row>
      </BackGround>
    </>
  );
}
