import * as MY from "./boardComment.styles";
import { IBoardCommentUIProps } from "./boardComment.types";
import { v4 as uuid } from "uuid";
import BoardCommentListItem from "./list/boardCommentList.container";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentUI(props: IBoardCommentUIProps) {
  return (
    <div>
      <MY.BackGround>
        <MY.CommentBox>
          <MY.CommentTitle>
            <MY.Title>댓글</MY.Title>
          </MY.CommentTitle>
          <MY.CommentTopBox style={{ marginBottom: "2rem" }}>
            <MY.NameInput
              id="inputWriter"
              placeholder="작성자"
              type="text"
              onChange={props.onChangeWriter}
              value={props.writer}
            ></MY.NameInput>
            <MY.PassWordInput
              placeholder="비밀번호"
              type="password"
              onChange={props.onChangePassWord}
              value={props.pass}
            ></MY.PassWordInput>
          </MY.CommentTopBox>
          <MY.CommentContents>
            <MY.CommentInPut
              placeholder="개인정보를 공유 및 요청하거나,명예훼손,무단 광고,불법정보 유포시 모니터링 후 삭제될 수 있으며,이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeContents}
              value={props.contents}
              maxLength={100}
            ></MY.CommentInPut>
            <MY.ContentsFootBox>
              <MY.TextLimit>{props.contents.length}/100</MY.TextLimit>
              <MY.OKButton onClick={props.ClickOKButton}>등록</MY.OKButton>
            </MY.ContentsFootBox>
          </MY.CommentContents>
        </MY.CommentBox>
        <MY.CommentListBox>
          {props.data?.fetchBoardComments && (
            <InfiniteScroll
              pageStart={0}
              loadMore={props.CommentScrolling}
              hasMore={true}
              useWindow={false}
            >
              {props.data?.fetchBoardComments.map((el: any) => (
                <BoardCommentListItem key={uuid()} el={el} />
              ))}
            </InfiniteScroll>
          )}
        </MY.CommentListBox>
      </MY.BackGround>
    </div>
  );
}
