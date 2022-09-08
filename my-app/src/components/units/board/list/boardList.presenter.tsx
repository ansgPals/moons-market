import { IBoardListUIProps } from "./boardList.types";
import { v4 as uuid } from "uuid";
import * as S from "./boardList.styles";
import BoardListItem from "../list-item/board-list-item.container";
import InfiniteScroll from "react-infinite-scroller";
import TopButtonPage from "../../../commons/topButton";
import WriteButtonPage from "../../../commons/write-button";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <WriteButtonPage title={"board"} />
      <TopButtonPage />
      <S.Title>It{"'"}S STYLE BOARD!</S.Title>
      <S.SearchBox>
        <S.SearchInput onChange={props.onChangeSearch}></S.SearchInput>
        <S.SearchInputIcon></S.SearchInputIcon>
      </S.SearchBox>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        <S.Contents>
          {props.data?.fetchBoards?.map((el) => (
            <BoardListItem
              keyWord={props.keyWord}
              onClickEvent={props.onClickGoBoard}
              key={uuid()}
              data={el}
            />
          ))}
        </S.Contents>
      </InfiniteScroll>
    </S.Wrapper>
  );
}
