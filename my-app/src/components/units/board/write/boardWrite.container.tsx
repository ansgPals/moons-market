import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import NewBoardUI from "./boardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.queries";
import { ChangeEvent } from "react";
import {
  IMyVariables,
  INewBoardConProps,
  IUpDateBoardInput,
} from "./boardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

export default function NewBoard(props: INewBoardConProps) {
  const [isActive, setIsActive] = useState(false);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [inputsErr, setInputsErr] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const router = useRouter();

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newInputs = { ...inputs, [event.target.id]: event.target.value };
    setInputs(newInputs);

    if (event.target.value)
      setInputsErr((prev) => ({ ...prev, [event.target.id]: "" }));

    const isActive = Object.values(newInputs).every((el) => el);
    if (isActive || (props.isEdit && inputs.password)) setIsActive(isActive);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const PutOk = async () => {
    if (inputs.writer === "") {
      inputsErr.writer = "이름을 입력하세요";
    }
    if (inputs.password === "") {
      inputsErr.password = "비밀번호를";
    }
    if (inputs.title === "") {
      inputsErr.title = "제목을 입력하세요";
    }

    if (inputs.contents === "") {
      setInputsErr({ ...inputsErr, contents: "내용을 입력하세요" });
    }

    if (
      inputs.contents !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      inputs.writer !== ""
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,

              images: fileUrls,
            },
          },
        });

        alert("등록되었습니다.");
        router.push(`/board/${result.data?.createBoard._id}`);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const EditOk = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !inputs.writer &&
      !inputs.contents &&
      !inputs.title &&
      !isChangedFiles
    ) {
      alert("수정내용이없습니다.");
      return;
    }
    if (inputs.password === "") {
      setInputsErr({ ...inputsErr, password: "비밀번호를 입력하세요" });
      alert("비밀번호를 입력하세요.");
      return;
    }

    const myUpdateBoardInput: IUpDateBoardInput = {};

    const myVariables: IMyVariables = {
      boardId: router.query.id,
      password: inputs.password,
      updateBoardInput: myUpdateBoardInput,
    };
    if (inputs.title) myUpdateBoardInput.title = inputs.title;
    if (inputs.contents) myUpdateBoardInput.contents = inputs.contents;
    if (isChangedFiles) myUpdateBoardInput.images = fileUrls;

    try {
      await updateBoard({
        variables: myVariables,
      });
      alert("수정되었습니다.");
      router.push(`/board/${router.query.id}`);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <NewBoardUI
      inputsErr={inputsErr}
      PutOk={PutOk}
      isActive={isActive}
      isEdit={props.isEdit}
      EditOk={EditOk}
      data={props.data}
      pass={inputs.password}
      onChangeInputs={onChangeInputs}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
