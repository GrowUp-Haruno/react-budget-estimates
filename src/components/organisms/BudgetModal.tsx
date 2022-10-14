import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryModal } from "../atoms/Modal";
import { AddButton, ChangeButton, CloseButon } from "../molecules/CustomButton";
import { DeleteCheckbox } from "../molecules/CustomCheckbox";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  onBudgetDetailDelete: (index: number) => void;
  onBudgetDetailAdd: () => void;
  onBudgetDetailChange: (index: number) => void;
  onNumberInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  budgetModalRecords: recordsType;
}> = ({
  isOpen,
  onClose,
  onBudgetDetailDelete,
  onBudgetDetailAdd,
  onBudgetDetailChange,
  onNumberInputChange,
  onStringInputChange,
  budgetModalRecords,
}) => {
  return (
    <PrimaryModal
      title="予算設定"
      Body={
        <VStack>
          <DataGrid
            columnNames={["削除", "内容", "料金", ""]}
            records={budgetModalRecords}
            frontCheckbox={{ Component: DeleteCheckbox, callback: onBudgetDetailDelete }}
            backButton={{ Component: ChangeButton, callback: onBudgetDetailChange }}
            onNumberInputChange={onNumberInputChange}
            onStringInputChange={onStringInputChange}
          />
          <AddButton onClick={onBudgetDetailAdd} />
        </VStack>
      }
      Foot={<CloseButon onClick={onClose} />}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
