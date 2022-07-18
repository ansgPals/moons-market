import { ChangeEvent, MouseEvent } from "react";

export interface ICommentList {
  el: any;
}

export interface IMyUpDate {
  contents?: string;
  rating?: number;
}

export interface IMyVariables {
  updateBoardCommentInput: IMyUpDate;
  password: string;
  boardCommentId: string;
}
