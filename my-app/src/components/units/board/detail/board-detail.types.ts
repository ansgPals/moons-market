import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  OnClickEdit: () => void;
  OnClickDelete: () => void;
  data: Pick<IQuery, "fetchBoard">;
  DisLikeButton: () => void;
  LikeButton: () => void;
  writeUser: boolean;
}
