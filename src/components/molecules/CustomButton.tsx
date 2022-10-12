// import { HStack } from "@chakra-ui/react";
import { ButtonProps } from "@chakra-ui/react";
import { FC } from "react";
import { PrimaryButton, SecondaryButton } from "../atoms/Button";

export const DetailButton: FC<{ onClick?: ButtonProps["onClick"] }> = (props) => {
  return <PrimaryButton {...props}>詳細</PrimaryButton>;
};
export const ChangeButton: FC<{ onClick?: ButtonProps["onClick"] }> = (props) => {
  return <PrimaryButton {...props}>変更</PrimaryButton>;
};
export const DeleteButton: FC<{ onClick?: ButtonProps["onClick"] }> = (props) => {
  return <SecondaryButton {...props}>削除</SecondaryButton>;
};
export const AddButton: FC<{ onClick?: ButtonProps["onClick"] }> = (props) => {
  return <PrimaryButton {...props}>追加</PrimaryButton>;
};
export const CloseButon: FC<{ onClick?: ButtonProps["onClick"] }> = (props) => {
  return <SecondaryButton {...props}>閉じる</SecondaryButton>;
};
