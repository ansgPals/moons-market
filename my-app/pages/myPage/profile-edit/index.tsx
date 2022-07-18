import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";

import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationImage } from "../../../src/components/commons/upload-image/Uploads01.validation";

export const BackGround = styled.div`
  width: 80rem;
  border-radius: 1rem;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileImage = styled.img`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  object-fit: cover;

  cursor: pointer;
`;
export const RightBox = styled.div`
  margin-left: 10rem;
`;

export const Name = styled.input`
  font-size: 3rem;
  width: 25rem;
`;

export const Email = styled.div`
  font-size: 3rem;
  color: #bdbdbd;
`;

export const Point = styled.div`
  font-size: 2rem;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EditButton = styled.button`
  background-color: #6600ff;
  width: 25rem;
  height: 7rem;
  font-size: 3rem;
  border-radius: 10px;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
`;
export const NameErr = styled.div`
  color: red;
  font-size: 2rem;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
      picture
    }
  }
`;
const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export interface ImyUpdateUserInput {
  name?: string;
  picture?: string;
}
export interface ImyVariables {
  name?: string;
  picture?: string;
}
export default function ProfileEditPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN, { variables: {} });
  const router = useRouter();
  const [updateUser] = useMutation(UPDATE_USER);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState<File | undefined>();

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangfile = (event) => {
    const file = checkValidationImage(event.target.files?.[0]);

    if (!file) {
      alert("파일이 없습니다.");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        setImgUrl(data.target?.result);
        setFile(file);
      }
    };
  };
  const onChangeName = (event) => {
    if (!event.target.value) {
      setNameErr("이름은 필수사항입니다.");
    }
    if (event.target.value) {
      setNameErr("");
      setName(event.target.value);
    }
  };
  const onClickExit = () => {
    router.push("/myPage");
  };

  const onClickEditButton = async () => {
    const myVariables: ImyVariables = {};
    const fileChange =
      imgUrl !==
      `https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`;
    if (fileChange) {
      await uploadFile({ variables: { file } });

      myVariables.picture = String(result.data?.uploadFile.url);
    }
    if (data?.fetchUserLoggedIn.name !== name) {
      myVariables.name = name;
    }
    if (!fileChange && data?.fetchUserLoggedIn.name === name) {
      Modal.info({ content: "변경사항이없습니다!" });
    }
    try {
      await updateUser({
        variables: { updateUserInput: myVariables },
      });
      Modal.info({ content: "프로필이 수정되었습니다." });
      router.push(`/myPage`);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    if (data?.fetchUserLoggedIn.picture) {
      setImgUrl(
        `https://storage.googleapis.com/${data?.fetchUserLoggedIn.picture}`
      );
    }
    setName(data?.fetchUserLoggedIn.name);
  }, [data]);
  return (
    <>
      <BackGround>
        <Row>
          {imgUrl.length ? (
            <ProfileImage onClick={onClickUpload} src={imgUrl} />
          ) : (
            <ProfileImage
              onClick={onClickUpload}
              src={"/defaultProfileImg.png"}
            />
          )}

          <RightBox>
            <input
              style={{ display: "none" }}
              type="file"
              onChange={onChangfile}
              ref={fileRef}
            />
            <Email>{data?.fetchUserLoggedIn.email}</Email>{" "}
            <Name
              defaultValue={data?.fetchUserLoggedIn.name}
              onChange={onChangeName}
            ></Name>
            <NameErr>{nameErr}</NameErr>
            <Point>
              POINT :{" "}
              {data?.fetchUserLoggedIn.userPoint.amount
                ? data?.fetchUserLoggedIn.userPoint.amount
                : 0}{" "}
              MP
            </Point>
          </RightBox>
        </Row>
        <ButtonBox>
          <EditButton
            style={{ backgroundColor: "#bcbebc", marginRight: "2rem" }}
            onClick={onClickExit}
          >
            취소
          </EditButton>
          <EditButton onClick={onClickEditButton}>수정완료</EditButton>
        </ButtonBox>
      </BackGround>
    </>
  );
}
