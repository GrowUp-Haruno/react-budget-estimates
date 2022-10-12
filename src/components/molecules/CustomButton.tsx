// import { HStack } from "@chakra-ui/react";
import { FC } from "react";
import { PrimaryButton, SecondaryButton } from "../atoms/Button";

export const DetailButton: FC<{ onClick?: () => void }> = (props) => {
  return <PrimaryButton {...props}>詳細</PrimaryButton>;
};
export const ChangeButton: FC<{ onClick?: () => void }> = (props) => {
  return <PrimaryButton {...props}>変更</PrimaryButton>;
};
export const DeleteButton: FC<{ onClick?: () => void }> = (props) => {
  return <SecondaryButton {...props}>削除</SecondaryButton>;
};
export const AddButton: FC<{ onClick?: () => void }> = (props) => {
  return <PrimaryButton {...props}>追加</PrimaryButton>;
};
export const CloseButon: FC<{ onClick?: () => void }> = (props) => {
  return <SecondaryButton {...props}>閉じる</SecondaryButton>;
};
