import { HStack } from "@chakra-ui/react";
import { FC } from "react";
import { PrimaryButton, SecondaryButton } from "../atoms/Button";

export const DetailButton: FC<{ onClick?: () => void }> = (props) => {
  return <PrimaryButton {...props}>詳細</PrimaryButton>;
};
export const CloseButon: FC<{ onClick?: () => void }> = (props) => {
  return <SecondaryButton {...props}>閉じる</SecondaryButton>;
};

export const ChangeDeleteButton: FC<{
  handleChange: () => void;
  handleDelete: () => void;
}> = ({ handleChange, handleDelete }) => {
  return (
    <HStack justify="end">
      <PrimaryButton onClick={handleChange}>変更</PrimaryButton>
      <SecondaryButton onClick={handleDelete}>削除</SecondaryButton>
    </HStack>
  );
};
