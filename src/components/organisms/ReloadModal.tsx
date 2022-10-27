import { UseDisclosureReturn } from "@chakra-ui/react";
import { FC } from "react";
import { PrimaryModal } from "../atoms/Modal";
import { PrimaryText } from "../atoms/Text";
import { OkButon } from "../molecules/CustomButton";

export const ReloadModal: FC<{
  reloadModalDisclosure: UseDisclosureReturn;
  onUpdateOk?: () => void;
}> = ({ reloadModalDisclosure,  onUpdateOk }) => {
  return (
    <PrimaryModal
      title="新バージョンリリース"
      Body={<PrimaryText>アプリの新バージョンがリリースされました。</PrimaryText>}
      Foot={<OkButon onClick={onUpdateOk} />}
      modalDisclosure={reloadModalDisclosure}
    />
  );
};
