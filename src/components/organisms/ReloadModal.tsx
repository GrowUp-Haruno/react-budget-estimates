import { FC } from "react";
import { PrimaryModal } from "../atoms/Modal";
import { PrimaryText } from "../atoms/Text";
import { OkButon } from "../molecules/CustomButton";
import { ReloadModalProps } from "../../commons/types";

export const ReloadModal: FC<ReloadModalProps> = ({ reloadModalDisclosure, onUpdateOk }) => {
  return (
    <PrimaryModal
      title="新バージョンリリース"
      Body={<PrimaryText>アプリの新バージョンがリリースされました。</PrimaryText>}
      Foot={<OkButon onClick={onUpdateOk} />}
      modalDisclosure={reloadModalDisclosure}
    />
  );
};
