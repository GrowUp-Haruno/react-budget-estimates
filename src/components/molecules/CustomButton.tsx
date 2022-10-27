import { ButtonProps, forwardRef, UseDisclosureReturn } from "@chakra-ui/react";
import { FC } from "react";
import { PrimaryButton, PrimaryPopButton, SecondaryButton } from "../atoms/Button";

export type CustomButtonProps = Omit<ButtonProps, "children" | "colorScheme">;

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
export const CloseButton = forwardRef<CustomButtonProps, "button">((props, ref) => {
  return (
    <SecondaryButton {...props} ref={ref}>
      閉じる
    </SecondaryButton>
  );
});
export const SaveButon = forwardRef<CustomButtonProps, "button">((props, ref) => {
  return (
    <PrimaryButton {...props} ref={ref}>
      保存
    </PrimaryButton>
  );
});
export const YesButon: FC<CustomButtonProps> = (props) => {
  return <PrimaryButton {...props}>はい</PrimaryButton>;
};
export const OkButon: FC<CustomButtonProps> = (props) => {
  return <PrimaryButton {...props}>OK</PrimaryButton>;
};
export const NoButon: FC<CustomButtonProps> = (props) => {
  return <SecondaryButton {...props}>いいえ</SecondaryButton>;
};

export const ClosePopButton: FC<{
  onYes?: () => void;
  onNo?: () => void;
  closePopButtonDisclosure: UseDisclosureReturn;
  isDisabled?: boolean;
}> = ({ onYes = () => {}, onNo = () => {}, closePopButtonDisclosure, isDisabled }) => {
  return (
    <PrimaryPopButton
      TriggerButton={CloseButton}
      title="確認"
      message="変更せずに閉じますか？"
      footerButtons={[
        { Component: YesButon, callback: onYes },
        { Component: NoButon, callback: onNo },
      ]}
      popButtonDisclosure={closePopButtonDisclosure}
      isDisabled={isDisabled}
    />
  );
};

export const SavePopButton: FC<{
  onYes?: () => void;
  onNo?: () => void;
  savePopButtonDisclosure: UseDisclosureReturn;
  isDisabled?: boolean;
}> = ({ onYes = () => {}, onNo = () => {}, savePopButtonDisclosure, isDisabled }) => {
  return (
    <PrimaryPopButton
      TriggerButton={SaveButon}
      title="確認"
      message="保存しますか？"
      footerButtons={[
        { Component: YesButon, callback: onYes },
        { Component: NoButon, callback: onNo },
      ]}
      popButtonDisclosure={savePopButtonDisclosure}
      isDisabled={isDisabled}
    />
  );
};
