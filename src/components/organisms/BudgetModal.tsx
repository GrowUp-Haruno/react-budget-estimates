import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryModal } from "../atoms/Modal";
import { ChangeButton, CloseButon, DeleteButton } from "../molecules/Button";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  BudgetModalRecords: recordsType;
}> = ({ isOpen, onClose, BudgetModalRecords }) => {
  return (
    <PrimaryModal
      title="予算設定"
      Body={
        <DataGrid
          columnNames={["内容", "料金", ""]}
          records={BudgetModalRecords}
          OptionButtons={[
            { ButtonComponent: ChangeButton, callback: () => {} },
            { ButtonComponent: DeleteButton, callback: () => {} },
          ]}
        />
      }
      Foot={<CloseButon onClick={onClose} />}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
