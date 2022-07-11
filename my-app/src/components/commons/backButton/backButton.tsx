import styled from "@emotion/styled";

const BackButton = styled.button`
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: #ffffff;
  box-shadow: 0.2666rem 0.2666rem 1.9333rem rgba(0, 0, 0, 0.25);
  border-radius: 1.933rem;
  position: absolute;
  z-index: 2;
  margin-left: -100rem;
`;
const Arrow = styled.div`
  margin-top: 0.2rem;
  background-image: url("/backArrow.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 3rem;
  width: 3rem;
`;

export default function BackButtonComponent() {
  const onClickBack = () => {
    window.history.back();
  };
  return (
    <BackButton onClick={onClickBack}>
      <Arrow />
    </BackButton>
  );
}
