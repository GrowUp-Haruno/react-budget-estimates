import { HStack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { PrimaryButton, SecondaryButton } from "../atoms/Button";

export const DetailButton: FC<{ onClick?: () => void }> = (props) => {
  return <PrimaryButton {...props}>詳細</PrimaryButton>;
};

export const ChangeDeleteButton: FC = () => {
  return (
    <HStack justify="end">
      <PrimaryButton>変更</PrimaryButton>
      <SecondaryButton>削除</SecondaryButton>
    </HStack>
  );
};

export const OptionButton: FC<{
  children: ReactNode;
  index: number;
  callback: (index: number) => void;
}> = ({ index, callback, children }) => {
  return (
    <PrimaryButton onClick={() => callback(index)}>{children}</PrimaryButton>
  );
};
