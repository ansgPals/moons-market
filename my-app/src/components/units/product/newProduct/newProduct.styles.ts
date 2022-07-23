import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const BackGround = styled.div`
  margin-top: 3rem;
  width: 80rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  margin-bottom: 3rem;
`;
export const MyTitle = styled.div`
  margin-top: 3rem;
  width: 70rem;
  height: 5rem;
  font-size: 2.5rem;
  border-bottom: 0.3rem solid #7bd778;
`;

export const MyBody = styled.div`
  width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackTop = styled.div`
  height: 9rem;
  width: 80rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TopLt = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const MyErr = styled.div`
  color: red;
`;
export const MyName = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  color: black;
  width: 40rem;
  height: 3rem;
  line-height: 3rem;
`;
export const PutName = styled.input`
  font-size: 1.5rem;

  border: 0.2rem solid #bdbdbd;
  width: 60rem;
  height: 5rem;
  margin-top: 1.2rem;
  border-radius: 1.5rem;
  padding-left: 1rem;
`;

export const TopRt = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const PutPass = styled.input`
  font-size: 1.5rem;

  border: 0.3rem solid #bdbdbd;
  width: 60rem;
  height: 5rem;
  margin-top: 1.2rem;
  border-radius: 1.5rem;
  padding-left: 1rem;
`;

export const TitleBox = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const PutTitle = styled.input`
  font-size: 1.5rem;

  border: 0.3rem solid #bdbdbd;
  width: 60rem;
  height: 5rem;
  margin-top: 1.2rem;
  border-radius: 1.5rem;
  padding-left: 1rem;
`;
export const TextBox = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Editor = styled(ReactQuill)`
  .ql-editor {
    height: 30rem;
    width: 60rem;
  }
  .ql-toolbar {
    background-color: #bdbdbd;
    border: 0.3rem solid #bdbdbd;
    border-radius: 1.5rem;
  }

  .ql-container {
    border: 0.3rem solid #bdbdbd;
    border-radius: 1.5rem;
    font-size: 2rem;
  }
`;

export const PhotoBox = styled.div`
  height: 20rem;
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const GrayBoxBox = styled.div`
  height: 10rem;
  width: 100rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

interface IPropsInBox {
  isActive?: boolean;
}

export const InBox = styled.button<IPropsInBox>`
  margin-top: 3rem;
  border-radius: 2rem;

  height: 6rem;
  width: 50rem;
  color: white;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#6735f0" : "#bdbdbd")};
`;
export const AddBox = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: flex-start;
`;

export const SurchPush = styled.button`
  font-size: 1.6rem;
  color: white;
  border: none;
  background-color: #6735f0;
  cursor: pointer;
  border-radius: 2rem;
  width: 12rem;
  height: 5rem;
  margin-top: 1.2rem;
  margin-left: 1.2rem;
`;
export const PutAdd = styled.div`
  font-size: 1.6rem;
  line-height: 4.5rem;
  border: 0.3rem solid #bdbdbd;
  width: 45rem;
  height: 5rem;
  margin-top: 1.2rem;
  border-radius: 1.5rem;
  padding-left: 1rem;
`;
export const PutAddDetail = styled.input`
  font-size: 1.6rme;
  border: 0.3rem solid #bdbdbd;
  width: 60rem;
  height: 5rem;
  margin-top: 1.2rem;
  border-radius: 1.5rem;
  padding-left: 1rem;
`;
export const Col = styled.div`
  width: 60rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TagBox = styled.div`
  width: 80rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
`;
export const Tag = styled.div`
  font-size: 2rem;
  height: 4rem;
  border-radius: 1.5rem;
  padding: 0px 1rem;
  line-height: 3.5rem;
  margin-right: 2rem;
  border: green 1px solid;
  cursor: pointer;
`;
