import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./boardComment.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import BoardCommentUI from "./boardComment.presenter";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentContainer() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [pass, setPass] = useState("");
  const [contents, setContents] = useState("");
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassWord = (event: ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.id) },
  });

  const ClickOKButton = async () => {
    if (writer === "" || pass === "" || contents === "") {
      alert("내용을 입력하세요");
      return;
    }
    if (writer !== "" && pass !== "" && contents !== "") {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: writer,
              password: pass,
              contents: contents,
              rating: 0,
            },
            boardId: String(router.query.id),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: String(router.query.id) },
            },
          ],
        });

        alert("댓글이 등록되었습니다.");
        setWriter(""), setPass(""), setContents("");
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };
  const CommentScrolling = () => {
    if (!data) return;
    console.log(data);
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentUI
      onChangeWriter={onChangeWriter}
      onChangePassWord={onChangePassWord}
      onChangeContents={onChangeContents}
      ClickOKButton={ClickOKButton}
      data={data}
      writer={writer}
      pass={pass}
      contents={contents}
      CommentScrolling={CommentScrolling}
    />
  );
}
