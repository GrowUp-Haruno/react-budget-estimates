import { FC } from "react";
import { ReloadModal } from "../organisms/ReloadModal";
import { ReloadPromptProps } from "../../commons/types";

export const ReloadPrompt: FC<ReloadPromptProps> = ({ reloadModalDisclosure, onUpdateOk }) => {
  return <ReloadModal reloadModalDisclosure={reloadModalDisclosure} onUpdateOk={onUpdateOk} />;
};
