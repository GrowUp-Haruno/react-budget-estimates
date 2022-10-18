import { ButtonProps, forwardRef } from "@chakra-ui/react";
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
export const YesButon: FC<CustomButtonProps> = (props) => {
  return <PrimaryButton {...props}>はい</PrimaryButton>;
};
export const NoButon: FC<CustomButtonProps> = (props) => {
  return <SecondaryButton {...props}>いいえ</SecondaryButton>;
};

export const ClosePopButton: FC<{ yesCallback?: () => void; noCallback?: () => void }> = ({
  yesCallback,
  noCallback,
}) => {
  return (
    <PrimaryPopButton
      TriggerButton={CloseButton}
      title="確認"
      message="変更せずに閉じますか？"
      footerButtons={[
        { Component: YesButon, callback: () => {} },
        { Component: NoButon, callback: () => {} },
      ]}
    />
  );
};
