import styled from "@emotion/styled";
import { useRouter } from "next/router";

const WriteButton = styled.button`
  width: 57px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 12;
  top: 20%;
  border: none;
  background: #ffffff;
  box-shadow: 0px 5px 35px rgba(23, 0, 58, 0.12);
  border-radius: 29px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 5px 15px rgba(100, 0, 255, 0.15);
  }
  right: 5%;
`;
const Write = styled.div`
  background-image: url("/update.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
`;

export default function WriteButtonPage(props: { title: "board" | "product" }) {
  const router = useRouter();
  const onClickWrite = () => {
    router.push(`/${props.title}/new`);
  };

  return (
    <WriteButton onClick={onClickWrite}>
      <Write />
    </WriteButton>
  );
}
