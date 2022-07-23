/* eslint-disable @next/next/no-sync-scripts */
import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import Head from "next/head";
import { useState } from "react";
export const Back = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PointBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80rem;
  padding: 5rem;
`;
export const Point = styled.div`
  width: 20rem;
  height: 8rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  border: 2px solid #5500ff;
  :hover {
    background-color: #5500ff;
    border: none;
    color: white;
  }
  font-size: 2.5rem;
  line-height: 8rem;
`;
export const PickPoint = styled.div`
  width: 20rem;
  height: 8rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

  background-color: #5500ff;
  border: none;
  color: white;
  font-size: 2.5rem;
  line-height: 8rem;
`;
export const PaymentButton = styled.button`
  width: 40rem;
  height: 8rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  border-radius: 1rem;

  background-color: #5500ff;
  border: none;
  color: white;
  cursor: pointer;
  :hover {
    font-family: "SUIT700";
  }
`;
export const Text = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      amount
    }
  }
`;
declare const window: typeof globalThis & {
  IMP: any;
};
export default function ChargePointPage() {
  const [amount, setAmount] = useState(0);
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN, { variables: {} });
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const pointArr = [1000, 2000, 10000, 20000, 30000, 40000];

  const onClickPayment = async () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "문스마켓충천하기",
        amount: Number(amount),
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: `https://moonsportfolio.shop//myPage/charge-point`,
      },
      async (rsp: any) => {
        if (rsp.success) {
          const impUid = rsp.imp_uid;
          await createPointTransactionOfLoading({
            variables: { impUid },
          });
          Modal.info({ content: "결제가 성공되었어요!" });

          refetch({});
        } else {
          alert("결제실패");
        }
      }
    );
  };
  const onClickPoint = (el) => () => {
    setAmount(el);
  };

  return (
    <Back>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <PointBox>
        {pointArr.map((el, index) =>
          amount === el ? (
            <PickPoint key={index} onClick={onClickPoint(el)}>
              {el}MP
            </PickPoint>
          ) : (
            <Point key={index} onClick={onClickPoint(el)}>
              {el}MP
            </Point>
          )
        )}
      </PointBox>
      <Text>
        {" "}
        내포인트 :
        {data?.fetchUserLoggedIn.userPoint.amount
          ? data?.fetchUserLoggedIn.userPoint.amount
          : 0}
        MP + 충전포인트 : {amount}MP{""} ={" "}
        {data?.fetchUserLoggedIn.userPoint.amount + amount}MP
      </Text>
      <PaymentButton onClick={onClickPayment}>
        {amount}원 {"  "}결제하기
      </PaymentButton>
      <Text style={{ marginBottom: "10rem" }}>
        이페이지는 포트폴리오 페이지로 결제후 금액은 카드사에서 자동으로
        환불됩니다.
      </Text>
    </Back>
  );
}
