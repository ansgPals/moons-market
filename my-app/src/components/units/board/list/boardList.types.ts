import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

//UI
export interface IBoardListUIProps {
  onClickGoBoard: (id: string) => () => void;
  GoWriteBoard: () => void;
  data?: Pick<IQuery, "fetchBoards">;
  keyWord: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onLoadMore: () => void;
}
//컨테이너
export interface IBoardList {
  onClickGoBoard: () => void;
}
