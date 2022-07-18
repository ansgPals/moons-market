import * as MyStyle from "./boardWrite.styles";
import { INewBoardUIProps } from "./boardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/upload-image/Uploads01.container";
import { v4 as uuid } from "uuid";

export default function NewBoardUI(props: INewBoardUIProps) {
  return (
    <MyStyle.BackGround>
      <MyStyle.MyTitle>MY STYLE BOARD</MyStyle.MyTitle>

      <MyStyle.MyBody>
        <MyStyle.BackTop>
          <MyStyle.PositionCol>
            <MyStyle.MyName>작성자</MyStyle.MyName>
            <MyStyle.PutName
              placeholder="이름을 입력하세요"
              id="writer"
              type="text"
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={props.data?.fetchBoard.writer ? true : false}
            ></MyStyle.PutName>
            <MyStyle.MyErr>{props.inputsErr.writer}</MyStyle.MyErr>
          </MyStyle.PositionCol>
          <MyStyle.PositionCol>
            <MyStyle.MyName>비밀번호</MyStyle.MyName>
            <MyStyle.PutName
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangeInputs}
            ></MyStyle.PutName>
            <MyStyle.MyErr>{props.inputsErr.password}</MyStyle.MyErr>
          </MyStyle.PositionCol>
        </MyStyle.BackTop>
        <MyStyle.TitleBox>
          <MyStyle.MyName>제목</MyStyle.MyName>
          <MyStyle.PutTitle
            placeholder="제목을 작성해주세요."
            id="title"
            type="text"
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.title}
          ></MyStyle.PutTitle>
          <MyStyle.MyErr>{props.inputsErr.title}</MyStyle.MyErr>
        </MyStyle.TitleBox>
        <MyStyle.TextBox>
          <MyStyle.MyName>내용</MyStyle.MyName>
          <MyStyle.PutText
            placeholder="내용을 작성해주세요."
            id="contents"
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.contents}
          ></MyStyle.PutText>
          <MyStyle.MyErr>{props.inputsErr.contents}</MyStyle.MyErr>
        </MyStyle.TextBox>

        <MyStyle.PhotoBox>
          <MyStyle.MyName>사진첨부</MyStyle.MyName>

          <MyStyle.GrayBoxBox>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuid()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </MyStyle.GrayBoxBox>
        </MyStyle.PhotoBox>
      </MyStyle.MyBody>
      <MyStyle.InBox
        onClick={props.isEdit ? props.EditOk : props.PutOk}
        isActive={props.isEdit ? true : props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </MyStyle.InBox>
    </MyStyle.BackGround>
  );
}
