import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  width: 80rem;
  margin: 0px 10rem;
  padding-top: 2rem;
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;

export const MainWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const Contents = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  width: 55rem;
`;
export const ContentsEdit = styled.input`
  border: 1px solid #bdbdbd;
  width: 55rem;
`;
export const Row = styled.div`
  width: 74rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 13rem;
  height: 3rem;
`;
export const UpdateIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  background-color: white;
`;
export const InputErr = styled.div`
  padding: 0px 2rem;
  width: 62rem;
  height: 3rem;

  align-items: center;
  font-size: 1.4rem;
  color: red;
`;
export const DateString = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 6rem;
  color: #bdbdbd;
  border-bottom: 2px solid lightgray;
`;

export const EditOpenButton = styled.button`
  border: none;
  cursor: pointer;
  width: 6rem;

  font-size: 1.5rem;

  color: gray;
  margin-right: 0.5rem;
  background-color: white;
`;
interface IPropsInBox {
  isActive?: boolean;
}
export const EditButton = styled.button<IPropsInBox>`
  border: none;
  cursor: pointer;
  width: 10rem;

  font-size: 1.5rem;

  color: gray;
  margin-right: 1rem;
  background-color: white;
`;

export const CommentNum = styled.button`
  border: none;
  background-color: white;
  height: 3rem;
  margin-left: 2rem;
  width: 8rem;
  font-size: 1.5rem;
  color: #ababab;
  text-align: end;
`;
export const Back = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CreateRow = styled.div`
  margin-top: 2rem;
  width: 80rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #c7c7c7;
`;

export const InputBox = styled.input`
  width: 60rem;

  height: 4rem;
  align-items: center;
  border-radius: 1.5rem;
  font-size: 1.3rem;
  padding: 0px 1rem;
  border: #e0c4ff 0.3rem solid;
  :focus {
    outline: none;
  }
`;

export interface IButtons {
  isActive: boolean;
}
export const SignUpButton = styled.button`
  width: 10rem;
  margin-left: 1rem;

  align-items: center;
  border-radius: 1rem;

  font-size: 1.8rem;
  background-color: ${(props: IButtons) =>
    props.isActive ? "#7b00ff" : "#e5e5e5"};
  border: none;
  color: ${(props: IButtons) => (props.isActive ? "white" : "black")};
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: white;
    background-color: #7b00ff;
  }
`;
export const ItemBack = styled.div`
  cursor: pointer;
`;
