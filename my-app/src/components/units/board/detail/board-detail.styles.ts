import styled from "@emotion/styled";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120rem;
  padding-top: 10rem;
`;
export const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  width: 80rem;
  border-radius: 1rem;
  border: 2px solid #ddd;
`;
export const WriterButton = styled.button`
  font-size: 2rem;
  font-family: "SUIT500";
  background-color: white;
  border-radius: 1rem;
  border: 1px solid #bdbdbd;
  width: 10rem;
  height: 5rem;
  cursor: pointer;
  :hover {
    border: 1px solid #7b23ff;
    color: #7b23ff;
    font-family: "SUIT700";
  }
`;
export const WriterInfo = styled.div`
  display: flex;
  width: 79.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  border-bottom: 1px solid #c4c4c4;
`;
export const ProfileImg = styled.img`
  width: 8rem;
  min-height: 8rem;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 2rem;
`;
export const UserId = styled.div`
  font-size: 2rem;
  color: gray;
  line-height: 8rem;
  margin-left: 1rem;
`;
export const MainImg = styled.img`
  object-fit: contain;
  width: 70rem;
  margin: 5rem;
`;
export const Contents = styled.div`
  width: 70rem;
  margin: 5rem;
  font-size: 2rem;
`;
export const PositionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const GoodIcon = styled(ThumbUpOffAltIcon)`
  font-size: 5rem;
  margin-left: 2rem;
  color: gray;
  cursor: pointer;
  :hover {
    color: #9e5dff;
  }
`;

export const BadIcon = styled(ThumbDownOffAltIcon)`
  font-size: 5rem;
  color: gray;
  cursor: pointer;
  :hover {
    color: #9e5dff;
  }
`;
