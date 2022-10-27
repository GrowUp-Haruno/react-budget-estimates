import { FC } from "react";
import { ReloadPromptType } from "../../Pages/ReloadPrompt.hook";
import { ReloadModal } from "../organisms/ReloadModal";

const ReloadPrompt: FC<ReloadPromptType> = ({ reloadModalDisclosure, onUpdateOk }) => {
  return <ReloadModal reloadModalDisclosure={reloadModalDisclosure} onUpdateOk={onUpdateOk} />;
};

export default ReloadPrompt;
