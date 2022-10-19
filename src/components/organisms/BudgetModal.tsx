import { UseDisclosureReturn, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { recordsType } from "../../Pages/App.model";
import { PrimaryModal } from "../atoms/Modal";
import { AddButton, CloseButton, ClosePopButton } from "../molecules/CustomButton";
import { DeleteCheckbox } from "../molecules/CustomCheckbox";
import { DataGrid } from "../molecules/DataGrid";

export const BudgetModal: FC<{
  onBudgetDetailDelete: (index: number) => void;
  onBudgetDetailAdd: () => void;
  onModalClose: () => void;
  onNumberInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onStringInputChange: (recordIndex: number, fieldIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  budgetModalRecords: recordsType;
  closePopButtonDisclosure: UseDisclosureReturn;
  budgetModalDisclosure: UseDisclosureReturn;
  yesCallback?: () => void;
  noCallback?: () => void;
  isUpdate: boolean;
}> = ({
  onBudgetDetailDelete,
  onBudgetDetailAdd,
  onNumberInputChange,
  onStringInputChange,
  onModalClose,
  budgetModalRecords,
  closePopButtonDisclosure,
  budgetModalDisclosure,
  yesCallback = () => {},
  noCallback = () => {},
  isUpdate,
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
        </VStack>
      }
      Foot={
        isUpdate ? (
          <ClosePopButton
            noCallback={noCallback}
            yesCallback={yesCallback}
            closePopButtonDisclosure={closePopButtonDisclosure}
          />
        ) : (
          <CloseButton onClick={onModalClose} w="full" />
        )
      }
      modalDisclosure={budgetModalDisclosure}
      isModalCloseBUtton
    />
  );
};
