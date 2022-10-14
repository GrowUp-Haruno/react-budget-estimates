import { FC } from "react";
import { PrimaryButton, PrimaryButtonProps, SecondaryButton } from "../atoms/Button";

export type CustomButtonProps = Omit<PrimaryButtonProps, "children">;

export const DetailButton: FC<CustomButtonProps> = (props) => {
  return <PrimaryButton {...props}>詳細</PrimaryButton>;
};
export const ChangeButton: FC<CustomButtonProps> = (props) => {
  return <PrimaryButton {...props}>変更</PrimaryButton>;
};
export const DeleteButton: FC<CustomButtonProps> = (props) => {
  return <SecondaryButton {...props}>削除</SecondaryButton>;
};
export const AddButton: FC<CustomButtonProps> = (props) => {
  return <PrimaryButton {...props}>追加</PrimaryButton>;
};
export const CloseButon: FC<CustomButtonProps> = (props) => {
  return <SecondaryButton {...props}>閉じる</SecondaryButton>;
};
