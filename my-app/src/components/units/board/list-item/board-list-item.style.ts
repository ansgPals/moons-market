import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 23rem;
  height: fit-content;

  border-radius: 1rem;
  margin-top: 3rem;
  margin-right: 3rem;
  border-radius: 10px 8px 10px 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 10px rgba(23, 0, 58, 0.1);
  }
`;
export const StyleImg = styled.img`
  object-fit: contain;
  width: 23rem;
`;
export const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 5rem;
  min-height: 5rem;
  margin-left: 2rem;
  object-fit: cover;
  border-radius: 50%;
`;
export const UserId = styled.div`
  font-size: 2rem;
  width: 14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  color: gray;
  margin-left: 1rem;
`;
interface ISearchWordProps {
  isMatched: boolean;
}
export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 21rem;
  padding: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
export const Title = styled.span`
  color: ${(props: ISearchWordProps) =>
    props.isMatched ? "#9e5dff" : "black"};
  font-family: ${(props: ISearchWordProps) =>
    props.isMatched ? "SUIT600" : "SUIT400"}; ;
`;
export const CreateAt = styled.div`
  color: gray;
  font-size: 1.5rem;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
`;
