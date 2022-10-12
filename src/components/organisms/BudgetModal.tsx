import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryModal } from "../atoms/Modal";
import { ChangeButton, CloseButon } from "../molecules/CustomButton";
import { DeleteCheckbox } from "../molecules/CustomCheckbox";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  onBudgetDetailDelete: (index: number) => void;
  budgetModalRecords: recordsType;
}> = ({ isOpen, onClose, onBudgetDetailDelete, budgetModalRecords }) => {
  return (
    <PrimaryModal
      title="予算設定"
      Body={
        <DataGrid
          columnNames={["削除", "内容", "料金", ""]}
          records={budgetModalRecords}
          frontCheckbox={{ Component: DeleteCheckbox, callback: onBudgetDetailDelete }}
          backButton={{ Component: ChangeButton, callback: () => {} }}
        />
      }
      Foot={<CloseButon onClick={onClose} />}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
