import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardList.queries";
import BoardListUI from "./boardList.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";

export default function BoardListContainer() {
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const [keyword, setKeyword] = useState<string>("");

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  const searchDebounce = _.debounce((searchWord: any) => {
    refetch({ search: searchWord, page: 1 });
    setKeyword(searchWord);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    searchDebounce(event.target.value);
  };

  const onClickGoBoard = (id: string) => () => {
    router.push(`/board/${id}`);
  };

  const GoWriteBoard = () => {
    router.push(`/board/new`);
  };

  return (
    <BoardListUI
      data={data}
      onClickGoBoard={onClickGoBoard}
      GoWriteBoard={GoWriteBoard}
      onLoadMore={onLoadMore}
      onChangeSearch={onChangeSearch}
      keyWord={keyword}
    />
  );
}
