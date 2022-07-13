import * as S from "./board-detail.styles";
import BackButtonComponent from "../../../commons/backButton/backButton";
import { getTimeForTodayDate } from "../../../../commons/library/utils";
import { IBoardDetailUIProps } from "./board-detail.types";
import TopButtonPage from "../../../commons/topButton";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <TopButtonPage />
      <BackButtonComponent />
      <S.PositionRow style={{ marginBottom: "2rem" }}>
        <S.WriterButton
          onClick={props.OnClickEdit}
          style={{ marginRight: "1rem" }}
        >
          수정
        </S.WriterButton>
        <S.WriterButton onClick={props.OnClickDelete}>삭제</S.WriterButton>
      </S.PositionRow>
      <S.BackGround>
        <S.WriterInfo>
          <S.PositionRow>
            <S.ProfileImg
              src={
                props.data?.fetchBoard?.user?.picture
                  ? `https://storage.googleapis.com/${props.data?.fetchBoard?.user?.picture}`
                  : "/defaultProfileImg.png"
              }
            />
            <S.UserId>{props.data?.fetchBoard?.writer}</S.UserId>
          </S.PositionRow>
          <S.UserId>
            {getTimeForTodayDate(props.data?.fetchBoard?.createdAt)}
          </S.UserId>
        </S.WriterInfo>
        <S.MainImg
          src={
            props.data?.fetchBoard?.images[0]
              ? `https://storage.googleapis.com/${props.data?.fetchBoard?.images[0]}`
              : "/defaultProfileImg.png"
          }
        ></S.MainImg>
        <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>

        <S.PositionRow
          style={{ padding: " 2rem 5rem", borderBottom: "1px solid #c4c4c4" }}
        >
          <div>
            <S.UserId style={{ lineHeight: "2rem", textAlign: "center" }}>
              {props.data?.fetchBoard?.dislikeCount}
            </S.UserId>
            <S.BadIcon onClick={props.DisLikeButton} />
          </div>
          <div style={{ marginLeft: "2rem" }}>
            <S.UserId
              style={{
                lineHeight: "2rem",
                textAlign: "center",
              }}
            >
              {props.data?.fetchBoard?.likeCount}
            </S.UserId>
            <S.GoodIcon onClick={props.LikeButton} />
          </div>
        </S.PositionRow>
      </S.BackGround>
    </S.Wrapper>
  );
}
