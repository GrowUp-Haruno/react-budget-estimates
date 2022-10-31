import { forwardRef } from "@chakra-ui/react";
import { FC } from "react";
import { CustomButtonProps, PopButtonProps } from "../../commons/types";
import { PrimaryButton, PrimaryPopButton, SecondaryButton } from "../atoms/Button";

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
export const DeleteDBButon = forwardRef<CustomButtonProps, "button">((props, ref) => {
  return (
    <SecondaryButton {...props} ref={ref}>
      全てのデータを削除
    </SecondaryButton>
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

export const ClosePopButton: FC<PopButtonProps> = ({ onYes = () => {}, onNo = () => {}, disclosure, isDisabled }) => {
  return (
    <PrimaryPopButton
      TriggerButton={CloseButton}
      title="確認"
      message="変更せずに閉じますか？"
      footerButtons={[
        { Component: YesButon, callback: onYes },
        { Component: NoButon, callback: onNo },
      ]}
      popButtonDisclosure={disclosure}
      isDisabled={isDisabled}
    />
  );
};

export const SavePopButton: FC<PopButtonProps> = ({ onYes = () => {}, onNo = () => {}, disclosure, isDisabled }) => {
  return (
    <PrimaryPopButton
      TriggerButton={SaveButon}
      title="確認"
      message="保存しますか？"
      footerButtons={[
        { Component: YesButon, callback: onYes },
        { Component: NoButon, callback: onNo },
      ]}
      popButtonDisclosure={disclosure}
      isDisabled={isDisabled}
    />
  );
};

export const DeleteDBPopButton: FC<PopButtonProps> = ({
  onYes = () => {},
  onNo = () => {},
  disclosure,
  isDisabled,
}) => {
  return (
    <PrimaryPopButton
      TriggerButton={DeleteDBButon}
      title="データ削除"
      message="予算データを削除しますか？"
      footerButtons={[
        { Component: YesButon, callback: onYes },
        { Component: NoButon, callback: onNo },
      ]}
      popButtonDisclosure={disclosure}
      isDisabled={isDisabled}
    />
  );
};
