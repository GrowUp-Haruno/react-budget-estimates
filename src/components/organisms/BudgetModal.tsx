import { UseDisclosureReturn, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryModal } from "../atoms/Modal";
import { AddButton, ClosePopButton } from "../molecules/CustomButton";
import { DeleteCheckbox } from "../molecules/CustomCheckbox";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetModal: FC<{
  onBudgetDetailDelete: (index: number) => void;
  onBudgetDetailAdd: () => void;
  onNumberInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  budgetModalRecords: recordsType;
  popButtonDisclosure: UseDisclosureReturn;
  modalDisclosure: UseDisclosureReturn;
}> = ({
  onBudgetDetailDelete,
  onBudgetDetailAdd,
  onNumberInputChange,
  onStringInputChange,
  budgetModalRecords,
  popButtonDisclosure,
  modalDisclosure,
}) => {
  return (
    <PrimaryModal
      title="予算設定"
      Body={
        <VStack spacing={8}>
          <DataGrid
            columnNames={["削除", "内容", "料金"]}
            records={budgetModalRecords}
            frontCheckbox={{ Component: DeleteCheckbox, callback: onBudgetDetailDelete }}
            onNumberInputChange={onNumberInputChange}
            onStringInputChange={onStringInputChange}
          />
          <AddButton onClick={onBudgetDetailAdd} w="full" />
          <ClosePopButton noCallback={() => {}} yesCallback={() => {}} popButtonDisclosure={popButtonDisclosure} />
        </VStack>
      }
      // Foot={<CloseButon onClick={onClose} />}
      modalDisclosure={modalDisclosure}
    />
  );
};
