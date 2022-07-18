import { ChangeEvent, MouseEvent, useState } from "react";
import * as S from "./boardCommentList.styles";
import { Rate } from "antd";
import { Modal } from "antd";

import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "../boardComment.queries";
import { useMutation } from "@apollo/client";
import {
  ICommentList,
  IMyUpDate,
  IMyVariables,
} from "./boardCommentList.types";
import { useRouter } from "next/router";
import { getTimeForTodayDate } from "../../../../../commons/library/utils";

export default function BoardCommentListItem(props: ICommentList) {
  const [deleteId, setDeleteId] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [editPass, setEditPass] = useState("");
  const [editContents, setEditContents] = useState("");
  const [editValue, setEditValue] = useState(3);
  const [deletePass, setDeletePass] = useState("");
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const router = useRouter();

  const onChangeEditPassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setEditPass(event.target.value);
  };
  const onChangeEditContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditContents(event.target.value);
  };

  const onChangeDeletePass = (event: ChangeEvent<HTMLInputElement>) => {
    setDeletePass(event.target.value);
  };
  const DeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: { boardCommentId: deleteId, password: deletePass },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      alert("댓글이 삭제되었습니다.");
      DeleteModal();
    } catch (error) {
      alert(error);
    }
  };

  const DeletePassWord = (event: MouseEvent<HTMLButtonElement>) => {
    setDeleteId((event.target as HTMLButtonElement).id);
    setDeleteOpen((prev: any) => !prev);
  };

  const editCommentIcon = (event: MouseEvent<HTMLButtonElement>) => {
    if (isEdit === false) setIsEdit(true);
    if (isEdit === true) setIsEdit(false);
    setCommentId((event.target as HTMLButtonElement).id);
  };

  const CloseEdit = () => {
    setIsEdit(false);
  };

  const UpDateComment = async () => {
    if (!editContents) {
      alert("수정한 내용이없습니다.");
      return;
    }
    if (editPass === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }

    const MyUpdateInput: IMyUpDate = {};
    const myVariables: IMyVariables = {
      updateBoardCommentInput: MyUpdateInput,
      password: editPass,
      boardCommentId: String(commentId),
    };

    if (editContents !== "") MyUpdateInput.contents = editContents;
    if (!editValue) MyUpdateInput.rating = editValue;

    try {
      await updateBoardComment({
        variables: myVariables,
      });
      alert("댓글이 수정되었습니다.");
      setIsEdit(false);
    } catch (error) {
      alert(error);
    }
  };
  const DeleteModal = () => {
    setDeleteOpen((prev: any) => !prev);
  };

  return (
    <div>
      {isEdit === false && (
        <S.ListProfileBox>
          <S.ListProfile>
            <S.Photo src="/defaultProfileImg.png" />
            <S.ListContents>
              <S.ListName>{props.el.writer}</S.ListName>{" "}
              <S.ListComment>{props.el.contents} </S.ListComment>
            </S.ListContents>
            <S.CommentButton>
              <S.EditButton id={props.el._id} onClick={editCommentIcon}>
                수정
              </S.EditButton>
              <S.DeleteButton onClick={DeletePassWord} id={props.el._id}>
                삭제
              </S.DeleteButton>
              {deleteOpen && (
                <Modal
                  visible={true}
                  onOk={DeleteComment}
                  onCancel={DeleteModal}
                >
                  <div>댓글을 삭제하시려면 비밀번호를 입력하세요.</div>
                  <input
                    type="password"
                    placeholder="비밀번호"
                    onChange={onChangeDeletePass}
                  ></input>
                </Modal>
              )}
            </S.CommentButton>
          </S.ListProfile>
          <S.ListDate>{getTimeForTodayDate(props.el.createdAt)}</S.ListDate>
        </S.ListProfileBox>
      )}
      {isEdit === true && (
        <S.CommentEditBox>
          <S.CommentTitle>
            <S.Title>댓글수정</S.Title>
            <S.DeleteButton style={{ marginRight: "0px" }} onClick={CloseEdit}>
              취소
            </S.DeleteButton>
          </S.CommentTitle>
          <S.CommentTopBox>
            <S.NameInput
              id="editWriter"
              value={props.el.writer}
              type="text"
            ></S.NameInput>
            <S.PassWordInput
              placeholder="비밀번호"
              type="password"
              onChange={onChangeEditPassWord}
            ></S.PassWordInput>
          </S.CommentTopBox>
          <S.CommentContents>
            <S.CommentInPut
              defaultValue={props.el.contents}
              onChange={onChangeEditContents}
              maxLength={100}
            ></S.CommentInPut>
            <S.ContentsFootBox>
              <S.TextLimit>{editContents.length}/100</S.TextLimit>
              <S.OKButton onClick={UpDateComment}>수정</S.OKButton>
            </S.ContentsFootBox>
          </S.CommentContents>
        </S.CommentEditBox>
      )}
    </div>
  );
}
