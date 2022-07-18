import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import NewProductUI from "./newProduct.presenter";

import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./newProduct.query";
import { useRouter } from "next/router";

import {
  IEditValues,
  IFormValues,
  ImyUpdateUseditemInput,
  INewProductContainerProps,
} from "./newProduct.type";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { kakaoMap } from "../../libraries/kakao-map";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력 사항입니다."),
  contents: yup.string().required("상세내용은 필수 입력 사항입니다."),
  price: yup.number().required("가격은 필수 입력 사항입니다."),
});

export default function NewProductContainer(props: INewProductContainerProps) {
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    resolver: !props.isEdit && yupResolver(schema),
    mode: "onChange",
  });
  const [newId, setNewId] = useState<any>("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [add, setAdd] = useState("");
  const [hashArr, setHashArr] = useState([]);
  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };
  const onClickTag = (el: string) => () => {
    const index = hashArr.indexOf(el);
    const newhashArr = [...hashArr];
    newhashArr.splice(index, 1);
    setHashArr(newhashArr);
  };

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);

  const router = useRouter();

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const PutOk = async (data: IFormValues) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: String(data.name),
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            images: fileUrls,
            tags: hashArr,
            useditemAddress: {
              addressDetail: add ? data.addressDetail : "",
              address: add,
            },
          },
        },
      });
      setNewId(result.data?.createUseditem._id);
      Modal.info({ content: `상품이 등록되었습니다!` });
      router.push(`/product/${result.data?.createUseditem._id}`);
    } catch (error: any) {
      alert(error);
    }
  };

  const EditOk = async (editD: IEditValues) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    const myUpdateUseditemInput: ImyUpdateUseditemInput = {};
    const myconstiables = {
      useditemId: String(router.query.productId),
      updateUseditemInput: myUpdateUseditemInput,
    };

    if (editD.name) {
      myUpdateUseditemInput.name = editD.name;
    }
    if (editD.price) {
      myUpdateUseditemInput.price = Number(editD.price);
    }
    if (editD.contents) {
      myUpdateUseditemInput.contents = editD.contents;
    }
    if (editD.remarks) {
      myUpdateUseditemInput.remarks = editD.remarks;
    }
    if (isChangedFiles) {
      myUpdateUseditemInput.images = fileUrls;
    }
    if (
      editD.addressDetail ||
      props.data?.fetchUseditem.useditemAddress.address !== add
    ) {
      myUpdateUseditemInput.useditemAddress = {};
      if (editD.addressDetail)
        myUpdateUseditemInput.useditemAddress.addressDetail =
          editD.addressDetail;
      if (props.data?.fetchUseditem.useditemAddress.address !== add)
        myUpdateUseditemInput.useditemAddress.address = add;
    }
    try {
      await updateUseditem({
        variables: myconstiables,
      });

      Modal.info({ content: `상품이 수정되었습니다!` });
      router.push(`/product/${router.query.productId}`);
    } catch (error) {
      console.log(editD);
      Modal.error({ content: `${error}` });
    }
  };
  const Exit = () => {
    router.push(`/product/${newId}`);
  };
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
    if (props.data?.fetchUseditem) {
      reset({ contents: props.data?.fetchUseditem.contents });
    }
    if (props.data?.fetchUseditem.useditemAddress) {
      setAdd(props.data?.fetchUseditem.useditemAddress.address);
    }
    if (props.data?.fetchUseditem.tags) {
      setHashArr(props.data?.fetchUseditem.tags);
    }
  }, [props.data]);

  useEffect(() => {
    kakaoMap(add);
  }, [add]);

  const [modalOpen, setModalOpen] = useState(false);

  const onModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  const onClickPostNumber = () => {
    onModalOpen();
  };

  const clickPostNumber = (data: any) => {
    setAdd(data.address);

    onModalOpen();
  };

  return (
    <>
      <NewProductUI
        Exit={Exit}
        PutOk={PutOk}
        onChangeFileUrls={onChangeFileUrls}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        isEdit={props.isEdit}
        fileUrls={fileUrls}
        data={props.data}
        EditOk={EditOk}
        onChangeContents={onChangeContents}
        getValues={getValues}
        onClickPostNumber={onClickPostNumber}
        onModalOpen={onModalOpen}
        modalOpen={modalOpen}
        clickPostNumber={clickPostNumber}
        add={add}
        onKeyUpHash={onKeyUpHash}
        hashArr={hashArr}
        onClickTag={onClickTag}
      />
    </>
  );
}
