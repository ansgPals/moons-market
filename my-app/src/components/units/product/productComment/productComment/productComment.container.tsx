import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FETCH_USED_ITEM_QUESTIONS } from "../ProductCommentList/productCommentList.container";
export const Back = styled.div`
  width: 80rem;
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
export const Row = styled.div`
  width: 80rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 20px;
`;

export const InputBox = styled.input`
  width: 60rem;
  height: 5rem;
  align-items: center;
  border-radius: 16px;
  font-size: 1.8rem;
  padding: 0px 2rem;
  border: #e0c4ff 0.3rem solid;
  :focus {
    outline: none;
  }
`;
export const InputErr = styled.div`
  padding: 0px 2rem;
  width: 60rem;
  height: 20px;
  min-height: 20px;
  align-items: center;
  font-size: 1.4rem;
  color: red;
`;
export interface IButtons {
  isActive: boolean;
}
export const SignUpButton = styled.button`
  width: 10rem;
  margin-left: 1rem;
  height: 5rem;
  align-items: center;
  border-radius: 1rem;
  font-size: 2rem;
  border: none;
  background-color: ${(props: IButtons) =>
    props.isActive ? "#7b00ff" : "#e5e5e5"};
  color: ${(props: IButtons) => (props.isActive ? "white" : "black")};
  font-weight: bold;
  cursor: pointer;
`;

const schema = yup.object({
  contents: yup.string().required("댓글 내용은 필수 입력 사항입니다."),
});

interface IFormValues {
  contents?: string;
}
export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export default function ProductCommentPage() {
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const router = useRouter();

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = async (data: IFormValues) => {
    if (formState.isValid) {
      try {
        await createUseditemQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemId: router.query.productId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: {
                useditemId: String(router.query.productId),
              },
            },
          ],
        });

        reset();
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  return (
    <Back>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <Row>
          <Col>
            <InputBox
              placeholder="댓글로 질문을 입력해주세요."
              type="text"
              {...register("contents")}
            ></InputBox>
            <InputErr>{formState.errors.contents?.message}</InputErr>
          </Col>
          <SignUpButton isActive={formState.isValid}>질문등록</SignUpButton>
        </Row>
      </form>
    </Back>
  );
}
