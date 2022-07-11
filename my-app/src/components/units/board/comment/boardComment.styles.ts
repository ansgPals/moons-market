import styled from "@emotion/styled";

export const BackGround = styled.div`
  width: 80rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CommentBox = styled.div`
  border-top: #bdbdbd 1px solid;
  padding: 1rem 0px;
`;

export const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem 0px;
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
  width: 80rem;
`;
export const CommentInPut = styled.textarea`
  border: none;
  width: 79rem;
  min-height: 12rem;
  padding: 1rem;
  font-size: 1.6rem;
  color: #828282;
`;
export const ContentsFootBox = styled.div`
  border-top: #bdbdbd 1px solid;
  width: 80rem;
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
  height: 100rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 130rem;
  min-height: 80rem;
  margin: 10rem;
`;
