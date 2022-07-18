import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

import * as yup from "yup";
import { getTimeForTodayDate } from "../../../../../commons/library/utils";
import { userInfoState } from "../../../../../commons/store";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "../ProductCommentList/CommentListItem/productCommentListItems.query";

export const FlexWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2rem;
  width: 80rem;
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
  width: 59rem;
`;
export const ContentsEdit = styled.input`
  border: 1px solid #bdbdbd;
  width: 55rem;
`;
export const Row = styled.div`
  width: 55rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
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
`;
export const InputErr = styled.div`
  padding: 0px 2rem;
  width: 60rem;
  height: 2rem;
  min-height: 2rem;
  align-items: center;
  font-size: 1.4rem;
  color: red;
`;
export const DateString = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 6rem;
  color: #bdbdbd;
  margin-bottom: 1rem;

  border-bottom: 2px solid lightgray;
`;

export const EditOpenButton = styled.button`
  border: none;
  cursor: pointer;
  width: 6rem;

  font-size: 1.5rem;

  color: gray;
  margin-right: 1rem;
  background-color: white;
`;
interface IPropsInBox {
  isActive?: boolean;
}
export const EditButton = styled.button<IPropsInBox>`
  border: none;
  cursor: pointer;
  width: 6rem;

  font-size: 1.5rem;

  color: gray;
  margin-right: 1rem;
  background-color: white;
`;
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
export const CreateRow = styled.div`
  width: 50vw;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 20px;
`;

export const InputBox = styled.input`
  width: 40vw;
  height: 40px;
  align-items: center;
  border-radius: 16px;
  font-size: 16px;
  padding: 0px 10px;
  border: #e0c4ff 0.3rem solid;
  :focus {
    outline: none;
  }
`;

export interface IButtons {
  isActive: boolean;
}
export const SignUpButton = styled.button`
  width: 120px;

  margin-left: 10px;
  height: 40px;
  align-items: center;
  border-radius: 16px;
  font-size: 20px;
  border: 1px solid #75b582;
  background-color: ${(props: IButtons) =>
    props.isActive ? "#7b00ff" : "#e5e5e5"};
  color: ${(props: IButtons) => (props.isActive ? "white" : "black")};
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;
export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
    }
  }
`;

export interface ICommentListUIProps {
  el: IUseditemQuestion;
  questionId: string;
}
const schema = yup.object({
  contents: yup.string().required("댓글 내용은 필수 입력 사항입니다."),
});
interface IFormValues {
  contents?: string;
}
export default function QuestionAnswerItems(props: ICommentListUIProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEM_QUESTION_ANSWER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickUpdate = () => {
    setIsEdit(true);
  };
  const onClickEditClose = () => {
    setIsEdit(false);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(props.el._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.questionId,
            },
          },
        ],
      });
      Modal.info({ content: "답변이 삭제되었습니다!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickEditSubmit = async (data: IFormValues) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents: data.contents },
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.questionId,
            },
          },
        ],
      });
      Modal.info({ content: "답변이 수정되었습니다!" });
      setIsEdit(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
      alert(error.message);
    }
  };
  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };
  const onClickCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <Modal
          visible={true}
          onOk={onClickDelete}
          onCancel={onClickCloseDeleteModal}
        >
          정말로 질문을 삭제하시겠습니까??
        </Modal>
      )}
      <FlexWrapper>
        <Avatar
          style={{
            objectFit: "cover",
            width: "2rem",
            height: "2rem",
            marginRight: "2rem",
          }}
          src="/right-arrow.png"
        />
        <Avatar
          style={{ objectFit: "cover" }}
          src={
            props.el?.user?.picture
              ? `https://storage.googleapis.com/${props.el?.user?.picture}`
              : "/defaultProfileImg.png"
          }
        />
        <form onSubmit={handleSubmit(onClickEditSubmit)}>
          <Row>
            <MainWrapper>
              <Contents>{props.el?.user.name}</Contents>

              {isEdit ? (
                <>
                  <ContentsEdit
                    type="text"
                    {...register("contents")}
                    defaultValue={props.el?.contents}
                  ></ContentsEdit>
                  <InputErr>{formState.errors.contents?.message}</InputErr>
                </>
              ) : (
                <Contents>{props.el?.contents}</Contents>
              )}
            </MainWrapper>
            <OptionWrapper>
              {props.el.user._id === userData?.fetchUserLoggedIn._id && (
                <>
                  {isEdit ? (
                    <>
                      <EditButton isActive={formState.isValid}>저장</EditButton>
                      <DeleteIcon
                        src="/delelteImg.png/"
                        onClick={onClickEditClose}
                      />
                    </>
                  ) : (
                    <>
                      <EditOpenButton onClick={onClickUpdate}>
                        수정
                      </EditOpenButton>
                      <DeleteIcon
                        src="/delelteImg.png/"
                        onClick={onClickOpenDeleteModal}
                      />
                    </>
                  )}
                </>
              )}
            </OptionWrapper>
          </Row>
        </form>
      </FlexWrapper>
      <DateString>{getTimeForTodayDate(props.el?.createdAt)}</DateString>{" "}
    </>
  );
}
