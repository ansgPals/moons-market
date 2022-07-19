import { gql, useMutation, useQuery } from "@apollo/client";
import * as S from "./productCommentListItems.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";

import { FETCH_USED_ITEM_QUESTIONS } from "../productCommentList.container";
import QuestionAnswerItems from "../../QuestionAnswerItem/QuestionAnswerItems";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IUseditemQuestion,
} from "../../../../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
  UPDATE_USED_ITEM_QUESTION,
} from "./productCommentListItems.query";
import { getTimeForTodayDate } from "../../../../../../commons/library/utils";

export interface ICommentListUIProps {
  el: IUseditemQuestion;
}
const schema = yup.object({
  contents: yup.string().required("댓글 내용은 필수 입력 사항입니다."),
});
interface IFormValues {
  contents?: string;
}

export default function ProductCommentListUIItem(props: ICommentListUIProps) {
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">
  >(DELETE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWER);
  const { data: answerData } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: String(props.el._id),
    },
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickCommentDetail = () => {
    setIsDetail((prev) => !prev);
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };
  const onClickEditClose = () => {
    setIsEdit(false);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: String(props.el._id),
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
      Modal.info({ content: "질문이 삭제되었습니다!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const onClickEditSubmit = async (data: IFormValues) => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { contents: data.contents },
          useditemQuestionId: String(props.el._id),
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
      Modal.info({ content: "질문이 수정되었습니다!" });
      setIsEdit(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };
  const onClickCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };
  const onClickCreateAnswer = async (data: IFormValues) => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents: data.contents },
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.el._id,
            },
          },
        ],
      });
      Modal.info({ content: "답변이 등록되었습니다!" });
      setIsEdit(false);
      reset({ contents: "" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
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

      <S.ItemWrapper>
        <S.ItemBack onClick={onClickCommentDetail}>
          <S.FlexWrapper>
            <S.Avatar
              style={{ objectFit: "cover" }}
              src={
                props.el?.user?.picture
                  ? `https://storage.googleapis.com/${props.el?.user?.picture}`
                  : "/defaultProfileImg.png"
              }
            />
            <form onSubmit={handleSubmit(onClickEditSubmit)}>
              <S.Row>
                <S.MainWrapper>
                  <S.Contents>{props.el?.user.name}</S.Contents>

                  {isEdit ? (
                    <>
                      <S.ContentsEdit
                        defaultValue={props.el?.contents}
                        type="text"
                        {...register("contents")}
                      ></S.ContentsEdit>
                      <S.InputErr>
                        {formState.errors.contents?.message}
                      </S.InputErr>
                    </>
                  ) : (
                    <S.Contents>{props.el?.contents}</S.Contents>
                  )}
                </S.MainWrapper>
                <S.OptionWrapper>
                  {props.el.user._id === userData?.fetchUserLoggedIn?._id && (
                    <>
                      {isEdit ? (
                        <>
                          <S.EditButton isActive={formState.isValid}>
                            저장
                          </S.EditButton>
                          <S.DeleteIcon
                            src="/delete-img.png/"
                            onClick={onClickEditClose}
                          />
                        </>
                      ) : (
                        <>
                          <S.EditOpenButton onClick={onClickUpdate}>
                            수정
                          </S.EditOpenButton>
                          <S.DeleteIcon
                            src="/delete-img.png/"
                            onClick={onClickOpenDeleteModal}
                          />
                        </>
                      )}
                    </>
                  )}
                </S.OptionWrapper>
              </S.Row>
            </form>{" "}
          </S.FlexWrapper>{" "}
          <S.DateString>
            {getTimeForTodayDate(props.el?.createdAt)}
          </S.DateString>
        </S.ItemBack>
        {isDetail && (
          <>
            {answerData?.fetchUseditemQuestionAnswers.map((el: any) => (
              <QuestionAnswerItems
                key={el._id}
                el={el}
                questionId={props.el._id}
              />
            ))}
            <form onSubmit={handleSubmit(onClickCreateAnswer)}>
              <S.CreateRow>
                <S.Col>
                  <S.InputBox
                    placeholder="댓글로 답변을 입력해주세요."
                    type="text"
                    {...register("contents")}
                  ></S.InputBox>
                  <S.InputErr>{formState.errors.contents?.message}</S.InputErr>{" "}
                </S.Col>{" "}
                <S.SignUpButton isActive={formState.isValid}>
                  답변등록
                </S.SignUpButton>
              </S.CreateRow>
            </form>{" "}
          </>
        )}{" "}
        <S.CommentNum>
          답변{" "}
          {answerData?.fetchUseditemQuestionAnswers
            ? answerData?.fetchUseditemQuestionAnswers.length
            : 0}
          개
        </S.CommentNum>
      </S.ItemWrapper>
    </>
  );
}
