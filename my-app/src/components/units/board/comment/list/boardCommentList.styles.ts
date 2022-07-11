import styled from "@emotion/styled";

export const ListProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: #bdbdbd solid 1px;
  margin-top: 3rem;
  width: 80rem;
  padding-bottom: 2rem;
`;

export const ListProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
export const Photo = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 1rem;
  background-size: cover;
`;
export const ListContents = styled.div`
  width: 100rem;

  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
export const CommentButton = styled.div`
  width: 14rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
export const EditButton = styled.button`
  margin-right: 1.5rem;
  background-image: url("/freeboard/연필.png");
  background-size: cover;
  background-color: white;
  width: 1.8rem;
  height: 1.8rem;
  border: none;
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  margin-right: 1.5rem;
  background-image: url("/freeboard/nono.png");
  background-size: cover;
  background-color: white;
  width: 1.8rem;
  height: 1, 8rem;
  border: none;
  cursor: pointer;
`;
export const DeleteButton2 = styled.button`
  margin-right: 1.5rem;
  background-image: url("/freeboard/nono.png");
  background-size: cover;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  margin-left: 105rem;
  background-color: white;
`;
export const NameStar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 3rem;
`;
export const ListStar = styled.div`
  margin-left: 2rem;
  line-height: 1.6rem;
`;
export const ListName = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  color: gray;
`;
export const ListComment = styled.div`
  font-size: 1.6rem;
  width: 66rem;
  color: #4f4f4f;
  word-wrap: break-word;
`;
export const ListDate = styled.div`
  width: 80rem;
  height: 3rem;
  padding-left: 7rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 3rem;
  color: #bdbdbd;
`;

export const CommentEditBox = styled.div`
  border-top: #bdbdbd 1px solid;
  border-bottom: #bdbdbd 1px solid;
  padding: 1rem 0px;
`;
export const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem 0px;
`;
export const CommentIcon = styled.div`
  background-image: url("/freeboard/프로필.png");
  width: 2rem;
  height: 2rem;
  background-size: cover;
  margin-right: 1.2rem;
`;
export const Title = styled.div`
  font-size: 1.8rem;
`;
export const CommentTopBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 0px;
`;
export const NameInput = styled.input`
  width: 18rem;
  height: 5.2rem;
  font-size: 1.6rem;
  padding: 1rem;
  color: #828282;
  margin-right: 3rem;
  border: #bdbdbd 1px solid;
`;
export const PassWordInput = styled.input`
  width: 18rem;
  height: 5.2rem;
  font-size: 1.6rem;
  padding: 1rem;
  color: #828282;
  border: #bdbdbd 1px solid;
`;
export const Star = styled.div`
  margin-left: 1.5rem;
  line-height: 5.2rem;
`;

export const CommentContents = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  width: 120rem;
`;
export const CommentInPut = styled.textarea`
  border: none;
  width: 119rem;
  min-height: 12rem;
  padding: 1rem;
  font-size: 1.6rem;
  color: #828282;
`;
export const ContentsFootBox = styled.div`
  border-top: #bdbdbd 1px solid;
  width: 120rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
`;
export const TextLimit = styled.div`
  width: 108rem;
  padding: 1rem;
  color: #bdbdbd;
  font-size: 1.6rem;
  text-align: start;
  line-height: 3rem;
`;
export const OKButton = styled.div`
  background-color: black;
  width: 12rem;
  color: white;
  font-size: 1.6rem;
  text-align: center;
  line-height: 5rem;
  cursor: pointer;
  :hover {
    background-color: gray;
  }
`;
export const CommentListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 80rem;
  min-height: 80rem;
`;
