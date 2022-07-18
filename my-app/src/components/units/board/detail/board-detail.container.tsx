import { useMutation, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

import BoardDetailUI from "./board-detail.presenter";
import {
  DELETE_BOARD,
  DIS_LIKE_BOARD,
  FETCH_BOARD,
  FETCH_USER_LOGGED_IN,
  LIKE_BOARD,
} from "./board-detail.querys";

export default function BoardDetailContainer() {
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DIS_LIKE_BOARD);

  const router = useRouter();

  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );

  const [writeUser, setWriteUser] = useState<boolean>(false);
  const LikeButton = () => {
    likeBoard({
      variables: { boardId: String(data?.fetchBoard._id) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.id) },
        },
      ],
    });
  };

  const DisLikeButton = () => {
    dislikeBoard({
      variables: { boardId: String(data?.fetchBoard._id) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.id) },
        },
      ],
    });
  };

  const OnClickDelete = () => {
    deleteBoard({
      variables: { boardId: String(data?.fetchBoard._id) },
    });
    router.push("/board");
  };
  const OnClickEdit = () => {
    router.push(`/board/${router.query.id}/edit`);
  };
  useEffect(() => {
    if (data?.fetchBoard?.user?._id === userData?.fetchUserLoggedIn?._id) {
      setWriteUser(true);
    } else {
      setWriteUser(false);
    }
  }, [data, userData]);
  return (
    <BoardDetailUI
      OnClickEdit={OnClickEdit}
      OnClickDelete={OnClickDelete}
      data={data}
      DisLikeButton={DisLikeButton}
      LikeButton={LikeButton}
      writeUser={writeUser}
    />
  );
}
