import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 90px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
  margin-top: 40rem;
`;

const TopBox = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  font-size: 10px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`;
const LeftTop = styled.div`
  margin-top: 10px;
  font-size: 10px;
  cursor: pointer;
  background-color: none;
`;
const LeftBottom = styled.div`
  font-size: 10px;
`;
const Right = styled.div`
  font-size: 10px;
  margin-right: 100px;
`;
const Bottom = styled.div`
  font-size: 10px;
`;
const Foot = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;
export default function LayOutFooter() {
  return (
    <Wrapper>
      <TopBox>
        <Left>
          <LeftTop>고객상담 : 010-6336-3861 문의하기</LeftTop>
          <LeftBottom>문의가능시간 AM10:00 ~ PM6:00</LeftBottom>
        </Left>
        <Right>South Korea 패스트파이브 구로점 13th floor</Right>
      </TopBox>
      <Bottom>개인정보처리방침 | 쿠키공지 | 이용약관 | 접근성</Bottom>
      <Foot>iamm71kr@gmail.com</Foot>
    </Wrapper>
  );
}
