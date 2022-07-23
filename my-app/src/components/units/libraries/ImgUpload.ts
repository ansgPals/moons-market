import { Modal } from "antd";
import { ChangeEvent } from "react";
import { checkFileValidation } from "./validation";

export const ImgUpload = async (
  event: ChangeEvent<HTMLInputElement>,
  uploadFile: any
) => {
  const file = event.target.files?.[0];

  // ---------검증-----
  const isValid = checkFileValidation(file);
  if (!isValid) return;
  try {
    const result = await uploadFile({ variables: { file } });

    return result.data?.uploadFile.url;
  } catch (error: any) {
    Modal.error({ content: error.massage });
  }
};
