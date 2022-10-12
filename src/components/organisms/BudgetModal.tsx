import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryModal } from "../atoms/Modal";
import { ChangeButton, CloseButon, DeleteButton } from "../molecules/CustomButton";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  onBudgetDetailDelete: (index: number) => void;
  BudgetModalRecords: recordsType;
}> = ({ isOpen, onClose, onBudgetDetailDelete, BudgetModalRecords }) => {
  return (
    <PrimaryModal
      title="予算設定"
      Body={
        <DataGrid
          columnNames={["内容", "料金", ""]}
          records={BudgetModalRecords}
          OptionButtons={[
            { ButtonComponent: ChangeButton, callback: () => {} },
            { ButtonComponent: DeleteButton, callback: onBudgetDetailDelete },
          ]}
        />
      }
      Foot={<CloseButon onClick={onClose} />}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
