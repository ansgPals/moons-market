import { getTimeForTodayDate } from "../../../../commons/library/utils";
import * as S from "./board-list-item.style";

export default function BoardListItem({
  data,
  onClickEvent,
  keyWord,
}: {
  data: {
    _id?: string;
    title?: string;
    contents?: string;
    createdAt?: string;
    likeCount?: number;
    dislikeCount?: number;
    images?: string[];
    writer?: string;
    user?: {
      name?: string;
      picture?: string;
    };
  };
  onClickEvent: (id: string) => () => void;
  keyWord: string;
}) {
  return (
    <S.Wrapper onClick={onClickEvent(data?._id)}>
      <S.StyleImg
        src={
          data?.images[0]
            ? `https://storage.googleapis.com/${data?.images[0]}`
            : "/noimg.png"
        }
      />
      <S.PositionRow style={{ marginTop: "1rem" }}>
        <S.ProfileImg
          src={
            data?.user?.picture
              ? `https://storage.googleapis.com/${data?.user?.picture}`
              : "/defaultProfileImg.png"
          }
        />
        <S.UserId>{data?.writer}</S.UserId>
      </S.PositionRow>

      <S.TitleBox>
        {data?.title
          .replace(keyWord, `!@#$%${keyWord}!@#$%`)
          .split("!@#$%")
          .map((word: any, i: number) => (
            <S.Title key={i} isMatched={keyWord === word}>
              {word}
            </S.Title>
          ))}
      </S.TitleBox>
      <S.CreateAt>{getTimeForTodayDate(data?.createdAt)}</S.CreateAt>
    </S.Wrapper>
  );
}
